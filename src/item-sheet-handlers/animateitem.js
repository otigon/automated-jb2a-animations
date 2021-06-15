import { AUTOANIM } from "./config.js";
//import { JB2APATREONDB } from "../animation-functions/jb2a-patreon-database.js";
//import { JB2AFREEDB } from "../animation-functions/jb2a-free-database.js";
import animPreview from "./anim-preview.js";

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
        this.selfRadius = this.data.selfRadius;
        //this.itemNameSys = itemData[2];
        this.dtvar = this.data.dtvar;
        this.animTint = this.data.animTint;
        this.auraOpacity = this.data.auraOpacity;
        this.ctaOption = this.data.ctaOption;
        this.hmAnim = this.data.hmAnim;
        this.uaStrikeType = this.data.uaStrikeType;
        this.teleDist = this.data.teleDist;
        this.spellVar = this.data.spellVar;
        this.bards = this.data.bards;
        this.bardAnim = this.data.bards.bardAnim;
        this.bardTarget = this.data.bards.bardTarget;
        this.bardTargetAnim = this.data.bards.bardTargetAnim;
        this.bardTargetColor = this.data.bards.bardTargetColor;
        this.bardSelf = this.data.bards.bardSelf;
        this.marker = this.data.bards.marker;
        this.markerColor = this.data.bards.markerColor;
        this.markerColorTarget = this.data.bards.markerColorTarget;
        this.allSounds = this.data.allSounds;
        this.enableAudio = this.data.allSounds.item.enableAudio;
        this.audioExplodeEnabled = this.data.allSounds.explosion.audioExplodeEnabled;
        this.spellLoops = this.data.spellOptions.spellLoops;
        this.divineSmite = this.data.divineSmite;
        this.dsEnable = this.data.divineSmite.dsEnable;
        this.dsSelf = this.data.divineSmite.dsSelf;
        this.dsTarget = this.data.divineSmite.dsTarget;
        this.dsSelfColor = this.data.divineSmite.dsSelfColor;
        this.dsTargetColor = this.data.divineSmite.dsTargetColor;
        this.dsSelfDelay = this.data.divineSmite.dsSelfDelay;
        this.dsTargetDelay = this.data.divineSmite.dsTargetDelay;
        this.tempType = this.data.templates.tempType;
        this.tempColor = this.data.templates.tempColor;
        this.tempAnim = this.data.templates.tempAnim;
        this.tempLoop = this.data.templates.tempLoop;
        //this.flagObject = Object.assign({}, this.data);
    }

    defaultData() {
        return {
            animName: ``,
            animType: ``,
            color: ``,
            ctaOption: false,
            explodeColor: ``,
            explodeLoop: 1,
            explodeRadius: ``,
            explodeVariant: ``,
            dtvar: ``,
            killAnim: false,
            explosion: false,
            override: false,
            selfRadius: ``,
            animTint: ``,
            auraOpacity: ``,
            hmAnim: ``,
            uaStrikeType: ``,
            teleDist: ``,
            spellVar: ``,
            bards: {
                bardTarget: true,
                bardTargetAnim: ``,
                bardTargetColor: ``,
                bardSelf: true,
                bardAnim: ``,
                marker: true,
                markerColor: ``,
                markerColorTarget: ``
            },
            allSounds: {
                item: {
                    enableAudio: false,
                    file: ``,
                    delay: 100,
                    volume: 0.25
                },
                explosion: {
                    audioExplodeEnabled: false,
                    file: ``,
                    delay: 100,
                    volume: 0.25
                }
            },
            spellOptions: {
                spellLoops: 1,
            },
            divineSmite: {
                dsEnable: false,
                dsSelf: true,
                dsSelfColor: ``,
                dsSelfDelay: 0,
                dsTarget: true,
                dsTargetColor: ``,
                dsTargetDelay: 1250,
            },
            templates: {
                tempType: ``,
                tempAnim: ``,
                tempColor: ``,
                tempLoop: 1,
            }
        }
    }

    get meleeColor() {
        //console.log(this.animType);
        //console.log(this.itemName);
        //console.log(this.color);
        switch (true) {
            case (this.itemName.includes("lasersword")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()):

                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorLaserSword);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorLaserSwordFree);
                }
                break;
            case (this.itemName.includes("dagger")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemDagger").toLowerCase()):
            case (this.itemName.includes("greataxe")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemGreataxe").toLowerCase()):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemBattleaxe").toLowerCase()):
            case (this.itemName.includes("greatsword")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemGreatsword").toLowerCase()):
            case (this.itemName.includes("greatclub")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemGreatclub").toLowerCase()):
            case (this.itemName.includes("handaxe")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase()):
            case (this.itemName.includes("mace")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemMace").toLowerCase()):
            case (this.itemName.includes("maul")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemMaul").toLowerCase()):
            case (this.itemName.includes("rapier")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemRapier").toLowerCase()):
            case (this.itemName.includes("scimitar")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemScimitar").toLowerCase()):
            case (this.itemName.includes("spear")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemSpear").toLowerCase()):
            case (this.itemName.includes("sword")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemSword").toLowerCase()):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemLongsword").toLowerCase()):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemShortsword").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorMelee);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorMeleeFree);
                }
                break;
            case (this.itemName.includes("cure", "wound")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorCureWounds);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorCureWoundsFree);
                }
                break;
            case this.itemName.includes("guiding bolt"):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemGuidingBolt").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.guidingboltColor);
                } else {
                    return AUTOANIM.localized(AUTOANIM.guidingboltColorFree);
                }
                break;
            case (this.itemName.includes("disintegrate")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorDisintegrate);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorDisintegrateFree);
                }
                break;
            case (this.itemName.includes("eldritch blast")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorEldritchBlast);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorEldritchBlastFree);
                }
                break;
            case (this.itemName.includes("fire bolt")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorFirebolt);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorFireboltFree);
                }
                break;
            //case (this.itemName.includes("generic", "heal")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()):
            case (this.itemName.includes("healing word")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    switch (this.spellVar) {
                        case ('01'):
                            return AUTOANIM.localized(AUTOANIM.animGenHealing01);
                            break;
                        case ('02'):
                            return AUTOANIM.localized(AUTOANIM.animGenHealing02);
                            break;
                        default:
                            return;
                    }
                } else {
                    switch (this.spellVar) {
                        case ('01'):
                            return AUTOANIM.localized(AUTOANIM.animGenHealing01);
                            break;
                        case ('02'):
                            return AUTOANIM.localized(AUTOANIM.animGenHealingFree02);
                            break;
                        default:
                            return;
                    }
                }
                break;
            case (this.itemName.includes("magic missile")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorMagicMissile);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorMagicMissileFree);
                }
                break;
            case (this.itemName.includes("ray of frost")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorRayFrost);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorRayFrostFree);
                }
                break;
            case (this.itemName.includes("scorching ray")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    if (this.spellVar === "02") {
                        return AUTOANIM.localized(AUTOANIM.animColorScorchingRay['02'])
                    } else {
                        return AUTOANIM.localized(AUTOANIM.animColorScorchingRay['01']);
                    }
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorScorchingRayFree)
                }
                break;
            case (this.itemName.includes("witch bolt")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorWitchbolt);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorWitchboltFree);
                }
                break;
            case (this.itemName.includes("thunderwave")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()):
            case (this.itemName.includes("shatter")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemShatter").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorShatterThunder);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorShatterThunderFree);
                }
                break;
            //case (this.itemName.includes("arrow")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemArrow").toLowerCase()):
            case this.itemName.includes("bow"):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemLongbow").toLowerCase()):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemShortbow").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animColorArrow);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animColorArrowFree);
                }
                break;
            case (this.itemName.includes("laser")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase()):
                return AUTOANIM.localized(AUTOANIM.laserblastColors);
                break;
            case (this.itemName.includes("bite")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animBiteColor);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animBiteColorFree);
                }
                break;
            case (this.itemName.includes("claw")):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.animClawColor);
                } else {
                    return AUTOANIM.localized(AUTOANIM.animClawColorFree);
                }
                break;
            case this.itemName === "call lightning":
            case this.itemName.includes(game.i18n.format("AUTOANIM.animCallLightning").toLowerCase()):
                return AUTOANIM.localized(AUTOANIM.calllightningColors);
                break;
            case this.itemName === "sleetstorm":
            case this.itemName.includes(game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.sleetstormColors);
                } else {
                    return AUTOANIM.localized(AUTOANIM.sleetstormColorsFree);
                }
                break;
            case this.itemName === "spirit guardians":
            case this.itemName.includes(game.i18n.format("AUTOANIM.animSpiritGuardians").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.spiritguardianColors);
                } else {
                    return AUTOANIM.localized(AUTOANIM.spiritguardianColorsFree);
                }
                break;
            case this.itemName === "wall of force":
            case this.itemName.includes(game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.wallofforceColors);
                } else {
                    return AUTOANIM.localized(AUTOANIM.wallofforceColorsFree);
                }
                break;
            case this.itemName === "whirlwind":
            case this.itemName.includes(game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.whirlwindColors);
                } else {
                    return AUTOANIM.localized(AUTOANIM.whirlwindColorsFree);
                }
                break;
            case this.itemName === "darkness":
            case this.itemName.includes(game.i18n.format("AUTOANIM.animDarkness").toLowerCase()):
                return AUTOANIM.localized(AUTOANIM.darknessColors);
                break;
            case this.itemName === "hunter's mark":
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemHM").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.hmColors);
                } else {
                    return AUTOANIM.localized(AUTOANIM.hmColorsFree);
                }
                break;
            case this.itemName === "misty step":
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemMistyStep").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.mistystepColor);
                } else {
                    return AUTOANIM.localized(AUTOANIM.mistystepColorFree);
                }
                break;
            case this.itemName === "bardic inspiration":
            case this.itemName.includes(game.i18n.format("AUTOANIM.bardicInspiration").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    switch (this.bardAnim) {
                        case "music":
                            return AUTOANIM.localized(AUTOANIM.musicnoteColor);
                            break;
                        default:
                            return AUTOANIM.localized(AUTOANIM.bardicInspirationColors);
                    }
                } else {
                    switch (this.bardAnim) {
                        case "music":
                            return AUTOANIM.localized(AUTOANIM.musicnoteColorFree);
                            break;
                        default:
                            return AUTOANIM.localized(AUTOANIM.bardicInspirationColorsFree);
                    }
                }
                break;
            case this.itemName.includes("unarmed strike"):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase()):
            case this.itemName.includes("flurry of blows"):
            case this.itemName.includes(game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase()):
                if (moduleIncludes("jb2a_patreon")) {
                    return AUTOANIM.localized(AUTOANIM.uaStrikeColor);
                } else {
                    return AUTOANIM.localized(AUTOANIM.uaStrikeColorFree);
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
            switch (this.explodeVariant) {
                case ('01'):
                case ('02'):
                    return AUTOANIM.localized(AUTOANIM.explosionColors012);
                    break;
                case ('03'):
                    return AUTOANIM.localized(AUTOANIM.explosionColors03);
                    break;
                case ('04'):
                    return AUTOANIM.localized(AUTOANIM.explosionColors04);
                    break;
                case ('05'):
                case ('06'):
                case ('07'):
                    return AUTOANIM.localized(AUTOANIM.explosionColors0567);
                    break;
                case ('shatter'):
                case ('thunderwave'):
                    return AUTOANIM.localized(AUTOANIM.animColorShatterThunder);
                    break;
                default:
                    return;
            }
        } else {
            switch (this.explodeVariant) {
                case ('01'):
                    return AUTOANIM.localized(AUTOANIM.explosionColorsFree01);
                    break;
                case ('03'):
                    return AUTOANIM.localized(AUTOANIM.explosionColorsFree03);
                    break;
                case ('02'):
                case ('04'):
                    return AUTOANIM.localized(AUTOANIM.explosionColorsFree024);
                    break;
                case ('05'):
                case ('06'):
                case ('07'):
                    return AUTOANIM.localized(AUTOANIM.explosionColorsFree0567);
                    break;
                case ('shatter'):
                case ('thunderwave'):
                    return AUTOANIM.localized(AUTOANIM.animColorShatterThunderFree);
                    break;
                default:
                    return;
            }
        }
    }

    get exRadii() {
        return AUTOANIM.localized(AUTOANIM.explosionRadius);
    }

    get exVariants() {
        switch (true) {
            case (this.animType === "t10"):
                return AUTOANIM.localized(AUTOANIM.selfemanation);
                break;
            default:
                return AUTOANIM.localized(AUTOANIM.explosionVariant);
        }
    }

    get exLoops() {
        return AUTOANIM.localized(AUTOANIM.explosionLoops);
    }

    get selfCastRadius() {
        return AUTOANIM.selfCastRadius
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
            case (this.animType === "t10"):
                return AUTOANIM.localized(AUTOANIM.selfemanation);
                break;
            case (this.animType === "t11"):
                return AUTOANIM.localized(AUTOANIM.aura);
                break;
            case (this.animType === "t12"):
                return AUTOANIM.localized(AUTOANIM.animTeleport);
                break;
            case (this.animType === "t13"):
                return AUTOANIM.localized(AUTOANIM.animNameClassFeatures);
                break;
        }
    }

    get animTypePick() {
        return AUTOANIM.localized(AUTOANIM.animTypePick);
    }

    get hexColour() {
        return this.animTint || `#FFFFFF`
    }

    get opacity() {
        return this.auraOpacity || ".75"
    }

    get huntermarkAnim() {
        if (moduleIncludes("jb2a_patreon")) {
            return AUTOANIM.localized(AUTOANIM.hmAnim);
        } else {
            return AUTOANIM.localized(AUTOANIM.hmAnimFree);
        }
    }

    get uaStrike() {
        return AUTOANIM.localized(AUTOANIM.uaStrikeType);
    }

    get teleRange() {
        return this.teleDist || "30";
    }

    get spellVariant() {
        return AUTOANIM.localized(AUTOANIM.spellVariant);
    }

    get bardAnimName() {
        return AUTOANIM.localized(AUTOANIM.bardAnimType);
    }

    get bardAnimTarget() {
        return AUTOANIM.localized(AUTOANIM.bardTargetAnimType);
    }

    get bardColorTarget() {
        if (moduleIncludes("jb2a_patreon")) {
            switch (this.bardTargetAnim) {
                case "music":
                    return AUTOANIM.localized(AUTOANIM.musicnoteColor);
                    break;
                default:
                    return AUTOANIM.localized(AUTOANIM.bardicInspirationColors);
            }
        } else {
            switch (this.bardTargetAnim) {
                case "music":
                    return AUTOANIM.localized(AUTOANIM.musicnoteColorFree);
                    break;
                default:
                    return AUTOANIM.localized(AUTOANIM.bardicInspirationColorsFree);
            }
        }
    }
    get newAudio() {
        return this.allSounds.item.file;
    }

    get delayAudio() {
        return this.allSounds.item.delay;
    }

    get volumeAudio() {
        return this.allSounds.item.volume;
    }

    get newExAudio() {
        return this.allSounds.explosion.file;
    }

    get delayExAudio() {
        return this.allSounds.explosion.delay;
    }

    get volumeExAudio() {
        return this.allSounds.explosion.volume;
    }

    get spellLoop() {
        return this.spellLoops || 1;
    }

    get markerColors() {
        if (moduleIncludes("jb2a_patreon")) {
            return AUTOANIM.localized(AUTOANIM.bardicMarkerColors);
        } else {
            return AUTOANIM.localized(AUTOANIM.bardicMarkerColorsFree);
        }
    }

    get videoPreview() {
        let filePath = animPreview(this.data, this.itemName);
        return filePath;
    }

    get dsColorSelf() {
        return AUTOANIM.localized(AUTOANIM.dsSelf);
    }

    get dsColorTarget() {
        return AUTOANIM.localized(AUTOANIM.dsTarget);
    }

    get dsDelaySelf() {
        return this.divineSmite.dsSelfDelay;
    }

    get dsDelayTarget() {
        return this.divineSmite.dsTargetDelay;
    }

    get typeTemp() {
        return AUTOANIM.localized(AUTOANIM.templateType);
    }

    get animTemp() {
        switch (this.tempType) {
            case "circle":
                return AUTOANIM.localized(AUTOANIM.circleAnimations)
                break;
            case "ray":
                return AUTOANIM.localized(AUTOANIM.rayAnimations)
                break;
            case "rect":
                return AUTOANIM.localized(AUTOANIM.rectangleAnimations)
                break;
            case "cone":
                return AUTOANIM.localized(AUTOANIM.coneAnimations)
                break;
        }
    }

    get colorTemp() {
        switch (this.tempType) {
            case "cone":
                switch (this.tempAnim) {
                    case "coneofcold":
                        if (moduleIncludes("jb2a_patreon")) {
                            return AUTOANIM.localized(AUTOANIM.coneColdColor);
                        } else {
                            return AUTOANIM.localized(AUTOANIM.coneColdColorFree);
                        };
                        break;
                    case "cold":
                        if (moduleIncludes("jb2a_patreon")) {
                            return AUTOANIM.localized(AUTOANIM.coneColdColor);
                        } else {
                            return AUTOANIM.localized(AUTOANIM.coneColdColorFree);
                        };
                        break;
                    case "fire01":
                    case "fire02":
                    case "burninghands01":
                    case "burninghands02":
                        if (moduleIncludes("jb2a_patreon")) {
                            return AUTOANIM.localized(AUTOANIM.coneFireColor);
                        } else {
                            return AUTOANIM.localized(AUTOANIM.coneFireColorFree);
                        };
                        break;
                    case "poison":
                        if (moduleIncludes("jb2a_patreon")) {
                            return AUTOANIM.localized(AUTOANIM.conePoisonColor);
                        } else {
                            return AUTOANIM.localized(AUTOANIM.conePoisonColorFree);
                        };
                        break;
                }
            case "ray":
                switch (this.tempAnim) {
                    case "acid":
                        if (moduleIncludes("jb2a_patreon")) {
                            return AUTOANIM.localized(AUTOANIM.rayAcidColor);
                        } else {
                            return AUTOANIM.localized(AUTOANIM.rayAcidColorFree);
                        };
                        break;
                    case "fire":
                        if (moduleIncludes("jb2a_patreon")) {
                            return AUTOANIM.localized(AUTOANIM.rayFireColor);
                        } else {
                            return AUTOANIM.localized(AUTOANIM.rayFireColorFree);
                        };
                        break;
                    case "lightning":
                        if (moduleIncludes("jb2a_patreon")) {
                            return AUTOANIM.localized(AUTOANIM.rayLightningColor);
                        } else {
                            return AUTOANIM.localized(AUTOANIM.rayLightningColorFree);
                        };
                        break;
                }
                return AUTOANIM.localized(AUTOANIM.coneColdColor);
                break;
            case "circle":
                if (moduleIncludes("jb2a_patreon")) {
                    switch (this.tempAnim) {
                        case ('ex01'):
                        case ('ex02'):
                            return AUTOANIM.localized(AUTOANIM.explosionColors012);
                            break;
                        case ('ex03'):
                            return AUTOANIM.localized(AUTOANIM.explosionColors03);
                            break;
                        case ('ex04'):
                            return AUTOANIM.localized(AUTOANIM.explosionColors04);
                            break;
                        case ('snowflake'):
                        case ('outpulse01'):
                        case ('outpulse02'):
                            return AUTOANIM.localized(AUTOANIM.explosionColors0567);
                            break;
                        case ('shatter'):
                        case ('thunderwave'):
                            return AUTOANIM.localized(AUTOANIM.animColorShatterThunder);
                            break;
                        default:
                            return;
                    }
                } else {
                    switch (this.explodeVariant) {
                        case ('ex01'):
                            return AUTOANIM.localized(AUTOANIM.explosionColorsFree01);
                            break;
                        case ('ex03'):
                            return AUTOANIM.localized(AUTOANIM.explosionColorsFree03);
                            break;
                        case ('ex02'):
                        case ('ex04'):
                            return AUTOANIM.localized(AUTOANIM.explosionColorsFree024);
                            break;
                        case ('snowflake'):
                        case ('outpulse01'):
                        case ('outpulse02'):
                            return AUTOANIM.localized(AUTOANIM.explosionColorsFree0567);
                            break;
                        case ('shatter'):
                        case ('thunderwave'):
                            return AUTOANIM.localized(AUTOANIM.animColorShatterThunderFree);
                            break;
                        default:
                            return;
                    }
                }
                break;
            case "rect":
                return AUTOANIM.localized(AUTOANIM.entangleColors);
                break;
        }
    }

    get loopTemp() {
        return this.tempLoop;
    }

    /*
    changeFlag(scope, key, value){
        setFlag(scope, key, value)
    }
    */
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
