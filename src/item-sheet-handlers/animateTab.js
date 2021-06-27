import { AUTOANIM } from "./config.js";
import { colorChoices, animationName, bardColorTarget, explosionColors, animTemplates, templateColors } from "./tab-options.js";
import animPreview from "./anim-preview.js";

export class AAFormApplication extends FormApplication {
    constructor() {
        super(...arguments);
        this.flags = this.object.data.flags.autoanimations
        //this.exampleOption = exampleOption;
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['form'],
            popOut: true,
            template: './modules/autoanimations/src/item-sheet-handlers/my-templates/myFormApplication.html',
            id: 'AA-form-application',
            title: 'Automated Animations Settings',
            resizable: true,
            width: 600,
            height: "auto",
            closeOnSubmit: false
        });
    }

    getData() {
        // Send data to the template
        let flags = this.object.data.flags;
        let AAflags = flags.autoanimations;
        console.log(AAflags);
        let itemNameItem = this.object.name?.toLowerCase() ?? "";
        let itemNameFlag = flags.autoanimations?.animName?.toLowerCase() ?? "";
        let itemName;
        let isOverride = flags.autoanimations?.override;
        let animType = flags.autoanimations?.animType;
        let ctaWarning = animType === "t11" ? true : false;
        let patreon = moduleIncludes("jb2a_patreon");
        let spellVariant = flags.autoanimations?.spellVar;
        let bardAnimation = flags.autoanimations?.bards?.bardAnim;
        let hideAll = flags.autoanimations?.killAnim ? false : true;
        let override = flags.autoanimations?.override ? true : false;
        let bardTarget = flags.autoanimations?.bards?.bardTarget ? true : false;
        let bardSelf = flags.autoanimations?.bards?.bardSelf ? true : false;
        let bardMarker = flags.autoanimations?.bards?.marker ? true : false;
        let bardTargetAnimation = flags.autoanimations?.bards?.bardTargetAnim;
        let bardMarkerColor = patreon ? AUTOANIM.localized(AUTOANIM.bardicMarkerColors) : AUTOANIM.localized(AUTOANIM.bardicMarkerColorsFree);
        switch (true) {
            case (!isOverride):
            case isOverride && itemNameFlag === '':
                itemName = itemNameItem;
                break;
            default:
                itemName = itemNameFlag;
                break;
        }
        let bardicOptions = itemName === "bardic inspiration" ? true : false;
        let bardicOptionsFlip = itemName === "bardic inspiration" ? false : true;

        let loops = itemName.includes("magic missile") ? true : false;
        let animationLoops = flags.autoanimations?.spellOptions?.spellLoops ?? 1;

        let uaStrikes = itemName.includes("unarmed strike") || itemName.includes ("flurry of blows") ? true : false;

        let daggerVariant = patreon ? AUTOANIM.localized(AUTOANIM.daggerVariant) : AUTOANIM.localized(AUTOANIM.daggerVariantFree);
        let daggerVariantShow = itemName.includes(game.i18n.format("AUTOANIM.itemDagger").toLowerCase()) && animType === "t2" && override ? true : false;

        let dsDelaySelf = flags.autoanimations?.divineSmite?.dsSelfDelay ?? 1;
        let dsDelayTarget = flags.autoanimations?.divineSmite?.dsTargetDelay ?? 1250;
        let divineSmite = animType === "t2" || animType === "t3" ? true : false;
        let dsEnabled = flags.autoanimations?.divineSmite?.dsEnable && (animType === "t1" || animType === "t2") ? true : false;

        let explosionVariants = animType === "t10" ? AUTOANIM.localized(AUTOANIM.selfemanation) : AUTOANIM.localized(AUTOANIM.explosionVariant);
        let explosionVariant = flags.autoanimations?.explodeVariant;
        let explosionOptions = animType === "t9" || animType === "t10" ? true : false;
        let explosionFlip = animType === "t9" || animType === "t10" ? false : true;
        let explosionLoops = flags.autoanimations?.explodeLoop ?? 1;

        let Aura = animType === "t11" && override ? true : false;

        let teleport = animType === "t12" && override ? true : false;

        let templateType = flags.autoanimations?.templates?.tempType ?? "";
        let templateAnimation = flags.autoanimations?.templates?.tempAnim ?? "";
        let templates = animType === "t8" ? true : false;
        let templatesFlip = animType === "t8" ? false : true;
        let loopTemplate = flags.autoanimations?.templates?.tempLoop ?? 1;

        let spellVariants;
        switch (itemName) {
            case "scorching ray":
            case "generic healing":
                spellVariants = true;
                break;
            default:
                spellVariants = false;
        }
        console.log("Override is set to " + isOverride);
        console.log("The Standard Item Name is " + itemNameItem);
        console.log("The Flag Item Name is " + itemNameFlag);
        console.log("The Final Item Name is " + itemName);
        return {
            hideAll: hideAll,
            ctaWarning: ctaWarning,
            override: override,
            bardicOptions: bardicOptions,
            bardTarget: bardTarget,
            bardSelfOptions: bardSelf,
            bardicOptionsFlip: bardicOptionsFlip,
            bardMarker: bardMarker,
            bardAnimName: AUTOANIM.localized(AUTOANIM.bardAnimType),
            bardAnimTarget: AUTOANIM.localized(AUTOANIM.bardAnimType),
            bardColorTarget: bardColorTarget(bardTargetAnimation, patreon),
            bardMarkerColor: bardMarkerColor,
            animationLoops: animationLoops,
            loops: loops,
            spellVariants: spellVariants,
            spellVariant: AUTOANIM.localized(AUTOANIM.spellVariant),
            animationType: AUTOANIM.localized(AUTOANIM.animTypePick),
            animationNames: animationName(animType, patreon),
            animationColor: colorChoices(itemName, patreon, spellVariant, bardAnimation), //AUTOANIM.localized(AUTOANIM.animColorMelee),
            unarmedStrikeTypes: AUTOANIM.localized(AUTOANIM.uaStrikeType),
            uaStrikes: uaStrikes,
            daggerVariant: daggerVariant,
            daggerVariantShow: daggerVariantShow,

            dsDelaySelf: dsDelaySelf,
            dsDelayTarget: dsDelayTarget,
            dsColorSelf: AUTOANIM.localized(AUTOANIM.dsSelf),
            dsColorTarget: AUTOANIM.localized(AUTOANIM.dsTarget),
            divineSmite: divineSmite,
            dsEnabled: dsEnabled,

            explosionVariants: explosionVariants,
            impactVariants: AUTOANIM.localized(AUTOANIM.impactVariant),
            explosionColors: explosionColors(explosionVariant, patreon),
            explosionRadius: AUTOANIM.localized(AUTOANIM.explosionRadius),
            explosionLoops: explosionLoops,
            explosionOptions: explosionOptions,
            explosionFlip: explosionFlip,

            auraRadius: AUTOANIM.selfCastRadius,
            hexColour: flags.autoanimations?.animTint || `#FFFFFF`,
            opacity: flags.autoanimations?.auraOpacity || ".75",
            Aura: Aura,

            teleRange: flags.autoanimations?.teleDist || "30",
            teleport: teleport,
            
            templateTypes: AUTOANIM.localized(AUTOANIM.templateType),
            templateAnimations: animTemplates(templateType),
            templateAnimColors: templateColors(templateType, templateAnimation, patreon),
            templates: templates,
            loopTemplate: loopTemplate,
            templatesFlip: templatesFlip,

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

export default AAFormApplication;

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
