import { AUTOANIM } from "./config.js";

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
        return {
          msg: this.exampleOption,
          color: 'red',
          animationType: AUTOANIM.localized(AUTOANIM.animTypePick),
          animationName: AUTOANIM.localized(AUTOANIM.animNameMeleeWeapon),
          animationColor: AUTOANIM.localized(AUTOANIM.animColorMelee),
          flags: this.object.data.flags,
        };

    }

    activateListeners(html) {
        super.activateListeners(html);
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
