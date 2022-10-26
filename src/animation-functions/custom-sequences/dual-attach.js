import { buildFile } from "../file-builder/build-filepath.js";

export async function dualattach(handler, animationData) {

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const macro = animationData.macro;

    const animFile = await buildFile(false, data.video.menuType, data.video.animation, "range", data.video.variant, data.video.color, data.video.customPath)

    const onlyX = data.video.customPath ? data.options.onlyX : false;

    const sourceToken = handler.sourceToken;
    let effectExists = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid })

    async function cast() {

        let aaSeq = new Sequence();
        // Play Macro if Awaiting
        if (macro && macro.playWhen === "1" && !macro?.args?.warpgateTemplate) {
            let userData = macro.args;
            aaSeq.macro(macro.name, handler.workflow, handler, userData)
        }
        // Extra Effects => Source Token if active
        if (sourceFX.enabled) {
            aaSeq.addSequence(sourceFX.sourceSeq)
        }
        // Primary Sound
        if (data.sound) {
            aaSeq.addSequence(data.sound)
        }
        // Animation Start Hook
        aaSeq.thenDo(function () {
            Hooks.callAll("aa.animationStart", sourceToken, handler.allTargets)
        })
        for (let target of handler.allTargets) {
            let checkTarget = effectExists.filter(i => i.data.target.includes(target.id)).length > 0;
            if (!checkTarget) {
            aaSeq.effect()
                .file(animFile.file)
                .attachTo(sourceToken)
                .stretchTo(target, { attachTo: true, onlyX: onlyX })
                .persist(true)
                .playbackRate(data.options.playbackRate)
                .origin(handler.itemUuid)
                .elevation(handler.elevation(sourceToken, data.options.isAbsolute, data.options.elevation), {absolute: data.options.isAbsolute})
            }
        }
        // Macro if Concurrent
        if (macro && macro.playWhen === "0" && !macro?.args?.warpgateTemplate) {
            let userData = macro.args;
            new Sequence()
                .macro(macro.name, handler.workflow, handler, userData)
                .play()
        }
        aaSeq.play()
        //Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
    }
    cast()
}
