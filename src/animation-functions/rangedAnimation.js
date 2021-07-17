import { buildRangedFile, buildAfterFile } from "./common-functions/build-filepath.js"
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function rangedAnimations(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    
    // Sets JB2A database and Global Delay
    let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName;
    switch (handler.convertedName) {
        case "dagger":
        case "handaxe":
        case "spear":
            itemName = "range" + itemName;
            console.log("adjusted name is " + itemName);
            break;
    }
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    //Builds Primary File Path and Pulls from flags if already set
    let attack = handler.flags.defaults?.primary !== undefined ? handler.flags.defaults.primary : await buildRangedFile(jb2a, itemName, handler);
    //console.log(attack)
    /*
    if (handler.flags.options.customPath01) {
        filePath = handler.flags.options.customPath01
    }
    console.log(filePath);
    */
    let sourceToken = handler.actorToken;

    //Builds Explosion File Path if Enabled, and pulls from flags if already set
    let explosion;
    if (handler.flags.explosion) {
        explosion = handler.flags.defaults?.explosion !== undefined ? handler.flags.defaults.explosion : await buildAfterFile(jb2a, handler)
    }

    //logging explosion Scale
    let scale = explosion?.scale ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            //Checks Range and sends it to Range Builder if true
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? false : true;
            } else {
                hit = false;
            }

new Sequence()
    .effect()
        .file("modules/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Regular_PurplePink_Caster_400x400.webm")
        .atLocation(sourceToken)
        .scale(handler.sourceScale)
        //.repeats(handler.sourceLoops, handler.sourceLoopDelay)
        .belowTokens(handler.sourceLevel)
        .waitUntilFinished(handler.sourceDelay)
        .playIf(handler.sourceEnable)
    .effect()
        .file(attack.file)
        .atLocation(sourceToken)
        .reachTowards(target)
        .JB2A()
        .randomizeMirrorY()
        .repeats(handler.animationLoops, handler.loopDelay)
        .missed(hit)
        .name("animation")
        .belowTokens(handler.animLevel)
        .addOverride(
            async (effect, data) => {
                console.log(data)
                return data
            }
        )
        //.waitUntilFinished(-500 + handler.explosionDelay)
    .effect()
        .atLocation("animation")
        //.file(explosion.file)
        .scale({x: scale, y: scale})
        .delay(500 + handler.explosionDelay)
        .repeats(handler.animationLoops, handler.loopDelay)
        .belowTokens(handler.explosionLevel)
        .playIf(() => {return handler.explosion })
        .addOverride(async (effect, data) => {
            if (handler.explosion) {
                data.file = explosion.file;
            }
            //console.log(data)
            return data;
        })
    .effect()
        .delay(handler.targetDelay)
        .file("modules/jb2a_patreon/Library/2nd_Level/Divine_Smite/DivineSmite_01_Dark_Purple_Target_400x400.webm")
        .atLocation(target)
        .scale(handler.targetScale)
        //.repeats(handler.targetLoops, handler.targetLoopDelay)
        .belowTokens(handler.targetLevel)
        .playIf(handler.targetEnable)
    .play()
    await wait(750)
        }
    }
    cast()
}
