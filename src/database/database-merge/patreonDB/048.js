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
                        black: [lg`Liquid/WaterSplashLoop_01_01_Regular_Black_600x600.webm`],
                        blue: [lg`Liquid/WaterSplashLoop_01_01_Regular_Blue_600x600.webm`],
                        green: [lg`Liquid/WaterSplashLoop_01_01_Regular_Green_600x600.webm`],
                        purple: [lg`Liquid/WaterSplashLoop_01_01_Regular_Purple_600x600.webm`],
                        red: [lg`Liquid/WaterSplashLoop_01_01_Regular_Red_600x600.webm`],
                    }
                },
            },
            cone: {
                water: {
                    '01': {
                        black: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Black_600x600.webm`],
                        blue: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Blue_600x600.webm`],
                        green: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Green_600x600.webm`],
                        purple: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Purple_600x600.webm`],
                        red: [lg`Liquid/WaterSplashConeLoop_01_01_Regular_Red_600x600.webm`],
                    }
                }
            },
            ray: {

            },
            square: {
                entangle: {
                    '02': {
                        purplepink: [l1`Entangle/EntangleLoop02_01_Dark_PinkPurple_500x500.webm`],
                        green: [l1`Entangle/EntangleLoop02_02_Regular_Green_500x500.webm`],
                        darkblue: [l1`Entangle/EntangleLoop02_03_Dark_Blue_500x500.webm`],
                    }
                }
            },
        },
        static: {
            generic: {
                water: {
                    '01': {
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
        },
    }
    return patreonDB048;

}