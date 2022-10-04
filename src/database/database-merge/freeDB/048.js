export async function db048(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const l1 = prefix('1st_Level')
    const lg = prefix('Generic')

    const patreonDB048 = {
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
            ray: {

            },
            square: {
                entangle: {
                    '02': {
                        green: [l1`Entangle/EntangleLoop02_02_Regular_Green_500x500.webm`],
                    }
                }
            },
        },
        static: {
            generic: {
                water: {
                    '01': {
                        blue: [lg`Liquid/WaterSplashLoop_01_01_Regular_Blue_600x600.webm`],
                    }
                }
            },
        },
    }
    return patreonDB048;

}