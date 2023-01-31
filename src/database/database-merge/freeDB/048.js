export async function db048(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const l1 = prefix('1st_Level')
    const lg = prefix('Generic')

    const freeDB048 = {
        templatefx: {
            circle: {
                water: {
                    '01': {
                        blue: [lg`Liquid/WaterSplashLoop_01_01_Regular_Blue_600x600.webm`],
                    }
                },
            },
            cone: {
                water: {
                    '01': {
                        blue: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Blue_600x600.webm`],
                    }
                }
            },
            square: {
                entangle: {
                    '02': {
                        green: [l1`Entangle/EntangleLoop02_02_Regular_Green_500x500.webm`],
                    },
                    complete: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                        },        
                        green: [l1`Entangle/Entangle02_02_Regular_Green_500x500.webm`],
                    }
                }
            },
            vines: {
                complete: {
                    nature: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                            },            
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
                },
                loop: {
                    nature: {
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
                },
            }
        },
        static: {
            generic: {
                water: {
                    '01': {
                        blue: [lg`Liquid/WaterSplashLoop_01_01_Regular_Blue_600x600.webm`],
                    }
                }
            },
            vines: {
                complete: {
                    nature: {
                        _markers: {
                            loop: { start: 2125, end: 6250 }
                            },            
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
                },
                loop: {
                    nature: {
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
                },
            }
        },
    }
    return freeDB048;

}