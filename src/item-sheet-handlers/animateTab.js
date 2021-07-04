import { AUTOANIM } from "./config.js";
import { colorChoices, animationName, bardColorTarget, explosionColors, animTemplates, templateColors, rangedDamageTypes } from "./tab-options.js";
import animPreview from "./anim-preview.js";
import { nameConversion } from "./name-conversions.js";

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
        let flags = this.object.data.flags;
        let patreon = moduleIncludes("jb2a_patreon");
        let itemNameItem = this.object.name?.toLowerCase() ?? "";
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
        let itemName = nameConversion(oldItemName);
        let animType = flags.autoanimations?.animType;
        let spellVariant = flags.autoanimations?.spellVar;
        let bardAnimation = flags.autoanimations?.bards?.bardAnim;
        let damageType = flags.autoanimations?.rangedOptions?.rangeDmgType ?? "regular";
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
                spellVariants = true;
                break;
            default:
                spellVariants = false;
        }
        let videoPreview = animPreview(flags.autoanimations, itemName);
        //console.log(videoPreview)
        let content = "";
        switch (true) {
            case videoPreview === "no preview":
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
        //console.log("Override is set to " + isOverride);
        //console.log("The Standard Item Name is " + itemNameItem);
        //console.log("The Flag Item Name is " + itemNameFlag);
        //console.log("The Final Item Name is " + oldItemName);
        return {
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

            animationLoops: flags.autoanimations?.spellOptions?.spellLoops ?? 1,
            loops: itemName === "magicmissile" ? true : false,

            spellVariants: spellVariants,
            spellVariant: AUTOANIM.localized(AUTOANIM.spellVariant),
            animationType: AUTOANIM.localized(AUTOANIM.animTypePick),
            animationNames: animationName(animType, patreon),
            animationColor: colorChoices(itemName, patreon, spellVariant, bardAnimation, damageType), //AUTOANIM.localized(AUTOANIM.animColorMelee),

            unarmedStrikeTypes: AUTOANIM.localized(AUTOANIM.uaStrikeType),
            uaStrikes: itemName === "unarmedstrike" || itemName === "flurryofblows" ? true : false,

            daggerVariant: patreon ? AUTOANIM.localized(AUTOANIM.daggerVariant) : AUTOANIM.localized(AUTOANIM.daggerVariantFree),
            daggerVariantShow: itemName === "dagger" && animType === "t2" && override ? true : false,

            dsDelaySelf: flags.autoanimations?.divineSmite?.dsSelfDelay ?? 1,
            dsDelayTarget: flags.autoanimations?.divineSmite?.dsTargetDelay ?? 1250,
            dsColorSelf: AUTOANIM.localized(AUTOANIM.dsSelf),
            dsColorTarget: AUTOANIM.localized(AUTOANIM.dsTarget),
            divineSmite: override && (animType === "t2" || animType === "t3") ? true : false,

            addExplosion: override && (animType === "t2" || animType === "t3" || animType === "t4") ? true : false,
            explosionVariants: animType === "t10" ? AUTOANIM.localized(AUTOANIM.selfemanation) : AUTOANIM.localized(AUTOANIM.explosionVariant),
            impactVariants: AUTOANIM.localized(AUTOANIM.impactVariant),
            impactShow: flags.autoanimations?.explodeVariant === "impact" ? true : false,
            explosionColors: explosionColors(explosionVariant, patreon, impactVariant),
            explosionRadius: AUTOANIM.localized(AUTOANIM.explosionRadius),
            explosionLoops: flags.autoanimations?.explodeLoop ?? 1,
            showExplosionOptions: (flags.autoanimations?.explosion && override && (animType === "t2" || animType === "t3" || animType === "t4")) ? true : false,

            explosionAudioFile: flags.autoanimations?.allSounds?.explosion?.file || "",
            delayExAudio: flags.autoanimations?.allSounds?.explosion?.delay || 0,
            volumeExAudio: flags.autoanimations?.allSounds?.explosion?.volume || 0.25,

            auraRadius: AUTOANIM.selfCastRadius,
            hexColour: flags.autoanimations?.animTint || `#FFFFFF`,
            opacity: flags.autoanimations?.auraOpacity || ".75",

            teleRange: flags.autoanimations?.teleDist || "30",

            templateTypes: AUTOANIM.localized(AUTOANIM.templateType),
            templateAnimations: animTemplates(templateType),
            templateAnimColors: templateColors(templateType, templateAnimation, patreon),
            loopTemplate: flags.autoanimations?.templates?.tempLoop ?? 1,
            customTemplatePath: flags.autoanimations?.templates?.customPath || "",

            itemAudio: flags.autoanimations?.allSounds?.item?.file,
            delayAudio: flags.autoanimations?.allSounds?.item?.delay,
            volumeAudio: flags.autoanimations?.allSounds?.item?.volume,

            rangeDmgType: rangedDamageTypes(itemName),
            rangedType: itemName === "bolt" || itemName === "bullet" || itemName === "arrow" ? true : false,
            sneakAttack: itemName === "sneakattack" ? true : false,

            flags: this.object.data.flags,
            content: content,
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
        //console.log(formData);
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
