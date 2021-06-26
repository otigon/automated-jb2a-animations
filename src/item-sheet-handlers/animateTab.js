import { AUTOANIM } from "./config.js";
import { colorChoices, animationName } from "./tab-options.js";

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
            title: 'AA FormApplication',
            resizable: true,
            width: 600,
            height: "auto",
            closeOnSubmit: false
        });
    }

    getData() {
        // Send data to the template
        let flags = this.object.data.flags;
        let itemNameItem = this.object.name?.toLowerCase() ?? "";
        let itemNameFlag = flags.autoanimations?.animName?.toLowerCase() ?? "";
        let itemName;
        let isOverride = flags.autoanimations?.override;
        let animType = flags.autoanimations?.animType;
        let ctaWarning = animType === "t11" ? true : false;
        let patreon = moduleIncludes("jb2a_patreon");
        let spellVariant = flags.autoanimations?.spellVar;
        let bardAnimation = flags.autoanimations?.bardAnim;
        let hideAll = flags.autoanimations?.killAnim ? false : true;
        let override = flags.autoanimations?.override ? true : false;
        let bardTarget = flags.autoanimations?.bards?.bardTarget ? true : false;
        let bardSelf = flags.autoanimations?.bards?.bardSelf ? true : false;
        let bardMarker = flags.autoanimations?.bards?.marker ? true : false;
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
            spellVariants: spellVariants,
            spellVariant: AUTOANIM.localized(AUTOANIM.spellVariant),
            animationType: AUTOANIM.localized(AUTOANIM.animTypePick),
            animationNames: animationName(animType, patreon),
            animationColor: colorChoices(itemName, patreon, spellVariant, bardAnimation), //AUTOANIM.localized(AUTOANIM.animColorMelee),
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
