import { AUTOANIM } from "./config.js";

export class AnimateItem {

    constructor(flags, itemData) {
        this.data = mergeObject(this.defaultData(), flags, { inplace: true });

        this.killAnim = this.data.killAnim;
        this.override = this.data.override;
        this.animName = this.data.animName;
        this.color = this.data.color;
        this.animType = this.data.animType;
        this.explosion = this.data.explosion;
        this.explodeColor = this.data.explodeColor;
        this.explodeRadius = this.data.explodeRadius;
        this.explodeVariant = this.data.explodeVariant;
        this.itemName = itemData[0];
        this.animTypeVar = itemData[1];
        //this.itemNameSys = itemData[2];
        this.dtvar = this.data.dtvar;
        //this.flagObject = Object.assign({}, this.data);
    }

    defaultData() {
        return {
            animName: ``,
            animType: ``,
            color: ``,
            explodeColor: ``,
            explodeRadius: ``,
            explodeVariant: ``,
            dtvar: ``,
            killAnim: false,
            explosion: false,
            override: false,
            //itemName = ``,
            //animTypeVar = ``,
        }
    }
    /*
    serializeData() {
        return {
            killAnim: this.killAnim,
            override: this.override,
            animName: this.animName,
            color: this.color,
            animType: this.animType,
            explosion: this.explosion,
            explodeColor: this.explodeColor,
            explodeRadius: this.explodeRadius,
            explodeVariant: this.explodeVariant,
        }
    }
    */
    /*
    serializeEntries(entries, trash) {
        let data = {};
        entries.forEach((spell, idx) => data["" + idx] = spell.serializeData());
        trash.forEach(index => data["-=" + index] = null);
        return data;
    }
    */
    get meleeColor() {
        //console.log(this.animType);
        //console.log(this.itemName);
        //console.log(this.color);
        switch (true) {
            case (this.itemName.includes("lasersword")):
                return AUTOANIM.animColorLaserSword;
                break;
            case (this.itemName.includes("dagger")):
            case (this.itemName.includes("greataxe")):
            case (this.itemName.includes("greatsword")):
            case (this.itemName.includes("greatclub")):
            case (this.itemName.includes("handaxe")):
            case (this.itemName.includes("mace")):
            case (this.itemName.includes("maul")):
            case (this.itemName.includes("rapier")):
            case (this.itemName.includes("scimitar")):
            case (this.itemName.includes("spear")):
            case (this.itemName.includes("sword")):
                return AUTOANIM.animColorMelee;
                break;
            case (this.itemName.includes("cure", "wound")):
                return AUTOANIM.animColorCureWounds;
                break;
            case (this.itemName.includes("disintegrate")):
                return AUTOANIM.animColorDisintegrate;
                break;
            case (this.itemName.includes("eldritch blast")):
                return AUTOANIM.animColorEBlast;
                break;
            case (this.itemName.includes("fire", "bolt")):
                return AUTOANIM.animColorFirebolt;
                break;
            case (this.itemName.includes("generic", "heal")):
            case (this.itemName.includes("heal", "word")):
                return AUTOANIM.animColorHealingWord;
                break;
            case (this.itemName.includes("magic" && "missile")):
                return AUTOANIM.animColorMagicMissile;
                break;
            case (this.itemName.includes("ray of frost")):
                return AUTOANIM.animColorRayFrost;
                break;
            case (this.itemName.includes("scorching ray")):
                return AUTOANIM.animColorScorchingRay;
                break;
            case (this.itemName.includes("witch", "bolt")):
                return AUTOANIM.animColorWitchbolt;
                break;
            case (this.itemName.includes("thunderwave")):
            case (this.itemName.includes("shatter")):
                return AUTOANIM.animColorShatterThunder;
                break;
            case (this.itemName.includes("arrow")):
            case (this.itemName.includes("bow")):
                return AUTOANIM.animColorArrow;
                break;
            case (this.itemName.includes("laser")):
                return AUTOANIM.laserblastColors;
                break;
            case (this.itemName.includes("bite")):
                return AUTOANIM.animBiteColor;
                break;
            case (this.itemName.includes("claw")):
                return AUTOANIM.animClawColor;
                break;
            default:
                return AUTOANIM.animNoColor;
                break;
        }
    }

    get daggerVar() {
        return AUTOANIM.daggerVariant;
    }

    get exColors() {
        return AUTOANIM.explosionColors;
    }

    get exRadii() {
        return AUTOANIM.explosionRadius;
    }

    get exVariants() {
        return AUTOANIM.explosionVariant;
    }

    get animNameHolder() {
        //console.log(this.animTypeVar);
        switch (true) {
            case (this.animType === "t2"):
                return AUTOANIM.animNameMeleeWeapon;
                break;
            case (this.animType === "t3"):
                return AUTOANIM.animNameGenericDmg;
                break;
            case (this.animType === "t4"):
                return AUTOANIM.animNameRangeWeapon;
                break;
            case (this.animType === "t5"):
                return AUTOANIM.animCreatureAttack;
                break;
            case (this.animType === "t6"):
                return AUTOANIM.animNameAttackSpell;
                break;
            case (this.animType === "t7"):
                return AUTOANIM.animNameHealSpell;
                break;
        }
    }

    get animTypePick() {
        return AUTOANIM.animTypePick;
    }


    toggleEnabled(enabled) {
        this.enabled = enabled;
        if (this.enabled) {
            //console.log(this.flagObject);
            //console.log(this);
            mergeObject(this, this.defaultData(), { inplace: true });
            //console.log(this);
            //console.log(this.data);
            //console.log(this._currentData);
            //console.log(this.defaultData());
        }
    }
    /*
        clear() {
            mergeObject(this, this.defaultData(), {overwrite});
        }
    */

}
