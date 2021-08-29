import { AUTOANIM } from "../item-sheet-handlers/config.js";
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";

export class aaAutoRecognition extends FormApplication {
    constructor(object = {}, options) {
        super(object, options);
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/custom-recognition/settings.html',
            id: 'automatic-recognition',
            title: "Automatic Recognition Settings",
            resizable: true,
            width: 750,
            height: "auto",
            closeOnSubmit: true,
            tabs: [{ navSelector: ".tabs", contentSelector: "form", initial: "name" }]
        });
    }

    getSettingsData() {
        let settingsData = {
            "aaAutorec": game.settings.get("autoanimations", "aaAutorec"),
        }
        return settingsData;
    }

    getData() {
        let data = super.getData();
        data.settings = this.getSettingsData();
        data.meleeList = AUTOANIM.localized(AUTOANIM.meleeWeapons);
        data.rangeList = AUTOANIM.localized(AUTOANIM.animNameRangeWeapon);
        data.spellList = AUTOANIM.localized(AUTOANIM.animNameAttackSpell);
        data.colors = aaColorMenu;
        data.variants = aaVariantMenu;
        data.show = false;
        data.system = { id: game.system.id, title: game.system.data.title }
        return data
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('button.add-autorecog-melee').click(this._addMelee.bind(this));
        html.find('button.add-autorecog-spell').click(this._addSpell.bind(this));
        html.find('button.add-autorecog-range').click(this._addRange.bind(this));

        html.find('button.remove-autorecog').click(this._onRemoveOverride.bind(this));
        //utilize html.on versus html.find
        //remove this.render() and add show/hide elements for menus (pre-populated)
        html.find('.aa-autorecognition select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render())
        });
        html.on('click', '.collapse-button', (evt) => {
            $(evt.currentTarget).closest('.flexcol').find('.flexrow').toggleClass('hidden')
            $(evt.currentTarget).toggleClass('fa-minus fa-plus')
        });
        html.on('keyup', '#aatest', this._onSearch.bind(this))
        html.on('change', '#aatest', (evt) => { 
            evt.preventDefault()
        })
    }

    _onSearch(evt) {
        const search = $(evt.currentTarget).val().toLowerCase();
        debugger
        this.element.find('.aa-search').each((index, element) => {
            const text = $(element).find('.auto-name').val().toLowerCase()
            if (text.includes(search)) {
                $(element).show(250)
            } else {
                $(element).hide()
            }
        })
    }


    async _addMelee(event) {
        event.preventDefault();
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.melee-settings');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`aaAutorec.melee.${idx}.name`] = '';
        updateData[`aaAutorec.melee.${idx}.type`] = 'melee';
        updateData[`aaAutorec.melee.${idx}.animation`] = 'None';
        updateData[`aaAutorec.melee.${idx}.variant`] = '';

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
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
        updateData[`aaAutorec.attackspell.${idx}.name`] = '';
        updateData[`aaAutorec.attackspell.${idx}.type`] = 'range';
        updateData[`aaAutorec.attackspell.${idx}.animation`] = 'None';
        updateData[`aaAutorec.attackspell.${idx}.variant`] = '';

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
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
        updateData[`aaAutorec.range.${idx}.name`] = '';
        updateData[`aaAutorec.range.${idx}.type`] = 'range';
        updateData[`aaAutorec.range.${idx}.animation`] = 'None';
        updateData[`aaAutorec.range.${idx}.variant`] = '';

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
            Object.values(value.melee).forEach((val, idx) => compacted[idx] = val);
            value.melee = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            Object.values(value.attackspell).forEach((val, idx) => compacted[idx] = val);
            value.attackspell = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            Object.values(value.range).forEach((val, idx) => compacted[idx] = val);
            value.range = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        /*
        //test for building array of auto-rec names
        let settings = game.settings.get('autoanimations', 'aaAutorec');
        console.log(settings)
        let meleeLength = Object.keys(settings.melee).length
        let meleeNameArray = [];
        let currentName;
        for (var i = 0; i < meleeLength; i++) {
            currentName = Object.entries(settings.melee[i])[0][1].toLowerCase()
            //console.log(currentName)
            meleeNameArray.push(currentName)
        }
        console.log(meleeNameArray)
        */
    }
}