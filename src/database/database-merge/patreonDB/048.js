export async function db048(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const l1 = prefix('1st_Level')
    const lg = prefix('Generic')

    const patreonDB048 = {
        templatefx: {
            _free:['circle', 'cone', 'square', 'vines'],
            circle: {
                _free:['water'],
                water: {
                    _free:['01'],
                    '01': {
                        _free:['blue'],
                        black: [lg`Liquid/WaterSplashLoop_01_01_Regular_Black_600x600.webm`],
                        blue: [lg`Liquid/WaterSplashLoop_01_01_Regular_Blue_600x600.webm`],
                        green: [lg`Liquid/WaterSplashLoop_01_01_Regular_Green_600x600.webm`],
                        purple: [lg`Liquid/WaterSplashLoop_01_01_Regular_Purple_600x600.webm`],
                        red: [lg`Liquid/WaterSplashLoop_01_01_Regular_Red_600x600.webm`],
                    }
                },
            },
            cone: {
                _free:['water'],
                water: {
                    _free:['01'],
                    '01': {
                        _free:['blue'],
                        black: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Black_600x600.webm`],
                        blue: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Blue_600x600.webm`],
                        green: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Green_600x600.webm`],
                        purple: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Purple_600x600.webm`],
                        red: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Red_600x600.webm`],
                    }
                }
            },
            square: {
                _free:['entangle'],
                entangle: {
                    _free:['02', 'complete'],
                    '02': {
                        _free:['green'],
                        purplepink: [l1`Entangle/EntangleLoop02_01_Dark_PinkPurple_500x500.webm`],
                        green: [l1`Entangle/EntangleLoop02_02_Regular_Green_500x500.webm`],
                        darkblue: [l1`Entangle/EntangleLoop02_03_Dark_Blue_500x500.webm`],
                    },
                    complete: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                        },
                        _free:['green'],
                        purplepink: [l1`Entangle/Entangle02_01_Dark_PinkPurple_500x500.webm`],
                        green: [l1`Entangle/Entangle02_02_Regular_Green_500x500.webm`],
                        darkblue: [l1`Entangle/Entangle02_03_Dark_Blue_500x500.webm`],
                    }
                }
            },
            vines: {
                _free:['complete', 'loop'],
                complete: {
                    _free:['nature'],
                    nature: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                            },
                        _free:['greem'],        
                        green: [
                            lg`Nature/GroupVineNature01_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature01_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature01_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature01_03_Regular_Green_300x300.webm`,
                            lg`Nature/GroupVineNature02_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature02_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature02_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature02_03_Regular_Green_300x300.webm`,
                            lg`Nature/GroupVineNature03_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature03_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature03_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature03_03_Regular_Green_300x300.webm`,

                        ]
                    },
                    elemental: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                            },            
                        darkblue: [
                            lg`Nature/GroupVineElemental01_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental01_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental01_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental01_03_Dark_Blue_300x300.webm`,
                            lg`Nature/GroupVineElemental02_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental02_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental02_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental02_03_Dark_Blue_300x300.webm`,
                            lg`Nature/GroupVineElemental03_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental03_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental03_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental03_03_Dark_Blue_300x300.webm`,
                        ]
                    },
                    void: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                            },            
                        purplepink: [
                            lg`Nature/GroupVineVoid01_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid01_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid01_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid01_03_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/GroupVineVoid02_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid02_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid02_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid02_03_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/GroupVineVoid03_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid03_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid03_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid03_03_Dark_PinkPurple_300x300.webm`,
                        ]
                    },
                },
                loop: {
                    _free:['nature'],
                    nature: {
                        _free:['green'],
                        green: [
                            lg`Nature/GroupVineNatureLoop01_01_Regular_Green_300x300.webm`,
                            lg`Nature/GroupVineNatureLoop02_01_Regular_Green_300x300.webm`,
                            lg`Nature/GroupVineNatureLoop03_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop01_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop01_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop01_03_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop02_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop02_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop02_03_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop03_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop03_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop03_03_Regular_Green_300x300.webm`,
                        ]
                    },
                    elemental: {
                        darkblue: [
                            lg`Nature/GroupVineElementalLoop01_01_Dark_Blue_300x300.webm`,
                            lg`Nature/GroupVineElementalLoop02_01_Dark_Blue_300x300.webm`,
                            lg`Nature/GroupVineElementalLoop03_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop01_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop01_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop01_03_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop02_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop02_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop02_03_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop03_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop03_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop03_03_Dark_Blue_300x300.webm`,
                        ]
                    },
                    void: {
                        purplepink: [
                            lg`Nature/GroupVineVoidLoop01_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/GroupVineVoidLoop02_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/GroupVineVoidLoop03_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop01_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop01_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop01_03_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop02_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop02_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop02_03_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop03_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop03_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop03_03_Dark_PinkPurple_300x300.webm`,
                        ]
                    }
                },
            }
        },
        static: {
            _free:['generic', 'vines', ],
            generic: {
                _free:['water'],
                water: {
                    _free:['01'],
                    '01': {
                        _free:['blue'],
                        black: [lg`Liquid/WaterSplashLoop_01_01_Regular_Black_600x600.webm`],
                        blue: [lg`Liquid/WaterSplashLoop_01_01_Regular_Blue_600x600.webm`],
                        green: [lg`Liquid/WaterSplashLoop_01_01_Regular_Green_600x600.webm`],
                        purple: [lg`Liquid/WaterSplashLoop_01_01_Regular_Purple_600x600.webm`],
                        red: [lg`Liquid/WaterSplashLoop_01_01_Regular_Red_600x600.webm`],
                    }
                }
            },
            liquid: {
                blob: {
                    '01': {
                        red: [lg`Liquid/LiquidBlob01_01_Regular_Red_400x400.webm`]
                    }
                }
            },
            spell: {
                entangle: {
                    '02': {
                        purplepink: [l1`Entangle/EntangleLoop02_01_Dark_PinkPurple_500x500.webm`],
                        green: [l1`Entangle/EntangleLoop02_02_Regular_Green_500x500.webm`],
                        darkblue: [l1`Entangle/EntangleLoop02_03_Dark_Blue_500x500.webm`],
                    },
                    complete: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                        },        
                        purplepink: [l1`Entangle/Entangle02_01_Dark_PinkPurple_500x500.webm`],
                        green: [l1`Entangle/Entangle02_02_Regular_Green_500x500.webm`],
                        darkblue: [l1`Entangle/Entangle02_03_Dark_Blue_500x500.webm`],
                    }
                }
            },
            vines: {
                _free:['complete', 'loop'],
                complete: {
                    _free:['nature'],
                    nature: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                            },
                        _free:['green'],
                        green: [
                            lg`Nature/GroupVineNature01_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature01_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature01_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature01_03_Regular_Green_300x300.webm`,
                            lg`Nature/GroupVineNature02_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature02_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature02_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature02_03_Regular_Green_300x300.webm`,
                            lg`Nature/GroupVineNature03_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature03_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature03_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNature03_03_Regular_Green_300x300.webm`,

                        ]
                    },
                    elemental: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                            },            
                        darkblue: [
                            lg`Nature/GroupVineElemental01_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental01_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental01_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental01_03_Dark_Blue_300x300.webm`,
                            lg`Nature/GroupVineElemental02_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental02_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental02_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental02_03_Dark_Blue_300x300.webm`,
                            lg`Nature/GroupVineElemental03_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental03_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental03_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElemental03_03_Dark_Blue_300x300.webm`,
                        ]
                    },
                    void: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                            },            
                        purplepink: [
                            lg`Nature/GroupVineVoid01_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid01_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid01_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid01_03_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/GroupVineVoid02_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid02_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid02_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid02_03_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/GroupVineVoid03_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid03_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid03_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoid03_03_Dark_PinkPurple_300x300.webm`,
                        ]
                    },
                },
                loop: {
                    _free:['nature'],
                    nature: {
                        _free:['green'],
                        green: [
                            lg`Nature/GroupVineNatureLoop01_01_Regular_Green_300x300.webm`,
                            lg`Nature/GroupVineNatureLoop02_01_Regular_Green_300x300.webm`,
                            lg`Nature/GroupVineNatureLoop03_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop01_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop01_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop01_03_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop02_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop02_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop02_03_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop03_01_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop03_02_Regular_Green_300x300.webm`,
                            lg`Nature/VineNatureLoop03_03_Regular_Green_300x300.webm`,
                        ]
                    },
                    elemental: {
                        darkblue: [
                            lg`Nature/GroupVineElementalLoop01_01_Dark_Blue_300x300.webm`,
                            lg`Nature/GroupVineElementalLoop02_01_Dark_Blue_300x300.webm`,
                            lg`Nature/GroupVineElementalLoop03_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop01_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop01_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop01_03_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop02_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop02_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop02_03_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop03_01_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop03_02_Dark_Blue_300x300.webm`,
                            lg`Nature/VineElementalLoop03_03_Dark_Blue_300x300.webm`,
                        ]
                    },
                    void: {
                        purplepink: [
                            lg`Nature/GroupVineVoidLoop01_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/GroupVineVoidLoop02_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/GroupVineVoidLoop03_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop01_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop01_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop01_03_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop02_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop02_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop02_03_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop03_01_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop03_02_Dark_PinkPurple_300x300.webm`,
                            lg`Nature/VineVoidLoop03_03_Dark_PinkPurple_300x300.webm`,
                        ]
                    }
                },
            }
        },
    }
    return patreonDB048;

}