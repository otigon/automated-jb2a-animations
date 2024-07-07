import { trafficCop } from "../router/traffic-cop.js"
import AAHandler from "../system-handlers/workflow-data.js";
import { getRequiredData } from "./getRequiredData.js";

export function systemHooks() {
    Hooks.on("createChatMessage", async (msg) => {
        if (msg.user.id !== game.user.id) {
            return
        };

        // is this good or necessary?
        if (msg.speaker?.scene !== game.scenes.current?.id) {
            return;
        }

        const data = {
            actor: msg.itemSource?.actor,
            actorId: msg.speaker?.actor,
            ammoId: msg.flags.pf1?.metadata?.rolls?.attacks?.map((attack) => attack.ammo?.id)[0],
            itemId: msg.flags.pf1?.metadata?.item,
            item: msg.itemSource,
            targets: (msg.flags.pf1?.metadata?.targets?.map(uuid => fromUuidSync(uuid)) ?? []).map(x => x.object),
            templateDataId: msg.flags.pf1?.metadata?.template,
            tokenId: msg.speaker?.token,
            workflow: msg,
        };
        let compiledData = await getRequiredData(data);

        // todo add ammo - looks like it might need to parsed out of the html content
        const item = compiledData.item;
        if (!item) {
            return;
        }

        // set up override for "action name"
        //  This is for cases like "Staff of Fire" that can cast "Fireball", "Burning Hands", "Wall of Fire"
        //  We want to use those specific action names because we don't want to cast "Fireball" but see a "Staff" thwack everyone 
        //     ...as funny as that would be 😛
        const actionId = msg.flags.pf1?.metadata?.action;
        if (item && actionId) {
            const actionName = item.actions?.get(actionId)?.name ?? '';
            if (actionName) {
                compiledData.overrideNames.push(actionName);
            }
        }

        if (item instanceof pf1.documents.item.ItemWeaponPF || item instanceof pf1.documents.item.ItemAttackPF) {
            // add weapon base types (i.e. if item "Fancy Magic Stick" is a base type "Quarterstaff" then we can fall back to quarterstaff)
            compiledData.extraNames.push(...(item.system.baseTypes || []));

            // fall back to weapon groups after base weapon name 
            const groupsOnItem = [
                ...(item.system.weaponGroups?.value || []).map((key) => pf1.config.weaponGroups[key]),
                ...(item.system.weaponGroups?.custom || []),
            ].filter((x) => !!x);
            compiledData.extraNames.push(...groupsOnItem);
        }

        runPF1(compiledData);
    });
}

async function runPF1(requiredData) {
    const handler = await AAHandler.make(requiredData)
    trafficCop(handler);
}