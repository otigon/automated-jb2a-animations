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
            closeOnSubmit: false
        });
    }

    getData() {
        // Send data to the template
        let itemNameItem = this.object.name?.toLowerCase() ?? "";
        let itemNameFlag = this.object.data.flags.autoanimations?.animName?.toLowerCase() ?? "";
        let itemName;
        let isOverride = this.object.data.flags.autoanimations.override;
        let animType = this.object.data.flags.autoanimations.animType;
        let patreon = moduleIncludes("jb2a_patreon");
        let spellVariant = this.object.data.flags.autoanimations.spellVar;
        let bardAnimation = this.object.data.flags.autoanimations.bardAnim;
        switch (true) {
            case (!isOverride):
            case isOverride && itemNameFlag === '':
                itemName = itemNameItem;
                break;
            default:
                itemName = itemNameFlag;
                break;
        }
        console.log("Override is set to " + isOverride);
        console.log("The Standard Item Name is " + itemNameItem);
        console.log("The Flag Item Name is " + itemNameFlag);
        console.log("The Final Item Name is " + itemName);
        return {
            msg: this.exampleOption,
            color: 'red',
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
