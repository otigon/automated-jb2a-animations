import { buildFile } from "../file-builder/build-filepath.js";
import { aaDebugger } from "../../constants/constants.js";
import { AAAnimationData } from "../../aa-classes/AAAnimationData.js";

// Credit goes to Wasp-Sequencer Guy for the structure of the Fireball Sequence
export async function fireballSeq(handler, animationData, config) {

    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;

    //const fbData =  handler.flags?.preset?.fireball;
    const fbData = data.isAuto ? handler.autorecObject?.fireball : handler.flags?.preset?.fireball;

    if (!fbData) { return; }
    const projectileData = fbData.projectile || {};
    const explosion01Data = fbData.explosion01 || {};
    const explosion02Data = fbData.explosion02 || {};
    const afterData = fbData.afterImage || {};

    const cleanData = {
        onlyX: fbData.onlyX || false,
        removeTemplate: fbData.removeTemplate || false,
        projectile: {
            menuType: projectileData.menuType || "spell",
            animation: projectileData.animation || "fireballbeam",
            variant: projectileData.variant || "01",
            color: projectileData.color || "orange",
            customPath: projectileData.enableCustom && projectileData.customPath ? projectileData.customPath : false,
            elevation: projectileData.elevation ?? 1000,
            repeat: projectileData.repeat || 1,
            delay: projectileData.delay || 250,
            wait: projectileData.wait || 0,
        },
        explosion01: {
            enable: explosion01Data.enable || false,
            menuType: explosion01Data.menuType || "spell",
            animation: explosion01Data.animation || "shatter",
            variant: explosion01Data.variant || "01",
            color: explosion01Data.color || "blue",
            customPath : explosion01Data.enableCustom && explosion01Data.customPath ? explosion01Data.customPath : false,
            elevation: explosion01Data.elevation ?? 1000,
            repeat: explosion01Data.repeat || 1,
            delay: explosion01Data.delay || 250,
            scale: explosion01Data.scale || 1,
            wait: explosion01Data.wait || 0,
        },
        explosion02: {
            menuType: explosion02Data.menuType || "spell",
            animation: explosion02Data.animation || "shatter",
            variant: explosion02Data.variant || "01",
            color: explosion02Data.color || "blue",
            customPath : explosion02Data.enableCustom && explosion02Data.customPath ? explosion02Data.customPath : false,
            elevation: explosion02Data.elevation ?? 1000,
            repeat: explosion02Data.repeat || 1,
            delay: explosion02Data.delay || 250,
            scale: explosion02Data.scale || 1,
        },
        afterImage: {
            enable: afterData.enable && afterData.customPath ? afterData.enable : false,
            elevation: afterData.elevation ?? elevation,
            persistent: afterData.persistent || false,
            scale: afterData.scale || 1,
            wait: afterData.wait || 0,
        },
        itemAudio: {
            enable: handler.flags?.audio?.a01?.enable || false,
            file: handler.flags?.audio?.a01?.file,
            volume: handler.flags?.audio?.a01?.volume || 0.25,
            delay: handler.flags?.audio?.a01?.delay || 0,
            repeat: handler.decoupleSound ? 1 : data.projectileRepeat || 1,
            startTime: handler.flags?.audio?.a01?.startTime || 0,
        },
        exAudio01: {
            enable: handler.flags?.audio?.e01?.enable || false,
            file: handler.flags?.audio?.e01?.file,
            volume: handler.flags?.audio?.e01?.volume || 0.25,
            delay: handler.flags?.audio?.e01?.delay || 0,
            repeat: handler.decoupleSound ? 1 : data.explosion01Repeat || 1,
            startTime: handler.flags?.audio?.e01?.startTime || 0,
        },
        exAudio02: {
            enable: handler.flags?.audio?.e02?.enable || false,
            file: handler.flags?.audio?.e02?.file,
            volume: handler.flags?.audio?.e02?.volume || 0.25,
            delay: handler.flags?.audio?.e02?.delay || 0,
            repeat: handler.decoupleSound ? 1 : data.explosion02Repeat || 1,
            startTime: handler.flags?.audio?.e02?.startTime || 0,
        }

    }

    /*
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
    */

    const projectileAnimation = await buildFile(false, cleanData.projectile.menuType, cleanData.projectile.animation, "range", cleanData.projectile.variant, cleanData.projectile.color);
    const explosion01 = cleanData.explosion01.enable ? await buildFile(true, cleanData.explosion01.menuType, cleanData.explosion01.animation, "static", cleanData.explosion01.variant, cleanData.explosion01.color) : "";
    const explosion02 = cleanData.explosion02.animation !== "a1" ? await buildFile(true, cleanData.explosion02.menuType, cleanData.explosion02.animation, "static", cleanData.explosion02.variant, cleanData.explosion02.color) : "";

    if (handler.debug) { aaDebugger("Fireball Animation Start", data, cleanData, projectileAnimation, explosion01, explosion02) }

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
    if (cleanData.removeTemplate) {
        aaSeq.thenDo(function () {
            canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.id])
        })
    }
    // Play Macro if Awaiting
    if (data.playMacro && data.macro.playWhen === "1") {
        handler.templateData = config;
        let userData = data.macro.args;
        aaSeq.macro(data.macro.name, handler.workflow, handler, userData)
    }
    // Extra Effects => Source Token if active
    if (sourceFX.enabled) {
        aaSeq.addSequence(sourceFX.sourceSeq)
    }
    if (cleanData.itemAudio.enable && cleanData.itemAudio.file) {
        aaSeq.sound()
            .file(cleanData.itemAudio.file, true)
            .volume(cleanData.itemAudio.volume)
            .delay(cleanData.itemAudio.delay)
            .repeats(cleanData.itemAudio.repeat, cleanData.projectileDelay)
            .startTime(cleanData.itemAudio.startTime)
    }
    aaSeq.effect()
        .file(projectileAnimation.file)
        .atLocation(sourceToken)
        .stretchTo(position)
        .repeats(cleanData.projectile.repeat, cleanData.projectile.delay)
        .waitUntilFinished(cleanData.projectile.wait)
    if (cleanData.exAudio01.enable && cleanData.exAudio01.file) {
        aaSeq.sound()
            .file(cleanData.exAudio01.file, true)
            .volume(cleanData.exAudio01.volume)
            .delay(cleanData.exAudio01.delay)
            .repeats(cleanData.exAudio01.repeat, cleanData.explosion01Delay)
            .startTime(cleanData.exAudio01.startTime)
    }
    if (cleanData.explosion01.enable && cleanData.explosion01.menuType) {
        aaSeq.effect()
            .file(explosion01.file, true)
            .atLocation(position)
            .size(size * .35 * cleanData.explosion01.scale)
            .repeats(cleanData.explosion01.repeat, cleanData.explosion01.delay)
            .waitUntilFinished(cleanData.explosion01.wait)
    }
    if (cleanData.exAudio02.enable && cleanData.exAudio02.file) {
        aaSeq.sound()
            .file(cleanData.exAudio02.file, true)
            .volume(cleanData.exAudio02.volume)
            .delay(cleanData.exAudio02.delay)
            .repeats(cleanData.exAudio02.repeat, cleanData.explosion02Delay)
            .startTime(cleanData.exAudio02.startTime)
    }
    if (cleanData.explosion02.menuType) {
        aaSeq.effect()
            .file(explosion02.file, true)
            .atLocation(position)
            .size(size * cleanData.explosion02.scale)
            .repeats(cleanData.explosion02.repeat, cleanData.explosion02.delay)
            .zIndex(5)
            .waitUntilFinished(-750 + cleanData.afterImage.wait)
    }
    if (cleanData.afterImage.enable) {
        aaSeq.effect()
            .file(cleanData.afterImage.customPath, true)
            .size(size)
            .atLocation(position)
            .elevation(0)
            .persist(true)
            .origin(handler.itemUuid)
            .fadeIn(250)
            .fadeOut(500)
    }
    if (data.playMacro && data.macro.playWhen === "0") {
        handler.templateData = config;
        let userData = data.macro.args;
        new Sequence()
            .macro(data.macro.name, handler.workflow, handler, userData)
            .play()
    }
    if (cleanData.afterImage.enable) { AAAnimationData.howToDelete("sequencerground") }
    aaSeq.play()
}