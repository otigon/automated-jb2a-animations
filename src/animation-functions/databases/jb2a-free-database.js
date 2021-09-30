export const JB2AFREEDB = {};

const BASE = 'modules/JB2A_DnD5e/Library/'
const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
const l0 = prefix('Cantrip')
const l1 = prefix('1st_Level')
const l2 = prefix('2nd_Level')
const l3 = prefix('3rd_Level')
const l5 = prefix('5th_Level')
const l6 = prefix('6th_Level')
const l7 = prefix('7th_Level')
const lg = prefix('Generic')

JB2AFREEDB.range = {
    arrow: {
        "regular": {
            regular: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_Green_90ft_4000x400.webm`]
            },
        },
        'physical': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_90ft_4000x400.webm`]
            }
        }
    },
    bolt: {
        'physical': {
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_90ft_4000x400.webm`]
            }
        }
    },
    bullet: {
        '1': {
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_90ft_4000x400.webm`]
            },
        },
        '2': {
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_90ft_4000x400.webm`]
            },
        },
        '3': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_90ft_4000x400.webm`]
            },
        }
    },
    chainlightning: {
        primary: {
            blue: {
                '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Primary_600x400.webm`],
                '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Primary_1000x400.webm`],
                '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Primary_1600x400.webm`],
                '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Primary_2800x400.webm`],
                '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Primary_4000x400.webm`]
            },
        },
        secondary: {
            blue: {
                '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Secondary_600x400.webm`],
                '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Secondary_1000x400.webm`],
                '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Secondary_1600x400.webm`],
                '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Secondary_2800x400.webm`],
                '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Secondary_4000x400.webm`]
            },
        }
    },
    dagger: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_90ft_4000x400.webm`]
            }
        },
    },
    disintegrate: {
        '01': {
            green: {
                '05ft': [l6`Disintegrate/Disintegrate_01_Regular_Green01_05ft_600x400.webm`],
                '15ft': [l6`Disintegrate/Disintegrate_01_Regular_Green01_15ft_1000x400.webm`],
                '30ft': [l6`Disintegrate/Disintegrate_01_Regular_Green01_30ft_1600x400.webm`],
                '60ft': [l6`Disintegrate/Disintegrate_01_Regular_Green01_60ft_2800x400.webm`],
                '90ft': [l6`Disintegrate/Disintegrate_01_Regular_Green01_90ft_4000x400.webm`]
            }
        }
    },
    eldritchblast: {
        '01': {
            purple: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Purple_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Purple_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Purple_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Purple_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Purple_90ft_4000x400.webm`]
            }
        }
    },
    firebolt: {
        '01': {
            orange: {
                '05ft': [l0`Fire_Bolt/FireBolt_01_Regular_Orange_05ft_600x400.webm`],
                '15ft': [l0`Fire_Bolt/FireBolt_01_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [l0`Fire_Bolt/FireBolt_01_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [l0`Fire_Bolt/FireBolt_01_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [l0`Fire_Bolt/FireBolt_01_Regular_Orange_90ft_4000x400.webm`]
            }
        }
    },
    guidingbolt: {
        '01': {
            blueyellow: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_90ft_4000x400.webm`]
            }
        }
    },
    lasershot: {
        '01': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_90ft_4000x400.webm`]
            },
            red: {
                '05ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_90ft_4000x400.webm`]
            },
        }
    },
    lasersword: {
        '01': {
            blue: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_90ft_4000x600.webm`]
            }
        },
        '02': {
            red: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_90ft_4000x600.webm`]
            }
        }
    },
    magicmissile: {
        '01': {
            purple: {
                '05ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_05ft_01_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_05ft_02_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_05ft_03_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_05ft_04_600x400.webm`
                ],
                '15ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_15ft_01_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_15ft_02_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_15ft_03_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_15ft_04_1000x400.webm`
                ],
                '30ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_30ft_01_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_30ft_02_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_30ft_03_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_30ft_04_1600x400.webm`
                ],
                '60ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_60ft_01_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_60ft_02_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_60ft_03_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_60ft_04_2800x400.webm`
                ],
                '90ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_90ft_01_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_90ft_02_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_90ft_03_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_90ft_04_4000x400.webm`
                ]
            }
        }
    },
    rayoffrost: {
        '01': {
            blue: {
                '05ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Blue_05ft_600x400.webm`],
                '15ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Blue_90ft_4000x400.webm`]
            }
        }
    },
    scorchingray: {
        '01': {
            orange: {
                '05ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Orange_05ft_600x400.webm`],
                '15ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Orange_90ft_4000x400.webm`]
            },
        }
    },
    snipe: {
        blue: {
            '05ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_05ft_600x400.webm`],
            '15ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_15ft_1000x400.webm`],
            '30ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_30ft_1600x400.webm`],
            '60ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_60ft_2800x400.webm`],
            '90ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_90ft_4000x400.webm`]
        }
    },
    witchbolt: {
        '01': {
            blue: {
                '05ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Blue_05ft_600x400.webm`],
                '15ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Blue_90ft_4000x400.webm`],
            }
        }
    },
}

