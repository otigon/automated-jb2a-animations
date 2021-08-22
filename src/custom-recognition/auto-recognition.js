
export class AAcustomRecog extends FormApplication {
    constructor() {
        super(...arguments);
        //this.exampleOption = exampleOption;
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/aa-autorecognition.html',
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

        return {
        };

    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('button.add-override').click(this._onAddOverride.bind(this));
        html.find('button.remove-override').click(this._onRemoveOverride.bind(this));
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

export default AAcustomRecog;

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
