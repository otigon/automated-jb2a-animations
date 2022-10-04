export async function db050(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const lg = prefix('Generic')

    const patreonDB050 = {
        static: {
            plants: {
                circle: {
                    complete: {
                        greenyellow: [lg`Nature/PlantGrowthRound03_01_Regular_GreenYellow_500x500.webm`],
                    },
                    loop: {
                        greenyellow: [lg`Nature/PlantGrowthRoundLoop03_01_Regular_GreenYellow_300x300.webm`],
                    },
                },
                ring: {
                    complete: {
                        greenyellow: [lg`Nature/PlantGrowthRing03_01_Regular_GreenYellow_500x500.webm`],
                    },
                    loop: {
                        greenyellow: [lg`Nature/PlantGrowthRingLoop03_01_Regular_GreenYellow_500x500.webm`],
                    },
                    pulse: {
                        greenyellow: [lg`Nature/PlantGrowthRingPulse03_01_Regular_GreenYellow_500x500.webm`],
                    },
                },
                square: {
                    complete: {
                        greenyellow: [lg`Nature/PlantGrowthSquare03_01_Regular_GreenYellow_500x500.webm`],
                    },
                    loop: {
                        greenyellow: [lg`Nature/PlantGrowthSquareLoop03_01_Regular_GreenYellow_500x500.webm`],
                    },
                },
            },
        },
    }
    return patreonDB050;
}