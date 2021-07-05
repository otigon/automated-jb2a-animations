import { buildSpellFile, buildWeaponFile, buildExplosionFile } from "./common-functions/build-filepath.js"
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import { AAITEMCHECK } from "./item-arrays.js";
import getVideoDimensionsOf from "../canvas-animation/video-metadata.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function betweenAnimation(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let itemName = handler.convertedName;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    var randomProperty = function (obj) {
        var keys = Object.keys(obj);
        var keyLength = keys.length;
        var ranKey = Math.floor(Math.random() * keyLength);
        return keys[ranKey];
    };
    let filePath;
    if (AAITEMCHECK.ranged.includes(itemName)) {
        filePath = buildWeaponFile(obj01, itemName, handler.flags)
    } else {
        filePath = buildSpellFile(obj01, itemName, handler.flags)
    }
    let explodeFile;
    if (handler.flags.explosion) {
        explodeFile = buildExplosionFile(obj01, handler.flags)
    }
    let explodeUnder = handler.flags.exAnimLevel;
    let sourceToken = handler.actorToken;
    var videoData = await getVideoDimensionsOf(filePath['30']);
    let duration = videoData.duration * 1000;
    let belowAnim = handler.flags.animLevel
    console.log(duration);

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let finalFile;
            if (handler.color === "random") {
                finalFile = filePath[randomProperty(filePath)]
            } else {
                finalFile = filePath;
            }
            let hit;
            if (handler.hitTargetsId.includes(target.id)) {
                hit = false
            } else { hit = true }
            if (handler.flags.explosion) {
                new Sequence()
                    .effect()
                    .atLocation(sourceToken)
                    .reachTowards(target)
                    .JB2A()
                    .repeats(3, 250)
                    .missed(hit)
                    .belowTokens(belowAnim)
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
                    .atLocation(target)
                    .file(explodeFile)
                    .missed(hit)
                    .delay(duration / 2)
                    .repeats(3, 250)
                    .belowTokens(explodeUnder)
                    .play()
                await wait(750)

            } else {
                new Sequence()
                    .effect()
                    .atLocation(sourceToken)
                    .reachTowards(target)
                    .JB2A()
                    .repeats(3, 250)
                    .missed(hit)
                    .belowTokens(belowAnim)
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
                    .play()
                await wait(750)

            }
        }
    }
    cast()
}