JB2AFREEDB.melee = {
    dagger: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/Dagger02_01_Regular_White_800x600.webm`]
        }
    },
    falchion: {
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Falchion01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_06_Regular_White_800x600.webm`
            ]
        }
    },
    flurryofblows: {
        'magical': {
            blue: {
                '1': [lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical01_800x600.webm`],
                '2': [lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical02_800x600.webm`]
            }
        },
        'physical': {
            blue: {
                '1': [lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Physical01_800x600.webm`]
            }
        }
    },
    glaive: {
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Glaive01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_06_Regular_White_800x600.webm`
            ]
        }
    },
    greataxe: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/GreatAxe01_01_Regular_White_800x600.webm`]
        }
    },
    greatclub: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/GreatClub01_01_Regular_White_800x600.webm`]
        }
    },
    greatsword: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/GreatSword01_01_Regular_White_800x600.webm`]
        }
    },
    halberd: {
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Halberd01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_06_Regular_White_800x600.webm`
            ],
        }
    },
    handaxe: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/HandAxe02_01_Regular_White_800x600.webm`]
        }
    },
    lasersword: {
        '01': {
            blue: [lg`Weapon_Attacks/Melee/LaserSword01_01_Regular_Blue_800x600.webm`]
        }
    },
    mace: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/Mace01_01_Regular_White_800x600.webm`]
        }
    },
    maul: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/Maul01_01_Regular_White_800x600.webm`]
        }
    },
    quarterstaff: {
        white: [
            lg`Weapon_Attacks/Melee/Quarterstaff01_01_Regular_White_800x600.webm`,
            lg`Weapon_Attacks/Melee/Quarterstaff01_02_Regular_White_800x600.webm`,
            lg`Weapon_Attacks/Melee/Quarterstaff01_03_Regular_White_800x600.webm`,
            lg`Weapon_Attacks/Melee/Quarterstaff01_04_Regular_White_800x600.webm`,
            lg`Weapon_Attacks/Melee/Quarterstaff01_05_Regular_White_800x600.webm`,
            lg`Weapon_Attacks/Melee/Quarterstaff01_06_Regular_White_800x600.webm`
        ],
    },
    rapier: {
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Rapier01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_06_Regular_White_800x600.webm`
            ]
        }
    },
    scimitar: {
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Scimitar01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_06_Regular_White_800x600.webm`
            ]
        }
    },
    shortsword: {
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Shortsword01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_06_Regular_White_800x600.webm`
            ]
        }
    },
    spear: {
        'fire': {
            white: [lg`Weapon_Attacks/Melee/Spear01_01_Regular_White_800x600.webm`],
        },
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Spear01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_06_Regular_White_800x600.webm`
            ],
        }
    },
    sword: {
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Sword01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_06_Regular_White_800x600.webm`
            ]
        }
    },
    unarmedstrike: {
        'magical': {
            blue: {
                '1': [lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical01_800x600.webm`],
                '2': [lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical02_800x600.webm`]
            }
        },
        'physical': {
            blue: {
                '1': [lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical01_800x600.webm`],
                '2': [lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical02_800x600.webm`]
            }
        }
    },
}

