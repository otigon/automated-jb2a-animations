import { AUTOANIM } from "./config.js";
import { colorChoices, animationName, bardColorTarget, explosionColors, animTemplates, templateColors } from "./tab-options.js";
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
            classes: ['form'],
            popOut: true,
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/aa-item-settings.html',
            id: 'AA-form-application',
            title: 'Automated Animations Settings',
            resizable: true,
            width: 600,
            height: "auto",
            closeOnSubmit: true
        });
    }

    getData() {
        // Send data to the template
        let flags = this.object.data.flags;
        //let AAflags = flags.autoanimations;
        let patreon = moduleIncludes("jb2a_patreon");

        //console.log(AAflags);
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
        //let ctaWarning = animType === "t11" ? true : false;
        let spellVariant = flags.autoanimations?.spellVar;
        let bardAnimation = flags.autoanimations?.bards?.bardAnim;
        //let hideAll = flags.autoanimations?.killAnim ? false : true;
        let override = flags.autoanimations?.override ? true : false;
        //let bardTarget = flags.autoanimations?.bards?.bardTarget ? true : false;
        //let bardSelf = flags.autoanimations?.bards?.bardSelf ? true : false;
        //let bardMarker = flags.autoanimations?.bards?.marker ? true : false;
        let bardTargetAnimation = flags.autoanimations?.bards?.bardTargetAnim;
        //let bardMarkerColor = patreon ? AUTOANIM.localized(AUTOANIM.bardicMarkerColors) : AUTOANIM.localized(AUTOANIM.bardicMarkerColorsFree);
        //let bardicOptions = itemName === "bardic inspiration" ? true : false;
        //let bardicOptionsFlip = itemName === "bardic inspiration" ? false : true;

        //let loops = itemName === "magic missile" ? true : false;
        //let animationLoops = flags.autoanimations?.spellOptions?.spellLoops ?? 1;

        //let uaStrikes = itemName === "unarmed strike" || itemName === "flurry of blows" ? true : false;

        //let daggerVariant = patreon ? AUTOANIM.localized(AUTOANIM.daggerVariant) : AUTOANIM.localized(AUTOANIM.daggerVariantFree);
        //let daggerVariantShow = itemName === "dagger" && animType === "t2" && override ? true : false;

        //let dsDelaySelf = flags.autoanimations?.divineSmite?.dsSelfDelay ?? 1;
        //let dsDelayTarget = flags.autoanimations?.divineSmite?.dsTargetDelay ?? 1250;
        //let divineSmite = animType === "t2" || animType === "t3" ? true : false;
        //let dsEnabled = flags.autoanimations?.divineSmite?.dsEnable && (animType === "t1" || animType === "t2") ? true : false;

        //let addExplosion = animType === "t2" || animType === "t3" || animType === "t4" ? true : false;
        //let explosionVariants = animType === "t10" ? AUTOANIM.localized(AUTOANIM.selfemanation) : AUTOANIM.localized(AUTOANIM.explosionVariant);
        let explosionVariant = flags.autoanimations?.explodeVariant;
        //let impactShow = explosionVariant === "impact" ? true : false;
        let impactVariant = flags.autoanimations?.impactVar || "";
        //let explosionOptions = animType === "t9" || animType === "t10" || flags.autoanimations?.explosion ? true : false;
        //let explosionFlip = animType === "t9" || animType === "t10" ? false : true;
        //let explosionLoops = flags.autoanimations?.explodeLoop ?? 1;

        //let Aura = animType === "t11" && override ? true : false;

        //let teleport = animType === "t12" && override ? true : false;

        let templateType = flags.autoanimations?.templates?.tempType ?? "";
        let templateAnimation = flags.autoanimations?.templates?.tempAnim ?? "";
        //let templates = animType === "t8" ? true : false;
        //let templatesFlip = animType === "t8" ? false : true;
        //let loopTemplate = flags.autoanimations?.templates?.tempLoop ?? 1;

        //let audioEnabled = flags.autoanimations?.allSounds?.item?.enableAudio ? true : false;
        //console.log(audioEnabled)
        //console.log(flags.autoanimations.allSounds.item.enableAudio)

        let spellVariants;
        switch (true) {
            case itemName === "scorching ray" && animType === "t6":
            case itemName === "generic healing" && animType === "t7":
                spellVariants = true;
                break;
            default:
                spellVariants = false;
        }
        console.log("Override is set to " + isOverride);
        console.log("The Standard Item Name is " + itemNameItem);
        console.log("The Flag Item Name is " + itemNameFlag);
        console.log("The Final Item Name is " + oldItemName);
        return {
            hideAll: flags.autoanimations.killAnim ? false : true,
            ctaWarning: animType === "t11" ? true : false,
            override: override,

            bardicOptions: itemName === "bardic inspiration" ? true : false,
            bardTarget: flags.autoanimations?.bards?.bardTarget ? true : false,
            bardSelfOptions: flags.autoanimations?.bards?.bardSelf ? true : false,
            bardicOptionsFlip: itemName === "bardic inspiration" ? false : true,
            bardMarker: flags.autoanimations?.bards?.marker ? true : false,
            bardAnimName: AUTOANIM.localized(AUTOANIM.bardAnimType),
            bardAnimTarget: AUTOANIM.localized(AUTOANIM.bardAnimType),
            bardColorTarget: bardColorTarget(bardTargetAnimation, patreon),
            bardMarkerColor: patreon ? AUTOANIM.localized(AUTOANIM.bardicMarkerColors) : AUTOANIM.localized(AUTOANIM.bardicMarkerColorsFree),

            animationLoops: flags.autoanimations?.spellOptions?.spellLoops ?? 1,
            loops: itemName === "magic missile" ? true : false,

            spellVariants: spellVariants,
            spellVariant: AUTOANIM.localized(AUTOANIM.spellVariant),
            animationType: AUTOANIM.localized(AUTOANIM.animTypePick),
            animationNames: animationName(animType, patreon),
            animationColor: colorChoices(itemName, patreon, spellVariant, bardAnimation), //AUTOANIM.localized(AUTOANIM.animColorMelee),

            unarmedStrikeTypes: AUTOANIM.localized(AUTOANIM.uaStrikeType),
            uaStrikes: itemName === "unarmed strike" || itemName === "flurry of blows" ? true : false,

            daggerVariant: patreon ? AUTOANIM.localized(AUTOANIM.daggerVariant) : AUTOANIM.localized(AUTOANIM.daggerVariantFree),
            daggerVariantShow: itemName === "dagger" && animType === "t2" && override ? true : false,

            dsDelaySelf: flags.autoanimations?.divineSmite?.dsSelfDelay ?? 1,
            dsDelayTarget: flags.autoanimations?.divineSmite?.dsTargetDelay ?? 1250,
            dsColorSelf: AUTOANIM.localized(AUTOANIM.dsSelf),
            dsColorTarget: AUTOANIM.localized(AUTOANIM.dsTarget),
            divineSmite: animType === "t2" || animType === "t3" ? true : false,
            dsEnabled: flags.autoanimations?.divineSmite?.dsEnable && (animType === "t1" || animType === "t2") ? true : false,

            addExplosion: animType === "t2" || animType === "t3" || animType === "t4" ? true : false,
            explosionVariants: animType === "t10" ? AUTOANIM.localized(AUTOANIM.selfemanation) : AUTOANIM.localized(AUTOANIM.explosionVariant),
            impactVariants: AUTOANIM.localized(AUTOANIM.impactVariant),
            impactShow: flags.autoanimations?.explodeVariant === "impact" ? true : false,
            explosionColors: explosionColors(explosionVariant, patreon, impactVariant),
            explosionRadius: AUTOANIM.localized(AUTOANIM.explosionRadius),
            explosionLoops: flags.autoanimations?.explodeLoop ?? 1,
            explosionOptions: animType === "t9" || animType === "t10" || flags.autoanimations?.explosion ? true : false,
            explosionFlip: animType === "t9" || animType === "t10" ? false : true,

            explosionAudio: flags.autoanimations?.allSounds?.explosion?.file || "",
            delayExAudio: flags.autoanimations?.allSounds?.explosion?.delay || 0,
            volumeExAudio: flags.autoanimations?.allSounds?.explosion?.volume || 0.25,
            explosionAudio: flags.autoanimations?.allSounds?.explosion?.audioExplodeEnabled || false,

            auraRadius: AUTOANIM.selfCastRadius,
            hexColour: flags.autoanimations?.animTint || `#FFFFFF`,
            opacity: flags.autoanimations?.auraOpacity || ".75",
            Aura: animType === "t11" && override ? true : false,

            teleRange: flags.autoanimations?.teleDist || "30",
            teleport: animType === "t12" && override ? true : false,
            
            templateTypes: AUTOANIM.localized(AUTOANIM.templateType),
            templateAnimations: animTemplates(templateType),
            templateAnimColors: templateColors(templateType, templateAnimation, patreon),
            templates: animType === "t8" ? true : false,
            loopTemplate: flags.autoanimations?.templates?.tempLoop ?? 1,
            templatesFlip: animType === "t8" ? false : true,
            customTemplatePath: flags.autoanimations?.templates?.customPath || "",
            customChecked: flags.autoanimations?.templates?.customAnim ? true : false,
            customCheckedFlip: flags.autoanimations?.templates?.customAnim ? false : true,

            delayAudio: flags.autoanimations?.allSounds?.item?.delay || 0,
            volumeAudio: flags.autoanimations?.allSounds?.item?.volume || 0.25,
            itemAudio: flags.autoanimations?.allSounds?.item?.file || "",
            audioEnabled: flags.autoanimations?.allSounds?.item?.enableAudio ? true : false,

            flags: this.object.data.flags,
        };

    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('.animation-name').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-type').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.kill-animation').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.overide').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-not-disabled select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        
        html.find('.audio-checkbox input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.audio-checkbox input[type="Number"]').change(evt => {
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
        html.find('.bard-options input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.files').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
    }

    async _updateObject(event, formData) {
        console.log(formData);
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
