import { AUTOANIM } from "./config.js";
import { AnimateItem } from "./animateitem.js";
const animationTabs = [];
import getNameColor from "./name-color-checks.js";

export class AnimationTab {

    static bind(app, html, data) {
        let acceptedTypes;
        switch (game.system.id) {
            case ("dnd5e"):
                acceptedTypes = ['weapon', 'spell', 'consumable', 'feat', 'equipment'];
                break;
            case ("pf1"):
                acceptedTypes = ['attack', 'spell', 'consumable', 'feat', 'equipment'];
                break;
            case ("tormenta20"):
                acceptedTypes = ['arma', 'magia', 'consumivel', 'poder'];
                break;
            case ("demonlord"):
                acceptedTypes = ['weapon', 'spell', 'talent', 'item'];
                break;
            case ("D35E"):
                acceptedTypes = ['attack', 'spell', 'consumable', 'feat', 'equipment'];
                break;
            case ("swade"):
                acceptedTypes = ['weapon', 'gear', 'skill', 'power', 'ability', 'shield'];
                break;
            case ("pf2e"):
                acceptedTypes = ['weapon', 'npc strike', 'consumable', 'spell', 'action'];
        }
        if (acceptedTypes.includes(data.itemType.toLowerCase())) {
            let tab = animationTabs[app.id];
            if (!tab) {
                tab = new AnimationTab(app);
                animationTabs[app.id] = tab;
            }
            tab.init(html, data);
        }
    }


    constructor(app) {
        this.app = app;
        this.item = app.item;
        this.itemName = this.item.name.toLowerCase();
        this.hack(this.app);
        this.activate = false;
    }



    init(html, data) {

        if (html[0].localName !== "div") {
            html = $(html[0].parentElement.parentElement);
        }

        let tabs = html.find('form nav.sheet-navigation.tabs');
        if (game.system.id === "tormenta20") {
            tabs = html.find('form nav.sheet-tabs');
        }

        if (game.system.id === "demonlord") {
            tabs = html.find('form nav.sheet-tabs');
        }

        if (game.system.id === "pf2e") {
            tabs = html.find('form h4.sheet-tabs.tabs');
        }

        if (game.system.id === "swade") {
            tabs = html.find('form nav.flexrow.tabs');
        }
        /*
        if (tabs.find('a[data-tab=autoanimations]').length > 0) {
            return;
        }
        */
        tabs.first().append($(
            '<a class="item" data-tab="autoanimations">A-A</a>'
        ));

        switch (game.system.id) {
            case ("dnd5e"):
                $(html.find(`.sheet-body`)).append($(
                    '<div class="tab animate-items" data-group="primary" data-tab="autoanimations"></div>'
                ));
                break;
            case ("pf1"):
                $(html.find(`.primary-body`)).append($(
                    '<div class="tab animate-items" data-group="primary" data-tab="autoanimations"></div>'
                ));
                break;
            case ("demonlord"):
                $(html.find(`.sheet-content`)).append($(
                    '<div class="tab animate-items" data-group="primary" data-tab="autoanimations"></div>'
                ));
                html.find(`.sheet-body`).height(395)
                break;
            case ("tormenta20"):
            case ("swade"):
            case ("pf2e"):
                $(html.find(`.sheet-body`)).append($(
                    '<div class="tab animate-items" data-group="primary" data-tab="autoanimations"></div>'
                ));
                break;
            case ("D35E"):
                $(html.find(`.primary-body`)).append($(
                    '<div class="tab animate-items" data-group="primary" data-tab="autoanimations"></div>'
                ));
                break;
            case ("swade"):
                $(html.find('.sheet-header')).append($(
                    '<div class="tab animate-items" data-group="primary" data-tab="autoanimations"></div>'
                ))
        }


        this.html = html;
        this.editable = data.editable;


        let itemData = getNameColor(data);

        this.animateItem = new AnimateItem(this.item.data.flags.autoanimations, itemData);

        this.render();
    }

