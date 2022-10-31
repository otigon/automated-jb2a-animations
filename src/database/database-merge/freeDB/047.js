export async function db047(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const lg = prefix('Generic')

    const freeDB047 = {
        range: {
            weapon: {
                missile: {
                    '01': {
                        blue: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_90ft_4000x400.webm`],
                        }
                    },
                    '02': {
                        white: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Missile02_01_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Missile02_01_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Missile02_01_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Missile02_01_Regular_White_90ft_4000x400.webm`],
                        }
                    },
                    '03': {
                        white: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Missile03_01_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Missile03_01_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Missile03_01_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Missile03_01_Regular_White_90ft_4000x400.webm`],
                        }
                    },
                    '04': {
                        purplepink: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Missile04_01_Regular_PinkPurple_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Missile04_01_Regular_PinkPurple_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Missile04_01_Regular_PinkPurple_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Missile04_01_Regular_PinkPurple_90ft_4000x400.webm`],
                        }
                    },
                }
            },
        },
        static: {
            eyes: {
                single: {
                    '01': {
                        darkgreen: [lg`Eyes/Eyes_Single01_01_Dark_Green_300x300.webm`],
                    },
                    '02': {
                        darkgreen: [lg`Eyes/Eyes_Single01_02_Dark_Green_300x300.webm`],
                    },
                    '03': {
                        darkgreen: [lg`Eyes/Eyes_Single01_03_Dark_Green_300x300.webm`],
                    },
                },
                few: {
                    '01': {
                        darkgreen: [lg`Eyes/Eyes_Few01_01_Dark_Green_600x600.webm`],
                    },
                    '02': {
                        darkgreen: [lg`Eyes/Eyes_Few01_02_Dark_Green_600x600.webm`],
                    },
                    '03': {
                        darkgreen: [lg`Eyes/Eyes_Few01_03_Dark_Green_600x600.webm`],
                    },
                },
                many: {
                    '01': {
                        darkgreen: [lg`Eyes/Eyes_Many01_01_Dark_Green_600x600.webm`],
                    },
                    '02': {
                        darkgreen: [lg`Eyes/Eyes_Many01_02_Dark_Green_600x600.webm`],
                    },
                    '03': {
                        darkgreen: [lg`Eyes/Eyes_Many01_03_Dark_Green_600x600.webm`],
                    },
                }
            },
            shrapnel: {
                flask: {
                    '01': {
                        white: [
                            lg`Explosion/TopFractureFlask01_01_400x400.webm`,
                            lg`Explosion/TopFractureFlask02_01_400x400.webm`,
                            lg`Explosion/TopFractureFlask03_01_400x400.webm`
                        ]
                    }
                }
            },
            sideImpact: {
                flask: {
                    "01": {
                        white: [
                            lg`Explosion/SideFractureFlask01_01_800x400.webm`,
                            lg`Explosion/SideFractureFlask01_02_400x400.webm`,
                        ]
                    },
                }
            },
        },
    }
    return freeDB047;
}