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

    aaMenuLists.menuOptions3D = {
        "t1": ``,
        "melee": game.i18n.localize("AUTOANIM.melee"),
        "range": game.i18n.localize("AUTOANIM.ranged"),
        'static': game.i18n.localize("AUTOANIM.onToken"),
        "template": game.i18n.localize("AUTOANIM.templates"),
        "aura": game.i18n.localize("AUTOANIM.typeAuras"),
        "preset": game.i18n.localize("AUTOANIM.presets"),
        "menu3d": "3D Particles",
    }
    /*
    aaMenuLists.attackSpells = {
        "a1": ``,
        "chainlightning": game.i18n.localize("AUTOANIM.chainlightning"),
        "disintegrate": game.i18n.localize("AUTOANIM.itemDisintegrate"),
        "eldritchblast": game.i18n.localize("AUTOANIM.itemEldritchBlast"),
        "energystrand": game.i18n.localize("AUTOANIM.energystrand"),
        "energybeam": game.i18n.localize("AUTOANIM.energybeam"),
        "fireballbeam": game.i18n.localize("AUTOANIM.fireballbeam"),
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
        "club": game.i18n.localize("AUTOANIM.club"),
        "dagger": game.i18n.localize("AUTOANIM.itemDagger"),
        "falchion": game.i18n.localize("AUTOANIM.falchion"),
        "flurryofblows": game.i18n.localize("AUTOANIM.itemFlurryBlows"),
        "glaive": game.i18n.localize("AUTOANIM.glaive"),
        "greataxe": game.i18n.localize("AUTOANIM.itemGreataxe"),
        "greatclub": game.i18n.localize("AUTOANIM.itemGreatclub"),
        "greatsword": game.i18n.localize("AUTOANIM.itemGreatsword"),
        "halberd": game.i18n.localize("AUTOANIM.halberd"),
        "hammer": game.i18n.localize("AUTOANIM.hammer"),
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
        "warhammer": game.i18n.localize("AUTOANIM.warhammer"),
        "wrench": game.i18n.localize("AUTOANIM.wrench"),
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
        "pumpkin": game.i18n.localize("AUTOANIM.pumpkin"),
        "siegeboulder": game.i18n.localize("AUTOANIM.itemSiegeBoulder"),
        "sling": game.i18n.localize("AUTOANIM.itemSling"),
        "snipe": game.i18n.localize("AUTOANIM.snipe"),
        "snowball": game.i18n.localize("AUTOANIM.snow") + " " + game.i18n.localize("AUTOANIM.ball"),
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

    aaMenuLists.conditions = {
        "a1": ``,
        "circleofstars": game.i18n.localize("AUTOANIM.circleofstars"),
        "drop": game.i18n.localize("AUTOANIM.drop"),
        "fear": game.i18n.localize("AUTOANIM.fear"),
        "heart": game.i18n.localize("AUTOANIM.heart"),
        "horror": game.i18n.localize("AUTOANIM.horror"),
        "light": game.i18n.localize("AUTOANIM.light"),
        "poison": game.i18n.localize("AUTOANIM.poison"),
        "runes": game.i18n.localize("AUTOANIM.runes"),
        "shields": game.i18n.localize("AUTOANIM.shield"),
        "crackedshield": game.i18n.localize("AUTOANIM.crackedshield"),
        "skull": game.i18n.localize("AUTOANIM.skull"),
        "snowflakes": game.i18n.localize("AUTOANIM.snowflakes"),
        "stun": game.i18n.localize("AUTOANIM.stun"),
    }

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
        "antilifeshell": game.i18n.localize("AUTOANIM.animAntiLifeShell"),
        "boulderimpact": game.i18n.localize("AUTOANIM.itemBoulder"),
        "eruption": game.i18n.localize("AUTOANIM.eruption"),
        "explosion": game.i18n.localize("AUTOANIM.explosion"),
        "fireballexplode": game.i18n.localize("AUTOANIM.fireball"),
        "impact": game.i18n.localize("AUTOANIM.impact"),
        "liquidsplash": game.i18n.localize("AUTOANIM.liquid") + " " + game.i18n.localize("AUTOANIM.splash"),
        "marker": game.i18n.localize("AUTOANIM.marker"),
        "outpulse01": game.i18n.localize("AUTOANIM.outpulse01"),
        "outpulse02": game.i18n.localize("AUTOANIM.outpulse02"),
        "shatter": game.i18n.localize("AUTOANIM.itemShatter"),
        "snowflake": game.i18n.localize("AUTOANIM.snowflake"),
        "thunderwave": game.i18n.localize("AUTOANIM.itemThunderwave"),
        "tollthedead": game.i18n.localize("AUTOANIM.tollthedead"),
    }

    aaMenuLists.staticSpells = {
        "a1": "",
        "armsofhadar": game.i18n.localize("AUTOANIM.armsofhadar"),
        "blacktentacles": game.i18n.localize("AUTOANIM.blacktentacles"),
        "curewounds": game.i18n.localize("AUTOANIM.itemCureWounds"),
        "divinesmite": game.i18n.localize("AUTOANIM.divineSmite"),
        "dodecahedron": game.i18n.localize("AUTOANIM.dodecahedron"),
        "generichealing": game.i18n.localize("AUTOANIM.itemGenericHealing"),
        "sneakattack": game.i18n.localize("AUTOANIM.sneakattack"),
        "tollthedead": game.i18n.localize("AUTOANIM.tollthedead"),
        "moonbeam": game.i18n.localize("AUTOANIM.moonbeam"),
        "staticelectricity": game.i18n.localize("AUTOANIM.staticelectricity"),
        "energystrand": game.i18n.localize("AUTOANIM.energystrands"),
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
        "armsofhadar": game.i18n.localize("AUTOANIM.armsofhadar"),
        "blacktentacles": game.i18n.localize("AUTOANIM.blacktentacles"),
        "calllightning": game.i18n.localize("AUTOANIM.animCallLightning"),
        "darkness": game.i18n.localize("AUTOANIM.animDarkness"),
        "detectmagic": game.i18n.localize("AUTOANIM.detectMagic"),
        "dodecahedron": game.i18n.localize("AUTOANIM.dodecahedron"),
        "energystrand": game.i18n.localize("AUTOANIM.energystrands"),
        "fogcloud": game.i18n.localize("AUTOANIM.animFogCloud"),
        "sleetstorm": game.i18n.localize("AUTOANIM.animSleetstorm"),
        "spiritguardians": game.i18n.localize("AUTOANIM.animSpiritGuardians"),
        "wallofforce": game.i18n.localize("AUTOANIM.animWallOfForce"),
        "whirlwind": game.i18n.localize("AUTOANIM.animWhirlwind"),
        "antilifeshell": game.i18n.localize("AUTOANIM.animAntiLifeShell"),
        "cloudofdaggers": game.i18n.localize("AUTOANIM.cloudOfDaggers"),
        "staticelectricity": game.i18n.localize("AUTOANIM.staticelectricity")
    }

    aaMenuLists.bardAnimType = {
        'a1': ``,
        'bardicinspiration': game.i18n.localize("AUTOANIM.bardicinspiration"),
        'music': game.i18n.localize("AUTOANIM.musicnote"),
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
        "armsofhadar": game.i18n.localize("AUTOANIM.armsofhadar"),
        "blacktentacles": game.i18n.localize("AUTOANIM.blacktentacles"),
        "calllightning": game.i18n.localize("AUTOANIM.animCallLightning"),
        "cloudofdaggers": game.i18n.localize("AUTOANIM.cloudOfDaggers"),
        "darkness": game.i18n.localize("AUTOANIM.animDarkness"),
        "detectmagic": game.i18n.localize("AUTOANIM.detectMagic"),
        "explosion": game.i18n.localize("AUTOANIM.explosion"),
        "fireballexplode": game.i18n.localize("AUTOANIM.fireball"),
        "fireballloop": game.i18n.localize("AUTOANIM.fireball") + " " + game.i18n.localize("AUTOANIM.loop"),
        "fogcloud": game.i18n.localize("AUTOANIM.animFogCloud"),
        "moonbeam": game.i18n.localize("AUTOANIM.moonbeam"),
        "musicnotect": game.i18n.localize("AUTOANIM.musicNotes"),
        "outpulse01": game.i18n.localize("AUTOANIM.outpulse01"),
        "outpulse02": game.i18n.localize("AUTOANIM.outpulse02"),
        "snowflake": game.i18n.localize("AUTOANIM.snowflake"),
        "shatter": game.i18n.localize("AUTOANIM.itemShatter"),
        "sleetstorm": game.i18n.localize("AUTOANIM.animSleetstorm"),
        "dropct": game.i18n.localize("AUTOANIM.drop"),
        "fearct": game.i18n.localize("AUTOANIM.fear"),
        "heartct": game.i18n.localize("AUTOANIM.heart"),
        "horrorct": game.i18n.localize("AUTOANIM.horror"),
        "poisonct": game.i18n.localize("AUTOANIM.poison"),
        "runesct": game.i18n.localize("AUTOANIM.runes"),
        "shieldsct": game.i18n.localize("AUTOANIM.shield"),
        "crackedshieldct": game.i18n.localize("AUTOANIM.crackedshield"),
        "skullct": game.i18n.localize("AUTOANIM.skull"),
        "snowflakesct": game.i18n.localize("AUTOANIM.snowflakes"),
        "stun": game.i18n.localize("AUTOANIM.stun"),
    }

    aaMenuLists.rectangleAnimations = {
        "a1": ``,
        "armsofhadar": game.i18n.localize("AUTOANIM.armsofhadar"),
        "blacktentacles": game.i18n.localize("AUTOANIM.blacktentacles"),
        "entangle": game.i18n.localize("AUTOANIM.entangle"),
        "grease": game.i18n.localize("AUTOANIM.grease"),
        "thunderwave": game.i18n.localize("AUTOANIM.itemThunderwave"),
        "web": game.i18n.localize("AUTOANIM.web"),
        "dropct": game.i18n.localize("AUTOANIM.drop"),
        "fearct": game.i18n.localize("AUTOANIM.fear"),
        "heartct": game.i18n.localize("AUTOANIM.heart"),
        "horrorct": game.i18n.localize("AUTOANIM.horror"),
        "musicnotest": game.i18n.localize("AUTOANIM.musicNotes"),
        "poisonct": game.i18n.localize("AUTOANIM.poison"),
        "runesct": game.i18n.localize("AUTOANIM.runes"),
        "shieldsct": game.i18n.localize("AUTOANIM.shield"),
        "crackedshieldct": game.i18n.localize("AUTOANIM.crackedshield"),
        "skullct": game.i18n.localize("AUTOANIM.skull"),
        "snowflakesct": game.i18n.localize("AUTOANIM.snowflakes"),
        "stun": game.i18n.localize("AUTOANIM.stun"),
    }

    aaMenuLists.tokenAnimations = {
        "a1": ``,
        "armsofhadar": game.i18n.localize("AUTOANIM.armsofhadar"),
        "blacktentacles": game.i18n.localize("AUTOANIM.blacktentacles"),
        "divinesmite": game.i18n.localize("AUTOANIM.divineSmite"),
        "dizzystars": game.i18n.localize("AUTOANIM.stars"),
        "eruption": game.i18n.localize("AUTOANIM.eruption"),
        "explosion": game.i18n.localize("AUTOANIM.explosion"),
        "icespikes": game.i18n.localize("AUTOANIM.iceSpikes"),
        "impact": game.i18n.localize("AUTOANIM.impact"),
        "liquidsplash": game.i18n.localize("AUTOANIM.liquid") + " " + game.i18n.localize("AUTOANIM.splash"),
        "magicSign": game.i18n.localize("AUTOANIM.magicSign"),
        "marker": game.i18n.localize("AUTOANIM.marker"),
        "snowflake": game.i18n.localize("AUTOANIM.snowflake"),
        "sneakattack": game.i18n.localize("AUTOANIM.sneakattack"),
        "tollthedead": game.i18n.localize("AUTOANIM.tollthedead"),
        "moonbeam": game.i18n.localize("AUTOANIM.moonbeam"),
    }

    aaMenuLists.autoself = {
        "a1": ``,
        "armsofhadar": game.i18n.localize("AUTOANIM.armsofhadar"),
        "blacktentacles": game.i18n.localize("AUTOANIM.blacktentacles"),
        "antilifeshell": game.i18n.localize("AUTOANIM.animAntiLifeShell"),
        "bite": game.i18n.localize("AUTOANIM.itemBite"),
        "boulderimpact": game.i18n.localize("AUTOANIM.itemBoulder"),
        "claw": game.i18n.localize("AUTOANIM.itemClaw"),
        "curewounds": game.i18n.localize("AUTOANIM.itemCureWounds"),
        "generichealing": game.i18n.localize("AUTOANIM.itemGenericHealing"),
        "explosion": game.i18n.localize("AUTOANIM.explosion"),
        "impact": game.i18n.localize("AUTOANIM.impact"),
        "marker": game.i18n.localize("AUTOANIM.marker"),
        "outpulse01": game.i18n.localize("AUTOANIM.outpulse01"),
        "outpulse02": game.i18n.localize("AUTOANIM.outpulse02"),
        "snowflake": game.i18n.localize("AUTOANIM.snowflake"),
        "shatter": game.i18n.localize("AUTOANIM.itemShatter"),
        "thunderwave": game.i18n.localize("AUTOANIM.itemThunderwave"),
        "tollthedead": game.i18n.localize("AUTOANIM.tollthedead"),
        "moonbeam": game.i18n.localize("AUTOANIM.moonbeam"),
    }

    aaMenuLists.shieldfx = {
        "a1": ``,
        "energyfieldtop": "Energy Shield",
        "shieldfiretop": game.i18n.localize("AUTOANIM.fire") + " " + game.i18n.localize("AUTOANIM.itemShield"),
        "shieldicetop": game.i18n.localize("AUTOANIM.ice") + " " + game.i18n.localize("AUTOANIM.itemShield"),
        "shieldearthtop": game.i18n.localize("AUTOANIM.earth") + " " + game.i18n.localize("AUTOANIM.itemShield"),
        "shieldeldritchwebtop": game.i18n.localize("AUTOANIM.eldritch") + " " + game.i18n.localize("AUTOANIM.web") + " " + game.i18n.localize("AUTOANIM.itemShield"),
    }

    aaMenuLists.tokenborder = {
        "a1": ``,
        "staticborder": game.i18n.localize("AUTOANIM.static"),
        "spinningborder": game.i18n.localize("AUTOANIM.spinning")
    }

    aaMenuLists.meleeTypes = {
        "a1": ``,
        "weapon": game.i18n.localize("AUTOANIM.itemWeapon"),
        "generic": game.i18n.localize("AUTOANIM.generic"),
    }

    aaMenuLists.meleeTypesFree = {
        "a1": ``,
        "weapon": game.i18n.localize("AUTOANIM.itemWeapon"),
    }

    aaMenuLists.genericProjectile = {
        "a1": ``,
        "heart": game.i18n.localize("AUTOANIM.heart"),
        "iceshard": game.i18n.localize("AUTOANIM.iceshard"),
        "musicnote": game.i18n.localize("AUTOANIM.musicNotes"),
        "skull": game.i18n.localize("AUTOANIM.skull"),
        "energyconduitsquare": game.i18n.localize("AUTOANIM.energy") + " " + game.i18n.localize("AUTOANIM.conduit") + " " + game.i18n.localize("AUTOANIM.square"),
        "energyconduitcircle": game.i18n.localize("AUTOANIM.energy") + " " + game.i18n.localize("AUTOANIM.conduit") + " " + game.i18n.localize("AUTOANIM.circle")
    }

    aaMenuLists.genericProjectileFree = {
        "a1": ``,
        "iceshard": game.i18n.localize("AUTOANIM.iceshard"),
    }
    */
}

export { aaMenuLists }