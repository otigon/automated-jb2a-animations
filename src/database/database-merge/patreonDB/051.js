export async function db051(path) {

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
    const patreonDB051 = {
        range: {
            _template: 'ranged',
            _free: [],
            weapon: {
                boomerang: {
                    '01': {
                        white: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Boomerang01_01_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Boomerang01_01_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Boomerang01_01_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Boomerang01_01_Regular_White_90ft_4000x400.webm`],
                        }
                    },
                    '02': {
                        white: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Boomerang01_02_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Boomerang01_02_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Boomerang01_02_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Boomerang01_02_Regular_White_90ft_4000x400.webm`]
                        }
                    }
                },
                bullet: {
                    '1': {
                        purple: {
                            '05ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Purple_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Purple_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Purple_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Purple_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Purple_90ft_4000x400.webm`]
                        },
                    },
                    '2': {
                        purple: {
                            '05ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Purple_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Purple_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Purple_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Purple_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Purple_90ft_4000x400.webm`]
                        },
                    },
                    '3': {
                        purple: {
                            '05ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Purple_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Purple_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Purple_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Purple_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Purple_90ft_4000x400.webm`]
                        },
                    }
                },
                snipe: {
                    '01': {
                        purple: {
                            '05ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Purple_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Purple_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Purple_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Purple_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Purple_90ft_4000x400.webm`]
                        },
                    }
                },
                triboomerang: {
                    '01': {
                        white: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Boomerang02_01_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Boomerang02_01_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Boomerang02_01_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Boomerang02_01_Regular_White_90ft_4000x400.webm`],
                        }
                    },
                    '02': {
                        white: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Boomerang02_02_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Boomerang02_02_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Boomerang02_02_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Boomerang02_02_Regular_White_90ft_4000x400.webm`]
                        }
                    }
                },
            },
            spell: {
                fireballbeam: {
                    '01': {
                        darkgreen: {
                            '05ft': [l3`Fireball/FireballBeam_01_Dark_Green_05ft_600x400.webm`],
                            '15ft': [l3`Fireball/FireballBeam_01_Dark_Green_15ft_1000x400.webm`],
                            '30ft': [l3`Fireball/FireballBeam_01_Dark_Green_30ft_1600x400.webm`],
                            '60ft': [l3`Fireball/FireballBeam_01_Dark_Green_60ft_2800x400.webm`],
                            '90ft': [l3`Fireball/FireballBeam_01_Dark_Green_90ft_4000x400.webm`]
                        }
                    },
                },
            },
        },
        templatefx: {
            _free: [],
            circle: {
                fireball: {
                    loop: {
                        darkgreen: [l3`Fireball/FireballLoop_01_Dark_Green_800x800.webm`],
                    },
                    explode: {
                        darkgreen: [l3`Fireball/FireballExplosion_01_Dark_Green_800x800.webm`],
                    },
                    nodebris: {
                        darkgreen: [l3`Fireball/FireballLoopNoDebris_01_Dark_Green_800x800.webm`],
                    },
                },
            },
            square: {
                entangle: {
                    '02': {
                        grey: [l1`Entangle/EntangleLoop02_04_Regular_Grey_500x500.webm`]
                    },
                    complete: {
                        grey: [l1`Entangle/Entangle02_04_Regular_Grey_500x500.webm`]
                    }
                }
            },
            vines: {
                complete: {
                    liquid: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                            },
                        grey: [
                            lg`Nature/GroupVineLiquid01_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid01_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid01_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid01_03_Regular_Grey_300x300.webm`,
                            lg`Nature/GroupVineLiquid02_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid02_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid02_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid02_03_Regular_Grey_300x300.webm`,
                            lg`Nature/GroupVineLiquid03_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid03_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid03_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid03_03_Regular_Grey_300x300.webm`,

                        ]
                    },
                },
                loop: {
                    liquid: {
                        grey: [
                            lg`Nature/GroupVineLiquidLoop01_01_Regular_Grey_300x300.webm`,
                            lg`Nature/GroupVineLiquidLoop02_01_Regular_Grey_300x300.webm`,
                            lg`Nature/GroupVineLiquidLoop03_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop01_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop01_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop01_03_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop02_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop02_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop02_03_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop03_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop03_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop03_03_Regular_Grey_300x300.webm`,
                        ]
                    },
                },
            },
        },
        static: {
            _free:['leaves', 'marker'],
            leaves: {
                _free:['outburst'],
                complete: {
                    '01': {
                        orangered: [lg`Nature/SwirlingLeavesComplete01_01_Regular_OrangeRed_400x400.webm`],
                        pink: [lg`Nature/SwirlingLeavesComplete01_01_Regular_Pink_400x400.webm`],
                    },
                    '02': {
                        orangered: [lg`Nature/SwirlingLeavesComplete01_02_Regular_OrangeRed_400x400.webm`],
                        pink: [lg`Nature/SwirlingLeavesComplete01_02_Regular_Pink_400x400.webm`],
                    },
                    '03': {
                        orangered: [lg`Nature/SwirlingLeavesComplete02_01_Regular_OrangeRed_400x400.webm`],
                        pink: [lg`Nature/SwirlingLeavesComplete02_01_Regular_Pink_400x400.webm`],
                    },
                },
                loop: {
                    '01': {
                        orangered: [lg`Nature/SwirlingLeavesLoop01_01_Regular_OrangeRed_400x400.webm`],
                        pink: [lg`Nature/SwirlingLeavesLoop01_01_Regular_Pink_400x400.webm`],
                    },
                    '02': {
                        orangered: [lg`Nature/SwirlingLeavesLoop01_02_Regular_OrangeRed_400x400.webm`],
                        pink: [lg`Nature/SwirlingLeavesLoop01_02_Regular_Pink_400x400.webm`],
                    },
                    '03': {
                        orangered: [lg`Nature/SwirlingLeavesLoop02_01_Regular_OrangeRed_400x400.webm`],
                        pink: [lg`Nature/SwirlingLeavesLoop02_01_Regular_Pink_400x400.webm`],
                    },
                },
                outburst: {
                    _free:['01'],
                    '01': {
                        _free:['pink'],
                        purpleblue: [lg`Nature/SwirlingLeavesOutburst_01_01_Regular_BluePurple_400x400.webm`],
                        greenorange: [lg`Nature/SwirlingLeavesOutburst_01_01_Regular_GreenOrange_400x400.webm`],
                        orangered: [lg`Nature/SwirlingLeavesOutburst_01_01_Regular_OrangeRed_400x400.webm`],
                        pink: [lg`Nature/SwirlingLeavesOutburst_01_01_Regular_Pink_400x400.webm`],
                    }
                },
            },
            magicsign: {
                abjuration: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        blue: [lg`Magic_Signs/AbjurationCircleComplete_02_Regular_Blue_800x800.webm`],
                        green: [lg`Magic_Signs/AbjurationCircleComplete_02_Regular_Green_800x800.webm`],
                        pink: [lg`Magic_Signs/AbjurationCircleComplete_02_Regular_Pink_800x800.webm`],
                        purple: [lg`Magic_Signs/AbjurationCircleComplete_02_Regular_Purple_800x800.webm`],
                        red: [lg`Magic_Signs/AbjurationCircleComplete_02_Regular_Red_800x800.webm`],
                        yellow: [lg`Magic_Signs/AbjurationCircleComplete_02_Regular_Yellow_800x800.webm`],
                    }
                },
                conjuration: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        blue: [lg`Magic_Signs/ConjurationCircleComplete_02_Regular_Blue_800x800.webm`],
                        green: [lg`Magic_Signs/ConjurationCircleComplete_02_Regular_Green_800x800.webm`],
                        pink: [lg`Magic_Signs/ConjurationCircleComplete_02_Regular_Pink_800x800.webm`],
                        purple: [lg`Magic_Signs/ConjurationCircleComplete_02_Regular_Purple_800x800.webm`],
                        red: [lg`Magic_Signs/ConjurationCircleComplete_02_Regular_Red_800x800.webm`],
                        yellow: [lg`Magic_Signs/ConjurationCircleComplete_02_Regular_Yellow_800x800.webm`],
                    }
                },
                divination: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        blue: [lg`Magic_Signs/DivinationCircleComplete_02_Regular_Blue_800x800.webm`],
                        green: [lg`Magic_Signs/DivinationCircleComplete_02_Regular_Green_800x800.webm`],
                        pink: [lg`Magic_Signs/DivinationCircleComplete_02_Regular_Pink_800x800.webm`],
                        purple: [lg`Magic_Signs/DivinationCircleComplete_02_Regular_Purple_800x800.webm`],
                        red: [lg`Magic_Signs/DivinationCircleComplete_02_Regular_Red_800x800.webm`],
                        yellow: [lg`Magic_Signs/DivinationCircleComplete_02_Regular_Yellow_800x800.webm`],
                    }
                },
                enchantment: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        blue: [lg`Magic_Signs/EnchantmentCircleComplete_02_Regular_Blue_800x800.webm`],
                        green: [lg`Magic_Signs/EnchantmentCircleComplete_02_Regular_Green_800x800.webm`],
                        pink: [lg`Magic_Signs/EnchantmentCircleComplete_02_Regular_Pink_800x800.webm`],
                        purple: [lg`Magic_Signs/EnchantmentCircleComplete_02_Regular_Purple_800x800.webm`],
                        red: [lg`Magic_Signs/EnchantmentCircleComplete_02_Regular_Red_800x800.webm`],
                        yellow: [lg`Magic_Signs/EnchantmentCircleComplete_02_Regular_Yellow_800x800.webm`],
                    }
                },
                evocation: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        blue: [lg`Magic_Signs/EvocationCircleComplete_02_Regular_Blue_800x800.webm`],
                        green: [lg`Magic_Signs/EvocationCircleComplete_02_Regular_Green_800x800.webm`],
                        pink: [lg`Magic_Signs/EvocationCircleComplete_02_Regular_Pink_800x800.webm`],
                        purple: [lg`Magic_Signs/EvocationCircleComplete_02_Regular_Purple_800x800.webm`],
                        red: [lg`Magic_Signs/EvocationCircleComplete_02_Regular_Red_800x800.webm`],
                        yellow: [lg`Magic_Signs/EvocationCircleComplete_02_Regular_Yellow_800x800.webm`],
                    }
                },
                illusion: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        blue: [lg`Magic_Signs/IllusionCircleComplete_02_Regular_Blue_800x800.webm`],
                        green: [lg`Magic_Signs/IllusionCircleComplete_02_Regular_Green_800x800.webm`],
                        pink: [lg`Magic_Signs/IllusionCircleComplete_02_Regular_Pink_800x800.webm`],
                        purple: [lg`Magic_Signs/IllusionCircleComplete_02_Regular_Purple_800x800.webm`],
                        red: [lg`Magic_Signs/IllusionCircleComplete_02_Regular_Red_800x800.webm`],
                        yellow: [lg`Magic_Signs/IllusionCircleComplete_02_Regular_Yellow_800x800.webm`],
                    }
                },
                necromancy: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        blue: [lg`Magic_Signs/NecromancyCircleComplete_02_Regular_Blue_800x800.webm`],
                        green: [lg`Magic_Signs/NecromancyCircleComplete_02_Regular_Green_800x800.webm`],
                        pink: [lg`Magic_Signs/NecromancyCircleComplete_02_Regular_Pink_800x800.webm`],
                        purple: [lg`Magic_Signs/NecromancyCircleComplete_02_Regular_Purple_800x800.webm`],
                        red: [lg`Magic_Signs/NecromancyCircleComplete_02_Regular_Red_800x800.webm`],
                        yellow: [lg`Magic_Signs/NecromancyCircleComplete_02_Regular_Yellow_800x800.webm`],
                    }
                },
                transmutation: {
                    complete: {
                        _markers: {
                            loop: { start: 3000, end: 8000 },
                            forcedEnd: 8000
                        },
                        blue: [lg`Magic_Signs/TransmutationCircleComplete_02_Regular_Blue_800x800.webm`],
                        green: [lg`Magic_Signs/TransmutationCircleComplete_02_Regular_Green_800x800.webm`],
                        pink: [lg`Magic_Signs/TransmutationCircleComplete_02_Regular_Pink_800x800.webm`],
                        purple: [lg`Magic_Signs/TransmutationCircleComplete_02_Regular_Purple_800x800.webm`],
                        red: [lg`Magic_Signs/TransmutationCircleComplete_02_Regular_Red_800x800.webm`],
                        yellow: [lg`Magic_Signs/TransmutationCircleComplete_02_Regular_Yellow_800x800.webm`],
                    }
                },
            },
            marker: {
                _free:['energystrand'],
                energystrand: {
                    _free:['02'],
                    '02': {
                        _free:['purpleblue'],
                        purpleblue: [lg`Marker/EnergyStrands02_01_Regular_BluePurple_400x400.webm`],
                        green: [lg`Marker/EnergyStrands02_01_Regular_Green_400x400.webm`],
                        greenorange: [lg`Marker/EnergyStrands02_01_Regular_GreenOrange_400x400.webm`],
                        orangered: [lg`Marker/EnergyStrands02_01_Regular_OrangeRed_400x400.webm`],
                    }
                },
            },
            spell: {
                entangle: {
                    '02': {
                        grey: [l1`Entangle/EntangleLoop02_04_Regular_Grey_500x500.webm`]
                    },
                    complete: {
                        grey: [l1`Entangle/Entangle02_04_Regular_Grey_500x500.webm`]
                    }
                },
                fireball: {
                    loop: {
                        darkgreen: [l3`Fireball/FireballLoop_01_Dark_Green_800x800.webm`],
                    },
                    explode: {
                        darkgreen: [l3`Fireball/FireballExplosion_01_Dark_Green_800x800.webm`],
                    },
                    nodebris: {
                        darkgreen: [l3`Fireball/FireballLoopNoDebris_01_Dark_Green_800x800.webm`],
                    },
                },
            },
            vines: {
                complete: {
                    liquid: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                            },
                        grey: [
                            lg`Nature/GroupVineLiquid01_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid01_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid01_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid01_03_Regular_Grey_300x300.webm`,
                            lg`Nature/GroupVineLiquid02_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid02_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid02_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid02_03_Regular_Grey_300x300.webm`,
                            lg`Nature/GroupVineLiquid03_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid03_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid03_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquid03_03_Regular_Grey_300x300.webm`,

                        ]
                    },
                },
                loop: {
                    liquid: {
                        grey: [
                            lg`Nature/GroupVineLiquidLoop01_01_Regular_Grey_300x300.webm`,
                            lg`Nature/GroupVineLiquidLoop02_01_Regular_Grey_300x300.webm`,
                            lg`Nature/GroupVineLiquidLoop03_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop01_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop01_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop01_03_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop02_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop02_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop02_03_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop03_01_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop03_02_Regular_Grey_300x300.webm`,
                            lg`Nature/VineLiquidLoop03_03_Regular_Grey_300x300.webm`,
                        ]
                    },
                },
            },
        },
        return: {
            _template: 'ranged',
            _free: [],
            weapon: {
                boomerang: {
                    '01': {
                        white: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Boomerang01_01_Regular_White_Return_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Boomerang01_01_Regular_White_Return_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Boomerang01_01_Regular_White_Return_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Boomerang01_01_Regular_White_Return_90ft_4000x400.webm`],
                        }
                    },
                },
                triboomerang: {
                    '01': {
                        white: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Boomerang02_01_Regular_White_Return_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Boomerang02_01_Regular_White_Return_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Boomerang02_01_Regular_White_Return_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Boomerang02_01_Regular_White_Return_90ft_4000x400.webm`],
                        }
                    },
                },
            }
        }
    }
    return patreonDB051;
}