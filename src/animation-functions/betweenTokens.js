import { buildSpellFile, buildWeaponFile, buildExplosionFile } from "./common-functions/build-filepath.js"
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import { AAITEMCHECK } from "./item-arrays.js";
//import getVideoDimensionsOf from "../canvas-animation/video-metadata.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function betweenTokens(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    //console.log(JB2APATREONDB)
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    // Random Color pull given object path
    let randomProperty = function (obj) {
        let keys = Object.keys(obj);
        let keyLength = keys.length;
        let ranKey = Math.floor(Math.random() * keyLength);
        return keys[ranKey];
    };
    //Builds standard File Path
    let attack;
    if (AAITEMCHECK.ranged.includes(itemName)) {
        attack = await buildWeaponFile(obj01, itemName, handler.flags)
    } else {
        attack = await buildSpellFile(obj01, itemName, handler)
    }
    //console.log(attack)
    /*
    if (handler.flags.options.customPath01) {
        filePath = handler.flags.options.customPath01
    }
    console.log(filePath);
    */
    let sourceToken = handler.actorToken;
    let explosion = handler.flags.explosion ? await buildExplosionFile(obj01, handler) : false;
    let scale = explosion.scale ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let finalFile = handler.color === "random" ? attack.file[randomProperty(attack.file)] : attack.file;
            let hit = handler.hitTargetsId.includes(target.id) ? false : true;

new Sequence()
    .effect()
        .atLocation(sourceToken)
        .reachTowards(target)
        .JB2A()
        .repeats(attack.loops, attack.loopDelay)
        .missed(hit)
        .name("animation")
        .belowTokens(attack.level)
        .addOverride(
            async (effect, data) => {
                switch (true) {
                    case data._distance <= 1400:
                        data.file = finalFile['30']
                        break;
                    case data._distance > 2600:
                        data.file = finalFile['90']
                        break;
                    default:
                        data.file = finalFile['60']
                }
                return data
            }
        )
        .effect()
            .atLocation("animation")
            //.file(explosion.file)
            .scale({x: scale, y: scale})
            .delay(((attack.metadata.duration * 1000) / 2) + handler.explosionDelay)
            .repeats(attack.loops, attack.loopDelay)
            .belowTokens(handler.explosionLevel)
            .playIf(() => {return explosion })
            .addOverride(async (effect, data) => {
                if (explosion) {
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
