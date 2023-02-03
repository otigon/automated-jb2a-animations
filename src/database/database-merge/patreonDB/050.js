export async function db050(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const l1 = prefix('1st_Level')
    const l7 = prefix('7th_Level')
    const lg = prefix('Generic')

    const patreonDB050 = {
        range: {
            _free: [],
            weapon: {
                boulder: {
                    '02': {
                        white: {
                            '05ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_02_Regular_White_05ft_600x500.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_02_Regular_White_15ft_1000x500.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_02_Regular_White_30ft_1600x500.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_02_Regular_White_60ft_2800x500.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_02_Regular_White_90ft_4000x500.webm`]    
                        }
                    }
                }
            },
        },
        templatefx: {
            _free: [],
            cone: {
                breathweaponspray01: {
                    burst: {
                        blue: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Ice01_Regular_Blue_Cone_Burst_800x800.webm`]
                    },
                    loop: {
                        blue: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Ice01_Regular_Blue_Cone_Loop_800x800.webm`]
                    },
                },
                breathweaponspray02: {
                    burst: {
                        blue: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Ice02_Regular_Blue_Cone_Burst_800x800.webm`]
                    },
                    loop: {
                        blue: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Ice02_Regular_Blue_Cone_Loop_800x800.webm`]
                    }
                }
            },
            ray: {
                breathweaponspray01: {
                    burst: {
                        blue: [lg`Template/Line/Breath_Weapon/Breathweapon02_Ice01_Regular_Blue_Line_Burst_1200x400.webm`]
                    },
                    loop: {
                        blue: [lg`Template/Line/Breath_Weapon/Breathweapon02_Ice01_Regular_Blue_Line_Loop_1200x400.webm`]
                    },
                }
            },
            square: {
                entangle: {
                    '02': {
                        darkorange: [l1`Entangle/EntangleLoop02_03_Dark_Orange_500x500.webm`]
                    },
                    complete: {
                        darkorange: [l1`Entangle/Entangle02_03_Dark_Orange_500x500.webm`]
                    }
                }
            },
            vines: {
                complete: {
                    elemental: {
                        darkorange: [
                            lg`Nature/GroupVineElemental01_01_Dark_Orange_300x300.webm`,
                            lg`Nature/GroupVineElemental02_01_Dark_Orange_300x300.webm`,
                            lg`Nature/GroupVineElemental03_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental01_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental01_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental01_03_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental02_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental02_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental02_03_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental03_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental03_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental03_03_Dark_Orange_300x300.webm`,
                        ]
                    },
                },
                loop: {
                    elemental: {
                        darkorange: [
                            lg`Nature/GroupVineElementalLoop01_01_Dark_Orange_300x300.webm`,
                            lg`Nature/GroupVineElementalLoop02_01_Dark_Orange_300x300.webm`,
                            lg`Nature/GroupVineElementalLoop03_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop01_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop01_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop01_03_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop02_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop02_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop02_03_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop03_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop03_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop03_03_Dark_Orange_300x300.webm`,
                        ]
                    },
                },
            }
        },
        static: {
            _free:['plants'],
            generic: {
                boulderimpact: {
                    '02': {
                        white: [lg`Impact/BoulderImpactNoCracks_01_Regular_White_500x500.webm`]
                    }
                }
            },
            plants: {
                _free:['circle', 'ring', 'square'],
                circle: {
                    _free:['complete', 'loop'],
                    complete: {
                        _markers: {
                            loop: { start: 2000, end: 6000 }
                        },
                        _free:['greenyellow'],
                        purpleblue: [lg`Nature/PlantGrowthRound01_01_Regular_BluePurple_500x500.webm`],
                        greenred: [lg`Nature/PlantGrowthRound02_01_Regular_GreenRed_500x500.webm`],
                        greenyellow: [lg`Nature/PlantGrowthRound03_01_Regular_GreenYellow_500x500.webm`]
                    },
                    loop: {
                        _free:['greenyellow'],
                        purpleblue: [lg`Nature/PlantGrowthRoundLoop01_01_Regular_BluePurple_500x500.webm`],
                        greenred: [lg`Nature/PlantGrowthRoundLoop02_01_Regular_GreenRed_500x500.webm`],
                        greenyellow: [lg`Nature/PlantGrowthRoundLoop03_01_Regular_GreenYellow_500x500.webm`]
                    },
                },
                ring: {
                    _free:['complete', 'loop', 'pulse'],
                    complete: {
                        _markers: {
                            loop: { start: 2000, end: 6000 }
                        },
                        _free:['greenyellow'],
                        purpleblue: [lg`Nature/PlantGrowthRing01_01_Regular_BluePurple_500x500.webm`],
                        greenred: [lg`Nature/PlantGrowthRing02_01_Regular_GreenRed_500x500.webm`],
                        greenyellow: [lg`Nature/PlantGrowthRing03_01_Regular_GreenYellow_500x500.webm`]
                    },
                    loop: {
                        _free:['greenyellow'],
                        purpleblue: [lg`Nature/PlantGrowthRingLoop01_01_Regular_BluePurple_500x500.webm`],
                        greenred: [lg`Nature/PlantGrowthRingLoop02_01_Regular_GreenRed_500x500.webm`],
                        greenyellow: [lg`Nature/PlantGrowthRingLoop03_01_Regular_GreenYellow_500x500.webm`]
                    },
                    pulse: {
                        _free:['greenyellow'],
                        purpleblue: [lg`Nature/PlantGrowthRingPulse01_01_Regular_BluePurple_500x500.webm`],
                        greenred: [lg`Nature/PlantGrowthRingPulse02_01_Regular_GreenRed_500x500.webm`],
                        greenyellow: [lg`Nature/PlantGrowthRingPulse03_01_Regular_GreenYellow_500x500.webm`]
                    },
                },
                square: {
                    _free:['complete', 'loop'],
                    complete: {
                        _markers: {
                            loop: { start: 2000, end: 6000 }
                        },
                        _free:['greenyellow'],
                        purpleblue: [lg`Nature/PlantGrowthSquare01_01_Regular_BluePurple_500x500.webm`],
                        greenred: [lg`Nature/PlantGrowthSquare02_01_Regular_GreenRed_500x500.webm`],
                        greenyellow: [lg`Nature/PlantGrowthSquare03_01_Regular_GreenYellow_500x500.webm`]
                    },
                    loop: {
                        _free:['greenyellow'],
                        purpleblue: [lg`Nature/PlantGrowthSquareLoop01_01_Regular_BluePurple_500x500.webm`],
                        greenred: [lg`Nature/PlantGrowthSquareLoop02_01_Regular_GreenRed_500x500.webm`],
                        greenyellow: [lg`Nature/PlantGrowthSquareLoop03_01_Regular_GreenYellow_500x500.webm`]
                    },
                },
            },
            spell: {
                entangle: {
                    '02': {
                        darkorange: [l1`Entangle/EntangleLoop02_03_Dark_Orange_500x500.webm`]
                    },
                    complete: {
                        darkorange: [l1`Entangle/Entangle02_03_Dark_Orange_500x500.webm`]
                    }
                },
                whirlwind: {
                    '01': {
                        whiteblue: [l7`Whirlwind/Whirlwind_01_BlueWhite_400x400.webm`],
                    }
                },    
            },
            vines: {
                complete: {
                    elemental: {
                        darkorange: [
                            lg`Nature/GroupVineElemental01_01_Dark_Orange_300x300.webm`,
                            lg`Nature/GroupVineElemental02_01_Dark_Orange_300x300.webm`,
                            lg`Nature/GroupVineElemental03_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental01_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental01_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental01_03_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental02_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental02_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental02_03_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental03_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental03_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElemental03_03_Dark_Orange_300x300.webm`,
                        ]
                    },
                },
                loop: {
                    elemental: {
                        darkorange: [
                            lg`Nature/GroupVineElementalLoop01_01_Dark_Orange_300x300.webm`,
                            lg`Nature/GroupVineElementalLoop02_01_Dark_Orange_300x300.webm`,
                            lg`Nature/GroupVineElementalLoop03_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop01_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop01_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop01_03_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop02_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop02_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop02_03_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop03_01_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop03_02_Dark_Orange_300x300.webm`,
                            lg`Nature/VineElementalLoop03_03_Dark_Orange_300x300.webm`,
                        ]
                    },
                },
            }
        },
    }
    return patreonDB050;
}