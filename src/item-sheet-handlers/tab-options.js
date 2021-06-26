
import { AUTOANIM } from "./config.js";

export function colorChoices(itemName, patreon, spellVariant, bardAnimation) {
    let animationColor;
    switch (true) {
        case itemName.includes("lasersword"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorLaserSword) : AUTOANIM.localized(AUTOANIM.animColorLaserSwordFree)
            break;
        case itemName.includes("dagger"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemDagger").toLowerCase()):
        case itemName.includes("greataxe"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemGreataxe").toLowerCase()):
        case itemName.includes(game.i18n.format("AUTOANIM.itemBattleaxe").toLowerCase()):
        case itemName.includes("greatsword"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemGreatsword").toLowerCase()):
        case itemName.includes("greatclub"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemGreatclub").toLowerCase()):
        case itemName.includes("handaxe"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase()):
        case itemName.includes("mace"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemMace").toLowerCase()):
        case itemName.includes("maul"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemMaul").toLowerCase()):
        case itemName.includes("rapier"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemRapier").toLowerCase()):
        case itemName.includes("scimitar"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemScimitar").toLowerCase()):
        case itemName.includes("spear"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemSpear").toLowerCase()):
        case itemName.includes("sword"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemSword").toLowerCase()):
        case itemName.includes(game.i18n.format("AUTOANIM.itemLongsword").toLowerCase()):
        case itemName.includes(game.i18n.format("AUTOANIM.itemShortsword").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorMelee) : AUTOANIM.localized(AUTOANIM.animColorMeleeFree)
            break;
        case itemName.includes("cure", "wound"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorCureWounds) : AUTOANIM.localized(AUTOANIM.animColorCureWoundsFree)
            break;
        case itemName.includes("guiding bolt"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemGuidingBolt").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.guidingboltColor) : AUTOANIM.localized(AUTOANIM.guidingboltColorFree)
            break;
        case (itemName.includes("disintegrate")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorDisintegrate) : AUTOANIM.localized(AUTOANIM.animColorDisintegrateFree)
            break;
        case (itemName.includes("eldritch blast")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorEldritchBlast) : AUTOANIM.localized(AUTOANIM.animColorEldritchBlastFree)
            break;
        case (itemName.includes("fire bolt")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorFirebolt) : AUTOANIM.localized(AUTOANIM.animColorFireboltFree)
            break;
        //case (itemName.includes("generic", "heal")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
        case (itemName.includes("healing word")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
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
        case (itemName.includes("magic missile")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorMagicMissile) : AUTOANIM.localized(AUTOANIM.animColorMagicMissileFree)
            break;
        case (itemName.includes("ray of frost")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorRayFrost) : AUTOANIM.localized(AUTOANIM.animColorRayFrostFree)
            break;
        case (itemName.includes("scorching ray")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
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
        case (itemName.includes("witch bolt")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorWitchbolt) : AUTOANIM.localized(AUTOANIM.animColorWitchboltFree)
            break;
        case (itemName.includes("thunderwave")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
        case (itemName.includes("shatter")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemShatter").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorShatterThunder) : AUTOANIM.localized(AUTOANIM.animColorShatterThunderFree)
            break;
        //case (itemName.includes("arrow")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemArrow").toLowerCase()):
        case itemName.includes("bow"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemLongbow").toLowerCase()):
        case itemName.includes(game.i18n.format("AUTOANIM.itemShortbow").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animColorArrow) : AUTOANIM.localized(AUTOANIM.animColorArrowFree)
            break;
        case (itemName.includes("laser")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
            animationColor = AUTOANIM.localized(AUTOANIM.laserblastColors);
            break;
        case (itemName.includes("bite")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animBiteColor) : AUTOANIM.localized(AUTOANIM.animBiteColorFree)
            break;
        case (itemName.includes("claw")):
        case itemName.includes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.animClawColor) : AUTOANIM.localized(AUTOANIM.animClawColorFree)
            break;
        case itemName === "call lightning":
        case itemName.includes(game.i18n.format("AUTOANIM.animCallLightning").toLowerCase()):
            animationColor = AUTOANIM.localized(AUTOANIM.calllightningColors);
            break;
        case itemName === "sleetstorm":
        case itemName.includes(game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.sleetstormColors) : AUTOANIM.localized(AUTOANIM.sleetstormColorsFree)
            break;
        case itemName === "spirit guardians":
        case itemName.includes(game.i18n.format("AUTOANIM.animSpiritGuardians").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.spiritguardianColors) : AUTOANIM.localized(AUTOANIM.spiritguardianColorsFree)
            break;
        case itemName === "wall of force":
        case itemName.includes(game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.wallofforceColors) : AUTOANIM.localized(AUTOANIM.wallofforceColorsFree)
            break;
        case itemName === "whirlwind":
        case itemName.includes(game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.whirlwindColors) : AUTOANIM.localized(AUTOANIM.whirlwindColorsFree)
            break;
        case itemName === "darkness":
        case itemName.includes(game.i18n.format("AUTOANIM.animDarkness").toLowerCase()):
            animationColor = AUTOANIM.localized(AUTOANIM.darknessColors);
            break;
        case itemName === "hunter's mark":
        case itemName.includes(game.i18n.format("AUTOANIM.itemHM").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.hmColors) : AUTOANIM.localized(AUTOANIM.hmColorsFree)
            break;
        case itemName === "misty step":
        case itemName.includes(game.i18n.format("AUTOANIM.itemMistyStep").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.mistystepColor) : AUTOANIM.localized(AUTOANIM.mistystepColorFree)
            break;
        case itemName === "bardic inspiration":
        case itemName.includes(game.i18n.format("AUTOANIM.bardicInspiration").toLowerCase()):
            switch (bardAnimation) {
                case "music":
                    animationColor = patreon ? AUTOANIM.localized(AUTOANIM.musicnoteColor) : AUTOANIM.localized(AUTOANIM.musicnoteColorFree);
                    break;
                default:
                    animationColor = patreon ? AUTOANIM.localized(AUTOANIM.bardicInspirationColors) : AUTOANIM.localized(AUTOANIM.bardicInspirationColorsFree);
            }
            break;
        case itemName.includes("unarmed strike"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase()):
        case itemName.includes("flurry of blows"):
        case itemName.includes(game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase()):
            animationColor = patreon ? AUTOANIM.localized(AUTOANIM.uaStrikeColor) : AUTOANIM.localized(AUTOANIM.uaStrikeColorFree)
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

export function explosionColors(explosionVariant, patreon) {
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
            if (this.impactVar === "boulder") {
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

function moduleIncludes(test) {
    return !!game.modules.get(test);
}
