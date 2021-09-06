import { AUTOANIM } from "../item-sheet-handlers/config.js";
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";
import ctaCall from "../animation-functions/CTAcall.js";
import { exportAutorecToJSON, importAutorecFromJSON } from "./autoFunctions.js";

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
        console.log(data)
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
        html.find('.aa-autorecognition select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render())
        });
        html.on('click', '.collapse-button', (evt) => {
            var change = $(evt.currentTarget).closest('.form-fields').find('.hideme').is(":checked")
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
        html.find("#aa-autorec-export").click(exportAutorecToJSON);
		html.find("#aa-autorec-import").on("click", async () => {
			if (await importFromJSONDialog()) {
				this.close();
			}
		});
    }

    _loadSearch(evt) {
        //debugger
        const settings = this.getSettingsData()
        const search = settings.aaAutorec?.search?.toLowerCase()
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
        updateData[`aaAutorec.templates.${idx}.repeat`] = 1;
        updateData[`aaAutorec.templates.${idx}.delay`] = 500;
        updateData[`aaAutorec.templates.${idx}.below`] = false;
        updateData[`aaAutorec.templates.${idx}.opacity`] = 0.75;
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
        updateData[`aaAutorec.auras.${idx}.tint`] = '#ffffff';
        updateData[`aaAutorec.auras.${idx}.opacity`] = 0.75;
        updateData[`aaAutorec.auras.${idx}.scale`] = 1;
        updateData[`aaAutorec.auras.${idx}.below`] = true;

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
            try {Object.values(value.melee)}
            catch (exception) {return}
            Object.values(value.melee).forEach((val, idx) => compacted[idx] = val);
            value.melee = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            try {Object.values(value.range)}
            catch (exception) {return}
            Object.values(value.range).forEach((val, idx) => compacted[idx] = val);
            value.range = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            try {Object.values(value.static)}
            catch (exception) {return}
            Object.values(value.static).forEach((val, idx) => compacted[idx] = val);
            value.static = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            try {Object.values(value.templates)}
            catch (exception) {return}
            Object.values(value.templates).forEach((val, idx) => compacted[idx] = val);
            value.templates = compacted;
            await game.settings.set('autoanimations', key, value);
        }
        for (let [key, value] of Object.entries(data)) {
            const compacted = {};
            try {Object.values(value.auras)}
            catch (exception) {return}
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

async function importFromJSONDialog() {
	const content = await renderTemplate("templates/apps/import-data.html", { entity: "autoanimations", name: "aaAutorec" });
	let dialog = new Promise((resolve, reject) => {
		new Dialog({
			title: `Import Automatic Recognition Settings`,
			content: content,
			buttons: {
				import: {
					icon: '<i class="fas fa-file-import"></i>',
					label: "Import",
					callback: html => {
						//@ts-ignore
						const form = html.find("form")[0];
						if (!form.data.files.length)
							return ui.notifications?.error("You did not upload a data file!");
						readTextFromFile(form.data.files[0]).then(json => {
							importAutorecFromJSON(json);
							resolve(true);
						});
					}
				},
				no: {
					icon: '<i class="fas fa-times"></i>',
					label: "Cancel",
					callback: html => resolve(false)
				}
			},
			default: "import"
		}, {
			width: 400
		}).render(true);
	});
	return await dialog;
}
