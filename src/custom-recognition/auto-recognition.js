import { aaMenuLists } from "../item-sheet-handlers/menu-lists.js";
import { aaTypeMenu, aaNameMenu, aaVariantMenu, aaColorMenu } from "../animation-functions/databases/jb2a-menu-options.js";
import { AutorecFunctions } from "../aa-classes/autorecFunctions.js";
import { autoRecMigration } from "./autoRecMerge.js";
//import { aaAutorec } from "./aaAutoRecList.js";

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

        data.menuTypes = aaTypeMenu,
        data.menuNames = aaNameMenu,
        data.menuVariants = aaVariantMenu,
        data.menuColors = aaColorMenu,

        data.currentAutoVersion = Object.keys(autoRecMigration.migrations).map(n => Number(n)).reverse()[0];
        data.settings = this.getSettingsData();

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
        html.find('button.add-autorecog-preset').click(this._addPreset.bind(this));
        html.find('button.add-autorecog-aefx').click(this._addAefx.bind(this));

        html.find('.duplicate-melee').click(this._duplicateMelee.bind(this))
        html.find('.duplicate-range').click(this._duplicateRange.bind(this))
        html.find('.duplicate-static').click(this._duplicateStatic.bind(this))
        html.find('.duplicate-templates').click(this._duplicateTemplate.bind(this))
        html.find('.duplicate-auras').click(this._duplicateAura.bind(this))
        html.find('.duplicate-preset').click(this._duplicatePreset.bind(this))
        html.find('.duplicate-aefx').click(this._duplicateAefx.bind(this))

        //html.find('button.add-autorecog-template').click(this._addTemplate.bind(this));
        html.find('.aa-autorecognition input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render())
        })
        html.find('.aa-autorec-submit-open').click(evt => {
            this.submit({ preventClose: true }).then(() => this.render())
        })
        //html.find('button.remove-autorecog').click(this._onRemoveOverride.bind(this));
        html.find('.remove-autorecog').click(this._onRemoveOverride.bind(this))
        html.on('click', '.enableMacro', (evt) => {
            var change = $(evt.currentTarget).closest('.form-fields').find('.showMacro').is(":checked")
            if (change === true) {
                $(evt.currentTarget).closest('.form-fields').find('.showMacro').prop('checked', false)
            } else {
                $(evt.currentTarget).closest('.form-fields').find('.showMacro').prop('checked', true)
            }
            this.submit({ preventClose: true }).then(() => this.render())
        });
        html.on('click', '.showSoundOnly', (evt) => {
            var change = $(evt.currentTarget).closest('.form-fields').find('.showSound').is(":checked")
            if (change === true) {
                $(evt.currentTarget).closest('.form-fields').find('.showSound').prop('checked', false)
            } else {
                $(evt.currentTarget).closest('.form-fields').find('.showSound').prop('checked', true)
            }
            this.submit({ preventClose: true }).then(() => this.render())
        });
        html.find('.aa-autorecognition select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render())
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
        html.on('click', '.button-2d', (evt) => {
            var change = $(evt.currentTarget).closest('.form-fields').find('.anim2d').is(":checked")
            if (change === true) {
                $(evt.currentTarget).closest('.form-fields').find('.anim2d').prop('checked', false)
            } else {
                $(evt.currentTarget).closest('.form-fields').find('.anim2d').prop('checked', true)
            }
            this.submit({ preventClose: true }).then(() => this.render())
        });
        html.on('keyup', '#aatest', this._onSearch.bind(this))
        //html.on('focus', '.aa-autorecognition', this._loadSearch.bind(this))
        html.on(this._loadSearch())
        html.on('open', '#aatest', (evt) => { 
            evt.preventDefault()
        })
        html.find("#aa-autorec-export").click(AutorecFunctions._exportAutorecToJSON);
		html.find("#aa-autorec-import").on("click", async () => {
			if (await importFromJSONDialog()) {
				this.close();
			}
		});
        html.find("#aa-autorec-merge").on("click", async () => {
			if (await importJSONAndMerge()) {
				this.close();
			}
		});

        html.find('.particles input[type="color"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.particles input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render())
        })

        html.on('click', '.sort-menu', async (evt) => {
            evt.preventDefault()
            await this.sortAutorec()
            this.render()
        })
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
        //updateData[`aaAutorec.melee.${idx}.repeat`] = 1;
        //updateData[`aaAutorec.melee.${idx}.delay`] = 500;
        //updateData[`aaAutorec.melee.${idx}.scale`] = 1;
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
        //updateData[`aaAutorec.range.${idx}.repeat`] = 1;
        //updateData[`aaAutorec.range.${idx}.delay`] = 500;
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
        //updateData[`aaAutorec.static.${idx}.repeat`] = 1;
        //updateData[`aaAutorec.static.${idx}.delay`] = 500;
        //updateData[`aaAutorec.static.${idx}.scale`] = 1;
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
        //updateData[`aaAutorec.templates.${idx}.repeat`] = 1;
        //updateData[`aaAutorec.templates.${idx}.delay`] = 500;
        updateData[`aaAutorec.templates.${idx}.below`] = false;
        //updateData[`aaAutorec.templates.${idx}.opacity`] = 0.75;
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
        //updateData[`aaAutorec.auras.${idx}.opacity`] = 0.75;
        //updateData[`aaAutorec.auras.${idx}.scale`] = 1;
        updateData[`aaAutorec.auras.${idx}.below`] = true;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _addPreset(event) {
        event.preventDefault();
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.preset-settings');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        //updateData[`aaAutorec.preset.${idx}.scale`] = 1;
        updateData[`aaAutorec.preset.${idx}.below`] = false;
        //updateData[`aaAutorec.preset.${idx}.anchorX`] = 0.5;
        //updateData[`aaAutorec.preset.${idx}.anchorY`] = 0.5;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _addAefx(event) {
        event.preventDefault();
        let idx = 0;
        const entries = event.target.closest('div.tab').querySelectorAll('div.aefx-settings');
        const last = entries[entries.length - 1];
        if (last) {
            idx = last.dataset.idx + 1;
        }
        let updateData = {}
        updateData[`aaAutorec.aefx.${idx}.below`] = false;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _onRemoveOverride(event) {
        event.preventDefault();
        const  data = await game.settings.get('autoanimations', 'aaAutorec');
        let idx = event.target.dataset.idx;
        delete data[event.target.classList[3]][idx]

        const menuType = ['melee', 'range', 'static', 'templates', 'auras', 'preset', 'aefx'];
        for (let i = 0; i < menuType.length; i ++) {
            let compacted = {}
            try {Object.values(data[menuType[i]])}
            catch (exception) {continue}
            Object.values(data[menuType[i]]).forEach((val, idx) => compacted[idx] = val);
            data[menuType[i]] = compacted;
        }

        await game.settings.set('autoanimations', "aaAutorec", data);
        this.render()
    }

    async _duplicateMelee(event) {
        event.preventDefault();
        let currentIDX = event.target.dataset.idx;

        const entries = event.target.closest('div.tab').querySelectorAll('div.melee-settings');
        const last = entries[entries.length - 1];
        let idx = last.dataset.idx + 1;
        let autorecSettings = game.settings.get('autoanimations', 'aaAutorec');
        let newSet = autorecSettings.melee[currentIDX];
        newSet.name = newSet.name + " (COPY)";
        let updateData = {};
        updateData[`aaAutorec.melee.${idx}`] = newSet;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _duplicateRange(event) {
        event.preventDefault();
        let currentIDX = event.target.dataset.idx;

        const entries = event.target.closest('div.tab').querySelectorAll('div.range-settings');
        const last = entries[entries.length - 1];
        let idx = last.dataset.idx + 1;
        let autorecSettings = game.settings.get('autoanimations', 'aaAutorec');
        let newSet = autorecSettings.range[currentIDX];
        newSet.name = newSet.name + " (COPY)";
        let updateData = {};
        updateData[`aaAutorec.range.${idx}`] = newSet;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _duplicateStatic(event) {
        event.preventDefault();
        let currentIDX = event.target.dataset.idx;

        const entries = event.target.closest('div.tab').querySelectorAll('div.static-settings');
        const last = entries[entries.length - 1];
        let idx = last.dataset.idx + 1;
        let autorecSettings = game.settings.get('autoanimations', 'aaAutorec');
        let newSet = autorecSettings.static[currentIDX];
        newSet.name = newSet.name + " (COPY)";
        let updateData = {};
        updateData[`aaAutorec.static.${idx}`] = newSet;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _duplicateTemplate(event) {
        event.preventDefault();
        let currentIDX = event.target.dataset.idx;

        const entries = event.target.closest('div.tab').querySelectorAll('div.templates-settings');
        const last = entries[entries.length - 1];
        let idx = last.dataset.idx + 1;
        let autorecSettings = game.settings.get('autoanimations', 'aaAutorec');
        let newSet = autorecSettings.templates[currentIDX];
        newSet.name = newSet.name + " (COPY)";
        let updateData = {};
        updateData[`aaAutorec.templates.${idx}`] = newSet;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _duplicateAura(event) {
        event.preventDefault();
        let currentIDX = event.target.dataset.idx;

        const entries = event.target.closest('div.tab').querySelectorAll('div.auras-settings');
        const last = entries[entries.length - 1];
        let idx = last.dataset.idx + 1;
        let autorecSettings = game.settings.get('autoanimations', 'aaAutorec');
        let newSet = autorecSettings.auras[currentIDX];
        newSet.name = newSet.name + " (COPY)";
        let updateData = {};
        updateData[`aaAutorec.auras.${idx}`] = newSet;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _duplicatePreset(event) {
        event.preventDefault();
        let currentIDX = event.target.dataset.idx;

        const entries = event.target.closest('div.tab').querySelectorAll('div.preset-settings');
        const last = entries[entries.length - 1];
        let idx = last.dataset.idx + 1;
        let autorecSettings = game.settings.get('autoanimations', 'aaAutorec');
        let newSet = autorecSettings.preset[currentIDX];
        newSet.name = newSet.name + " (COPY)";
        let updateData = {};
        updateData[`aaAutorec.preset.${idx}`] = newSet;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    async _duplicateAefx(event) {
        event.preventDefault();
        let currentIDX = event.target.dataset.idx;

        const entries = event.target.closest('div.tab').querySelectorAll('div.aefx-settings');
        const last = entries[entries.length - 1];
        let idx = last.dataset.idx + 1;
        let autorecSettings = game.settings.get('autoanimations', 'aaAutorec');
        let newSet = autorecSettings.aefx[currentIDX];
        newSet.name = newSet.name + " (COPY)";
        let updateData = {};
        updateData[`aaAutorec.aefx.${idx}`] = newSet;

        await this._onSubmit(event, { updateData: updateData, preventClose: true });
        this.render();
    }

    /** @override */
    async _updateObject(_, formData) {

        const data = expandObject(formData).aaAutorec;

        const menuType = ['melee', 'range', 'static', 'templates', 'auras', 'preset', 'aefx'];
            for (let i = 0; i < menuType.length; i ++) {
                let compacted = {}
                try {Object.values(data[menuType[i]])}
                catch (exception) {continue}
                Object.values(data[menuType[i]]).forEach((val, idx) => compacted[idx] = val);
                data[menuType[i]] = compacted;
            }
            const oldData = await game.settings.get('autoanimations', 'aaAutorec');
            const newData = mergeObject(oldData, data);

            await game.settings.set('autoanimations', "aaAutorec", newData);
    }

    async sortAutorec() {
        const autoRec = await game.settings.get('autoanimations', 'aaAutorec');
        const sortedMenu = {};

        sortedMenu.version = autoRec.version;
        sortedMenu.search = autoRec.search;
        sortedMenu.melee = autoRec.melee ? await this.sortMenu(autoRec.melee) : {};
        sortedMenu.range = autoRec.range ? await this.sortMenu(autoRec.range): {};
        sortedMenu.static = autoRec.static ? await this.sortMenu(autoRec.static) : {};
        sortedMenu.templates = autoRec.templates ? await this.sortMenu(autoRec.templates): {};
        sortedMenu.auras = autoRec.auras ? await this.sortMenu(autoRec.auras) : {};
        sortedMenu.preset = autoRec.preset ? await this.sortMenu(autoRec.preset) : {};
        sortedMenu.aefx = autoRec.aefx ? await this.sortMenu(autoRec.aefx) : {};
    
        await game.settings.set("autoanimations", "aaAutorec", sortedMenu);
    }
    
    async sortMenu(data) {
        const mergedArray = [];
        const keys = Object.keys(data);
        const keyLength = keys.length;
        for (var i = 0; i < keyLength; i++) {
            var currentObject = data[keys[i]];
            if (!currentObject.name) { break; }
            currentObject.menuSection = keys[i]
            mergedArray.push(currentObject)
        }
        mergedArray.sort((a, b) => b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 1)
    
        const sortedMenu = {};
        const newLength = mergedArray.length;
        for (var i = 0; i < newLength; i++) {
            var currentKey = i.toString()
            sortedMenu[currentKey] = mergedArray[currentKey];
        }
        return sortedMenu;
    }
    
}

// Credit to Tim Poseny of Midi-QOL for the import/export functions for settings
async function importFromJSONDialog() {
	const content = await renderTemplate("modules/autoanimations/src/custom-recognition/import-data.html", { entity: "autoanimations", name: "aaAutorec" });
	let dialog = new Promise((resolve, reject) => {
		new Dialog({
			title: game.i18n.format("AUTOANIM.menuImport"),
			content: content,
			buttons: {
				import: {
					icon: '<i class="fas fa-file-import"></i>',
					label: game.i18n.format("AUTOANIM.overwrite"),
					callback: html => {
						//@ts-ignore
						const form = html.find("form")[0];
						if (!form.data.files.length)
							return ui.notifications?.error("You did not upload a data file!");
						readTextFromFile(form.data.files[0]).then(json => {
							AutorecFunctions._importAutorecFromJSON(json);
							resolve(true);
						});
					}
				},
                merge: {
                    icon: '<i class="fas fa-file-import"></i>',
                    label: game.i18n.format("AUTOANIM.merge"),
                    callback: html => {
                        //@ts-ignore
                        const form = html.find("form")[0];
                        if (!form.data.files.length)
                            return ui.notifications?.error("You did not upload a data file!");
                        readTextFromFile(form.data.files[0]).then(json => {
                            AutorecFunctions._mergeAutorecFile(json);
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
			width: 600
		}).render(true);
	});
	return await dialog;
}
/*
async function importJSONAndMerge() {
    const content = await renderTemplate("templates/apps/import-data.html", { entity: "autoanimations", name: "aaAutorec" });
    let dialog = new Promise((resolve, reject) => {
        new Dialog({
            title: game.i18n.format("AUTOANIM.mergeMenu"),
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
                            AutorecFunctions._mergeAutorecFile(json);
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
*/
function moduleIncludes(test) {
    return !!game.modules.get(test);
}


