const JB2AFREEDB = {};
export async function jb2aAAFreeDatabase(path) {

    JB2AFREEDB._templates = {
        ranged: [200, 200, 200]
    };

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const l0 = prefix('Cantrip')
    const l1 = prefix('1st_Level')
    const l2 = prefix('2nd_Level')
    const l3 = prefix('3rd_Level')
    const l4 = prefix('4th_Level')
    const l5 = prefix('5th_Level')
    const l6 = prefix('6th_Level')
    const l7 = prefix('7th_Level')
    const lg = prefix('Generic')

    /**
     * Range Types:
     * 
     * Weapon
     * Spell
     * Generic
     * 
     */

    JB2AFREEDB.range = {
        _template: 'ranged',
        weapon: {
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
            snipe: {
                blue: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_90ft_4000x400.webm`]
                }
            },
            snowball: {
                '01': {
                    white: {
                        '05ft': [lg`Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_05ft_600x500.webm`],
                        '15ft': [lg`Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_15ft_1000x500.webm`],
                        '30ft': [lg`Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_30ft_1600x500.webm`],
                        '60ft': [lg`Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_60ft_2800x500.webm`],
                        '90ft': [lg`Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_90ft_4000x500.webm`],
                    },
                },
            },
        },
        spell: {
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
            fireballbeam: {
                '01': {
                    orange: {
                        '05ft': [l3`Fireball/FireballBeam_01_Orange_05ft_600x400.webm`],
                        '15ft': [l3`Fireball/FireballBeam_01_Orange_15ft_1000x400.webm`],
                        '30ft': [l3`Fireball/FireballBeam_01_Orange_30ft_1600x400.webm`],
                        '60ft': [l3`Fireball/FireballBeam_01_Orange_60ft_2800x400.webm`],
                        '90ft': [l3`Fireball/FireballBeam_01_Orange_90ft_4000x400.webm`]
                    },
                },
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

        },
        generic: {
            conduit: {
                circle: {
                    purpleblue: {
                        '05ft': [lg`Energy/EnergyConduitCircle_01_Regular_BluePurple_05ft_600x400.webm`],
                        '15ft': [lg`Energy/EnergyConduitCircle_01_Regular_BluePurple_15ft_1000x400.webm`],
                        '30ft': [lg`Energy/EnergyConduitCircle_01_Regular_BluePurple_30ft_1600x400.webm`],
                        '60ft': [lg`Energy/EnergyConduitCircle_01_Regular_BluePurple_60ft_2800x400.webm`],
                        '90ft': [lg`Energy/EnergyConduitCircle_01_Regular_BluePurple_90ft_4000x400.webm`],
                    },
                },
            },
            energybeam: {
                '01': {
                    blue: {
                        '15ft': [lg`Energy/EnergyBeam_01_Regular_Blue_15ft_1000x400.webm`],
                        '30ft': [lg`Energy/EnergyBeam_01_Regular_Blue_30ft_1600x400.webm`],
                        '60ft': [lg`Energy/EnergyBeam_01_Regular_Blue_60ft_2800x400.webm`],
                        '90ft': [lg`Energy/EnergyBeam_01_Regular_Blue_90ft_4000x400.webm`],
                    },
                },
                '02': {
                    blue: {
                        '15ft': [lg`Energy/EnergyBeam_02_Regular_BluePink_15ft_1000x400.webm`],
                        '30ft': [lg`Energy/EnergyBeam_02_Regular_BluePink_30ft_1600x400.webm`],
                        '60ft': [lg`Energy/EnergyBeam_02_Regular_BluePink_60ft_2800x400.webm`],
                        '90ft': [lg`Energy/EnergyBeam_02_Regular_BluePink_90ft_4000x400.webm`],
                    },
                },
                '03': {
                    blue: {
                        '15ft': [lg`Energy/EnergyBeam_03_Regular_BluePink_15ft_1000x400.webm`],
                        '30ft': [lg`Energy/EnergyBeam_03_Regular_BluePink_30ft_1600x400.webm`],
                        '60ft': [lg`Energy/EnergyBeam_03_Regular_BluePink_60ft_2800x400.webm`],
                        '90ft': [lg`Energy/EnergyBeam_03_Regular_BluePink_90ft_4000x400.webm`],
                    },
                }
            },
            energystrand: {
                '01': {
                    purple: {
                        '05ft': [
                            lg`Energy/EnergyStrand_01_Regular_Purple_05ft_600x400.webm`,
                            lg`Energy/EnergyStrand_02_Regular_Purple_05ft_600x400.webm`,
                            lg`Energy/EnergyStrand_03_Regular_Purple_05ft_600x400.webm`,
                            lg`Energy/EnergyStrand_04_Regular_Purple_05ft_600x400.webm`,
                        ],
                        '15ft': [
                            lg`Energy/EnergyStrand_01_Regular_Purple_15ft_1000x400.webm`,
                            lg`Energy/EnergyStrand_02_Regular_Purple_15ft_1000x400.webm`,
                            lg`Energy/EnergyStrand_03_Regular_Purple_15ft_1000x400.webm`,
                            lg`Energy/EnergyStrand_04_Regular_Purple_15ft_1000x400.webm`,
                        ],
                        '30ft': [
                            lg`Energy/EnergyStrand_01_Regular_Purple_30ft_1600x400.webm`,
                            lg`Energy/EnergyStrand_02_Regular_Purple_30ft_1600x400.webm`,
                            lg`Energy/EnergyStrand_03_Regular_Purple_30ft_1600x400.webm`,
                            lg`Energy/EnergyStrand_04_Regular_Purple_30ft_1600x400.webm`,
                        ],
                        '60ft': [
                            lg`Energy/EnergyStrand_01_Regular_Purple_60ft_2800x400.webm`,
                            lg`Energy/EnergyStrand_02_Regular_Purple_60ft_2800x400.webm`,
                            lg`Energy/EnergyStrand_03_Regular_Purple_60ft_2800x400.webm`,
                            lg`Energy/EnergyStrand_04_Regular_Purple_60ft_2800x400.webm`,
                        ],
                        '90ft': [
                            lg`Energy/EnergyStrand_01_Regular_Purple_90ft_4000x400.webm`,
                            lg`Energy/EnergyStrand_02_Regular_Purple_90ft_4000x400.webm`,
                            lg`Energy/EnergyStrand_03_Regular_Purple_90ft_4000x400.webm`,
                            lg`Energy/EnergyStrand_04_Regular_Purple_90ft_4000x400.webm`,
                        ],
                    },
                },
            },
            iceshard: {
                '01': {
                    blue: {
                        '05ft': [lg`RangedSpell/ProjectileIceShard01_01_Regular_Blue_05ft_600x400.webm`],
                        '15ft': [lg`RangedSpell/ProjectileIceShard01_01_Regular_Blue_15ft_1000x400.webm`],
                        '30ft': [lg`RangedSpell/ProjectileIceShard01_01_Regular_Blue_30ft_1600x400.webm`],
                        '60ft': [lg`RangedSpell/ProjectileIceShard01_01_Regular_Blue_60ft_2800x400.webm`],
                        '90ft': [lg`RangedSpell/ProjectileIceShard01_01_Regular_Blue_90ft_4000x400.webm`]
                    },
                },
            },
        },
    }

    /**
     * Melee Types:
     *
     * Weapon 
     * Creature
     * 
     */

    JB2AFREEDB.melee = {
        creature: {
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
        },
        weapon: {
            club: {
                '01': {
                    white: [
                        [lg`Weapon_Attacks/Melee/Club01_01_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Club01_02_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Club01_03_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Club01_04_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Club01_05_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Club01_06_Regular_White_800x600.webm`]
                    ],
                }
            },
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
            hammer: {
                '01': {
                    white: [
                        [lg`Weapon_Attacks/Melee/Hammer01_01_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Hammer01_02_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Hammer01_03_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Hammer01_04_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Hammer01_05_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Hammer01_06_Regular_White_800x600.webm`]
                    ],
                },
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
                },
                '02': {
                    white: [
                        [lg`Weapon_Attacks/Melee/Mace01_01_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Mace01_02_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Mace01_03_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Mace01_04_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Mace01_05_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Mace01_06_Regular_White_800x600.webm`]
                    ],
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
            warhammer: {
                '01': {
                    white: [
                        [lg`Weapon_Attacks/Melee/Warhammer01_01_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Warhammer01_02_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Warhammer01_03_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Warhammer01_04_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Warhammer01_05_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Warhammer01_06_Regular_White_800x600.webm`]
                    ],
                }
            },
            wrench: {
                '01': {
                    white: [
                        [lg`Weapon_Attacks/Melee/Wrench01_01_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Wrench01_02_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Wrench01_03_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Wrench01_04_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Wrench01_05_Regular_White_800x600.webm`],
                        [lg`Weapon_Attacks/Melee/Wrench01_06_Regular_White_800x600.webm`]
                    ],
                }
            },
        },
    }

    /**
     * Template Types:
     * 
     * Cone
     * Square
     * Circle
     * Ray
     * 
     */

    JB2AFREEDB.templatefx = {
        circle: {
            armsofhadar: {
                '01': {
                    darkpurple: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Purple_500x500.webm`],
                }
            },
            blacktentacles: {
                '01': {
                    darkpurple: [l4`Black_Tentacles/BlackTentacles_01_Dark_Purple_600x600.webm`],
                },
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
            crackedshield: {
                '01': {
                    darkpurple: [lg`Template/Circle/TemplateShieldCrackedCircle_01_Regular_Purple_800x800.webm`],
                },
            },
            darkness: {
                '01': {
                    black: [l2`Darkness/Darkness_01_Black_600x600.webm`],
                    green: [l2`Darkness/Darkness_01_Green_600x600.webm`],
                }
            },
            detectmagic: {
                '01': {
                    blue: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Blue_1200x1200.webm`],
                }
            },
            drop: {
                '01': {
                    red: [lg`Template/Circle/TemplateDropCircle_01_Regular_Red_800x800.webm`]
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
            fear: {
                '01': {
                    darkpurple: [lg`Template/Circle/TemplateFearCircle_01_Dark_Purple_800x800.webm`],
                },
            },
            fireball: {
                explode: {
                    orange: [l3`Fireball/FireballExplosion_01_Orange_800x800.webm`],
                },
                loop: {
                    orange: [l3`Fireball/FireballLoop_01_Orange_800x800.webm`],
                },
                nodebris: {
                    orange: [l3`Fireball/FireballLoopNoDebris_01_Orange_800x800.webm`],
                },
            },
            fogcloud: {
                '01': {
                    white: [l1`Fog_Cloud/FogCloud_01_White_800x800.webm`]
                }
            },
            heart: {
                '01': {
                    pink: [lg`Template/Circle/TemplateHeartCircle_01_Regular_Pink_800x800.webm`],
                },
            },
            horror: {
                '01': {
                    purple: [lg`Template/Circle/TemplateHorrorCircle_01_Regular_Purple_800x800.webm`],
                },
            },
            magicsign: {
                abjuration: {
                    blue: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Blue_800x800.webm`],
                },
                conjuration: {
                    yellow: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Yellow_800x800.webm`],
                },
                divination: {
                    blue: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Blue_800x800.webm`],
                },
                enchantment: {
                    pink: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Pink_800x800.webm`],
                },
                evocation: {
                    red: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Red_800x800.webm`],
                },
                illusion: {
                    purple: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Purple_800x800.webm`],
                },
                necromancy: {
                    green: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Green_800x800.webm`],
                },
                transmutation: {
                    yellow: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Yellow_800x800.webm`],
                },
            },
            moonbeam: {
                loop: {
                    blue: [l2`Moonbeam/Moonbeam_01_Regular_Blue_400x400.webm`],
                },
                nopulse: {
                    blue: [l2`Moonbeam/MoonbeamNoPulse_01_Regular_Blue_400x400.webm`],
                },
                intro: {
                    blue: [l2`Moonbeam/MoonbeamIntro_01_Regular_Blue_400x400.webm`],
                },
                outro: {
                    blue: [l2`Moonbeam/MoonbeamOutro_01_Regular_Blue_400x400.webm`],
                },
            },
            musicnote: {
                '01': {
                    blue: [lg`Template/Circle/TemplateMusicNoteCircle_01_Regular_Blue_800x800.webm`],
                },
            },
            outpulse: {
                "01": {
                    whiteblue: [
                        lg`Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`,
                    ]
                },
                "02": {
                    whiteblue: [
                        lg`Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`,
                    ]
                },
            },
            poison: {
                '01': {
                    darkgreen: [lg`Template/Circle/TemplatePoisonCircle_01_Dark_Green_800x800.webm`],
                },
            },
            runes: {
                '01': {
                    orange: [lg`Template/Circle/TemplateRunesCircle_01_Regular_Orange_800x800.webm`],
                },
            },
            shatter: {
                '01': {
                    blue: [l2`Shatter/Shatter_01_Blue_400x400.webm`]
                }
            },
            shields: {
                '01': {
                    green: [lg`Template/Circle/TemplateShieldCircle_01_Regular_Green_800x800.webm`],
                },
            },
            skull: {
                '01': {
                    purple: [lg`Template/Circle/TemplateSkullCircle_01_Regular_Purple_800x800.webm`],
                },
            },
            sleetstorm: {
                '01': {
                    blue: [l3`Sleet_Storm/SleetStorm_01_Blue_800x800.webm`],
                }
            },
            snowflakes: {
                '01': {
                    blue: [lg`Template/Circle/TemplateSnowflakeCircle_01_Regular_Blue_800x800.webm`],
                },
            },
            stun: {
                '01': {
                    purple: [lg`Template/Circle/TemplateStunCircle_01_Regular_Purple_800x800.webm`],
                },
            },
            snowflake: {
                "01": {
                    whiteblue: [
                        lg`Ice/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`,
                    ]
                }
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
        },
        cone: {
            breathweapon: {
                'cold': {
                    blue: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Blue_30ft_Cone_Burst_600x600.webm`],
                },
                'fire01': {
                    orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
                },
                'poison': {
                    green: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Green_30ft_Cone_Burst_600x600.webm`],
                },
            },
            breathweaponspray01: {
                burst: {
                    orange: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Cone_Burst_800x800.webm`],
                },
                loop: {
                    orange: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Cone_Loop_800x800.webm`],
                }
            },
            breathweaponspray02: {
                burst: {
                    orange: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Orange_Cone_Burst_800x800.webm`],
                },
                loop: {
                    orange: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Orange_Cone_Loop_800x800.webm`],
                }
            },
            coneofcold: {
                '01': {
                    blue: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Blue_600x600.webm`],
                },
            },
            burninghands: {
                '01': {
                    orange: [l1`Burning_Hands/BurningHands_01_Regular_Orange_600x600.webm`],
                },
            },
        },
        ray: {
            breathweapon: {
                acid: {
                    green: [lg`Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Green_30ft_Line_Burst_1200x200.webm`],
                },
                fire: {
                    orange: [lg`Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Line_Burst_1200x200.webm`],
                },
                lightning: {
                    blue: [lg`Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Blue_30ft_Line_Burst_1200x200.webm`],
                },

            },
            lightningbolt: {
                '01': {
                    blue: [l3`Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x200.webm`],
                },
                '02': {
                    blue: [l3`Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x400.webm`],
                }
            },
            gustofwind: {
                slow: {
                    white: [l2`Gust_Of_Wind/GustOfWind_01_White_1200x200.webm`]
                },
                fast: {
                    white: [l2`Gust_Of_Wind/GustOfWind_01_White_VeryFast_1200x200.webm`]
                },
            },
        },
        square: {
            armsofhadar: {
                '01': {
                    darkpurple: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Purple_500x500.webm`],
                }
            },
            blacktentacles: {
                '01': {
                    darkpurple: [l4`Black_Tentacles/BlackTentacles_01_Dark_Purple_600x600.webm`],
                },
            },
            crackedshield: {
                '01': {
                    darkpurple: [lg`Template/Square/TemplateShieldCrackedSquare_01_Regular_Purple_600x600.webm`],
                },
            },
            drop: {
                '01': {
                    red: [lg`Template/Square/TemplateDropSquare_01_Regular_Red_600x600.webm`]
                }
            },
            entangle: {
                '01': {
                    brown: [l1`Entangle/Entangle_01_Brown_400x400.webm`],
                    green: [l1`Entangle/Entangle_01_Green_400x400.webm`],
                    yellow: [l1`Entangle/Entangle_01_Yellow_400x400.webm`],
                }
            },
            fear: {
                '01': {
                    darkpurple: [lg`Template/Square/TemplateFearSquare_01_Dark_Purple_600x600.webm`],
                },
            },
            grease: {
                "01": {
                    brown: [l1`Grease/Grease_Dark_Brown_600x600.webm`],
                }
            },
            heart: {
                '01': {
                    pink: [lg`Template/Square/TemplateHeartSquare_01_Regular_Pink_600x600.webm`],
                },
            },
            horror: {
                '01': {
                    purple: [lg`Template/Square/TemplateHorrorSquare_01_Regular_Purple_600x600.webm`],
                },
            },
            musicnote: {
                '01': {
                    blue: [lg`Template/Circle/TemplateMusicNoteCircle_01_Regular_Blue_800x800.webm`],
                },
            },
            poison: {
                '01': {
                    darkgreen: [lg`Template/Square/TemplatePoisonSquare_01_Dark_Green_600x600.webm`],
                },
            },
            runes: {
                '01': {
                    orange: [lg`Template/Square/TemplateRunesSquare_01_Regular_Orange_600x600.webm`],
                },
            },
            shields: {
                '01': {
                    green: [lg`Template/Square/TemplateShieldSquare_01_Regular_Green_600x600.webm`],
                },
            },
            snowflakes: {
                '01': {
                    blue: [lg`Template/Square/TemplateSnowflakeSquare_01_Regular_Blue_600x600.webm`],
                },
            },
            skull: {
                '01': {
                    purple: [lg`Template/Square/TemplateSkullSquare_01_Regular_Purple_600x600.webm`],
                },
            },
            stun: {
                '01': {
                    purple: [lg`Template/Square/TemplateStunSquare_01_Regular_Purple_600x600.webm`],
                },
            },
            thunderwave: {
                left: {
                    blue: [l1`Thunderwave/Thunderwave_01_Bright_Blue_BLeft_600x600.webm`],
                },
                mid: {
                    blue: [l1`Thunderwave/Thunderwave_01_Bright_Blue_BMid_600x600.webm`],
                },
                center: {
                    blue: [l1`Thunderwave/Thunderwave_01_Bright_Blue_Center_600x600.webm`],
                },
            },
            web: {
                '01': {
                    white: [l2`Web/Web_01_White_01_400x400.webm`]
                },
            },
        },
    }

    /**
     * Static Types:
     * 
     * Conditions
     * Creature
     * Energy
     * Fire
     * Generic
     * Ice
     * Lightning
     * Liquid
     * Magic Signs
     * Marker
     * Music
     * Particles
     * Shield Effects
     * Spell
     * Token Border
     * 
     */

    JB2AFREEDB.static = {
        conditions: {
            drop: {
                '02': {
                    red: [lg`Marker/MarkerDrop_02_Regular_Red_400x400.webm`],
                },
                '03': {
                    red: [lg`Marker/MarkerDrop_03_Regular_Red_400x400.webm`],
                },
            },
            fear: {
                '01': {
                    darkpurple: [lg`Marker/MarkerFear_01_Dark_Purple_400x400.webm`],
                },
                '02': {
                    darkpurple: [lg`Marker/MarkerFear_02_Dark_Purple_400x400.webm`],
                },
                '03': {
                    darkpurple: [lg`Marker/MarkerFear_03_Dark_Purple_400x400.webm`],
                },
            },
            heart: {
                '01': {
                    pink: [lg`Marker/MarkerHeart_01_Regular_Pink_400x400.webm`],
                },
                '02': {
                    pink: [lg`Marker/MarkerHeart_02_Regular_Pink_400x400.webm`],
                },
                '03': {
                    pink: [lg`Marker/MarkerHeart_03_Regular_Pink_400x400.webm`],
                },
            },
            horror: {
                '01': {
                    purple: [lg`Marker/MarkerHorror_01_Regular_Purple_400x400.webm`],
                },
                '02': {
                    purple: [lg`Marker/MarkerHorror_02_Regular_Purple_400x400.webm`],
                },
                '03': {
                    purple: [lg`Marker/MarkerHorror_03_Regular_Purple_400x400.webm`],
                },
            },
            light: {
                pulse: {
                    blue: [lg`Marker/MarkerLight_01_Regular_Blue_400x400.webm`],
                },
                nopulse: {
                    blue: [lg`Marker/MarkerLightNoPulse_01_Regular_Blue_400x400.webm`],
                },
            },
            poison: {
                '02': {
                    darkgreen: [lg`Marker/MarkerPoison_02_Dark_Green_400x400.webm`],
                },
                '03': {
                    darkgreen: [lg`Marker/MarkerPoison_03_Dark_Green_400x400.webm`],
                },
            },
            runes: {
                '01': {
                    darkorange: [lg`Marker/MarkerRunes_01_Dark_Orange_400x400.webm`],
                },
                '02': {
                    orange: [lg`Marker/MarkerRunes_02_Regular_Orange_400x400.webm`],
                },
                '03': {
                    orange: [lg`Marker/MarkerRunes_03_Regular_Orange_400x400.webm`],
                },
            },
            shields: {
                '02': {
                    green: [lg`Marker/MarkerShield_02_Regular_Green_400x400.webm`],
                },
                '03': {
                    green: [lg`Marker/MarkerShield_03_Regular_Green_400x400.webm`],
                },
            },
            crackedshield: {
                '02': {
                    purple: [lg`Marker/MarkerShieldCracked_02_Regular_Purple_400x400.webm`],
                },
                '03': {
                    purple: [lg`Marker/MarkerShieldCracked_03_Regular_Purple_400x400.webm`],
                },
            },
            skull: {
                '01': {
                    darkorange: [lg`Marker/MarkerSkull_01_Dark_Orange_400x400.webm`],
                },
                '02': {
                    purple: [lg`Marker/MarkerSkull_02_Regular_Purple_400x400.webm`],
                },
                '03': {
                    purple: [lg`Marker/MarkerSkull_03_Regular_Purple_400x400.webm`],
                },
            },
            snowflakes: {
                '02': {
                    blue: [lg`Marker/MarkerSnowflake_02_Regular_Blue_400x400.webm`],
                },
                '03': {
                    blue: [lg`Marker/MarkerSnowflake_03_Regular_Blue_400x400.webm`],
                },
            },
            stun: {
                '02': {
                    purple: [lg`Marker/MarkerStun_02_Regular_Purple_400x400.webm`],
                },
                '03': {
                    purple: [lg`Marker/MarkerStun_03_Regular_Purple_400x400.webm`],
                },
            },
            dizzystars: {
                '01': {
                    blueorange: [lg`Conditions/Dizzy_Stars/DizzyStars_01_BlueOrange_400x400.webm`],
                }
            },
        },
        creature: {
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
        },
        energy: {
            energyfield: {
                '01': {
                    blue: [lg`Energy/EnergyField_01_Regular_Blue_600x600.webm`],
                }
            },
            shimmer: {
                '01': {
                    blue: [lg`Energy/Shimmer01_01_Regular_Blue_400x400.webm`],
                }
            },
            sparkles: {
                '01': {
                    blue: [lg`Energy/SwirlingSparkles_01_Regular_Blue_400x400.webm`],
                }
            },
            strands: {
                '01': {
                    green: [lg`Energy/EnergyStrandIN01_01_Regular_Green_600x600.webm`],
                },
                '02': {
                    green: [lg`Energy/EnergyStrandIN01_02_Regular_Green_600x600.webm`],
                },
                '03': {
                    green: [lg`Energy/EnergyStrandIN01_03_Regular_Green_600x600.webm`],
                },
            },
        },
        fire: {
            eruption: {
                '01': {
                    orange: [lg`Fire/Eruption_01_Regular_Orange_600x600.webm`]
                },
            },

            groundcrack: {
                '01': {
                    orange: [lg`Fire/GroundCrackLoop_01_Regular_Orange_600x600.webm`],
                },
                '02': {
                    orange: [lg`Fire/GroundCrackLoop_02_Regular_Orange_600x600.webm`],
                },
                '03': {
                    orange: [lg`Fire/GroundCrackLoop_03_Regular_Orange_600x600.webm`],
                },
            },
            fireworks: {
                '01': {
                    orangeyellow: [
                        lg`Fireworks/Firework01_01_Regular_OrangeYellow_600x600.webm`,
                        lg`Fireworks/Firework03_01_Regular_OrangeYellow_600x600.webm`,
                    ],
                    yellow: [
                        lg`Fireworks/Firework02_01_Regular_Yellow_600x600.webm`,
                    ],
                },
                '02': {
                    orangeyellow: [
                        lg`Fireworks/Firework01_02_Regular_OrangeYellow_600x600.webm`,
                        lg`Fireworks/Firework03_02_Regular_OrangeYellow_600x600.webm`,
                    ],
                    yellow: [
                        lg`Fireworks/Firework02_02_Regular_Yellow_600x600.webm`,
                    ],
                },
            },
        },
        generic: {
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
            indicator: {
                chevron: {
                    yellow: [lg`UI/3Chevrons_01_Regular_Yellow_200x200.webm`],
                },
                '01': {
                    yellow: [lg`UI/Indicator_01_Regular_Yellow_200x200.webm`],
                },
                '02': {
                    green: [lg`UI/Indicator01_02_Regular_BlueGreen_400x400.webm`],
                },
                '03': {
                    green: [lg`UI/Indicator01_03_Regular_BlueGreen_200x200.webm`],
                },
                '04': {
                    green: [lg`UI/Indicator02_02_Regular_BlueGreen_400x400.webm`],
                },
                '05': {
                    green: [lg`UI/Indicator02_03_Regular_BlueGreen_200x200.webm`],
                },
            },
            outpulse: {
                "01": {
                    whiteblue: [
                        lg`Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`,
                    ]
                },
                "02": {
                    whiteblue: [
                        lg`Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`,
                    ]
                },
            },
            smoke: {
                '01': {
                    grey: [lg`Smoke/SmokePuff01_01_Regular_Grey_400x400.webm`],
                },
                '02': {
                    grey: [lg`Smoke/SmokePuff01_02_Regular_Grey_400x400.webm`],
                },
                '03': {
                    grey: [lg`Smoke/SmokePuff01_03_Regular_Grey_400x400.webm`],
                },
            },
            ui: {
                drop: {
                    red: [lg`UI/IconDrop_01_Regular_Red_200x200.webm`]
                },
                fear: {
                    darkpurple: [lg`UI/IconFear_01_Dark_Purple_200x200.webm`]
                },
                heart: {
                    pink: [lg`UI/IconHeart_01_Regular_Pink_200x200.webm`],
                },
                horror: {
                    purple: [lg`UI/IconHorror_01_Regular_Purple_200x200.webm`],
                },
                music: {
                    blue: [lg`UI/IconMusicNote_01_Regular_Blue_200x200.webm`],
                },
                poison: {
                    darkgreen: [lg`UI/IconPoison_01_Dark_Green_200x200.webm`],
                },
                rune01: {
                    orange: [lg`UI/IconRunes_01_Regular_Orange_200x200.webm`],
                },
                rune02: {
                    orange: [lg`UI/IconRunes02_01_Regular_Orange_200x200.webm`],
                },
                rune03: {
                    orange: [lg`UI/IconRunes03_01_Regular_Orange_200x200.webm`],
                },
                shields: {
                    green: [lg`UI/IconShield_01_Regular_Green_200x200.webm`]
                },
                crackedshield: {
                    purple: [lg`UI/IconShieldCracked_01_Regular_Purple_200x200.webm`],
                },
                skull: {
                    purple: [lg`UI/IconSkull_01_Regular_Purple_200x200.webm`],
                },
                snowflake: {
                    blue: [lg`UI/IconSnowflake_01_Regular_Blue_200x200.webm`]
                },
                stun: {
                    purple: [lg`UI/IconStun_01_Regular_Purple_200x200.webm`],
                }
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
        },
        ice: {
            icespikes: {
                '01': {
                    white: [lg`Ice/IceSpikesRadialBurst_01_Regular_White_1000x1000.webm`]
                }
            },
            snowflake: {
                "01": {
                    whiteblue: [
                        lg`Ice/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`,
                    ]
                }
            },
        },
        lightning: {
            ball: {
                '01': {
                    blue: [lg`Lightning/LightningBall_01_Regular_Blue_400x400.webm`],
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
        },
        liquid: {
            splash: {
                '01': {
                    blue: [lg`Liquid/LiquidSplash01_Regular_Blue_400x400.webm`],
                },
            },
        },
        magicsign: {
            abjuration: {
                '01': {
                    blue: [lg`Magic_Signs/Abjuration_01_Blue_Circle_800x800.webm`],
                },
                '02': {
                    blue: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Blue_800x800.webm`],
                }
            },
            conjuration: {
                '01': {
                    yellow: [lg`Magic_Signs/Conjuration_01_Yellow_Circle_800x800.webm`]
                },
                '02': {
                    yellow: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Yellow_800x800.webm`],
                }
            },
            divination: {
                '01': {
                    lightblue: [lg`Magic_Signs/Divination_01_Light_Blue_Circle_800x800.webm`]
                },
                '02': {
                    blue: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Blue_800x800.webm`],
                }
            },
            enchantment: {
                '02': {
                    pink: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Pink_800x800.webm`],
                }
            },
            evocation: {
                '02': {
                    red: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Red_800x800.webm`],
                }
            },
            illusion: {
                '02': {
                    purple: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Purple_800x800.webm`],
                }
            },
            necromancy: {
                '02': {
                    green: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Green_800x800.webm`],
                }
            },
            transmutation: {
                '02': {
                    yellow: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Yellow_800x800.webm`],
                }
            },
        },
        marker: {
            bubble: {
                '01': {
                    blue: [lg`Marker/MarkerBubble_01_Regular_Blue_400x400.webm`],
                }
            },
            circleofstars: {
                '01': {
                    blue: [lg`Marker/MarkerCircleOfStars_Regular_Blue_400x400.webm`],
                },
            },
            energystrands: {
                '01': {
                    blue: [lg`Marker/EnergyStrands_01_Regular_Blue_600x600.webm`]
                },
            },
            music: {
                '01': {
                    greenorange: [lg`Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`],
                },
            },
            standard: {
                '01': {
                    marker01: {
                        "blueyellow": [lg`Marker/Marker_01_Regular_BlueYellow_400x400.webm`],
                    },
                    musicMarker: {
                        "greenorange": [lg`Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`],
                    }
                },
            },
        },
        music: {
            notes: {
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
        },
        particles: {
            dots: {
                '01': {
                    green: [lg`Particles/ParticlesOutward01_01_Regular_GreenYellow_400x400.webm`],
                },
                '02': {
                    green: [lg`Particles/ParticlesOutward01_02_Regular_GreenYellow_400x400.webm`],
                },
                '03': {
                    green: [lg`Particles/ParticlesOutward01_03_Regular_GreenYellow_400x400.webm`],
                },
                '04': {
                    green: [lg`Particles/ParticlesOutward01_04_Regular_GreenYellow_400x400.webm`],
                },
                '05': {
                    green: [lg`Particles/ParticlesOutward01_05_Regular_GreenYellow_400x400.webm`],
                },
            },
            inwarddots: {
                '01': {
                    greenyellow: [lg`Particles/ParticlesInward01_01_Regular_GreenYellow_400x400.webm`],
                },
                '02': {
                    greenyellow: [lg`Particles/ParticlesInward01_02_Regular_GreenYellow_400x400.webm`],
                },
                '03': {
                    greenyellow: [lg`Particles/ParticlesInward01_03_Regular_GreenYellow_400x400.webm`],
                },
                '04': {
                    greenyellow: [lg`Particles/ParticlesInward01_04_Regular_GreenYellow_400x400.webm`],
                },
                '05': {
                    greenyellow: [lg`Particles/ParticlesInward01_05_Regular_GreenYellow_400x400.webm`],
                },
            },    
            stars: {
                '01': {
                    green: [lg`Particles/ParticlesOutward02_01_Regular_GreenYellow_400x400.webm`],
                },
                '02': {
                    green: [lg`Particles/ParticlesOutward02_02_Regular_GreenYellow_400x400.webm`],
                },
                '03': {
                    green: [lg`Particles/ParticlesOutward02_03_Regular_GreenYellow_400x400.webm`],
                },
                '04': {
                    green: [lg`Particles/ParticlesOutward02_04_Regular_GreenYellow_400x400.webm`],
                },
                '05': {
                    green: [lg`Particles/ParticlesOutward02_05_Regular_GreenYellow_400x400.webm`],
                },
            },
            inwardstars: {
                '01': {
                    greenyellow: [lg`Particles/ParticlesInward02_01_Regular_GreenYellow_400x400.webm`],
                },
                '02': {
                    greenyellow: [lg`Particles/ParticlesInward02_02_Regular_GreenYellow_400x400.webm`],
                },
                '03': {
                    greenyellow: [lg`Particles/ParticlesInward02_03_Regular_GreenYellow_400x400.webm`],
                },
                '04': {
                    greenyellow: [lg`Particles/ParticlesInward02_04_Regular_GreenYellow_400x400.webm`],
                },
                '05': {
                    greenyellow: [lg`Particles/ParticlesInward02_05_Regular_GreenYellow_400x400.webm`],
                },
            },    
            swirl: {
                '01': {
                    greenyellow: [lg`Particles/ParticlesSwirl01_01_Regular_GreenYellow_400x400.webm`],
                },
                '02': {
                    greenyellow: [lg`Particles/ParticlesSwirl02_01_Regular_GreenYellow_400x400.webm`],
                },
            },
        },
        shieldfx: {
            eldritchweb: {
                '01': {
                    darkpurple: [lg`Energy/ShieldEldritchWebAbove01_01_Dark_Purple_400x400.webm`],
                },
            },
            /*
            shieldeldritchwebbottom: {
                '01': {
                    darkpurple: [lg`Energy/ShieldEldritchWebBelow01_01_Dark_Purple_400x400.webm`],
                },
            },
            */
            fire: {
                '01': {
                    orange: [lg`Fire/ShieldFireAbove01_01_Regular_Orange_400x400.webm`],
                },
            },
            /*
            shieldfirebottom: {
                '01': {
                    orange: [lg`Fire/ShieldFireBelow01_01_Regular_Orange_400x400.webm`],
                },
            },
            */
            earth: {
                '01': {
                    orange: [lg`Fire/ShieldMoltenEarthAbove01_01_Regular_Orange_400x400.webm`],
                },
            },
            /*
            shieldearthbottom: {
                '01': {
                    orange: [lg`Fire/ShieldMoltenEarthBelow01_01_Regular_Orange_400x400.webm`],
                },
            },
            */
            energyfield: {
                '01': {
                    blue: [lg`Energy/EnergyFieldTop_02_Regular_Blue_400x400.webm`],
                }
            },
            /*
            energyfieldbottom: {
                '01': {
                    blue: [lg`Energy/EnergyFieldBot_02_Regular_Blue_400x400.webm`],
                }
            },
            */
            ice: {
                '01': {
                    blue: [lg`Ice/ShieldIceAbove01_01_Regular_Blue_400x400.webm`],
                }
            },
            /*
            shieldicebottom: {
                '01': {
                    blue: [lg`Ice/ShieldIceBelow01_01_Regular_Blue_400x400.webm`],
                }
            },
            */

        },
        spell: {
            antilifeshell: {
                '01': {
                    blue: [l5`Antilife_Shell/AntilifeShell_01_Blue_NoCircle_400x400.webm`]
                }
            },
            armsofhadar: {
                '01': {
                    darkpurple: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Purple_500x500.webm`],
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
            blacktentacles: {
                '01': {
                    darkpurple: [l4`Black_Tentacles/BlackTentacles_01_Dark_Purple_600x600.webm`],
                },
            },
            bless: {
                "intro": {
                    yellow: [l1`Bless/Bless_01_Regular_Yellow_Intro_400x400.webm`],
                },
                "loop": {
                    yellow: [l1`Bless/Bless_01_Regular_Yellow_Loop_400x400.webm`],
                },
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
            detectmagic: {
                '01': {
                    blue: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Blue_1200x1200.webm`],
                }
            },
            divinesmite: {
                'source': {
                    yellowblue: [l2`Divine_Smite/DivineSmite_01_Regular_BlueYellow_Caster_400x400.webm`],
                },
                'target': {
                    yellowblue: [l2`Divine_Smite/DivineSmite_01_Regular_BlueYellow_Target_400x400.webm`],
                }
            },
            entangle: {
                '01': {
                    brown: [l1`Entangle/Entangle_01_Brown_400x400.webm`],
                    green: [l1`Entangle/Entangle_01_Green_400x400.webm`],
                    yellow: [l1`Entangle/Entangle_01_Yellow_400x400.webm`],
                }
            },
            fireball: {
                loop: {
                    orange: [l3`Fireball/FireballLoop_01_Orange_800x800.webm`],
                },
                explode: {
                    orange: [l3`Fireball/FireballExplosion_01_Orange_800x800.webm`],
                },
                nodebris: {
                    orange: [l3`Fireball/FireballLoopNoDebris_01_Orange_800x800.webm`],
                },
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
            grease: {
                "01": {
                    brown: [l1`Grease/Grease_Dark_Brown_600x600.webm`],
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
            mistystep: {
                "01": {
                    blue: [l2`Misty_Step/MistyStep_01_Regular_Blue_400x400.webm`]
                },
                "02": {
                    blue: [l2`Misty_Step/MistyStep_02_Regular_Blue_400x400.webm`]
                }
            },
            moonbeam: {
                loop: {
                    blue: [l2`Moonbeam/Moonbeam_01_Regular_Blue_400x400.webm`],
                },
                nopulse: {
                    blue: [l2`Moonbeam/MoonbeamNoPulse_01_Regular_Blue_400x400.webm`],
                },
                intro: {
                    blue: [l2`Moonbeam/MoonbeamIntro_01_Regular_Blue_400x400.webm`],
                },
                outro: {
                    blue: [l2`Moonbeam/MoonbeamOutro_01_Regular_Blue_400x400.webm`],
                },
            },
            sacredflame: {
                source: {
                    yellow: [l0`Sacred_Flame/SacredFlameSource_01_Regular_Yellow_400x400.webm`],
                },
                target: {
                    yellow: [l0`Sacred_Flame/SacredFlameTarget_01_Regular_Yellow_400x400.webm`],
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
            sleep: {
                '01': {
                    pink: [l1`Sleep/Cloud01_01_Regular_Pink_400x400.webm`],
                },
                '02': {
                    pink: [l1`Sleep/Cloud01_02_Regular_Pink_400x400.webm`],
                },
                marker: {
                    pink: [l1`Sleep/SleepMarker01_01_Regular_Pink_400x400.webm`],
                },
                symbol: {
                    pink: [l1`Sleep/SleepSymbol01_01_Regular_Pink_400x400.webm`],
                },
            },
            sleetstorm: {
                '01': {
                    blue: [l3`Sleet_Storm/SleetStorm_01_Blue_800x800.webm`],
                }
            },
            spiritguardians: {
                '01': {
                    yellowblue: [l3`Spirit_Guardians/SpiritGuardians_01_Light_BlueYellow_600x600.webm`],
                }
            },
            sneakattack: {
                '01': {
                    'dark green': [l1`Sneak_Attack/Sneak_Attack_Dark_Green_300x300.webm`],
                }
            },
            thunderwave: {
                left: {
                    blue: [l1`Thunderwave/Thunderwave_01_Bright_Blue_BLeft_600x600.webm`],
                },
                mid: {
                    blue: [l1`Thunderwave/Thunderwave_01_Bright_Blue_BMid_600x600.webm`],
                },
                center: {
                    blue: [l1`Thunderwave/Thunderwave_01_Bright_Blue_Center_600x600.webm`],
                },
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
                skull: {
                    green: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Green_400x400.webm`],
                },
            },
            wallofforce: {
                '01': {
                    grey: [l5`Wall_Of_Force/WallOfForce_01_Grey_Sphere_400x400.webm`],
                }
            },
            web: {
                '01': {
                    white: [l2`Web/Web_01_White_01_400x400.webm`]
                },
            },
            whirlwind: {
                '01': {
                    bluegrey: [l7`Whirlwind/Whirlwind_01_BlueGrey_01_400x400.webm`],
                }
            },
        },
        tokenborder: {
            static: {
                '01': {
                    blue: [lg`Token_Border/TokenBorderCircle_01_Regular_Blue_400x400.webm`],
                },
                '02': {
                    blue: [lg`Token_Border/TokenBorderCircle_02_Regular_Blue_400x400.webm`],
                },
                '03': {
                    blue: [lg`Token_Border/TokenBorderCircle_03_Regular_Blue_400x400.webm`],
                },
                '04': {
                    blue: [lg`Token_Border/TokenBorderCircle_04_Regular_Blue_400x400.webm`],
                },
                '05': {
                    blue: [lg`Token_Border/TokenBorderCircle_05_Regular_Blue_400x400.webm`],
                },
                '06': {
                    blue: [lg`Token_Border/TokenBorderCircle_06_Regular_Blue_400x400.webm`],
                },
                '07': {
                    blue: [lg`Token_Border/TokenBorderCircle_07_Regular_Blue_400x400.webm`],
                },
            },
            spinning: {
                '01': {
                    blue: [lg`Token_Border/TokenBorderCircleSpin_01_Regular_Blue_400x400.webm`],
                },
                '02': {
                    blue: [lg`Token_Border/TokenBorderCircleSpin_02_Regular_Blue_400x400.webm`],
                },
                '03': {
                    blue: [lg`Token_Border/TokenBorderCircleSpin_03_Regular_Blue_400x400.webm`],
                },
                '04': {
                    blue: [lg`Token_Border/TokenBorderCircleSpin_04_Regular_Blue_400x400.webm`],
                },
                '05': {
                    blue: [lg`Token_Border/TokenBorderCircleSpin_05_Regular_Blue_400x400.webm`],
                },
                '06': {
                    blue: [lg`Token_Border/TokenBorderCircleSpin_06_Regular_Blue_400x400.webm`],
                },
                '07': {
                    blue: [lg`Token_Border/TokenBorderCircleSpin_07_Regular_Blue_400x400.webm`],
                },
            },
        },
        trap: {
            fire: {
                single: {
                    orange: [lg`Traps/FireTrap02_01_Regular_Orange_1400x1400.webm`],
                },
                double: {
                    orange: [lg`Traps/FireTrapDual02_01_Regular_Orange_1400x1400.webm`],
                }
            }
        },
    }

    JB2AFREEDB.return = {
        _template: 'ranged',
        weapon: {
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
    }
}
export { JB2AFREEDB }