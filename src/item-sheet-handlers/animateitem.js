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
        this.explodeLoop = this.data.explodeLoop;
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
            explodeLoop: 1,
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
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorLaserSword);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorLaserSwordFree);
                }
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
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorMelee);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorMeleeFree);
                }
                break;
            case (this.itemName.includes("cure", "wound")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorCureWounds);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorCureWoundsFree);
                }
                break;
            case (this.itemName.includes("disintegrate")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorDisintegrate);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorDisintegrateFree);
                }
                break;
            case (this.itemName.includes("eldritch blast")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorEBlast);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorEBlastFree);
                }
                break;
            case (this.itemName.includes("fire", "bolt")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorFirebolt);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorFireboltFree);
                }
                break;
            case (this.itemName.includes("generic", "heal")):
            case (this.itemName.includes("heal", "word")):
                return AUTOANIM.localized(AUTOANIM.animColorHealingWord);
                break;
            case (this.itemName.includes("magic" && "missile")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorMagicMissile);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorMagicMissileFree);
                }
                break;
            case (this.itemName.includes("ray of frost")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorRayFrost);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorRayFrostFree);
                }
                break;
            case (this.itemName.includes("scorching ray")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorScorchingRay);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorScorchingRayFree);
                }
                break;
            case (this.itemName.includes("witch", "bolt")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorWitchbolt);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorWitchboltFree);
                }
                break;
            case (this.itemName.includes("thunderwave")):
            case (this.itemName.includes("shatter")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorShatterThunder);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorShatterThunderFree);
                }
                break;
            case (this.itemName.includes("arrow")):
            case (this.itemName.includes("bow")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorArrow);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorArrowFree);
                }
                break;
            case (this.itemName.includes("laser")):
                return AUTOANIM.localized(AUTOANIM.laserblastColors);
                break;
            case (this.itemName.includes("bite")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animBiteColor);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animBiteColorFree);
                }
                break;
            case (this.itemName.includes("claw")):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animClawColor);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animClawColorFree);
                }
                break;
            default:
                return AUTOANIM.localized(AUTOANIM.animNull);
                break;
        }
    }

    get daggerVar() {
        if (moduleIncludes("jb2a_patreon")) {
            return AUTOANIM.localized(AUTOANIM.daggerVariant);
        } else {
            return AUTOANIM.localized(AUTOANIM.daggerVariantFree);
        }
    }

    get exColors() {
        if (moduleIncludes("jb2a_patreon")) {
            return AUTOANIM.localized(AUTOANIM.explosionColors);
        } else {
            return AUTOANIM.localized(AUTOANIM.explosionColorsFree);
        }
    }

    get exRadii() {
            return AUTOANIM.localized(AUTOANIM.explosionRadius);
    }

    get exVariants() {
        if (moduleIncludes("jb2a_patreon")) {
            return AUTOANIM.localized(AUTOANIM.explosionVariant);
        } else {
            return AUTOANIM.localized(AUTOANIM.explosionVariantFree);
        }
    }

    get exLoops() {
        return AUTOANIM.explosionLoops;
    }

    get animNameHolder() {
        //console.log(this.animTypeVar);
        switch (true) {
            case (this.animType === "t2"):
                return AUTOANIM.localized(AUTOANIM.animNameMeleeWeapon);
                break;
            case (this.animType === "t3"):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animNameGenericDmg);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animNameGenericDmgFree);
                }
                break;
            case (this.animType === "t4"):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animNameRangeWeapon);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animNameRangeWeaponFree);
                }
                break;
            case (this.animType === "t5"):
                return AUTOANIM.localized(AUTOANIM.animCreatureAttack);
                break;
            case (this.animType === "t6"):
                return AUTOANIM.localized(AUTOANIM.animNameAttackSpell);
                break;
            case (this.animType === "t7"):
                return AUTOANIM.localized(AUTOANIM.animNameHealSpell);
                break;
        }
    }

    get animTypePick() {
        return AUTOANIM.localized(AUTOANIM.animTypePick);
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

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
