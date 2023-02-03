export async function db049(path) {

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

    const patreonDB049 = {
        range: {
            _free: [],
            weapon: {
                flask: {
                    '01': {
                        purple: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Purple_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Purple_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Purple_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Purple_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Purple_90ft_4000x400.webm`]
                        },
                        red: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Red_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Red_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Red_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Red_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_Red_90ft_4000x400.webm`]
                        },
                        white: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_White_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowFlask01_01_Regular_White_90ft_4000x400.webm`]
                        }
                    },
                    '02': {
                        purple: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_Purple_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_Purple_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_Purple_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_Purple_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_Purple_90ft_4000x400.webm`]
                        },
                        red: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_Red_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_Red_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_Red_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_Red_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_Red_90ft_4000x400.webm`]
                        },
                        white: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_White_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowFlask02_01_Regular_White_90ft_4000x400.webm`]
                        },
                    },
                    '03': {
                        purple: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_Purple_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_Purple_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_Purple_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_Purple_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_Purple_90ft_4000x400.webm`]
                        },
                        red: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_Red_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_Red_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_Red_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_Red_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_Red_90ft_4000x400.webm`]
                        },
                        white: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_White_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_White_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_White_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_White_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowFlask03_01_Regular_White_90ft_4000x400.webm`]
                        },
                    },
                },
                grenade: {
                    '03': {
                        green: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Green_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Green_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Green_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Green_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Green_90ft_4000x400.webm`]
                        },
                        orange: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Orange_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Orange_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Orange_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Orange_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Orange_90ft_4000x400.webm`]
                        },
                        red: {
                            '05ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Red_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Red_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Red_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Red_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/ThrowGrenade03_01_Regular_Red_90ft_4000x400.webm`]
                        },
                    },
                },
                grenadelaunch: {
                    '03': {
                        green: {
                            '05ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Green_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Green_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Green_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Green_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Green_90ft_4000x400.webm`]
                        },
                        orange: {
                            '05ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Orange_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Orange_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Orange_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Orange_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Orange_90ft_4000x400.webm`]
                        },
                        red: {
                            '05ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Red_05ft_600x400.webm`],
                            '15ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Red_15ft_1000x400.webm`],
                            '30ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Red_30ft_1600x400.webm`],
                            '60ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Red_60ft_2800x400.webm`],
                            '90ft': [lg`Weapon_Attacks/Ranged/LaunchGrenade03_01_Regular_Red_90ft_4000x400.webm`]
                        },
                    }
                },
            },
        },
        static: {
            _free:['spell'],
            generic: {
                fire: {
                    ring: {
                        grey: [lg`Fire/FireRing_01_Circle_Grey_900x900.webm`],
                        purple: [lg`Fire/FireRing_01_Circle_Purple_900x900.webm`],
                        yellow: [lg`Fire/FireRing_01_Circle_Yellow_900x900.webm`],
                    }
                }
            },
            spell: {
                _free:['divinesmite'],
                divinesmite: {
                    _free:['reverse'],
                    reverse: {
                        _free:['yellowblue'],
                        yellowblue: [l2`Divine_Smite/DivineSmiteReversed_01_Regular_BlueYellow_Caster_400x400.webm`],
                        greenyellow: [l2`Divine_Smite/DivineSmiteReversed_01_Regular_GreenYellow_Caster_400x400.webm`],
                        orange: [l2`Divine_Smite/DivineSmiteReversed_01_Regular_Orange_Caster_400x400.webm`],
                        purplepink: [l2`Divine_Smite/DivineSmiteReversed_01_Regular_PurplePink_Caster_400x400.webm`],
                        darkpurple: [l2`Divine_Smite/DivineSmiteReversed_01_Dark_Purple_Caster_400x400.webm`],
                        yellowwhite: [l2`Divine_Smite/DivineSmiteReversed_01_Regular_YellowWhite_Caster_400x400.webm`],
                        darkred: [l2`Divine_Smite/DivineSmiteReversed_01_Dark_Red_Caster_400x400.webm`],
                        greenorange: [l2`Divine_Smite/DivineSmiteReversed_01_Regular_GreenOrange_Caster_400x400.webm`],
                        pink: [l2`Divine_Smite/DivineSmiteReversed_01_Regular_Pink_Caster_400x400.webm`],
                    }
                },
            },
        },
    }
    return patreonDB049;
}