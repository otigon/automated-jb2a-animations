
import { AUTOANIM } from "./config.js";

export function colorChoices(itemName, patreon, spellVariant, bardAnimation, damageType) {
    let animationColor;
    console.log("Converted Item Name is " + itemName);
    switch (true) {
        case itemName === "lasersword":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorLaserSword) : AUTOANIM.localized(AUTOANIM.animColorLaserSwordFree)
            break;
        case itemName === "dagger":
        case itemName === "greataxe":
        case itemName === "greatsword":
        case itemName === "greatclub":
        case itemName === "handaxe":
        case itemName === "mace":
        case itemName === "maul":
        case itemName === "rapier":
        case itemName === "scimitar":
        case itemName === "spear":
        case itemName === "sword":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorMelee) : AUTOANIM.localized(AUTOANIM.animColorMeleeFree)
            break;
        case itemName === "curewounds":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorCureWounds) : AUTOANIM.localized(AUTOANIM.animColorCureWoundsFree)
            break;
        case itemName === "guidingbolt":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.guidingboltColor) : AUTOANIM.localized(AUTOANIM.guidingboltColorFree)
            break;
        case itemName === "disintegrate":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorDisintegrate) : AUTOANIM.localized(AUTOANIM.animColorDisintegrateFree)
            break;
        case itemName === "eldritchblast":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorEldritchBlast) : AUTOANIM.localized(AUTOANIM.animColorEldritchBlastFree)
            break;
        case itemName === "firebolt":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorFirebolt) : AUTOANIM.localized(AUTOANIM.animColorFireboltFree)
            break;
        case itemName === "generichealing":
            switch (spellVariant) {
                case ('01'):
                    animationColor = AUTOANIM.localized(AUTOANIM.animGenHealing01);
                    break;
                case ('02'):
                    animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animGenHealing02) : AUTOANIM.localized(AUTOANIM.animGenHealingFree02);
                    break;
                default:
                    return;
            }
            break;
        case itemName === "magicmissile":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorMagicMissile) : AUTOANIM.localized(AUTOANIM.animColorMagicMissileFree)
            break;
        case itemName === "rayoffrost":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorRayFrost) : AUTOANIM.localized(AUTOANIM.animColorRayFrostFree)
            break;
        case itemName === "scorchingray":
            if (patreon) {
                if (spellVariant === "02") {
                    animationColor = AUTOANIM.localized(AUTOANIM.animColorScorchingRay['02'])
                } else {
                    animationColor = AUTOANIM.localized(AUTOANIM.animColorScorchingRay['01']);
                }
            } else {
                animationColor = AUTOANIM.localized(AUTOANIM.animColorScorchingRayFree)
            }
            break;
        case itemName === "witchbolt":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorWitchbolt) : AUTOANIM.localized(AUTOANIM.animColorWitchboltFree)
            break;
        case itemName === "thunderwave":
        case itemName === "shatter":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorShatterThunder) : AUTOANIM.localized(AUTOANIM.animColorShatterThunderFree)
            break;
        case itemName === "arrow":
            if (damageType === "regular") {
                animationColor = patreon ? AUTOANIM.localized(AUTOANIM.legacyArrowColors) : AUTOANIM.localized(AUTOANIM.legacyArrowColorsFree)
            } else {
                animationColor = patreon ? AUTOANIM.localized(AUTOANIM.arrowColors) : AUTOANIM.localized(AUTOANIM.arrowColorsFree)
            }
            break;
        case itemName === "lasershot":
            animationColor = AUTOANIM.localized(AUTOANIM.laserblastColors);
            break;
        case itemName === "creaturebite":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animBiteColor) : AUTOANIM.localized(AUTOANIM.animBiteColorFree)
            break;
        case itemName === "creatureclaw":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animClawColor) : AUTOANIM.localized(AUTOANIM.animClawColorFree)
            break;
        //add check
        case itemName === "calllightning":
            animationColor = AUTOANIM.localized(AUTOANIM.calllightningColors);
            break;
        //add check
        case itemName === "sleetstorm":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.sleetstormColors) : AUTOANIM.localized(AUTOANIM.sleetstormColorsFree)
            break;
        //add check
        case itemName === "spiritguardians":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.spiritguardianColors) : AUTOANIM.localized(AUTOANIM.spiritguardianColorsFree)
            break;
        //add check
        case itemName === "wallofforce":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.wallofforceColors) : AUTOANIM.localized(AUTOANIM.wallofforceColorsFree)
            break;
        //add check
        case itemName === "whirlwind":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.whirlwindColors) : AUTOANIM.localized(AUTOANIM.whirlwindColorsFree)
            break;
        //add check
        case itemName === "darkness":
            animationColor = AUTOANIM.localized(AUTOANIM.darknessColors);
            break;
        case itemName === "huntersmark":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.hmColors) : AUTOANIM.localized(AUTOANIM.hmColorsFree)
            break;
        //add check
        case itemName === "mistystep":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.mistystepColor) : AUTOANIM.localized(AUTOANIM.mistystepColorFree)
            break;
        //add check
        case itemName === "bardicinspiration":
            switch (bardAnimation) {
                case "music":
                    animationColor = patreon ? AUTOANIM.localized(AUTOANIM.musicnoteColor) : AUTOANIM.localized(AUTOANIM.musicnoteColorFree);
                    break;
                default:
                    animationColor = patreon ? AUTOANIM.localized(AUTOANIM.bardicInspirationColors) : AUTOANIM.localized(AUTOANIM.bardicInspirationColorsFree);
            }
            break;
        case itemName === "unarmedstrike":
        case itemName === "flurryofblows":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.uaStrikeColor) : AUTOANIM.localized(AUTOANIM.uaStrikeColorFree)
            break;
        case itemName === "bolt":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.boltColors) : AUTOANIM.localized(AUTOANIM.boltColorsFree)
            break;
        case itemName === "bullet":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.bulletColors) : AUTOANIM.localized(AUTOANIM.bulletColorsFree0102)
            break;
        case itemName === "snipe":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.snipeColors) : AUTOANIM.localized(AUTOANIM.snipeColorsFree)
            break;
        case itemName === "snipe":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.snipeColors) : AUTOANIM.localized(AUTOANIM.snipeColorsFree)
            break;
        case itemName === "sneakattack":
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.sneakattackColors) : AUTOANIM.localized(AUTOANIM.sneakattackColorsFree)
            break;
        default:
            animationColor = AUTOANIM.localized(AUTOANIM.animNull);
            break;

    }
    return animationColor;
}

