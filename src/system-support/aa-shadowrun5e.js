import { AnimationState }   from "../AnimationState.js";
import { debug }            from "../constants/constants.js";
import { trafficCop }       from "../router/traffic-cop.js";
import AAHandler            from "../system-handlers/workflow-data.js";
import { getRequiredData }  from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {checkChatMessage(msg) });
}

const TEST = {
    Melee: 'MeleeAttackTest',
    Thrown: 'ThrownAttackTest',
    Range: 'RangedAttackTest',
    Defense: 'PhysicalDefenseTest',
    Spell: 'SpellCastingTest',
    Drain: 'DrainTest',
    Skill: 'SkillTest',
}

/* 
    This method handles ShadowRun 5e system specific behavior.
    - For weapons, as the system has hundreds of weapon items with different names,
        a second lookup if performed with the skill name to allow a quick setup while still offering the main base behavior.
    - For spells, we use the same trick with the magic school as a fallback
 */
async function checkChatMessage(msg) {
    if (msg.user.id !== game.user.id || !AnimationState.enabled) { 
        return;
    }

    const test = await game.shadowrun5e?.test?.fromMessage(msg.id);
    if (!test) {
        return;
    }

    // #1 Let's create the compiledData based on the test type
    const compiledData = await computeCompiledData(msg, test);
    if (!compiledData) { 
        return;
    }

    // #2 Evaluate if the item is a match in the AA configuration
    if (await tryAnnimationWith(compiledData)) {
        return;
    }

    // #3 If not, let's find a match using TEST-specific means as item name
    switch (test.type) {
        case TEST.Spell:
            // For spells, the category (health / combat / illusion /...) is a good fallback
            const category = compiledData.item?.system?.category;
            if (category && await tryAnnimationWith(compiledData, category)) {
                return;
            }
            break;
    }

    // #4 Last, we can try the skill. Use example:
    //  - when doing perception tests
    //  - when going sneaking tests
    //  - ...
    const skill = compiledData.item?.getActionSkill()
    if (skill && await tryAnnimationWith(compiledData, skill)) {
        return;
    }
}

async function computeCompiledData(msg, test)
{
    let item;
    switch (test.type) {
        case TEST.Skill:
            item =  {
                name: test.data?.action?.skill
            };
            break;

        // In case of drain test, the item is the same as the Spell casting test, it's wrong
        case TEST.Drain:
            item = {
                name: 'drain',
            }
            break;

        // In case of defense test, the item is the attacker's one. Not good.
        case TEST.Defense:
            return;

        default:
            const itemUuid = test.data.sourceItemUuid;
            item = await fromUuid(itemUuid);
            if (!item) {
                return;
            }
    }

    const compiledData = await getRequiredData({
        item: item,
        actorId: msg.speaker?.actor,
        tokenId: msg.speaker?.token,
        workflow: msg,
    });

    if (!compiledData) {
        return;
    }
    
    if (test.type == TEST.Range) {
        // In case of range, depending on the firing mode, multiple bullets might be fired.
        // Let's override the repeat with that information.

        // TODO: use test data once SR5 System has fixed the missing information
        // let bulletCount = test.data.fireMode.value;
        const message = game.messages.get(msg.id);
        const bulletCount = message.flags?.shadowrun5e?.TestData?.data?.fireMode?.value;
        if (bulletCount && bulletCount > 1)
        {
            compiledData.overrideRepeat = bulletCount;
        }
    }

    return compiledData;
}

async function tryAnnimationWith(compiledData, itemNameOverride) {
    if (itemNameOverride) {
        compiledData.item = {
            name: itemNameOverride
        }
    }

    const handler = await AAHandler.make(compiledData)
    if (handler?.item && handler.sourceToken) { 
        trafficCop(handler);
        return true;
    }

    return;
}