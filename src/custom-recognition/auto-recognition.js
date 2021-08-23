import { aaAutoRecognition } from "./aaAutoRecList.js";
import { dnd5eAutoRec } from "./aaAutoRecList.js";
export class AAcustomRecog extends FormApplication {
    constructor(object = {}, options) {
        super(object, options);
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/aa-autorecognition.html',
            id: 'Automatic-Recognition',
            title: "Work in Progress",
            resizable: true,
            width: 600,
            height: "auto",
            closeOnSubmit: true,

            tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "animations" }]
        });
    }

    getSettingsData() {
        let settingsData = {
            "aaAutoRecognition": game.settings.get("autoanimations", "aaAutoRecognition"),
        }
        return settingsData;
    }

    getData() {
        let data = super.getData();
        data.settings = this.getSettingsData();
        console.log(data)
        return data
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('button.add-override').click(this._onAddOverride.bind(this));
        html.find('button.remove-override').click(this._onRemoveOverride.bind(this));
    }

    async _onAddOverride(event) {
        event.preventDefault();
        let idx = 0;
        console.log(event)
        const entries = event.target.closest('div').querySelectorAll('div.override-entry');
        console.log(entries)
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`aaAutoRecognition.overrides.${idx}.target`] = '';
        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _onRemoveOverride(event) {
        event.preventDefault();
        console.log(event)
        let idx = event.target.dataset.idx;
        const el = event.target.closest(`div[data-idx="${idx}"]`);
        if (!el) {
            return true;
        }
        el.remove();
        await this._onSubmit(event, { preventClose: true });
        this.render();
    }

    /** @override */
    async _updateObject(_, formData) {
        console.log(formData)
        const data = expandObject(formData);
        for (let [key, value] of Object.entries(data)) {
            console.log(key)
            console.log(value)
                const compacted = {};
                Object.values(value.overrides).forEach((val, idx) => compacted[idx] = val);
                value.overrides = compacted;
            await game.settings.set('autoanimations', key, value);
        }
    }

    /*
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
    */
}

export default AAcustomRecog;

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
