export async function db054(path) {

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
     * Structure for the internal Select menus work as:
     * Type => Animation => Variant => Color
     * Example: Range Menu - Weapon => Arrow => Regular => Regular
     * 
     * Entries in each section type should have a localized Variable matching in the lang/en.json file under
     * the proper category.
     * Type relates to the MenuTypes section
     * Animation to animations
     * Variant to variants
     * Color to colors
     * 
     */
    const patreonDB054 = {
        range: {
            _template: 'ranged',
            _free: ['generic'],
            spell: {
                fireballbeam: {
                    '01': {
                        darkred: {
                            '05ft': [l3`Fireball/FireballBeam_01_Dark_Red_05ft_600x400.webm`],
                            '15ft': [l3`Fireball/FireballBeam_01_Dark_Red_15ft_1000x400.webm`],
                            '30ft': [l3`Fireball/FireballBeam_01_Dark_Red_30ft_1600x400.webm`],
                            '60ft': [l3`Fireball/FireballBeam_01_Dark_Red_60ft_2800x400.webm`],
                            '90ft': [l3`Fireball/FireballBeam_01_Dark_Red_90ft_4000x400.webm`]
                        }
                    },
                },
            },
            generic: {
                _free: ['energywall'],
                energywall: {
                    _free: ['loop', 'complete'],
                    loop: {
                        _free: ['orange'],
                        blue: {
                            '05ft': [lg`Energy/EnergyWall01_01_Regular_Blue_05x05ft_Loop_400x400.webm`],
                            '10ft': [lg`Energy/EnergyWall01_01_Regular_Blue_10x05ft_Loop_800x400.webm`],
                            '15ft': [lg`Energy/EnergyWall01_01_Regular_Blue_15x05ft_Loop_1000x400.webm`],
                            '25ft': [lg`Energy/EnergyWall01_01_Regular_Blue_25x05ft_Loop_1400x400.webm`],
                        },
                        green: {
                            '05ft': [lg`Energy/EnergyWall01_01_Regular_Green_05x05ft_Loop_400x400.webm`],
                            '10ft': [lg`Energy/EnergyWall01_01_Regular_Green_10x05ft_Loop_800x400.webm`],
                            '15ft': [lg`Energy/EnergyWall01_01_Regular_Green_15x05ft_Loop_1000x400.webm`],
                            '25ft': [lg`Energy/EnergyWall01_01_Regular_Green_25x05ft_Loop_1400x400.webm`],
                        },
                        orange: {
                            '05ft': [lg`Energy/EnergyWall01_01_Regular_Orange_05x05ft_Loop_400x400.webm`],
                            '10ft': [lg`Energy/EnergyWall01_01_Regular_Orange_10x05ft_Loop_800x400.webm`],
                            '15ft': [lg`Energy/EnergyWall01_01_Regular_Orange_15x05ft_Loop_1000x400.webm`],
                            '25ft': [lg`Energy/EnergyWall01_01_Regular_Orange_25x05ft_Loop_1400x400.webm`],
                        },
                        purple: {
                            '05ft': [lg`Energy/EnergyWall01_01_Regular_Purple_05x05ft_Loop_400x400.webm`],
                            '10ft': [lg`Energy/EnergyWall01_01_Regular_Purple_10x05ft_Loop_800x400.webm`],
                            '15ft': [lg`Energy/EnergyWall01_01_Regular_Purple_15x05ft_Loop_1000x400.webm`],
                            '25ft': [lg`Energy/EnergyWall01_01_Regular_Purple_25x05ft_Loop_1400x400.webm`],
                        },
                        red: {
                            '05ft': [lg`Energy/EnergyWall01_01_Regular_Red_05x05ft_Loop_400x400.webm`],
                            '10ft': [lg`Energy/EnergyWall01_01_Regular_Red_10x05ft_Loop_800x400.webm`],
                            '15ft': [lg`Energy/EnergyWall01_01_Regular_Red_15x05ft_Loop_1000x400.webm`],
                            '25ft': [lg`Energy/EnergyWall01_01_Regular_Red_25x05ft_Loop_1400x400.webm`],
                        }
                    },
                    complete: {
                        _free: ['orange'],
                        blue: {
                            '05ft': [lg`Energy/EnergyWall01_01_Regular_Blue_05x05ft_Complete_400x400.webm`],
                            '10ft': [lg`Energy/EnergyWall01_01_Regular_Blue_10x05ft_Complete_800x400.webm`],
                            '15ft': [lg`Energy/EnergyWall01_01_Regular_Blue_15x05ft_Complete_1000x400.webm`],
                            '25ft': [lg`Energy/EnergyWall01_01_Regular_Blue_25x05ft_Complete_1400x400.webm`],
                        },
                        green: {
                            '05ft': [lg`Energy/EnergyWall01_01_Regular_Green_05x05ft_Complete_400x400.webm`],
                            '10ft': [lg`Energy/EnergyWall01_01_Regular_Green_10x05ft_Complete_800x400.webm`],
                            '15ft': [lg`Energy/EnergyWall01_01_Regular_Green_15x05ft_Complete_1000x400.webm`],
                            '25ft': [lg`Energy/EnergyWall01_01_Regular_Green_25x05ft_Complete_1400x400.webm`],
                        },
                        orange: {
                            '05ft': [lg`Energy/EnergyWall01_01_Regular_Orange_05x05ft_Complete_400x400.webm`],
                            '10ft': [lg`Energy/EnergyWall01_01_Regular_Orange_10x05ft_Complete_800x400.webm`],
                            '15ft': [lg`Energy/EnergyWall01_01_Regular_Orange_15x05ft_Complete_1000x400.webm`],
                            '25ft': [lg`Energy/EnergyWall01_01_Regular_Orange_25x05ft_Complete_1400x400.webm`],
                        },
                        purple: {
                            '05ft': [lg`Energy/EnergyWall01_01_Regular_Purple_05x05ft_Complete_400x400.webm`],
                            '10ft': [lg`Energy/EnergyWall01_01_Regular_Purple_10x05ft_Complete_800x400.webm`],
                            '15ft': [lg`Energy/EnergyWall01_01_Regular_Purple_15x05ft_Complete_1000x400.webm`],
                            '25ft': [lg`Energy/EnergyWall01_01_Regular_Purple_25x05ft_Complete_1400x400.webm`],
                        },
                        red: {
                            '05ft': [lg`Energy/EnergyWall01_01_Regular_Red_05x05ft_Complete_400x400.webm`],
                            '10ft': [lg`Energy/EnergyWall01_01_Regular_Red_10x05ft_Complete_800x400.webm`],
                            '15ft': [lg`Energy/EnergyWall01_01_Regular_Red_15x05ft_Complete_1000x400.webm`],
                            '25ft': [lg`Energy/EnergyWall01_01_Regular_Red_25x05ft_Complete_1400x400.webm`],
                        }
                    }
                }
            },
        },
        templatefx: {
            _free: ['circle'],
            circle: {
                _free: ['energy'],
                detectmagic: {
                    '01': {
                        darkred: [l1`Detect_Magic/DetectMagicCircle_01_Dark_Red_1200x1200.webm`],
                    }
                },    
                energy: {
                    _free: ['loop', 'complete'],
                    loop: {
                        _free: ['orange'],
                        blue: [lg`Energy/EnergyWall01_01_Regular_Blue_Circle_Loop_900x900.webm`],
                        green: [lg`Energy/EnergyWall01_01_Regular_Green_Circle_Loop_900x900.webm`],
                        orange: [lg`Energy/EnergyWall01_01_Regular_Orange_Circle_Loop_900x900.webm`],
                        purple: [lg`Energy/EnergyWall01_01_Regular_Purple_Circle_Loop_900x900.webm`],
                        red: [lg`Energy/EnergyWall01_01_Regular_Red_Circle_Loop_900x900.webm`],
                    },
                    complete: {
                        _free: ['orange', '_markers'],
                        _markers: {
                            loop: { start: 700, end: 3333 }
                        },
                        blue: [lg`Energy/EnergyWall01_01_Regular_Blue_Circle_Complete_900x900.webm`],
                        green: [lg`Energy/EnergyWall01_01_Regular_Green_Circle_Complete_900x900.webm`],
                        orange: [lg`Energy/EnergyWall01_01_Regular_Orange_Circle_Complete_900x900.webm`],
                        purple: [lg`Energy/EnergyWall01_01_Regular_Purple_Circle_Complete_900x900.webm`],
                        red: [lg`Energy/EnergyWall01_01_Regular_Red_Circle_Complete_900x900.webm`],
                    }
                },
                fireball: {
                    loop: {
                        darkred: [l3`Fireball/FireballLoop_01_Dark_Red_800x800.webm`],
                    },
                    explode: {
                        darkred: [l3`Fireball/FireballExplosion_01_Dark_Red_800x800.webm`],
                    },
                    nodebris: {
                        darkred: [l3`Fireball/FireballLoopNoDebris_01_Dark_Red_800x800.webm`],
                    },
                },
            },
            cone: {
                breathweaponspray01: {
                    burst: {
                        black: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Arcana01_Dark_Black_Cone_Burst_800x800.webm`]
                    },
                    loop: {
                        black: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Arcana01_Dark_Black_Cone_Loop_800x800.webm`]
                    }
                },
                breathweaponspray02: {
                    burst: {
                        black: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Arcana02_Dark_Black_Cone_Burst_800x800.webm`]
                    },
                    loop: {
                        black: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Arcana02_Dark_Black_Cone_Loop_800x800.webm`]
                    }
                },
                detectmagic: {
                    '01': {
                        darkred: [l1`Detect_Magic/DetectMagicCone_01_Dark_Red_15ft_500x500.webm`],
                    }
                },    
            },
            ray: {
                breathweaponspray01: {
                    burst: {
                        black: [lg`Template/Line/Breath_Weapon/Breathweapon02_Arcana01_Dark_Black_Line_Burst_1200x400.webm`],
                    },
                    loop: {
                        black: [lg`Template/Line/Breath_Weapon/Breathweapon02_Arcana01_Dark_Black_Line_Loop_1200x400.webm`],
                    }
                },    
            },
        },
        static: {
            _free: ['energy', 'magicsign'],
            conditions: {
                skull: {
                    '01': {
                        darkred: [lg`Marker/MarkerSkull_01_Dark_Red_400x400.webm`],
                    },
                    '02': {
                        darkred: [lg`Marker/MarkerSkull_02_Dark_Red_400x400.webm`],
                    },
                    '03': {
                        darkred: [lg`Marker/MarkerSkull_03_Dark_Red_400x400.webm`],
                    },
                },    
            },
            energy: {
                _free: ['circle'],
                circle: {
                    _free: ['loop', 'complete'],
                    loop: {
                        _free: ['orange'],
                        blue: [lg`Energy/EnergyWall01_01_Regular_Blue_Circle_Loop_500x500.webm`],
                        green: [lg`Energy/EnergyWall01_01_Regular_Green_Circle_Loop_500x500.webm`],
                        orange: [lg`Energy/EnergyWall01_01_Regular_Orange_Circle_Loop_500x500.webm`],
                        purple: [lg`Energy/EnergyWall01_01_Regular_Purple_Circle_Loop_500x500.webm`],
                        red: [lg`Energy/EnergyWall01_01_Regular_Red_Circle_Loop_500x500.webm`],
                    },
                    complete: {
                        _free: ['orange'],
                        blue: [lg`Energy/EnergyWall01_01_Regular_Blue_Circle_Complete_500x500.webm`],
                        green: [lg`Energy/EnergyWall01_01_Regular_Green_Circle_Complete_500x500.webm`],
                        orange: [lg`Energy/EnergyWall01_01_Regular_Orange_Circle_Complete_500x500.webm`],
                        purple: [lg`Energy/EnergyWall01_01_Regular_Purple_Circle_Complete_500x500.webm`],
                        red: [lg`Energy/EnergyWall01_01_Regular_Red_Circle_Complete_500x500.webm`],
                    }
                }
            },
            fire: {
                groundcrack: {
                    '01': {
                        darkred: [lg`Fire/GroundCrackLoop_01_Dark_Red_600x600.webm`],
                    },
                    '02': {
                        darkred: [lg`Fire/GroundCrackLoop_02_Dark_Red_600x600.webm`],
                    },
                    '03': {
                        darkred: [lg`Fire/GroundCrackLoop_03_Dark_Red_600x600.webm`],
                    },
                },    
            },
            generic: {
                ui: {
                    skull: {
                        darkred: [lg`UI/IconSkull_01_Dark_Red_200x200.webm`],
                    },
                },    
            },
            lightning: {
                strike: {
                    '01': {
                        red: [
                            lg`Lightning/LightningStrike01_01_Regular_Red_800x800.webm`,
                            lg`Lightning/LightningStrike01_02_Regular_Red_800x800.webm`,
                            lg`Lightning/LightningStrike01_03_Regular_Red_800x800.webm`,
                            lg`Lightning/LightningStrike01_04_Regular_Red_800x800.webm`,
                            lg`Lightning/LightningStrike01_05_Regular_Red_800x800.webm`,
                            lg`Lightning/LightningStrike01_06_Regular_Red_800x800.webm`,
                        ],
                    }
                },
            },
            magicsign: {
                _free:['abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion',
                'necromancy', 'transmutation'],
                abjuration: {
                    _free: ['runecomplete'],
                    runecomplete: {
                        _free: ['blue'],
                        blue: [lg`Magic_Signs/Runes/AbjurationRuneComplete_01_Regular_Blue_400x400.webm`],
                        green: [lg`Magic_Signs/Runes/AbjurationRuneComplete_01_Regular_Green_400x400.webm`],
                        pink: [lg`Magic_Signs/Runes/AbjurationRuneComplete_01_Regular_Pink_400x400.webm`],
                        purple: [lg`Magic_Signs/Runes/AbjurationRuneComplete_01_Regular_Purple_400x400.webm`],
                        red: [lg`Magic_Signs/Runes/AbjurationRuneComplete_01_Regular_Red_400x400.webm`],
                        yellow: [lg`Magic_Signs/Runes/AbjurationRuneComplete_01_Regular_Yellow_400x400.webm`],
                    }
                },
                conjuration: {
                    _free: ['runecomplete'],
                    runecomplete: {
                        _free: ['yellow'],
                        blue: [lg`Magic_Signs/Runes/ConjurationRuneComplete_01_Regular_Blue_400x400.webm`],
                        green: [lg`Magic_Signs/Runes/ConjurationRuneComplete_01_Regular_Green_400x400.webm`],
                        pink: [lg`Magic_Signs/Runes/ConjurationRuneComplete_01_Regular_Pink_400x400.webm`],
                        purple: [lg`Magic_Signs/Runes/ConjurationRuneComplete_01_Regular_Purple_400x400.webm`],
                        red: [lg`Magic_Signs/Runes/ConjurationRuneComplete_01_Regular_Red_400x400.webm`],
                        yellow: [lg`Magic_Signs/Runes/ConjurationRuneComplete_01_Regular_Yellow_400x400.webm`],
                    }
                },
                divination: {
                    _free: ['runecomplete'],
                    runecomplete: {
                        _free: ['blue'],
                        blue: [lg`Magic_Signs/Runes/DivinationRuneComplete_01_Regular_Blue_400x400.webm`],
                        green: [lg`Magic_Signs/Runes/DivinationRuneComplete_01_Regular_Green_400x400.webm`],
                        pink: [lg`Magic_Signs/Runes/DivinationRuneComplete_01_Regular_Pink_400x400.webm`],
                        purple: [lg`Magic_Signs/Runes/DivinationRuneComplete_01_Regular_Purple_400x400.webm`],
                        red: [lg`Magic_Signs/Runes/DivinationRuneComplete_01_Regular_Red_400x400.webm`],
                        yellow: [lg`Magic_Signs/Runes/DivinationRuneComplete_01_Regular_Yellow_400x400.webm`],
                    }
                },
                enchantment: {
                    _free: ['runecomplete'],
                    runecomplete: {
                        _free: ['pink'],
                        blue: [lg`Magic_Signs/Runes/EnchantmentRuneComplete_01_Regular_Blue_400x400.webm`],
                        green: [lg`Magic_Signs/Runes/EnchantmentRuneComplete_01_Regular_Green_400x400.webm`],
                        pink: [lg`Magic_Signs/Runes/EnchantmentRuneComplete_01_Regular_Pink_400x400.webm`],
                        purple: [lg`Magic_Signs/Runes/EnchantmentRuneComplete_01_Regular_Purple_400x400.webm`],
                        red: [lg`Magic_Signs/Runes/EnchantmentRuneComplete_01_Regular_Red_400x400.webm`],
                        yellow: [lg`Magic_Signs/Runes/EnchantmentRuneComplete_01_Regular_Yellow_400x400.webm`],
                    }
                },
                evocation: {
                    _free: ['runecomplete'],
                    runecomplete: {
                        _free: ['red'],
                        blue: [lg`Magic_Signs/Runes/EvocationRuneComplete_01_Regular_Blue_400x400.webm`],
                        green: [lg`Magic_Signs/Runes/EvocationRuneComplete_01_Regular_Green_400x400.webm`],
                        pink: [lg`Magic_Signs/Runes/EvocationRuneComplete_01_Regular_Pink_400x400.webm`],
                        purple: [lg`Magic_Signs/Runes/EvocationRuneComplete_01_Regular_Purple_400x400.webm`],
                        red: [lg`Magic_Signs/Runes/EvocationRuneComplete_01_Regular_Red_400x400.webm`],
                        yellow: [lg`Magic_Signs/Runes/EvocationRuneComplete_01_Regular_Yellow_400x400.webm`],
                    }
                },
                illusion: {
                    _free: ['runecomplete'],
                    runecomplete: {
                        _free: ['purple'],
                        blue: [lg`Magic_Signs/Runes/IllusionRuneComplete_01_Regular_Blue_400x400.webm`],
                        green: [lg`Magic_Signs/Runes/IllusionRuneComplete_01_Regular_Green_400x400.webm`],
                        pink: [lg`Magic_Signs/Runes/IllusionRuneComplete_01_Regular_Pink_400x400.webm`],
                        purple: [lg`Magic_Signs/Runes/IllusionRuneComplete_01_Regular_Purple_400x400.webm`],
                        red: [lg`Magic_Signs/Runes/IllusionRuneComplete_01_Regular_Red_400x400.webm`],
                        yellow: [lg`Magic_Signs/Runes/IllusionRuneComplete_01_Regular_Yellow_400x400.webm`],
                    }
                },
                necromancy: {
                    _free: ['runecomplete'],
                    runecomplete: {
                        _free: ['green'],
                        blue: [lg`Magic_Signs/Runes/NecromancyRuneComplete_01_Regular_Blue_400x400.webm`],
                        green: [lg`Magic_Signs/Runes/NecromancyRuneComplete_01_Regular_Green_400x400.webm`],
                        pink: [lg`Magic_Signs/Runes/NecromancyRuneComplete_01_Regular_Pink_400x400.webm`],
                        purple: [lg`Magic_Signs/Runes/NecromancyRuneComplete_01_Regular_Purple_400x400.webm`],
                        red: [lg`Magic_Signs/Runes/NecromancyRuneComplete_01_Regular_Red_400x400.webm`],
                        yellow: [lg`Magic_Signs/Runes/NecromancyRuneComplete_01_Regular_Yellow_400x400.webm`],
                    }
                },
                transmutation: {
                    _free: ['runecomplete'],
                    runecomplete: {
                        _free: ['yellow'],
                        blue: [lg`Magic_Signs/Runes/TransmutationRuneComplete_01_Regular_Blue_400x400.webm`],
                        green: [lg`Magic_Signs/Runes/TransmutationRuneComplete_01_Regular_Green_400x400.webm`],
                        pink: [lg`Magic_Signs/RunesTransmutationRuneComplete_01_Regular_Pink_400x400.webm`],
                        purple: [lg`Magic_Signs/Runes/TransmutationRuneComplete_01_Regular_Purple_400x400.webm`],
                        red: [lg`Magic_Signs/Runes/TransmutationRuneComplete_01_Regular_Red_400x400.webm`],
                        yellow: [lg`Magic_Signs/Runes/TransmutationRuneComplete_01_Regular_Yellow_400x400.webm`],
                    }
                }
            },
            shieldfx: {
                fire: {
                    '01': {
                        blue: [lg`Fire/ShieldFireAbove01_01_Regular_Blue_400x400.webm`],
                        purple: [lg`Fire/ShieldFireAbove01_01_Regular_Purple_400x400.webm`],
                    },
                    '03': {
                        blue: [lg`Fire/ShieldFireAbove01_03_Regular_Blue_400x400.webm`],
                        purple: [lg`Fire/ShieldFireAbove01_03_Regular_Purple_400x400.webm`],
                    },
                },    
            },
            spell: {
                mistystep: {
                    '01': {
                        pink: [l2`Misty_Step/MistyStep_01_Regular_Pink_400x400.webm`],
                    },
                    '02': {
                        pink: [l2`Misty_Step/MistyStep_02_Regular_Pink_400x400.webm`],
                    }
                },
                shatter: {
                    '01': {
                        darkred: [l2`Shatter/Shatter_01_Dark_Red_400x400.webm`],
                    }
                },
            },
        },
    }
    return patreonDB054;
}