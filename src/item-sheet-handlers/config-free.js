
export const AUTOANIM = {};

AUTOANIM.animNameAttackSpell = { 
    "a1": "Disintegrate",
    "a2": "Firebolt",
    "a3": "Magic Missile",
    "a4": "Ray of Frost",
    "a5": "Scorching Ray",
    "a6": "Witch bolt"
};

AUTOANIM.animNameHealSpell = {
    "a1": "Cure Wounds",
    "a2": "Generic Healing",
}

AUTOANIM.animNameTemplateSpell = {
    "tp1": "Thunderwave",
    "tp2": "Shatter"
};

AUTOANIM.animNameMeleeWeapon = {
    "a1": "Dagger",
    "a2": "Greataxe",
    "a3": "Greatclub",
    "a4": "Greatsword",
    "a5": "Handaxe",
    "a6": "Lasersword",
    "a7": "Mace",
    "a8": "Maul",
    "a9": "Spear",
    "a10": "Sword",
    "a11": "Rapier"
};

AUTOANIM.animNameRangeWeapon = {
    "a1": "Arrow",
    "a2": "Laser Blast",
};

AUTOANIM.animNameGenericDmg = {
    "a1": ``,
}

AUTOANIM.animCreatureAttack = {
    "a1": "Bite",
    "a2": "Claw",
}

AUTOANIM.animClawColor = {
    "ac1": "Red",
}

AUTOANIM.animBiteColor = {
    "ac1": "Red",
}

AUTOANIM.animColorMelee = {
    "d1": `Regular`,
};

AUTOANIM.animColorLaserSword = {
    "d1": "Blue",
};

AUTOANIM.animColorCureWounds = {
    "f1": "Blue",
};

AUTOANIM.animColorDisintegrate = {
    "g1": "Green",
};

AUTOANIM.animColorFirebolt = {
    "h1": "Orange",
};

AUTOANIM.animColorHealingWord = {
    "i1": "Blue",
    "i2": "Green",
    "i3": "Purple",
    "i4": "Yellow"
};

AUTOANIM.animColorMagicMissile = {
    "j1": "Purple",
};

AUTOANIM.animColorRayFrost = {
    "k1": "Blue",
};

AUTOANIM.animColorScorchingRay = {
    "m1": "Orange",
};

AUTOANIM.animColorShatterThunder = {
    "n1": "Blue",
};

AUTOANIM.animColorWitchbolt = {
    "p1": "Blue",
};

AUTOANIM.animColorArrow = {
    "q1": "Regular",
};

AUTOANIM.explosionColors = {
    "ec1": "Orange",
}

AUTOANIM.laserblastColors = {
    "lb1": "Blue",
    "lb2": "Green",
    "lb3": "Orange",
    "lb4": "Red",
}

AUTOANIM.explosionRadius = {
    "er1": "5",
    "ec2": "10",
    "ec3": "15",
    "ec4": "20",
    "ec5": "25",
    "ec6": "30",
    "ec7": "35",
    "ec8": "40",
    "ec9": "45",
    "ec10": "50",
    "ec11": "Nuclear",
}

AUTOANIM.explosionVariant = {
    "ev1": "01",
}

AUTOANIM.animTypePick = {
    "t1": ``,
    "t2": "Melee Weapon",
    "t3": "Generic Melee Dmg",
    "t4": "Ranged Weapon",
    "t5": "Creature Attack",
    "t6": "Attack Spell",
    "t7": "Healing Spell",
    "t8": "Explosives (Template)",
    "t9": "Explosives (Target)",
}

AUTOANIM.animNull = {
    "n1": ``,
}

AUTOANIM.numeric = function(value, fallback) {
    if($.isNumeric(value)) {
        return parseInt(value);
    } else {
        return fallback;
    }
};

AUTOANIM.fromCollection = function(collection, entryId) {
    const pack = game.packs.find(p => p.collection === collection);
    return pack.getEntity(entryId).then(ent => {
        return ent;
    });
};

