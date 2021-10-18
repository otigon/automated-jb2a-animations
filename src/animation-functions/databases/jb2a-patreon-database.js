export const JB2APATREONDB = {}
const BASE = 'modules/jb2a_patreon/Library/'
const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
const l0 = prefix('Cantrip')
const l1 = prefix('1st_Level')
const l2 = prefix('2nd_Level')
const l3 = prefix('3rd_Level')
const l5 = prefix('5th_Level')
const l6 = prefix('6th_Level')
const l7 = prefix('7th_Level')
const lg = prefix('Generic')

JB2APATREONDB.range = {
    arrow: {
        'regular': {
            regular: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_90ft_4000x400.webm`]
            }
        },
        'physical': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Physical_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Physical_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Physical_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Physical_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Physical_90ft_4000x400.webm`]
            },
            white: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_90ft_4000x400.webm`]
            }
        },
        'poison': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Poison_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Poison_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Poison_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Poison_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Poison_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Poison_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Poison_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Poison_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Poison_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Poison_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Poison_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Poison_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Poison_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Poison_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Poison_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Poison_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Poison_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Poison_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Poison_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Poison_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Poison_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Poison_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Poison_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Poison_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Poison_90ft_4000x400.webm`]
            },
        },
        'fire': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Fire_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Fire_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Fire_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Fire_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Fire_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Fire_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Fire_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Fire_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Fire_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Fire_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Fire_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Fire_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Fire_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Fire_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Fire_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Fire_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Fire_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Fire_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Fire_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Fire_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Fire_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Fire_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Fire_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Fire_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Fire_90ft_4000x400.webm`]
            },
        },
        'cold': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Cold_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Cold_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Cold_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Cold_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Cold_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Cold_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Cold_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Cold_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Cold_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Cold_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Cold_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Cold_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Cold_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Cold_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Cold_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Cold_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Cold_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Cold_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Cold_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Cold_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Cold_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Cold_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Cold_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Cold_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Cold_90ft_4000x400.webm`]
            },
        },
        'lightning': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Lightning_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Lightning_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Lightning_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Lightning_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Blue_Lightning_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Lightning_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Lightning_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Lightning_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Lightning_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Green_Lightning_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Lightning_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Lightning_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Lightning_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Lightning_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Orange_Lightning_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Lightning_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Lightning_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Lightning_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Lightning_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Pink_Lightning_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Lightning_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Lightning_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Lightning_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Lightning_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Purple_Lightning_90ft_4000x400.webm`]
            },
        }
    },
    bolt: {
        'physical': {
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Physical_90ft_4000x400.webm`]
            },
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Physical_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Physical_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Physical_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Physical_90ft_4000x400.webm`]
            },
            white: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_White_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_White_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_White_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_White_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_White_Physical_90ft_4000x400.webm`]
            },
        },
        'poison': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Poison_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Poison_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Poison_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Poison_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Poison_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Poison_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Poison_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Poison_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Poison_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Poison_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Poison_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Poison_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Poison_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Poison_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Poison_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink__05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink__15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink__30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink__60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink__90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple__05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple__15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple__30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple__60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple__90ft_4000x400.webm`]
            },
        },
        'fire': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Fire_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Fire_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Fire_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Fire_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Fire_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Fire_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Fire_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Fire_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Fire_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Fire_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Fire_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Fire_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Fire_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Fire_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Fire_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Fire_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Fire_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Fire_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Fire_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Fire_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Fire_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Fire_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Fire_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Fire_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Fire_90ft_4000x400.webm`]
            },
        },
        'cold': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Cold_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Cold_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Cold_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Cold_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Cold_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Cold_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Cold_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Cold_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Cold_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Cold_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Cold_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Cold_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Cold_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Cold_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Cold_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Cold_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Cold_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Cold_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Cold_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Cold_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Cold_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Cold_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Cold_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Cold_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Cold_90ft_4000x400.webm`]
            },
        },
        'lightning': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Lightning_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Lightning_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Lightning_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Lightning_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Blue_Lightning_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Lightning_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Lightning_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Lightning_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Lightning_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Green_Lightning_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Lightning_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Lightning_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Lightning_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Lightning_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Orange_Lightning_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Lightning_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Lightning_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Lightning_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Lightning_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Lightning_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Lightning_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Lightning_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Lightning_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Lightning_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Lightning_90ft_4000x400.webm`]
            },
        }
    },
    boulder: {
        '01': {
            white: {
                '05ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_05ft_600x500.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_15ft_1000x500.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_30ft_1600x500.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_60ft_2800x500.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_90ft_4000x500.webm`]
            }
        }
    },
    bullet: {
        '1': {
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Orange_90ft_4000x400.webm`]
            },
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Blue_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Blue_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Green_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Green_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Green_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Green_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Green_90ft_4000x400.webm`]
            },
            red: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Red_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Red_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Red_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Red_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_01_Regular_Red_90ft_4000x400.webm`]
            }
        },
        '2': {
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Orange_90ft_4000x400.webm`]
            },
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Blue_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Blue_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Green_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Green_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Green_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Green_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Green_90ft_4000x400.webm`]
            },
            red: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Red_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Red_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Red_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Red_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_02_Regular_Red_90ft_4000x400.webm`]
            }
        },
        '3': {
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Orange_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Orange_90ft_4000x400.webm`]
            },
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Blue_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Green_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Green_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Green_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Green_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Green_90ft_4000x400.webm`]
            },
            red: {
                '05ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Red_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Red_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Red_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Red_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Bullet_03_Regular_Red_90ft_4000x400.webm`]
            }
        }
    },
    chainlightning: {
        primary: {
            darkpurple: {
                '05ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_05ft_Primary_600x400.webm`],
                '15ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_15ft_Primary_1000x400.webm`],
                '30ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_30ft_Primary_1600x400.webm`],
                '60ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_60ft_Primary_2800x400.webm`],
                '90ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_90ft_Primary_4000x400.webm`]
            },
            blue: {
                '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Primary_600x400.webm`],
                '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Primary_1000x400.webm`],
                '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Primary_1600x400.webm`],
                '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Primary_2800x400.webm`],
                '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Primary_4000x400.webm`]
            },
            green: {
                '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_05ft_Primary_600x400.webm`],
                '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_15ft_Primary_1000x400.webm`],
                '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_30ft_Primary_1600x400.webm`],
                '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_60ft_Primary_2800x400.webm`],
                '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_90ft_Primary_4000x400.webm`]
            },
            purple: {
                '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_05ft_Primary_600x400.webm`],
                '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_15ft_Primary_1000x400.webm`],
                '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_30ft_Primary_1600x400.webm`],
                '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_60ft_Primary_2800x400.webm`],
                '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_90ft_Primary_4000x400.webm`]
            }
        },
        '02': {
            darkpurple: {
                '05ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_05ft_Secondary_600x400.webm`],
                '15ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_15ft_Secondary_1000x400.webm`],
                '30ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_30ft_Secondary_1600x400.webm`],
                '60ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_60ft_Secondary_2800x400.webm`],
                '90ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_90ft_Secondary_4000x400.webm`]
            },
            blue: {
                '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Secondary_600x400.webm`],
                '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Secondary_1000x400.webm`],
                '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Secondary_1600x400.webm`],
                '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Secondary_2800x400.webm`],
                '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Secondary_4000x400.webm`]
            },
            green: {
                '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_05ft_Secondary_600x400.webm`],
                '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_15ft_Secondary_1000x400.webm`],
                '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_30ft_Secondary_1600x400.webm`],
                '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_60ft_Secondary_2800x400.webm`],
                '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_90ft_Secondary_4000x400.webm`]
            },
            purple: {
                '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_05ft_Primary_600x400.webm`],
                '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_15ft_Primary_1000x400.webm`],
                '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_30ft_Primary_1600x400.webm`],
                '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_60ft_Primary_2800x400.webm`],
                '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_90ft_Primary_4000x400.webm`]
            }
        }
    },
    chakram: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_90ft_4000x400.webm`],
            }
        },
        '02': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Chakram01_02_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Chakram01_02_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Chakram01_02_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Chakram01_02_Regular_White_90ft_4000x400.webm`]
            }
        }
    },
    dagger: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_90ft_4000x400.webm`]
            },
            darkpurple: {
                '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_90ft_4000x400.webm`]
            }
        },
        '02': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_90ft_4000x400.webm`]
            },
            darkpurple: {
                '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_90ft_4000x400.webm`]
            }
        },
        'kunai': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Kunai01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Kunai01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Kunai01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Kunai01_01_Regular_White_90ft_4000x400.webm`]
            }
        }
    },
    disintegrate: {
        '01': {
            green: {
                '05ft': [l6`Disintegrate/Disintegrate_01_Regular_Green01_05ft_600x400.webm`],
                '15ft': [l6`Disintegrate/Disintegrate_01_Regular_Green01_15ft_1000x400.webm`],
                '30ft': [l6`Disintegrate/Disintegrate_01_Regular_Green01_30ft_1600x400.webm`],
                '60ft': [l6`Disintegrate/Disintegrate_01_Regular_Green01_60ft_2800x400.webm`],
                '90ft': [l6`Disintegrate/Disintegrate_01_Regular_Green01_90ft_4000x400.webm`]
            },
            darkred: {
                '05ft': [l6`Disintegrate/Disintegrate_01_Dark_Red_05ft_600x400.webm`],
                '15ft': [l6`Disintegrate/Disintegrate_01_Dark_Red_15ft_1000x400.webm`],
                '30ft': [l6`Disintegrate/Disintegrate_01_Dark_Red_30ft_1600x400.webm`],
                '60ft': [l6`Disintegrate/Disintegrate_01_Dark_Red_60ft_2800x400.webm`],
                '90ft': [l6`Disintegrate/Disintegrate_01_Dark_Red_90ft_4000x400.webm`]
            },
            orangepink: {
                '05ft': [l6`Disintegrate/Disintegrate_01_Regular_OrangePink_05ft_600x400.webm`],
                '15ft': [l6`Disintegrate/Disintegrate_01_Regular_OrangePink_15ft_1000x400.webm`],
                '30ft': [l6`Disintegrate/Disintegrate_01_Regular_OrangePink_30ft_1600x400.webm`],
                '60ft': [l6`Disintegrate/Disintegrate_01_Regular_OrangePink_60ft_2800x400.webm`],
                '90ft': [l6`Disintegrate/Disintegrate_01_Regular_OrangePink_90ft_4000x400.webm`]
            },
            purpleblue: {
                '05ft': [l6`Disintegrate/Disintegrate_01_Regular_PurpleBlue_05ft_600x400.webm`],
                '15ft': [l6`Disintegrate/Disintegrate_01_Regular_PurpleBlue_15ft_1000x400.webm`],
                '30ft': [l6`Disintegrate/Disintegrate_01_Regular_PurpleBlue_30ft_1600x400.webm`],
                '60ft': [l6`Disintegrate/Disintegrate_01_Regular_PurpleBlue_60ft_2800x400.webm`],
                '90ft': [l6`Disintegrate/Disintegrate_01_Regular_PurpleBlue_90ft_4000x400.webm`]
            }
        }
    },
    eldritchblast: {
        '01': {
            purple: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Purple_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Purple_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Purple_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Purple_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Purple_90ft_4000x400.webm`]
            },
            darkpurple: {
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Purple_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Purple_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Purple_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Green_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Green_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Green_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Green_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Green_90ft_4000x400.webm`]
            },
            yellow: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Yellow_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Yellow_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Yellow_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Yellow_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Yellow_90ft_4000x400.webm`]
            },
            darkred: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Red_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Red_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Red_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Red_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Red_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Orange_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Orange_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Pink_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Pink_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Pink_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Pink_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Pink_90ft_4000x400.webm`]
            },
            lightgreen: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_LightGreen_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_LightGreen_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_LightGreen_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_LightGreen_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_LightGreen_90ft_4000x400.webm`]
            },
            darkgreen: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Green_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Green_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Green_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Green_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Dark_Green_90ft_4000x400.webm`]
            },
            rainbow: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Rainbow_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Rainbow_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Rainbow_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Rainbow_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_Rainbow_90ft_4000x400.webm`]
            },
            lightblue: {
                '05ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_LightBlue_05ft_600x400.webm`],
                '15ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_LightBlue_15ft_1000x400.webm`],
                '30ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_LightBlue_30ft_1600x400.webm`],
                '60ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_LightBlue_60ft_2800x400.webm`],
                '90ft': [l0`Eldritch_Blast/EldritchBlast_01_Regular_LightBlue_90ft_4000x400.webm`]
            }
        }
    },
    energybeam: {
        '01': {
            blue: {
                '15ft': [lg`Energy/EnergyBeam_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [lg`Energy/EnergyBeam_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [lg`Energy/EnergyBeam_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [lg`Energy/EnergyBeam_01_Regular_Blue_90ft_4000x400.webm`],
            },
            bluegreen: {
                '15ft': [lg`Energy/EnergyBeam_01_Regular_BlueGreen_15ft_1000x400.webm`],
                '30ft': [lg`Energy/EnergyBeam_01_Regular_BlueGreen_30ft_1600x400.webm`],
                '60ft': [lg`Energy/EnergyBeam_01_Regular_BlueGreen_60ft_2800x400.webm`],
                '90ft': [lg`Energy/EnergyBeam_01_Regular_BlueGreen_90ft_4000x400.webm`],
            },
            darkgreen: {
                '15ft': [lg`Energy/EnergyBeam_01_Dark_Green_15ft_1000x400.webm`],
                '30ft': [lg`Energy/EnergyBeam_01_Dark_Green_30ft_1600x400.webm`],
                '60ft': [lg`Energy/EnergyBeam_01_Dark_Green_60ft_2800x400.webm`],
                '90ft': [lg`Energy/EnergyBeam_01_Dark_Green_90ft_4000x400.webm`],
            },
        }
    },
    energystrand: {
        '01': {
            darkred: {
                '05ft': [lg`Energy/EnergyStrand_01_Dark_Red_05ft_600x400.webm`],
                '15ft': [lg`Energy/EnergyStrand_01_Dark_Red_15ft_1000x400.webm`],
                '30ft': [lg`Energy/EnergyStrand_01_Dark_Red_30ft_1600x400.webm`],
                '60ft': [lg`Energy/EnergyStrand_01_Dark_Red_60ft_2800x400.webm`],
                '90ft': [lg`Energy/EnergyStrand_01_Dark_Red_90ft_4000x400.webm`],
            },
            purple: {
                '05ft': [lg`Energy/EnergyStrand_01_Regular_Purple_05ft_600x400.webm`],
                '15ft': [lg`Energy/EnergyStrand_01_Regular_Purple_15ft_1000x400.webm`],
                '30ft': [lg`Energy/EnergyStrand_01_Regular_Purple_30ft_1600x400.webm`],
                '60ft': [lg`Energy/EnergyStrand_01_Regular_Purple_60ft_2800x400.webm`],
                '90ft': [lg`Energy/EnergyStrand_01_Regular_Purple_90ft_4000x400.webm`],
            },
        },
        '02': {
            darkred: {
                '05ft': [lg`Energy/EnergyStrand_02_Dark_Red_05ft_600x400.webm`],
                '15ft': [lg`Energy/EnergyStrand_02_Dark_Red_15ft_1000x400.webm`],
                '30ft': [lg`Energy/EnergyStrand_02_Dark_Red_30ft_1600x400.webm`],
                '60ft': [lg`Energy/EnergyStrand_02_Dark_Red_60ft_2800x400.webm`],
                '90ft': [lg`Energy/EnergyStrand_02_Dark_Red_90ft_4000x400.webm`],
            },
            purple: {
                '05ft': [lg`Energy/EnergyStrand_02_Regular_Purple_05ft_600x400.webm`],
                '15ft': [lg`Energy/EnergyStrand_02_Regular_Purple_15ft_1000x400.webm`],
                '30ft': [lg`Energy/EnergyStrand_02_Regular_Purple_30ft_1600x400.webm`],
                '60ft': [lg`Energy/EnergyStrand_02_Regular_Purple_60ft_2800x400.webm`],
                '90ft': [lg`Energy/EnergyStrand_02_Regular_Purple_90ft_4000x400.webm`],
            },
        },
    },
    firebolt: {
        '01': {
            orange: {
                '05ft': [l0`Fire_Bolt/FireBolt_01_Regular_Orange_05ft_600x400.webm`],
                '15ft': [l0`Fire_Bolt/FireBolt_01_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [l0`Fire_Bolt/FireBolt_01_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [l0`Fire_Bolt/FireBolt_01_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [l0`Fire_Bolt/FireBolt_01_Regular_Orange_90ft_4000x400.webm`]
            },
            red: {
                '05ft': [l0`Fire_Bolt/FireBolt_01_Dark_Red_05ft_600x400.webm`],
                '15ft': [l0`Fire_Bolt/FireBolt_01_Dark_Red_15ft_1000x400.webm`],
                '30ft': [l0`Fire_Bolt/FireBolt_01_Dark_Red_30ft_1600x400.webm`],
                '60ft': [l0`Fire_Bolt/FireBolt_01_Dark_Red_60ft_2800x400.webm`],
                '90ft': [l0`Fire_Bolt/FireBolt_01_Dark_Red_90ft_4000x400.webm`]
            },
            blue: {
                '05ft': [l0`Fire_Bolt/FireBolt_01_Regular_Blue_05ft_600x400.webm`],
                '15ft': [l0`Fire_Bolt/FireBolt_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [l0`Fire_Bolt/FireBolt_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [l0`Fire_Bolt/FireBolt_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [l0`Fire_Bolt/FireBolt_01_Regular_Blue_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [l0`Fire_Bolt/FireBolt_01_Regular_Green_05ft_600x400.webm`],
                '15ft': [l0`Fire_Bolt/FireBolt_01_Regular_Green_15ft_1000x400.webm`],
                '30ft': [l0`Fire_Bolt/FireBolt_01_Regular_Green_30ft_1600x400.webm`],
                '60ft': [l0`Fire_Bolt/FireBolt_01_Regular_Green_60ft_2800x400.webm`],
                '90ft': [l0`Fire_Bolt/FireBolt_01_Regular_Green_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [l0`Fire_Bolt/FireBolt_01_Regular_Purple_05ft_600x400.webm`],
                '15ft': [l0`Fire_Bolt/FireBolt_01_Regular_Purple_15ft_1000x400.webm`],
                '30ft': [l0`Fire_Bolt/FireBolt_01_Regular_Purple_30ft_1600x400.webm`],
                '60ft': [l0`Fire_Bolt/FireBolt_01_Regular_Purple_60ft_2800x400.webm`],
                '90ft': [l0`Fire_Bolt/FireBolt_01_Regular_Purple_90ft_4000x400.webm`]
            },
            darkgreen: {
                '05ft': [l0`Fire_Bolt/FireBolt_01_Dark_Green02_05ft_600x400.webm`],
                '15ft': [l0`Fire_Bolt/FireBolt_01_Dark_Green02_15ft_1000x400.webm`],
                '30ft': [l0`Fire_Bolt/FireBolt_01_Dark_Green02_30ft_1600x400.webm`],
                '60ft': [l0`Fire_Bolt/FireBolt_01_Dark_Green02_60ft_2800x400.webm`],
                '90ft': [l0`Fire_Bolt/FireBolt_01_Dark_Green02_90ft_4000x400.webm`]
            },
            palegreen: {
                '05ft': [l0`Fire_Bolt/FireBolt_01_Regular_Green02_05ft_600x400.webm`],
                '15ft': [l0`Fire_Bolt/FireBolt_01_Regular_Green02_15ft_1000x400.webm`],
                '30ft': [l0`Fire_Bolt/FireBolt_01_Regular_Green02_30ft_1600x400.webm`],
                '60ft': [l0`Fire_Bolt/FireBolt_01_Regular_Green02_60ft_2800x400.webm`],
                '90ft': [l0`Fire_Bolt/FireBolt_01_Regular_Green02_90ft_4000x400.webm`]
            },
        }
    },
    greataxe: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_White_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_White_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_White_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_White_90ft_4000x600.webm`]
            },
            blue: {
                '15ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Blue_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Blue_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Blue_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Blue_90ft_4000x600.webm`]
            }
        }
    },
    greatsword: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_90ft_4000x600.webm`]
            }
        }
    },
    guidingbolt: {
        '01': {
            yellowblue: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_BlueYellow_90ft_4000x400.webm`]
            },
            greenorange: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_GreenOrange_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_GreenOrange_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_GreenOrange_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_GreenOrange_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_GreenOrange_90ft_4000x400.webm`]
            },
            purplepink: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_PurplePink_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_PurplePink_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_PurplePink_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_PurplePink_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_PurplePink_90ft_4000x400.webm`]
            },
            whiteblue: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_01_Dark_BlueWhite_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_01_Dark_BlueWhite_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_01_Dark_BlueWhite_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_01_Dark_BlueWhite_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_01_Dark_BlueWhite_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Pink_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Pink_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Pink_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Pink_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Pink_90ft_4000x400.webm`]
            }
        },
        '02': {
            yellowblue: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_BlueYellow_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_BlueYellow_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_BlueYellow_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_BlueYellow_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_BlueYellow_90ft_4000x400.webm`]
            },
            greenorange: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_GreenOrange_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_GreenOrange_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_GreenOrange_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_GreenOrange_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_GreenOrange_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Pink_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Pink_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Pink_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Pink_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Pink_90ft_4000x400.webm`]
            },
            purplepink: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_PurplePink_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_PurplePink_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_PurplePink_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_PurplePink_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_PurplePink_90ft_4000x400.webm`]
            },
            whiteblue: {
                '05ft': [l1`Guiding_Bolt/GuidingBolt_02_Dark_BlueWhite_05ft_600x400.webm`],
                '15ft': [l1`Guiding_Bolt/GuidingBolt_02_Dark_BlueWhite_15ft_1000x400.webm`],
                '30ft': [l1`Guiding_Bolt/GuidingBolt_02_Dark_BlueWhite_30ft_1600x400.webm`],
                '60ft': [l1`Guiding_Bolt/GuidingBolt_02_Dark_BlueWhite_60ft_2800x400.webm`],
                '90ft': [l1`Guiding_Bolt/GuidingBolt_02_Dark_BlueWhite_90ft_4000x400.webm`]
            }
        }
    },
    hammer: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_90ft_4000x400.webm`]
            }
        }
    },
    handaxe: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/HandAxe01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/HandAxe01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/HandAxe01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/HandAxe01_01_Regular_White_90ft_4000x400.webm`]
            }
        },
        '02': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/HandAxe02_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/HandAxe02_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/HandAxe02_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/HandAxe02_01_Regular_White_90ft_4000x400.webm`]
            }
        }
    },
    javelin: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_90ft_4000x400.webm`],
            }
        }
    },
    lasershot: {
        '01': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Blue_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Green_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Orange_90ft_4000x400.webm`]
            },
            pink: {
                '05ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Pink_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Pink_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Pink_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Pink_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Pink_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Purple_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Purple_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Purple_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Purple_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Purple_90ft_4000x400.webm`]
            },
            red: {
                '05ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserShot_01_Regular_Red_90ft_4000x400.webm`]
            }
        }
    },
    lasersword: {
        '01': {
            blue: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue_90ft_4000x600.webm`]

            },
            green: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_90ft_4000x600.webm`]

            },
            orange: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Orange_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Orange_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Orange_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Orange_90ft_4000x600.webm`]

            },
            purple: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Purple_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Purple_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Purple_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Purple_90ft_4000x600.webm`]

            },
            red: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Red_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Red_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Red_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Red_90ft_4000x600.webm`]

            },
            yellow: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Yellow_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Yellow_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Yellow_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Yellow_90ft_4000x600.webm`]

            }
        },
        '02': {
            blue: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_90ft_4000x600.webm`]

            },
            green: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_90ft_4000x600.webm`]

            },
            orange: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Orange_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Orange_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Orange_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Orange_90ft_4000x600.webm`]

            },
            purple: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Purple_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Purple_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Purple_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Purple_90ft_4000x600.webm`]

            },
            red: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Red_90ft_4000x600.webm`]

            },
            yellow: {
                '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Yellow_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Yellow_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Yellow_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Yellow_90ft_4000x600.webm`]
            }
        }
    },
    mace: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Mace01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Mace01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Mace01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Mace01_01_Regular_White_90ft_4000x400.webm`]
            }
        }
    },
    magicmissile: {
        '01': {
            blue: {
                '05ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_05ft_01_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_05ft_02_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_05ft_03_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_05ft_04_600x400.webm`
                ],
                '15ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_15ft_01_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_15ft_02_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_15ft_03_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_15ft_04_1000x400.webm`
                ],
                '30ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_30ft_01_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_30ft_02_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_30ft_03_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_30ft_04_1600x400.webm`,
                ],
                '60ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_60ft_01_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_60ft_02_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_60ft_03_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_60ft_04_2800x400.webm`,
                ],
                '90ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_90ft_01_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_90ft_02_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_90ft_03_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Blue_90ft_04_4000x400.webm`
                ]
            },
            darkred: {
                '05ft': [
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_05ft_01_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_05ft_02_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_05ft_03_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_05ft_04_600x400.webm`
                ],
                '15ft': [
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_15ft_01_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_15ft_02_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_15ft_03_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_15ft_04_1000x400.webm`
                ],
                '30ft': [
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_30ft_01_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_30ft_02_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_30ft_03_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_30ft_04_1600x400.webm`
                ],
                '60ft': [
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_60ft_01_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_60ft_02_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_60ft_03_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_60ft_04_2800x400.webm`
                ],
                '90ft': [
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_90ft_01_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_90ft_02_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_90ft_03_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Dark_Red_90ft_04_4000x400.webm`
                ]
            },
            green: {
                '05ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_05ft_01_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_05ft_02_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_05ft_03_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_05ft_04_600x400.webm`
                ],
                '15ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_15ft_01_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_15ft_02_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_15ft_03_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_15ft_04_1000x400.webm`
                ],
                '30ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_30ft_01_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_30ft_02_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_30ft_03_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_30ft_04_1600x400.webm`,
                ],
                '60ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_60ft_01_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_60ft_02_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_60ft_03_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_60ft_04_2800x400.webm`,
                ],
                '90ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_90ft_01_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_90ft_02_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_90ft_03_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Green_90ft_04_4000x400.webm`
                ]
            },
            purple: {
                '05ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_05ft_01_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_05ft_02_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_05ft_03_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_05ft_04_600x400.webm`
                ],
                '15ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_15ft_01_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_15ft_02_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_15ft_03_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_15ft_04_1000x400.webm`
                ],
                '30ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_30ft_01_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_30ft_02_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_30ft_03_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_30ft_04_1600x400.webm`,
                ],
                '60ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_60ft_01_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_60ft_02_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_60ft_03_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_60ft_04_2800x400.webm`,
                ],
                '90ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_90ft_01_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_90ft_02_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_90ft_03_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Purple_90ft_04_4000x400.webm`
                ]
            },
            yellow: {
                '05ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_05ft_01_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_05ft_02_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_05ft_03_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_05ft_04_600x400.webm`
                ],
                '15ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_15ft_01_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_15ft_02_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_15ft_03_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_15ft_04_1000x400.webm`
                ],
                '30ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_30ft_01_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_30ft_02_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_30ft_03_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_30ft_04_1600x400.webm`,
                ],
                '60ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_60ft_01_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_60ft_02_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_60ft_03_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_60ft_04_2800x400.webm`,
                ],
                '90ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_90ft_01_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_90ft_02_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_90ft_03_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Yellow_90ft_04_4000x400.webm`
                ]
            },
            orange: {
                '05ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_05ft_01_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_05ft_02_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_05ft_03_600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_05ft_04_600x400.webm`
                ],
                '15ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_15ft_01_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_15ft_02_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_15ft_03_1000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_15ft_04_1000x400.webm`
                ],
                '30ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_30ft_01_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_30ft_02_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_30ft_03_1600x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_30ft_04_1600x400.webm`,
                ],
                '60ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_60ft_01_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_60ft_02_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_60ft_03_2800x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_60ft_04_2800x400.webm`,
                ],
                '90ft': [
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_90ft_01_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_90ft_02_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_90ft_03_4000x400.webm`,
                    l1`Magic_Missile/MagicMissile_01_Regular_Orange_90ft_04_4000x400.webm`
                ]
            }
        }
    },
    rayoffrost: {
        '01': {
            blue: {
                '05ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Blue_05ft_600x400.webm`],
                '15ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Blue_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Green_05ft_600x400.webm`],
                '15ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Green_15ft_1000x400.webm`],
                '30ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Green_30ft_1600x400.webm`],
                '60ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Green_60ft_2800x400.webm`],
                '90ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_Green_90ft_4000x400.webm`]
            },
            purpleteal: {
                '05ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_PurpleTeal_05ft_600x400.webm`],
                '15ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_PurpleTeal_15ft_1000x400.webm`],
                '30ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_PurpleTeal_30ft_1600x400.webm`],
                '60ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_PurpleTeal_60ft_2800x400.webm`],
                '90ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_PurpleTeal_90ft_4000x400.webm`]
            },
            yellowblue: {
                '05ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_BlueYellow_05ft_600x400.webm`],
                '15ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_BlueYellow_15ft_1000x400.webm`],
                '30ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_BlueYellow_30ft_1600x400.webm`],
                '60ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_BlueYellow_60ft_2800x400.webm`],
                '90ft': [l0`Ray_Of_Frost/RayOfFrost_01_Regular_BlueYellow_90ft_4000x400.webm`]
            }
        }
    },
    scorchingray: {
        '01': {
            orange: {
                '05ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Orange_05ft_600x400.webm`],
                '15ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Orange_90ft_4000x400.webm`]
            },
            blue: {
                '05ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Blue_05ft_600x400.webm`],
                '15ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Blue_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Green_05ft_600x400.webm`],
                '15ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Green_15ft_1000x400.webm`],
                '30ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Green_30ft_1600x400.webm`],
                '60ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Green_60ft_2800x400.webm`],
                '90ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Green_90ft_4000x400.webm`]
            },
            purple: {
                '05ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Purple_05ft_600x400.webm`],
                '15ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Purple_15ft_1000x400.webm`],
                '30ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Purple_30ft_1600x400.webm`],
                '60ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Purple_60ft_2800x400.webm`],
                '90ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Purple_90ft_4000x400.webm`]
            },
            red: {
                '05ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Red_05ft_600x400.webm`],
                '15ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Red_15ft_1000x400.webm`],
                '30ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Red_30ft_1600x400.webm`],
                '60ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Red_60ft_2800x400.webm`],
                '90ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Red_90ft_4000x400.webm`]
            },
            yellow: {
                '05ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Yellow_05ft_600x400.webm`],
                '15ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Yellow_15ft_1000x400.webm`],
                '30ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Yellow_30ft_1600x400.webm`],
                '60ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Yellow_60ft_2800x400.webm`],
                '90ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Yellow_90ft_4000x400.webm`]
            },
            rainbow01: {
                '05ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Rainbow01_05ft_600x400.webm`],
                '15ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Rainbow01_15ft_1000x400.webm`],
                '30ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Rainbow01_30ft_1600x400.webm`],
                '60ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Rainbow01_60ft_2800x400.webm`],
                '90ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Rainbow01_90ft_4000x400.webm`]
            },
            rainbow02: {
                '05ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Rainbow02_05ft_600x400.webm`],
                '15ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Rainbow02_15ft_1000x400.webm`],
                '30ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Rainbow02_30ft_1600x400.webm`],
                '60ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Rainbow02_60ft_2800x400.webm`],
                '90ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Rainbow02_90ft_4000x400.webm`]
            },
        },
        '02': {
            blue: {
                '05ft': [
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_05ft_01_600x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_05ft_02_600x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_05ft_03_600x400.webm`
                ],
                '15ft': [
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_15ft_01_1000x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_15ft_02_1000x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_15ft_03_1000x400.webm`
                ],
                '30ft': [
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_30ft_01_1600x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_30ft_02_1600x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_30ft_03_1600x400.webm`
                ],
                '60ft': [
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_60ft_01_2800x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_60ft_02_2800x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_60ft_03_2800x400.webm`
                ],
                '90ft': [
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_90ft_01_4000x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_90ft_02_4000x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Blue_90ft_03_4000x400.webm`
                ]
            },
            orange: {
                '05ft': [
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_05ft_01_600x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_05ft_02_600x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_05ft_03_600x400.webm`
                ],
                '15ft': [
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_15ft_01_1000x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_15ft_02_1000x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_15ft_03_1000x400.webm`
                ],
                '30ft': [
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_30ft_01_1600x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_30ft_02_1600x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_30ft_03_1600x400.webm`
                ],
                '60ft': [
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_60ft_01_2800x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_60ft_02_2800x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_60ft_03_2800x400.webm`
                ],
                '90ft': [
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_90ft_01_4000x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_90ft_02_4000x400.webm`,
                    l2`Scorching_Ray/ScorchingRay_02_Regular_Orange_90ft_03_4000x400.webm`
                ]
            }
        }
    },
    siegeboulder: {
        '01': {
            white: {
                '05ft': [lg`Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_05ft_600x500.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_15ft_1000x500.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_30ft_1600x500.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_60ft_2800x500.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_90ft_4000x500.webm`]
            }
        }
    },
    sling: {
        '01': {
            white: {
                '05ft': [lg`Weapon_Attacks/Ranged/SlingShot_01_Regular_White_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/SlingShot_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/SlingShot_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/SlingShot_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/SlingShot_01_Regular_White_90ft_4000x400.webm`]
            }
        }
    },
    snipe: {
        '01': {
            blue: {
                '05ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Blue_90ft_4000x400.webm`]
            },
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Green_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Green_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Green_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Green_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Green_90ft_4000x400.webm`]
            },
            orange: {
                '05ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Orange_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Orange_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Orange_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Orange_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Orange_90ft_4000x400.webm`]
            },
            red: {
                '05ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Red_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Red_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Red_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Red_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Snipe_01_Regular_Red_90ft_4000x400.webm`]
            }
        }
    },
    spear: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_90ft_4000x400.webm`]
            }
        }
    },
    sword: {
        '01': {
            blue: {
                '15ft': [lg`Weapon_Attacks/Ranged/Sword01_02_Regular_Blue_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Sword01_02_Regular_Blue_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Sword01_02_Regular_Blue_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Sword01_02_Regular_Blue_90ft_4000x600.webm`]
            },
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Sword01_01_Regular_White_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Sword01_01_Regular_White_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Sword01_01_Regular_White_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Sword01_01_Regular_White_90ft_4000x600.webm`]
            }
        }
    },
    witchbolt: {
        '01': {
            blue: {
                '05ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Blue_05ft_600x400.webm`],
                '15ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Blue_15ft_1000x400.webm`],
                '30ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Blue_30ft_1600x400.webm`],
                '60ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Blue_60ft_2800x400.webm`],
                '90ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Blue_90ft_4000x400.webm`],
            },
            green: {
                '05ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Green_05ft_600x400.webm`],
                '15ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Green_15ft_1000x400.webm`],
                '30ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Green_30ft_1600x400.webm`],
                '60ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Green_60ft_2800x400.webm`],
                '90ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Green_90ft_4000x400.webm`],
            },
            red: {
                '05ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Red_05ft_600x400.webm`],
                '15ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Red_15ft_1000x400.webm`],
                '30ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Red_30ft_1600x400.webm`],
                '60ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Red_60ft_2800x400.webm`],
                '90ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Red_90ft_4000x400.webm`],
            },
            yellow: {
                '05ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Yellow_05ft_600x400.webm`],
                '15ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Yellow_15ft_1000x400.webm`],
                '30ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Yellow_30ft_1600x400.webm`],
                '60ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Yellow_60ft_2800x400.webm`],
                '90ft': [l1`Witch_Bolt/WitchBolt_01_Regular_Yellow_90ft_4000x400.webm`],
            },
            darkred: {
                '05ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Red_05ft_600x400.webm`],
                '15ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Red_15ft_1000x400.webm`],
                '30ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Red_30ft_1600x400.webm`],
                '60ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Red_60ft_2800x400.webm`],
                '90ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Red_90ft_4000x400.webm`],
            },
            darkgreen: {
                '05ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Green_05ft_600x400.webm`],
                '15ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Green_15ft_1000x400.webm`],
                '30ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Green_30ft_1600x400.webm`],
                '60ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Green_60ft_2800x400.webm`],
                '90ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Green_90ft_4000x400.webm`],
            },
            darkpurple: {
                '05ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Purple_05ft_600x400.webm`],
                '15ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Purple_15ft_1000x400.webm`],
                '30ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Purple_30ft_1600x400.webm`],
                '60ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Purple_60ft_2800x400.webm`],
                '90ft': [l1`Witch_Bolt/WitchBolt_01_Dark_Purple_90ft_4000x400.webm`],
            }
        }
    },
}

