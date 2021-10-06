import { aaMenuLists } from "./menu-lists.js";
import { AATabFunctions } from "../aa-classes/tab-options.js";
import { AutorecFunctions } from "../aa-classes/autorecFunctions.js";
import { AAITEMCHECK } from "../animation-functions/item-arrays.js"
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";
import { currentFlagVersion } from "../constants/constants.js";
export class AAItemSettings extends FormApplication {
    constructor() {
        super(...arguments);
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: './modules/autoanimations/src/item-sheet-handlers/aa-templates/item-central.html',
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

        const flags = this.object.data.flags;
        if (!flags?.autoanimations?.version) {
            this.object.setFlag('autoanimations', 'version', currentFlagVersion)
        }
        const patreon = moduleIncludes("jb2a_patreon");
        const itemNameItem = this.object.name?.toLowerCase() ?? "";
        const oldName = this.object.name;
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

        const switchName = flags.autoanimations?.meleeSwitch?.animation ?? "";

        const animType = flags.autoanimations?.animType;
        const templateType = flags.autoanimations?.options?.tempType ?? "";

        const animationRepeat = flags.autoanimations?.options?.repeat > 50 ? 50 : flags.autoanimations?.options?.repeat;
        const explosionLoops = flags.autoanimations?.explosions?.repeat > 50 ? 50 : flags.autoanimations?.explosions?.repeat;
        const returnWeapons = ["dagger", "hammer", "greatsword", "chakram"];

        const autoCheck = AutorecFunctions._checkAutoRec(oldName);
        const autoObject = autoCheck ? AutorecFunctions._findObjectFromArray(game.settings.get('autoanimations', 'aaAutorec'), AutorecFunctions._rinseName(oldName)) : {};
        const videoPreview = override ? AATabFunctions._customPreview(flags, patreon) : AutorecFunctions._autoPreview(oldName, patreon, flags)

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

            projectile: aaMenuLists.attackSpells,
            OldName: oldName,

            fireball: autoObject.animation === 'fireball' && autoObject.menuSection === 'preset' ? autoObject : false,
            autoObject: autoObject,
            colormenu: aaColorMenu,
            variantmenu: aaVariantMenu,
            rangeList: patreon ? aaMenuLists.rangeWeapons : aaMenuLists.rangeWeaponsFree,
            spellList: aaMenuLists.attackSpells,
            onTokenList: aaMenuLists.autoself,
            meleeWeapons: aaMenuLists.meleeWeapons,
            genericDmg: aaMenuLists.genericDmg,
            auraList: aaMenuLists.aura,

            explosionMenu: aaMenuLists.explosionMenu,
            autoRecognized: autoCheck,
            autoRecognizedNoOverride: autoCheck && !override,
            melee: override && animType === "melee",
            range: override && animType === "range",
            static: override && animType === "static",
            template: override && animType === "template",
            aura: override && animType === "aura",
            preset: override && animType === "preset",

            bardAnimName: aaMenuLists.bardAnimType,
            bardAnimTarget: aaMenuLists.bardAnimType,

            repeat: animationRepeat || 1,
            delay: flags.autoanimations?.options?.delay ?? 250,
            scale: flags.autoanimations?.options?.scale ?? 1,
            auraRadius: flags.autoanimations?.options?.auraRadius || 3.5,
            opacity: flags.autoanimations?.options?.opacity || ".75",
            teleRange: flags.autoanimations?.options?.teleDist || "30",
            anchorX: flags.autoanimations?.options?.anchorX || 0.5,
            anchorY: flags.autoanimations?.options?.anchorY || 0.7,
            persistent: flags.autoanimations?.options?.persistent && (templateType === "circle" || templateType === "rect"),

            animationType: aaMenuLists.menuOptions,

            explosionVariants: aaMenuLists.explodeVariant,
            explosionRadius: flags.autoanimations?.explosions?.radius ?? 1.5,
            explosionLoops: explosionLoops || 1,
            explosionDelay: flags.autoanimations?.explosions?.delay ?? 0,

            delayExAudio: flags.autoanimations?.allSounds?.explosion?.delay || 0,
            volumeExAudio: flags.autoanimations?.allSounds?.explosion?.volume || 0.25,
            itemAudio: flags.autoanimations?.allSounds?.item?.file || "",
            delayAudio: flags.autoanimations?.allSounds?.item?.delay || 0,
            volumeAudio: flags.autoanimations?.allSounds?.item?.volume || 0.25,

            templateAnimations: AATabFunctions.animTemplates(templateType),

            rangeSwitch: patreon ? aaMenuLists.rangeWeapons : aaMenuLists.rangeWeaponsFree,
            switchRange: flags.autoanimations?.meleeSwitch?.range ?? 2,
            returning: returnWeapons.some(el => switchName.includes(el)),

            content: content,

            sourceLoops: flags.autoanimations?.sourceToken?.loops ?? 1,
            sourceLoopDelay: flags.autoanimations?.sourceToken?.loopDelay ?? 250,
            sourceScale: flags.autoanimations?.sourceToken?.scale ?? 1,
            sourceDelayAfter: flags.autoanimations?.sourceToken?.delayAfter ?? 500,
            sourceAnimations: aaMenuLists.tokenAnimations,

            targetLoops: flags.autoanimations?.targetToken?.loops ?? 1,
            targetLoopDelay: flags.autoanimations?.targetToken?.loopDelay ?? 250,
            targetScale: flags.autoanimations?.targetToken?.scale ?? 1,
            targetDelayStart: flags.autoanimations?.targetToken?.delayStart ?? 500,
            targetAnimations: aaMenuLists.tokenAnimations,

            autoRepeat: flags.autoanimations?.options?.autoRepeat || 1,
            autoDelay: flags.autoanimations?.options?.autoDelay || 500,
            autoScale: flags.autoanimations?.options?.autoScale || 1,
            autoOpacity: flags.autoanimations?.options?.autoOpacity || 0.75,
            autoRadius: flags.autoanimations?.options?.autoRadius || 3.5,
            autoAnchorX: flags.autoanimations?.options?.autoAnchorX || 0.5,
            autoAnchorY: flags.autoanimations?.options?.autoAnchory || 0.5,
            autoRange: flags.autoanimations?.options?.autoRange || 30,

            ammo5e: game.system.id === "dnd5e" ? true : false,

        };

    }

    activateListeners(html) {
        super.activateListeners(html);
        html.find('.kill-animation').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-not-disabled select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render());
        });
        html.find('.animation-not-disabled input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-not-disabled input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.animation-not-disabled input[type="color"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.pre-post-animations select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render()).then(() => this.submit({ preventClose: true })).then(() => this.render());
        });
        html.find('.pre-post-animations input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.pre-post-animations input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.files').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-audio-checkbox input[type="checkbox"]').click(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.aa-audio-checkbox input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.sourceOptions input[type="checkbox"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.sourceOptions select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.sourceOptions input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });

        /*
        html.find('button[name ="AAadd_field_button"]').click((e) => {
            e.preventDefault();

            let field = this.object.data.flags.autoanimations?.testSound;
            let length = Object.keys(field).length;
            //console.log(length)
            var key = length;
            var obj = {};
            obj[key] = {
                testFile: ""
            }
            //console.log(obj)
            mergeObject(this.object.data.flags.autoanimations.testSound, obj, {overwrite: false})
            this.render();
        })

        html.find('button[name ="AAremove_field_button"]').click((e) => {
            e.preventDefault();

            let field = this.object.data.flags.autoanimations?.testSound;
            let length = Object.keys(field).length;
            
            const index = e.delegateTarget.getAttribute('soundIndex');
            let killFlag = this.object.data.flags.autoanimations.testSound[index]
            console.log(index)
            this.object.unsetFlag("autoanimations", killFlag)
            
            //allSounds.splice(index, 1);
            this.render();
        })
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

export default AAItemSettings;

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
