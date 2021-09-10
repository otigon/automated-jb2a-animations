import { AUTOANIM } from "./config.js";
import { rangeColors, staticColors, animationName, animTemplates, variantOptions, menuColors, variantLength, autorecColors, checkAutoRec, autoPreview } from "./tab-options.js";
import { findObjectByNameFull, rinseName } from "../custom-recognition/autoFunctions.js";
import animPreview from "./anim-preview.js";
import { nameConversion } from "./name-conversions.js";
import { AAITEMCHECK } from "../animation-functions/item-arrays.js"

export class AAItemSettings extends FormApplication {
    constructor() {
        super(...arguments);
        this.flags = this.object.data.flags.autoanimations
        //this.exampleOption = exampleOption;
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/aa-item-settings.html',
            id: 'AA-item-settings',
            title: game.i18n.localize("AUTOANIM.tabTitle"),
            resizable: true,
            width: 600,
            height: "auto",
            closeOnSubmit: true,

            tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "animations" }]
        });
    }

    getData() {
        //this.object.unsetFlag("autoanimations", "defaults")
        const flags = this.object.data.flags;
        const patreon = moduleIncludes("jb2a_patreon");
        const itemNameItem = this.object.name?.toLowerCase() ?? "";
        const oldName = this.object.name;
        const itemNameFlag = flags.autoanimations?.animName?.toLowerCase() ?? "";
        //let isOverride = flags.autoanimations?.override;
        const override = flags.autoanimations?.override;
        let oldItemName;
        switch (true) {
            case (!override):
            case override && itemNameFlag === '':
                oldItemName = itemNameItem;
                break;
            default:
                oldItemName = itemNameFlag;
                break;
        }
        console.log(oldItemName)
        const conversion = nameConversion(oldItemName)
        /*
        if (flags.autoanimations === undefined) {
            this.object.setFlag("autoanimations", "animName", conversion[2]);
            this.object.setFlag("autoanimations", "color", conversion[1]);
            this.render();
        }
        */
        const itemName = conversion[0];
        const switchName = flags.autoanimations?.meleeSwitch?.animName ?? "";
        const sourceName = flags.autoanimations?.sourceToken?.name ?? "";
        const sourceVariant = flags.autoanimations?.sourceToken?.variant ?? "";
        const targetName = flags.autoanimations?.targetToken?.name ?? "";
        const targetVariant = flags.autoanimations?.targetToken?.variant ?? "";
        const animType = flags.autoanimations?.animType;
        const spellVariant = flags.autoanimations?.spellVar;
        const variant = flags.autoanimations?.dtvar ?? "01";
        const switchVariant = flags.autoanimations?.meleeSwitch?.rangeVar ?? "01";
        //let rangeSwitchType = flags.autoanimations?.meleeSwitch?.switchType || "on";
        const bardAnimation = flags.autoanimations?.bards?.bardAnim;
        const damageType = flags.autoanimations?.rangedOptions?.rangeDmgType ?? "regular";
        const switchDamageType = flags.autoanimations?.meleeSwitch?.rangeDmgType ?? "regular";
        //let bardTargetAnimation = flags.autoanimations?.bards?.bardTargetAnim;
        const explosionVariant = flags.autoanimations?.explodeVariant;
        //let impactVariant = flags.autoanimations?.impactVar || "";
        const templateType = flags.autoanimations?.templates?.tempType ?? "";
        const templateAnimation = flags.autoanimations?.templates?.tempAnim ?? "";
        const animationLoops = flags.autoanimations?.options?.loops > 50 ? 50 : flags.autoanimations?.options?.loops;
        const loopTemplate = flags.autoanimations?.templates?.tempLoop > 50 ? 50 : flags.autoanimations?.templates?.tempLoop;
        const explosionLoops = flags.autoanimations?.explodeLoop > 50 ? 50 : flags.autoanimations?.explodeLoop;
        const returnWeapons = ["dagger", "hammer", "greatsword", "chakram"];

        //let variantLength = variantLength(itemName, );
        console.log(itemName)
        const meleeLength = variantLength(itemName, "melee");
        const rangeLength = variantLength(itemName, "range");
        const staticLength = variantLength(itemName, "static");

        //const showScale = oldName.toLowerCase() === "bless" || oldName.toLowerCase() === "shield" || oldName.toLowerCase() === "bardicinspiration" ? true : false;
        //const autoName = rinseName(oldName);
        const autorecType = findObjectByNameFull(game.settings.get('autoanimations', 'aaAutorec'), rinseName(oldName));
        //let noRepeatDelay; //= autorecType === 'auras' || autorecType === 'templates' || autorecType === 'preset' ? false : true;
        let noScale = ['templates', 'range'];
        let noRepeatDelay = ['preset'];
        let noOptions = ['auras']
        if (autorecType) {console.log(autorecType[1])}
        let autoRepeatDelay; //= autorecType ? noRepeatDelay.some(el => autorecType[1] === el) : false;
        let noAutoScale; //= autorecType ? false : noScale.some(el => autorecType[1] === el) ;
        let autoNone; //= autorecType ? noOptions.some(el => autorecType[1] === el) : false;
        if (autorecType) {
            const WTF = noScale.some(el => autorecType[1] === el)
            autoRepeatDelay = noRepeatDelay.some(el => autorecType[1] === el);
            noAutoScale = WTF ? false : true;
            autoNone = noOptions.some(el => autorecType[1] === el);
            }

        let videoPreview = animPreview(flags, itemName);
        if (videoPreview === "no preview" && !override) { videoPreview = autoPreview(oldName, flags.autoanimations?.options?.autoColor, patreon, flags.autoanimations?.options?.overrideAuto) }
        let content = "";
        switch (true) {
            case videoPreview === "no preview":
            case !videoPreview:
                break;
            default:
                switch (game.settings.get("autoanimations", "videoLoop")) {
                    case "0":
                        break;
                    case "1":
                        content = `<video class="aa-video-previews" src="${videoPreview}" controls loop> </video>`;
                        break;
                    case "2":
                        content = `<video class="aa-video-previews" src="${videoPreview}" autoplay="autoplay" controls loop> </video>`;
                        break;
                }
        }
        return {
            defaultCheck: AAITEMCHECK.default.includes(itemName) || noRepeatDelay,
            autoRepeatDelay: autoRepeatDelay,
            noAutoScale: noAutoScale,
            autoNone: autoNone,
            
            OldName: oldName,
            //convertedName: conversion[2],
            //autoRecognized: conversion[2] === undefined ? false : true,
            autoRecognized: checkAutoRec(oldName),
            autoRecognizedNoOverride: checkAutoRec(oldName) && !override,
            t2t3: override && (animType === "t2" || animType === "t3"),
            t4: override && animType === "t4",
            t5: override && animType === "t5",
            t6: override && animType === "t6",
            t7: override && animType === "t7",
            t8: override && animType === "t8",
            t9t10: override && (animType === "t9" || animType === "t10"),
            t11: override && animType === "t11",
            t12: override && animType === "t12",
            t13: override && animType === "t13",

            bardicOptions: itemName === "bardicinspiration" ? true : false,
            bardAnimName: AUTOANIM.localized(AUTOANIM.bardAnimType),
            bardAnimTarget: AUTOANIM.localized(AUTOANIM.bardAnimType),

            huntermarkAnim: patreon ? AUTOANIM.localized(AUTOANIM.hmAnim) : AUTOANIM.localized(AUTOANIM.hmAnimFree),

            animationLoops: animationLoops || 1,
            animationLoopDelay: flags.autoanimations?.options?.loopDelay ?? 250,
            scale: flags.autoanimations?.options?.scale ?? 1,

            customPath01: flags.autoanimations?.options?.customPath01 || "",
            customExplosion: flags.autoanimations?.options?.customExplosion ?? "",

            animationType: AUTOANIM.localized(AUTOANIM.animTypePick),
            animationNames: animationName(animType, patreon),

            thrownVariantShow: (itemName.includes("lasersword") || itemName.includes("dagger") || itemName.includes("handaxe")) || itemName.includes("chakram") && (animType === "t2" || animType === "t4") && override ? true : false,

            dsDelaySelf: flags.autoanimations?.divineSmite?.dsSelfDelay ?? 1,
            dsDelayTarget: flags.autoanimations?.divineSmite?.dsTargetDelay ?? 1250,

            explosionVariants: animType === "t10" ? AUTOANIM.localized(AUTOANIM.selfemanation) : AUTOANIM.localized(AUTOANIM.explodeVariant),
            explosionRadius: flags.autoanimations?.explodeRadius ?? 5,
            explosionLoops: explosionLoops || 1,
            explosionDelay: flags.autoanimations?.explodeDelay ?? 0,

            explosionAudioFile: flags.autoanimations?.allSounds?.explosion?.file || "",
            delayExAudio: flags.autoanimations?.allSounds?.explosion?.delay || 0,
            volumeExAudio: flags.autoanimations?.allSounds?.explosion?.volume || 0.25,

            auraRadius: flags.autoanimations?.selfRadius || 5,
            hexColour: flags.autoanimations?.animTint || `#FFFFFF`,
            opacity: flags.autoanimations?.auraOpacity || ".75",

            teleRange: flags.autoanimations?.teleDist || "30",

            templateTypes: AUTOANIM.localized(AUTOANIM.templateType),
            templateAnimations: animTemplates(templateType),
            loopTemplate: loopTemplate || 1,
            templateLoopDelay: flags.autoanimations?.templates?.loopDelay ?? 250,
            customTemplatePath: flags.autoanimations?.templates?.customPath || "",
            templateOpacity: flags.autoanimations?.templates?.opacity ?? 0.75,
            makePersistent: templateType === "circle" || templateType === "rect",
            persistent: flags.autoanimations?.templates?.persistent && (templateType === "circle" || templateType === "rect"),
            occlusionAlpha: flags.autoanimations?.templates?.occlusionAlpha ?? "0",

            itemAudio: flags.autoanimations?.allSounds?.item?.file || "",
            delayAudio: flags.autoanimations?.allSounds?.item?.delay || 0,
            volumeAudio: flags.autoanimations?.allSounds?.item?.volume || 0.25,

            rangeSwitch: patreon ? AUTOANIM.localized(AUTOANIM.animNameSwitch) : AUTOANIM.localized(AUTOANIM.animNameSwitchFree),
            showRSVariant: (switchName.includes("lasersword") || switchName === "dagger" || switchName === "handaxe") && animType === "t2" && override ? true : false,
            switchType: switchName === "bolt" || switchName === "bullet" || switchName === "arrow" ? true : false,
            switchRange: flags.autoanimations?.meleeSwitch?.range ?? 2,
            switchManual: flags.autoanimations?.meleeSwitch?.detect === "manual" ? true : false,
            rangeSwitchType: flags.autoanimations?.meleeSwitch?.switchType === "custom",//rangeSwitchType === "custom",
            returning: returnWeapons.some(el => switchName.includes(el)),

            rangedType: itemName === "bolt" || itemName === "bullet" || itemName === "arrow" ? true : false,
            sneakAttack: itemName === "sneakattack" ? true : false,

            flags: this.object.data.flags,
            content: content,

            sourceCustom: flags.autoanimations?.sourceToken?.customPath ?? "",
            sourceLoops: flags.autoanimations?.sourceToken?.loops ?? 1,
            sourceLoopDelay: flags.autoanimations?.sourceToken?.loopDelay ?? 250,
            sourceScale: flags.autoanimations?.sourceToken?.scale ?? 1,
            sourceDelayAfter: flags.autoanimations?.sourceToken?.delayAfter ?? 500,
            sourceAnimations: AUTOANIM.localized(AUTOANIM.tokenAnimations),
            sourceColor: flags.autoanimations?.sourceToken?.color ?? "",
            sourceColors: staticColors(sourceName, patreon, sourceVariant),
            sourceMarker: flags.autoanimations?.sourceToken?.name === "marker" ? true : false,

            targetCustom: flags.autoanimations?.targetToken?.customPath ?? "",
            targetLoops: flags.autoanimations?.targetToken?.loops ?? 1,
            targetLoopDelay: flags.autoanimations?.targetToken?.loopDelay ?? 250,
            targetScale: flags.autoanimations?.targetToken?.scale ?? 1,
            targetDelayStart: flags.autoanimations?.targetToken?.delayStart ?? 500,
            targetAnimations: AUTOANIM.localized(AUTOANIM.tokenAnimations),
            targetColor: flags.autoanimations?.targetToken?.color ?? "",
            targetColors: staticColors(targetName, patreon, targetVariant),
            targetMarker: flags.autoanimations?.targetToken?.name === "marker" ? true : false,

            shieldOutro: AUTOANIM.localized(AUTOANIM.shieldOutro),
            shield: itemName === "shield",
            huntersMark: itemName === "huntersmark",
            sneakAttack: itemName === "sneakattack",
            bless: itemName === "bless" && animType === "t13",
            anchorX: flags.autoanimations?.options?.anchorX || 0.5,
            anchorY: flags.autoanimations?.options?.anchorY || 0.7,

            dontShowTarget: animType === 't8' || animType === 't10' || animType === 't11' || animType === 't12' || animType === "t13",

            meleeColors: menuColors(itemName, variant, "melee"),
            explosionColors: menuColors(explosionVariant, "", "static"),
            templateColors: menuColors(templateType, templateAnimation, "static"),
            bardSelfColors: menuColors(flags.autoanimations?.bards?.bardAnim, "", "static"),
            bardTargetColors: menuColors(flags.autoanimations?.bards?.bardTargetAnim, "", "static"),
            markerColors: menuColors("bardicinspiration", "marker", "static"),
            staticColors: menuColors(itemName, spellVariant, "static"),
            spellColors: menuColors(itemName, spellVariant, "range"),

            rangeColors: rangeColors(itemName, damageType, variant),
            switchColors: rangeColors(switchName, spellVariant, switchDamageType, switchVariant),

            meleeLength: meleeLength === 1 || !meleeLength ? false : true,//variantLength(itemName, "melee") === 1 ? false : true,
            rangeLength: rangeLength === 1 || !rangeLength ? false : true,//variantLength(itemName, "range") === 1 ? false : true,
            staticLength: staticLength === 1 || !staticLength ? false : true,//variantLength(itemName, "static") === 1 ? false : true,

            rangeVariant: variantOptions(itemName, "range"),
            switchVariant: variantOptions(switchName, "range"),
            meleeVariant: variantOptions(itemName, "melee"),
            staticVariant: variantOptions(itemName, "static"),

            autorecColor: autorecColors(oldName),
            autoRepeat: flags.autoanimations?.options?.autoRepeat || 1,
            autoDelay: flags.autoanimations?.options?.autoDelay || 500,
            autoScale: flags.autoanimations?.options?.autoScale || 1,
        };

    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('.kill-animation').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-not-disabled select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-not-disabled input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-not-disabled input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-not-disabled input[type="color"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.files').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-audio-checkbox input[type="checkbox"]').click(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-audio-checkbox input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.sourceOptions input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.sourceOptions select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.sourceOptions input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });

        /*
        html.find('button[name ="AAadd_field_button"]').click((e) => {
            e.preventDefault();

            let field = this.object.data.flags.autoanimations?.testSound;
            let length = Object.keys(field).length;
            //console.log(length)
            var key = length;
            var obj = {};
            obj[key] = {
                testFile: ""
            }
            //console.log(obj)
            mergeObject(this.object.data.flags.autoanimations.testSound, obj, {overwrite: false})
            this.render();
        })

        html.find('button[name ="AAremove_field_button"]').click((e) => {
            e.preventDefault();

            let field = this.object.data.flags.autoanimations?.testSound;
            let length = Object.keys(field).length;
            
            const index = e.delegateTarget.getAttribute('soundIndex');
            let killFlag = this.object.data.flags.autoanimations.testSound[index]
            console.log(index)
            this.object.unsetFlag("autoanimations", killFlag)
            
            //allSounds.splice(index, 1);
            this.render();
        })
        */
    }

    async _updateObject(event, formData) {
        formData = expandObject(formData);
        if (!formData.changes)
            formData.changes = [];
        formData.changes = Object.values(formData.changes);
        for (let c of formData.changes) {
            //@ts-ignore
            if (Number.isNumeric(c.value))
                c.value = parseFloat(c.value);
        }
        return this.object.update(formData);
    }
}

export default AAItemSettings;

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