export function animationName(animType, patreon) {
    let animationNames;
    switch (animType) {
        case "t2":
            animationNames = AUTOANIM.localized(AUTOANIM.animNameMeleeWeapon);
            break;
        case "t3":
            animationNames = patreon ? AUTOANIM.localized(AUTOANIM.animNameGenericDmg) : AUTOANIM.localized(AUTOANIM.animNameGenericDmgFree)
            break;
        case "t4":
            animationNames = patreon ? AUTOANIM.localized(AUTOANIM.animNameRangeWeapon) : AUTOANIM.localized(AUTOANIM.animNameRangeWeaponFree)
            break;
        case "t5":
            animationNames = AUTOANIM.localized(AUTOANIM.animCreatureAttack);
            break;
        case "t6":
            animationNames = AUTOANIM.localized(AUTOANIM.animNameAttackSpell);
            break;
        case "t7":
            animationNames = AUTOANIM.localized(AUTOANIM.animNameHealSpell);
            break;
        case "t10":
            animationNames = AUTOANIM.localized(AUTOANIM.selfemanation);
            break;
        case "t11":
            animationNames = AUTOANIM.localized(AUTOANIM.aura);
            break;
        case "t12":
            animationNames = AUTOANIM.localized(AUTOANIM.animTeleport);
            break;
        case "t13":
            animationNames = AUTOANIM.localized(AUTOANIM.animNameClassFeatures);
            break;
    }
    return animationNames;
}

export function daggerVariants(thrownVariant, patreon) {
    thrownVariant = patreon ? AUTOANIM.localized(AUTOANIM.daggerVariant) : AUTOANIM.localized(AUTOANIM.daggerVariantFree);
    return thrownVariant;
}

export function explosionColors(explosionVariant, patreon, impactVariant) {
    let explosionColor;
    switch (explosionVariant) {
        case ('01'):
            explosionColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColors012) : AUTOANIM.localized(AUTOANIM.explosionColorsFree01);
            break;
        case ('02'):
            explosionColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColors012) : AUTOANIM.localized(AUTOANIM.explosionColorsFree024);
            break;
        case ('03'):
            explosionColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColors03) : AUTOANIM.localized(AUTOANIM.explosionColorsFree03);
            break;
        case ('04'):
            explosionColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColors04) : AUTOANIM.localized(AUTOANIM.explosionColorsFree024);
            break;
        case ('05'):
        case ('06'):
        case ('07'):
            explosionColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColors0567) : AUTOANIM.localized(AUTOANIM.explosionColorsFree0567);
            break;
        case ('impact'):
            if (impactVariant === "boulder") {
                return
            } else {
                explosionColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColorsImpact) : AUTOANIM.localized(AUTOANIM.explosionColorsImpactFree);
            }
            break;
        case ('shatter'):
        case ('thunderwave'):
            explosionColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorShatterThunder) : AUTOANIM.localized(AUTOANIM.animColorShatterThunderFree);
            break;
        default:
            return;
    }
    return explosionColor;
}

