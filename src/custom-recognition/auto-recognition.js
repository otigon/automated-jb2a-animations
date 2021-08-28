import { AUTOANIM } from "../item-sheet-handlers/config.js";
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";

export class aaMeleeAuto extends FormApplication {
    constructor(object = {}, options) {
        super(object, options);
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/aa-autorecognition.html',
            id: 'Automatic-Recognition',
            title: "Automatic Recognition Settings",
            resizable: true,
            width: 750,
            height: "auto",
            closeOnSubmit: true,

            tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "animations" }]
        });
    }

    getSettingsData() {
        let settingsData = {
            "aaMeleeAuto": game.settings.get("autoanimations", "aaMeleeAuto"),
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
        data.show = false;
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

        html.find('button.add-autorecog-melee').click(this._addMelee.bind(this));
        //html.find('button.add-autorecog-range').click(this._addRange.bind(this));
        html.find('button.remove-autorecog').click(this._onRemoveOverride.bind(this));
        html.find('.aa-autorecog input[type="text"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-autorecog select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render())
        });
        /*
        html.find('.animation-choice select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render())
        });
        */
        html.find('.aa-autorecog').dblclick(evt => {
            this.submit({ preventClose: true }).then(() => this.render())
        });
    }

    async _addMelee(event) {
        event.preventDefault();
        let idx = 0;
        console.log(event)
        const entries = event.target.closest('div.tab').querySelectorAll('div.melee-settings');
        console.log(entries)
        const last = entries[entries.length - 1];
        console.log(last)
        if (last) {
            idx = last.dataset.idx + 1;
        }
        console.log(idx)
        let updateData = {}
        updateData[`aaMeleeAuto.melee.${idx}.name`] = '';
        updateData[`aaMeleeAuto.melee.${idx}.type`] = 'melee';
        updateData[`aaMeleeAuto.melee.${idx}.animation`] = 'None';
        updateData[`aaMeleeAuto.melee.${idx}.variant`] = '';

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        console.log(updateData)
        this.render();
    }

    async _onRemoveOverride(event) {
        event.preventDefault();
        //console.log(event)
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
        //console.log(formData)
        const data = expandObject(formData);
        //console.log(data)
        for (let [key, value] of Object.entries(data)) {
            //console.log(key)
            //console.log(value)
            const compacted = {};
            Object.values(value.melee).forEach((val, idx) => compacted[idx] = val);
            value.melee = compacted;
            console.log(key)
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

export default aaMeleeAuto;

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

export class aaSpellAuto extends FormApplication {
    constructor(object = {}, options) {
        super(object, options);
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/aa-spell-autorec.html',
            id: 'Automatic-Recognition',
            title: "Automatic Recognition Settings",
            resizable: true,
            width: 750,
            height: "auto",
            closeOnSubmit: true,

            tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "animations" }]
        });
    }

    getSettingsData() {
        let settingsData = {
            "aaSpellAuto": game.settings.get("autoanimations", "aaSpellAuto"),
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
        data.show = false;
        console.log(data)
        return data
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('button.add-autorecog-spell').click(this._addSpell.bind(this));
        //html.find('button.add-autorecog-range').click(this._addRange.bind(this));
        html.find('button.remove-autorecog').click(this._onRemoveOverride.bind(this));
        html.find('.aa-spell-autorecog input[type="text"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-spell-autorecog select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render())
        });
        html.find('.aa-spell-autorecog').dblclick(evt => {
            this.submit({ preventClose: true }).then(() => this.render())
        });
    }

    async _addSpell(event) {
        event.preventDefault();
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.spell-settings');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`aaSpellAuto.range.${idx}.name`] = '';
        updateData[`aaSpellAuto.range.${idx}.type`] = 'range';
        updateData[`aaSpellAuto.range.${idx}.animation`] = 'None';
        updateData[`aaSpellAuto.range.${idx}.variant`] = '';

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _onRemoveOverride(event) {
        event.preventDefault();
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
        const data = expandObject(formData);
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            Object.values(value.range).forEach((val, idx) => compacted[idx] = val);
            value.range = compacted;
            console.log(key)
            await game.settings.set('autoanimations', key, value);
        }
    }
}

export class aaRangedAuto extends FormApplication {
    constructor(object = {}, options) {
        super(object, options);
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/aa-ranged-autorec.html',
            id: 'Automatic-Recognition',
            title: "Automatic Recognition Settings",
            resizable: true,
            width: 750,
            height: "auto",
            closeOnSubmit: true,

            tabs: [{ navSelector: ".tabs", contentSelector: ".content", initial: "animations" }]
        });
    }

    getSettingsData() {
        let settingsData = {
            "aaRangeAuto": game.settings.get("autoanimations", "aaRangeAuto"),
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
        data.show = false;
        console.log(data)
        return data
    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('button.add-autorecog-range').click(this._addRange.bind(this));
        //html.find('button.add-autorecog-range').click(this._addRange.bind(this));
        html.find('button.remove-autorecog').click(this._onRemoveOverride.bind(this));
        html.find('.aa-range-autorecog input[type="text"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-range-autorecog select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render())
        });
        html.find('.aa-range-autorecog').dblclick(evt => {
            this.submit({ preventClose: true }).then(() => this.render())
        });
    }

    async _addRange(event) {
        event.preventDefault();
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.range-settings');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`aaRangeAuto.range.${idx}.name`] = '';
        updateData[`aaRangeAuto.range.${idx}.type`] = 'range';
        updateData[`aaRangeAuto.range.${idx}.animation`] = 'None';
        updateData[`aaRangeAuto.range.${idx}.variant`] = '';

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _onRemoveOverride(event) {
        event.preventDefault();
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
        const data = expandObject(formData);
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            Object.values(value.range).forEach((val, idx) => compacted[idx] = val);
            value.range = compacted;
            console.log(key)
            await game.settings.set('autoanimations', key, value);
        }
    }
}
