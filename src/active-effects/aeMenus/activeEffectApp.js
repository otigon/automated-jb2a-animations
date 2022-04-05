import { aaMenuLists } from "../../item-sheet-handlers/menu-lists.js";
import { AATabFunctions } from "../../aa-classes/tab-options.js";
import { AutorecFunctions } from "../../aa-classes/autorecFunctions.js";
import { aaTypeMenu, aaNameMenu, aaVariantMenu, aaColorMenu } from "../../animation-functions/databases/jb2a-menu-options.js";
import { flagMigrations } from "../../system-handlers/flagMerge.js";

export class AAActiveEffectMenu extends FormApplication {
    constructor() {
        super(...arguments);
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/active-effects/aeMenus/ae-central.html',
            id: 'AA-item-settings',
            class:'AA-item-app',
            title: game.i18n.localize("AUTOANIM.tabTitle"),
            resizable: true,
            width: 700,
            height: "auto",
            closeOnSubmit: true,
            tabs: [{ navSelector: ".tabs", contentSelector: "form", initial: "animations" }]
        });
    }

    getData() {
        const currentFlagVersion = Object.keys(flagMigrations.migrations).map(n => Number(n)).reverse()[0];
        const flags = this.object.data.flags;

        const patreon = moduleIncludes("jb2a_patreon");
        const itemNameItem = this.object.name?.toLowerCase() ?? "";
        const oldName = this.object.data?.label;

        const itemNameFlag = flags.autoanimations?.animation?.toLowerCase() ?? "";

        const override = flags.autoanimations?.override;
        let oldItemName;
        switch (true) {
            case (!override):
            case override && itemNameFlag === '':
                oldItemName = itemNameItem;
                break;
            default:
                oldItemName = itemNameFlag;
                break;
        }

        const animType = flags.autoanimations?.animType;

        const autoCheck = AutorecFunctions._checkAutoRecAefx(oldName);
        const autoObject = autoCheck ? AutorecFunctions._findObjectFromAefx(game.settings.get('autoanimations', 'aaAutorec'), AutorecFunctions._rinseName(oldName)) : {};

        const videoPreview = override ? AATabFunctions._customPreview(flags, patreon) : AutorecFunctions._autoPreviewAefx(oldName, patreon, flags)
        let content = "";

        switch (true) {
            case videoPreview === "no preview":
            case !videoPreview:
                break;
            default:
                switch (game.settings.get("autoanimations", "videoLoop")) {
                    case "0":
                        break;
                    case "1":
                        content = `<video class="aa-video-previews" src="${videoPreview}" controls loop> </video>`;
                        break;
                    case "2":
                        content = `<video class="aa-video-previews" src="${videoPreview}" autoplay="autoplay" controls loop> </video>`;
                        break;
                }
        }
        return {
            flags: this.object.data.flags,
            isActiveEffect: true,
            OldName: oldName,

            menuTypes: aaTypeMenu,
            menuNames: aaNameMenu,
            menuVariants: aaVariantMenu,
            menuColors: aaColorMenu,

            showMacroOption: flags.autoanimations?.killAnim || flags.autoanimations?.override ? true : false,
            isMacroChecked: flags.autoanimations?.killAnim || flags.autoanimations?.override ? flags.autoanimations?.macro?.enable : false,

            autoObject: autoObject,

            autoRecognized: autoCheck,
            autoRecognizedNoOverride: autoCheck && !override,
            melee: override && animType === "melee",
            range: override && animType === "range",
            static: override && animType === "static",
            template: override && animType === "template",
            aura: override && animType === "aura",
            preset: override && animType === "preset",
            menu3d: override && animType === "menu3d",

            content: content,

            //currentVersion: !flags.autoanimations?.version ? this.object.setFlag('autoanimations', 'version', currentFlagVersion) : "",
            currentVersion: currentFlagVersion,
            isGM: game.user.isGM ? true : false,
        };

    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('.kill-animation').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-not-disabled select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-not-disabled input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-checkbox-label input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-itemSection-divider select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-itemSection-divider input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });

        /*
        html.find('.aa-menus input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-disabled input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        })*/
        html.find('.animation-not-disabled input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        /*
        html.find('.animation-not-disabled input[type="color"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        })
        html.find('.pre-post-animations select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.pre-post-animations input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.pre-post-animations input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        */
        html.find('.files').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        /*
        html.find('.aa-audio-checkbox input[type="checkbox"]').click(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-audio-checkbox input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        */
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

export default AAActiveEffectMenu;

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
