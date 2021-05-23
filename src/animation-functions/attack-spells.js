import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import { TMFXCOLORS } from "./tmfxcolors.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function spellAttacks(handler) {

    let audio = handler.allSounds.item;
    let audioEnabled = audio.enableAudio;

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    var randomProperty = function (obj) {
        var keys = Object.keys(obj);
        //console.log(keys);
        var keyLength = keys.length;
        //console.log(keyLength);
        var ranKey = Math.floor(Math.random() * keyLength);
        //console.log(ranKey);
        //console.log(keys[ranKey]);
        return keys[ranKey];
        //return obj[keys[ keys.length * Math.random() << 0]];
    };

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    //let ranColor = randomProperty(obj01['firebolt']);
    //console.log(ranColor);
    let obj02;
    let spellPath01;
    let spellPath02;
    let spellPath03;
    let color;
    let ranVar = Math.floor(Math.random() * 3 + 1).toString();
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
    switch (true) {
        case (handler.itemNameIncludes("fire", "bolt")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase()):
            obj02 = "firebolt";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "orange";
                    break;
                case handler.color === "random":
                    color = randomProperty(obj01[obj02]);
                    break;
                default:
                    color = handler.color;
            }
            spellPath01 = obj01[obj02][color]['30'];
            spellPath02 = obj01[obj02][color]['60'];
            spellPath03 = obj01[obj02][color]['90'];
            break;
        case (handler.itemNameIncludes("ray", "frost")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase()):
            obj02 = "rayoffrost";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "blue";
                    break;
                case handler.color === "random":
                    color = randomProperty(obj01[obj02]);
                    break;
                default:
                    color = handler.color;
            }
            spellPath01 = obj01[obj02][color]['15'];
            spellPath02 = obj01[obj02][color]['30'];
            spellPath03 = obj01[obj02][color]['45'];
            break;
        case (handler.itemNameIncludes("witch", "bolt")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase()):
            obj02 = "witchbolt";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "blue";
                    break;
                case handler.color === "random":
                    color = randomProperty(obj01[obj02]);
                    break;
                default:
                    color = handler.color;
            }
            spellPath01 = obj01[obj02][color]['15'];
            spellPath02 = obj01[obj02][color]['30'];
            break;
        case (handler.itemNameIncludes("scorching", "ray")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
            obj02 = "scorchingray";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "orange";
                    break;
                case handler.color === "random":
                    switch (true) {
                        case handler.spellVariant === "02":
                            color = randomProperty(obj01[obj02]['02']);
                            break;
                        default:
                            color = randomProperty(obj01[obj02]['01']);
                    }
                    break;
                default:
                    color = handler.color;
            }
            switch (true) {
                case handler.spellVariant === "02":
                    spellPath01 = obj01[obj02]['02'][color]['30'][ranVar];
                    spellPath02 = obj01[obj02]['02'][color]['60'][ranVar];
                    spellPath03 = obj01[obj02]['02'][color]['90'][ranVar];
                    break;
                default:
                    spellPath01 = obj01[obj02]['01'][color]['30'];
                    spellPath02 = obj01[obj02]['01'][color]['60'];
                    spellPath03 = obj01[obj02]['01'][color]['90'];
            }
            break;
        case (handler.itemNameIncludes("disintegrate")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()):
            obj02 = "disintegrate";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "green";
                    break;
                case handler.color === "random":
                    color = randomProperty(obj01[obj02]);
                    break;
                default:
                    color = handler.color;
            }
            spellPath01 = obj01[obj02][color]['15'];
            spellPath02 = obj01[obj02][color]['30'];
            spellPath03 = obj01[obj02][color]['45'];
            break;
        case (handler.itemNameIncludes("eldritch blast")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase()):
            obj02 = "eldritchblast";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "purple";
                    break;
                case handler.color === "random":
                    color = randomProperty(obj01[obj02]);
                    break;
                default:
                    color = handler.color;
            }
            spellPath01 = obj01[obj02][color]['30'];
            spellPath02 = obj01[obj02][color]['60'];
            spellPath03 = obj01[obj02][color]['90'];
            break;
        case handler.itemNameIncludes("guiding bolt"):
            obj02 = "guidingbolt";
            switch (true) {
                case handler.color === "a1" || handler.color === ``:
                case !handler.color:
                    color = "blue yellow";
                    break;
                case handler.color === "random":
                    color = randomProperty(obj01[obj02]);
                    break;
                default:
                    color = handler.color;
            }
            spellPath01 = obj01[obj02][color]['30'];
            spellPath02 = obj01[obj02][color]['60'];
            spellPath03 = obj01[obj02][color]['90'];
            break;
    }
    let tmColor = TMFXCOLORS[color]();
    let letitBurn =
        [{
            filterType: "xfire",
            filterId: "letitBurn",
            autoDestroy: true,
            time: 0,
            // Can change color in hex format
            color: tmColor,
            blend: 1,
            amplitude: 1,
            dispersion: 0,
            chromatic: false,
            scaleX: 1,
            scaleY: 1,
            inlay: false,
            animated:
            {
                time:
                {
                    loopDuration: 750,
                    loops: 1,
                    active: true,
                    speed: -0.0015,
                    animType: "move"
                }

            }
        }];
    let frosty =
        [{
            filterType: "xfire",
            filterId: "Frosty",
            autoDestroy: true,
            color: tmColor,
            time: 0,
            blend: 5,
            amplitude: 1,
            dispersion: 0,
            chromatic: false,
            scaleX: 1,
            scaleY: 1,
            inlay: true,
            animated:
            {
                time:
                {
                    loopDuration: 1400,
                    loops: 1,
                    active: true,
                    speed: -0.0020,
                    animType: "move"
                }

            }
        }];
    let ashes =
        [{
            filterType: "fire",
            filterId: "Ashes",
            autoDestroy: true,
            intensity: 3,
            color: tmColor,
            amplitude: 2,
            time: 0,
            blend: 15,
            fireBlend: 1,
            alphaDiscard: true,
            zOrder: 50,
            animated:
            {
                time:
                {
                    loopDuration: 1000,
                    loops: 2,
                    active: true,
                    speed: -0.0024,
                    animType: "move"
                }
            }
        }];
    let electric =
        [{
            filterType: "electric",
            filterId: "Witchy",
            autoDestroy: true,
            color: tmColor,
            time: 0,
            blend: 2,
            intensity: 3,
            animated:
            {
                time:
                {
                    loopDuration: 1000,
                    loops: 4,
                    active: true,
                    speed: 0.0020,
                    animType: "move"
                }

            }
        }];

    let tmDelay;
    let tmKill;
    let tmMacro;

    switch (true) {
        case (handler.itemNameIncludes("fire", "bolt")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase()):
            //tmDelay = 1000;
            //tmKill = 500;
            //tmMacro = letitBurn;
            break;
        case (handler.itemNameIncludes("ray", "frost")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase()):
            tmDelay = 750;
            tmKill = 2000;
            tmMacro = frosty;
            break;
        case (handler.itemNameIncludes("witch", "bolt")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase()):
            tmDelay = 50;
            tmKill = 4000;
            tmMacro = electric;
            break;
        case (handler.itemNameIncludes("scorching", "ray")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
            tmDelay = 500;
            tmKill = 750;
            tmMacro = letitBurn;
            break;
        case (handler.itemNameIncludes("disintegrate")):
        case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()):
            tmDelay = 500;
            tmKill = 2000;
            tmMacro = ashes;
            break;
    }
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);
    async function cast() {
        var arrayLength = handler.allTargets.length;

        var targetCheck = handler.targetAssistant.length;
        let noTargetAnim = `modules/autoanimations/Animations/No_Target_400x400.webm`;
        let myToken = handler.actorToken;
        let targetTrainer =
        {
            file: noTargetAnim,
            position: myToken.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            scale: {
                x: 0.25,
                y: 0.25
            }
        }

        switch (true) {
            case ((targetCheck === 0) && (game.settings.get("autoanimations", "targetingAssist"))):
                canvas.fxmaster.playVideo(targetTrainer);
                game.socket.emit('module.fxmaster', targetTrainer);
        }

        for (var i = 0; i < arrayLength; i++) {
            let target = handler.allTargets[i];
            //log(target.id);
            let saves;
            function saveCheck(test) {
                if (saves?.includes(test)) return true;
            }

            let grid = canvas.grid.size;
            var oddEvenX = Math.random() < 0.5 ? -1 : 1;
            var oddEvenY = Math.random() < 0.5 ? -1 : 1;
            let missMax;
            let missMin;
            let targetSize = target.actor.data.data.traits.size;
            switch (true) {
                case targetSize === "tiny":
                case targetSize === "sm":
                case targetSize === "med":
                    missMax = grid * 1.5;
                    missMin = grid * 0.5;
                    break;
                case targetSize === "lg":
                    missMax = grid * 2;
                    missMin = grid;
                    break;
                case targetSize === "huge":
                    missMax = (grid * 2.5);
                    missMin = (grid * 1.5);
                    break;
                case targetSize === "grg":
                    missMax = (grid * 3);
                    missMin = (grid * 2);
                    break;
            }
            let missHit = {
                'x': (target.center.x) + ((Math.floor(Math.random() * (missMax - missMin) + missMin)) * oddEvenX),
                'y': (target.center.y) + ((Math.floor(Math.random() * (missMax - missMin) + missMin)) * oddEvenY)
            }

            let hitSpot;
            switch (true) {
                case (handler.playOnMiss):
                    switch (true) {
                        case handler.hitTargetsId.includes(target.id):
                            hitSpot = target.center;
                            break;
                        default:
                            hitSpot = missHit;
                    }
                    break;
                default:
                    hitSpot = target.center;
            }
            let ray = new Ray(handler.actorToken.center, hitSpot);

            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;
            //console.log(anDist);

            let anFile;
            let anFileSize = 600;
            let anchorX = 0.2;
            let anScale;
            let anScaleY;
            //let anScaleY = anDist <= 600 ? 0.6 : anScale;

            switch (true) {
                case (handler.itemNameIncludes("fire", "bolt")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase()):
                case (handler.itemNameIncludes("scorching", "ray")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
                case (handler.itemNameIncludes("eldritch blast")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase()):
                case handler.itemNameIncludes("guiding bolt"):
                    switch (true) {
                        case (anDist <= 1400):
                            anFileSize = 1200;
                            anFile = spellPath01;
                            anchorX = 0.125;
                            break;
                        case (anDist > 2600):
                            anFileSize = 3600;
                            anFile = spellPath03;
                            anchorX = 0.05;
                            break;
                        default:
                            anFileSize = 2400;
                            anFile = spellPath02;
                            anchorX = 0.071;
                            break;
                    }
                    anScale = anDist / anFileSize;
                    switch (true) {
                        case anDist <= 300:
                            anScaleY = 0.4;
                            break;
                        case anDist <= 600:
                            anScaleY = 0.5;
                            break;
                        case anDist <= 900:
                            anScaleY = 0.6;
                            break;
                        case anDist <= 1200:
                            anScaleY = 0.7;
                            break;
                        case anDist <= 1500:
                            anScaleY = 0.7;
                            break;
                        case anDist <= 1800:
                            anScaleY = 0.9;
                            break;
                        default:
                            anScaleY = anScale;
                            break;
                    }
                    break;
                case (handler.itemNameIncludes("ray", "frost")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase()):
                case (handler.itemNameIncludes("disintegrate")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()):
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = spellPath01;
                            anchorX = 0.2;
                            break;
                        case (anDist > 1200):
                            anFileSize = 1800;
                            anFile = spellPath03;
                            anchorX = 0.091;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = spellPath02;
                            anchorX = 0.125;
                            break;
                    }
                    anScale = anDist / anFileSize;
                    switch (true) {
                        case anDist <= 300:
                            anScaleY = 0.4;
                            break;
                        case anDist <= 600:
                            anScaleY = 0.5;
                            break;
                        case anDist <= 900:
                            anScaleY = 0.6;
                            break;
                        case anDist <= 1200:
                            anScaleY = 0.7;
                            break;
                        case anDist <= 1500:
                            anScaleY = 0.7;
                            break;
                        case anDist <= 1800:
                            anScaleY = 0.9;
                            break;
                        default:
                            anScaleY = anScale;
                            break;
                    }
                    break;
                case (handler.itemNameIncludes("witch bolt")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase()):
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = spellPath01;
                            anchorX = 0.2;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = spellPath02;
                            anchorX = 0.125;
                            break;
                    }
                    anScale = anDist / anFileSize;
                    switch (true) {
                        case anDist <= 300:
                            anScaleY = 0.7;
                            break;
                        case anDist <= 600:
                            anScaleY = 0.8;
                            break;
                        case anDist <= 900:
                            anScaleY = 0.8;
                            break;
                        case anDist <= 1200:
                            anScaleY = 0.9;
                            break;
                        default:
                            anScaleY = anScale;
                            break;
                    }
                    break;
            }

            let spellAnim =
            {
                file: anFile,
                position: handler.actorToken.center,
                anchor: {
                    x: anchorX,
                    y: 0.5
                },
                angle: anDeg,
                scale: {
                    x: anScale,
                    y: (anScaleY * plusOrMinus)
                }
            };
            handler.allTargets.forEach(async (i) => {
                canvas.fxmaster.playVideo(spellAnim);
                game.socket.emit('module.fxmaster', spellAnim);
                if (game.settings.get("autoanimations", "tmfx")) {
                    switch (true) {
                        case handler.playOnMiss:
                            switch (true) {
                                case handler.hitTargetsId.includes(target.id):
                                    await wait(tmDelay);
                                    TokenMagic.addFilters(target, tmMacro);
                                    break;
                            }
                            break;
                        default:
                            await wait(tmDelay);
                            TokenMagic.addFilters(target, tmMacro);
                    }
                    /*
                    switch (true) {
                        case (saveCheck(target.id)):
                            break;
                        default:
                            await wait(tmDelay);
                            TokenMagic.addFilters(target, tmMacro);
                    }
                    */
                }

            });


        }
    }
    cast();
    if (audioEnabled) {
        await wait(audio.delay);
        AudioHelper.play({ src: audio.file, volume: audio.volume, autoplay: true, loop: false }, true);
    }
}

export default spellAttacks;