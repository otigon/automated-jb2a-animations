import { AUTOANIM } from "./config.js";
import { AnimateItem } from "./animateitem.js";
const animationTabs = [];
import getNameColor from "./name-color-checks.js";

export class AnimationTab {

    static bind(app, html, data) {
        let acceptedTypes;
        switch (game.system.id) {
            case ("dnd5e"):
                acceptedTypes = ['weapon', 'spell', 'consumable', 'feat'];
                break;
            case ("pf1"):
                acceptedTypes = ['attack', 'spell', 'consumable', 'feat', 'equipment'];
                break;
        }
        if (acceptedTypes.includes(data.entity.type)) {
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
        this.hack(this.app);
        this.activate = false;
    }



    init(html, data) {

        if (html[0].localName !== "div") {
            html = $(html[0].parentElement.parentElement);
        }

        let tabs = html.find('form nav.sheet-navigation.tabs');
        if (tabs.find('a[data-tab=autoanimations]').length > 0) {
            return;
        }

        tabs.first().append($(
            '<a class="item" data-tab="autoanimations">Animate</a>'
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


        let template = await renderTemplate('modules/automated-jb2a-animations/src/templates/animatetab.html', this.animateItem);
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


        switch (true) {
            case (this.animateItem.explosion && this.animateItem.override &&
                ((this.animateItem.animName.includes(game.i18n.format("AUTOANIM.itemArrow"))) ||
                    this.item.name.toLowerCase().includes("bow") || this.item.name.toLowerCase().includes(game.i18n.format("AUTOANIM.itemLongbow").toLowerCase()) ||
                    this.item.name.toLowerCase().includes(game.i18n.format("AUTOANIM.itemShortbow").toLowerCase())) &&
                this.animateItem.animType === "t4"):
            case (this.animateItem.explosion && (this.animateItem.animType === "t2") && this.animateItem.override):
            case (this.animateItem.explosion && (this.animateItem.animType === "t3") && this.animateItem.override):
                explosionOptions.show();
                break;
            case ((this.animateItem.animType === "t8") && this.animateItem.override):
            case ((this.animateItem.animType === "t9") && this.animateItem.override):
                explosionOptions.show();
                animateName.hide();
                animateColor.hide();
                break;
            case ((this.animateItem.animType === "t3") && (this.animateItem.override)):
                animateColor.hide();
                explosionOptions.hide();
                break;
            default:
                explosionOptions.hide();
                break;
        }

        switch (true) {
            //case (this.animateItem.animName.toLowerCase().includes("dagger")):
            case this.animateItem.animName.toLowerCase().includes(game.i18n.format("AUTOANIM.itemDagger").toLowerCase()):
            //case (this.animateItem.animName.toLowerCase().includes("spear")):
            case this.animateItem.animName.toLowerCase().includes(game.i18n.format("AUTOANIM.itemSpear").toLowerCase()):
            //case (this.animateItem.animName.toLowerCase().includes("handaxe")):
            case this.animateItem.animName.toLowerCase().includes(game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase()):
                noRangeColor.show();
                break;
            default:
                noRangeColor.hide();
                break;
        }

        switch (true) {
            //case (this.animateItem.animName.toLowerCase().includes("boulder") || this.item.name.toLowerCase().includes("boulder")):
            case (this.animateItem.animName.toLowerCase().includes(game.i18n.format("AUTOANIM.itemBoulder").toLowerCase()) || this.item.name.toLowerCase().includes(game.i18n.format("AUTOANIM.itemBoulder").toLowerCase())):
            //case (this.animateItem.animName.toLowerCase().includes("javelin") || this.item.name.toLowerCase().includes("javelin")):
            case (this.animateItem.animName.toLowerCase().includes(game.i18n.format("AUTOANIM.itemJavelin").toLowerCase()) || this.item.name.toLowerCase().includes(game.i18n.format("AUTOANIM.itemJavelin").toLowerCase())):
            //case (this.animateItem.animName.toLowerCase().includes("siege") || this.item.name.toLowerCase().includes("siege")):
            case (this.animateItem.animName.toLowerCase().includes(game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase()) || this.item.name.toLowerCase().includes(game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase())):
            //case (this.animateItem.animName.toLowerCase().includes("throwing") || this.item.name.toLowerCase().includes("throwing")):
            case (this.animateItem.animName.toLowerCase().includes(game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase()) || this.item.name.toLowerCase().includes(game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase())):
            case (this.animateItem.animType === "t3"):
            case (this.animateItem.animName.toLowerCase().includes(game.i18n.format("AUTOANIM.itemSling").toLowerCase())):
                animateColor.hide();
                break;
        }

        switch (true) {
            //case ((this.animateItem.animName.toLowerCase().includes("arrow")) && (this.animateItem.animType === "t4") && this.animateItem.override):
            case ((this.animateItem.animName.toLowerCase().includes(game.i18n.format("AUTOANIM.itemArrow").toLowerCase())) && (this.animateItem.animType === "t4") && this.animateItem.override):
            case ((this.animateItem.animType === "t2") && this.animateItem.override):
            case ((this.animateItem.animType === "t3") && this.animateItem.override):
                animateExplosion.show();
                break;
            default:
                animateExplosion.hide();
        }

        switch (true) {
            //case ((this.animateItem.animName === "Dagger") && (this.animateItem.animType === "t2") && (this.animateItem.override)):
            case ((this.animateItem.animName.toLowerCase().includes(game.i18n.format("AUTOANIM.itemDagger").toLowerCase())) && (this.animateItem.animType === "t2") && (this.animateItem.override)):
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
                    this.app._tabs[0].activate("autoanimations");
                    this.activate = false;
                    break;
                case ("pf1"):
                    this.app._tabsAlt.subTabs[0].parent.activate("autoanimations");
                    this.activate = false;
                    break
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

        this.html.find('.animation-tab-contents select').change(evt => {
            this.activate = true;
        });

        this.html.find('input[name="flags.autoanimations.killAnim"]').click(evt => {
            this.animateItem.toggleEnabled(evt.target.checked);
            //this.render();
            //mergeDamnObject(this.item);
        });
        this.html.find('select[name="flags.autoanimations.animName"]').change(evt => {
            //this.animateItem.animName = evt.target.value;
            //this.activate = true;
        });

        this.html.find('select[name="flags.autoanimations.animType"]').change(evt => {
            //this.item.setFlag("autoanimations", "animType", "");
            //this.activate = true;
        })

        this.html.find('select[name="flags.autoanimations.color"]').change(evt => {
            //this.animateItem.color = evt.target.value;
            //this.activate = true;
        });

        this.html.find('input[name="flags.autoanimations.override"]').click(evt => {
            //this.animateItem.toggleEnabled(evt.target.unchecked);
            //this.activate = true;
        });

        this.html.find('input[name="flags.autoanimations.explosion"]').click(evt => {
            //this.animateItem.toggleEnabled(evt.target.value);
            //this.activate = true;
        });

        this.html.find('select[name="flags.autoanimations.explodeVariant"]').change(evt => {
            //this.animateItem.color = evt.target.value;
            //this.activate = true;
        });

        this.html.find('select[name="flags.autoanimations.explodeColor"]').change(evt => {
            //this.animateItem.color = evt.target.value;
            //this.activate = true;
        });

        this.html.find('select[name="flags.autoanimations.explodeRadius"]').change(evt => {
            //this.animateItem.color = evt.target.value;
            //this.activate = true;
        });


    }

    isActive() {
        return $(this.html).find('a.item[data-tab="autoanimations"]').hasClass("active");
    }

}