JB2APATREONDB.melee = {
    '1hs': {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgSlashing_01_Regular_Yellow_1Handed_800x600.webm`],
        }
    },
    '2hs': {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgSlashing_01_Regular_Yellow_2Handed_800x600.webm`],
        }
    },
    '1hb': {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgBludgeoning_01_Regular_Yellow_1Handed_800x600.webm`],
        }
    },
    '2hb': {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgBludgeoning_01_Regular_Yellow_2Handed_800x600.webm`],
        }
    },
    '1hp': {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgPiercing_01_Regular_Yellow_1Handed_800x600.webm`],
        }
    },
    '2hp': {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgPiercing_01_Regular_Yellow_2Handed_800x600.webm`]
        }
    },
    club: {
        '01': {
            white: [
                [lg`Weapon_Attacks/Melee/Club01_01_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_02_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_03_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_04_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_05_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_06_Regular_White_800x600.webm`]
            ],
            blue: [
                [lg`Weapon_Attacks/Melee/Club01_01_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_02_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_03_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_04_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_05_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_06_Regular_Blue_800x600.webm`]
            ],
            orange: [
                [lg`Weapon_Attacks/Melee/Club01_01_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_02_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_03_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_04_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_05_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_06_Regular_Orange_800x600.webm`]
            ],
            purple: [
                [lg`Weapon_Attacks/Melee/Club01_01_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_02_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_03_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_04_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_05_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_06_Regular_Purple_800x600.webm`]
            ],
            darkorangepurple: [
                [lg`Weapon_Attacks/Melee/Club01_01_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_02_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_03_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_04_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_05_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Club01_06_Dark_OrangePurple_800x600.webm`]
            ],
        }
    },
    dagger: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/Dagger02_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/Dagger02_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/Dagger02_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/Dagger02_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/Dagger02_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/Dagger02_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/Dagger02_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/Dagger02_Fire_Regular_Green_800x600.webm`],
            darkpurple: [lg`Weapon_Attacks/Melee/Dagger02_Fire_Dark_Purple_800x600.webm`],
        }
    },
    falchion: {
        '01': {
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Falchion01_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_06_Dark_OrangePurple_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Falchion01_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Falchion01_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Falchion01_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_06_Regular_Purple_800x600.webm`
            ],
            white: [
                lg`Weapon_Attacks/Melee/Falchion01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Falchion01_06_Regular_White_800x600.webm`
            ]
        },
    },
    flurryofblows: {
        'magical': {
            darkred: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Red_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Red_Magical02_800x600.webm`
            ],
            darkpurple: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Purple_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Purple_Magical02_800x600.webm`
            ],
            blue: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical02_800x600.webm`
            ],
            green: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Green_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Green_Magical02_800x600.webm`
            ],
            orange: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Orange_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Orange_Magical02_800x600.webm`
            ],
            purplepink: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_PinkPurple_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_PinkPurple_Magical02_800x600.webm`
            ],
            yellow: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Yellow_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Yellow_Magical02_800x600.webm`
            ]
        },
        'physical': {
            darkred: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Red_Physical01_800x600.webm`,
            ],
            darkpurple: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Purple_Physical01_800x600.webm`,
            ],
            blue: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Physical01_800x600.webm`,
            ],
            green: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Green_Physical01_800x600.webm`,
            ],
            orange: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Orange_Physical01_800x600.webm`,
            ],
            purplepink: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_PinkPurple_Physical01_800x600.webm`,
            ],
            yellow: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Yellow_Physical01_800x600.webm`
            ]
        }
    },
    glaive: {
        '01': {
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Glaive01_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_06_Dark_OrangePurple_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Glaive01_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Glaive01_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Glaive01_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_06_Regular_Purple_800x600.webm`
            ],
            white: [
                lg`Weapon_Attacks/Melee/Glaive01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive01_06_Regular_White_800x600.webm`
            ]
        },
        '02': {
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Glaive02_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_06_Dark_OrangePurple_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Glaive02_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Glaive02_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Glaive02_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_06_Regular_Purple_800x600.webm`
            ],
            white: [
                lg`Weapon_Attacks/Melee/Glaive02_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Glaive02_06_Regular_White_800x600.webm`
            ]
        },
    },
    greataxe: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/GreatAxe01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/GreatAxe01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/GreatAxe01_Fire_Regular_Green_800x600.webm`]
        }
    },
    greatclub: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/GreatClub01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/GreatClub01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/GreatClub01_Fire_Regular_Green_800x600.webm`]
        }
    },
    greatsword: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/GreatSword01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/GreatSword01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Green_800x600.webm`]
        }
    },
    halberd: {
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Halberd01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_06_Regular_White_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Halberd01_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Halberd01_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Halberd01_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_06_Regular_Purple_800x600.webm`
            ],
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Halberd01_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Halberd01_06_Dark_OrangePurple_800x600.webm`
            ],
        }
    },
    hammer: {
        '01': {
            white: [
                [lg`Weapon_Attacks/Melee/Hammer01_01_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_02_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_03_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_04_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_05_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_06_Regular_White_800x600.webm`]
            ],
            blue: [
                [lg`Weapon_Attacks/Melee/Hammer01_01_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_02_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_03_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_04_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_05_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_06_Regular_Blue_800x600.webm`]
            ],
            orange: [
                [lg`Weapon_Attacks/Melee/Hammer01_01_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_02_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_03_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_04_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_05_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_06_Regular_Orange_800x600.webm`]
            ],
            purple: [
                [lg`Weapon_Attacks/Melee/Hammer01_01_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_02_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_03_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_04_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_05_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_06_Regular_Purple_800x600.webm`]
            ],
            darkorangepurple: [
                [lg`Weapon_Attacks/Melee/Hammer01_01_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_02_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_03_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_04_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_05_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Hammer01_06_Dark_OrangePurple_800x600.webm`]
            ],
        },
    },
    handaxe: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/HandAxe02_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/HandAxe02_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/HandAxe02_Fire_Regular_Green_800x600.webm`]
        }
    },
    lasersword: {
        '01': {
            blue: [lg`Weapon_Attacks/Melee/LaserSword01_01_Regular_Blue_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/LaserSword01_01_Regular_Orange_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/LaserSword01_01_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/LaserSword01_01_Regular_Yellow_800x600.webm`],
            darkred: [lg`Weapon_Attacks/Melee/LaserSword01_01_Dark_Red_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/LaserSword01_01_Regular_Purple_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/LaserSword01_01_Regular_Green_800x600.webm`]
        }
    },
    mace: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/Mace01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/Mace01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Green_800x600.webm`]
        },
        '02': {
            white: [
                [lg`Weapon_Attacks/Melee/Mace01_01_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_02_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_03_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_04_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_05_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_06_Regular_White_800x600.webm`]
            ],
            blue: [
                [lg`Weapon_Attacks/Melee/Mace01_01_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_02_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_03_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_04_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_05_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_06_Regular_Blue_800x600.webm`]
            ],
            orange: [
                [lg`Weapon_Attacks/Melee/Mace01_01_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_02_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_03_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_04_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_05_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_06_Regular_Orange_800x600.webm`]
            ],
            purple: [
                [lg`Weapon_Attacks/Melee/Mace01_01_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_02_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_03_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_04_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_05_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_06_Regular_Purple_800x600.webm`]
            ],
            darkorangepurple: [
                [lg`Weapon_Attacks/Melee/Mace01_01_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_02_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_03_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_04_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_05_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Mace01_06_Dark_OrangePurple_800x600.webm`]
            ],
        }
    },
    maul: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/Maul01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/Maul01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/Maul01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/Maul01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/Maul01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/Maul01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/Maul01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/Maul01_Fire_Regular_Green_800x600.webm`]
        }
    },
    quarterstaff: {
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Quarterstaff01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_06_Regular_White_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Quarterstaff01_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Quarterstaff01_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Quarterstaff01_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_06_Regular_Purple_800x600.webm`
            ],
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Quarterstaff01_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff01_06_Dark_OrangePurple_800x600.webm`
            ],
        },
        '02': {
            white: [
                lg`Weapon_Attacks/Melee/Quarterstaff02_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_06_Regular_White_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Quarterstaff02_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Quarterstaff02_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Quarterstaff02_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_06_Regular_Purple_800x600.webm`
            ],
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Quarterstaff02_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff02_06_Dark_OrangePurple_800x600.webm`
            ],
        },
        '03': {
            white: [
                lg`Weapon_Attacks/Melee/Quarterstaff03_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_06_Regular_White_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Quarterstaff03_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Quarterstaff03_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Quarterstaff03_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_06_Regular_Purple_800x600.webm`
            ],
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Quarterstaff03_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff03_06_Dark_OrangePurple_800x600.webm`
            ],
        },
        '04': {
            white: [
                lg`Weapon_Attacks/Melee/Quarterstaff04_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_06_Regular_White_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Quarterstaff04_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Quarterstaff04_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Quarterstaff04_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_06_Regular_Purple_800x600.webm`
            ],
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Quarterstaff04_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Quarterstaff04_06_Dark_OrangePurple_800x600.webm`
            ],
        }
    },
    rapier: {
        fire: {
            white: [lg`Weapon_Attacks/Melee/Rapier01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Green_800x600.webm`]
        },
        '01': {
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Rapier01_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_06_Dark_OrangePurple_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Rapier01_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Rapier01_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Rapier01_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_06_Regular_Purple_800x600.webm`
            ],
            white: [
                lg`Weapon_Attacks/Melee/Rapier01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Rapier01_06_Regular_White_800x600.webm`
            ]
        },
    },
    scimitar: {
        '01': {
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Scimitar01_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_06_Dark_OrangePurple_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Scimitar01_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Scimitar01_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Scimitar01_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_06_Regular_Purple_800x600.webm`
            ],
            white: [
                lg`Weapon_Attacks/Melee/Scimitar01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Scimitar01_06_Regular_White_800x600.webm`
            ]
        }
    },
    shortsword: {
        '01': {
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Shortsword01_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_06_Dark_OrangePurple_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Shortsword01_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Shortsword01_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Shortsword01_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_06_Regular_Purple_800x600.webm`
            ],
            white: [
                lg`Weapon_Attacks/Melee/Shortsword01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Shortsword01_06_Regular_White_800x600.webm`
            ]
        }
    },
    spear: {
        'fire': {
            white: [lg`Weapon_Attacks/Melee/Spear01_01_Regular_White_800x600.webm`],

            orange: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/Spear01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Green_800x600.webm`]
        },
        '01': {
            white: [
                lg`Weapon_Attacks/Melee/Spear01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_06_Regular_White_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Spear01_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Spear01_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Spear01_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_06_Regular_Purple_800x600.webm`
            ],
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Spear01_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Spear01_06_Dark_OrangePurple_800x600.webm`
            ],
        },
    },
    sword: {
        fire: {
            white: [lg`Weapon_Attacks/Melee/Sword01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/Sword01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Green_800x600.webm`]
        },
        '01': {
            darkorangepurple: [
                lg`Weapon_Attacks/Melee/Sword01_01_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_02_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_03_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_04_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_05_Dark_OrangePurple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_06_Dark_OrangePurple_800x600.webm`
            ],
            blue: [
                lg`Weapon_Attacks/Melee/Sword01_01_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_02_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_03_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_04_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_05_Regular_Blue_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_06_Regular_Blue_800x600.webm`
            ],
            orange: [
                lg`Weapon_Attacks/Melee/Sword01_01_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_02_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_03_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_04_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_05_Regular_Orange_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_06_Regular_Orange_800x600.webm`
            ],
            purple: [
                lg`Weapon_Attacks/Melee/Sword01_01_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_02_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_03_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_04_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_05_Regular_Purple_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_06_Regular_Purple_800x600.webm`
            ],
            white: [
                lg`Weapon_Attacks/Melee/Sword01_01_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_02_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_03_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_04_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_05_Regular_White_800x600.webm`,
                lg`Weapon_Attacks/Melee/Sword01_06_Regular_White_800x600.webm`
            ]
        },
    },
    unarmedstrike: {
        'magical': {
            darkred: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Red_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Red_Magical02_800x600.webm`
            ],
            darkpurple: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Purple_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Purple_Magical02_800x600.webm`
            ],
            blue: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical02_800x600.webm`
            ],
            green: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Magical02_800x600.webm`
            ],
            orange: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Orange_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Orange_Magical02_800x600.webm`
            ],
            purplepink: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_PinkPurple_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_PinkPurple_Magical02_800x600.webm`
            ],
            yellow: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Magical02_800x600.webm`
            ]
        },
        'physical': {
            darkred: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Red_Physical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Red_Physical02_800x600.webm`
            ],
            darkpurple: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Purple_Physical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Purple_Physical02_800x600.webm`
            ],
            blue: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical02_800x600.webm`
            ],
            green: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Physical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Physical02_800x600.webm`
            ],
            orange: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Orange_Physical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Orange_Physical02_800x600.webm`
            ],
            purplepink: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_PinkPurple_Physical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_PinkPurple_Physical02_800x600.webm`
            ],
            yellow: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Physical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Physical02_800x600.webm`
            ]
        }
    },
    warhammer: {
        '01': {
            white: [
                [lg`Weapon_Attacks/Melee/Warhammer01_01_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_02_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_03_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_04_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_05_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_06_Regular_White_800x600.webm`]
            ],
            blue: [
                [lg`Weapon_Attacks/Melee/Warhammer01_01_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_02_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_03_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_04_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_05_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_06_Regular_Blue_800x600.webm`]
            ],
            orange: [
                [lg`Weapon_Attacks/Melee/Warhammer01_01_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_02_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_03_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_04_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_05_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_06_Regular_Orange_800x600.webm`]
            ],
            purple: [
                [lg`Weapon_Attacks/Melee/Warhammer01_01_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_02_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_03_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_04_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_05_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_06_Regular_Purple_800x600.webm`]
            ],
            darkorangepurple: [
                [lg`Weapon_Attacks/Melee/Warhammer01_01_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_02_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_03_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_04_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_05_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Warhammer01_06_Dark_OrangePurple_800x600.webm`]
            ],
        }
    },
    wrench: {
        '01': {
            white: [
                [lg`Weapon_Attacks/Melee/Wrench01_01_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_02_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_03_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_04_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_05_Regular_White_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_06_Regular_White_800x600.webm`]
            ],
            blue: [
                [lg`Weapon_Attacks/Melee/Wrench01_01_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_02_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_03_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_04_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_05_Regular_Blue_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_06_Regular_Blue_800x600.webm`]
            ],
            orange: [
                [lg`Weapon_Attacks/Melee/Wrench01_01_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_02_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_03_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_04_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_05_Regular_Orange_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_06_Regular_Orange_800x600.webm`]
            ],
            purple: [
                [lg`Weapon_Attacks/Melee/Wrench01_01_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_02_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_03_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_04_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_05_Regular_Purple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_06_Regular_Purple_800x600.webm`]
            ],
            darkorangepurple: [
                [lg`Weapon_Attacks/Melee/Wrench01_01_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_02_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_03_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_04_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_05_Dark_OrangePurple_800x600.webm`],
                [lg`Weapon_Attacks/Melee/Wrench01_06_Dark_OrangePurple_800x600.webm`]
            ],
        }
    },
}

