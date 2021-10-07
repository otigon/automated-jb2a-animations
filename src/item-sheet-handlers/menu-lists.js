Hooks.once('aa.ready', async () => { menuLists() });

const aaMenuLists = {}

function menuLists() {

    aaMenuLists.menuOptions = {
        "t1": ``,
        "melee": game.i18n.localize("AUTOANIM.melee"),
        "range": game.i18n.localize("AUTOANIM.ranged"),
        'static': game.i18n.localize("AUTOANIM.onToken"),
        "template": game.i18n.localize("AUTOANIM.templates"),
        "aura": game.i18n.localize("AUTOANIM.typeAuras"),
        "preset": game.i18n.localize("AUTOANIM.presets"),
    }

    aaMenuLists.attackSpells = {
        "a1": ``,
        "chainlightning": game.i18n.localize("AUTOANIM.chainlightning"),
        "disintegrate": game.i18n.localize("AUTOANIM.itemDisintegrate"),
        "eldritchblast": game.i18n.localize("AUTOANIM.itemEldritchBlast"),
        "firebolt": game.i18n.localize("AUTOANIM.itemFireBolt"),
        "magicmissile": game.i18n.localize("AUTOANIM.itemMagicMissile"),
        "rayoffrost": game.i18n.localize("AUTOANIM.itemRayFrost"),
        "scorchingray": game.i18n.localize("AUTOANIM.itemScorchingRay"),
        "witchbolt": game.i18n.localize("AUTOANIM.itemWitchBolt"),
        "guidingbolt": game.i18n.localize("AUTOANIM.itemGuidingBolt"),
    };

    aaMenuLists.healingSpells = {
        "a1": ``,
        "curewounds": game.i18n.localize("AUTOANIM.itemCureWounds"),
        "generichealing": game.i18n.localize("AUTOANIM.itemGenericHealing"),
    }

    aaMenuLists.meleeWeapons = {
        "a1": ``,
        "dagger": game.i18n.localize("AUTOANIM.itemDagger"),
        "falchion": game.i18n.localize("AUTOANIM.falchion"),
        "flurryofblows": game.i18n.localize("AUTOANIM.itemFlurryBlows"),
        "glaive": game.i18n.localize("AUTOANIM.glaive"),
        "greataxe": game.i18n.localize("AUTOANIM.itemGreataxe"),
        "greatclub": game.i18n.localize("AUTOANIM.itemGreatclub"),
        "greatsword": game.i18n.localize("AUTOANIM.itemGreatsword"),
        "halberd": game.i18n.localize("AUTOANIM.halberd"),
        "handaxe": game.i18n.localize("AUTOANIM.itemHandaxe"),
        "lasersword": game.i18n.localize("AUTOANIM.itemLaserSword"),
        "mace": game.i18n.localize("AUTOANIM.itemMace"),
        "maul": game.i18n.localize("AUTOANIM.itemMaul"),
        "quarterstaff": game.i18n.localize("AUTOANIM.quarterstaff"),
        "scimitar": game.i18n.localize("AUTOANIM.scimitar"),
        "shortsword": game.i18n.localize("AUTOANIM.shortsword"),
        "spear": game.i18n.localize("AUTOANIM.itemSpear"),
        "sword": game.i18n.localize("AUTOANIM.itemSword"),
        "rapier": game.i18n.localize("AUTOANIM.itemRapier"),
        "unarmedstrike": game.i18n.localize("AUTOANIM.itemUnarmedStrike"),
    };

    aaMenuLists.genericDmg = {
        "a1": ``,
        "1hs": game.i18n.localize("AUTOANIM.item1HS"),
        "1hp": game.i18n.localize("AUTOANIM.item1HP"),
        "1hb": game.i18n.localize("AUTOANIM.item1HB"),
        "2hs": game.i18n.localize("AUTOANIM.item2HS"),
        "2hp": game.i18n.localize("AUTOANIM.item2HP"),
        "2hb": game.i18n.localize("AUTOANIM.item2HB"),
    };

    aaMenuLists.rangeWeapons = {
        "a1": ``,
        "arrow": game.i18n.localize("AUTOANIM.itemArrow"),
        "bolt": game.i18n.localize("AUTOANIM.bolt"),
        "boulder": game.i18n.localize("AUTOANIM.itemBoulder"),
        "bullet": game.i18n.localize("AUTOANIM.bullet"),
        "chakram": game.i18n.localize("AUTOANIM.chakram"),
        "dagger": game.i18n.localize("AUTOANIM.itemDagger"),
        "greataxe": game.i18n.localize("AUTOANIM.itemGreataxe"),
        "greatsword": game.i18n.localize("AUTOANIM.itemGreatsword"),
        "handaxe": game.i18n.localize("AUTOANIM.itemHandaxe"),
        "javelin": game.i18n.localize("AUTOANIM.itemJavelin"),
        "lasershot": game.i18n.localize("AUTOANIM.itemLaserBlast"),
        "lasersword": game.i18n.localize("AUTOANIM.itemLaserSword"),
        "mace": game.i18n.localize("AUTOANIM.itemMace"),
        "siegeboulder": game.i18n.localize("AUTOANIM.itemSiegeBoulder"),
        "sling": game.i18n.localize("AUTOANIM.itemSling"),
        "snipe": game.i18n.localize("AUTOANIM.snipe"),
        "spear": game.i18n.localize("AUTOANIM.itemSpear"),
        "sword": game.i18n.localize("AUTOANIM.itemSword"),
        "hammer": game.i18n.localize("AUTOANIM.itemThrowingHammer"),
    };

    aaMenuLists.rangeWeaponsFree = {
        "a1": ``,
        "arrow": game.i18n.localize("AUTOANIM.itemArrow"),
        "bolt": game.i18n.localize("AUTOANIM.bolt"),
        "bullet": game.i18n.localize("AUTOANIM.bullet"),
        "dagger": game.i18n.localize("AUTOANIM.itemDagger"),
        "lasershot": game.i18n.localize("AUTOANIM.itemLaserBlast"),
        "lasersword": game.i18n.localize("AUTOANIM.itemLaserSword"),
        "snipe": game.i18n.localize("AUTOANIM.snipe"),
    };

    aaMenuLists.creatureAttacks = {
        "a1": ``,
        "bite": game.i18n.localize("AUTOANIM.itemBite"),
        "claw": game.i18n.localize("AUTOANIM.itemClaw"),
    }

    aaMenuLists.explodeVariant = {
        "ex1": ``,
        "explosion": game.i18n.localize("AUTOANIM.explosion"),
        "snowflake": game.i18n.localize("AUTOANIM.snowflake"),
        "outpulse01": game.i18n.localize("AUTOANIM.outpulse01"),
        "outpulse02": game.i18n.localize("AUTOANIM.outpulse02"),
        "impact": game.i18n.localize("AUTOANIM.impact"),
        "boulderimpact": game.i18n.localize("AUTOANIM.itemBoulder"),
        "shatter": game.i18n.localize("AUTOANIM.itemShatter"),
        "thunderwave": game.i18n.localize("AUTOANIM.itemThunderwave"),
        "tollthedead": game.i18n.localize("AUTOANIM.tollthedead"),
    }

    aaMenuLists.explosionMenu = {
        "a1": "",
        "explosion": game.i18n.localize("AUTOANIM.explosion"),
        "snowflake": game.i18n.localize("AUTOANIM.snowflake"),
        "outpulse01": game.i18n.localize("AUTOANIM.outpulse01"),
        "outpulse02": game.i18n.localize("AUTOANIM.outpulse02"),
        "shatter": game.i18n.localize("AUTOANIM.itemShatter"),
        "impact": game.i18n.localize("AUTOANIM.impact"),
        "boulderimpact": game.i18n.localize("AUTOANIM.itemBoulder"),
        "thunderwave": game.i18n.localize("AUTOANIM.itemThunderwave"),
        "antilifeshell": game.i18n.localize("AUTOANIM.animAntiLifeShell"),
    }

    aaMenuLists.staticSpells = {
        "tollthedead": game.i18n.localize("AUTOANIM.tollthedead"),
        "sneakattack": game.i18n.localize("AUTOANIM.sneakattack"),
        //"bless": game.i18n.localize("AUTOANIM.bless"),
    }

    aaMenuLists.explosionAnimations = {
        "explosion": game.i18n.localize("AUTOANIM.explosion"),
        "impact": game.i18n.localize("AUTOANIM.impact"),
        "shatter": game.i18n.localize("AUTOANIM.itemShatter"),
        "thunderwave": game.i18n.localize("AUTOANIM.itemThunderwave"),
    }

    aaMenuLists.aura = {
        "a1": "",
        "calllightning": game.i18n.localize("AUTOANIM.animCallLightning"),
        "darkness": game.i18n.localize("AUTOANIM.animDarkness"),
        "fogcloud": game.i18n.localize("AUTOANIM.animFogCloud"),
        "sleetstorm": game.i18n.localize("AUTOANIM.animSleetstorm"),
        "spiritguardians": game.i18n.localize("AUTOANIM.animSpiritGuardians"),
        "wallofforce": game.i18n.localize("AUTOANIM.animWallOfForce"),
        "whirlwind": game.i18n.localize("AUTOANIM.animWhirlwind"),
        "antilifeshell": game.i18n.localize("AUTOANIM.animAntiLifeShell"),
        "cloudofdaggers": game.i18n.localize("AUTOANIM.cloudOfDaggers"),
    }

    aaMenuLists.bardAnimType = {
        'a1': ``,
        'bardicinspiration': game.i18n.localize("AUTOANIM.bardicInspiration"),
        'music': game.i18n.localize("AUTOANIM.musicNotes"),
    }

    aaMenuLists.templateType = {
        "a1": ``,
        "cone": game.i18n.localize("AUTOANIM.cone"),
        "rect": game.i18n.localize("AUTOANIM.square"),
        "circle": game.i18n.localize("AUTOANIM.circle"),
        "ray": game.i18n.localize("AUTOANIM.ray"),
    }

    aaMenuLists.coneAnimations = {
        "a1": ``,
        "coneofcold": game.i18n.localize("AUTOANIM.coneofcold"),
        "burninghands": game.i18n.localize("AUTOANIM.burninghands"),
        "breathweaponcone": game.i18n.localize("AUTOANIM.breathweaponcone"),
    }

    aaMenuLists.rayAnimations = {
        "a1": ``,
        "breathweaponline": game.i18n.localize("AUTOANIM.breathweaponline"),
        "lightningbolt": game.i18n.localize("AUTOANIM.lightningbolt"),
        "gustofwind": game.i18n.localize("AUTOANIM.gustofwind"),
    }

    aaMenuLists.circleAnimations = {
        "a1": ``,
        "explosion": game.i18n.localize("AUTOANIM.explosion"),
        "snowflake": game.i18n.localize("AUTOANIM.snowflake"),
        "outpulse01": game.i18n.localize("AUTOANIM.outpulse01"),
        "outpulse02": game.i18n.localize("AUTOANIM.outpulse02"),
        "shatter": game.i18n.localize("AUTOANIM.itemShatter"),
        "fogcloud": game.i18n.localize("AUTOANIM.animFogCloud"),
        "darkness": game.i18n.localize("AUTOANIM.animDarkness"),
        "calllightning": game.i18n.localize("AUTOANIM.animCallLightning"),
        "sleetstorm": game.i18n.localize("AUTOANIM.animSleetstorm"),
        "cloudofdaggers": game.i18n.localize("AUTOANIM.cloudOfDaggers"),
    }

    aaMenuLists.rectangleAnimations = {
        "a1": ``,
        "entangle": game.i18n.localize("AUTOANIM.entangle"),
        "thunderwave": game.i18n.localize("AUTOANIM.itemThunderwave"),
        "web": game.i18n.localize("AUTOANIM.web"),
    }

    aaMenuLists.tokenAnimations = {
        "a1": ``,
        "divinesmite": game.i18n.localize("AUTOANIM.divineSmite"),
        "dizzystars": game.i18n.localize("AUTOANIM.stars"),
        "explosion": game.i18n.localize("AUTOANIM.explosion"),
        "icespikes": game.i18n.localize("AUTOANIM.iceSpikes"),
        "impact": game.i18n.localize("AUTOANIM.impact"),
        "magicSign": game.i18n.localize("AUTOANIM.magicSign"),
        "marker": game.i18n.localize("AUTOANIM.marker"),
        "snowflake": game.i18n.localize("AUTOANIM.snowflake"),
        "sneakattack": game.i18n.localize("AUTOANIM.sneakattack"),
        "tollthedead": game.i18n.localize("AUTOANIM.tollthedead"),
    }

    aaMenuLists.autoself = {
        "a1": ``,
        "antilifeshell": game.i18n.localize("AUTOANIM.animAntiLifeShell"),
        "bite": game.i18n.localize("AUTOANIM.itemBite"),
        "boulderimpact": game.i18n.localize("AUTOANIM.itemBoulder"),
        "claw": game.i18n.localize("AUTOANIM.itemClaw"),
        "curewounds": game.i18n.localize("AUTOANIM.itemCureWounds"),
        "generichealing": game.i18n.localize("AUTOANIM.itemGenericHealing"),
        "explosion": game.i18n.localize("AUTOANIM.explosion"),
        "impact": game.i18n.localize("AUTOANIM.impact"),
        "outpulse01": game.i18n.localize("AUTOANIM.outpulse01"),
        "outpulse02": game.i18n.localize("AUTOANIM.outpulse02"),
        "snowflake": game.i18n.localize("AUTOANIM.snowflake"),
        "shatter": game.i18n.localize("AUTOANIM.itemShatter"),
        "thunderwave": game.i18n.localize("AUTOANIM.itemThunderwave"),
        "tollthedead": game.i18n.localize("AUTOANIM.tollthedead"),
    }
}

export { aaMenuLists }