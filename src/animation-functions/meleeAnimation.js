import { buildFile } from "./file-builder/build-filepath.js"
import { aaDebugger } from "../constants/constants.js";
import { AAanimationData } from "../aa-classes/animation-data.js";
//import { AAITEMCHECK } from "./item-arrays.js";
//import { animationDefault } from "./file-builder/options.js";
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function meleeAnimation(handler, animationData) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let rangeSwitch;
    if (moduleIncludes("jb2a_patreon")) {
        rangeSwitch = ['sword', 'greatsword', 'mace', 'dagger', 'spear', 'greataxe', 'handaxe', 'lasersword', 'hammer', 'chakram']
    } else {
        rangeSwitch = ['dagger', 'lasersword']
    }
    // Sets JB2A database and Global Delay
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const targetFX = animationData.targetFX;

    const returnWeapons = ['dagger', 'hammer', 'greatsword', 'chakram']
    const switchReturn = returnWeapons.some(el => data.switchAnimation.includes(el)) ? data.return : false;
    let returnDelay;
    switch (true) {
        case data.switchAnimation.includes('dagger'):
        case data.switchAnimation.includes('hammer'):
            returnDelay = 1000;
            break;
        default:
            returnDelay = 1500;
    }

    const attack = await buildFile(false, data.menuType, data.animation, "melee", data.variant, data.color, data.customPath);
    
    const range = await buildFile(false, data.switchMenuType, data.switchAnimation, "range", data.switchVariant, data.switchColor);
    console.log(range)
    if (handler.debug) { aaDebugger("Melee Animation Start", animationData, attack) }

    const sourceToken = handler.sourceToken;
    //const sourceScale = data.animation === "unarmedstrike" || data.animation === "flurryofblows" ? sourceToken.w / canvas.grid.size * 0.85 : sourceToken.w / canvas.grid.size * 0.5;
    const sourceTokenGS = (sourceToken.w / canvas.grid.size) * 4;
    
    async function cast() {

        const rangeSwitchActive = game.settings.get("autoanimations", "rangeSwitch")

        let aaSeq = await new Sequence("Automated Animations");
        // Play Macro if Awaiting
        if (data.playMacro && data.macro.playWhen === "1") {
            let userData = data.macro.args;
            aaSeq.macro(data.macro.name, handler.workflow, handler, ...userData)
        }
        // Extra Effects => Source Token if active
        if (sourceFX.enabled) {
            aaSeq.addSequence(sourceFX.sourceSeq)
        }

        // Animation Start Hook
        aaSeq.thenDo(function () {
            Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
        })

        let targetSound = false;
        let switchSound = true;
        // Target Effect sections
        for (let target of handler.allTargets) {
            let distanceTo = handler.getDistanceTo(target)
            let switchDistance = 5;

            if (handler.gameSystem === "swade") { switchDistance = 1 }
            if (handler.gameSystem === "alienrpg") { switchDistance = canvas.grid.distance * 1.5 }
            let moveTo = distanceTo > switchDistance ? true : false;
            let hit;
            if (handler.playOnMiss) {
                hit = handler.hitTargetsId.includes(target.id) ? true : false;
            } else {
                hit = true;
            }
            if (hit) { targetSound = true }
            // check if this target gets a melee or range animation
            let noMelee = false;
            if (!rangeSwitchActive) {
                switch (data.switchType) {
                    case "on":
                        if (rangeSwitch.some(el => data.animation.includes(el)) && range.file) {
                            if (distanceTo > (switchDistance + handler.reachCheck)) {
                                noMelee = true;
                            }
                        }
                        break;
                    case "custom":
                        if (data.detect === "manual") {
                            if ((distanceTo / canvas.dimensions.distance) > data.switchRange) {
                                noMelee = true;
                            }
                        } else if (distanceTo > (switchDistance + handler.reachCheck)) {
                            noMelee = true;
                        }
                        break;
                }
            }
            if (!noMelee) { switchSound = false }
            if (noMelee) {
                aaSeq.effect()
                    .file(range.file)
                    .atLocation(sourceToken)
                    .stretchTo(target)
                    .randomizeMirrorY()
                    .repeats(data.repeat, data.delay)
                    .missed(!hit)
                    .name("spot" + ` ${target.id}`)
                    .belowTokens(data.below)
                if (switchReturn) {
                    aaSeq.effect()
                        .file(range.returnFile, true)
                        .delay(returnDelay)
                        .atLocation(sourceToken)
                        .repeats(data.repeat, data.delay)
                        .stretchTo("spot" + ` ${target.id}`)
                }
            } else {
                // Standard Melee Animation effect sections
                if (moveTo) {
                    aaSeq.effect()
                        .file(attack.file)
                        .atLocation(sourceToken)
                        .moveTowards(target)
                        .size(sourceTokenGS * data.scale, {gridUnits: true})
                        .repeats(data.repeat, data.delay)
                        .randomizeMirrorY()
                        .missed(!hit)
                        .name("spot" + ` ${target.id}`)
                        .belowTokens(data.below)
                } else {
                    aaSeq.effect()
                        .file(attack.file)
                        .atLocation(sourceToken)
                        .rotateTowards(target)
                        .size(sourceTokenGS * data.scale, {gridUnits: true})
                        .repeats(data.repeat, data.delay)
                        .randomizeMirrorY()
                        .missed(!hit)
                        .name("spot" + ` ${target.id}`)
                        .belowTokens(data.below)
                        .anchor({ x: 0.4, y: 0.5 })
                }
            }

            // add-on Explosion Animation effect sections
            if (data.explosion.enabled) {
                aaSeq.effect()
                    .atLocation("spot" + ` ${target.id}`)
                    .file(data.explosion?.data?.file, true)
                    //.scale({ x: data.explosion?.scale, y: data.explosion?.scale })
                    .size(data.explosion?.radius * 2, {gridUnits: true})
                    .delay(data.explosion?.delay)
                    .repeats(data.repeat, data.delay)
                    .belowTokens(data.explosion?.below)
            }

            // Extra Effects => Target effect section
            if (targetFX.enabled && hit) {
                let targetSequence = AAanimationData._targetSequence(targetFX, target, handler);
                aaSeq.addSequence(targetSequence.targetSeq)
            }
        }
        aaSeq.addSequence(await AAanimationData._sounds({ animationData, switchSound, targetSound, explosionSound: true }))
        // Macro if Concurrent
        if (data.playMacro && data.macro.playWhen === "0") {
            let userData = data.macro.args;
            new Sequence()
                .macro(data.macro.name, handler.workflow, handler, ...userData)
                .play()
        }
        aaSeq.play()
        await wait(handler.animEnd)
        // Animation End Hook
        Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
    }
    cast()
}