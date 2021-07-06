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

    // Random Color pull given object path
    var randomProperty = function (obj) {
        var keys = Object.keys(obj);
        var keyLength = keys.length;
        var ranKey = Math.floor(Math.random() * keyLength);
        return keys[ranKey];
    };
    //Builds standard File Path
    let filePath;
    if (AAITEMCHECK.ranged.includes(itemName)) {
        filePath = buildWeaponFile(obj01, itemName, handler.flags)
    } else {
        filePath = buildSpellFile(obj01, itemName, handler.flags)
    }
    /*
    if (handler.flags.options.customPath01) {
        filePath = handler.flags.options.customPath01
    }
    console.log(filePath);
    */
    let sourceToken = handler.actorToken;
    //let videoData = await getVideoDimensionsOf(filePath['30']);//get video metadata
    //let duration = videoData.duration * 1000;//get duration of video file
    let belowAnim = handler.flags.animLevel//Boolean: above or under tokens
    //console.log(duration);
    let videoExData;
    let videoExWidth;
    let explosionWidth;
    let explodeScale;
    let explodeDelay;
    let explodeFile;
    let explodeUnder;
    //Get explosion add-on information if true
    if (handler.flags.explosion) {
        explodeFile = buildExplosionFile(obj01, handler.flags)//Builds explosion File Path
        videoExData = await getVideoDimensionsOf(explodeFile);//get video metadata
        videoExWidth = videoExData.width;//get duration of video file
        explosionWidth = handler.flags.explodeRadius;//Input Radius
        explodeScale = (canvas.grid.size * (explosionWidth / canvas.dimensions.distance)) / videoExWidth;//Scale based on pixels and input
        explodeDelay = handler.flags.explodeDelay;//Tweak the delay for explosion
        explodeUnder = handler.flags.exAnimLevel; //Boolean: above or under tokens
    }

    let loops = handler.flags.options.loops;
    let loopDelay = handler.flags.options.loopDelay;

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
                    .repeats(loops, loopDelay)
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
                    .scale(explodeScale)
                    .delay((duration / 2) + explodeDelay)
                    .repeats(loops, loopDelay)
                    .belowTokens(explodeUnder)
                    .play()
                await wait(750)

            } else {
                
                new Sequence()
                    .effect()
                    .atLocation(sourceToken)
                    .reachTowards(target)
                    //.file(filePath)
                    .JB2A()
                    .repeats(loops, loopDelay)
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