JB2AFREEDB.static = {
    antilifeshell: {
        '01': {
            blue: [l5`Antilife_Shell/AntilifeShell_01_Blue_NoCircle_400x400.webm`]
        }
    },
    bardicinspiration: {
        'inspire': {
            greenorange: [l1`Bardic_Inspiration/BardicInspiration_01_Regular_GreenOrange_400x400.webm`],
        },
        'marker': {
            greenorange: [lg`Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`],
        },
    },
    bless: {
        '01': {
            yellow: {
                'intro': l1`Bless/Bless_01_Regular_Yellow_Intro_400x400.webm`,
                'loop': l1`Bless/Bless_01_Regular_Yellow_Loop_400x400.webm`
            }
        }
    },
    calllightning: {
        '01': {
            blue: [l3`Call_Lightning/CallLightning_01_Blue_1000x1000.webm`],
            blueorange: [l3`Call_Lightning/CallLightning_01_BlueOrange_1000x1000.webm`],
            green: [l3`Call_Lightning/CallLightning_01_Green_1000x1000.webm`],
            pinkyellow: [l3`Call_Lightning/CallLightning_01_PinkYellow_1000x1000.webm`],
            purple: [l3`Call_Lightning/CallLightning_01_Purple_1000x1000.webm`],
            red: [l3`Call_Lightning/CallLightning_01_Red_1000x1000.webm`],
            yellow: [l3`Call_Lightning/CallLightning_01_Yellow_1000x1000.webm`],
        }
    },
    circle: {
        "ex01": {
            orange: [lg`Explosion/Explosion_01_Orange_400x400.webm`],
        },
        "ex02": {
            blue: [lg`Explosion/Explosion_02_Blue_400x400.webm`],
        },
        "ex03": {
            yellowblue: [lg`Explosion/Explosion_03_Regular_BlueYellow_400x400.webm`]
        },
        "ex04": {
            blue: [lg`Explosion/Explosion_04_Regular_Blue_400x400.webm`],
        },
        "snowflake": {
            bluewhite: [lg`Ice/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`],
        },
        "outpulse01": {
            bluewhite: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`],
        },
        "outpulse02": {
            bluewhite: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`],
        },
        sleep01: {
            pink: [l1`Sleep/Cloud01_01_Regular_Pink_400x400.webm`],
        },
        sleep02: {
            pink: [l1`Sleep/Cloud01_02_Regular_Pink_400x400.webm`],
        },
        "shatter": {
            purple: [l2`Shatter/Shatter_01_Purple_400x400.webm`],
            red: [l2`Shatter/Shatter_01_Red_400x400.webm`],
            blue: [l2`Shatter/Shatter_01_Blue_400x400.webm`],
            green: [l2`Shatter/Shatter_01_Green_400x400.webm`],
            orange: [l2`Shatter/Shatter_01_Orange_400x400.webm`]
        },
        fogcloud: {
            white: [l1`Fog_Cloud/FogCloud_01_White_800x800.webm`],
        },
        darkness: {
            black: [l2`Darkness/Darkness_01_Black_600x600.webm`],
            green: [l2`Darkness/Darkness_01_Green_600x600.webm`]
        },
        "calllightning": {
            blue: [l3`Call_Lightning/Opacities/CallLightning_01_Blue_75OPA_1000x1000.webm`],
            blueorange: [l3`Call_Lightning/Opacities/CallLightning_01_BlueOrange_75OPA_1000x1000.webm`],
            green: [l3`Call_Lightning/Opacities/CallLightning_01_Green_75OPA_1000x1000.webm`],
            pinkyellow: [l3`Call_Lightning/Opacities/CallLightning_01_PinkYellow_75OPA_1000x1000.webm`],
            purple: [l3`Call_Lightning/Opacities/CallLightning_01_Purple_75OPA_1000x1000.webm`],
            red: [l3`Call_Lightning/Opacities/CallLightning_01_Red_75OPA_1000x1000.webm`],
            yellow: [l3`Call_Lightning/Opacities/CallLightning_01_Yellow_75OPA_1000x1000.webm`]
        },
        "sleetstorm": {
            blue: [l3`Sleet_Storm/SleetStorm_01_Blue_800x800.webm`],
        },
        'cloudofdaggers': {
            blue: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Blue_400x400.webm`],
            green: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Green_400x400.webm`],
            orange: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Orange_400x400.webm`],
            purple: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Purple_400x400.webm`],
            red: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Red_400x400.webm`],
            yellow: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Yellow_400x400.webm`]
        },
    },
    cloudofdaggers: {
        '01': {
            blue: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Blue_400x400.webm`],
            green: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Green_400x400.webm`],
            orange: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Orange_400x400.webm`],
            purple: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Purple_400x400.webm`],
            red: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Red_400x400.webm`],
            yellow: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Yellow_400x400.webm`]
        }
    },
    cone: {
        'cold': {
            blue: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Blue_30ft_Cone_Burst_600x600.webm`],
        },
        'coneofcold': {
            blue: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Blue_600x600.webm`],
        },
        'fire01': {
            orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
        },
        'fire02': {
            orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
        },
        'burninghands01': {
            orange: [l1`Burning_Hands/BurningHands_01_Regular_Orange_600x600.webm`],
        },
        'burninghands02': {
            orange: [l1`Burning_Hands/BurningHands_01_Regular_Orange_600x600.webm`],
        },
        'poison': {
            green: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Green_30ft_Cone_Burst_600x600.webm`],
        }
    },
    bite: {
        '01': {
            red: [lg`Creature/Bite_01_Regular_Red_400x400.webm`],
        }
    },
    claw: {
        '01': {
            red: [lg`Creature/Claws_01_Regular_Red_400x400.webm`],
        }
    },
    curewounds: {
        '01': {
            blue: [l1`Cure_Wounds/CureWounds_01_Blue_400x400.webm`]
        }
    },
    darkness: {
        '01': {
            black: [l2`Darkness/Darkness_01_Black_600x600.webm`],
            green: [l2`Darkness/Darkness_01_Green_600x600.webm`],
        }
    },
    divinesmite: {
        'caster': {
            blueyellow: [l2`Divine_Smite/DivineSmite_01_Regular_BlueYellow_Caster_400x400`],
        },
        'target': {
            blueyellow: [l2`Divine_Smite/DivineSmite_01_Regular_BlueYellow_Target_400x400`],
        }
    },
    dizzystars: {
        '01': {
            blueorange: [lg`Conditions/Dizzy_Stars/DizzyStars_01_BlueOrange_400x400.webm`],
        }
    },
    explosion: {
        '01': {
            blue: [
                lg`Explosion/Explosion_02_Blue_400x400.webm`,
                lg`Explosion/Explosion_04_Regular_Blue_400x400.webm`,
            ],
            orange: [
                lg`Explosion/Explosion_01_Orange_400x400.webm`,
            ],
            yellowblue: [
                lg`Explosion/Explosion_03_Regular_BlueYellow_400x400.webm`
            ],
        }
    },
    fogcloud: {
        '01': {
            white: [l1`Fog_Cloud/FogCloud_01_White_800x800.webm`]
        }
    },
    generichealing: {
        '01': {
            blue: [lg`Healing/HealingAbility_01_Blue_400x400.webm`],
            green: [lg`Healing/HealingAbility_01_Green_400x400.webm`],
            purple: [lg`Healing/HealingAbility_01_Purple_400x400.webm`],
            yellow: [lg`Healing/HealingAbility_01_Yellow_400x400.webm`],
        },
        '02': {
            greenorange: [lg`Healing/HealingAbility_02_Regular_GreenOrange_Burst_600x600.webm`],
        }
    },
    huntersmark: {
        'eye': {
            green: [l1`Hunters_Mark/HuntersMark_01_Regular_Green_Pulse_200x200.webm`],
        },
        'eyeloop': {
            green: [l1`Hunters_Mark/HuntersMark_01_Regular_Green_Loop_200x200.webm`],
        },
    },
    icespikes: {
        '01': {
            white: [lg`Ice/IceSpikesRadialBurst_01_Regular_White_1000x1000.webm`]
        }
    },
    impact: {
        "01": {
            blue: [
                lg`Impact/Impact_01_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_02_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_03_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_04_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_11_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_12_Regular_Blue_400x400.webm`
            ],
            orange: [
                lg`Impact/Impact_05_Regular_Orange_400x400.webm`,
                lg`Impact/Impact_07_Regular_Orange_400x400.webm`,
                lg`Impact/Impact_08_Regular_Orange_400x400.webm`,
                lg`Impact/Impact_09_Regular_Orange_400x400.webm`,
                lg`Impact/Impact_10_Regular_Orange_400x400.webm`,
            ],
            yellow: [
                lg`Impact/Impact_06_Regular_Yellow_400x400.webm`,
                lg`Impact/Impact_07_Regular_Yellow_400x400.webm`,
            ],
        }
    },
    lightningball: {
        '01': {
            blue: [lg`Lightning/LightningBall_01_Regular_Blue_400x400.webm`],
        }
    },
    magicSign: {
        '01': {
            blue: [lg`Magic_Signs/Abjuration_01_Blue_Circle_800x800.webm`],
            yellow: [lg`Magic_Signs/Conjuration_01_Yellow_Circle_800x800.webm`],
            lightblue: [lg`Magic_Signs/Divination_01_Light_Blue_Circle_800x800.webm`],
        }
    },
    marker: {
        '01': {
            marker01: {
                "blueyellow": [lg`Marker/Marker_01_Regular_BlueYellow_400x400.webm`],
            },
            musicMarker: {
                "greenorange": [lg`Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`],
            }
        },
        energystrands: {
            loop: {
                blue: [lg`Marker/EnergyStrands_01_Regular_Blue_600x600.webm`]
            },
        }
    },
    mistystep: {
        "01": {
            blue: [l2`Misty_Step/MistyStep_01_Regular_Blue_400x400.webm`]
        },
        "02": {
            blue: [l2`Misty_Step/MistyStep_02_Regular_Blue_400x400.webm`]
        }
    },
    music: {
        '01': {
            blue: [
                lg`Music_Notation/BassClef_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/BeamedQuavers_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/Crotchet_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/Flat_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/Quaver_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/Sharp_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/TrebleClef_01_Regular_Blue_200x200.webm`
            ],
        }
    },
    outpulse01: {
        "01": {
            bluewhite: [
                lg`Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`,
            ]
        },
    },
    outpulse02: {
        "01": {
            bluewhite: [
                lg`Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`,
            ]
        },
    },
    ray: {
        'acid': {
            green: [lg`Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Green_30ft_Line_Burst_1200x200.webm`],
        },
        'fire': {
            orange: [lg`Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Line_Burst_1200x200.webm`],
        },
        'lightning': {
            blue: [lg`Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Blue_30ft_Line_Burst_1200x200.webm`],
        },
        'lightningbolt01': {
            blue: [l3`Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x200.webm`],
        },
        'lightningbolt02': {
            blue: [l3`Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x400.webm`],
        }
    },
    rect: {
        entangle: {
            brown: [l1`Entangle/Entangle_01_Brown_400x400.webm`],
            green: [l1`Entangle/Entangle_01_Green_400x400.webm`],
            yellow: [l1`Entangle/Entangle_01_Yellow_400x400.webm`]
        },
        thunderwave: {
            blue: {
                'left': [l1`Thunderwave/Thunderwave_01_Bright_Blue_BLeft_600x600.webm`],
                'mid': [l1`Thunderwave/Thunderwave_01_Bright_Blue_BMid_600x600.webm`],
                'center': [l1`Thunderwave/Thunderwave_01_Bright_Blue_Center_600x600.webm`]
            }
        },
        web: {
            white: [l2`Web/Opacities/Web_01_White_02_75OPA_400x400.webm`]
        },
    },
    shatter: {
        '01': {
            blue: [l2`Shatter/Shatter_01_Blue_400x400.webm`]
        }
    },
    shieldspell: {
        '01': {
            blue: {
                'intro': [l1`Shield/Shield_01_Regular_Blue_Intro_400x400.webm`],
                'loop': [l1`Shield/Shield_01_Regular_Blue_Loop_400x400.webm`],
                'outro_explode': [l1`Shield/Shield_01_Regular_Blue_OutroExplode_400x400.webm`],
                'outro_fade': [l1`Shield/Shield_01_Regular_Blue_OutroFade_400x400.webm`],
            }
        }
    },
    sleetstorm: {
        '01': {
            blue: [l3`Sleet_Storm/SleetStorm_01_Blue_800x800.webm`],
        }
    },
    sneakattack: {
        '01': {
            'dark green': [l1`Sneak_Attack/Sneak_Attack_Dark_Green_300x300.webm`],
        }
    },
    snowflake: {
        "01": {
            bluewhite: [
                lg`Ice/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`,
            ]
        }
    },
    spiritguardians: {
        '01': {
            yellowblue: [l3`Spirit_Guardians/SpiritGuardians_01_Light_BlueYellow_600x600.webm`],
        }
    },
    staticelectricity: {
        '01': {
            blue: [lg`Lightning/StaticElectricity_01_Regular_Blue_400x400.webm`],
        },
        '02': {
            blue: [lg`Lightning/StaticElectricity_02_Regular_Blue_400x400.webm`],
        }
    },
    thunderwave: {
        '01': {

            blue: {
                'left': [l1`Thunderwave/Thunderwave_01_Bright_Blue_BLeft_600x600.webm`],
                'mid': [l1`Thunderwave/Thunderwave_01_Bright_Blue_BMid_600x600.webm`],
                'center': [l1`Thunderwave/Thunderwave_01_Bright_Blue_Center_600x600.webm`]
            }
        }
    },
    tollthedead: {
        bell: {
            green: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Green_400x400.webm`],
        },
        complete: {
            green: [l0`Toll_The_Dead/TollTheDead_01_Regular_Green_400x400.webm`],
        },
        shockwave: {
            green: [l0`Toll_The_Dead/TollTheDeadShockwave_01_Regular_Green_400x400.webm`],
        },
        skullsmoke: {
            green: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Green_400x400.webm`],
        },
    },
    vortex: {
        loop: {
            blue: [lg`Template/Circle/Vortex_01_Regular_Blue_600x600.webm`],
        },
        intro: {
            blue: [lg`Template/Circle/VortexIntro_01_Regular_Blue_600x600.webm`],
        },
        outro: {
            blue: [lg`Template/Circle/VortexOutro_01_Regular_Blue_600x600.webm`],
        },
    },
    wallofforce: {
        '01': {
            grey: [l5`Wall_Of_Force/WallOfForce_01_Grey_Sphere_400x400.webm`],
        }
    },
    whirl: {
        loop: {
            blue: [lg`Template/Circle/Whirl_01_Regular_Blue_600x600.webm`],
        },
        intro: {
            blue: [lg`Template/Circle/WhirlIntro_01_Regular_Blue_600x600.webm`],
        },
        outro: {
            blue: [lg`Template/Circle/WhirlOutro_01_Regular_Blue_600x600.webm`],
        }
    },
    whirlwind: {
        '01': {
            bluegrey: [l7`Whirlwind/Whirlwind_01_BlueGrey_400x400.webm`],
        }
    },

}

JB2AFREEDB.return = {
    dagger: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_90ft_4000x400.webm`]
            }
        }
    },
}