    hack(app) {
        let tab = this;
        app.setPosition = function (position = {}) {
            position.height = tab.isActive() && !position.height ? "auto" : position.height;
            return this.__proto__.__proto__.setPosition.apply(this, [position])
        };
    }

    async render() {


        let template = await renderTemplate('modules/autoanimations/src/templates/animatetab.html', this.animateItem);
        let el = this.html.find('.animation-tab-contents');
        if (el.length) {
            el.replaceWith(template);
        } else {
            this.html.find('.tab.animate-items').append(template);
        }


        let animateType = this.html.find('.animation-type');
        let animateName = this.html.find('.animation-name');
        let animateColor = this.html.find('.animation-color');
        let animateEnabled = this.html.find('.animation-not-disabled');
        let animateExplosion = this.html.find('.animate-explosion');
        let explosionOptions = this.html.find('.animate-explosion-options');
        let dagThrowVariant = this.html.find('.dagger-variant');
        let noRangeColor = this.html.find('.animation-ranged-color');
        let auraTint = this.html.find('.select-tint');
        let selfRadius = this.html.find('.self-cast-radius');
        let ctaStatic = this.html.find('.rotation-static');
        let hmAnimation = this.html.find('.hm-animation');
        let ctaRequired = this.html.find('.cta-required');
        let uaStrikeType = this.html.find('.ua-strike-type');
        let teleport = this.html.find('.teleporting');
        let spellVariant = this.html.find('.spell-variant');
        let bard01 = this.html.find('.bard-options');
        let audioOptions = this.html.find('.item-audio');
        let explodeAudio = this.html.find('.explode-audio');
        let exCheckBox = this.html.find('.audio-ex-checkbox');
        let spellLoops = this.html.find('.spell-loops');

        let animName = this.animateItem.animName.toLowerCase();
        let override = this.animateItem.override;
        let animType = this.animateItem.animType;
        let explosion = this.animateItem.explosion;
        let audio = this.animateItem.allSounds.item.enableAudio;
        let exAudio = this.animateItem.allSounds.explosion.audioExplodeEnabled;
        let enableExplosion = this.animateItem.explosion;

        if(enableExplosion && override) {
            exCheckBox.show();
        } else {
            exCheckBox.hide();
        }

        if (audio) {
            audioOptions.show();
        } else {
            audioOptions.hide();
        }

        if (exAudio && override) {
            explodeAudio.show()
        } else {
            explodeAudio.hide()
        }

        switch (true) {
            case (animName === "magic missile"):
            case (this.itemName.includes("magic missile")):
            case (animName.includes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase())):
            case (this.itemName.includes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase())):
                spellLoops.show();
                break;
            default:
                spellLoops.hide();
        }

        switch (true) {
            case animName.includes(game.i18n.format("AUTOANIM.bardicInspiration").toLowerCase()) && override:
            case this.itemName.includes("bardic inspiration") && !override:
            case this.itemName.includes(game.i18n.format("AUTOANIM.bardicInspiration").toLowerCase()) && !override:
                bard01.show();
                break;
            default:
                bard01.hide();
        }

        switch (true) {
            case this.itemName.includes("scorching ray"):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
            case animName.includes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
            case animName.includes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
                spellVariant.show();
                break;
            default:
                spellVariant.hide();
        }

        if (animType === "t12" && override) {
            teleport.show();
        } else {
            teleport.hide();
        }

        if (this.animateItem.killAnim) {
            animateEnabled.hide();
        } else {
            animateEnabled.show();
        }
        if (this.animateItem.override) {
            animateType.show();
            animateName.show();
        } else {
            animateType.hide();
            animateName.hide();
            //animateName.hide();
        }
        if (this.animateItem.override && this.animateItem.animType === "t11") { ctaRequired.show() } else { ctaRequired.hide() }
        switch (true) {
            case ((this.animateItem.animType === "t11") && this.animateItem.override):
                auraTint.show();
                break;
            default:
                auraTint.hide();
        }

        switch (true) {
            case this.animateItem.override && this.animateItem.animType === "t11":
                selfRadius.show();
                break;
            default:
                selfRadius.hide();
        }

        switch (true) {
            case this.animateItem.animType === "t12":
                animateColor.show();
                break;
            case this.animateItem.override && this.animateItem.animName === ``:
                animateColor.hide();
                break;
            default:
                animateColor.show();
                break;
        }

        switch (true) {
            case this.itemName.includes("hunter's mark"):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemHM").toLowerCase()):
                ctaStatic.show();
                hmAnimation.show();
                break;
            default:
                hmAnimation.hide();
                ctaStatic.hide();
        }

        switch (true) {
            case this.itemName.includes("unarmed strike"):
            case animName.includes(game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase()):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase()):
            case this.itemName.includes("flurry of blows"):
            case animName.includes(game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase()):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase()):
                uaStrikeType.show();
                break;
            case this.animateItem.override:
                uaStrikeType.hide();
                break;
            default:
                uaStrikeType.hide();
        }
        switch (true) {
            case (explosion && override &&
                ((animName.includes(game.i18n.format("AUTOANIM.itemArrow"))) ||
                    this.itemName.includes("bow") || this.itemName.includes(game.i18n.format("AUTOANIM.itemLongbow").toLowerCase()) ||
                    this.itemName.includes(game.i18n.format("AUTOANIM.itemShortbow").toLowerCase())) &&
                animType === "t4"):
            case (explosion && (animType === "t2") && override):
            case (explosion && (animType === "t3") && override):
                explosionOptions.show();
                break;
            case ((animType === "t8") && override):
            case ((animType === "t9") && override):
            case ((animType === "t10") && override):
                explosionOptions.show();
                animateName.hide();
                animateColor.hide();
                break;
            case ((animType === "t3") && (override)):
                //animateColor.hide();
                explosionOptions.hide();
                break;
            default:
                explosionOptions.hide();
                break;
        }

        switch (true) {
            //case (this.animateItem.animName.toLowerCase().includes("dagger")):
            case animName.includes(game.i18n.format("AUTOANIM.itemDagger").toLowerCase()):
            //case (this.animateItem.animName.toLowerCase().includes("spear")):
            case animName.includes(game.i18n.format("AUTOANIM.itemSpear").toLowerCase()):
            //case (this.animateItem.animName.toLowerCase().includes("handaxe")):
            case animName.includes(game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase()):
                noRangeColor.show();
                break;
            default:
                noRangeColor.hide();
                break;
        }

        switch (true) {
            //case (this.animateItem.animName.toLowerCase().includes("boulder") || this.item.name.toLowerCase().includes("boulder")):
            case (animName.includes(game.i18n.format("AUTOANIM.itemBoulder").toLowerCase()) || (this.itemName.includes(game.i18n.format("AUTOANIM.itemBoulder").toLowerCase()) && !override)):
            //case (this.animateItem.animName.toLowerCase().includes("javelin") || this.item.name.toLowerCase().includes("javelin")):
            case (animName.includes(game.i18n.format("AUTOANIM.itemJavelin").toLowerCase()) || (this.itemName.includes(game.i18n.format("AUTOANIM.itemJavelin").toLowerCase()) && !override)):
            //case (this.animateItem.animName.toLowerCase().includes("siege") || this.item.name.toLowerCase().includes("siege")):
            case (animName.includes(game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase()) || (this.itemName.includes(game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase()) && !override)):
            //case (this.animateItem.animName.toLowerCase().includes("throwing") || this.item.name.toLowerCase().includes("throwing")):
            case (animName.includes(game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase()) || (this.itemName.includes(game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase()) && !override)):
            //case (animType === "t3"):
            case (animName.includes(game.i18n.format("AUTOANIM.itemSling").toLowerCase())):
                animateColor.hide();
                break;
        }

        switch (true) {
            //case ((this.animateItem.animName.toLowerCase().includes("arrow")) && (this.animateItem.animType === "t4") && this.animateItem.override):
            case ((animName.includes(game.i18n.format("AUTOANIM.itemArrow").toLowerCase())) && (animType === "t4") && override):
            case ((animType === "t2") && override):
            case ((animType === "t3") && override):
                animateExplosion.show();
                break;
            default:
                animateExplosion.hide();
        }

        switch (true) {
            //case ((this.animateItem.animName === "Dagger") && (this.animateItem.animType === "t2") && (this.animateItem.override)):
            case ((animName.includes(game.i18n.format("AUTOANIM.itemDagger").toLowerCase())) && (animType === "t2") && (override)):
                dagThrowVariant.show();
                break;
            default:
                dagThrowVariant.hide();
                break;
        }


        if (this.editable) {
            this.handleEvents();
        } else {
            this.html.find('input').prop("disabled", true);
            this.html.find('select').prop("disabled", true);
        }

        this.app.setPosition();

        if (this.activate && !this.isActive()) {
            switch (game.system.id) {
                case ("dnd5e"):
                case ("swade"):
                case ("tormenta20"):
                case ("demonlord"):
                case ("pf2e"):
                    this.app._tabs[0].activate("autoanimations");
                    this.activate = false;
                    break;
                case ("pf1"):
                    this.app._tabsAlt.subTabs[0].parent.activate("autoanimations");
                    this.activate = false;
                    break
                case ("D35E"):
                    this.activate = false;
                    break;
            }
        }
        /*
        if (this.activate && !this.isActive()) {
            this.app._tabs[0].activate("autoanimations");
            this.activate = false;
        }
        */

    }

    handleEvents() {

        this.html.find('.animation-tab-contents input[type="checkbox"]').change(evt => {
            this.activate = true;
        });

        this.html.find('.audio-checkbox input[type="checkbox"]').change(evt => {
            this.activate = true;
        });

        this.html.find('.animation-tab-contents select').change(evt => {
            this.activate = true;
        });

        this.html.find(`.animation-tab-contents input[type="color"]`).change(evt => {
            this.activate = true;
        });

        this.html.find('.animation-tab-contents input[type="number"]').change(evt => {
            this.activate = true;
        });

        this.html.find('.item-audio input[type="number"]').change(evt => {
            this.activate = true;
        });

        this.html.find('.item-audio input[type="text"]').change(evt => {
            this.activate = true;
        });

        this.html.find('input[name="flags.autoanimations.ctaOption"]').click(evt => {
            //this.animateItem.toggleEnabled(evt.target.unchecked);
            this.activate = true;
        });

        this.html.find('button[name="audio-button"]').click(evt => {
            const fp = new FilePicker({
                //current: currentAudio,
                type: "audio",
                button: "audio-picker",
                //current: 'input[name="flags.automated-jb2a-animations.sounds.itemAudio"].value',
                //field: currentAudio,
                callback: (url) => {
                    this.item.setFlag("autoanimations", "allSounds.item.file", url);
                    this.activate = true;
                }
            });
            fp.browse();
        })

        this.html.find('button[name="audio-ex-button"]').click(evt => {
            const efp = new FilePicker({
                //current: currentAudio,
                type: "audio",
                button: "audio-ex-picker",
                //current: 'input[name="flags.automated-jb2a-animations.sounds.itemAudio"].value',
                //field: currentAudio,
                callback: (url) => {
                    this.item.setFlag("autoanimations", "allSounds.explosion.file", url);
                    this.activate = true;
                }
            });
            efp.browse();
        })

    }

    isActive() {
        return $(this.html).find('a.item[data-tab="autoanimations"]').hasClass("active");
    }

}