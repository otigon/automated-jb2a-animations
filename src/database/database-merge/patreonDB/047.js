export async function db047(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const l2 = prefix('2nd_Level')
    const lg = prefix('Generic')

    const patreonDB047 = {
        range: {
            _free:['weapon'],
            weapon: {
                _free:['missile'],
                missile: {
                    _free:['01', '02', '03', '04'],
                    '01': {
                        _free:['blue'],
                        blue: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Missile01_01_Regular_Blue_90ft_4000x400.webm`],
                        }
                    },
                    '02': {
                        _free:['white'],
                        white: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Missile02_01_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Missile02_01_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Missile02_01_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Missile02_01_Regular_White_90ft_4000x400.webm`],
                        }
                    },
                    '03': {
                        _free:['white'],
                        white: {
                            '15ft': [lg`Weapon_Attacks/Ranged/Missile03_01_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/Missile03_01_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/Missile03_01_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/Missile03_01_Regular_White_90ft_4000x400.webm`],
                        }
                    },
                    '04': {
                        _free:['purplepink'],
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
            _free:['eyes', 'shrapnel', 'sideImpact'],
            eyes: {
                _free:['single', 'few', 'many'],
                single: {
                    _free:['01', '02', '03'],
                    '01': {
                        _free:['darkgreen'],
                        darkgreen: [lg`Eyes/Eyes_Single01_01_Dark_Green_300x300.webm`],
                        darkred: [lg`Eyes/Eyes_Single01_01_Dark_Red_300x300.webm`],
                        yellow: [lg`Eyes/Eyes_Single01_01_Dark_Yellow_300x300.webm`],
                        bluegreen: [lg`Eyes/Eyes_Single01_01_Regular_BlueGreen_300x300.webm`],
                        orange: [lg`Eyes/Eyes_Single01_01_Regular_OrangeRed_300x300.webm`],
                        orangeyellow: [lg`Eyes/Eyes_Single01_01_Regular_OrangeYellow_300x300.webm`],
                    },
                    '02': {
                        _free:['darkgreen'],
                        darkgreen: [lg`Eyes/Eyes_Single01_02_Dark_Green_300x300.webm`],
                        darkred: [lg`Eyes/Eyes_Single01_02_Dark_Red_300x300.webm`],
                        yellow: [lg`Eyes/Eyes_Single01_02_Dark_Yellow_300x300.webm`],
                        bluegreen: [lg`Eyes/Eyes_Single01_02_Regular_BlueGreen_300x300.webm`],
                        orange: [lg`Eyes/Eyes_Single01_02_Regular_OrangeRed_300x300.webm`],
                        orangeyellow: [lg`Eyes/Eyes_Single01_02_Regular_OrangeYellow_300x300.webm`],
                    },
                    '03': {
                        _free:['darkgreen'],
                        darkgreen: [lg`Eyes/Eyes_Single01_03_Dark_Green_300x300.webm`],
                        darkred: [lg`Eyes/Eyes_Single01_03_Dark_Red_300x300.webm`],
                        yellow: [lg`Eyes/Eyes_Single01_03_Dark_Yellow_300x300.webm`],
                        bluegreen: [lg`Eyes/Eyes_Single01_03_Regular_BlueGreen_300x300.webm`],
                        orange: [lg`Eyes/Eyes_Single01_03_Regular_OrangeRed_300x300.webm`],
                        orangeyellow: [lg`Eyes/Eyes_Single01_03_Regular_OrangeYellow_300x300.webm`],
                    },
                },
                few: {
                    _free:['01', '02', '03'],
                    '01': {
                        _free:['darkgreen'],
                        darkgreen: [lg`Eyes/Eyes_Few01_01_Dark_Green_600x600.webm`],
                        darkred: [lg`Eyes/Eyes_Few01_01_Dark_Red_600x600.webm`],
                        yellow: [lg`Eyes/Eyes_Few01_01_Dark_Yellow_600x600.webm`],
                        bluegreen: [lg`Eyes/Eyes_Few01_01_Regular_BlueGreen_600x600.webm`],
                        orange: [lg`Eyes/Eyes_Few01_01_Regular_OrangeRed_600x600.webm`],
                        orangeyellow: [lg`Eyes/Eyes_Few01_01_Regular_OrangeYellow_600x600.webm`],
                    },
                    '02': {
                        _free:['darkgreen'],
                        darkgreen: [lg`Eyes/Eyes_Few01_02_Dark_Green_600x600.webm`],
                        darkred: [lg`Eyes/Eyes_Few01_02_Dark_Red_600x600.webm`],
                        yellow: [lg`Eyes/Eyes_Few01_02_Dark_Yellow_600x600.webm`],
                        bluegreen: [lg`Eyes/Eyes_Few01_02_Regular_BlueGreen_600x600.webm`],
                        orange: [lg`Eyes/Eyes_Few01_02_Regular_OrangeRed_600x600.webm`],
                        orangeyellow: [lg`Eyes/Eyes_Few01_02_Regular_OrangeYellow_600x600.webm`],
                    },
                    '03': {
                        _free:['darkgreen'],
                        darkgreen: [lg`Eyes/Eyes_Few01_03_Dark_Green_600x600.webm`],
                        darkred: [lg`Eyes/Eyes_Few01_03_Dark_Red_600x600.webm`],
                        yellow: [lg`Eyes/Eyes_Few01_03_Dark_Yellow_600x600.webm`],
                        bluegreen: [lg`Eyes/Eyes_Few01_03_Regular_BlueGreen_600x600.webm`],
                        orange: [lg`Eyes/Eyes_Few01_03_Regular_OrangeRed_600x600.webm`],
                        orangeyellow: [lg`Eyes/Eyes_Few01_03_Regular_OrangeYellow_600x600.webm`],
                    },
                },
                many: {
                    _free:['01', '02', '03'],
                    '01': {
                        _free:['darkgreen'],
                        darkgreen: [lg`Eyes/Eyes_Many01_01_Dark_Green_600x600.webm`],
                        darkred: [lg`Eyes/Eyes_Many01_01_Dark_Red_600x600.webm`],
                        yellow: [lg`Eyes/Eyes_Many01_01_Dark_Yellow_600x600.webm`],
                        bluegreen: [lg`Eyes/Eyes_Many01_01_Regular_BlueGreen_600x600.webm`],
                        orange: [lg`Eyes/Eyes_Many01_01_Regular_OrangeRed_600x600.webm`],
                        orangeyellow: [lg`Eyes/Eyes_Many01_01_Regular_OrangeYellow_600x600.webm`],
                    },
                    '02': {
                        _free:['darkgreen'],
                        darkgreen: [lg`Eyes/Eyes_Many01_02_Dark_Green_600x600.webm`],
                        darkred: [lg`Eyes/Eyes_Many01_02_Dark_Red_600x600.webm`],
                        yellow: [lg`Eyes/Eyes_Many01_02_Dark_Yellow_600x600.webm`],
                        bluegreen: [lg`Eyes/Eyes_Many01_02_Regular_BlueGreen_600x600.webm`],
                        orange: [lg`Eyes/Eyes_Many01_02_Regular_OrangeRed_600x600.webm`],
                        orangeyellow: [lg`Eyes/Eyes_Many01_02_Regular_OrangeYellow_600x600.webm`],
                    },
                    '03': {
                        _free:['darkgreen'],
                        darkgreen: [lg`Eyes/Eyes_Many01_03_Dark_Green_600x600.webm`],
                        darkred: [lg`Eyes/Eyes_Many01_03_Dark_Red_600x600.webm`],
                        yellow: [lg`Eyes/Eyes_Many01_03_Dark_Yellow_600x600.webm`],
                        bluegreen: [lg`Eyes/Eyes_Many01_03_Regular_BlueGreen_600x600.webm`],
                        orange: [lg`Eyes/Eyes_Many01_03_Regular_OrangeRed_600x600.webm`],
                        orangeyellow: [lg`Eyes/Eyes_Many01_03_Regular_OrangeYellow_600x600.webm`],
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
                            lg`Explosion/SideFractureFlask02_01_800x400.webm`,
                            lg`Explosion/SideFractureFlask02_02_400x400.webm`,
                            lg`Explosion/SideFractureFlask03_01_800x400.webm`,
                            lg`Explosion/SideFractureFlask03_02_400x400.webm`
                        ]
                    },
                }
            },
            spell: {
                divinesmite: {
                    'source': {
                        greenorange: [l2`Divine_Smite/DivineSmite_01_Regular_GreenOrange_Caster_400x400.webm`],
                        pink: [l2`Divine_Smite/DivineSmite_01_Regular_Pink_Caster_400x400.webm`]
                    },
                    'target': {
                        greenorange: [l2`Divine_Smite/DivineSmite_01_Regular_GreenOrange_Target_400x400.webm`],
                        pink: [l2`Divine_Smite/DivineSmite_01_Regular_Pink_Target_400x400.webm`]
                    }
                }
            },
        },
    }
    return patreonDB047;
}