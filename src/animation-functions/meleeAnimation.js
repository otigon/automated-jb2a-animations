import { buildWeaponFile, buildAfterFile } from "./common-functions/build-filepath.js"
import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import { rangedAnimations } from "./rangedAnimation.js";
//import { AAITEMCHECK } from "./item-arrays.js";
//import getVideoDimensionsOf from "../canvas-animation/video-metadata.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function meleeAnimation(handler) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let itemName = handler.convertedName;
    console.log(handler.getDistanceTo)
    switch (handler.convertedName) {
        case "dagger":
        case "handaxe":
        case "spear":
            if (handler.getDistanceTo > 5) {
                rangedAnimations(handler)
                return;                
            } else {
                itemName = "melee" + itemName;
                console.log(itemName)
            }
            break;
    }
    //console.log(JB2APATREONDB)
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
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
    let attack = await buildWeaponFile(obj01, itemName, handler)
    //console.log(attack)
    /*
    if (handler.flags.options.customPath01) {
        filePath = handler.flags.options.customPath01
    }
    console.log(filePath);
    */
    let sourceToken = handler.actorToken;
    //let sourceScale = sourceToken.w / attack.metadata.width
    let sourceScale = itemName === "unarmedstrike" || itemName === "flurryofblows" ? sourceToken.w / canvas.grid.size * 0.85 : sourceToken.w / canvas.grid.size * 0.5;
    let explosion = handler.flags.explosion ? await buildAfterFile(obj01, handler) : false;
    let scale = explosion.scale ?? 1;

    async function cast() {
        let arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            switch (handler.convertedName) {
                case "dagger":
                case "handaxe":
                case "spear":
                    if (handler.getDistanceTo(target) > (5 + handler.reachCheck)) {
                        rangedAnimations(handler)
                        return;                
                    }
                    break;
            }
        
            //console.log(attack.file)
            //let finalFile = handler.color === "random" ? attack.file[randomProperty(attack.file)] : attack.file[handler.color];
            let hit = handler.hitTargetsId.includes(target.id) ? false : true;

new Sequence()
    .effect()
        .file(attack.file)
        .atLocation(sourceToken)
        .rotateTowards(target)
        //.JB2A()
        .scale(sourceScale * handler.scale)
        .repeats(attack.loops, attack.loopDelay)
        .randomizeMirrorY()
        .missed(hit)
        .name("animation")
        .belowTokens(attack.level)
        .addOverride(async (effect, data) => {
            data.anchor = {x: 0.4, y: 0.5}
            console.log(data._distance)
            return data;
        })
        .playIf(() => { return handler.getDistanceTo(target) <= 5})
        .effect()
            .file(attack.file)
            .atLocation(sourceToken)
            .moveTowards(target)
            //.JB2A()
            .scale(sourceScale * handler.scale)
            .repeats(attack.loops, attack.loopDelay)
            .randomizeMirrorY()
            .missed(hit)
            .name("animation")
            .belowTokens(attack.level)    
            .playIf(() => { return handler.getDistanceTo(target) > 5})
        .effect()
            .atLocation("animation")
            //.file(explosion.file)
            .scale({x: scale, y: scale})
            .delay(500 + handler.explosionDelay)
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
