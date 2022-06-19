import { buildFile } from "../file-builder/build-filepath.js";
import { aaDebugger } from "../../constants/constants.js";
import { AAanimationData } from "../../aa-classes/animation-data.js";

// Credit goes to Wasp-Sequencer Guy for the structure of the Fireball Sequence
export async function fireball(handler, animationData, config) {

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;

    const flags = handler.flags;
    if (data.isAuto) {
        //Object.assign(data, autoObject);
        const autoOverridden = flags.autoOverride?.enable ?? false;
        const autoOverrideAfter = flags.autoOverride?.fireball?.afterEffect ?? false;
        const autoFireball = flags.autoOverride?.fireball ?? {};

        data.rangeType = autoOverridden ? autoFireball.rangeType : data.rangeType;
        data.ex01Type = data.ex01Type;
        data.ex02Type = data.ex02Type

        data.projectile = autoOverridden ? autoFireball.projectile : data.projectile;
        data.projectileVariant = autoFireball ? autoFireball.projectileVariant : data.projectilVariant ?? "01";
        data.projectileColor = autoOverridden ? autoFireball.projectileColor ?? data.projectileColor : data.projectileColor ?? "";
        data.projectileRepeat = data.projectileRepeat ?? 1;
        data.projectileDelay = data.projectileDelay ?? 250;
        data.wait01 = autoOverridden ? autoFireball.wait01 ?? -500 : data.wait01 ?? -500;

        data.explosion01 = data.explosion01;
        data.explosion01Variant = data.explosion01Variant ?? "01";
        data.explosion01Color = autoOverridden ? autoFireball.explosion01Color ?? "" : data.explosion01Color ?? "";
        data.explosion01Repeat = data.explosion01Repeat || 1;
        data.explosion01Delay = data.explosion01Delay || 250;
        data.explosion01Scale = data.explosion01Scale || 1;
        data.wait02 = data.wait02 ?? -500;

        data.explosion02 = data.explosion02;
        data.explosion02Variant = data.explosion02Variant ?? "01";
        data.explosion02Color = autoOverridden ? autoFireball.explosion02Color ?? "" : data.explosion02Color ?? "";
        data.explosion02Repeat = data.explosion02Repeat || 1;
        data.explosion02Delay = data.explosion02Delay || 250;
        data.explosion02Scale = data.explosion02Scale || 1;

        data.afterEffect = autoOverrideAfter ? autoFireball.afterEffect ?? false : data.afterEffect || false;
        data.afterEffectPath = autoOverrideAfter ? autoFireball.afterEffectPath ?? "" : data.afterEffectPath ?? "";
        data.wait03 = autoOverrideAfter ? autoFireball.wait03 ?? 500 : data.wait03 ?? 500;

        data.itemAudio = {
            enable: data.audio?.a01?.enable || false,
            file: data.audio?.a01?.file,
            volume: data.audio?.a01?.volume || 0.25,
            delay: data.audio?.a01?.delay || 0,
            repeat: handler.decoupleSound ? 1 : data.projectileRepeat || 1,
            startTime: data.audio?.a01?.startTime || 0,
        }
        data.exAudio01 = {
            enable: data.audio?.e01?.enable || false,
            file: data.audio?.e01?.file,
            volume: data.audio?.e01?.volume || 0.25,
            delay: data.audio?.e01?.delay || 0,
            repeat: handler.decoupleSound ? 1 : data.explosion01Repeat || 1,
            startTime: data.audio?.e01?.startTime || 0,
        }
        data.exAudio02 = {
            enable: data.audio?.e02?.enable || false,
            file: data.audio?.e02?.file,
            volume: data.audio?.e02?.volume || 0.25,
            delay: data.audio?.e02?.delay || 0,
            repeat: handler.decoupleSound ? 1 : data.explosion02Repeat || 1,
            startTime: data.audio?.e02?.startTime || 0,
        }
    } else {
        const fireballFlags = flags.fireball ?? {};
        data.rangeType = fireballFlags.rangeType;
        data.ex01Type = fireballFlags.ex01Type;
        data.ex02Type = fireballFlags.ex02Type

        data.projectile = fireballFlags.projectile;
        data.projectileVariant = fireballFlags.projectileVariant ?? "01";
        data.projectileColor = fireballFlags.projectileColor ?? "";
        data.projectileRepeat = fireballFlags.projectileRepeat ?? 1;
        data.projectileDelay = fireballFlags.projectileDelay ?? 250;
        data.wait01 = fireballFlags.wait01 ?? -500;

        data.explosion01 = fireballFlags.explosion01;
        data.explosion01Variant = fireballFlags.explosion01Variant ?? "01";
        data.explosion01Color = fireballFlags.explosion01Color ?? "";
        data.explosion01Repeat = fireballFlags.explosion01Repeat ?? 1;
        data.explosion01Delay = fireballFlags.explosion01Delay ?? 250;
        data.explosion01Scale = fireballFlags.explosion01Scale ?? 1;
        data.wait02 = fireballFlags.wait02 ?? -500;

        data.explosion02 = fireballFlags.explosion02;
        data.explosion02Variant = fireballFlags.explosion02Variant ?? "01";
        data.explosion02Color = fireballFlags.explosion02Color ?? "";
        data.explosion02Repeat = fireballFlags.explosion02Repeat ?? 1;
        data.explosion02Delay = fireballFlags.explosion02Delay ?? 250;
        data.explosion02Scale = fireballFlags.explosion02Scale ?? 1;

        data.afterEffect = fireballFlags.afterEffect || false;
        data.afterEffectPath = fireballFlags.afterEffectPath ?? "";
        data.wait03 = fireballFlags.wait03 ?? 500;
        data.removeTemplate = flags.options?.removeTemplate ?? false;

        data.itemAudio = {
            enable: handler.flags?.audio?.a01?.enable || false,
            file: handler.flags?.audio?.a01?.file,
            volume: handler.flags?.audio?.a01?.volume || 0.25,
            delay: handler.flags?.audio?.a01?.delay || 0,
            repeat: handler.decoupleSound ? 1 : data.projectileRepeat || 1,
            startTime: handler.flags?.audio?.a01?.startTime || 0,
        }
        data.exAudio01 = {
            enable: handler.flags?.audio?.e01?.enable || false,
            file: handler.flags?.audio?.e01?.file,
            volume: handler.flags?.audio?.e01?.volume || 0.25,
            delay: handler.flags?.audio?.e01?.delay || 0,
            repeat: handler.decoupleSound ? 1 : data.explosion01Repeat || 1,
            startTime: handler.flags?.audio?.e01?.startTime || 0,
        }
        data.exAudio02 = {
            enable: handler.flags?.audio?.e02?.enable || false,
            file: handler.flags?.audio?.e02?.file,
            volume: handler.flags?.audio?.e02?.volume || 0.25,
            delay: handler.flags?.audio?.e02?.delay || 0,
            repeat: handler.decoupleSound ? 1 : data.explosion02Repeat || 1,
            startTime: handler.flags?.audio?.e02?.startTime || 0,
        }
    }

    const projectileAnimation = await buildFile(false, data.rangeType, data.projectile, "range", data.projectileVariant, data.projectileColor);
    const explosion01 = data.explosion01 !== "a1" ? await buildFile(false, data.ex01Type, data.explosion01, "static", data.explosion01Variant, data.explosion01Color) : "";
    const explosion02 = data.explosion02 !== "a1" ? await buildFile(false, data.ex02Type, data.explosion02, "static", data.explosion02Variant, data.explosion02Color) : "";

    if (handler.debug) { aaDebugger("Fireball Animation Start", data, projectileAnimation, explosion01, explosion02) }

    const template = config ? config : canvas.templates.placeables[canvas.templates.placeables.length - 1];
    const sourceToken = handler.sourceToken;
    let size;
    let position;
    if (game.modules.get("dnd5e-helpers")?.active && (game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 2 || game.settings.get("dnd5e-helpers", "gridTemplateScaling") === 3)) {
        const scale5e = template.data.distance / Math.sqrt(2);
        position = {
            x: template.data.x + (((scale5e / canvas.dimensions.distance) * canvas.grid.size) / 2),
            y: template.data.y + (((scale5e / canvas.dimensions.distance) * canvas.grid.size) / 2),
        }
        size = (canvas.grid.size * (template.data.distance / canvas.dimensions.distance));
    } else if (template.data?.t === 'rect') {
        const offset = canvas.grid.size * (template.data?.width / canvas.dimensions.distance);
        position = {
            x: template.data.x + (offset / 2),
            y: template.data.y + (offset / 2),
        }
        size = (canvas.grid.size * (template.data.distance / canvas.dimensions.distance));
    } else {
        position = {
            x: template.data.x,
            y: template.data.y,
        }
        size = canvas.grid.size * ((template.data.distance * 2) / canvas.dimensions.distance);
    }
    let aaSeq = await new Sequence("Automated Animations")
    if (data.removeTemplate) {
        aaSeq.thenDo(function () {
            canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.id])
        })
    }
    // Play Macro if Awaiting
    if (data.playMacro && data.macro.playWhen === "1") {
        handler.templateData = config;
        let userData = data.macro.args;
        aaSeq.macro(data.macro.name, handler.workflow, handler, ...userData)
    }
    // Extra Effects => Source Token if active
    if (sourceFX.enabled) {
        aaSeq.addSequence(sourceFX.sourceSeq)
    }
    if (data.itemAudio.enable && data.itemAudio.file) {
        aaSeq.sound()
            .file(data.itemAudio.file, true)
            .volume(data.itemAudio.volume)
            .delay(data.itemAudio.delay)
            .repeats(data.itemAudio.repeat, data.projectileDelay)
            .startTime(data.itemAudio.startTime)
    }
    aaSeq.effect()
        .file(projectileAnimation.file)
        .atLocation(sourceToken)
        .stretchTo(position)
        .repeats(data.projectileRepeat, data.projectileDelay)
        .waitUntilFinished(data.wait01)
    if (data.exAudio01.enable && data.exAudio01.file) {
        aaSeq.sound()
            .file(data.exAudio01.file, true)
            .volume(data.exAudio01.volume)
            .delay(data.exAudio01.delay)
            .repeats(data.exAudio01.repeat, data.explosion01Delay)
            .startTime(data.exAudio01.startTime)
    }
    if (data.ex01Type) {
        aaSeq.effect()
            .file(explosion01.file, true)
            .atLocation(position)
            .size(size * .35 * data.explosion01Scale)
            .repeats(data.explosion01Repeat, data.explosion01Delay)
            .waitUntilFinished(data.wait02)
    }
    if (data.exAudio02.enable && data.exAudio02.file) {
        aaSeq.sound()
            .file(data.exAudio02.file, true)
            .volume(data.exAudio02.volume)
            .delay(data.exAudio02.delay)
            .repeats(data.exAudio02.repeat, data.explosion02Delay)
            .startTime(data.exAudio02.startTime)
    }
    if (data.ex02Type) {
        aaSeq.effect()
            .file(explosion02.file, true)
            .atLocation(position)
            .size(size * data.explosion02Scale)
            .repeats(data.explosion02Repeat, data.explosion02Delay)
            .zIndex(5)
            .waitUntilFinished(-750 + data.wait03)
    }
    if (data.afterEffect && data.afterEffectPath) {
        aaSeq.effect()
            .file(data.afterEffectPath, true)
            .size(size)
            .atLocation(position)
            .belowTokens(true)
            .persist(true)
            .origin(handler.itemUuid)
            .fadeIn(250)
            .fadeOut(500)
    }
    if (data.playMacro && data.macro.playWhen === "0") {
        handler.templateData = config;
        let userData = data.macro.args;
        new Sequence()
            .macro(data.macro.name, handler.workflow, handler, ...userData)
            .play()
    }
    if (data.afterEffect && data.afterEffectPath) { AAanimationData.howToDelete("sequencerground") }
    aaSeq.play()

    /*
    new Sequence("Automated Animations")
        .sound()
            .file(data.itemAudio.file, true)
            .volume(data.itemAudio.volume)
            .delay(data.itemAudio.delay)
            .repeats(data.itemAudio.repeat, data.projectileDelay)
            .playIf(() => {
                return data.itemAudio.enable && data.itemAudio.file;
            })
        .effect()
            .file(projectileAnimation.file)
            .atLocation(sourceToken)
            .stretchTo(position)
            .repeats(data.projectileRepeat, data.projectileDelay)
            .waitUntilFinished(data.wait01)
        .sound()
            .file(data.exAudio01.file, true)
            .volume(data.exAudio01.volume)
            .delay(data.exAudio01.delay)
            .repeats(data.exAudio01.repeat, data.explosion01Delay)
            .playIf(() => {
                return data.exAudio01.enable && data.exAudio01.file;
            })
        .effect()
            .file(explosion01.file, true)
            .playIf(data.explosion01 !== "a1")
            .atLocation(position)
            .size(size * .35 * data.explosion01Scale)
            .repeats(data.explosion01Repeat, data.explosion01Delay)
            //.timeRange(0, 1200)
            .waitUntilFinished(data.wait02)
        .sound()
            .file(data.exAudio02.file, true)
            .volume(data.exAudio02.volume)
            .delay(data.exAudio02.delay)
            .repeats(data.exAudio02.repeat, data.explosion02Delay)
            .playIf(() => {
                return data.exAudio02.enable && data.exAudio02.file;
            })
        .effect()
            .file(explosion02.file, true)
            .playIf(data.explosion02 !== "a1")
            .atLocation(position)
            .size(size * data.explosion02Scale)
            .zIndex(5)
            .waitUntilFinished(-750 + data.wait03)
        .effect()
            .file(data.afterEffectPath, true)
            .size(size)
            .atLocation(position)
            .belowTokens(true)
            .persist(true)
            .origin(handler.item.uuid)
            .fadeIn(250)
            .playIf(data.afterEffect)
        .play()

        if (data.removeTemplate) {
            canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
        }
        */
}