JB2APATREONDB.static = {
    antilifeshell: {
        '01': {
            blue: [l5`Antilife_Shell/AntilifeShell_01_Blue_NoCircle_400x400.webm`]
        }
    },
    bardicinspiration: {
        inspire: {
            yellowblue: [l1`Bardic_Inspiration/BardicInspiration_01_Regular_BlueYellow_400x400.webm`],
            greenorange: [l1`Bardic_Inspiration/BardicInspiration_01_Regular_GreenOrange_400x400.webm`],
            purplepink: [l1`Bardic_Inspiration/BardicInspiration_01_Regular_PurplePink_400x400.webm`],
            darkred: [l1`Bardic_Inspiration/BardicInspiration_01_Dark_Red_400x400.webm`],
            pink: [l1`Bardic_Inspiration/BardicInspiration_01_Regular_Pink_400x400.webm`]
        },
        marker: {
            yellowblue: [lg`Marker/MusicMarker_01_Regular_BlueYellow_400x400.webm`],
            greenorange: [lg`Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`],
            pink: [lg`Marker/MusicMarker_01_Regular_Pink_400x400.webm`],
            purplepink: [lg`Marker/MusicMarker_01_Regular_PurplePink_400x400.webm`],
            darkred: [lg`Marker/MusicMarker_01_Dark_Red_400x400.webm`],
        }
    },
    bless: {
        '01': {
            blue: {
                'intro': l1`Bless/Bless_01_Regular_Blue_Intro_400x400.webm`,
                'loop': l1`Bless/Bless_01_Regular_Blue_Loop_400x400.webm`,
            },
            green: {
                'intro': l1`Bless/Bless_01_Regular_Green_Intro_400x400.webm`,
                'loop': l1`Bless/Bless_01_Regular_Green_Loop_400x400.webm`,
            },
            purple: {
                'intro': l1`Bless/Bless_01_Regular_Purple_Intro_400x400.webm`,
                'loop': l1`Bless/Bless_01_Regular_Purple_Loop_400x400.webm`,
            },
            yellow: {
                'intro': l1`Bless/Bless_01_Regular_Yellow_Intro_400x400.webm`,
                'loop': l1`Bless/Bless_01_Regular_Yellow_Loop_400x400.webm`,
            }
        }
    },
    boulderimpact: {
        '01': {
            white: [lg`Impact/BoulderImpact_01_Regular_White_500x500.webm`]
        }
    },
    burninghands: {
        '01': {
            blue: [l1`Burning_Hands/BurningHands_01_Regular_Blue_600x600.webm`],
            green: [l1`Burning_Hands/BurningHands_01_Regular_Green_600x600.webm`],
            orange: [l1`Burning_Hands/BurningHands_01_Regular_Orange_600x600.webm`],
            purple: [l1`Burning_Hands/BurningHands_01_Regular_Purple_600x600.webm`],
        },
        '02': {
            blue: [l1`Burning_Hands/BurningHands_02_Regular_Blue_600x600.webm`],
            green: [l1`Burning_Hands/BurningHands_02_Regular_Green_600x600.webm`],
            orange: [l1`Burning_Hands/BurningHands_02_Regular_Orange_600x600.webm`],
            purple: [l1`Burning_Hands/BurningHands_02_Regular_Purple_600x600.webm`],
        },
    },
    calllightning: {
        '01': {
            blue: [l3`Call_Lightning/CallLightning_01_Blue_1000x1000.webm`],
            blueorange: [l3`Call_Lightning/CallLightning_01_BlueOrange_1000x1000.webm`],
            green: [l3`Call_Lightning/CallLightning_01_Green_1000x1000.webm`],
            pinkyellow: [l3`Call_Lightning/CallLightning_01_PinkYellow_1000x1000.webm`],
            purple: [l3`Call_Lightning/CallLightning_01_Purple_1000x1000.webm`],
            red: [l3`Call_Lightning/CallLightning_01_Red_1000x1000.webm`],
            yellow: [l3`Call_Lightning/CallLightning_01_Yellow_1000x1000.webm`]
        }
    },
    cloudofdaggers: {
        '01': {
            darkpurple: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Dark_Purple_400x400.webm`],
            darkred: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Dark_Red_400x400.webm`],
            blue: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Blue_400x400.webm`],
            green: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Green_400x400.webm`],
            orange: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Orange_400x400.webm`],
            purple: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Purple_400x400.webm`],
            red: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Red_400x400.webm`],
            yellow: [l2`Cloud_Of_Daggers/CloudOfDaggers_01_Light_Yellow_400x400.webm`]
        },
        kunai: {
            darkpurple: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Dark_Purple_400x400.webm`],
            darkred: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Dark_Red_400x400.webm`],
            blue: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Blue_400x400.webm`],
            green: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Green_400x400.webm`],
            orange: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Orange_400x400.webm`],
            purple: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Purple_400x400.webm`],
            red: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Red_400x400.webm`],
            yellow: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Yellow_400x400.webm`]
        },
    },
    coneofcold: {
        '01': {
            blue: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Blue_600x600.webm`],
            green: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Green_600x600.webm`],
            orange: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Orange_600x600.webm`],
            purple: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Purple_600x600.webm`],
        },
    },
    bite: {
        '01': {
            red: [lg`Creature/Bite_01_Regular_Red_400x400.webm`],
            blue: [lg`Creature/Bite_01_Regular_Blue_400x400.webm`],
            green: [lg`Creature/Bite_01_Regular_Green_400x400.webm`],
            grey: [lg`Creature/Bite_01_Regular_Grey_400x400.webm`],
            orange: [lg`Creature/Bite_01_Regular_Orange_400x400.webm`],
            purple: [lg`Creature/Bite_01_Regular_Purple_400x400.webm`],
            yellow: [lg`Creature/Bite_01_Regular_Yellow_400x400.webm`]
        }
    },
    claw: {
        '01': {
            red: [lg`Creature/Claws_01_Regular_Red_400x400.webm`],
            blue: [lg`Creature/Claws_01_Bright_Blue_400x400.webm`],
            green: [lg`Creature/Claws_01_Bright_Green_400x400.webm`],
            orange: [lg`Creature/Claws_01_Bright_Orange_400x400.webm`],
            purple: [lg`Creature/Claws_01_Bright_Purple_400x400.webm`],
            yellow: [lg`Creature/Claws_01_Bright_Yellow_400x400.webm`],
            darkred: [lg`Creature/Claws_01_Dark_Red_400x400.webm`]
        }
    },
    curewounds: {
        '01': {
            blue: [l1`Cure_Wounds/CureWounds_01_Blue_400x400.webm`],
            green: [l1`Cure_Wounds/CureWounds_01_Green_400x400.webm`],
            pink: [l1`Cure_Wounds/CureWounds_01_Pink_400x400.webm`],
            purple: [l1`Cure_Wounds/CureWounds_01_Purple_400x400.webm`],
            red: [l1`Cure_Wounds/CureWounds_01_Red_400x400.webm`]
        }
    },
    darkness: {
        '01': {
            black: [l2`Darkness/Darkness_01_Black_600x600.webm`],
            green: [l2`Darkness/Darkness_01_Green_600x600.webm`]
        }
    },
    divinesmite: {
        'source': {
            yellowblue: [l2`Divine_Smite/DivineSmite_01_Regular_BlueYellow_Caster_400x400.webm`],
            greenyellow: [l2`Divine_Smite/DivineSmite_01_Regular_GreenYellow_Caster_400x400.webm`],
            purplepink: [l2`Divine_Smite/DivineSmite_01_Regular_PurplePink_Caster_400x400.webm`],
            darkpurple: [l2`Divine_Smite/DivineSmite_01_Dark_Purple_Caster_400x400.webm`],
            yellowwhite: [l2`Divine_Smite/DivineSmite_01_Regular_YellowWhite_Caster_400x400.webm`],
            darkred: [l2`Divine_Smite/DivineSmite_01_Dark_Red_Caster_400x400.webm`],
        },
        'target': {
            yellowblue: [l2`Divine_Smite/DivineSmite_01_Regular_BlueYellow_Target_400x400.webm`],
            greenyellow: [l2`Divine_Smite/DivineSmite_01_Regular_GreenYellow_Target_400x400.webm`],
            purplepink: [l2`Divine_Smite/DivineSmite_01_Regular_PurplePink_Target_400x400.webm`],
            darkpurple: [l2`Divine_Smite/DivineSmite_01_Dark_Purple_Target_400x400.webm`],
            yellowwhite: [l2`Divine_Smite/DivineSmite_01_Regular_YellowWhite_Target_400x400.webm`],
            darkred: [l2`Divine_Smite/DivineSmite_01_Dark_Red_Target_400x400.webm`],
        }
    },
    dizzystars: {
        '01': {
            black: [lg`Conditions/Dizzy_Stars/DizzyStars_01_Black_400x400.webm`],
            blueorange: [lg`Conditions/Dizzy_Stars/DizzyStars_01_BlueOrange_400x400.webm`],
            green: [lg`Conditions/Dizzy_Stars/DizzyStars_01_Green_400x400.webm`],
            orange: [lg`Conditions/Dizzy_Stars/DizzyStars_01_Orange_400x400.webm`],
            pink: [lg`Conditions/Dizzy_Stars/DizzyStars_01_Pink_400x400.webm`],
            purple: [lg`Conditions/Dizzy_Stars/DizzyStars_01_Purple_400x400.webm`],
            red: [lg`Conditions/Dizzy_Stars/DizzyStars_01_Red_400x400.webm`],
            white: [lg`Conditions/Dizzy_Stars/DizzyStars_01_White_400x400.webm`],
            yellow: [lg`Conditions/Dizzy_Stars/DizzyStars_01_Yellow_400x400.webm`]
        }
    },
    explosion: {
        '01': {
            blue: [
                lg`Explosion/Explosion_01_Blue_400x400.webm`,
                lg`Explosion/Explosion_02_Blue_400x400.webm`,
                lg`Explosion/Explosion_04_Regular_Blue_400x400.webm`,
            ],
            green: [
                lg`Explosion/Explosion_01_Green_400x400.webm`,
                lg`Explosion/Explosion_02_Green_400x400.webm`,
                lg`Explosion/Explosion_04_Regular_Green_400x400.webm`,
            ],
            orange: [
                lg`Explosion/Explosion_01_Orange_400x400.webm`,
                lg`Explosion/Explosion_02_Orange_400x400.webm`,
                lg`Explosion/Explosion_04_Regular_Orange_400x400.webm`,
            ],
            purple: [
                lg`Explosion/Explosion_01_Purple_400x400.webm`,
                lg`Explosion/Explosion_02_Purple_400x400.webm`,
            ],
            yellow: [
                lg`Explosion/Explosion_01_Yellow_400x400.webm`,
                lg`Explosion/Explosion_02_Yellow_400x400.webm`,
            ],
            yellowblue: [
                lg`Explosion/Explosion_03_Regular_BlueYellow_400x400.webm`,
            ],
            greenorange: [
                lg`Explosion/Explosion_03_Regular_GreenOrange_400x400.webm`,
            ],
            purplepink: [
                lg`Explosion/Explosion_03_Regular_PurplePink_400x400.webm`,
            ],
            whiteblue: [
                lg`Explosion/Explosion_03_Dark_BlueWhite_400x400.webm`,
            ],
            pink: [
                lg`Explosion/Explosion_03_Regular_Pink_400x400.webm`,
            ],
            darkpurple: [
                lg`Explosion/Explosion_04_Dark_Purple_400x400.webm`,
            ],
            darkred: [
                lg`Explosion/Explosion_04_Dark_Red_400x400.webm`,
            ],
        }
    },
    fogcloud: {
        '01': {
            white: [l1`Fog_Cloud/FogCloud_01_White_800x800.webm`]
        },
        '02': {
            white: [l1`Fog_Cloud/FogCloud_02_Regular_White_800x800.webm`],
            green: [l1`Fog_Cloud/FogCloud_02_Regular_Green_800x800.webm`]
        },
    },
    generichealing: {
        '01': {
            blue: [lg`Healing/HealingAbility_01_Blue_400x400.webm`],
            green: [lg`Healing/HealingAbility_01_Green_400x400.webm`],
            purple: [lg`Healing/HealingAbility_01_Purple_400x400.webm`],
            yellow: [lg`Healing/HealingAbility_01_Yellow_400x400.webm`],
        },
        '02': {
            whiteblue: [lg`Healing/HealingAbility_02_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Healing/HealingAbility_02_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Healing/HealingAbility_02_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Healing/HealingAbility_02_Regular_TealYellow_Burst_600x600.webm`],
        }
    },
    huntersmark: {
        'eye': {
            blue: [l1`Hunters_Mark/HuntersMark_01_Regular_Blue_Pulse_200x200.webm`],
            green: [l1`Hunters_Mark/HuntersMark_01_Regular_Green_Pulse_200x200.webm`],
            purple: [l1`Hunters_Mark/HuntersMark_01_Regular_Purple_Pulse_200x200.webm`],
        },
        'eyeloop': {
            blue: [l1`Hunters_Mark/HuntersMark_01_Regular_Blue_Loop_200x200.webm`],
            green: [l1`Hunters_Mark/HuntersMark_01_Regular_Green_Loop_200x200.webm`],
            purple: [l1`Hunters_Mark/HuntersMark_01_Regular_Purple_Loop_200x200.webm`],
        },
        'paw': {
            blue: [l1`Hunters_Mark/HuntersMark_02_Regular_Blue_Pulse_200x200.webm`],
            green: [l1`Hunters_Mark/HuntersMark_02_Regular_Green_Pulse_200x200.webm`],
            purple: [l1`Hunters_Mark/HuntersMark_02_Regular_Purple_Pulse_200x200.webm`],
        },
        'pawloop': {
            blue: [l1`Hunters_Mark/HuntersMark_02_Regular_Blue_Loop_200x200.webm`],
            green: [l1`Hunters_Mark/HuntersMark_02_Regular_Green_Loop_200x200.webm`],
            purple: [l1`Hunters_Mark/HuntersMark_02_Regular_Purple_Loop_200x200.webm`],
        },
    },
    icespikes: {
        '01': {
            blue: [lg`Ice/IceSpikesRadialBurst_01_Regular_Blue_1000x1000.webm`],
            red: [lg`Ice/IceSpikesRadialBurst_01_Regular_Red_1000x1000.webm`],
            white: [lg`Ice/IceSpikesRadialBurst_01_Regular_White_1000x1000.webm`]
        }
    },
    impact: {
        '01': {
            darkred: [
                lg`Impact/Impact_01_Dark_Red_400x400.webm`,
                lg`Impact/Impact_02_Dark_Red_400x400.webm`,
                lg`Impact/Impact_03_Dark_Red_400x400.webm`,
                lg`Impact/Impact_04_Dark_Red_400x400.webm`,
            ],
            blue: [
                lg`Impact/Impact_01_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_02_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_03_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_04_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_05_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_07_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_08_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_09_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_10_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_11_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_12_Regular_Blue_400x400.webm`
            ],
            green: [
                lg`Impact/Impact_01_Regular_Green_400x400.webm`,
                lg`Impact/Impact_02_Regular_Green_400x400.webm`,
                lg`Impact/Impact_03_Regular_Green_400x400.webm`,
                lg`Impact/Impact_04_Regular_Green_400x400.webm`,
                lg`Impact/Impact_05_Regular_Green_400x400.webm`,
                lg`Impact/Impact_07_Regular_Green_400x400.webm`,
                lg`Impact/Impact_08_Regular_Green_400x400.webm`,
                lg`Impact/Impact_09_Regular_Green_400x400.webm`,
                lg`Impact/Impact_10_Regular_Green_400x400.webm`,
                lg`Impact/Impact_11_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_12_Regular_Blue_400x400.webm`
            ],
            yellow: [
                lg`Impact/Impact_01_Regular_Yellow_400x400.webm`,
                lg`Impact/Impact_02_Regular_Yellow_400x400.webm`,
                lg`Impact/Impact_03_Regular_Yellow_400x400.webm`,
                lg`Impact/Impact_04_Regular_Yellow_400x400.webm`,
                lg`Impact/Impact_05_Regular_Yellow_400x400.webm`,
                lg`Impact/Impact_06_Regular_Yellow_400x400.webm`,
                lg`Impact/Impact_07_Regular_Yellow_400x400.webm`,
            ],
            orange: [
                lg`Impact/Impact_05_Regular_Orange_400x400.webm`,
                lg`Impact/Impact_07_Regular_Orange_400x400.webm`,
                lg`Impact/Impact_08_Regular_Orange_400x400.webm`,
                lg`Impact/Impact_09_Regular_Orange_400x400.webm`,
                lg`Impact/Impact_10_Regular_Orange_400x400.webm`,
            ],
            purple: [
                lg`Impact/Impact_05_Regular_Purple_400x400.webm`,
                lg`Impact/Impact_11_Regular_Blue_400x400.webm`,
                lg`Impact/Impact_12_Regular_Blue_400x400.webm`
            ],
            red: [
                lg`Impact/Impact_05_Regular_Red_400x400.webm`,
                lg`Impact/Impact_08_Regular_Red_400x400.webm`,
                lg`Impact/Impact_10_Regular_Red_400x400.webm`
            ],
            white: [
                lg`Impact/Impact_07_Regular_White_400x400.webm`,
                lg`Impact/Impact_09_Regular_White_400x400.webm`,
            ],
            darkpurple: [
                lg`Impact/Impact_11_Dark_Purple_400x400.webm`,
                lg`Impact/Impact_12_Dark_Purple_400x400.webm`
            ]
        }
    },
    lightningball: {
        '01': {
            darkpurple: [lg`Lightning/LightningBall_01_Dark_Purple_400x400.webm`],
            blue: [lg`Lightning/LightningBall_01_Regular_Blue_400x400.webm`],
            green: [lg`Lightning/LightningBall_01_Regular_Green_400x400.webm`],
            purple: [lg`Lightning/LightningBall_01_Regular_Purple_400x400.webm`]
        }
    },
    gustofwind: {
        slow: {
            white: [l2`Gust_Of_Wind/GustOfWind_01_White_1200x200.webm`]
        },
        fast: {
            white: [l2`Gust_Of_Wind/GustOfWind_01_White_VeryFast_1200x200.webm`]
        },
    },
    magicSign: {
        '01': {
            blue: [lg`Magic_Signs/Abjuration_01_Blue_Circle_800x800.webm`],
            yellow: [lg`Magic_Signs/Conjuration_01_Yellow_Circle_800x800.webm`],
            lightblue: [lg`Magic_Signs/Divination_01_Light_Blue_Circle_800x800.webm`],
        }
    },
    marker: {
        '01': {
            whiteblue: [lg`Marker/Marker_01_Dark_BlueWhite_400x400.webm`],
            yellowblue: [lg`Marker/Marker_01_Regular_BlueYellow_400x400.webm`],
            greenorange: [lg`Marker/Marker_01_Regular_GreenOrange_400x400.webm`],
            pink: [lg`Marker/Marker_01_Regular_Pink_400x400.webm`],
            purplepink: [lg`Marker/Marker_01_Regular_PurplePink_400x400.webm`],
        },
        '02': {
            whiteblue: [lg`Marker/Marker_02_Dark_BlueWhite_400x400.webm`],
            yellowblue: [lg`Marker/Marker_02_Regular_BlueYellow_400x400.webm`],
            greenorange: [lg`Marker/Marker_02_Regular_GreenOrange_400x400.webm`],
            pink: [lg`Marker/Marker_02_Regular_Pink_400x400.webm`],
            purplepink: [lg`Marker/Marker_02_Regular_PurplePink_400x400.webm`],
        },
        '03': {
            darkred: [lg`Marker/MusicMarker_01_Dark_Red_400x400.webm`],
            yellowblue: [lg`Marker/MusicMarker_01_Regular_BlueYellow_400x400.webm`],
            greenorange: [lg`Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`],
            pink: [lg`Marker/MusicMarker_01_Regular_Pink_400x400.webm`],
            purplepink: [lg`Marker/MusicMarker_01_Regular_PurplePink_400x400.webm`],
        },
        energystrands: {
            blue: [lg`Marker/EnergyStrands_01_Regular_Blue_600x600.webm`],
            blueorange: [lg`Marker/EnergyStrands_01_Regular_BlueOrange_600x600.webm`],
            darkred: [lg`Marker/EnergyStrands_01_Dark_Red_600x600.webm`],
            orange: [lg`Marker/EnergyStrands_01_Regular_Orange_600x600.webm`],
            pinkyellow: [lg`Marker/EnergyStrands_01_Regular_PinkYellow_600x600.webm`],
            purple: [lg`Marker/EnergyStrands_01_Regular_Purple_600x600.webm`],
        }
    },
    mistystep: {
        '01': {
            blue: [l2`Misty_Step/MistyStep_01_Regular_Blue_400x400.webm`],
            green: [l2`Misty_Step/MistyStep_01_Regular_Green_400x400.webm`],
            orange: [l2`Misty_Step/MistyStep_01_Regular_Orange_400x400.webm`],
            purple: [l2`Misty_Step/MistyStep_01_Regular_Purple_400x400.webm`],
            darkgreen: [l2`Misty_Step/MistyStep_01_Dark_Green_400x400.webm`],
            darkred: [l2`Misty_Step/MistyStep_01_Dark_Red_400x400.webm`],
            grey: [l2`Misty_Step/MistyStep_01_Regular_Grey_400x400.webm`]
        },
        '02': {
            blue: [l2`Misty_Step/MistyStep_02_Regular_Blue_400x400.webm`],
            green: [l2`Misty_Step/MistyStep_02_Regular_Green_400x400.webm`],
            orange: [l2`Misty_Step/MistyStep_02_Regular_Orange_400x400.webm`],
            purple: [l2`Misty_Step/MistyStep_02_Regular_Purple_400x400.webm`],
            darkgreen: [l2`Misty_Step/MistyStep_02_Dark_Green_400x400.webm`],
            darkred: [l2`Misty_Step/MistyStep_02_Dark_Red_400x400.webm`],
            grey: [l2`Misty_Step/MistyStep_02_Regular_Grey_400x400.webm`]
        }
    },
    moonbeam: {
        loop: {
            blue: [l2`Moonbeam/Moonbeam_01_Regular_Blue_400x400.webm`],
            green: [l2`Moonbeam/Moonbeam_01_Regular_Green_400x400.webm`],
            rainbow: [l2`Moonbeam/Moonbeam_01_Regular_Rainbow_400x400.webm`],
        },
        nopulse: {
            blue: [l2`Moonbeam/MoonbeamNoPulse_01_Regular_Blue_400x400.webm`],
            green: [l2`Moonbeam/MoonbeamNoPulse_01_Regular_Green_400x400.webm`],
            rainbow: [l2`Moonbeam/MoonbeamNoPulse_01_Regular_Rainbow_400x400.webm`],
        },
        intro: {
            blue: [l2`Moonbeam/MoonbeamIntro_01_Regular_Blue_400x400.webm`],
            green: [l2`Moonbeam/MoonbeamIntro_01_Regular_Green_400x400.webm`],
            rainbow: [l2`Moonbeam/MoonbeamIntro_01_Regular_Rainbow_400x400.webm`],
        },
        outro: {
            blue: [l2`Moonbeam/MoonbeamOutro_01_Regular_Blue_400x400.webm`],
            green: [l2`Moonbeam/MoonbeamOutro_01_Regular_Green_400x400.webm`],
            rainbow: [l2`Moonbeam/MoonbeamOutro_01_Regular_Rainbow_400x400.webm`],
        },
    },
    music: {
        '01': {
            blue: [
                lg`Music_Notation/BassClef_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/BeamedQuavers_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/Crotchet_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/Flat_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/Quaver_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/Sharp_01_Regular_Blue_200x200.webm`,
                lg`Music_Notation/TrebleClef_01_Regular_Blue_200x200.webm`
            ],
            green: [
                lg`Music_Notation/BassClef_01_Regular_Green_200x200.webm`,
                lg`Music_Notation/BeamedQuavers_01_Regular_Green_200x200.webm`,
                lg`Music_Notation/Crotchet_01_Regular_Green_200x200.webm`,
                lg`Music_Notation/Flat_01_Regular_Green_200x200.webm`,
                lg`Music_Notation/Quaver_01_Regular_Green_200x200.webm`,
                lg`Music_Notation/Sharp_01_Regular_Green_200x200.webm`,
                lg`Music_Notation/TrebleClef_01_Regular_Green_200x200.webm`
            ],
            orange: [
                lg`Music_Notation/BassClef_01_Regular_Orange_200x200.webm`,
                lg`Music_Notation/BeamedQuavers_01_Regular_Orange_200x200.webm`,
                lg`Music_Notation/Crotchet_01_Regular_Orange_200x200.webm`,
                lg`Music_Notation/Flat_01_Regular_Orange_200x200.webm`,
                lg`Music_Notation/Quaver_01_Regular_Orange_200x200.webm`,
                lg`Music_Notation/Sharp_01_Regular_Orange_200x200.webm`,
                lg`Music_Notation/TrebleClef_01_Regular_Orange_200x200.webm`
            ],
            purple: [
                lg`Music_Notation/BassClef_01_Regular_Purple_200x200.webm`,
                lg`Music_Notation/BeamedQuavers_01_Regular_Purple_200x200.webm`,
                lg`Music_Notation/Crotchet_01_Regular_Purple_200x200.webm`,
                lg`Music_Notation/Flat_01_Regular_Purple_200x200.webm`,
                lg`Music_Notation/Quaver_01_Regular_Purple_200x200.webm`,
                lg`Music_Notation/Sharp_01_Regular_Purple_200x200.webm`,
                lg`Music_Notation/TrebleClef_01_Regular_Purple_200x200.webm`
            ]
        }
    },
    outpulse01: {
        '01': {
            whiteblue: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_TealYellow_Burst_600x600.webm`],
        }
    },
    outpulse02: {
        '01': {
            whiteblue: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_TealYellow_Burst_600x600.webm`],
        }
    },
    breathweaponline: {
        acid: {
            blue: [lg`Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Blue_30ft_Line_Burst_1200x200.webm`],
            green: [lg`Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Green_30ft_Line_Burst_1200x200.webm`],
            orange: [lg`Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Orange_30ft_Line_Burst_1200x200.webm`],
            purple: [lg`Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Purple_30ft_Line_Burst_1200x200.webm`],
        },
        fire: {
            blue: [lg`Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Blue_30ft_Line_Burst_1200x200.webm`],
            green: [lg`Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Green_30ft_Line_Burst_1200x200.webm`],
            orange: [lg`Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Line_Burst_1200x200.webm`],
            purple: [lg`Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Purple_30ft_Line_Burst_1200x200.webm`],
        },
        lightning: {
            blue: [lg`Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Blue_30ft_Line_Burst_1200x200.webm`],
            green: [lg`Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Green_30ft_Line_Burst_1200x200.webm`],
            orange: [lg`Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Orange_30ft_Line_Burst_1200x200.webm`],
            purple: [lg`Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Purple_30ft_Line_Burst_1200x200.webm`],
        },

    },
    breathweaponcone: {
        'cold': {
            blue: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Blue_30ft_Cone_Burst_600x600.webm`],
            green: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Green_30ft_Cone_Burst_600x600.webm`],
            orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
            purple: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Purple_30ft_Cone_Burst_600x600.webm`],
        },
        'fire01': {
            blue: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Blue_30ft_Cone_Burst_600x600.webm`],
            green: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Green_30ft_Cone_Burst_600x600.webm`],
            orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
            purple: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Purple_30ft_Cone_Burst_600x600.webm`],
        },
        'fire02': {
            blue: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Blue_30ft_Cone_Burst_600x600.webm`],
            green: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Green_30ft_Cone_Burst_600x600.webm`],
            orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
            purple: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Purple_30ft_Cone_Burst_600x600.webm`],
        },
        'poison': {
            blue: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Blue_30ft_Cone_Burst_600x600.webm`],
            green: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Green_30ft_Cone_Burst_600x600.webm`],
            orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
            purple: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Purple_30ft_Cone_Burst_600x600.webm`],
        },
    },
    lightningbolt: {
        '01': {
            darkblue: [l3`Lightning_Bolt/LightningBolt_01_Dark_Blue_4000x200.webm`],
            blue: [l3`Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x200.webm`],
            green: [l3`Lightning_Bolt/LightningBolt_01_Regular_Green_4000x200.webm`],
            purple: [l3`Lightning_Bolt/LightningBolt_01_Regular_Purple_4000x200.webm`]
        },
        '02': {
            darkblue: [l3`Lightning_Bolt/LightningBolt_01_Dark_Blue_4000x400.webm`],
            blue: [l3`Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x400.webm`],
            green: [l3`Lightning_Bolt/LightningBolt_01_Regular_Green_4000x400.webm`],
            purple: [l3`Lightning_Bolt/LightningBolt_01_Regular_Purple_4000x400.webm`]
        }
    },
    entangle: {
        '01': {
            brown: [l1`Entangle/Entangle_01_Brown_400x400.webm`],
            green: [l1`Entangle/Entangle_01_Green_400x400.webm`],
            yellow: [l1`Entangle/Entangle_01_Yellow_400x400.webm`],
            darkpurple: [l1`Entangle/Entangle_01_Dark_Purple_400x400.webm`],
            palegreen: [l1`Entangle/Entangle_01_Regular_Green02_400x400.webm`]
        }
    },
    thunderwave: {
        left: {
            blue: [l1`Thunderwave/Thunderwave_01_Bright_Blue_BLeft_600x600.webm`],
            green: [l1`Thunderwave/Thunderwave_01_Bright_Green_BLeft_600x600.webm`],
            orange: [l1`Thunderwave/Thunderwave_01_Bright_Orange_BLeft_600x600.webm`],
            purple: [l1`Thunderwave/Thunderwave_01_Dark_Purple_BLeft_600x600.webm`],
            red: [l1`Thunderwave/Thunderwave_01_Dark_Red_BLeft_600x600.webm`],
        },
        mid: {
            blue: [l1`Thunderwave/Thunderwave_01_Bright_Blue_BMid_600x600.webm`],
            green: [l1`Thunderwave/Thunderwave_01_Bright_Green_BMid_600x600.webm`],
            orange: [l1`Thunderwave/Thunderwave_01_Bright_Orange_BMid_600x600.webm`],
            purple: [l1`Thunderwave/Thunderwave_01_Dark_Purple_BMid_600x600.webm`],
            red: [l1`Thunderwave/Thunderwave_01_Dark_Red_BMid_600x600.webm`],
        },
        center: {
            blue: [l1`Thunderwave/Thunderwave_01_Bright_Blue_Center_600x600.webm`],
            green: [l1`Thunderwave/Thunderwave_01_Bright_Green_Center_600x600.webm`],
            orange: [l1`Thunderwave/Thunderwave_01_Bright_Orange_Center_600x600.webm`],
            purple: [l1`Thunderwave/Thunderwave_01_Dark_Purple_Center_600x600.webm`],
            red: [l1`Thunderwave/Thunderwave_01_Dark_Red_Center_600x600.webm`],
        },
    },
    shatter: {
        '01': {
            purple: [l2`Shatter/Shatter_01_Purple_400x400.webm`],
            red: [l2`Shatter/Shatter_01_Red_400x400.webm`],
            blue: [l2`Shatter/Shatter_01_Blue_400x400.webm`],
            green: [l2`Shatter/Shatter_01_Green_400x400.webm`],
            orange: [l2`Shatter/Shatter_01_Orange_400x400.webm`]
        }
    },
    shieldspell: {
        '01': {
            blue: {
                'intro': l1`Shield/Shield_01_Regular_Blue_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_01_Regular_Blue_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_01_Regular_Blue_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_01_Regular_Blue_OutroFade_400x400.webm`,
            },
            green: {
                'intro': l1`Shield/Shield_01_Regular_Green_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_01_Regular_Green_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_01_Regular_Green_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_01_Regular_Green_OutroFade_400x400.webm`,
            },
            purple: {
                'intro': l1`Shield/Shield_01_Regular_Purple_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_01_Regular_Purple_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_01_Regular_Purple_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_01_Regular_Purple_OutroFade_400x400.webm`,
            },
            red: {
                'intro': l1`Shield/Shield_01_Regular_Red_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_01_Regular_Red_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_01_Regular_Red_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_01_Regular_Red_OutroFade_400x400.webm`,
            },
            yellow: {
                'intro': l1`Shield/Shield_01_Regular_Yellow_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_01_Regular_Yellow_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_01_Regular_Yellow_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_01_Regular_Yellow_OutroFade_400x400.webm`,
            }


        },
        '02': {
            blue: {
                'intro': l1`Shield/Shield_02_Regular_Blue_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_02_Regular_Blue_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_02_Regular_Blue_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_02_Regular_Blue_OutroFade_400x400.webm`,
            },
            green: {
                'intro': l1`Shield/Shield_02_Regular_Green_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_02_Regular_Green_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_02_Regular_Green_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_02_Regular_Green_OutroFade_400x400.webm`,
            },
            purple: {
                'intro': l1`Shield/Shield_02_Regular_Purple_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_02_Regular_Purple_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_02_Regular_Purple_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_02_Regular_Purple_OutroFade_400x400.webm`,
            },
            red: {
                'intro': l1`Shield/Shield_02_Regular_Red_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_02_Regular_Red_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_02_Regular_Red_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_02_Regular_Red_OutroFade_400x400.webm`,
            },
            yellow: {
                'intro': l1`Shield/Shield_02_Regular_Yellow_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_02_Regular_Yellow_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_02_Regular_Yellow_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_02_Regular_Yellow_OutroFade_400x400.webm`,
            }

        },
        '03': {
            blue: {
                'intro': l1`Shield/Shield_03_Regular_Blue_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_03_Regular_Blue_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_03_Regular_Blue_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_03_Regular_Blue_OutroFade_400x400.webm`,
            },
            green: {
                'intro': l1`Shield/Shield_03_Regular_Green_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_03_Regular_Green_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_03_Regular_Green_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_03_Regular_Green_OutroFade_400x400.webm`,
            },
            purple: {
                'intro': l1`Shield/Shield_03_Regular_Purple_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_03_Regular_Purple_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_03_Regular_Purple_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_03_Regular_Purple_OutroFade_400x400.webm`,
            },
            red: {
                'intro': l1`Shield/Shield_03_Regular_Red_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_03_Regular_Red_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_03_Regular_Red_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_03_Regular_Red_OutroFade_400x400.webm`,
            },
            yellow: {
                'intro': l1`Shield/Shield_03_Regular_Yellow_Intro_400x400.webm`,
                'loop': l1`Shield/Shield_03_Regular_Yellow_Loop_400x400.webm`,
                'outro_explode': l1`Shield/Shield_03_Regular_Yellow_OutroExplode_400x400.webm`,
                'outro_fade': l1`Shield/Shield_03_Regular_Yellow_OutroFade_400x400.webm`,
            }
        }
    },
    sleetstorm: {
        '01': {
            blue: [l3`Sleet_Storm/SleetStorm_01_Blue_800x800.webm`],
            green: [l3`Sleet_Storm/SleetStorm_01_Green_800x800.webm`],
            purple: [l3`Sleet_Storm/SleetStorm_01_Purple_800x800.webm`],
            tealyellow: [l3`Sleet_Storm/SleetStorm_01_TealYellow_800x800.webm`]
        }
    },
    sneakattack: {
        '01': {
            darkgreen: [l1`Sneak_Attack/Sneak_Attack_Dark_Green_300x300.webm`],
            darkpurple: [l1`Sneak_Attack/Sneak_Attack_Dark_Purple_300x300.webm`],
            darkred: [l1`Sneak_Attack/Sneak_Attack_Dark_Red_300x300.webm`],
            blue: [l1`Sneak_Attack/Sneak_Attack_Regular_Blue_300x300.webm`],
            orange: [l1`Sneak_Attack/Sneak_Attack_Regular_Orange_300x300.webm`],
            pink: [l1`Sneak_Attack/Sneak_Attack_Regular_Pink_300x300.webm`],
            yellow: [l1`Sneak_Attack/Sneak_Attack_Regular_Yellow_300x300.webm`]
        }
    },
    snowflake: {
        '01': {
            whiteblue: [lg`Ice/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Ice/SnowflakeBurst_01_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Ice/SnowflakeBurst_01_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Ice/SnowflakeBurst_01_Regular_TealYellow_Burst_600x600.webm`],
        }
    },
    spiritguardians: {
        '01': {
            darkblue: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_Blue_600x600.webm`],
            darkpurple: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_Purple_600x600.webm`],
            darkred: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_Red_600x600.webm`],
            yellowblue: [l3`Spirit_Guardians/SpiritGuardians_01_Light_BlueYellow_600x600.webm`],
            greenorange: [l3`Spirit_Guardians/SpiritGuardians_01_Light_GreenOrange_600x600.webm`],
            purplepink: [l3`Spirit_Guardians/SpiritGuardians_01_Light_PinkPurple_600x600.webm`],
            darkwhiteblue: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_WhiteBlue_600x600.webm`]
        }
    },
    staticelectricity: {
        '01': {
            darkpurple: [lg`Lightning/StaticElectricity_01_Dark_Purple_400x400.webm`],
            blue: [lg`Lightning/StaticElectricity_01_Regular_Blue_400x400.webm`],
            green: [lg`Lightning/StaticElectricity_01_Regular_Green_400x400.webm`],
            purple: [lg`Lightning/StaticElectricity_01_Regular_Purple_400x400.webm`]
        },
        '02': {
            darkpurple: [lg`Lightning/StaticElectricity_02_Dark_Purple_400x400.webm`],
            blue: [lg`Lightning/StaticElectricity_02_Regular_Blue_400x400.webm`],
            green: [lg`Lightning/StaticElectricity_02_Regular_Green_400x400.webm`],
            purple: [lg`Lightning/StaticElectricity_02_Regular_Purple_400x400.webm`]
        }
    },
    tollthedead: {
        bell: {
            blue: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Blue_400x400.webm`],
            green: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Green_400x400.webm`],
            purple: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Purple_400x400.webm`],
            red: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Red_400x400.webm`],
        },
        complete: {
            blue: [l0`Toll_The_Dead/TollTheDead_01_Regular_Blue_400x400.webm`],
            green: [l0`Toll_The_Dead/TollTheDead_01_Regular_Green_400x400.webm`],
            purple: [l0`Toll_The_Dead/TollTheDead_01_Regular_Purple_400x400.webm`],
            red: [l0`Toll_The_Dead/TollTheDead_01_Regular_Red_400x400.webm`],
        },
        shockwave: {
            blue: [l0`Toll_The_Dead/TollTheDeadShockwave_01_Regular_Blue_400x400.webm`],
            green: [l0`Toll_The_Dead/TollTheDeadShockwave_01_Regular_Green_400x400.webm`],
            purple: [l0`Toll_The_Dead/TollTheDeadShockwave_01_Regular_Purple_400x400.webm`],
            red: [l0`Toll_The_Dead/TollTheDeadShockwave_01_Regular_Red_400x400.webm`],
        },
        skull: {
            blue: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Blue_400x400.webm`],
            green: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Green_400x400.webm`],
            purple: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Purple_400x400.webm`],
            red: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Red_400x400.webm`],
        },
    },
    vortex: {
        loop: {
            blue: [lg`Template/Circle/Vortex_01_Regular_Blue_600x600.webm`],
            green: [lg`Template/Circle/Vortex_01_Regular_Green_600x600.webm`],
            purple: [lg`Template/Circle/Vortex_01_Regular_Purple_600x600.webm`]
        },
        intro: {
            blue: [lg`Template/Circle/VortexIntro_01_Regular_Blue_600x600.webm`],
            green: [lg`Template/Circle/VortexIntro_01_Regular_Green_600x600.webm`],
            purple: [lg`Template/Circle/VortexIntro_01_Regular_Purple_600x600.webm`]
        },
        outro: {
            blue: [lg`Template/Circle/VortexOutro_01_Regular_Blue_600x600.webm`],
            green: [lg`Template/Circle/VortexOutro_01_Regular_Green_600x600.webm`],
            purple: [lg`Template/Circle/VortexOutro_01_Regular_Purple_600x600.webm`]
        },
    },
    wallofforce: {
        '01': {
            blue: [l5`Wall_Of_Force/WallOfForce_01_Blue_Sphere_400x400.webm`],
            green: [l5`Wall_Of_Force/WallOfForce_01_Green_Sphere_400x400.webm`],
            grey: [l5`Wall_Of_Force/WallOfForce_01_Grey_Sphere_400x400.webm`],
            orange: [l5`Wall_Of_Force/WallOfForce_01_Orange_Sphere_400x400.webm`],
            purple: [l5`Wall_Of_Force/WallOfForce_01_Purple_Sphere_400x400.webm`],
            red: [l5`Wall_Of_Force/WallOfForce_01_Red_Sphere_400x400.webm`],
            yellow: [l5`Wall_Of_Force/WallOfForce_01_Yellow_Sphere_400x400.webm`]
        }
    },
    web: {
        '01': {
            white: [l2`Web/Web_01_White_01_400x400.webm`]
        },
        '02': {
            white: [l2`Web/Web_01_White_02_400x400.webm`]
        }
    },
    whirl: {
        loop: {
            blue: [lg`Template/Circle/Whirl_01_Regular_Blue_600x600.webm`],
            green: [lg`Template/Circle/Whirl_01_Regular_Green_600x600.webm`],
            purple: [lg`Template/Circle/Whirl_01_Regular_Purple_600x600.webm`]
        },
        intro: {
            blue: [lg`Template/Circle/WhirlIntro_01_Regular_Blue_600x600.webm`],
            green: [lg`Template/Circle/WhirlIntro_01_Regular_Green_600x600.webm`],
            purple: [lg`Template/Circle/WhirlIntro_01_Regular_Purple_600x600.webm`]
        },
        outro: {
            blue: [lg`Template/Circle/WhirlOutro_01_Regular_Blue_600x600.webm`],
            green: [lg`Template/Circle/WhirlOutro_01_Regular_Green_600x600.webm`],
            purple: [lg`Template/Circle/WhirlOutro_01_Regular_Purple_600x600.webm`]
        }
    },
    whirlwind: {
        '01': {
            blue: [l7`Whirlwind/Whirlwind_01_Blue_400x400.webm`],
            bluegrey: [l7`Whirlwind/Whirlwind_01_BlueGrey_01_400x400.webm`],
            green: [l7`Whirlwind/Whirlwind_01_Green_400x400.webm`],
            purple: [l7`Whirlwind/Whirlwind_01_Purple_400x400.webm`],
            red: [l7`Whirlwind/Whirlwind_01_Red_400x400.webm`],
        }
    },
}

JB2APATREONDB.return = {
    chakram: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_90ft_4000x400.webm`]
            }
        }
    },
    dagger: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_90ft_4000x400.webm`]
            },
            darkpurple: {
                '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_90ft_4000x400.webm`]
            }
        },
        '02': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_90ft_4000x400.webm`]
            },
            darkpurple: {
                '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_90ft_4000x400.webm`]
            }
        }
    },
    greatsword: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_90ft_4000x600.webm`]
            }
        }
    },
    hammer: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_90ft_4000x400.webm`]
            }
        }
    },
}