
export const AUTOANIMFREE = {}


AUTOANIMFREE.animNameRangeWeaponFree = {
    "a1": ``,
    "arrow": "AUTOANIM.itemArrow",
    "laser blast": "AUTOANIM.itemLaserBlast",
};

AUTOANIMFREE.animNameGenericDmgFree = {
    "a1": ``,
    "unarmed strike": "AUTOANIM.itemUnarmedStrike",
    "flurry of blows": "AUTOANIM.itemFlurryBlows"
}

AUTOANIMFREE.animClawColorFree = {
    "a1": ``,
    "red": "AUTOANIM.colorRed",
}

AUTOANIMFREE.animBiteColorFree = {
    "a1": ``,
    "red": "AUTOANIM.colorRed",
}

AUTOANIMFREE.animColorMeleeFree = {
    "a1": ``,
    "white": `AUTOANIM.colorWhite`,
}

AUTOANIMFREE.daggerVariantFree = {
    "dt1": ``,
    "dagger01": "AUTOANIM.itemDagger01",
}

AUTOANIMFREE.animColorLaserSwordFree = {
    "a1": ``,
    "blue": "AUTOANIM.colorBlue",
}

AUTOANIMFREE.animColorCureWoundsFree = {
    "a1": ``,
    "blue": "AUTOANIM.colorBlue",
}

AUTOANIMFREE.animColorEldritchBlastFree = {
    "a1": ``,
    "purple": "AUTOANIM.colorPurple",
}

AUTOANIMFREE.animColorDisintegrateFree = {
    "a1": ``,
    "green": "AUTOANIM.colorGreen",
};

AUTOANIMFREE.animColorFireboltFree = {
    "a1": ``,
    "orange": "AUTOANIM.colorOrange",
};

AUTOANIMFREE.animGenHealingFree02 = {
    "a1": ``,
    "green orange": "AUTOANIM.colorGreenOrange",
};

AUTOANIMFREE.animColorMagicMissileFree = {
    "a1": ``,
    "purple": "AUTOANIM.colorPurple",
};

AUTOANIMFREE.animColorRayFrostFree = {
    "a1": ``,
    "blue": "AUTOANIM.colorBlue",
};

AUTOANIMFREE.animColorScorchingRayFree = {
    "a1": ``,
    "orange": "AUTOANIM.colorOrange",
};

AUTOANIMFREE.animColorShatterThunderFree = {
    "a1": ``,
    "blue": "AUTOANIM.colorBlue",
};

AUTOANIMFREE.animColorWitchboltFree = {
    "a1": ``,
    "blue": "AUTOANIM.colorBlue",
};

AUTOANIMFREE.animColorArrowFree = {
    "a1": ``,
    "regular": "AUTOANIM.colorWhite",
};

AUTOANIMFREE.explosionColorsFree01 = {
    "ec1": ``,
    "orange": "AUTOANIM.colorOrange",
}
AUTOANIMFREE.explosionColorsFree024 = {
    "ec1": ``,
    "blue": "AUTOANIM.colorBlue",
}
AUTOANIMFREE.explosionColorsFree03 = {
    "ec1": ``,
    "yellow blue": "AUTOANIM.colorYellowBlue",
}
AUTOANIMFREE.explosionColorsFree0567 = {
    "ec1": ``,
    "blue white": "AUTOANIM.colorWhiteBlue",
}

AUTOANIMFREE.explosionVariantFree = {
    "ev1": ``,
    "01": "AUTOANIM.variant01",
    "02": "AUTOANIM.variant02",
    "03": "AUTOANIM.variant03",
    "04": "AUTOANIM.variant04",
    "05": "AUTOANIM.variant05",
    "06": "AUTOANIM.variant06",
    "07": "AUTOANIM.variant07",
    "shatter": "AUTOANIM.itemShatter"
}

AUTOANIMFREE.spiritguardianColorsFree = {
    "a1": ``,
    "yellow blue": "AUTOANIM.colorYellowBlue",
}

AUTOANIMFREE.sleetstormColorsFree = {
    "a1": ``,
    "blue": "AUTOANIM.colorBlue",
}

AUTOANIMFREE.wallofforceColorsFree = {
    "a1": ``,
    "grey": "AUTOANIM.colorGrey",
}

AUTOANIMFREE.wallofforceColorsFree = {
    "a1": ``,
    "blue grey": "AUTOANIM.colorBlueGrey",
}

AUTOANIMFREE.darknessColors = {
    "a1": ``,
    "black": "AUTOANIM.colorBlack",
    "green": "AUTOANIM.colorGreen"
}

AUTOANIMFREE.hmColorsFree = {
    "a1": ``,
    "green": "AUTOANIM.colorGreen",
}

AUTOANIMFREE.hmAnimFree = {
    "a1": ``,
    "01": "Eye",
}

AUTOANIMFREE.mistystepColorFree = {
    "a1": ``,
    'blue': "AUTOANIM.colorBlue",
}

AUTOANIMFREE.musicnoteColorFree = {
    "a1": ``,
    'blue': "AUTOANIM.colorBlue",
}

AUTOANIMFREE.uaStrikeColorFree = {
    "a1": ``,
    'blue': "AUTOANIM.colorBlue",
}

AUTOANIMFREE.guidingboltColorFree = {
    'a1': ``,
    'blue yellow': "AUTOANIM.colorYellowBlue",
}

AUTOANIMFREE.animTeleport = {
    'a1': ``,
    'misty step': "AUTOANIM.itemMistyStep"
}

AUTOANIMFREE.bardicInspirationColorsFree = {
    'a1': ``,
    "green orange": "AUTOANIM.colorGreenOrange",
}

AUTOANIMFREE.bardicMarkerColorsFree = {
    'a1': ``,
    "green orange": "AUTOANIM.colorGreenOrange",
}

AUTOANIMFREE.coneColdColorFree = {
    "a1": ``,
    "blue": "AUTOANIM.colorBlue",
}

AUTOANIMFREE.animNull = {
    "n1": ``,
}

AUTOANIMFREE.localized = function (cfg) {
    return Object.keys(cfg).reduce((i18nCfg, key) => {
        i18nCfg[key] = game.i18n.localize(cfg[key]);
        return i18nCfg;
    }, {}
    );
};

AUTOANIMFREE.numeric = function (value, fallback) {
    if ($.isNumeric(value)) {
        return parseInt(value);
    } else {
        return fallback;
    }
};

AUTOANIMFREE.fromCollection = function (collection, entryId) {
    const pack = game.packs.find(p => p.collection === collection);
    return pack.getEntity(entryId).then(ent => {
        return ent;
    });
};

