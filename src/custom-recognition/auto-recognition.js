import { AUTOANIM } from "../item-sheet-handlers/config.js";
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";
import ctaCall from "../animation-functions/CTAcall.js";

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
            width: 700,
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
        data.selfList = AUTOANIM.localized(AUTOANIM.autoself);
        data.templateCircle = AUTOANIM.localized(AUTOANIM.circleAnimations);
        data.templateCone = AUTOANIM.localized(AUTOANIM.coneAnimations);
        data.templateRect = AUTOANIM.localized(AUTOANIM.rectangleAnimations);
        data.templateRay = AUTOANIM.localized(AUTOANIM.rayAnimations);
        data.auraList = AUTOANIM.localized(AUTOANIM.aura);

        data.colors = aaColorMenu;
        data.variants = aaVariantMenu;
        data.show = false;
        data.system = { id: game.system.id, title: game.system.data.title }
        return data
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('button.add-autorecog-melee').click(this._addMelee.bind(this));
        html.find('button.add-autorecog-range').click(this._addRange.bind(this));
        html.find('button.add-autorecog-static').click(this._addStatic.bind(this));
        html.find('button.add-autorecog-templates').click(this._addTemplate.bind(this));
        html.find('button.add-autorecog-auras').click(this._addAura.bind(this));
        //html.find('button.add-autorecog-template').click(this._addTemplate.bind(this));

        html.find('.autorec-menu-options input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render())
        })
        html.find('button.remove-autorecog').click(this._onRemoveOverride.bind(this));
        //utilize html.on versus html.find
        //remove this.render() and add show/hide elements for menus (pre-populated)
        html.find('.aa-autorecognition select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render())
        });
        /*
        html.on('click', '.collapse-button', (evt) => {
            $(evt.currentTarget).closest('.flexcol').find('.flexrow').toggleClass('hidden')
            $(evt.currentTarget).toggleClass('fa-minus fa-plus')
        });
        */
        html.on('click', '.collapse-button', (evt) => {
            var change = $(evt.currentTarget).closest('.form-fields').find('.hideme').is(":checked")
            console.log(change)
            if (change === true) {
                $(evt.currentTarget).closest('.form-fields').find('.hideme').prop('checked', false)
            } else {
                $(evt.currentTarget).closest('.form-fields').find('.hideme').prop('checked', true)
            }
            this.submit({ preventClose: true }).then(() => this.render())
        });
        html.on('keyup', '#aatest', this._onSearch.bind(this))
        //html.on('focus', '.aa-autorecognition', this._loadSearch.bind(this))
        html.on(this._loadSearch())
        html.on('open', '#aatest', (evt) => { 
            evt.preventDefault()
        })
    }

    _loadSearch(evt) {
        //debugger
        const settings = this.getSettingsData()
        const search = settings.aaAutorec.search.toLowerCase()
        this.element.find('.aa-search').each((index, element) => {
            const text = $(element).find('.auto-name').val().toLowerCase()
            if (text.includes(search)) {
                $(element).show(250)
            } else {
                $(element).hide()
            }
        })
    }
    
    _onSearch(evt) {
        const search = $(evt.currentTarget).val().toLowerCase();
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
        updateData[`aaAutorec.melee.${idx}.repeat`] = 1;
        updateData[`aaAutorec.melee.${idx}.delay`] = 500;
        updateData[`aaAutorec.melee.${idx}.scale`] = 1;
        updateData[`aaAutorec.melee.${idx}.below`] = false;

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
        updateData[`aaAutorec.range.${idx}.repeat`] = 1;
        updateData[`aaAutorec.range.${idx}.delay`] = 500;
        updateData[`aaAutorec.range.${idx}.below`] = false;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _addStatic(event) {
        event.preventDefault();
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.static-settings');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`aaAutorec.static.${idx}.name`] = '';
        updateData[`aaAutorec.static.${idx}.type`] = 'static';
        updateData[`aaAutorec.static.${idx}.animation`] = 'None';
        updateData[`aaAutorec.static.${idx}.variant`] = '';
        updateData[`aaAutorec.static.${idx}.repeat`] = 1;
        updateData[`aaAutorec.static.${idx}.delay`] = 500;
        updateData[`aaAutorec.static.${idx}.scale`] = 1;
        updateData[`aaAutorec.static.${idx}.below`] = false;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _addTemplate(event) {
        event.preventDefault();
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.templates-settings');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`aaAutorec.templates.${idx}.name`] = '';
        updateData[`aaAutorec.templates.${idx}.type`] = 'templates';
        updateData[`aaAutorec.templates.${idx}.animation`] = 'None';
        updateData[`aaAutorec.templates.${idx}.variant`] = '';
        updateData[`aaAutorec.templates.${idx}.repeat`] = 1;
        updateData[`aaAutorec.templates.${idx}.delay`] = 500;
        updateData[`aaAutorec.templates.${idx}.below`] = false;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _addAura(event) {
        event.preventDefault();
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.auras-settings');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`aaAutorec.auras.${idx}.name`] = '';
        updateData[`aaAutorec.auras.${idx}.type`] = 'static';
        updateData[`aaAutorec.auras.${idx}.animation`] = 'None';
        updateData[`aaAutorec.auras.${idx}.variant`] = '';
        updateData[`aaAutorec.auras.${idx}.tint`] = '#ffffff';
        updateData[`aaAutorec.auras.${idx}.opacity`] = 0.75;
        updateData[`aaAutorec.auras.${idx}.scale`] = 1;
        updateData[`aaAutorec.auras.${idx}.below`] = false;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    /*
    async _addStatic(event) {
        event.preventDefault();
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.static-settings');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`aaAutorec.static.${idx}.name`] = '';
        updateData[`aaAutorec.static.${idx}.type`] = 'static';
        updateData[`aaAutorec.static.${idx}.animation`] = 'None';
        updateData[`aaAutorec.static.${idx}.variant`] = '';
        updateData[`aaAutorec.static.${idx}.repeat`] = 1;
        updateData[`aaAutorec.static.${idx}.delay`] = 500;
        updateData[`aaAutorec.static.${idx}.scale`] = 1;
        updateData[`aaAutorec.static.${idx}.below`] = false;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }
    */
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
            Object.values(value.range).forEach((val, idx) => compacted[idx] = val);
            value.range = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            Object.values(value.static).forEach((val, idx) => compacted[idx] = val);
            value.static = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            Object.values(value.templates).forEach((val, idx) => compacted[idx] = val);
            value.templates = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            Object.values(value.auras).forEach((val, idx) => compacted[idx] = val);
            value.auras = compacted;
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