export function bardColorTarget(bardTargetAnimation, patreon) {
    let bardColorTarget;
    switch (bardTargetAnimation) {
        case "music":
            bardColorTarget = patreon ? AUTOANIM.localized(AUTOANIM.musicnoteColor) : AUTOANIM.localized(AUTOANIM.musicnoteColorFree);
            break;
        default:
            bardColorTarget = patreon ? AUTOANIM.localized(AUTOANIM.bardicInspirationColors) : AUTOANIM.localized(AUTOANIM.bardicInspirationColorsFree);
    }
    return bardColorTarget;
}

export function animTemplates(templateType) {
    let templateChoices;
    switch (templateType) {
        case "circle":
            templateChoices = AUTOANIM.localized(AUTOANIM.circleAnimations)
            break;
        case "ray":
            templateChoices = AUTOANIM.localized(AUTOANIM.rayAnimations)
            break;
        case "rect":
            templateChoices = AUTOANIM.localized(AUTOANIM.rectangleAnimations)
            break;
        case "cone":
            templateChoices = AUTOANIM.localized(AUTOANIM.coneAnimations)
            break;
    }
    return templateChoices;
}

export function templateColors(templateType, templateAnimation, patreon) {
    let templateColor;
    switch (templateType) {
        case "cone":
            switch (templateAnimation) {
                case "coneofcold":
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.coneColdColor) : AUTOANIM.localized(AUTOANIM.coneColdColorFree);
                    break;
                case "cold":
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.coneColdColor) : AUTOANIM.localized(AUTOANIM.coneColdColorFree);
                    break;
                case "fire01":
                case "fire02":
                case "burninghands01":
                case "burninghands02":
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.coneFireColor) : AUTOANIM.localized(AUTOANIM.coneFireColorFree);
                    break;
                case "poison":
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.conePoisonColor) : AUTOANIM.localized(AUTOANIM.conePoisonColorFree);
                    break;
            }
        case "ray":
            switch (templateAnimation) {
                case "acid":
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.rayAcidColor) : AUTOANIM.localized(AUTOANIM.rayAcidColorFree);
                    break;
                case "fire":
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.rayFireColor) : AUTOANIM.localized(AUTOANIM.rayFireColorFree);
                    break;
                case "lightning":
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.rayLightningColor) : AUTOANIM.localized(AUTOANIM.rayLightningColorFree);
                    break;
            }
            return AUTOANIM.localized(AUTOANIM.coneColdColor);
            break;
        case "circle":
            switch (templateAnimation) {
                case 'ex01':
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColors012) : AUTOANIM.localized(AUTOANIM.explosionColorsFree01);
                    break;
                case 'ex02':
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColors012) : AUTOANIM.localized(AUTOANIM.explosionColorsFree024);
                    break;
                case 'ex03':
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColors03) : AUTOANIM.localized(AUTOANIM.explosionColorsFree03);
                    break;
                case 'ex04':
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColors04) : AUTOANIM.localized(AUTOANIM.explosionColorsFree024);
                    break;
                case 'snowflake':
                case 'outpulse01':
                case 'outpulse02':
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.explosionColors0567) : AUTOANIM.localized(AUTOANIM.explosionColorsFree0567);
                    break;
                case 'shatter':
                case 'thunderwave':
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorShatterThunder) : AUTOANIM.localized(AUTOANIM.animColorShatterThunderFree);
                    break;
                /*
                case 'fogcloud':
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorShatterThunder) : AUTOANIM.localized(AUTOANIM.animColorShatterThunderFree)
                    break;
                */
                case 'darkness':
                    templateColor = AUTOANIM.localized(AUTOANIM.darknessColors)
                    break;
                case 'calllightning':
                    templateColor = AUTOANIM.localized(AUTOANIM.calllightningColors)
                    break;
                case 'sleetstorm':
                    templateColor = patreon ? AUTOANIM.localized(AUTOANIM.sleetstormColors) : AUTOANIM.localized(AUTOANIM.sleetstormColorsFree)
                    break;
                default:
                    return;
            }
            break;
        case "rect":
            return AUTOANIM.localized(AUTOANIM.entangleColors);
            break;
    }
    return templateColor;
}

export function rangedDamageTypes(itemName) {
    let damageType;
    switch (itemName) {
        case "bullet":
            damageType = AUTOANIM.localized(AUTOANIM.bulletOptions)
            break;
        case "bolt":
            damageType = AUTOANIM.localized(AUTOANIM.boltOptions)
            break;
        case "arrow":
            damageType = AUTOANIM.localized(AUTOANIM.arrowOptions)
            break;
    }
    return damageType;
}

export function tokenAnimations() {
    return AUTOANIM.tokenAnimations
}

