import { AUTOANIM } from "./config.js";
import { rangeColors, meleeColors, staticColors, animationName, bardColorTarget, explosionColors, animTemplates, templateColors, rangedDamageTypes, tokenColors, thrownVariants, variantSpell } from "./tab-options.js";
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
        this.object.unsetFlag("autoanimations", "defaults")
        let flags = this.object.data.flags;
        let patreon = moduleIncludes("jb2a_patreon");
        let itemNameItem = this.object.name?.toLowerCase() ?? "";
        let oldName = this.object.name;
        let itemNameFlag = flags.autoanimations?.animName?.toLowerCase() ?? "";
        let isOverride = flags.autoanimations?.override;
        let oldItemName;
        switch (true) {
            case (!isOverride):
            case isOverride && itemNameFlag === '':
                oldItemName = itemNameItem;
                break;
            default:
                oldItemName = itemNameFlag;
                break;
        }
        let conversion = nameConversion(oldItemName)
        /*
        if (flags.autoanimations === undefined) {
            this.object.setFlag("autoanimations", "animName", conversion[2]);
            this.object.setFlag("autoanimations", "color", conversion[1]);
            this.render();
        }
        */
        let itemName = conversion[0];
        let switchName = flags.autoanimations?.meleeSwitch?.animName ?? "";
        let sourceName = flags.autoanimations?.sourceToken?.name ?? "";
        let sourceVariant = flags.autoanimations?.sourceToken?.variant ?? "";
        let targetName = flags.autoanimations?.targetToken?.name ?? "";
        let targetVariant = flags.autoanimations?.targetToken?.variant ?? "";
        let animType = flags.autoanimations?.animType;
        let spellVariant = flags.autoanimations?.spellVar;
        let variant = flags.autoanimations?.dtvar ?? "01";
        let switchVariant = flags.autoanimations?.meleeSwitch?.rangeVar ?? "01";
        let rangeSwitchType = flags.autoanimations?.meleeSwitch?.switchType || "on";
        let bardAnimation = flags.autoanimations?.bards?.bardAnim;
        let damageType = flags.autoanimations?.rangedOptions?.rangeDmgType ?? "regular";
        let switchDamageType = flags.autoanimations?.meleeSwitch?.rangeDmgType ?? "regular";
        let override = flags.autoanimations?.override ? true : false;
        let bardTargetAnimation = flags.autoanimations?.bards?.bardTargetAnim;
        let explosionVariant = flags.autoanimations?.explodeVariant;
        let impactVariant = flags.autoanimations?.impactVar || "";
        let templateType = flags.autoanimations?.templates?.tempType ?? "";
        let templateAnimation = flags.autoanimations?.templates?.tempAnim ?? "";
        let spellVariants;
        switch (true) {
            case itemName === "scorchingray" && animType === "t6":
            case itemName === "generichealing" && animType === "t7":
            case itemName === "shieldspell" && animType === "t13":
            case itemName === "cloudofdaggers" && animType === "t11":
            case itemName === "guidingbolt":
                spellVariants = true;
                break;
            default:
                spellVariants = false;
        }

        let animationLoops = flags.autoanimations?.options?.loops > 50 ? 50 : flags.autoanimations?.options?.loops;
        let loopTemplate =  flags.autoanimations?.templates?.tempLoop > 50 ? 50 : flags.autoanimations?.templates?.tempLoop;
        let explosionLoops = flags.autoanimations?.explodeLoop > 50 ? 50 : flags.autoanimations?.explodeLoop;
        let returnWeapons = ["dagger", "hammer", "greatsword", "chakram"];
        let videoPreview = animPreview(flags, itemName);
        if (videoPreview === "no preview" && !isOverride) { videoPreview = conversion[3] }
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
            defaultCheck: AAITEMCHECK.default.includes(itemName),
            OldName: oldName,
            convertedName: conversion[2],
            autoRecognized: conversion[2] === undefined ? false : true,
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
            bardColorTarget: bardColorTarget(bardTargetAnimation, patreon),
            bardMarkerColor: patreon ? AUTOANIM.localized(AUTOANIM.bardicMarkerColors) : AUTOANIM.localized(AUTOANIM.bardicMarkerColorsFree),

            huntermarkAnim: patreon ? AUTOANIM.localized(AUTOANIM.hmAnim) : AUTOANIM.localized(AUTOANIM.hmAnimFree),

            animationLoops: animationLoops || 1,
            animationLoopDelay: flags.autoanimations?.options?.loopDelay ?? 250,
            scale: flags.autoanimations?.options?.scale ?? 1,

            //enableCustom01: flags.autoanimations?.options?.enableCustom01 === "custom" ? true : false,
            customPath01: flags.autoanimations?.options?.customPath01 || "",
            customExplosion: flags.autoanimations?.options?.customExplosion ?? "",

            spellVariants: spellVariants,
            spellVariant: variantSpell(itemName, patreon),
            animationType: AUTOANIM.localized(AUTOANIM.animTypePick),
            animationNames: animationName(animType, patreon),

            unarmedStrikeTypes: AUTOANIM.localized(AUTOANIM.uaStrikeType),
            uaStrikes: itemName === "unarmedstrike" || itemName === "flurryofblows" ? true : false,

            thrownVariant: thrownVariants(itemName, patreon),
            thrownVariantShow: (itemName.includes("lasersword") || itemName.includes("dagger") || itemName.includes("handaxe")) && (animType === "t2" || animType === "t4") && override ? true : false,

            dsDelaySelf: flags.autoanimations?.divineSmite?.dsSelfDelay ?? 1,
            dsDelayTarget: flags.autoanimations?.divineSmite?.dsTargetDelay ?? 1250,
            dsColorSelf: AUTOANIM.localized(AUTOANIM.dsSelf),
            dsColorTarget: AUTOANIM.localized(AUTOANIM.dsTarget),
            divineSmite: override && (animType === "t2" || animType === "t3") ? true : false,

            addExplosion: (animType === "t2" || animType === "t3" || animType === "t4" || animType === "t5" || animType === "t6" || animType === "t7") ? true : false,
            explosionVariants: animType === "t10" ? AUTOANIM.localized(AUTOANIM.selfemanation) : AUTOANIM.localized(AUTOANIM.explodeVariant),
            impactVariants: AUTOANIM.localized(AUTOANIM.impactVariant),
            //explosionColors: explosionColors(explosionVariant, patreon),
            explosionRadius: flags.autoanimations?.explodeRadius ?? 5,
            explosionLoops: explosionLoops || 1,
            explosionDelay: flags.autoanimations?.explodeDelay ?? 0,
            showExplosionOptions: (flags.autoanimations?.explosion /*&& override*/ && (animType === "t2" || animType === "t3" || animType === "t4" || animType === "t5" || animType === "t6" || animType === "t7")) ? true : false,

            explosionAudioFile: flags.autoanimations?.allSounds?.explosion?.file || "",
            delayExAudio: flags.autoanimations?.allSounds?.explosion?.delay || 0,
            volumeExAudio: flags.autoanimations?.allSounds?.explosion?.volume || 0.25,

            auraRadius: flags.autoanimations?.selfRadius || 5,
            hexColour: flags.autoanimations?.animTint || `#FFFFFF`,
            opacity: flags.autoanimations?.auraOpacity || ".75",

            teleRange: flags.autoanimations?.teleDist || "30",

            templateTypes: AUTOANIM.localized(AUTOANIM.templateType),
            templateAnimations: animTemplates(templateType),
            //templateAnimColors: templateColors(templateType, templateAnimation, patreon),
            loopTemplate: loopTemplate || 1,
            templateLoopDelay: flags.autoanimations?.templates?.loopDelay ?? 250,
            customTemplatePath: flags.autoanimations?.templates?.customPath || "",
            templateOpacity: flags.autoanimations?.templates?.opacity ?? 0.75,
            makePersistent: templateType === "circle" || templateType === "rect",
            persistent: flags.autoanimations?.templates?.persistent && (templateType === "circle" || templateType === "rect"),
            occlusionAlpha: flags.autoanimations?.templates?.occlusionAlpha ?? "0",
            templateVariant: variantSpell(templateAnimation, patreon),

            itemAudio: flags.autoanimations?.allSounds?.item?.file || "",
            delayAudio: flags.autoanimations?.allSounds?.item?.delay || 0,
            volumeAudio: flags.autoanimations?.allSounds?.item?.volume || 0.25,

            rangeSwitch: patreon ? AUTOANIM.localized(AUTOANIM.animNameSwitch) : AUTOANIM.localized(AUTOANIM.animNameSwitchFree),
            rangeSwitchDmgType: rangedDamageTypes(switchName, patreon),
            rangeSwitchVariant: thrownVariants(switchName, patreon),
            showRSVariant: (switchName.includes("lasersword") || switchName === "dagger" || switchName === "handaxe") && animType === "t2" && override ? true : false,
            switchType: switchName === "bolt" || switchName === "bullet" || switchName === "arrow" ? true : false,
            switchRange: flags.autoanimations?.meleeSwitch?.range ?? 2,
            switchManual: flags.autoanimations?.meleeSwitch?.detect === "manual" ? true : false,
            rangeSwitchType: flags.autoanimations?.meleeSwitch?.switchType === "custom",//rangeSwitchType === "custom",
            returning: returnWeapons.some(el => switchName.includes(el)),

            rangeDmgType: rangedDamageTypes(itemName, patreon),
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
            sourceColors: tokenColors(patreon, sourceName, sourceVariant),
            sourceMarker: flags.autoanimations?.sourceToken?.name === "marker" ? true : false,

            targetCustom: flags.autoanimations?.targetToken?.customPath ?? "",
            targetLoops: flags.autoanimations?.targetToken?.loops ?? 1,
            targetLoopDelay: flags.autoanimations?.targetToken?.loopDelay ?? 250,
            targetScale: flags.autoanimations?.targetToken?.scale ?? 1,
            targetDelayStart: flags.autoanimations?.targetToken?.delayStart ?? 500,
            targetAnimations: AUTOANIM.localized(AUTOANIM.tokenAnimations),
            targetColor: flags.autoanimations?.targetToken?.color ?? "",
            targetColors: tokenColors(patreon, targetName, targetVariant),
            targetMarker: flags.autoanimations?.targetToken?.name === "marker" ? true : false,

            markerVariants: patreon ? AUTOANIM.localized(AUTOANIM.markerOptions) : AUTOANIM.localized(AUTOANIM.markerOptionsFree),
            shieldOutro: AUTOANIM.localized(AUTOANIM.shieldOutro),
            huntersMark: itemName === "huntersmark",
            sneakAttack: itemName === "sneakattack",
            bless: itemName === "bless",
            anchorX: flags.autoanimations?.options?.anchorX || 0.5,
            anchorY: flags.autoanimations?.options?.anchorY || 0.7,

            dontShowTarget: animType === 't8' || animType === 't10' || animType === 't11' || animType === 't12' || animType === "t13",

            meleeColors: meleeColors(itemName, patreon, variant), //AUTOANIM.localized(AUTOANIM.animColorMelee),
            rangeColors: rangeColors(itemName, patreon, spellVariant, damageType, variant),
            switchColors: rangeColors(switchName, patreon, spellVariant, switchDamageType, switchVariant),
            staticColors: staticColors(itemName, patreon, spellVariant, bardAnimation, damageType, variant),
            explosionColors: staticColors(explosionVariant, patreon, spellVariant, bardAnimation, damageType, variant),
            templateColors: staticColors(templateType, patreon, templateAnimation),
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
