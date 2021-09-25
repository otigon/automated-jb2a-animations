import { AUTOANIM } from "./config.js";
import { AATabFunctions } from "../aa-classes/tab-options.js";
import { AutorecFunctions } from "../aa-classes/autorecFunctions.js";
import { AAITEMCHECK } from "../animation-functions/item-arrays.js"
import { aaColorMenu } from "../animation-functions/databases/jb2a-menu-options.js";
export class AAItemSettings extends FormApplication {
    constructor() {
        super(...arguments);
        this.flags = this.object.data.flags.autoanimations
        //this.exampleOption = exampleOption;
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/item-central.html',
            id: 'AA-item-settings',
            title: game.i18n.localize("AUTOANIM.tabTitle"),
            resizable: true,
            width: 700,
            height: "auto",
            closeOnSubmit: true,

            tabs: [{ navSelector: ".tabs", contentSelector: "form", initial: "animations" }]
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
        //const conversion = nameConversion(oldItemName)
        /*
        if (flags.autoanimations === undefined) {
            this.object.setFlag("autoanimations", "animName", conversion[2]);
            this.object.setFlag("autoanimations", "color", conversion[1]);
            this.render();
        }
        */
        //const itemName = conversion[0];
        const itemName = oldItemName.replace(/\s+/g, '').toLowerCase()
        const switchName = flags.autoanimations?.meleeSwitch?.animName ?? "";
        const sourceName = flags.autoanimations?.sourceToken?.name ?? "";
        const sourceVariant = flags.autoanimations?.sourceToken?.variant ?? "";
        const targetName = flags.autoanimations?.targetToken?.name ?? "";
        const targetVariant = flags.autoanimations?.targetToken?.variant ?? "";
        const animType = flags.autoanimations?.animType;
        const spellVariant = flags.autoanimations?.spellVar;
        const variant = AATabFunctions._variant(flags);//flags.autoanimations?.dtvar ?? "01";
        const switchVariant = flags.autoanimations?.meleeSwitch?.rangeVar ?? "01";
        //let rangeSwitchType = flags.autoanimations?.meleeSwitch?.switchType || "on";
        const bardAnimation = flags.autoanimations?.bards?.bardAnim;
        const damageType = flags.autoanimations?.rangedOptions?.rangeDmgType ?? "regular";
        const switchDamageType = flags.autoanimations?.meleeSwitch?.rangeDmgType ?? "regular";
        //let bardTargetAnimation = flags.autoanimations?.bards?.bardTargetAnim;
        const explosionVariant = flags.autoanimations?.explodeVariant ?? '';
        //let impactVariant = flags.autoanimations?.impactVar || "";
        const templateType = flags.autoanimations?.templates?.tempType ?? "";
        const templateAnimation = flags.autoanimations?.templates?.tempAnim ?? "";
        const animationLoops = flags.autoanimations?.options?.loops > 50 ? 50 : flags.autoanimations?.options?.loops;
        const loopTemplate = flags.autoanimations?.templates?.tempLoop > 50 ? 50 : flags.autoanimations?.templates?.tempLoop;
        const explosionLoops = flags.autoanimations?.explodeLoop > 50 ? 50 : flags.autoanimations?.explodeLoop;
        const returnWeapons = ["dagger", "hammer", "greatsword", "chakram"];

        //let variantLength = variantLength(itemName, );

        const meleeLength = AATabFunctions.variantLength(itemName, "melee");
        const rangeLength = AATabFunctions.variantLength(itemName, "range");
        const staticLength = AATabFunctions.variantLength(itemName, "static");

        const autorecType = AutorecFunctions._findObjectFromArray(game.settings.get('autoanimations', 'aaAutorec'), AutorecFunctions._rinseName(oldName));

        let noScale = ['templates', 'range'];
        let noRepeatDelay = ['preset'];
        let noOptions = ['auras']

        let autoRepeatDelay;
        let noAutoScale;
        let autoNone;
        if (autorecType) {
            const WTF = noScale.some(el => autorecType[1] === el)
            autoRepeatDelay = noRepeatDelay.some(el => autorecType[1] === el);
            noAutoScale = WTF ? false : true;
            autoNone = noOptions.some(el => autorecType[1] === el);
        }

        const autoCheck = AutorecFunctions._checkAutoRec(oldName);
        const autoObject = autoCheck ? AutorecFunctions._findObjectFromArray(game.settings.get('autoanimations', 'aaAutorec'), AutorecFunctions._rinseName(oldName)) : {};
        const autoOptions = autoCheck ? AutorecFunctions._autorecChoices(oldName, flags) : { colors: null, variantChoices: null };
        const videoPreview = override ? AATabFunctions._customPreview(flags, patreon) : AutorecFunctions._autoPreview(oldName, patreon, flags)
        //let videoPreview = 'no preview'; //= AATabFunctions._customPreview(flags, patreon) //= animPreview(flags, itemName);
        //if (videoPreview === "no preview" && !override) { videoPreview = AutorecFunctions._autoPreview(oldName, patreon, flags) }
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
            projectile:AUTOANIM.localized(AUTOANIM.animNameAttackSpell),
            OldName: oldName,

            //autoPreset: autoObject.menuSection === 'preset' ? true : false,
            fireball: autoObject.animation === 'fireball' && autoObject.menuSection === 'preset' ? autoObject : false,
            colormenu: aaColorMenu,
            explosionMenu: AUTOANIM.localized(AUTOANIM.explosionMenu),
            autoRecognized: autoCheck,
            autoRecognizedNoOverride: autoCheck && !override,
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
            animationNames: AATabFunctions.animationName(animType, patreon),

            thrownVariantShow: (itemName.includes("lasersword") || itemName.includes("dagger") || itemName.includes("handaxe")) || itemName.includes("chakram") && (animType === "t2" || animType === "t4") && override ? true : false,

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
            templateAnimations: AATabFunctions.animTemplates(templateType),
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
            sourceColors: AATabFunctions.staticColors(sourceName, patreon, sourceVariant),
            sourceVariant: AATabFunctions.variantOptions(sourceName, "static"),
            sourceMarker: flags.autoanimations?.sourceToken?.name === "marker" ? true : false,
            variantSource: flags.autoanimations?.sourceToken?.name === "tollthedead" ? true : false,
            sourceVariant: AUTOANIM.localized(AUTOANIM.tollthedeadVariants),

            targetCustom: flags.autoanimations?.targetToken?.customPath ?? "",
            targetLoops: flags.autoanimations?.targetToken?.loops ?? 1,
            targetLoopDelay: flags.autoanimations?.targetToken?.loopDelay ?? 250,
            targetScale: flags.autoanimations?.targetToken?.scale ?? 1,
            targetDelayStart: flags.autoanimations?.targetToken?.delayStart ?? 500,
            targetAnimations: AUTOANIM.localized(AUTOANIM.tokenAnimations),
            targetColor: flags.autoanimations?.targetToken?.color ?? "",
            targetColors: AATabFunctions.staticColors(targetName, patreon, targetVariant),
            targetVariant: AATabFunctions.variantOptions(sourceName, "static"),
            targetMarker: flags.autoanimations?.targetToken?.name === "marker" ? true : false,
            variantTarget: flags.autoanimations?.targetToken?.name === "tollthedead" ? true : false,
            targetVariant: AUTOANIM.localized(AUTOANIM.tollthedeadVariants),

            shieldOutro: AUTOANIM.localized(AUTOANIM.shieldOutro),
            shield: itemName === "shieldspell",
            huntersMark: itemName === "huntersmark",
            sneakAttack: itemName === "sneakattack",
            bless: itemName === "bless" && animType === "t13",
            anchorX: flags.autoanimations?.options?.anchorX || 0.5,
            anchorY: flags.autoanimations?.options?.anchorY || 0.7,

            dontShowTarget: animType === 't8' || animType === 't10' || animType === 't11' || animType === 't12' || animType === "t13",

            meleeColors: AATabFunctions.menuColors(itemName, variant, "melee"),
            explosionColors: AATabFunctions.menuColors(explosionVariant, "", "static"),
            templateColors: AATabFunctions.menuColors(templateType, templateAnimation, "static"),
            bardSelfColors: AATabFunctions.menuColors(flags.autoanimations?.bards?.bardAnim, "", "static"),
            bardTargetColors: AATabFunctions.menuColors(flags.autoanimations?.bards?.bardTargetAnim, "", "static"),
            markerColors: AATabFunctions.menuColors("bardicinspiration", "marker", "static"),
            staticColors: AATabFunctions.menuColors(itemName, spellVariant, "static"),
            spellColors: AATabFunctions.menuColors(itemName, spellVariant, "range"),

            rangeColors: AATabFunctions.rangeColors(itemName, damageType, variant),
            switchColors: AATabFunctions.rangeColors(switchName, spellVariant, switchDamageType, switchVariant),

            meleeLength: meleeLength === 1 || !meleeLength ? false : true,//variantLength(itemName, "melee") === 1 ? false : true,
            rangeLength: rangeLength === 1 || !rangeLength ? false : true,//variantLength(itemName, "range") === 1 ? false : true,
            staticLength: staticLength === 1 || !staticLength ? false : true,//variantLength(itemName, "static") === 1 ? false : true,

            rangeVariant: AATabFunctions.variantOptions(itemName, "range"),
            switchVariant: AATabFunctions.variantOptions(switchName, "range"),
            meleeVariant: AATabFunctions.variantOptions(itemName, "melee"),
            staticVariant: AATabFunctions.variantOptions(itemName, "static"),
            staticVariantTTD: AATabFunctions.variantOptions("tollthedead", "static"),

            autorecColor: autoOptions.colors,
            autorecVariants: autoOptions.variantChoices,
            autoRepeat: flags.autoanimations?.options?.autoRepeat || 1,
            autoDelay: flags.autoanimations?.options?.autoDelay || 500,
            autoScale: flags.autoanimations?.options?.autoScale || 1,

            ammo5e: game.system.id === "dnd5e" ? true : false,
            variantOption: explosionVariant === "tollthedead" ? true : false

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
