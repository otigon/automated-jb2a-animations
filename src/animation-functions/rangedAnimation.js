import { buildRangedFile, buildAfterFile } from "./common-functions/build-filepath.js"
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
//import { AAITEMCHECK } from "./item-arrays.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function rangedAnimations(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    
    //console.log(JB2APATREONDB)
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

    //Builds standard File Path
    let attack = await buildRangedFile(jb2a, itemName, handler);
    console.log(attack)
    /*
    if (handler.flags.options.customPath01) {
        filePath = handler.flags.options.customPath01
    }
    console.log(filePath);
    */
    let sourceToken = handler.actorToken;
    //Builds after effect File Path
    let explosion = handler.explosion ? await buildAfterFile(jb2a, handler) : false;
    console.log(explosion);
    let scale = explosion.scale ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let hit = handler.hitTargetsId.includes(target.id) ? false : true;

new Sequence()
    .effect()
        .file(attack.file)
        .atLocation(sourceToken)
        .reachTowards(target)
        .JB2A()
        .randomizeMirrorY()
        .repeats(attack.loops, attack.loopDelay)
        .missed(hit)
        .name("animation")
        .belowTokens(attack.level)
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
            .repeats(attack.loops, attack.loopDelay)
            .belowTokens(handler.explosionLevel)
            .playIf(() => {return handler.explosion })
            .addOverride(async (effect, data) => {
                if (handler.explosion) {
                    data.file = explosion.file;
                }
                //console.log(data)
                return data;
            })
            .play()
                await wait(750)
        }
    }
    cast()
}
