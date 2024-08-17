import { buildFile } from "../file-builder/build-filepath.js";

export async function dualattach(handler, animationData) {

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const macro = animationData.macro;

    const animFile = await buildFile("range", data.video, data.video.customPath)

    const onlyX = data.video.customPath ? data.options.onlyX : false;

    const sourceToken = handler.sourceToken;
    let effectExists = Sequencer.EffectManager.getEffects({ object: sourceToken, origin: handler.itemUuid })

    async function cast() {

        let aaSeq = await new Sequence(handler.sequenceData);
        // Play Macro if Awaiting
        if (macro && macro.playWhen === "1" && !macro?.args?.warpgateTemplate) {
            handler.complileMacroSection(aaSeq, macro)
        }
        // Extra Effects => Source Token if active
        if (sourceFX) {
            handler.compileSourceEffect(sourceFX, aaSeq)
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
                const effect = aaSeq.effect()
                    .file(animFile.file)
                    .attachTo(sourceToken)
                    .stretchTo(target, { attachTo: true, onlyX: onlyX })
                    .persist(true)
                    .playbackRate(data.options.playbackRate)
                    .origin(handler.itemUuid)

                if (data.options.elevation === 0) {
                    effect.belowTokens(true)
                } else {
                    effect.elevation(handler.elevation(sourceToken, data.options.isAbsolute, data.options.elevation), { absolute: data.options.isAbsolute })
                }
            }
        }
        // Macro if Concurrent
        if (macro && macro.playWhen === "0" && !macro?.args?.warpgateTemplate) {
            handler.runMacro(macro)
        }

        // Macro if Awaiting Animation. This will respect the Delay/Wait options in the Animation chains
        if (macro && macro.playWhen === "3") {
            handler.complileMacroSection(aaSeq, macro)
        }

        aaSeq.play()

        //Hooks.callAll("aa.animationEnd", sourceToken, handler.allTargets)
    }
    cast()
}
