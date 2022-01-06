import { aaMenuLists } from "./menu-lists.js";
import { AATabFunctions } from "../aa-classes/tab-options.js";
import { AutorecFunctions } from "../aa-classes/autorecFunctions.js";
//import { AAITEMCHECK } from "../animation-functions/item-arrays.js"
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js";
import { flagMigrations } from "../system-handlers/flagMerge.js";

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
        const currentFlagVersion = Object.keys(flagMigrations.migrations).map(n => Number(n)).reverse()[0];
        const flags = this.object.data.flags;

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

        const levels3d = game.modules.get("levels-3d-preview")?.active;
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
            menuLists: aaMenuLists,
            projectile: aaMenuLists.attackSpells,
            OldName: oldName,

            fireball: autoObject.animation === 'fireball' && autoObject.menuSection === 'preset' ? autoObject : false,
            autoObject: autoObject,
            colormenu: aaColorMenu,
            variantmenu: aaVariantMenu,
            rangeList: patreon ? aaMenuLists.rangeWeapons : aaMenuLists.rangeWeaponsFree,
            meleeList: patreon ? aaMenuLists.meleeTypes : aaMenuLists.meleeTypesFree,
            genericProjectile: patreon ? aaMenuLists.genericProjectile : aaMenuLists.genericProjectileFree,
            spellList: aaMenuLists.attackSpells,
            onTokenList: aaMenuLists.autoself,
            meleeWeapons: aaMenuLists.meleeWeapons,
            genericDmg: aaMenuLists.genericDmg,
            auraList: aaMenuLists.aura,

            itemAudioDelay01: flags.autoanimations?.audio?.a01?.delay || 0,
            itemAudioVolume01: flags.autoanimations?.audio?.a01?.volume || 0.25,
            itemAudioDelay02: flags.autoanimations?.audio?.a02?.delay || 0,
            itemAudioVolume02: flags.autoanimations?.audio?.a02?.volume || 0.25,
            sourceAudioDelay01: flags.autoanimations?.audio?.s01?.delay || 0,
            sourceAudioVolume01: flags.autoanimations?.audio?.s01?.volume || 0.25,
            targetAudioDelay01: flags.autoanimations?.audio?.t01?.delay || 0,
            targetAudioVolume01: flags.autoanimations?.audio?.t01?.volume || 0.25,
            delayExAudio: flags.autoanimations?.audio?.e01?.delay || 0,
            volumeExAudio: flags.autoanimations?.audio?.e01?.volume || 0.25,

            explosionMenu: aaMenuLists.explosionMenu,
            autoRecognized: autoCheck,
            autoRecognizedNoOverride: autoCheck && !override,
            melee: override && animType === "melee",
            range: override && animType === "range",
            static: override && animType === "static",
            template: override && animType === "template",
            aura: override && animType === "aura",
            preset: override && animType === "preset",
            menu3d: override && animType === "menu3d",

            bardAnimName: aaMenuLists.bardAnimType,
            bardAnimTarget: aaMenuLists.bardAnimType,

            aaRepeat: animationRepeat || 1,
            aaDelay: flags.autoanimations?.options?.delay ?? 250,
            aaScale: flags.autoanimations?.options?.scale ?? 1,
            auraRadius: flags.autoanimations?.options?.auraRadius || 3.5,
            aaOpacity: flags.autoanimations?.options?.opacity || "1",
            teleRange: flags.autoanimations?.options?.teleDist || "30",
            anchorX: flags.autoanimations?.options?.anchorX || 0.5,
            anchorY: flags.autoanimations?.options?.anchorY || 0.7,
            //persistent: flags.autoanimations?.options?.persistent && (templateType === "circle" || templateType === "rect"),
            persistent: flags.autoanimations?.options?.persistent && (flags.autoanimations?.options?.persistType === 'overheadtile'),
            circRectPersist: flags.autoanimations?.options?.persistent && (templateType === 'circle' || templateType === 'rect') ? true : false,
            animationType: levels3d ? aaMenuLists.menuOptions3D : aaMenuLists.menuOptions,

            explosionVariants: aaMenuLists.explodeVariant,
            explosionRadius: flags.autoanimations?.explosions?.radius ?? 1.5,
            explosionLoops: explosionLoops || 1,
            explosionDelay: flags.autoanimations?.explosions?.delay ?? 0,

            //itemAudio: flags.autoanimations?.allSounds?.item?.file || "",
            //delayAudio: flags.autoanimations?.allSounds?.item?.delay || 0,
            //volumeAudio: flags.autoanimations?.allSounds?.item?.volume || 0.25,

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
            sourceOpacity: flags.autoanimations?.sourceToken?.opacity ?? 1,

            targetLoops: flags.autoanimations?.targetToken?.loops ?? 1,
            targetLoopDelay: flags.autoanimations?.targetToken?.loopDelay ?? 250,
            targetScale: flags.autoanimations?.targetToken?.scale ?? 1,
            targetDelayStart: flags.autoanimations?.targetToken?.delayStart ?? 500,
            targetAnimations: aaMenuLists.tokenAnimations,
            targetOpacity: flags.autoanimations?.targetToken?.opacity ?? 1,

            autoRepeat: flags.autoanimations?.autoOverride?.repeat || 1,
            autoDelay: flags.autoanimations?.autoOverride?.delay || 500,
            autoScale: flags.autoanimations?.autoOverride?.scale || 1,
            autoOpacity: flags.autoanimations?.autoOverride?.opacity || 0.75,
            autoRadius: flags.autoanimations?.autoOverride?.radius || 3.5,
            autoAnchorX: flags.autoanimations?.autoOverride?.anchorX || 0.5,
            autoAnchorY: flags.autoanimations?.autoOverride?.anchorY || 0.5,
            autoRange: flags.autoanimations?.autoOverride?.range || 30,

            ammo5e: game.system.id === "dnd5e" ? true : false,

            levels3d: levels3d ? true : false,
            color3D01Projectile: flags.autoanimations?.levels3d?.projectile?.color01?.toString(16).padStart(6, '0').toUpperCase() || "#FFFFFF",
            color3D02Projectile: flags.autoanimations?.levels3d?.projectile?.color02?.toString(16).padStart(6, '0').toUpperCase() || "#FFFFFF",
            color3D01Ray: flags.autoanimations?.levels3d?.ray?.color01?.toString(16).padStart(6, '0').toUpperCase() || "#FFFFFF",
            color3D02Ray: flags.autoanimations?.levels3d?.ray?.color02?.toString(16).padStart(6, '0').toUpperCase() || "#FFFFFF",
            color3D01Explosion: flags.autoanimations?.levels3d?.explosion?.color01?.toString(16).padStart(6, '0').toUpperCase() || "#FFFFFF",
            color3D02Explosion: flags.autoanimations?.levels3d?.explosion?.color02?.toString(16).padStart(6, '0').toUpperCase() || "#FFFFFF",
            color3D01AddExplosion: flags.autoanimations?.levels3d?.addexplosion?.color01?.toString(16).padStart(6, '0').toUpperCase() || "#FFFFFF",
            color3D02AddExplosion: flags.autoanimations?.levels3d?.addexplosion?.color02?.toString(16).padStart(6, '0').toUpperCase() || "#FFFFFF",
            color3D01Sprite: flags.autoanimations?.levels3d?.sprite?.color01?.toString(16).padStart(6, '0').toUpperCase() || "#FFFFFF",

            sprite3DProjectile: flags.autoanimations?.levels3d?.projectile?.sprite ?? "modules/levels-3d-preview/assets/particles/emberssmall.png",
            sprite3DRay: flags.autoanimations?.levels3d?.projectile?.sprite ?? "modules/levels-3d-preview/assets/particles/emberssmall.png",
            sprite3DExplosion: flags.autoanimations?.levels3d?.explosion?.sprite ?? "modules/levels-3d-preview/assets/particles/dust.png",
            sprite3DAddExplosion: flags.autoanimations?.levels3d?.addexplosion?.sprite ?? "modules/levels-3d-preview/assets/particles/dust.png",
            sprite3DSprite: flags.autoanimations?.levels3d?.sprite?.sprite ?? "modules/levels-3d-preview/assets/particles/emberssmall.png",
            //currentVersion: !flags.autoanimations?.version ? this.object.setFlag('autoanimations', 'version', currentFlagVersion) : "",
            currentVersion: currentFlagVersion, 
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
        html.find('.animation-disabled input[type="checkbox"]').change(evt => {
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

        html.find('.particles input[type="color"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.particles input[type="Number"]').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.particles select').change(evt => {
            this.submit({ preventClose: true }).then(() => this.render());
        });
        html.find('.particles input[type="checkbox"]').change(evt => {
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
