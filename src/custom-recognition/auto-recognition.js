import { AUTOANIM } from "../item-sheet-handlers/config.js";
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";

export class AAcustomRecog extends FormApplication {
    constructor(object = {}, options) {
        super(object, options);
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/aa-autorecognition.html',
            id: 'Automatic-Recognition',
            title: "Automatic Recognition Settings",
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
        data.meleeList = AUTOANIM.localized(AUTOANIM.animNameMeleeWeapon);
        data.rangeList = AUTOANIM.localized(AUTOANIM.animNameRangeWeapon);
        data.spellList = AUTOANIM.localized(AUTOANIM.animNameAttackSpell);
        data.colors = aaColorMenu;
        data.variants = aaVariantMenu;
        //console.log(aaColorMenu)
        //console.log(aaVariantMenu)
        //let settings = this.getSettingsData();
        //let colors = aaColorMenu;
        //let index = data.indexOf()
        //let animationNames = animationNames(settings.aaAutoRecognition.overrides[idx].type);
        console.log(data)
        return data
        /*
        {
            settings: settings,
            meleeList: AUTOANIM.localized(AUTOANIM.animNameMeleeWeapon),
            rangeList: AUTOANIM.localized(AUTOANIM.animNameRangeWeapon),
            spellList: AUTOANIM.localized(AUTOANIM.animNameAttackSpell),

        }
        */
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('button.add-autorecog').click(this._onAddOverride.bind(this));
        html.find('button.remove-autorecog').click(this._onRemoveOverride.bind(this));
        html.find('.aa-autorecog input[type="text"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-autorecog select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render())
        });
        html.find('.aa-autorecog').dblclick(evt => {
            this.submit({ preventClose: true }).then(() => this.render())
        });
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
        updateData[`aaAutoRecognition.melee.${idx}.name`] = '';
        updateData[`aaAutoRecognition.melee.${idx}.type`] = 'None';
        updateData[`aaAutoRecognition.melee.${idx}.animation`] = 'None';
        updateData[`aaAutoRecognition.melee.${idx}.variant`] = '';
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
            Object.values(value.melee).forEach((val, idx) => compacted[idx] = val);
            value.melee = compacted;
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

function animationNames(type) {
    let nameList;
    switch (type) {
        case 'melee':
            nameList = AUTOANIM.localized(AUTOANIM.animNameMeleeWeapon)
            break;
        case 'range':
            nameList = AUTOANIM.localized(AUTOANIM.animNameRangeWeapon)
            break;
        case 'spell':
            nameList = AUTOANIM.localized(AUTOANIM.animNameAttackSpell)
            break;
    }
}