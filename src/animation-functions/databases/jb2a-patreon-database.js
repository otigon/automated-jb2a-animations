const JB2APATREONDB = {};
export async function jb2aAAPatreonDatabase(path) {

JB2APATREONDB._templates = {
        ranged: [200, 200, 200]
}
const BASE = `${path}/Library/`;
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

/**
 * Range Types:
 * 
 * Weapon
 * Spell
 * Generic
 * 
 */

JB2APATREONDB.range = {
    _template: 'ranged',
    weapon: {
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
                red: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Physical_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Physical_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Physical_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Physical_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Physical_90ft_4000x400.webm`]
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
                red: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Fire_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Fire_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Fire_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Fire_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Fire_90ft_4000x400.webm`]
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
                red: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Cold_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Cold_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Cold_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Cold_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Cold_90ft_4000x400.webm`]
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
                red: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Lightning_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Lightning_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Lightning_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Lightning_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_Red_Lightning_90ft_4000x400.webm`]
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
                red: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Physical_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Physical_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Physical_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Physical_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Physical_90ft_4000x400.webm`]
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
                    '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Poison_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Poison_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Poison_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Poison_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Pink_Poison_90ft_4000x400.webm`]
                },
                purple: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Poison_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Poison_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Poison_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Poison_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Purple_Poison_90ft_4000x400.webm`]
                },
                red: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Poison_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Poison_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Poison_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Poison_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Poison_90ft_4000x400.webm`]
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
                red: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Fire_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Fire_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Fire_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Fire_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Fire_90ft_4000x400.webm`]
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
                red: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Cold_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Cold_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Cold_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Cold_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Cold_90ft_4000x400.webm`]
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
                red: {
                    '05ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Lightning_05ft_600x400.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Lightning_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Lightning_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Lightning_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Bolt01_01_Regular_Red_Lightning_90ft_4000x400.webm`]
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
        bone: {
            '01': {
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Bone01_01_Regular_White_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Bone01_01_Regular_White_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Bone01_01_Regular_White_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Bone01_01_Regular_White_90ft_4000x400.webm`]
                },
            },
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
                blue: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_90ft_4000x400.webm`]
                },
                darkpurple: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_90ft_4000x400.webm`]
                },
                pink: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Pink_90ft_4000x400.webm`]
                },
                red: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Red_90ft_4000x400.webm`]
                },
            },
            '02': {
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_90ft_4000x400.webm`]
                },
                blue: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_90ft_4000x400.webm`],
                },
                darkpurple: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_90ft_4000x400.webm`]
                },
                pink: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_90ft_4000x400.webm`]
                },
                red: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_90ft_4000x400.webm`]
                },
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
        dart: {
            '01': {
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dart01_01_Regular_White_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dart01_01_Regular_White_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dart01_01_Regular_White_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dart01_01_Regular_White_90ft_4000x400.webm`]
                }
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
                },
                yellow: {
                    '15ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Yellow_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Yellow_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Yellow_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Yellow_90ft_4000x600.webm`]
                },
                red: {
                    '15ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Red_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Red_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Red_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/GreatAxe01_01_Regular_Red_90ft_4000x600.webm`]
                },
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
                darkred: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Dark_Red_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Dark_Red_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Dark_Red_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Dark_Red_90ft_4000x600.webm`]
                },
                darkwhite: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Dark_White_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Dark_White_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Dark_White_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Dark_White_90ft_4000x600.webm`]
                },
                darkblue: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue02_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue02_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue02_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Blue02_90ft_4000x600.webm`]
                },
                green: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green_90ft_4000x600.webm`]
                },
                palegreen: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green02_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green02_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green02_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_Green02_90ft_4000x600.webm`]
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
                },
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_White_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_White_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_White_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSword01_01_Regular_White_90ft_4000x600.webm`]
                },
            },
            '02': {
                blue: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue_90ft_4000x600.webm`]
                },
                darkred: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_Red_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_Red_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_Red_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_Red_90ft_4000x600.webm`]
                },
                darkwhite: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_White_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_White_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_White_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Dark_White_90ft_4000x600.webm`]
                },
                darkblue: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue02_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue02_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue02_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Blue02_90ft_4000x600.webm`]
                },
                green: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green_90ft_4000x600.webm`]
                },
                palegreen: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green02_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green02_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green02_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_Green02_90ft_4000x600.webm`]
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
                },
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_White_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_White_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_White_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/LaserSwordDB01_01_Regular_White_90ft_4000x600.webm`]
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
        pumpkin: {
            '01': {
                regular: {
                    '05ft': [lg`Weapon_Attacks/Ranged/PumpkinToss01_01_Regular_Orange_05ft_600x500.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/PumpkinToss01_01_Regular_Orange_15ft_1000x500.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/PumpkinToss01_01_Regular_Orange_30ft_1600x500.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/PumpkinToss01_01_Regular_Orange_60ft_2800x500.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/PumpkinToss01_01_Regular_Orange_90ft_4000x500.webm`]
                },
            },
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
        snowball: {
            '01': {
                white: {
                    '05ft': [lg`Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_05ft_600x500.webm`],
                    '15ft': [lg`Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_15ft_1000x500.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_30ft_1600x500.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_60ft_2800x500.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/SnowballToss_01_Regular_White_90ft_4000x500.webm`],
                },
            },
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

    },
    spell: {
        chainlightning: {
            primary: {
                blue: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Primary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Primary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Primary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Primary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Primary_4000x400.webm`]
                },
                darkgreen: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green02_05ft_Primary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green02_15ft_Primary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green02_30ft_Primary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green02_60ft_Primary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green02_90ft_Primary_4000x400.webm`]
                },
                darkpurple: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_05ft_Primary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_15ft_Primary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_30ft_Primary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_60ft_Primary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_90ft_Primary_4000x400.webm`]
                },
                darkred: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Red_05ft_Primary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Red_15ft_Primary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Red_30ft_Primary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Red_60ft_Primary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Red_90ft_Primary_4000x400.webm`]
                },
                green: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_05ft_Primary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_15ft_Primary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_30ft_Primary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_60ft_Primary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_90ft_Primary_4000x400.webm`]
                },
                orange: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Orange_05ft_Primary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Orange_15ft_Primary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Orange_30ft_Primary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Orange_60ft_Primary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Orange_90ft_Primary_4000x400.webm`]
                },
                purple: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_05ft_Primary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_15ft_Primary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_30ft_Primary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_60ft_Primary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_90ft_Primary_4000x400.webm`]
                },
                purpleblue: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue02_05ft_Primary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue02_15ft_Primary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue02_30ft_Primary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue02_60ft_Primary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue02_90ft_Primary_4000x400.webm`]
                },
                red: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Red_05ft_Primary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Red_15ft_Primary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Red_30ft_Primary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Red_60ft_Primary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Red_90ft_Primary_4000x400.webm`]
                },
                yellow: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Yellow_05ft_Primary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Yellow_15ft_Primary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Yellow_30ft_Primary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Yellow_60ft_Primary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Yellow_90ft_Primary_4000x400.webm`]
                },
            },
            secondary: {
                blue: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_05ft_Secondary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_15ft_Secondary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_30ft_Secondary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_60ft_Secondary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue_90ft_Secondary_4000x400.webm`]
                },
                darkgreen: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green02_05ft_Secondary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green02_15ft_Secondary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green02_30ft_Secondary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green02_60ft_Secondary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green02_90ft_Secondary_4000x400.webm`]
                },
                darkpurple: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_05ft_Secondary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_15ft_Secondary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_30ft_Secondary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_60ft_Secondary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Purple_90ft_Secondary_4000x400.webm`]
                },
                darkred: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Red_05ft_Secondary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Red_15ft_Secondary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Red_30ft_Secondary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Red_60ft_Secondary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Dark_Red_90ft_Secondary_4000x400.webm`]
                },
                green: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_05ft_Secondary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_15ft_Secondary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_30ft_Secondary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_60ft_Secondary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Green_90ft_Secondary_4000x400.webm`]
                },
                orange: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Orange_05ft_Secondary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Orange_15ft_Secondary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Orange_30ft_Secondary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Orange_60ft_Secondary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Orange_90ft_Secondary_4000x400.webm`]
                },
                purple: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_05ft_Secondary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_15ft_Secondary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_30ft_Secondary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_60ft_Secondary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Purple_90ft_Secondary_4000x400.webm`]
                },
                purpleblue: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue02_05ft_Secondary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue02_15ft_Secondary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue02_30ft_Secondary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue02_60ft_Secondary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Blue02_90ft_Secondary_4000x400.webm`]
                },
                red: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Red_05ft_Secondary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Red_15ft_Secondary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Red_30ft_Secondary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Red_60ft_Secondary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Red_90ft_Secondary_4000x400.webm`]
                },
                yellow: {
                    '05ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Yellow_05ft_Secondary_600x400.webm`],
                    '15ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Yellow_15ft_Secondary_1000x400.webm`],
                    '30ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Yellow_30ft_Secondary_1600x400.webm`],
                    '60ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Yellow_60ft_Secondary_2800x400.webm`],
                    '90ft': [l6`Chain_Lightning/ChainLightning_01_Regular_Yellow_90ft_Secondary_4000x400.webm`]
                },
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
                pink: {
                    '05ft': [l6`Disintegrate/Disintegrate_01_Regular_Pink_05ft_600x400.webm`],
                    '15ft': [l6`Disintegrate/Disintegrate_01_Regular_Pink_15ft_1000x400.webm`],
                    '30ft': [l6`Disintegrate/Disintegrate_01_Regular_Pink_30ft_1600x400.webm`],
                    '60ft': [l6`Disintegrate/Disintegrate_01_Regular_Pink_60ft_2800x400.webm`],
                    '90ft': [l6`Disintegrate/Disintegrate_01_Regular_Pink_90ft_4000x400.webm`]
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
        fireballbeam: {
            '01': {
                blue: {
                    '05ft': [l3`Fireball/FireballBeam_01_Blue_05ft_600x400.webm`],
                    '15ft': [l3`Fireball/FireballBeam_01_Blue_15ft_1000x400.webm`],
                    '30ft': [l3`Fireball/FireballBeam_01_Blue_30ft_1600x400.webm`],
                    '60ft': [l3`Fireball/FireballBeam_01_Blue_60ft_2800x400.webm`],
                    '90ft': [l3`Fireball/FireballBeam_01_Blue_90ft_4000x400.webm`]
                },
                darkpurple: {
                    '05ft': [l3`Fireball/FireballBeam_01_Dark_Purple_05ft_600x400.webm`],
                    '15ft': [l3`Fireball/FireballBeam_01_Dark_Purple_15ft_1000x400.webm`],
                    '30ft': [l3`Fireball/FireballBeam_01_Dark_Purple_30ft_1600x400.webm`],
                    '60ft': [l3`Fireball/FireballBeam_01_Dark_Purple_60ft_2800x400.webm`],
                    '90ft': [l3`Fireball/FireballBeam_01_Dark_Purple_90ft_4000x400.webm`]
                },
                orange: {
                    '05ft': [l3`Fireball/FireballBeam_01_Orange_05ft_600x400.webm`],
                    '15ft': [l3`Fireball/FireballBeam_01_Orange_15ft_1000x400.webm`],
                    '30ft': [l3`Fireball/FireballBeam_01_Orange_30ft_1600x400.webm`],
                    '60ft': [l3`Fireball/FireballBeam_01_Orange_60ft_2800x400.webm`],
                    '90ft': [l3`Fireball/FireballBeam_01_Orange_90ft_4000x400.webm`]
                },
                purple: {
                    '05ft': [l3`Fireball/FireballBeam_01_Purple_05ft_600x400.webm`],
                    '15ft': [l3`Fireball/FireballBeam_01_Purple_15ft_1000x400.webm`],
                    '30ft': [l3`Fireball/FireballBeam_01_Purple_30ft_1600x400.webm`],
                    '60ft': [l3`Fireball/FireballBeam_01_Purple_60ft_2800x400.webm`],
                    '90ft': [l3`Fireball/FireballBeam_01_Purple_90ft_4000x400.webm`]
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
                },
                red: {
                    '05ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Red_05ft_600x400.webm`],
                    '15ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Red_15ft_1000x400.webm`],
                    '30ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Red_30ft_1600x400.webm`],
                    '60ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Red_60ft_2800x400.webm`],
                    '90ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Red_90ft_4000x400.webm`]
                },
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
                red: {
                    '05ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Red_05ft_600x400.webm`],
                    '15ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Red_15ft_1000x400.webm`],
                    '30ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Red_30ft_1600x400.webm`],
                    '60ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Red_60ft_2800x400.webm`],
                    '90ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Red_90ft_4000x400.webm`]
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
                pink: {
                    '05ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Pink_05ft_600x400.webm`],
                    '15ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Pink_15ft_1000x400.webm`],
                    '30ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Pink_30ft_1600x400.webm`],
                    '60ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Pink_60ft_2800x400.webm`],
                    '90ft': [l2`Scorching_Ray/ScorchingRay_01_Regular_Pink_90ft_4000x400.webm`]
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
                green: {
                    '05ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_05ft_01_600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_05ft_02_600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_05ft_03_600x400.webm`
                    ],
                    '15ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_15ft_01_1000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_15ft_02_1000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_15ft_03_1000x400.webm`
                    ],
                    '30ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_30ft_01_1600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_30ft_02_1600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_30ft_03_1600x400.webm`
                    ],
                    '60ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_60ft_01_2800x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_60ft_02_2800x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_60ft_03_2800x400.webm`
                    ],
                    '90ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_90ft_01_4000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_90ft_02_4000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Green_90ft_03_4000x400.webm`
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
                },
                pink: {
                    '05ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_05ft_01_600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_05ft_02_600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_05ft_03_600x400.webm`
                    ],
                    '15ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_15ft_01_1000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_15ft_02_1000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_15ft_03_1000x400.webm`
                    ],
                    '30ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_30ft_01_1600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_30ft_02_1600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_30ft_03_1600x400.webm`
                    ],
                    '60ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_60ft_01_2800x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_60ft_02_2800x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_60ft_03_2800x400.webm`
                    ],
                    '90ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_90ft_01_4000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_90ft_02_4000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Pink_90ft_03_4000x400.webm`
                    ]
                },
                purple: {
                    '05ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_05ft_01_600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_05ft_02_600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_05ft_03_600x400.webm`
                    ],
                    '15ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_15ft_01_1000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_15ft_02_1000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_15ft_03_1000x400.webm`
                    ],
                    '30ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_30ft_01_1600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_30ft_02_1600x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_30ft_03_1600x400.webm`
                    ],
                    '60ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_60ft_01_2800x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_60ft_02_2800x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_60ft_03_2800x400.webm`
                    ],
                    '90ft': [
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_90ft_01_4000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_90ft_02_4000x400.webm`,
                        l2`Scorching_Ray/ScorchingRay_02_Regular_Purple_90ft_03_4000x400.webm`
                    ]
                },
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
    },
    generic: {
        conduit: {
            square: {
                purpleblue: {
                    '05ft': [lg`Energy/EnergyConduitSquare_01_Regular_BluePurple_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyConduitSquare_01_Regular_BluePurple_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyConduitSquare_01_Regular_BluePurple_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyConduitSquare_01_Regular_BluePurple_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyConduitSquare_01_Regular_BluePurple_90ft_4000x400.webm`],
                },
                greenyellow: {
                    '05ft': [lg`Energy/EnergyConduitSquare_01_Regular_GreenYellow_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyConduitSquare_01_Regular_GreenYellow_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyConduitSquare_01_Regular_GreenYellow_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyConduitSquare_01_Regular_GreenYellow_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyConduitSquare_01_Regular_GreenYellow_90ft_4000x400.webm`],
                },
            },
            circle: {
                purpleblue: {
                    '05ft': [lg`Energy/EnergyConduitCircle_01_Regular_BluePurple_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyConduitCircle_01_Regular_BluePurple_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyConduitCircle_01_Regular_BluePurple_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyConduitCircle_01_Regular_BluePurple_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyConduitCircle_01_Regular_BluePurple_90ft_4000x400.webm`],
                },
                greenyellow: {
                    '05ft': [lg`Energy/EnergyConduitSquare_01_Regular_GreenYellow_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyConduitSquare_01_Regular_GreenYellow_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyConduitSquare_01_Regular_GreenYellow_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyConduitSquare_01_Regular_GreenYellow_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyConduitSquare_01_Regular_GreenYellow_90ft_4000x400.webm`],
                },
            },
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
                darkred: {
                    '15ft': [lg`Energy/EnergyBeam_01_Dark_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_01_Dark_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_01_Dark_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_01_Dark_Red_90ft_4000x400.webm`],
                },
                red: {
                    '15ft': [lg`Energy/EnergyBeam_01_Regular_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_01_Regular_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_01_Regular_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_01_Regular_Red_90ft_4000x400.webm`],
                },
            },
            '02': {
                darkgreenpurple: {
                    '05ft': [lg`Energy/EnergyBeam_02_Dark_GreenPurple_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyBeam_02_Dark_GreenPurple_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_02_Dark_GreenPurple_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_02_Dark_GreenPurple_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_02_Dark_GreenPurple_90ft_4000x400.webm`],
                },
                darkpurplered: {
                    '05ft': [lg`Energy/EnergyBeam_02_Dark_PurpleRed_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyBeam_02_Dark_PurpleRed_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_02_Dark_PurpleRed_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_02_Dark_PurpleRed_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_02_Dark_PurpleRed_90ft_4000x400.webm`],
                },
                bluepink: {
                    '05ft': [lg`Energy/EnergyBeam_02_Regular_BluePink_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyBeam_02_Regular_BluePink_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_02_Regular_BluePink_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_02_Regular_BluePink_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_02_Regular_BluePink_90ft_4000x400.webm`],
                },
                greenyellow: {
                    '05ft': [lg`Energy/EnergyBeam_02_Regular_GreenYellow_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyBeam_02_Regular_GreenYellow_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_02_Regular_GreenYellow_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_02_Regular_GreenYellow_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_02_Regular_GreenYellow_90ft_4000x400.webm`],
                },
                red: {
                    '05ft': [lg`Energy/EnergyBeam_02_Regular_Red_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyBeam_02_Regular_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_02_Regular_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_02_Regular_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_02_Regular_Red_90ft_4000x400.webm`],
                },
            },
            '03': {
                darkgreenpurple: {
                    '05ft': [lg`Energy/EnergyBeam_03_Dark_GreenPurple_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyBeam_03_Dark_GreenPurple_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_03_Dark_GreenPurple_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_03_Dark_GreenPurple_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_03_Dark_GreenPurple_90ft_4000x400.webm`],
                },
                darkpurplered: {
                    '05ft': [lg`Energy/EnergyBeam_03_Dark_PurpleRed_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyBeam_03_Dark_PurpleRed_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_03_Dark_PurpleRed_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_03_Dark_PurpleRed_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_03_Dark_PurpleRed_90ft_4000x400.webm`],
                },
                bluepink: {
                    '05ft': [lg`Energy/EnergyBeam_03_Regular_BluePink_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyBeam_03_Regular_BluePink_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_03_Regular_BluePink_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_03_Regular_BluePink_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_03_Regular_BluePink_90ft_4000x400.webm`],
                },
                greenyellow: {
                    '05ft': [lg`Energy/EnergyBeam_03_Regular_GreenYellow_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyBeam_03_Regular_GreenYellow_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_03_Regular_GreenYellow_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_03_Regular_GreenYellow_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_03_Regular_GreenYellow_90ft_4000x400.webm`],
                },
                red: {
                    '05ft': [lg`Energy/EnergyBeam_03_Regular_Red_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyBeam_03_Regular_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeam_03_Regular_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeam_03_Regular_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeam_03_Regular_Red_90ft_4000x400.webm`],
                },
            },
            reverse: {
                blue: {
                    '15ft': [lg`Energy/EnergyBeamReverse_01_Regular_Blue_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeamReverse_01_Regular_Blue_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeamReverse_01_Regular_Blue_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeamReverse_01_Regular_Blue_90ft_4000x400.webm`],
                },
                bluegreen: {
                    '15ft': [lg`Energy/EnergyBeamReverse_01_Regular_BlueGreen_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeamReverse_01_Regular_BlueGreen_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeamReverse_01_Regular_BlueGreen_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeamReverse_01_Regular_BlueGreen_90ft_4000x400.webm`],
                },
                darkgreen: {
                    '15ft': [lg`Energy/EnergyBeamReverse_01_Dark_Green_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeamReverse_01_Dark_Green_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeamReverse_01_Dark_Green_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeamReverse_01_Dark_Green_90ft_4000x400.webm`],
                },
                darkred: {
                    '15ft': [lg`Energy/EnergyBeamReverse_01_Dark_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeamReverse_01_Dark_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeamReverse_01_Dark_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeamReverse_01_Dark_Red_90ft_4000x400.webm`],
                },
                red: {
                    '15ft': [lg`Energy/EnergyBeamReverse_01_Regular_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyBeamReverse_01_Regular_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyBeamReverse_01_Regular_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyBeamReverse_01_Regular_Red_90ft_4000x400.webm`],
                },
            }
        },
        energystrand: {
            '01': {
                darkgreen: {
                    '05ft': [
                        lg`Energy/EnergyStrand_01_Dark_Green_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Green_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Green_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Green_05ft_600x400.webm`,
                    ],
                    '15ft': [
                        lg`Energy/EnergyStrand_01_Dark_Green_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Green_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Green_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Green_15ft_1000x400.webm`,
                    ],
                    '30ft': [
                        lg`Energy/EnergyStrand_01_Dark_Green_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Green_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Green_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Green_30ft_1600x400.webm`,
                    ],
                    '60ft': [
                        lg`Energy/EnergyStrand_01_Dark_Green_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Green_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Green_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Green_60ft_2800x400.webm`,
                    ],
                    '90ft': [
                        lg`Energy/EnergyStrand_01_Dark_Green_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Green_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Green_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Green_90ft_4000x400.webm`,
                    ],
                },
                darkpurple: {
                    '05ft': [
                        lg`Energy/EnergyStrand_01_Dark_Purple_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Purple_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Purple_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Purple_05ft_600x400.webm`,
                    ],
                    '15ft': [
                        lg`Energy/EnergyStrand_01_Dark_Purple_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Purple_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Purple_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Purple_15ft_1000x400.webm`,
                    ],
                    '30ft': [
                        lg`Energy/EnergyStrand_01_Dark_Purple_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Purple_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Purple_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Purple_30ft_1600x400.webm`,
                    ],
                    '60ft': [
                        lg`Energy/EnergyStrand_01_Dark_Purple_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Purple_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Purple_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Purple_60ft_2800x400.webm`,
                    ],
                    '90ft': [
                        lg`Energy/EnergyStrand_01_Dark_Purple_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Purple_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Purple_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Purple_90ft_4000x400.webm`,
                    ],
                },
                darkred: {
                    '05ft': [
                        lg`Energy/EnergyStrand_01_Dark_Red_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Red_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Red_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Red_05ft_600x400.webm`,
                    ],
                    '15ft': [
                        lg`Energy/EnergyStrand_01_Dark_Red_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Red_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Red_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Red_15ft_1000x400.webm`,
                    ],
                    '30ft': [
                        lg`Energy/EnergyStrand_01_Dark_Red_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Red_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Red_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Red_30ft_1600x400.webm`,
                    ],
                    '60ft': [
                        lg`Energy/EnergyStrand_01_Dark_Red_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Red_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Red_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Red_60ft_2800x400.webm`,
                    ],
                    '90ft': [
                        lg`Energy/EnergyStrand_01_Dark_Red_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_02_Dark_Red_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_03_Dark_Red_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_04_Dark_Red_90ft_4000x400.webm`,
                    ],
                },
                blue: {
                    '05ft': [
                        lg`Energy/EnergyStrand_01_Regular_Blue_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Blue_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Blue_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Blue_05ft_600x400.webm`,
                    ],
                    '15ft': [
                        lg`Energy/EnergyStrand_01_Regular_Blue_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Blue_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Blue_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Blue_15ft_1000x400.webm`,
                    ],
                    '30ft': [
                        lg`Energy/EnergyStrand_01_Regular_Blue_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Blue_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Blue_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Blue_30ft_1600x400.webm`,
                    ],
                    '60ft': [
                        lg`Energy/EnergyStrand_01_Regular_Blue_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Blue_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Blue_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Blue_60ft_2800x400.webm`,
                    ],
                    '90ft': [
                        lg`Energy/EnergyStrand_01_Regular_Blue_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Blue_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Blue_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Blue_90ft_4000x400.webm`,
                    ],
                },
                orange: {
                    '05ft': [
                        lg`Energy/EnergyStrand_01_Regular_Orange_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Orange_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Orange_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Orange_05ft_600x400.webm`,
                    ],
                    '15ft': [
                        lg`Energy/EnergyStrand_01_Regular_Orange_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Orange_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Orange_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Orange_15ft_1000x400.webm`,
                    ],
                    '30ft': [
                        lg`Energy/EnergyStrand_01_Regular_Orange_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Orange_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Orange_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Orange_30ft_1600x400.webm`,
                    ],
                    '60ft': [
                        lg`Energy/EnergyStrand_01_Regular_Orange_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Orange_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Orange_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Orange_60ft_2800x400.webm`,
                    ],
                    '90ft': [
                        lg`Energy/EnergyStrand_01_Regular_Orange_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Orange_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Orange_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Orange_90ft_4000x400.webm`,
                    ],
                },
                purple: {
                    '05ft': [
                        lg`Energy/EnergyStrand_01_Regular_Purple_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Purple_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Purple_05ft_600x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Purple_05ft_600x400.webm`,
                    ],
                    '15ft': [
                        lg`Energy/EnergyStrand_01_Regular_Purple_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Purple_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Purple_15ft_1000x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Purple_15ft_1000x400.webm`,
                    ],
                    '30ft': [
                        lg`Energy/EnergyStrand_01_Regular_Purple_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Purple_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Purple_30ft_1600x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Purple_30ft_1600x400.webm`,
                    ],
                    '60ft': [
                        lg`Energy/EnergyStrand_01_Regular_Purple_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Purple_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Purple_60ft_2800x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Purple_60ft_2800x400.webm`,
                    ],
                    '90ft': [
                        lg`Energy/EnergyStrand_01_Regular_Purple_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_02_Regular_Purple_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_03_Regular_Purple_90ft_4000x400.webm`,
                        lg`Energy/EnergyStrand_04_Regular_Purple_90ft_4000x400.webm`,
                    ],
                },
                red: {
                    '05ft': [lg`Energy/EnergyStrand_05_Regular_Red_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyStrand_05_Regular_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyStrand_05_Regular_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyStrand_05_Regular_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyStrand_05_Regular_Red_90ft_4000x400.webm`],
                },
            },
            '02': {
                darkgreen: {
                    '05ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Green_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Green_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Green_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Green_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Green_90ft_4000x400.webm`]
                },
                darkpurple: {
                    '05ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Purple_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Purple_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Purple_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Purple_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Purple_90ft_4000x400.webm`]
                },
                darkred: {
                    '05ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Red_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyStrand_Multiple01_Dark_Red_90ft_4000x400.webm`]
                },
                blue: {
                    '05ft': [lg`Energy/EnergyStrand_Multiple01_Regular_Blue_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyStrand_Multiple01_Regular_Blue_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyStrand_Multiple01_Regular_Blue_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyStrand_Multiple01_Regular_Blue_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyStrand_Multiple01_Regular_Blue_90ft_4000x400.webm`]
                },
                purple: {
                    '05ft': [lg`Energy/EnergyStrand_Multiple01_Regular_Purple_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyStrand_Multiple01_Regular_Purple_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyStrand_Multiple01_Regular_Purple_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyStrand_Multiple01_Regular_Purple_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyStrand_Multiple01_Regular_Purple_90ft_4000x400.webm`]
                },
            },
            '03': {
                bluepink: {
                    '05ft': [lg`Energy/EnergyStrand_Multiple02_Regular_BluePink_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyStrand_Multiple02_Regular_BluePink_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyStrand_Multiple02_Regular_BluePink_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyStrand_Multiple02_Regular_BluePink_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyStrand_Multiple02_Regular_BluePink_90ft_4000x400.webm`]
                },
                greenyellow: {
                    '05ft': [lg`Energy/EnergyStrand_Multiple02_Regular_GreenYellow_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyStrand_Multiple02_Regular_GreenYellow_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyStrand_Multiple02_Regular_GreenYellow_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyStrand_Multiple02_Regular_GreenYellow_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyStrand_Multiple02_Regular_GreenYellow_90ft_4000x400.webm`]
                },
                darkpurplered: {
                    '05ft': [lg`Energy/EnergyStrand_Multiple02_Dark_PurpleRed_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyStrand_Multiple02_Dark_PurpleRed_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyStrand_Multiple02_Dark_PurpleRed_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyStrand_Multiple02_Dark_PurpleRed_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyStrand_Multiple02_Dark_PurpleRed_90ft_4000x400.webm`]
                },
                darkgreenpurple: {
                    '05ft': [lg`Energy/EnergyStrand_Multiple02_Dark_GreenPurple_05ft_600x400.webm`],
                    '15ft': [lg`Energy/EnergyStrand_Multiple02_Dark_GreenPurple_15ft_1000x400.webm`],
                    '30ft': [lg`Energy/EnergyStrand_Multiple02_Dark_GreenPurple_30ft_1600x400.webm`],
                    '60ft': [lg`Energy/EnergyStrand_Multiple02_Dark_GreenPurple_60ft_2800x400.webm`],
                    '90ft': [lg`Energy/EnergyStrand_Multiple02_Dark_GreenPurple_90ft_4000x400.webm`]
                }
            }
        },
        heart: {
            '01': {
                pinkyellow: {
                    '05ft': [lg`RangedSpell/ProjectileHeart01_01_Regular_PinkYellow_05ft_600x400.webm`],
                    '15ft': [lg`RangedSpell/ProjectileHeart01_01_Regular_PinkYellow_15ft_1000x400.webm`],
                    '30ft': [lg`RangedSpell/ProjectileHeart01_01_Regular_PinkYellow_30ft_1600x400.webm`],
                    '60ft': [lg`RangedSpell/ProjectileHeart01_01_Regular_PinkYellow_60ft_2800x400.webm`],
                    '90ft': [lg`RangedSpell/ProjectileHeart01_01_Regular_PinkYellow_90ft_4000x400.webm`]
                },
            },
        },
        iceshard: {
            '01': {
                blue: {
                    '05ft': [lg`RangedSpell/ProjectileIceShard01_01_Regular_Blue_05ft_600x400.webm`],
                    '15ft': [lg`RangedSpell/ProjectileIceShard01_01_Regular_Blue_15ft_1000x400.webm`],
                    '30ft': [lg`RangedSpell/ProjectileIceShard01_01_Regular_Blue_30ft_1600x400.webm`],
                    '60ft': [lg`RangedSpell/ProjectileIceShard01_01_Regular_Blue_60ft_2800x400.webm`],
                    '90ft': [lg`RangedSpell/ProjectileIceShard01_01_Regular_Blue_90ft_4000x400.webm`]
                },
            },
        },
        musicnote: {
            '01': {
                greenyellow: {
                    '05ft': [lg`RangedSpell/ProjectileMusicNote01_01_Regular_GreenYellow_05ft_600x400.webm`],
                    '15ft': [lg`RangedSpell/ProjectileMusicNote01_01_Regular_GreenYellow_15ft_1000x400.webm`],
                    '30ft': [lg`RangedSpell/ProjectileMusicNote01_01_Regular_GreenYellow_30ft_1600x400.webm`],
                    '60ft': [lg`RangedSpell/ProjectileMusicNote01_01_Regular_GreenYellow_60ft_2800x400.webm`],
                    '90ft': [lg`RangedSpell/ProjectileMusicNote01_01_Regular_GreenYellow_90ft_4000x400.webm`]
                },
            },
        },
        skull: {
            '01': {
                purplepink: {
                    '05ft': [lg`RangedSpell/ProjectileSkull01_01_Regular_PinkPurple_05ft_600x400.webm`],
                    '15ft': [lg`RangedSpell/ProjectileSkull01_01_Regular_PinkPurple_15ft_1000x400.webm`],
                    '30ft': [lg`RangedSpell/ProjectileSkull01_01_Regular_PinkPurple_30ft_1600x400.webm`],
                    '60ft': [lg`RangedSpell/ProjectileSkull01_01_Regular_PinkPurple_60ft_2800x400.webm`],
                    '90ft': [lg`RangedSpell/ProjectileSkull01_01_Regular_PinkPurple_90ft_4000x400.webm`]
                },
            },
        },
    },
}

/**
 * Melee Types:
 *
 * Weapon 
 * Generic
 * Creature
 * 
 */

JB2APATREONDB.melee = {
    creature: {
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
                blue: [lg`Creature/Claws_01_Bright_Blue_400x400.webm`],
                brown: [lg`Creature/Claws_01_Regular_Brown_400x400.webm`],
                darkred: [lg`Creature/Claws_01_Dark_Red_400x400.webm`],
                green: [lg`Creature/Claws_01_Bright_Green_400x400.webm`],
                orange: [lg`Creature/Claws_01_Bright_Orange_400x400.webm`],
                purple: [lg`Creature/Claws_01_Bright_Purple_400x400.webm`],
                red: [lg`Creature/Claws_01_Regular_Red_400x400.webm`],
                yellow: [lg`Creature/Claws_01_Bright_Yellow_400x400.webm`],
            }
        },
    },
    generic: {
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
    },
    weapon: {
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
            },
            'nohit': {
                blue: [
                    lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlowsNoHit_01_Regular_Blue_800x600.webm`,
                ],
                yellow: [
                    lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlowsNoHit_01_Regular_Yellow_800x600.webm`
                ],
            },
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
                black: [lg`Weapon_Attacks/Melee/GreatSword01_Fire_Regular_Black_800x600.webm`],
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
                    lg`Weapon_Attacks/Melee/Hammer01_01_Regular_White_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_02_Regular_White_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_03_Regular_White_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_04_Regular_White_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_05_Regular_White_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_06_Regular_White_800x600.webm`
                ],
                blue: [
                    lg`Weapon_Attacks/Melee/Hammer01_01_Regular_Blue_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_02_Regular_Blue_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_03_Regular_Blue_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_04_Regular_Blue_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_05_Regular_Blue_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_06_Regular_Blue_800x600.webm`
                ],
                orange: [
                    lg`Weapon_Attacks/Melee/Hammer01_01_Regular_Orange_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_02_Regular_Orange_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_03_Regular_Orange_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_04_Regular_Orange_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_05_Regular_Orange_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_06_Regular_Orange_800x600.webm`
                ],
                purple: [
                    lg`Weapon_Attacks/Melee/Hammer01_01_Regular_Purple_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_02_Regular_Purple_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_03_Regular_Purple_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_04_Regular_Purple_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_05_Regular_Purple_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_06_Regular_Purple_800x600.webm`
                ],
                darkorangepurple: [
                    lg`Weapon_Attacks/Melee/Hammer01_01_Dark_OrangePurple_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_02_Dark_OrangePurple_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_03_Dark_OrangePurple_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_04_Dark_OrangePurple_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_05_Dark_OrangePurple_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_06_Dark_OrangePurple_800x600.webm`
                ],
                yellow: [
                    lg`Weapon_Attacks/Melee/Hammer01_01_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_02_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_03_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_04_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_05_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Hammer01_06_Regular_Yellow_800x600.webm`
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
                white: [lg`Weapon_Attacks/Melee/Legacy/Mace01_01_Regular_White_800x600.webm`],
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
                white: [lg`Weapon_Attacks/Melee/Legacy/Rapier01_01_Regular_White_800x600.webm`],
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
                ],
                yellow: [
                    lg`Weapon_Attacks/Melee/Shortsword01_01_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Shortsword01_02_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Shortsword01_03_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Shortsword01_04_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Shortsword01_05_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Shortsword01_06_Regular_Yellow_800x600.webm`
                ],
            }
        },
        spear: {
            'fire': {
                white: [lg`Weapon_Attacks/Melee/Legacy/Spear01_01_Regular_White_800x600.webm`],

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
                yellow: [
                    lg`Weapon_Attacks/Melee/Spear01_01_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Spear01_02_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Spear01_03_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Spear01_04_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Spear01_05_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Spear01_06_Regular_Yellow_800x600.webm`
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
                white: [lg`Weapon_Attacks/Melee/Legacy/Sword01_01_Regular_White_800x600.webm`],
                black: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Black_800x600.webm`],
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
                ],
                yellow: [
                    lg`Weapon_Attacks/Melee/Sword01_01_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Sword01_02_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Sword01_03_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Sword01_04_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Sword01_05_Regular_Yellow_800x600.webm`,
                    lg`Weapon_Attacks/Melee/Sword01_06_Regular_Yellow_800x600.webm`
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
            },
            'nohit': {
                blue: [
                    lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrikeNoHit_01_Regular_Blue_800x600.webm`,
                ],
                yellow: [
                    lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrikeNoHit_01_Regular_Yellow_800x600.webm`
                ],
            },
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
    },
}

/**
 * Template Types:
 * 
 * Cone
 * Square
 * Circle
 * Ray
 * 
 */
JB2APATREONDB.templatefx = {
    circle: {
        armsofhadar: {
            '01': {
                darkgreen: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Green_500x500.webm`],
                darkpurple: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Purple_500x500.webm`],
                darkred: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Red_500x500.webm`],
            }
        },
        blacktentacles: {
            '01': {
                darkgreen: [l4`Black_Tentacles/BlackTentacles_01_Dark_Green_600x600.webm`],
                darkpurple: [l4`Black_Tentacles/BlackTentacles_01_Dark_Purple_600x600.webm`],
                darkred: [l4`Black_Tentacles/BlackTentacles_01_Dark_Red_600x600.webm`],
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
        crackedshield: {
            '01': {
                darkred: [lg`Template/Circle/TemplateShieldCrackedCircle_01_Dark_Red_800x800.webm`],
                darkpurple: [lg`Template/Circle/TemplateShieldCrackedCircle_01_Regular_Purple_800x800.webm`],
            },
        },
        darkness: {
            '01': {
                black: [l2`Darkness/Darkness_01_Black_600x600.webm`],
                green: [l2`Darkness/Darkness_01_Green_600x600.webm`]
            }
        },
        detectmagic: {
            '01': {
                blue: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Blue_1200x1200.webm`],
                green: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Green_1200x1200.webm`],
                greenorange: [l1`Detect_Magic/DetectMagicCircle_01_Regular_GreenOrange_1200x1200.webm`],
                grey: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Grey_1200x1200.webm`],
                purple: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Purple_1200x1200.webm`],
            }
        },
        drop: {
            '01': {
                darkgreen: [lg`Template/Circle/TemplateDropCircle_01_Dark_Green_800x800.webm`],
                red: [lg`Template/Circle/TemplateDropCircle_01_Regular_Red_800x800.webm`]
            }
        },
        explosion: {
            '01': {
                darkpurple: [
                    lg`Explosion/Explosion_04_Dark_Purple_400x400.webm`,
                ],
                darkred: [
                    lg`Explosion/Explosion_04_Dark_Red_400x400.webm`,
                ],
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
                greenorange: [
                    lg`Explosion/Explosion_03_Regular_GreenOrange_400x400.webm`,
                ],
                orange: [
                    lg`Explosion/Explosion_01_Orange_400x400.webm`,
                    lg`Explosion/Explosion_02_Orange_400x400.webm`,
                    lg`Explosion/Explosion_04_Regular_Orange_400x400.webm`,
                ],
                pink: [
                    lg`Explosion/Explosion_03_Regular_Pink_400x400.webm`,
                ],
                purplepink: [
                    lg`Explosion/Explosion_03_Regular_PurplePink_400x400.webm`,
                ],
                purple: [
                    lg`Explosion/Explosion_01_Purple_400x400.webm`,
                    lg`Explosion/Explosion_02_Purple_400x400.webm`,
                ],
                red: [
                    lg`Explosion/Explosion_03_Regular_Red_400x400.webm`,
                ],
                yellow: [
                    lg`Explosion/Explosion_01_Yellow_400x400.webm`,
                    lg`Explosion/Explosion_02_Yellow_400x400.webm`,
                ],
                yellowblue: [
                    lg`Explosion/Explosion_03_Regular_BlueYellow_400x400.webm`,
                ],
                whiteblue: [
                    lg`Explosion/Explosion_03_Dark_BlueWhite_400x400.webm`,
                ],
            }
        },
        fear: {
            '01': {
                darkorange: [lg`Template/Circle/TemplateFearCircle_01_Dark_Orange_800x800.webm`],
                darkpurple: [lg`Template/Circle/TemplateFearCircle_01_Dark_Purple_800x800.webm`],
                orange: [lg`Template/Circle/TemplateFearCircle_01_Regular_Orange_800x800.webm`],
            },
        },
        fireball: {
            loop: {
                blue: [l3`Fireball/FireballLoop_01_Blue_800x800.webm`],
                orange: [l3`Fireball/FireballLoop_01_Orange_800x800.webm`],
                purple: [l3`Fireball/FireballLoop_01_Purple_800x800.webm`],
            },
            explode: {
                blue: [l3`Fireball/FireballExplosion_01_Blue_800x800.webm`],
                orange: [l3`Fireball/FireballExplosion_01_Orange_800x800.webm`],
                purple: [l3`Fireball/FireballExplosion_01_Purple_800x800.webm`],
            },
            nodebris: {
                blue: [l3`Fireball/FireballLoopNoDebris_01_Blue_800x800.webm`],
                orange: [l3`Fireball/FireballLoopNoDebris_01_Orange_800x800.webm`],
                purple: [l3`Fireball/FireballLoopNoDebris_01_Purple_800x800.webm`],
            },
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
        heart: {
            '01': {
                darkred: [lg`Template/Circle/TemplateHeartCircle_01_Dark_Red_800x800.webm`],
                pink: [lg`Template/Circle/TemplateHeartCircle_01_Regular_Pink_800x800.webm`],
                teal: [lg`Template/Circle/TemplateHeartCircle_01_Regular_Teal_800x800.webm`],
            },
        },
        horror: {
            '01': {
                darkteal: [lg`Template/Circle/TemplateHorrorCircle_01_Dark_Teal_800x800.webm`],
                purple: [lg`Template/Circle/TemplateHorrorCircle_01_Regular_Purple_800x800.webm`],
                teal: [lg`Template/Circle/TemplateHorrorCircle_01_Regular_Teal_800x800.webm`],
            },
        },
        magicsign: {
            abjuration: {
                blue: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Yellow_800x800.webm`],
            },
            conjuration: {
                blue: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Yellow_800x800.webm`],
            },
            divination: {
                blue: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Yellow_800x800.webm`],
            },
            enchantment: {
                blue: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Yellow_800x800.webm`],
            },
            evocation: {
                blue: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Yellow_800x800.webm`],
            },
            illusion: {
                blue: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Yellow_800x800.webm`],
            },
            necromancy: {
                blue: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Yellow_800x800.webm`],
            },
            transmutation: {
                blue: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Yellow_800x800.webm`],
            },
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
        musicnote: {
            '01': {
                blue: [lg`Template/Circle/TemplateMusicNoteCircle_01_Regular_Blue_800x800.webm`],
                darkred: [lg`Template/Circle/TemplateMusicNoteCircle_01_Dark_Red_800x800.webm`],
                purple: [lg`Template/Circle/TemplateMusicNoteCircle_01_Regular_Purple_800x800.webm`],
            },
        },
        outpulse: {
            '01': {
                whiteblue: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`],
                greenorange: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_GreenOrange_Burst_600x600.webm`],
                purplepink: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_PurplePink_Burst_600x600.webm`],
                tealyellow: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_TealYellow_Burst_600x600.webm`],
            },
            '02': {
                whiteblue: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`],
                greenorange: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_GreenOrange_Burst_600x600.webm`],
                purplepink: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_PurplePink_Burst_600x600.webm`],
                tealyellow: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_TealYellow_Burst_600x600.webm`],
            }
        },
        poison: {
            '01': {
                darkgreen: [lg`Template/Circle/TemplatePoisonCircle_01_Dark_Green_800x800.webm`],
                purple: [lg`Template/Circle/TemplatePoisonCircle_01_Regular_Purple_800x800.webm`],
            },
        },
        runes: {
            '01': {
                darkorange: [lg`Template/Circle/TemplateRunesCircle_01_Dark_Orange_800x800.webm`],
                darkred: [lg`Template/Circle/TemplateRunesCircle_01_Dark_Red_800x800.webm`],
                blue: [lg`Template/Circle/TemplateRunesCircle_01_Regular_Blue_800x800.webm`],
                green: [lg`Template/Circle/TemplateRunesCircle_01_Regular_Green02_800x800.webm`],
                orange: [lg`Template/Circle/TemplateRunesCircle_01_Regular_Orange_800x800.webm`],
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
        shields: {
            '01': {
                darkred: [lg`Template/Circle/TemplateShieldCircle_01_Dark_Red_800x800.webm`],
                green: [lg`Template/Circle/TemplateShieldCircle_01_Regular_Green_800x800.webm`],
            },
        },
        skull: {
            '01': {
                darkgreen: [lg`Template/Circle/TemplateSkullCircle_01_Dark_Green_800x800.webm`],
                darkorange: [lg`Template/Circle/TemplateSkullCircle_01_Dark_Orange_800x800.webm`],
                purple: [lg`Template/Circle/TemplateSkullCircle_01_Regular_Purple_800x800.webm`],
            },
        },
        sleetstorm: {
            '01': {
                blue: [l3`Sleet_Storm/SleetStorm_01_Blue_800x800.webm`],
                green: [l3`Sleet_Storm/SleetStorm_01_Green_800x800.webm`],
                purple: [l3`Sleet_Storm/SleetStorm_01_Purple_800x800.webm`],
                tealyellow: [l3`Sleet_Storm/SleetStorm_01_TealYellow_800x800.webm`]
            }
        },
        snowflakes: {
            '01': {
                darkblue: [lg`Template/Circle/TemplateSnowflakeCircle_01_Dark_Blue_800x800.webm`],
                blue: [lg`Template/Circle/TemplateSnowflakeCircle_01_Regular_Blue_800x800.webm`],
            },
        },
        stun: {
            '01': {
                darkteal: [lg`Template/Circle/TemplateStunCircle_01_Dark_Teal_800x800.webm`],
                purple: [lg`Template/Circle/TemplateStunCircle_01_Regular_Purple_800x800.webm`],
            },
        },
        snowflake: {
            '01': {
                whiteblue: [lg`Ice/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`],
                greenorange: [lg`Ice/SnowflakeBurst_01_Regular_GreenOrange_Burst_600x600.webm`],
                purplepink: [lg`Ice/SnowflakeBurst_01_Regular_PurplePink_Burst_600x600.webm`],
                tealyellow: [lg`Ice/SnowflakeBurst_01_Regular_TealYellow_Burst_600x600.webm`],
            }
        },
        vortex: {
            loop: {
                black: [lg`Template/Circle/Vortex_01_Dark_Black_600x600.webm`],
                blue: [lg`Template/Circle/Vortex_01_Regular_Blue_600x600.webm`],
                green: [lg`Template/Circle/Vortex_01_Regular_Green_600x600.webm`],
                purple: [lg`Template/Circle/Vortex_01_Regular_Purple_600x600.webm`]
            },
            intro: {
                black: [lg`Template/Circle/VortexIntro_01_Dark_Black_600x600.webm`],
                blue: [lg`Template/Circle/VortexIntro_01_Regular_Blue_600x600.webm`],
                green: [lg`Template/Circle/VortexIntro_01_Regular_Green_600x600.webm`],
                purple: [lg`Template/Circle/VortexIntro_01_Regular_Purple_600x600.webm`]
            },
            outro: {
                black: [lg`Template/Circle/VortexOutro_01_Dark_Black_600x600.webm`],
                blue: [lg`Template/Circle/VortexOutro_01_Regular_Blue_600x600.webm`],
                green: [lg`Template/Circle/VortexOutro_01_Regular_Green_600x600.webm`],
                purple: [lg`Template/Circle/VortexOutro_01_Regular_Purple_600x600.webm`]
            },
        },
        whirl: {
            loop: {
                black: [lg`Template/Circle/Whirl_01_Dark_Black_600x600.webm`],
                blue: [lg`Template/Circle/Whirl_01_Regular_Blue_600x600.webm`],
                green: [lg`Template/Circle/Whirl_01_Regular_Green_600x600.webm`],
                purple: [lg`Template/Circle/Whirl_01_Regular_Purple_600x600.webm`]
            },
            intro: {
                black: [lg`Template/Circle/WhirlIntro_01_Dark_Black_600x600.webm`],
                blue: [lg`Template/Circle/WhirlIntro_01_Regular_Blue_600x600.webm`],
                green: [lg`Template/Circle/WhirlIntro_01_Regular_Green_600x600.webm`],
                purple: [lg`Template/Circle/WhirlIntro_01_Regular_Purple_600x600.webm`]
            },
            outro: {
                black: [lg`Template/Circle/WhirlOutro_01_Dark_Black_600x600.webm`],
                blue: [lg`Template/Circle/WhirlOutro_01_Regular_Blue_600x600.webm`],
                green: [lg`Template/Circle/WhirlOutro_01_Regular_Green_600x600.webm`],
                purple: [lg`Template/Circle/WhirlOutro_01_Regular_Purple_600x600.webm`]
            }
        },
    },
    cone: {
        breathweapon: {
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
                yellow: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire01_Regular_Yellow_30ft_Cone_Burst_600x600.webm`],
            },
            'fire02': {
                blue: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Blue_30ft_Cone_Burst_600x600.webm`],
                green: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Green_30ft_Cone_Burst_600x600.webm`],
                orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
                purple: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Purple_30ft_Cone_Burst_600x600.webm`],
                yellow: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Fire02_Regular_Yellow_30ft_Cone_Burst_600x600.webm`],
            },
            'poison': {
                black: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Dark_Black_30ft_Cone_Burst_600x600.webm`],
                blue: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Blue_30ft_Cone_Burst_600x600.webm`],
                darkred: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Dark_Red_30ft_Cone_Burst_600x600.webm`],
                green: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Green_30ft_Cone_Burst_600x600.webm`],
                orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
                purple: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Purple_30ft_Cone_Burst_600x600.webm`],
            },
        },
        breathweaponspray01: {
            burst: {
                green: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Green_Cone_Burst_800x800.webm`],
                orange: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Cone_Burst_800x800.webm`],
                yellow: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Holy01_Regular_Yellow_Cone_Burst_800x800.webm`],
                purple: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Arcana01_Regular_Purple_Cone_Burst_800x800.webm`],
            },
            loop: {
                green: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Green_Cone_Loop_800x800.webm`],
                orange: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Cone_Loop_800x800.webm`],
                yellow: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Holy01_Regular_Yellow_Cone_Loop_800x800.webm`],
                purple: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Arcana01_Regular_Purple_Cone_Loop_800x800.webm`],
            }
        },
        breathweaponspray02: {
            burst: {
                green: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Green_Cone_Burst_800x800.webm`],
                orange: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Orange_Cone_Burst_800x800.webm`],
                yellow: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Holy02_Regular_Yellow_Cone_Burst_800x800.webm`],
                purple: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Arcana02_Regular_Purple_Cone_Burst_800x800.webm`],
            },
            loop: {
                green: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Green_Cone_Loop_800x800.webm`],
                orange: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Fire02_Regular_Orange_Cone_Loop_800x800.webm`],
                yellow: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Holy02_Regular_Yellow_Cone_Loop_800x800.webm`],
                purple: [lg`Template/Cone/Breath_Weapon/Breathweapon02_Arcana02_Regular_Purple_Cone_Loop_800x800.webm`],
            }
        },
        coneofcold: {
            '01': {
                blue: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Blue_600x600.webm`],
                green: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Green_600x600.webm`],
                orange: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Orange_600x600.webm`],
                purple: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Purple_600x600.webm`],
            },
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
    },
    square: {
        armsofhadar: {
            '01': {
                darkgreen: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Green_500x500.webm`],
                darkpurple: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Purple_500x500.webm`],
                darkred: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Red_500x500.webm`],
            }
        },
        blacktentacles: {
            '01': {
                darkgreen: [l4`Black_Tentacles/BlackTentacles_01_Dark_Green_600x600.webm`],
                darkpurple: [l4`Black_Tentacles/BlackTentacles_01_Dark_Purple_600x600.webm`],
                darkred: [l4`Black_Tentacles/BlackTentacles_01_Dark_Red_600x600.webm`],
            },
        },
        crackedshield: {
            '01': {
                darkred: [lg`Template/Square/TemplateShieldCrackedSquare_01_Dark_Red_600x600.webm`],
                darkpurple: [lg`Template/Square/TemplateShieldCrackedSquare_01_Regular_Purple_600x600.webm`],
            },
        },
        drop: {
            '01': {
                darkgreen: [lg`Template/Square/TemplateDropSquare_01_Dark_Green_600x600.webm`],
                red: [lg`Template/Square/TemplateDropSquare_01_Regular_Red_600x600.webm`]
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
        fear: {
            '01': {
                darkorange: [lg`Template/Square/TemplateFearSquare_01_Dark_Orange_600x600.webm`],
                darkpurple: [lg`Template/Square/TemplateFearSquare_01_Dark_Purple_600x600.webm`],
                orange: [lg`Template/Square/TemplateFearSquare_01_Regular_Orange_600x600.webm`],
            },
        },
        grease: {
            "01": {
                brown: [l1`Grease/Grease_Dark_Brown_600x600.webm`],
                green: [l1`Grease/Grease_Dark_Green_600x600.webm`],
                grey: [l1`Grease/Grease_Dark_Grey_600x600.webm`],
                purple: [l1`Grease/Grease_Dark_Purple_600x600.webm`],
            }
        },
        heart: {
            '01': {
                darkred: [lg`Template/Square/TemplateHeartSquare_01_Dark_Red_600x600.webm`],
                pink: [lg`Template/Square/TemplateHeartSquare_01_Regular_Pink_600x600.webm`],
                teal: [lg`Template/Square/TemplateHeartSquare_01_Regular_Teal_600x600.webm`],
            },
        },
        horror: {
            '01': {
                darkteal: [lg`Template/Square/TemplateHorrorSquare_01_Dark_Teal_600x600.webm`],
                purple: [lg`Template/Square/TemplateHorrorSquare_01_Regular_Purple_600x600.webm`],
                teal: [lg`Template/Square/TemplateHorrorSquare_01_Regular_Teal_600x600.webm`],
            },
        },
        musicnote: {
            '01': {
                blue: [lg`Template/Square/TemplateMusicNoteSquare_01_Regular_Blue_600x600.webm`],
                darkred: [lg`Template/Square/TemplateMusicNoteSquare_01_Dark_Red_600x600.webm`],
                purple: [lg`Template/Square/TemplateMusicNoteSquare_01_Regular_Purple_600x600.webm`],
            },
        },
        poison: {
            '01': {
                darkgreen: [lg`Template/Square/TemplatePoisonSquare_01_Dark_Green_600x600.webm`],
                purple: [lg`Template/Square/TemplatePoisonSquare_01_Regular_Purple_600x600.webm`],
            },
        },
        runes: {
            '01': {
                darkorange: [lg`Template/Square/TemplateRunesSquare_01_Dark_Orange_600x600.webm`],
                darkred: [lg`Template/Square/TemplateRunesSquare_01_Dark_Red_600x600.webm`],
                blue: [lg`Template/Square/TemplateRunesSquare_01_Regular_Blue_600x600.webm`],
                green: [lg`Template/Square/TemplateRunesSquare_01_Regular_Green02_600x600.webm`],
                orange: [lg`Template/Square/TemplateRunesSquare_01_Regular_Orange_600x600.webm`],
            },
        },
        shields: {
            '01': {
                darkred: [lg`Template/Square/TemplateShieldSquare_01_Dark_Red_600x600.webm`],
                green: [lg`Template/Square/TemplateShieldSquare_01_Regular_Green_600x600.webm`],
            },
        },
        snowflakes: {
            '01': {
                darkblue: [lg`Template/Square/TemplateSnowflakeSquare_01_Dark_Blue_600x600.webm`],
                blue: [lg`Template/Square/TemplateSnowflakeSquare_01_Regular_Blue_600x600.webm`],
            },
        },
        skull: {
            '01': {
                darkgreen: [lg`Template/Square/TemplateSkullSquare_01_Dark_Green_600x600.webm`],
                darkorange: [lg`Template/Square/TemplateSkullSquare_01_Dark_Orange_600x600.webm`],
                purple: [lg`Template/Square/TemplateSkullSquare_01_Regular_Purple_600x600.webm`],
            },
        },
        stun: {
            '01': {
                darkteal: [lg`Template/Square/TemplateStunSquare_01_Dark_Teal_600x600.webm`],
                purple: [lg`Template/Square/TemplateStunSquare_01_Regular_Purple_600x600.webm`],
            },
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
        web: {
            '01': {
                white: [l2`Web/Web_01_White_01_400x400.webm`]
            },
            '02': {
                white: [l2`Web/Web_01_White_02_400x400.webm`]
            }
        },
    },
    ray: {
        breathweapon: {
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
        breathweaponspray01: {
            burst: {
                green: [lg`Template/Line/Breath_Weapon/Breathweapon02_Fire01_Regular_Green_Line_Burst_1200x400.webm`],
                orange: [lg`Template/Line/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Line_Burst_1200x400.webm`],
                yellow: [lg`Template/Line/Breath_Weapon/Breathweapon02_Holy01_Regular_Yellow_Line_Burst_1200x400.webm`],
                purple: [lg`Template/Line/Breath_Weapon/Breathweapon02_Arcana01_Regular_Purple_Line_Burst_1200x400.webm`],
            },
            loop: {
                green: [lg`Template/Line/Breath_Weapon/Breathweapon02_Fire01_Regular_Green_Line_Loop_1200x400.webm`],
                orange: [lg`Template/Line/Breath_Weapon/Breathweapon02_Fire01_Regular_Orange_Line_Loop_1200x400.webm`],
                yellow: [lg`Template/Line/Breath_Weapon/Breathweapon02_Holy01_Regular_Yellow_Line_Loop_1200x400.webm`],
                purple: [lg`Template/Line/Breath_Weapon/Breathweapon02_Arcana01_Regular_Purple_Line_Loop_1200x400.webm`],
            }
        },
        lightningbolt: {
            '01': {
                darkblue: [l3`Lightning_Bolt/LightningBolt_01_Dark_Blue_4000x200.webm`],
                blue: [l3`Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x200.webm`],
                green: [l3`Lightning_Bolt/LightningBolt_01_Regular_Green_4000x200.webm`],
                orange: [l3`Lightning_Bolt/LightningBolt_01_Regular_Orange_4000x200.webm`],
                purple: [l3`Lightning_Bolt/LightningBolt_01_Regular_Purple_4000x200.webm`]
            },
            '02': {
                darkblue: [l3`Lightning_Bolt/LightningBolt_01_Dark_Blue_4000x400.webm`],
                blue: [l3`Lightning_Bolt/LightningBolt_01_Regular_Blue_4000x400.webm`],
                green: [l3`Lightning_Bolt/LightningBolt_01_Regular_Green_4000x400.webm`],
                orange: [l3`Lightning_Bolt/LightningBolt_01_Regular_Orange_4000x400.webm`],
                purple: [l3`Lightning_Bolt/LightningBolt_01_Regular_Purple_4000x400.webm`]
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

    },
}

/**
 * Static Types:
 * 
 * Conditions
 * Creature
 * Energy
 * Fire
 * Generic
 * Ice
 * Lightning
 * Liquid
 * Magic Signs
 * Marker
 * Music
 * Particles
 * Shield Effects
 * Spell
 * Token Border
 * 
 */
JB2APATREONDB.static = {
    conditions: {
        drop: {
            '01': {
                green: [lg`Marker/MarkerDrop_01_Dark_Green_400x400.webm`],
                red: [lg`Marker/MarkerDrop_01_Regular_Red_400x400.webm`],
            },
            '02': {
                green: [lg`Marker/MarkerDrop_02_Dark_Green_400x400.webm`],
                red: [lg`Marker/MarkerDrop_02_Regular_Red_400x400.webm`],
            },
            '03': {
                green: [lg`Marker/MarkerDrop_03_Dark_Green_400x400.webm`],
                red: [lg`Marker/MarkerDrop_03_Regular_Red_400x400.webm`],
            },
        },
        fear: {
            '01': {
                orange: [lg`Marker/MarkerFear_01_Regular_Orange_400x400.webm`],
                darkorange: [lg`Marker/MarkerFear_01_Dark_Orange_400x400.webm`],
                darkpurple: [lg`Marker/MarkerFear_01_Dark_Purple_400x400.webm`],
            },
            '02': {
                orange: [lg`Marker/MarkerFear_02_Regular_Orange_400x400.webm`],
                darkorange: [lg`Marker/MarkerFear_02_Dark_Orange_400x400.webm`],
                darkpurple: [lg`Marker/MarkerFear_02_Dark_Purple_400x400.webm`],
            },
            '03': {
                orange: [lg`Marker/MarkerFear_03_Regular_Orange_400x400.webm`],
                darkorange: [lg`Marker/MarkerFear_03_Dark_Orange_400x400.webm`],
                darkpurple: [lg`Marker/MarkerFear_03_Dark_Purple_400x400.webm`],
            },
        },
        heart: {
            '01': {
                darkred: [lg`Marker/MarkerHeart_01_Dark_Red_400x400.webm`],
                pink: [lg`Marker/MarkerHeart_01_Regular_Pink_400x400.webm`],
                teal: [lg`Marker/MarkerHeart_01_Regular_Teal_400x400.webm`],
            },
            '02': {
                darkred: [lg`Marker/MarkerHeart_02_Dark_Red_400x400.webm`],
                pink: [lg`Marker/MarkerHeart_02_Regular_Pink_400x400.webm`],
                teal: [lg`Marker/MarkerHeart_02_Regular_Teal_400x400.webm`],
            },
            '03': {
                darkred: [lg`Marker/MarkerHeart_03_Dark_Red_400x400.webm`],
                pink: [lg`Marker/MarkerHeart_03_Regular_Pink_400x400.webm`],
                teal: [lg`Marker/MarkerHeart_03_Regular_Teal_400x400.webm`],
            },
        },
        horror: {
            '01': {
                purple: [lg`Marker/MarkerHorror_01_Regular_Purple_400x400.webm`],
                teal: [lg`Marker/MarkerHorror_01_Regular_Teal_400x400.webm`],
                darkteal: [lg`Marker/MarkerHorror_01_Dark_Teal_400x400.webm`],
            },
            '02': {
                purple: [lg`Marker/MarkerHorror_02_Regular_Purple_400x400.webm`],
                teal: [lg`Marker/MarkerHorror_02_Dark_Teal_400x400.webm`],
                darkteal: [lg`Marker/MarkerHorror_02_Dark_Teal_400x400.webm`],
            },
            '03': {
                purple: [lg`Marker/MarkerHorror_03_Regular_Purple_400x400.webm`],
                teal: [lg`Marker/MarkerHorror_02_Regular_Teal_400x400.webm`],
                darkteal: [lg`Marker/MarkerHorror_03_Dark_Teal_400x400.webm`],
            },
        },
        light: {
            pulse: {
                blue: [lg`Marker/MarkerLight_01_Regular_Blue_400x400.webm`],
                green: [lg`Marker/MarkerLight_01_Regular_Green_400x400.webm`],
                yellow: [lg`Marker/MarkerLight_01_Regular_Yellow_400x400.webm`],
            },
            nopulse: {
                blue: [lg`Marker/MarkerLightNoPulse_01_Regular_Blue_400x400.webm`],
                green: [lg`Marker/MarkerLightNoPulse_01_Regular_Green_400x400.webm`],
                yellow: [lg`Marker/MarkerLightNoPulse_01_Regular_Yellow_400x400.webm`],
            },
        },
        poison: {
            '01': {
                darkgreen: [lg`Marker/MarkerPoison_01_Dark_Green_400x400.webm`],
                purple: [lg`Marker/MarkerPoison_01_Regular_Purple_400x400.webm`],
            },
            '02': {
                darkgreen: [lg`Marker/MarkerPoison_02_Dark_Green_400x400.webm`],
                purple: [lg`Marker/MarkerPoison_02_Regular_Purple_400x400.webm`],
            },
            '03': {
                darkgreen: [lg`Marker/MarkerPoison_03_Dark_Green_400x400.webm`],
                purple: [lg`Marker/MarkerPoison_03_Regular_Purple_400x400.webm`],
            },
        },
        runes: {
            '01': {
                black: [lg`Marker/MarkerRunes_01_Dark_Black_400x400.webm`],
                blue: [lg`Marker/MarkerRunes_01_Regular_Blue_400x400.webm`],
                darkorange: [lg`Marker/MarkerRunes_01_Dark_Orange_400x400.webm`],
                green: [lg`Marker/MarkerRunes_01_Regular_Green02_400x400.webm`],
                orange: [lg`Marker/MarkerRunes_01_Regular_Orange_400x400.webm`],
                darkred: [lg`Marker/MarkerRunes_01_Dark_Red_400x400.webm`],
                red: [lg`Marker/MarkerRunes_01_Regular_Red_400x400.webm`],
                yellow: [lg`Marker/MarkerRunes_01_Regular_Yellow_400x400.webm`],
                white: [lg`Marker/MarkerRunes_01_Regular_White_400x400.webm`],
            },
            '02': {
                black: [lg`Marker/MarkerRunes_02_Dark_Black_400x400.webm`],
                blue: [lg`Marker/MarkerRunes_02_Regular_Blue_400x400.webm`],
                darkorange: [lg`Marker/MarkerRunes_02_Dark_Orange_400x400.webm`],
                green: [lg`Marker/MarkerRunes_02_Regular_Green02_400x400.webm`],
                orange: [lg`Marker/MarkerRunes_02_Regular_Orange_400x400.webm`],
                darkred: [lg`Marker/MarkerRunes_02_Dark_Red_400x400.webm`],
                red: [lg`Marker/MarkerRunes_02_Regular_Red_400x400.webm`],
                yellow: [lg`Marker/MarkerRunes_02_Regular_Yellow_400x400.webm`],
                white: [lg`Marker/MarkerRunes_02_Regular_White_400x400.webm`],
            },
            '03': {
                black: [lg`Marker/MarkerRunes_03_Dark_Black_400x400.webm`],
                blue: [lg`Marker/MarkerRunes_03_Regular_Blue_400x400.webm`],
                darkorange: [lg`Marker/MarkerRunes_03_Dark_Orange_400x400.webm`],
                green: [lg`Marker/MarkerRunes_03_Regular_Green02_400x400.webm`],
                orange: [lg`Marker/MarkerRunes_03_Regular_Orange_400x400.webm`],
                darkred: [lg`Marker/MarkerRunes_03_Dark_Red_400x400.webm`],
                red: [lg`Marker/MarkerRunes_02_Regular_Red_400x400.webm`],
                yellow: [lg`Marker/MarkerRunes_03_Regular_Yellow_400x400.webm`],
                white: [lg`Marker/MarkerRunes_03_Regular_White_400x400.webm`],
            },
        },
        shields: {
            '01': {
                darkred: [lg`Marker/MarkerShield_01_Dark_Red_400x400.webm`],
                green: [lg`Marker/MarkerShield_01_Regular_Green_400x400.webm`],
            },
            '02': {
                darkred: [lg`Marker/MarkerShield_02_Dark_Red_400x400.webm`],
                green: [lg`Marker/MarkerShield_02_Regular_Green_400x400.webm`],
            },
            '03': {
                darkred: [lg`Marker/MarkerShield_03_Dark_Red_400x400.webm`],
                green: [lg`Marker/MarkerShield_03_Regular_Green_400x400.webm`],
            },
        },
        crackedshield: {
            '01': {
                darkred: [lg`Marker/MarkerShieldCracked_01_Dark_Red_400x400.webm`],
                purple: [lg`Marker/MarkerShieldCracked_01_Regular_Purple_400x400.webm`],
            },
            '02': {
                darkred: [lg`Marker/MarkerShieldCracked_02_Dark_Red_400x400.webm`],
                purple: [lg`Marker/MarkerShieldCracked_02_Regular_Purple_400x400.webm`],
            },
            '03': {
                darkred: [lg`Marker/MarkerShieldCracked_03_Dark_Red_400x400.webm`],
                purple: [lg`Marker/MarkerShieldCracked_03_Regular_Purple_400x400.webm`],
            },
        },
        skull: {
            '01': {
                darkgreen: [lg`Marker/MarkerSkull_01_Dark_Green_400x400.webm`],
                darkorange: [lg`Marker/MarkerSkull_01_Dark_Orange_400x400.webm`],
                purple: [lg`Marker/MarkerSkull_01_Regular_Purple_400x400.webm`],
            },
            '02': {
                darkgreen: [lg`Marker/MarkerSkull_02_Dark_Green_400x400.webm`],
                darkorange: [lg`Marker/MarkerSkull_02_Dark_Orange_400x400.webm`],
                purple: [lg`Marker/MarkerSkull_02_Regular_Purple_400x400.webm`],
            },
            '03': {
                darkgreen: [lg`Marker/MarkerSkull_03_Dark_Green_400x400.webm`],
                darkorange: [lg`Marker/MarkerSkull_03_Dark_Orange_400x400.webm`],
                purple: [lg`Marker/MarkerSkull_03_Regular_Purple_400x400.webm`],
            },
        },
        snowflakes: {
            '01': {
                darkblue: [lg`Marker/MarkerSnowflake_01_Dark_Blue_400x400.webm`],
                blue: [lg`Marker/MarkerSnowflake_01_Regular_Blue_400x400.webm`],
            },
            '02': {
                darkblue: [lg`Marker/MarkerSnowflake_02_Dark_Blue_400x400.webm`],
                blue: [lg`Marker/MarkerSnowflake_02_Regular_Blue_400x400.webm`],
            },
            '03': {
                darkblue: [lg`Marker/MarkerSnowflake_03_Dark_Blue_400x400.webm`],
                blue: [lg`Marker/MarkerSnowflake_03_Regular_Blue_400x400.webm`],
            },
        },
        stun: {
            '01': {
                darkteal: [lg`Marker/MarkerStun_01_Dark_Teal_400x400.webm`],
                purple: [lg`Marker/MarkerStun_01_Regular_Purple_400x400.webm`],
            },
            '02': {
                darkteal: [lg`Marker/MarkerStun_02_Dark_Teal_400x400.webm`],
                purple: [lg`Marker/MarkerStun_02_Regular_Purple_400x400.webm`],
            },
            '03': {
                darkteal: [lg`Marker/MarkerStun_03_Dark_Teal_400x400.webm`],
                purple: [lg`Marker/MarkerStun_03_Regular_Purple_400x400.webm`],
            },
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
    },
    creature: {
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
                blue: [lg`Creature/Claws_01_Bright_Blue_400x400.webm`],
                brown: [lg`Creature/Claws_01_Regular_Brown_400x400.webm`],
                darkred: [lg`Creature/Claws_01_Dark_Red_400x400.webm`],
                green: [lg`Creature/Claws_01_Bright_Green_400x400.webm`],
                orange: [lg`Creature/Claws_01_Bright_Orange_400x400.webm`],
                purple: [lg`Creature/Claws_01_Bright_Purple_400x400.webm`],
                red: [lg`Creature/Claws_01_Regular_Red_400x400.webm`],
                yellow: [lg`Creature/Claws_01_Bright_Yellow_400x400.webm`],
            }
        },
    },
    energy: {
        energyfield: {
            '01': {
                blue: [lg`Energy/EnergyField_01_Regular_Blue_600x600.webm`],
                green: [lg`Energy/EnergyField_01_Regular_Green_600x600.webm`],
                rainbow: [lg`Energy/EnergyField_01_Regular_Rainbow_600x600.webm`],
            }
        },
        dodecahedron: {
            simple: {
                blue: [lg`Energy/Dodecahedron_01_Regular_Blue_600x600.webm`],
                green: [lg`Energy/Dodecahedron_01_Regular_Green_600x600.webm`],
            },
            rolled: {
                blue: [lg`Energy/DodecahedronRoll_01_Regular_Blue_600x600.webm`],
                green: [lg`Energy/DodecahedronRoll_01_Regular_Green_600x600.webm`],
            },
            runeabove: {
                yellowblue: [lg`Energy/DodecahedronRuneAbove_01_Regular_BlueYellow_600x600.webm`],
                darkgreenpurple: [lg`Energy/DodecahedronRuneAbove_01_Dark_GreenPurple_600x600.webm`],
            },
            runebelow: {
                yellowblue: [lg`Energy/DodecahedronRuneBelow_01_Regular_BlueYellow_600x600.webm`],
                darkgreenpurple: [lg`Energy/DodecahedronRuneBelow_01_Dark_GreenPurple_600x600.webm`],
            },
            skullabove: {
                darkgreenpurple: [lg`Energy/DodecahedronSkullAbove_01_Dark_GreenPurple_600x600.webm`],
            },
            skullbelow: {
                darkgreenpurple: [lg`Energy/DodecahedronSkullBelow_01_Dark_GreenPurple_600x600.webm`],
            },
            starabove: {
                yellowblue: [lg`Energy/DodecahedronStarAbove_01_Regular_BlueYellow_600x600.webm`],
            },
            starbelow: {
                yellowblue: [lg`Energy/DodecahedronStarBelow_01_Regular_BlueYellow_600x600.webm`],
            },
        },
        shimmer: {
            '01': {
                blue: [lg`Energy/Shimmer01_01_Regular_Blue_400x400.webm`],
                green: [lg`Energy/Shimmer01_01_Regular_Green_400x400.webm`],
                orange: [lg`Energy/Shimmer01_01_Regular_Orange_400x400.webm`],
                purple: [lg`Energy/Shimmer01_01_Regular_Purple_400x400.webm`]
            },
        },
        sparkles: {
            '01': {
                blue: [lg`Energy/SwirlingSparkles_01_Regular_Blue_400x400.webm`],
                bluepink: [lg`Energy/SwirlingSparkles_01_Regular_BluePink_400x400.webm`],
                greenorange: [lg`Energy/SwirlingSparkles_01_Regular_GreenOrange_400x400.webm`],
                orangepurple: [lg`Energy/SwirlingSparkles_01_Regular_OrangePurple_400x400.webm`],
            },
        },
        strands: {
            '01': {
                green: [lg`Energy/EnergyStrandIN01_01_Regular_Green_600x600.webm`],
                purple: [lg`Energy/EnergyStrandIN01_01_Regular_Purple_600x600.webm`],
                red: [lg`Energy/EnergyStrandIN01_01_Regular_Red_600x600.webm`],
                yellow: [lg`Energy/EnergyStrandIN01_01_Regular_Yellow_600x600.webm`],
            },
            '02': {
                green: [lg`Energy/EnergyStrandIN01_02_Regular_Green_600x600.webm`],
                purple: [lg`Energy/EnergyStrandIN01_02_Regular_Purple_600x600.webm`],
                red: [lg`Energy/EnergyStrandIN01_02_Regular_Red_600x600.webm`],
                yellow: [lg`Energy/EnergyStrandIN01_02_Regular_Yellow_600x600.webm`],
            },
            '03': {
                green: [lg`Energy/EnergyStrandIN01_03_Regular_Green_600x600.webm`],
                purple: [lg`Energy/EnergyStrandIN01_03_Regular_Purple_600x600.webm`],
                red: [lg`Energy/EnergyStrandIN01_03_Regular_Red_600x600.webm`],
                yellow: [lg`Energy/EnergyStrandIN01_03_Regular_Yellow_600x600.webm`],
            },
        },
    },
    fire: {
        eruption: {
            '01': {
                blue: [lg`Fire/Eruption_01_Regular_Blue_600x600.webm`],
                green: [lg`Fire/Eruption_01_Regular_Green_600x600.webm`],
                orange: [lg`Fire/Eruption_01_Regular_Orange_600x600.webm`]
            },
        },
        groundcrack: {
            '01': {
                blue: [lg`Fire/GroundCrackLoop_01_Regular_Blue_600x600.webm`],
                green: [lg`Fire/GroundCrackLoop_01_Regular_Green_600x600.webm`],
                orange: [lg`Fire/GroundCrackLoop_01_Regular_Orange_600x600.webm`],
                purple: [lg`Fire/GroundCrackLoop_01_Regular_Purple_600x600.webm`],
            },
            '02': {
                blue: [lg`Fire/GroundCrackLoop_02_Regular_Blue_600x600.webm`],
                green: [lg`Fire/GroundCrackLoop_02_Regular_Green_600x600.webm`],
                orange: [lg`Fire/GroundCrackLoop_02_Regular_Orange_600x600.webm`],
                purple: [lg`Fire/GroundCrackLoop_02_Regular_Purple_600x600.webm`],
            },
            '03': {
                blue: [lg`Fire/GroundCrackLoop_03_Regular_Blue_600x600.webm`],
                green: [lg`Fire/GroundCrackLoop_03_Regular_Green_600x600.webm`],
                orange: [lg`Fire/GroundCrackLoop_03_Regular_Orange_600x600.webm`],
                purple: [lg`Fire/GroundCrackLoop_03_Regular_Purple_600x600.webm`],
            },
        },
        fireworks: {
            '01': {
                green: [
                    lg`Fireworks/Firework02_01_Regular_Green_600x600.webm`,
                ],
                greenorange: [
                    lg`Fireworks/Firework01_01_Regular_GreenOrange_600x600.webm`,
                ],
                greenred: [
                    lg`Fireworks/Firework01_01_Regular_GreenRed_600x600.webm`,
                    lg`Fireworks/Firework03_01_Regular_GreenRed_600x600.webm`,
                ],
                orange: [
                    lg`Fireworks/Firework02_01_Regular_Orange_600x600.webm`,
                ],
                orangeyellow: [
                    lg`Fireworks/Firework01_01_Regular_OrangeYellow_600x600.webm`,
                    lg`Fireworks/Firework03_01_Regular_OrangeYellow_600x600.webm`,
                ],
                yellow: [
                    lg`Fireworks/Firework02_01_Regular_Yellow_600x600.webm`,
                ],
                bluepink: [
                    lg`Fireworks/Firework03_01_Regular_BluePink_600x600.webm`,
                ],
            },
            '02': {
                green: [
                    lg`Fireworks/Firework02_02_Regular_Green_600x600.webm`,
                ],
                greenorange: [
                    lg`Fireworks/Firework01_02_Regular_GreenOrange_600x600.webm`,
                ],
                greenred: [
                    lg`Fireworks/Firework03_02_Regular_GreenRed_600x600.webm`,
                ],
                orange: [
                    lg`Fireworks/Firework02_02_Regular_Orange_600x600.webm`,
                ],
                orangeyellow: [
                    lg`Fireworks/Firework01_02_Regular_OrangeYellow_600x600.webm`,
                    lg`Fireworks/Firework03_02_Regular_OrangeYellow_600x600.webm`,
                ],
                yellow: [
                    lg`Fireworks/Firework02_02_Regular_Yellow_600x600.webm`,
                    lg`Fireworks/Firework03_02_Regular_OrangeYellow_600x600.webm`,
                ],
                bluepink: [
                    lg`Fireworks/Firework03_02_Regular_BluePink_600x600.webm`,
                ],
            },
        },
    },
    generic: {
        boulderimpact: {
            '01': {
                white: [lg`Impact/BoulderImpact_01_Regular_White_500x500.webm`]
            }
        },
        explosion: {
            '01': {
                darkpurple: [
                    lg`Explosion/Explosion_04_Dark_Purple_400x400.webm`,
                ],
                darkred: [
                    lg`Explosion/Explosion_04_Dark_Red_400x400.webm`,
                ],
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
                greenorange: [
                    lg`Explosion/Explosion_03_Regular_GreenOrange_400x400.webm`,
                ],
                orange: [
                    lg`Explosion/Explosion_01_Orange_400x400.webm`,
                    lg`Explosion/Explosion_02_Orange_400x400.webm`,
                    lg`Explosion/Explosion_04_Regular_Orange_400x400.webm`,
                ],
                pink: [
                    lg`Explosion/Explosion_03_Regular_Pink_400x400.webm`,
                ],
                purplepink: [
                    lg`Explosion/Explosion_03_Regular_PurplePink_400x400.webm`,
                ],
                purple: [
                    lg`Explosion/Explosion_01_Purple_400x400.webm`,
                    lg`Explosion/Explosion_02_Purple_400x400.webm`,
                ],
                red: [
                    lg`Explosion/Explosion_03_Regular_Red_400x400.webm`,
                ],
                yellow: [
                    lg`Explosion/Explosion_01_Yellow_400x400.webm`,
                    lg`Explosion/Explosion_02_Yellow_400x400.webm`,
                ],
                yellowblue: [
                    lg`Explosion/Explosion_03_Regular_BlueYellow_400x400.webm`,
                ],
                whiteblue: [
                    lg`Explosion/Explosion_03_Dark_BlueWhite_400x400.webm`,
                ],
            }
        },
        impact: {
            '01': {
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
                darkpurple: [
                    lg`Impact/Impact_01_Dark_Purple_400x400.webm`,
                    lg`Impact/Impact_02_Dark_Purple_400x400.webm`,
                    lg`Impact/Impact_03_Dark_Purple_400x400.webm`,
                    lg`Impact/Impact_04_Dark_Purple_400x400.webm`,
                    lg`Impact/Impact_11_Dark_Purple_400x400.webm`,
                    lg`Impact/Impact_12_Dark_Purple_400x400.webm`
                ],
                darkred: [
                    lg`Impact/Impact_01_Dark_Red_400x400.webm`,
                    lg`Impact/Impact_02_Dark_Red_400x400.webm`,
                    lg`Impact/Impact_03_Dark_Red_400x400.webm`,
                    lg`Impact/Impact_04_Dark_Red_400x400.webm`,
                    lg`Impact/Impact_11_Dark_Red_400x400.webm`,
                    lg`Impact/Impact_12_Dark_Red_400x400.webm`,
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
                orange: [
                    lg`Impact/Impact_01_Regular_Orange_400x400.webm`,
                    lg`Impact/Impact_02_Regular_Orange_400x400.webm`,
                    lg`Impact/Impact_03_Regular_Orange_400x400.webm`,
                    lg`Impact/Impact_04_Regular_Orange_400x400.webm`,
                    lg`Impact/Impact_05_Regular_Orange_400x400.webm`,
                    lg`Impact/Impact_07_Regular_Orange_400x400.webm`,
                    lg`Impact/Impact_08_Regular_Orange_400x400.webm`,
                    lg`Impact/Impact_09_Regular_Orange_400x400.webm`,
                    lg`Impact/Impact_10_Regular_Orange_400x400.webm`,
                ],
                pink: [
                    lg`Impact/Impact_07_Regular_Pink_400x400.webm`,
                    lg`Impact/Impact_09_Regular_Pink_400x400.webm`,
                ],
                purplepink: [
                    lg`Impact/Impact_01_Regular_PinkPurple_400x400.webm`,
                    lg`Impact/Impact_02_Regular_PinkPurple_400x400.webm`,
                    lg`Impact/Impact_03_Regular_PinkPurple_400x400.webm`,
                    lg`Impact/Impact_04_Regular_PinkPurple_400x400.webm`,
                ],
                purple: [
                    lg`Impact/Impact_05_Regular_Purple_400x400.webm`,
                    lg`Impact/Impact_07_Regular_Purple_400x400.webm`,
                    lg`Impact/Impact_09_Regular_Purple_400x400.webm`,
                    lg`Impact/Impact_11_Regular_Purple_400x400.webm`,
                    lg`Impact/Impact_12_Regular_Purple_400x400.webm`
                ],
                red: [
                    lg`Impact/Impact_05_Regular_Red_400x400.webm`,
                    lg`Impact/Impact_07_Regular_Red_400x400.webm`,
                    lg`Impact/Impact_08_Regular_Red_400x400.webm`,
                    lg`Impact/Impact_10_Regular_Red_400x400.webm`,
                    lg`Impact/Impact_11_Regular_Red_400x400.webm`,
                    lg`Impact/Impact_12_Regular_Red_400x400.webm`,
                    lg`Impact/Impact_07_Regular_Red02_400x400.webm`,
                ],
                white: [
                    lg`Impact/Impact_07_Regular_White_400x400.webm`,
                    lg`Impact/Impact_09_Regular_White_400x400.webm`,
                ],
                yellow: [
                    lg`Impact/Impact_01_Regular_Yellow_400x400.webm`,
                    lg`Impact/Impact_02_Regular_Yellow_400x400.webm`,
                    lg`Impact/Impact_03_Regular_Yellow_400x400.webm`,
                    lg`Impact/Impact_04_Regular_Yellow_400x400.webm`,
                    lg`Impact/Impact_05_Regular_Yellow_400x400.webm`,
                    lg`Impact/Impact_06_Regular_Yellow_400x400.webm`,
                    lg`Impact/Impact_07_Regular_Yellow_400x400.webm`,
                    lg`Impact/Impact_11_Regular_Yellow_400x400.webm`,
                    lg`Impact/Impact_12_Regular_Yellow_400x400.webm`,
                ],
            }
        },
        indicator: {
            chevron: {
                green: [lg`UI/3Chevrons_01_Regular_Green_200x200.webm`],
                purple: [lg`UI/3Chevrons_01_Regular_Purple_200x200.webm`],
                red: [lg`UI/3Chevrons_01_Regular_Red_200x200.webm`],
                yellow: [lg`UI/3Chevrons_01_Regular_Yellow_200x200.webm`],
            },
            '01': {
                green: [lg`UI/Indicator_01_Regular_Green_200x200.webm`],
                purple: [lg`UI/Indicator_01_Regular_Purple_200x200.webm`],
                red: [lg`UI/Indicator_01_Regular_Red_200x200.webm`],
                yellow: [lg`UI/Indicator_01_Regular_Yellow_200x200.webm`],
            },
            '02': {
                green: [lg`UI/Indicator01_02_Regular_BlueGreen_400x400.webm`],
                red: [lg`UI/Indicator01_02_Regular_RedYellow_400x400.webm`],
            },
            '03': {
                green: [lg`UI/Indicator01_03_Regular_BlueGreen_200x200.webm`],
                red: [lg`UI/Indicator01_03_Regular_RedYellow_200x200.webm`],
            },
            '04': {
                green: [lg`UI/Indicator02_02_Regular_BlueGreen_400x400.webm`],
                red: [lg`UI/Indicator02_02_Regular_RedYellow_400x400.webm`],
            },
            '05': {
                green: [lg`UI/Indicator02_03_Regular_BlueGreen_200x200.webm`],
                red: [lg`UI/Indicator02_03_Regular_RedYellow_200x200.webm`],
            },
            '06': {
                green: [lg`UI/Indicator03_02_Regular_BlueGreen_400x400.webm`],
                red: [lg`UI/Indicator03_02_Regular_RedYellow_400x400.webm`],
            },
            '07': {
                green: [lg`UI/Indicator03_03_Regular_BlueGreen_200x200.webm`],
                red: [lg`UI/Indicator03_03_Regular_RedYellow_200x200.webm`],
            },
        },
        outpulse: {
            '01': {
                whiteblue: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`],
                greenorange: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_GreenOrange_Burst_600x600.webm`],
                purplepink: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_PurplePink_Burst_600x600.webm`],
                tealyellow: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_TealYellow_Burst_600x600.webm`],
            },
            '02': {
                whiteblue: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`],
                greenorange: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_GreenOrange_Burst_600x600.webm`],
                purplepink: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_PurplePink_Burst_600x600.webm`],
                tealyellow: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_TealYellow_Burst_600x600.webm`],
            }
        },
        smoke: {
            '01': {
                black: [lg`Smoke/SmokePuff01_01_Dark_Black_400x400.webm`],
                blue: [lg`Smoke/SmokePuff01_01_Regular_Blue_400x400.webm`],
                darkgreen: [lg`Smoke/SmokePuff01_01_Dark_Green_400x400.webm`],
                darkpurple: [lg`Smoke/SmokePuff01_01_Dark_Purple_400x400.webm`],
                grey: [lg`Smoke/SmokePuff01_01_Regular_Grey_400x400.webm`],
            },
            '02': {
                black: [lg`Smoke/SmokePuff01_02_Dark_Black_400x400.webm`],
                blue: [lg`Smoke/SmokePuff01_02_Regular_Blue_400x400.webm`],
                darkgreen: [lg`Smoke/SmokePuff01_02_Dark_Green_400x400.webm`],
                darkpurple: [lg`Smoke/SmokePuff01_02_Dark_Purple_400x400.webm`],
                grey: [lg`Smoke/SmokePuff01_02_Regular_Grey_400x400.webm`],
            },
            '03': {
                black: [lg`Smoke/SmokePuff01_03_Dark_Black_400x400.webm`],
                blue: [lg`Smoke/SmokePuff01_03_Regular_Blue_400x400.webm`],
                darkgreen: [lg`Smoke/SmokePuff01_03_Dark_Green_400x400.webm`],
                darkpurple: [lg`Smoke/SmokePuff01_03_Dark_Purple_400x400.webm`],
                grey: [lg`Smoke/SmokePuff01_03_Regular_Grey_400x400.webm`],
            },
            ring: {
                black: [lg`Smoke/SmokeRing_01_Dark_Black_800x800.webm`],
                white: [lg`Smoke/SmokeRing_01_Regular_White_800x800.webm`]
            },
        },
        ui: {
            drop: {
                green: [lg`UI/IconDrop_01_Dark_Green_200x200.webm`],
                red: [lg`UI/IconDrop_01_Regular_Red_200x200.webm`]
            },
            fear: {
                darkorange: [lg`UI/IconFear_01_Dark_Orange_200x200.webm`],
                orange: [lg`UI/IconFear_01_Regular_Orange_200x200.webm`],
                darkpurple: [lg`UI/IconFear_01_Dark_Purple_200x200.webm`]
            },
            heart: {
                darkred: [lg`UI/IconHeart_01_Dark_Red_200x200.webm`],
                pink: [lg`UI/IconHeart_01_Regular_Pink_200x200.webm`],
                teal: [lg`UI/IconHeart_01_Regular_Teal_200x200.webm`]
            },
            horror: {
                darkteal: [lg`UI/IconHorror_01_Dark_Teal_200x200.webm`],
                purple: [lg`UI/IconHorror_01_Regular_Purple_200x200.webm`],
                teal: [lg`UI/IconHorror_01_Regular_Teal_200x200.webm`]
            },
            music: {
                blue: [lg`UI/IconMusicNote_01_Regular_Blue_200x200.webm`],
                darkred: [lg`UI/IconMusicNote_01_Dark_Red_200x200.webm`],
                purple: [lg`UI/IconMusicNote_01_Regular_Purple_200x200.webm`],
            },
            poison: {
                darkgreen: [lg`UI/IconPoison_01_Dark_Green_200x200.webm`],
                purple: [lg`UI/IconPoison_01_Regular_Purple_200x200.webm`],
            },
            rune01: {
                black: [lg`UI/IconRunes_01_Dark_Black_200x200.webm`],
                blue: [lg`UI/IconRunes_01_Regular_Blue_200x200.webm`],
                darkorange: [lg`UI/IconRunes_01_Dark_Orange_200x200.webm`],
                darkred: [lg`UI/IconRunes_01_Dark_Red_200x200.webm`],
                green: [lg`UI/IconRunes_01_Regular_Green02_200x200.webm`],
                orange: [lg`UI/IconRunes_01_Regular_Orange_200x200.webm`],
                red: [lg`UI/IconRunes_01_Regular_Red_200x200.webm`],
                white: [lg`UI/IconRunes_01_Regular_White_200x200.webm`],
                yellow: [lg`UI/IconRunes_01_Regular_Yellow_200x200.webm`],
            },
            rune02: {
                black: [lg`UI/IconRunes02_01_Dark_Black_200x200.webm`],
                blue: [lg`UI/IconRunes02_01_Regular_Blue_200x200.webm`],
                darkorange: [lg`UI/IconRunes02_01_Dark_Orange_200x200.webm`],
                darkred: [lg`UI/IconRunes02_01_Dark_Red_200x200.webm`],
                green: [lg`UI/IconRunes02_01_Regular_Green02_200x200.webm`],
                orange: [lg`UI/IconRunes02_01_Regular_Orange_200x200.webm`],
                red: [lg`UI/IconRunes02_01_Regular_Red_200x200.webm`],
                white: [lg`UI/IconRunes02_01_Regular_White_200x200.webm`],
                yellow: [lg`UI/IconRunes02_01_Regular_Yellow_200x200.webm`],
            },
            rune03: {
                black: [lg`UI/IconRunes03_01_Dark_Black_200x200.webm`],
                blue: [lg`UI/IconRunes03_01_Regular_Blue_200x200.webm`],
                darkorange: [lg`UI/IconRunes03_01_Dark_Orange_200x200.webm`],
                darkred: [lg`UI/IconRunes03_01_Dark_Red_200x200.webm`],
                green: [lg`UI/IconRunes03_01_Regular_Green02_200x200.webm`],
                orange: [lg`UI/IconRunes03_01_Regular_Orange_200x200.webm`],
                red: [lg`UI/IconRunes03_01_Regular_Red_200x200.webm`],
                white: [lg`UI/IconRunes03_01_Regular_White_200x200.webm`],
                yellow: [lg`UI/IconRunes03_01_Regular_Yellow_200x200.webm`],
            },
            shields: {
                darkred: [lg`UI/IconShield_01_Dark_Red_200x200.webm`],
                green: [lg`UI/IconShield_01_Regular_Green_200x200.webm`]
            },
            crackedshield: {
                darkred: [lg`UI/IconShieldCracked_01_Dark_Red_200x200.webm`],
                purple: [lg`UI/IconShieldCracked_01_Regular_Purple_200x200.webm`],
            },
            skull: {
                darkgreen: [lg`UI/IconSkull_01_Dark_Green_200x200.webm`],
                darkorange: [lg`UI/IconSkull_01_Dark_Orange_200x200.webm`],
                purple: [lg`UI/IconSkull_01_Regular_Purple_200x200.webm`],
            },
            snowflake: {
                darkblue: [lg`UI/IconSnowflake_01_Dark_Blue_200x200.webm`],
                blue: [lg`UI/IconSnowflake_01_Regular_Blue_200x200.webm`]
            },
            stun: {
                darkteal: [lg`UI/IconStun_01_Dark_Teal_200x200.webm`],
                purple: [lg`UI/IconStun_01_Regular_Purple_200x200.webm`],
            }
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
        whirl: {
            loop: {
                black: [lg`Template/Circle/Whirl_01_Dark_Black_600x600.webm`],
                blue: [lg`Template/Circle/Whirl_01_Regular_Blue_600x600.webm`],
                green: [lg`Template/Circle/Whirl_01_Regular_Green_600x600.webm`],
                purple: [lg`Template/Circle/Whirl_01_Regular_Purple_600x600.webm`]
            },
            intro: {
                black: [lg`Template/Circle/WhirlIntro_01_Dark_Black_600x600.webm`],
                blue: [lg`Template/Circle/WhirlIntro_01_Regular_Blue_600x600.webm`],
                green: [lg`Template/Circle/WhirlIntro_01_Regular_Green_600x600.webm`],
                purple: [lg`Template/Circle/WhirlIntro_01_Regular_Purple_600x600.webm`]
            },
            outro: {
                black: [lg`Template/Circle/WhirlOutro_01_Dark_Black_600x600.webm`],
                blue: [lg`Template/Circle/WhirlOutro_01_Regular_Blue_600x600.webm`],
                green: [lg`Template/Circle/WhirlOutro_01_Regular_Green_600x600.webm`],
                purple: [lg`Template/Circle/WhirlOutro_01_Regular_Purple_600x600.webm`]
            }
        },
    },
    ice: {
        icespikes: {
            '01': {
                blue: [lg`Ice/IceSpikesRadialBurst_01_Regular_Blue_1000x1000.webm`],
                red: [lg`Ice/IceSpikesRadialBurst_01_Regular_Red_1000x1000.webm`],
                white: [lg`Ice/IceSpikesRadialBurst_01_Regular_White_1000x1000.webm`]
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
    },
    leaves: {
        complete: {
            '01': {
                green: [lg`Nature/SwirlingLeavesComplete01_01_Regular_Green_400x400.webm`],
                greenorange: [lg`Nature/SwirlingLeavesComplete01_01_Regular_GreenOrange_400x400.webm`],
            },
            '02': {
                green: [lg`Nature/SwirlingLeavesComplete01_02_Regular_Green_400x400.webm`],
                greenorange: [lg`Nature/SwirlingLeavesComplete01_02_Regular_GreenOrange_400x400.webm`],
            },
            '03': {
                green: [lg`Nature/SwirlingLeavesComplete02_01_Regular_Green_400x400.webm`],
                greenorange: [lg`Nature/SwirlingLeavesComplete02_01_Regular_GreenOrange_400x400.webm`],
            },
        },
        loop: {
            '01': {
                green: [lg`Nature/SwirlingLeavesLoop01_01_Regular_GreenOrange_400x400.webm`],
                greenorange: [lg`Nature/SwirlingLeavesLoop01_01_Regular_GreenOrange_400x400.webm`],
            },
            '02': {
                green: [lg`Nature/SwirlingLeavesLoop01_02_Regular_Green_400x400.webm`],
                greenorange: [lg`Nature/SwirlingLeavesLoop01_02_Regular_GreenOrange_400x400.webm`],
            },
            '03': {
                green: [lg`Nature/SwirlingLeavesLoop02_01_Regular_Green_400x400.webm`],
                greenorange: [lg`Nature/SwirlingLeavesLoop02_01_Regular_GreenOrange_400x400.webm`],
            },
        }
    },
    lightning: {
        ball: {
            '01': {
                blue: [lg`Lightning/LightningBall_01_Regular_Blue_400x400.webm`],
                green: [lg`Lightning/LightningBall_01_Regular_Green_400x400.webm`],
                darkgreen: [lg`Lightning/LightningBall_01_Regular_Green02_400x400.webm`],
                darkpurple: [lg`Lightning/LightningBall_01_Dark_Purple_400x400.webm`],
                darkred: [lg`Lightning/LightningBall_01_Dark_Red_400x400.webm`],
                orange: [lg`Lightning/LightningBall_01_Regular_Orange_400x400.webm`],
                purple: [lg`Lightning/LightningBall_01_Regular_Purple_400x400.webm`],
                purpleblue: [lg`Lightning/LightningBall_01_Regular_Blue02_400x400.webm`],
                red: [lg`Lightning/LightningBall_01_Regular_Red_400x400.webm`],
                yellow: [lg`Lightning/LightningBall_01_Regular_Yellow_400x400.webm`]
            }
        },
        strike: {
            '01': {
                blue: [
                    lg`Lightning/LightningStrike01_01_Regular_Blue_800x800.webm`,
                    lg`Lightning/LightningStrike01_02_Regular_Blue_800x800.webm`,
                    lg`Lightning/LightningStrike01_03_Regular_Blue_800x800.webm`,
                    lg`Lightning/LightningStrike01_04_Regular_Blue_800x800.webm`,
                    lg`Lightning/LightningStrike01_05_Regular_Blue_800x800.webm`,
                    lg`Lightning/LightningStrike01_06_Regular_Blue_800x800.webm`,
                ],
                purple: [
                    lg`Lightning/LightningStrike01_01_Regular_Purple_800x800.webm`,
                    lg`Lightning/LightningStrike01_02_Regular_Purple_800x800.webm`,
                    lg`Lightning/LightningStrike01_03_Regular_Purple_800x800.webm`,
                    lg`Lightning/LightningStrike01_04_Regular_Purple_800x800.webm`,
                    lg`Lightning/LightningStrike01_05_Regular_Purple_800x800.webm`,
                    lg`Lightning/LightningStrike01_06_Regular_Purple_800x800.webm`,
                ],
                yellow: [
                    lg`Lightning/LightningStrike01_01_Regular_Yellow_800x800.webm`,
                    lg`Lightning/LightningStrike01_02_Regular_Yellow_800x800.webm`,
                    lg`Lightning/LightningStrike01_03_Regular_Yellow_800x800.webm`,
                    lg`Lightning/LightningStrike01_04_Regular_Yellow_800x800.webm`,
                    lg`Lightning/LightningStrike01_05_Regular_Yellow_800x800.webm`,
                    lg`Lightning/LightningStrike01_06_Regular_Yellow_800x800.webm`,
                ],
            }
        },
        staticelectricity: {
            '01': {
                blue: [lg`Lightning/StaticElectricity_01_Regular_Blue_400x400.webm`],
                darkgreen: [lg`Lightning/StaticElectricity_01_Regular_Green02_400x400.webm`],
                darkpurple: [lg`Lightning/StaticElectricity_01_Dark_Purple_400x400.webm`],
                darkred: [lg`Lightning/StaticElectricity_01_Dark_Red_400x400.webm`],
                green: [lg`Lightning/StaticElectricity_01_Regular_Green_400x400.webm`],
                orange: [lg`Lightning/StaticElectricity_01_Regular_Orange_400x400.webm`],
                purple: [lg`Lightning/StaticElectricity_01_Regular_Purple_400x400.webm`],
                purpleblue: [lg`Lightning/StaticElectricity_01_Regular_Blue02_400x400.webm`],
                red: [lg`Lightning/StaticElectricity_01_Regular_Red_400x400.webm`],
                yellow: [lg`Lightning/StaticElectricity_01_Regular_Yellow_400x400.webm`]
            },
            '02': {
                blue: [lg`Lightning/StaticElectricity_02_Regular_Blue_400x400.webm`],
                darkgreen: [lg`Lightning/StaticElectricity_02_Regular_Green02_400x400.webm`],
                darkpurple: [lg`Lightning/StaticElectricity_02_Dark_Purple_400x400.webm`],
                darkred: [lg`Lightning/StaticElectricity_02_Dark_Red_400x400.webm`],
                green: [lg`Lightning/StaticElectricity_02_Regular_Green_400x400.webm`],
                orange: [lg`Lightning/StaticElectricity_02_Regular_Orange_400x400.webm`],
                purple: [lg`Lightning/StaticElectricity_02_Regular_Purple_400x400.webm`],
                purpleblue: [lg`Lightning/StaticElectricity_02_Regular_Blue02_400x400.webm`],
                red: [lg`Lightning/StaticElectricity_02_Regular_Red_400x400.webm`],
                yellow: [lg`Lightning/StaticElectricity_02_Regular_Yellow_400x400.webm`]
            },
            '03': {
                blue: [lg`Lightning/StaticElectricity_03_Regular_Blue_400x400.webm`],
                darkgreen: [lg`Lightning/StaticElectricity_03_Regular_Green02_400x400.webm`],
                darkpurple: [lg`Lightning/StaticElectricity_03_Dark_Purple_400x400.webm`],
                darkred: [lg`Lightning/StaticElectricity_03_Dark_Red_400x400.webm`],
                green: [lg`Lightning/StaticElectricity_03_Regular_Green_400x400.webm`],
                orange: [lg`Lightning/StaticElectricity_03_Regular_Orange_400x400.webm`],
                purple: [lg`Lightning/StaticElectricity_03_Regular_Purple_400x400.webm`],
                purpleblue: [lg`Lightning/StaticElectricity_03_Regular_Blue02_400x400.webm`],
                red: [lg`Lightning/StaticElectricity_03_Regular_Red_400x400.webm`],
                yellow: [lg`Lightning/StaticElectricity_03_Regular_Yellow_400x400.webm`]
            }
        },
    },
    liquid: {
        splash: {
            '01': {
                black: [lg`Liquid/LiquidSplash01_Dark_Black_400x400.webm`],
                blue: [lg`Liquid/LiquidSplash01_Regular_Blue_400x400.webm`],
                brightgreen: [lg`Liquid/LiquidSplash01_Bright_Green_400x400.webm`],
                brightblue: [lg`Liquid/LiquidSplash01_Bright_Blue_400x400.webm`],
                green: [lg`Liquid/LiquidSplash01_Regular_Green_400x400.webm`],
                grey: [lg`Liquid/LiquidSplash01_Regular_Grey_400x400.webm`],
                purple: [lg`Liquid/LiquidSplash01_Bright_Purple_400x400.webm`],
                red: [lg`Liquid/LiquidSplash01_Regular_Red_400x400.webm`],
            },
        },
    },
    magicsign: {
        abjuration: {
            '01': {
                blue: [lg`Magic_Signs/Abjuration_01_Blue_Circle_800x800.webm`],
                green: [lg`Magic_Signs/Abjuration_01_Green_Circle_800x800.webm`],
                red: [lg`Magic_Signs/Abjuration_01_Red_Circle_800x800.webm`],
            },
            '02': {
                blue: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/AbjurationCircleLoop_02_Regular_Yellow_800x800.webm`],
            }
        },
        conjuration: {
            '01': {
                yellow: [lg`Magic_Signs/Conjuration_01_Yellow_Circle_800x800.webm`]
            },
            '02': {
                blue: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/ConjurationCircleLoop_02_Regular_Yellow_800x800.webm`],
            }
        },
        divination: {
            '01': {
                lightblue: [lg`Magic_Signs/Divination_01_Light_Blue_Circle_800x800.webm`]
            },
            '02': {
                blue: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/DivinationCircleLoop_02_Regular_Yellow_800x800.webm`],
            }
        },
        enchantment: {
            '02': {
                blue: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/EnchantmentCircleLoop_02_Regular_Yellow_800x800.webm`],
            }
        },
        evocation: {
            '02': {
                blue: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/EvocationCircleLoop_02_Regular_Yellow_800x800.webm`],
            }
        },
        illusion: {
            '02': {
                blue: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/IllusionCircleLoop_02_Regular_Yellow_800x800.webm`],
            }
        },
        necromancy: {
            '02': {
                blue: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/NecromancyCircleLoop_02_Regular_Yellow_800x800.webm`],
            }
        },
        transmutation: {
            '02': {
                blue: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Blue_800x800.webm`],
                green: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Green_800x800.webm`],
                pink: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Pink_800x800.webm`],
                purple: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Purple_800x800.webm`],
                red: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Red_800x800.webm`],
                yellow: [lg`Magic_Signs/TransmutationCircleLoop_02_Regular_Yellow_800x800.webm`],
            }
        },
    },
    marker: {
        bubble: {
            '01': {
                blue: [lg`Marker/MarkerBubble_01_Regular_Blue_400x400.webm`],
                green: [lg`Marker/MarkerBubble_01_Regular_Green_400x400.webm`],
                rainbow: [lg`Marker/MarkerBubble_01_Regular_Rainbow_400x400.webm`],
            }
        },
        circleofstars: {
            '01': {
                blue: [lg`Marker/MarkerCircleOfStars_Regular_Blue_400x400.webm`],
                green: [lg`Marker/MarkerCircleOfStars_Regular_Green_400x400.webm`],
                greenorange: [lg`Marker/MarkerCircleOfStars_Regular_GreenOrange_400x400.webm`],
                orangepurple: [lg`Marker/MarkerCircleOfStars_Regular_OrangePurple_400x400.webm`],
                purplegreen: [lg`Marker/MarkerCircleOfStars_Regular_PurpleGreen_400x400.webm`],
                yellowblue: [lg`Marker/MarkerCircleOfStars_Regular_YellowBlue_400x400.webm`]
            },
        },
        energystrand: {
            '01': {
                blue: [lg`Marker/EnergyStrands_01_Regular_Blue_600x600.webm`],
                blueorange: [lg`Marker/EnergyStrands_01_Regular_BlueOrange_600x600.webm`],
                darkred: [lg`Marker/EnergyStrands_01_Dark_Red_600x600.webm`],
                orange: [lg`Marker/EnergyStrands_01_Regular_Orange_600x600.webm`],
                pinkyellow: [lg`Marker/EnergyStrands_01_Regular_PinkYellow_600x600.webm`],
                purple: [lg`Marker/EnergyStrands_01_Regular_Purple_600x600.webm`],
            }
        },
        music: {
            '01': {
                darkred: [lg`Marker/MusicMarker_01_Dark_Red_400x400.webm`],
                yellowblue: [lg`Marker/MusicMarker_01_Regular_BlueYellow_400x400.webm`],
                greenorange: [lg`Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`],
                pink: [lg`Marker/MusicMarker_01_Regular_Pink_400x400.webm`],
                purplepink: [lg`Marker/MusicMarker_01_Regular_PurplePink_400x400.webm`],
            },
        },
        standard: {
            '01': {
                whiteblue: [lg`Marker/Marker_01_Dark_BlueWhite_400x400.webm`],
                yellowblue: [lg`Marker/Marker_01_Regular_BlueYellow_400x400.webm`],
                greenorange: [lg`Marker/Marker_01_Regular_GreenOrange_400x400.webm`],
                pink: [lg`Marker/Marker_01_Regular_Pink_400x400.webm`],
                purplepink: [lg`Marker/Marker_01_Regular_PurplePink_400x400.webm`],
                red: [lg`Marker/Marker_01_Regular_Red_400x400.webm`],
            },
            '02': {
                whiteblue: [lg`Marker/Marker_02_Dark_BlueWhite_400x400.webm`],
                yellowblue: [lg`Marker/Marker_02_Regular_BlueYellow_400x400.webm`],
                greenorange: [lg`Marker/Marker_02_Regular_GreenOrange_400x400.webm`],
                pink: [lg`Marker/Marker_02_Regular_Pink_400x400.webm`],
                purplepink: [lg`Marker/Marker_02_Regular_PurplePink_400x400.webm`],
                pink: [lg`Marker/Marker_02_Regular_Red_400x400.webm`],
            },
        },
    },
    music: {
        notes: {
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
        }
    },
    particles: {
        dots: {
            '01': {
                blue: [lg`Particles/ParticlesOutward01_01_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesOutward01_01_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesOutward01_01_Regular_Orange_400x400.webm`],
            },
            '02': {
                blue: [lg`Particles/ParticlesOutward01_02_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesOutward01_02_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesOutward01_02_Regular_Orange_400x400.webm`],
            },
            '03': {
                blue: [lg`Particles/ParticlesOutward01_03_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesOutward01_03_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesOutward01_03_Regular_Orange_400x400.webm`],
            },
            '04': {
                blue: [lg`Particles/ParticlesOutward01_04_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesOutward01_04_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesOutward01_04_Regular_Orange_400x400.webm`],
            },
            '05': {
                blue: [lg`Particles/ParticlesOutward01_05_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesOutward01_05_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesOutward01_05_Regular_Orange_400x400.webm`],
            },
        },
        inwarddots: {
            '01': {
                blue: [lg`Particles/ParticlesInward01_01_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesInward01_01_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesInward01_01_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesInward01_01_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesInward01_01_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesInward01_01_Regular_White_400x400.webm`],
            },
            '02': {
                blue: [lg`Particles/ParticlesInward01_02_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesInward01_02_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesInward01_02_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesInward01_02_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesInward01_02_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesInward01_02_Regular_White_400x400.webm`],
            },
            '03': {
                blue: [lg`Particles/ParticlesInward01_03_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesInward01_03_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesInward01_03_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesInward01_03_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesInward01_03_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesInward01_03_Regular_White_400x400.webm`],
            },
            '04': {
                blue: [lg`Particles/ParticlesInward01_04_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesInward01_04_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesInward01_04_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesInward01_04_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesInward01_04_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesInward01_04_Regular_White_400x400.webm`],
            },
            '05': {
                blue: [lg`Particles/ParticlesInward01_05_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesInward01_05_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesInward01_05_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesInward01_05_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesInward01_05_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesInward01_05_Regular_White_400x400.webm`],
            },
        },
        stars: {
            '01': {
                blue: [lg`Particles/ParticlesOutward02_01_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesOutward02_01_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesOutward02_01_Regular_Orange_400x400.webm`],
            },
            '02': {
                blue: [lg`Particles/ParticlesOutward02_02_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesOutward02_02_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesOutward02_02_Regular_Orange_400x400.webm`],
            },
            '03': {
                blue: [lg`Particles/ParticlesOutward02_03_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesOutward02_03_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesOutward02_03_Regular_Orange_400x400.webm`],
            },
            '04': {
                blue: [lg`Particles/ParticlesOutward02_04_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesOutward02_04_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesOutward02_04_Regular_Orange_400x400.webm`],
            },
            '05': {
                blue: [lg`Particles/ParticlesOutward02_05_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesOutward02_05_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesOutward02_05_Regular_Orange_400x400.webm`],
            },
        },
        inwardstars: {
            '01': {
                blue: [lg`Particles/ParticlesInward02_01_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesInward02_01_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesInward02_01_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesInward02_01_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesInward02_01_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesInward02_01_Regular_White_400x400.webm`],
            },
            '02': {
                blue: [lg`Particles/ParticlesInward02_02_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesInward02_02_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesInward02_02_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesInward02_02_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesInward02_02_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesInward02_02_Regular_White_400x400.webm`],
            },
            '03': {
                blue: [lg`Particles/ParticlesInward02_03_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesInward02_03_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesInward02_03_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesInward02_03_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesInward02_03_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesInward02_03_Regular_White_400x400.webm`],
            },
            '04': {
                blue: [lg`Particles/ParticlesInward02_04_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesInward02_04_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesInward02_04_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesInward02_04_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesInward02_04_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesInward02_04_Regular_White_400x400.webm`],
            },
            '05': {
                blue: [lg`Particles/ParticlesInward02_05_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesInward02_05_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesInward02_05_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesInward02_05_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesInward02_05_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesInward02_05_Regular_White_400x400.webm`],
            },
        },
        swirl: {
            '01': {
                blue: [lg`Particles/ParticlesSwirl01_01_Regular_Blue_400x400.webm`],
                greenyellow: [lg`Particles/ParticlesSwirl01_01_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesSwirl01_01_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesSwirl01_01_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesSwirl01_01_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesSwirl01_01_Regular_White_400x400.webm`],
            },
            '02': {
                blue: [lg`Particles/ParticlesSwirl02_01_Regular_Blue_400x400.webm`],
                green: [lg`Particles/ParticlesSwirl02_01_Regular_GreenYellow_400x400.webm`],
                orange: [lg`Particles/ParticlesSwirl02_01_Regular_Orange_400x400.webm`],
                purple: [lg`Particles/ParticlesSwirl02_01_Regular_Purple_400x400.webm`],
                red: [lg`Particles/ParticlesSwirl02_01_Regular_Red_400x400.webm`],
                white: [lg`Particles/ParticlesSwirl02_01_Regular_White_400x400.webm`],
            },
        },
    },
    shieldfx: {
        eldritchweb: {
            '01': {
                darkgreen: [lg`Energy/ShieldEldritchWebAbove01_01_Dark_Green_400x400.webm`],
                darkpurple: [lg`Energy/ShieldEldritchWebAbove01_01_Dark_Purple_400x400.webm`],
            },
            '03': {
                darkgreen: [lg`Energy/ShieldEldritchWebAbove01_03_Dark_Green_400x400.webm`],
                darkpurple: [lg`Energy/ShieldEldritchWebAbove01_03_Dark_Purple_400x400.webm`],
            }
        },
        /*
        shieldeldritchwebbottom: {
            '01': {
                darkgreen: [lg`Energy/ShieldEldritchWebBelow01_02_Dark_Green_400x400.webm`],
                darkpurple: [lg`Energy/ShieldEldritchWebBelow01_02_Dark_Purple_400x400.webm`],
            },
            '03': {
                darkgreen: [lg`Energy/ShieldEldritchWebBelow01_03_Dark_Green_400x400.webm`],
                darkpurple: [lg`Energy/ShieldEldritchWebBelow01_03_Dark_Purple_400x400.webm`],
            }
        },
        */
        fire: {
            '01': {
                darkgreen: [lg`Fire/ShieldFireAbove01_01_Dark_Green_400x400.webm`],
                orange: [lg`Fire/ShieldFireAbove01_01_Regular_Orange_400x400.webm`],
            },
            '03': {
                darkgreen: [lg`Fire/ShieldFireAbove01_03_Dark_Green_400x400.webm`],
                orange: [lg`Fire/ShieldFireAbove01_03_Regular_Orange_400x400.webm`],
            },
        },
        /*
        shieldfirebottom: {
            '01': {
                darkgreen: [lg`Fire/ShieldFireBelow01_02_Dark_Green_400x400.webm`],
                orange: [lg`Fire/ShieldFireBelow01_02_Regular_Orange_400x400.webm`],
            },
            '03': {
                darkgreen: [lg`Fire/ShieldFireBelow01_03_Dark_Green_400x400.webm`],
                orange: [lg`Fire/ShieldFireBelow01_03_Regular_Orange_400x400.webm`],
            },
        },
        */
        earth: {
            '01': {
                darkorange: [lg`Fire/ShieldMoltenEarthAbove01_01_Dark_Orange_400x400.webm`],
                orange: [lg`Fire/ShieldMoltenEarthAbove01_01_Regular_Orange_400x400.webm`],
            },
            '03': {
                darkorange: [lg`Fire/ShieldMoltenEarthAbove01_03_Dark_Orange_400x400.webm`],
                orange: [lg`Fire/ShieldMoltenEarthAbove01_03_Regular_Orange_400x400.webm`],
            },
        },
        /*
        shieldearthbottom: {
            '01': {
                darkorange: [lg`Fire/ShieldMoltenEarthBelow01_02_Dark_Orange_400x400.webm`],
                orange: [lg`Fire/ShieldMoltenEarthBelow01_02_Regular_Orange_400x400.webm`],
            },
            '03': {
                darkorange: [lg`Fire/ShieldMoltenEarthBelow01_03_Dark_Orange_400x400.webm`],
                orange: [lg`Fire/ShieldMoltenEarthBelow01_03_Regular_Orange_400x400.webm`],
            },
        },
        */
        ice: {
            '01': {
                blue: [lg`Ice/ShieldIceAbove01_01_Regular_Blue_400x400.webm`],
                purple: [lg`Ice/ShieldIceAbove01_01_Regular_Purple_400x400.webm`],
            },
            '03': {
                blue: [lg`Ice/ShieldIceAbove01_03_Regular_Blue_400x400.webm`],
                purple: [lg`Ice/ShieldIceAbove01_03_Regular_Purple_400x400.webm`],
            },
        },
        /*
        shieldicebottom: {
            '01': {
                blue: [lg`Ice/ShieldIceBelow01_02_Regular_Blue_400x400.webm`],
                purple: [lg`Ice/ShieldIceBelow01_02_Regular_Purple_400x400.webm`],
            },
            '03': {
                blue: [lg`Ice/ShieldIceBelow01_03_Regular_Blue_400x400.webm`],
                purple: [lg`Ice/ShieldIceBelow01_03_Regular_Purple_400x400.webm`],
            },
        },
        energyfieldbottom: {
            '01': {
                blue: [lg`Energy/EnergyFieldBot_02_Regular_Blue_400x400.webm`],
                green: [lg`Energy/EnergyFieldBot_02_Regular_Green_400x400.webm`],
                purple: [lg`Energy/EnergyFieldBot_02_Regular_Purple_400x400.webm`],
            }
        },
        */
        energyfield: {
            '01': {
                blue: [lg`Energy/EnergyFieldTop_02_Regular_Blue_400x400.webm`],
                green: [lg`Energy/EnergyFieldTop_02_Regular_Green_400x400.webm`],
                purple: [lg`Energy/EnergyFieldTop_02_Regular_Purple_400x400.webm`],
            }
        },
    },
    spell: {
        antilifeshell: {
            '01': {
                blue: [l5`Antilife_Shell/AntilifeShell_01_Blue_NoCircle_400x400.webm`]
            }
        },
        armsofhadar: {
            '01': {
                darkgreen: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Green_500x500.webm`],
                darkpurple: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Purple_500x500.webm`],
                darkred: [l1`Arms_Of_Hadar/ArmsOfHadar_01_Dark_Red_500x500.webm`],
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
        blacktentacles: {
            '01': {
                darkgreen: [l4`Black_Tentacles/BlackTentacles_01_Dark_Green_600x600.webm`],
                darkpurple: [l4`Black_Tentacles/BlackTentacles_01_Dark_Purple_600x600.webm`],
                darkred: [l4`Black_Tentacles/BlackTentacles_01_Dark_Red_600x600.webm`],
            },
        },
        bless: {
            "intro": {
                blue: [l1`Bless/Bless_01_Regular_Blue_Intro_400x400.webm`],
                green: [l1`Bless/Bless_01_Regular_Green_Intro_400x400.webm`],
                purple: [l1`Bless/Bless_01_Regular_Purple_Intro_400x400.webm`],
                yellow: [l1`Bless/Bless_01_Regular_Yellow_Intro_400x400.webm`],
            },
            "loop": {
                blue: [l1`Bless/Bless_01_Regular_Blue_Loop_400x400.webm`],
                green: [l1`Bless/Bless_01_Regular_Green_Loop_400x400.webm`],
                purple: [l1`Bless/Bless_01_Regular_Purple_Loop_400x400.webm`],
                yellow: [l1`Bless/Bless_01_Regular_Yellow_Loop_400x400.webm`],
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
        detectmagic: {
            '01': {
                blue: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Blue_1200x1200.webm`],
                green: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Green_1200x1200.webm`],
                greenorange: [l1`Detect_Magic/DetectMagicCircle_01_Regular_GreenOrange_1200x1200.webm`],
                grey: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Grey_1200x1200.webm`],
                purple: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Purple_1200x1200.webm`],
            }
        },
        divinesmite: {
            'source': {
                yellowblue: [l2`Divine_Smite/DivineSmite_01_Regular_BlueYellow_Caster_400x400.webm`],
                greenyellow: [l2`Divine_Smite/DivineSmite_01_Regular_GreenYellow_Caster_400x400.webm`],
                orange: [l2`Divine_Smite/DivineSmite_01_Regular_Orange_Caster_400x400.webm`],
                purplepink: [l2`Divine_Smite/DivineSmite_01_Regular_PurplePink_Caster_400x400.webm`],
                darkpurple: [l2`Divine_Smite/DivineSmite_01_Dark_Purple_Caster_400x400.webm`],
                yellowwhite: [l2`Divine_Smite/DivineSmite_01_Regular_YellowWhite_Caster_400x400.webm`],
                darkred: [l2`Divine_Smite/DivineSmite_01_Dark_Red_Caster_400x400.webm`],
            },
            'target': {
                yellowblue: [l2`Divine_Smite/DivineSmite_01_Regular_BlueYellow_Target_400x400.webm`],
                greenyellow: [l2`Divine_Smite/DivineSmite_01_Regular_GreenYellow_Target_400x400.webm`],
                orange: [l2`Divine_Smite/DivineSmite_01_Regular_Orange_Target_400x400.webm`],
                purplepink: [l2`Divine_Smite/DivineSmite_01_Regular_PurplePink_Target_400x400.webm`],
                darkpurple: [l2`Divine_Smite/DivineSmite_01_Dark_Purple_Target_400x400.webm`],
                yellowwhite: [l2`Divine_Smite/DivineSmite_01_Regular_YellowWhite_Target_400x400.webm`],
                darkred: [l2`Divine_Smite/DivineSmite_01_Dark_Red_Target_400x400.webm`],
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
        fireball: {
            loop: {
                blue: [l3`Fireball/FireballLoop_01_Blue_800x800.webm`],
                orange: [l3`Fireball/FireballLoop_01_Orange_800x800.webm`],
                purple: [l3`Fireball/FireballLoop_01_Purple_800x800.webm`],
            },
            explode: {
                blue: [l3`Fireball/FireballExplosion_01_Blue_800x800.webm`],
                orange: [l3`Fireball/FireballExplosion_01_Orange_800x800.webm`],
                purple: [l3`Fireball/FireballExplosion_01_Purple_800x800.webm`],
            },
            nodebris: {
                blue: [l3`Fireball/FireballLoopNoDebris_01_Blue_800x800.webm`],
                orange: [l3`Fireball/FireballLoopNoDebris_01_Orange_800x800.webm`],
                purple: [l3`Fireball/FireballLoopNoDebris_01_Purple_800x800.webm`],
            },
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
                red: [lg`Healing/HealingAbility_01_Red_400x400.webm`],
                yellow: [lg`Healing/HealingAbility_01_Yellow_400x400.webm`],
            },
            '02': {
                whiteblue: [lg`Healing/HealingAbility_02_Regular_BlueWhite_Burst_600x600.webm`],
                greenorange: [lg`Healing/HealingAbility_02_Regular_GreenOrange_Burst_600x600.webm`],
                purplepink: [lg`Healing/HealingAbility_02_Regular_PurplePink_Burst_600x600.webm`],
                tealyellow: [lg`Healing/HealingAbility_02_Regular_TealYellow_Burst_600x600.webm`],
            }
        },
        grease: {
            "01": {
                brown: [l1`Grease/Grease_Dark_Brown_600x600.webm`],
                green: [l1`Grease/Grease_Dark_Green_600x600.webm`],
                grey: [l1`Grease/Grease_Dark_Grey_600x600.webm`],
                purple: [l1`Grease/Grease_Dark_Purple_600x600.webm`],
            }
        },
        huntersmark: {
            'eye': {
                blue: [l1`Hunters_Mark/HuntersMark_01_Regular_Blue_Pulse_200x200.webm`],
                green: [l1`Hunters_Mark/HuntersMark_01_Regular_Green_Pulse_200x200.webm`],
                purple: [l1`Hunters_Mark/HuntersMark_01_Regular_Purple_Pulse_200x200.webm`],
                red: [l1`Hunters_Mark/HuntersMark_01_Regular_Red_Pulse_200x200.webm`],
            },
            'eyeloop': {
                blue: [l1`Hunters_Mark/HuntersMark_01_Regular_Blue_Loop_200x200.webm`],
                green: [l1`Hunters_Mark/HuntersMark_01_Regular_Green_Loop_200x200.webm`],
                purple: [l1`Hunters_Mark/HuntersMark_01_Regular_Purple_Loop_200x200.webm`],
                red: [l1`Hunters_Mark/HuntersMark_01_Regular_Red_Loop_200x200.webm`],
            },
            'paw': {
                blue: [l1`Hunters_Mark/HuntersMark_02_Regular_Blue_Pulse_200x200.webm`],
                green: [l1`Hunters_Mark/HuntersMark_02_Regular_Green_Pulse_200x200.webm`],
                purple: [l1`Hunters_Mark/HuntersMark_02_Regular_Purple_Pulse_200x200.webm`],
                red: [l1`Hunters_Mark/HuntersMark_02_Regular_Red_Pulse_200x200.webm`],
            },
            'pawloop': {
                blue: [l1`Hunters_Mark/HuntersMark_02_Regular_Blue_Loop_200x200.webm`],
                green: [l1`Hunters_Mark/HuntersMark_02_Regular_Green_Loop_200x200.webm`],
                purple: [l1`Hunters_Mark/HuntersMark_02_Regular_Purple_Loop_200x200.webm`],
                red: [l1`Hunters_Mark/HuntersMark_02_Regular_Red_Loop_200x200.webm`],
            },
        },
        mistystep: {
            '01': {
                black: [l2`Misty_Step/MistyStep_01_Dark_Black_400x400.webm`],
                blue: [l2`Misty_Step/MistyStep_01_Regular_Blue_400x400.webm`],
                green: [l2`Misty_Step/MistyStep_01_Regular_Green_400x400.webm`],
                orange: [l2`Misty_Step/MistyStep_01_Regular_Orange_400x400.webm`],
                purple: [l2`Misty_Step/MistyStep_01_Regular_Purple_400x400.webm`],
                darkgreen: [l2`Misty_Step/MistyStep_01_Dark_Green_400x400.webm`],
                darkred: [l2`Misty_Step/MistyStep_01_Dark_Red_400x400.webm`],
                grey: [l2`Misty_Step/MistyStep_01_Regular_Grey_400x400.webm`]
            },
            '02': {
                black: [l2`Misty_Step/MistyStep_02_Dark_Black_400x400.webm`],
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
        sacredflame: {
            source: {
                blue: [l0`Sacred_Flame/SacredFlameSource_01_Regular_Blue_400x400.webm`],
                green: [l0`Sacred_Flame/SacredFlameSource_01_Regular_Green_400x400.webm`],
                purple: [l0`Sacred_Flame/SacredFlameSource_01_Regular_Purple_400x400.webm`],
                yellow: [l0`Sacred_Flame/SacredFlameSource_01_Regular_Yellow_400x400.webm`],
                white: [l0`Sacred_Flame/SacredFlameSource_01_Regular_White_400x400.webm`],
            },
            target: {
                blue: [l0`Sacred_Flame/SacredFlameTarget_01_Regular_Blue_400x400.webm`],
                green: [l0`Sacred_Flame/SacredFlameTarget_01_Regular_Green_400x400.webm`],
                purple: [l0`Sacred_Flame/SacredFlameTarget_01_Regular_Purple_400x400.webm`],
                yellow: [l0`Sacred_Flame/SacredFlameTarget_01_Regular_Yellow_400x400.webm`],
                white: [l0`Sacred_Flame/SacredFlameTarget_01_Regular_White_400x400.webm`],
            },
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
        sleep: {
            '01': {
                darkpurple: [l1`Sleep/Cloud01_01_Dark_Purple_400x400.webm`],
                blue: [l1`Sleep/Cloud01_01_Regular_Blue_400x400.webm`],
                green: [l1`Sleep/Cloud01_01_Regular_Green_400x400.webm`],
                orangepurple: [l1`Sleep/Cloud01_01_Dark_OrangePurple_400x400.webm`],
                pink: [l1`Sleep/Cloud01_01_Regular_Pink_400x400.webm`],
                yellow: [l1`Sleep/Cloud01_01_Regular_Yellow_400x400.webm`],
            },
            '02': {
                darkpurple: [l1`Sleep/Cloud01_02_Dark_Purple_400x400.webm`],
                blue: [l1`Sleep/Cloud01_02_Regular_Blue_400x400.webm`],
                green: [l1`Sleep/Cloud01_02_Regular_Green_400x400.webm`],
                orangepurple: [l1`Sleep/Cloud01_02_Dark_OrangePurple_400x400.webm`],
                pink: [l1`Sleep/Cloud01_02_Regular_Pink_400x400.webm`],
                yellow: [l1`Sleep/Cloud01_02_Regular_Yellow_400x400.webm`],
            },
            marker: {
                darkpurple: [l1`Sleep/SleepMarker01_01_Dark_Purple_400x400.webm`],
                blue: [l1`Sleep/SleepMarker01_01_Regular_Blue_400x400.webm`],
                green: [l1`Sleep/SleepMarker01_01_Regular_Green_400x400.webm`],
                orangepurple: [l1`Sleep/SleepMarker01_01_Dark_OrangePurple_400x400.webm`],
                pink: [l1`Sleep/SleepMarker01_01_Regular_Pink_400x400.webm`],
                yellow: [l1`Sleep/SleepMarker01_01_Regular_Yellow_400x400.webm`],
            },
            symbol: {
                darkpurple: [l1`Sleep/SleepSymbol01_01_Dark_Purple_400x400.webm`],
                blue: [l1`Sleep/SleepSymbol01_01_Regular_Blue_400x400.webm`],
                green: [l1`Sleep/SleepSymbol01_01_Regular_Green_400x400.webm`],
                orangepurple: [l1`Sleep/SleepSymbol01_01_Dark_OrangePurple_400x400.webm`],
                pink: [l1`Sleep/SleepSymbol01_01_Regular_Pink_400x400.webm`],
                yellow: [l1`Sleep/SleepSymbol01_01_Regular_Yellow_400x400.webm`],
            },
        },
        sleetstorm: {
            '01': {
                blue: [l3`Sleet_Storm/SleetStorm_01_Blue_800x800.webm`],
                green: [l3`Sleet_Storm/SleetStorm_01_Green_800x800.webm`],
                purple: [l3`Sleet_Storm/SleetStorm_01_Purple_800x800.webm`],
                tealyellow: [l3`Sleet_Storm/SleetStorm_01_TealYellow_800x800.webm`]
            }
        },
        spiritguardians: {
            '01': {
                black: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_Black_600x600.webm`],
                darkblue: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_Blue_600x600.webm`],
                darkpurple: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_Purple_600x600.webm`],
                darkred: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_Red_600x600.webm`],
                darkwhiteblue: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_WhiteBlue_600x600.webm`],
                greenorange: [l3`Spirit_Guardians/SpiritGuardians_01_Light_GreenOrange_600x600.webm`],
                lightblue: [l3`Spirit_Guardians/SpiritGuardians_01_Light_Blue_600x600.webm`],
                lightgreen: [l3`Spirit_Guardians/SpiritGuardians_01_Light_Green_600x600.webm`],
                lightorange: [l3`Spirit_Guardians/SpiritGuardians_01_Light_Orange_600x600.webm`],
                yellowblue: [l3`Spirit_Guardians/SpiritGuardians_01_Light_BlueYellow_600x600.webm`],
                purplepink: [l3`Spirit_Guardians/SpiritGuardians_01_Light_PinkPurple_600x600.webm`],
            },
            '02': {
                black: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Dark_Black_600x600.webm`],
                darkblue: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Dark_Blue_600x600.webm`],
                darkpurple: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Dark_Purple_600x600.webm`],
                darkred: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Dark_Red_600x600.webm`],
                darkwhiteblue: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Dark_WhiteBlue_600x600.webm`],
                greenorange: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Light_GreenOrange_600x600.webm`],
                lightblue: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Light_Blue_600x600.webm`],
                lightgreen: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Light_Green_600x600.webm`],
                lightorange: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Light_Orange_600x600.webm`],
                yellowblue: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Light_BlueYellow_600x600.webm`],
                purplepink: [l3`Spirit_Guardians/SpiritGuardiansParticles_01_Light_PinkPurple_600x600.webm`],
            },
            '03': {
                black: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Dark_Black_600x600.webm`],
                darkblue: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Dark_Blue_600x600.webm`],
                darkpurple: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Dark_Purple_600x600.webm`],
                darkred: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Dark_Red_600x600.webm`],
                darkwhiteblue: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Dark_WhiteBlue_600x600.webm`],
                greenorange: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Light_GreenOrange_600x600.webm`],
                lightblue: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Light_Blue_600x600.webm`],
                lightgreen: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Light_Green_600x600.webm`],
                lightorange: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Light_Orange_600x600.webm`],
                yellowblue: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Light_BlueYellow_600x600.webm`],
                purplepink: [l3`Spirit_Guardians/SpiritGuardiansSpirits_01_Light_PinkPurple_600x600.webm`],
            },
            noring: {
                black: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Dark_Black_600x600.webm`],
                darkblue: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Dark_Blue_600x600.webm`],
                darkpurple: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Dark_Purple_600x600.webm`],
                darkred: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Dark_Red_600x600.webm`],
                darkwhiteblue: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Dark_WhiteBlue_600x600.webm`],
                greenorange: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Light_GreenOrange_600x600.webm`],
                lightblue: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Light_Blue_600x600.webm`],
                lightgreen: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Light_Green_600x600.webm`],
                lightorange: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Light_Orange_600x600.webm`],
                yellowblue: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Light_BlueYellow_600x600.webm`],
                purplepink: [l3`Spirit_Guardians/SpiritGuardiansNoRing_01_Light_PinkPurple_600x600.webm`],
            },
        },
        tollthedead: {
            bell: {
                blue: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Blue_400x400.webm`],
                green: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Green_400x400.webm`],
                purple: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Purple_400x400.webm`],
                red: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Red_400x400.webm`],
                grey: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Grey_400x400.webm`],
            },
            complete: {
                blue: [l0`Toll_The_Dead/TollTheDead_01_Regular_Blue_400x400.webm`],
                green: [l0`Toll_The_Dead/TollTheDead_01_Regular_Green_400x400.webm`],
                purple: [l0`Toll_The_Dead/TollTheDead_01_Regular_Purple_400x400.webm`],
                red: [l0`Toll_The_Dead/TollTheDead_01_Regular_Red_400x400.webm`],
                grey: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Grey_400x400.webm`],
            },
            shockwave: {
                blue: [l0`Toll_The_Dead/TollTheDeadShockwave_01_Regular_Blue_400x400.webm`],
                green: [l0`Toll_The_Dead/TollTheDeadShockwave_01_Regular_Green_400x400.webm`],
                purple: [l0`Toll_The_Dead/TollTheDeadShockwave_01_Regular_Purple_400x400.webm`],
                red: [l0`Toll_The_Dead/TollTheDeadShockwave_01_Regular_Red_400x400.webm`],
                grey: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Grey_400x400.webm`],
            },
            skull: {
                blue: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Blue_400x400.webm`],
                green: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Green_400x400.webm`],
                purple: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Purple_400x400.webm`],
                red: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Red_400x400.webm`],
                grey: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Grey_400x400.webm`],
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
        whirlwind: {
            '01': {
                blue: [l7`Whirlwind/Whirlwind_01_Blue_400x400.webm`],
                bluegrey: [l7`Whirlwind/Whirlwind_01_BlueGrey_01_400x400.webm`],
                green: [l7`Whirlwind/Whirlwind_01_Green_400x400.webm`],
                purple: [l7`Whirlwind/Whirlwind_01_Purple_400x400.webm`],
                red: [l7`Whirlwind/Whirlwind_01_Red_400x400.webm`],
            }
        },
    },
    tokenborder: {
        static: {
            '01': {
                blue: [lg`Token_Border/TokenBorderCircle_01_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_01_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_01_Regular_Purple_400x400.webm`],
            },
            '02': {
                blue: [lg`Token_Border/TokenBorderCircle_02_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_02_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_02_Regular_Purple_400x400.webm`],
            },
            '03': {
                blue: [lg`Token_Border/TokenBorderCircle_03_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_03_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_03_Regular_Purple_400x400.webm`],
            },
            '04': {
                blue: [lg`Token_Border/TokenBorderCircle_04_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_04_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_04_Regular_Purple_400x400.webm`],
            },
            '05': {
                blue: [lg`Token_Border/TokenBorderCircle_05_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_05_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_05_Regular_Purple_400x400.webm`],
            },
            '06': {
                blue: [lg`Token_Border/TokenBorderCircle_06_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_06_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_06_Regular_Purple_400x400.webm`],
            },
            '07': {
                blue: [lg`Token_Border/TokenBorderCircle_07_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_07_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_07_Regular_Purple_400x400.webm`],
            },
            '08': {
                blue: [lg`Token_Border/TokenBorderCircle_08_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_08_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_08_Regular_Purple_400x400.webm`],
            },
            '09': {
                blue: [lg`Token_Border/TokenBorderCircle_09_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_09_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_09_Regular_Purple_400x400.webm`],
            },
            '10': {
                blue: [lg`Token_Border/TokenBorderCircle_10_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_10_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_10_Regular_Purple_400x400.webm`],
            },
            '11': {
                blue: [lg`Token_Border/TokenBorderCircle_11_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_11_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_11_Regular_Purple_400x400.webm`],
            },
            '12': {
                blue: [lg`Token_Border/TokenBorderCircle_12_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_12_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_12_Regular_Purple_400x400.webm`],
            },
            '13': {
                blue: [lg`Token_Border/TokenBorderCircle_13_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircle_13_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircle_13_Regular_Purple_400x400.webm`],
            },
        },
        spinning: {
            '01': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_01_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_01_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_01_Regular_Purple_400x400.webm`],
            },
            '02': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_02_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_02_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_02_Regular_Purple_400x400.webm`],
            },
            '03': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_03_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_03_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_03_Regular_Purple_400x400.webm`],
            },
            '04': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_04_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_04_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_04_Regular_Purple_400x400.webm`],
            },
            '05': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_05_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_05_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_05_Regular_Purple_400x400.webm`],
            },
            '06': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_06_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_06_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_06_Regular_Purple_400x400.webm`],
            },
            '07': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_07_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_07_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_07_Regular_Purple_400x400.webm`],
            },
            '08': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_08_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_08_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_08_Regular_Purple_400x400.webm`],
            },
            '09': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_09_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_09_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_09_Regular_Purple_400x400.webm`],
            },
            '10': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_10_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_10_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_10_Regular_Purple_400x400.webm`],
            },
            '11': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_11_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_11_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_11_Regular_Purple_400x400.webm`],
            },
            '12': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_12_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_12_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_12_Regular_Purple_400x400.webm`],
            },
            '13': {
                blue: [lg`Token_Border/TokenBorderCircleSpin_13_Regular_Blue_400x400.webm`],
                orange: [lg`Token_Border/TokenBorderCircleSpin_13_Regular_Orange_400x400.webm`],
                purple: [lg`Token_Border/TokenBorderCircleSpin_13_Regular_Purple_400x400.webm`],
            },
        },
    },
    trap: {
        fire: {
            single: {
                orange: [lg`Traps/FireTrap02_01_Regular_Orange_1400x1400.webm`],
                green: [lg`Traps/FireTrap02_01_Regular_Green_1400x1400.webm`]
            },
            double: {
                orange: [lg`Traps/FireTrapDual02_01_Regular_Orange_1400x1400.webm`],
                green: [lg`Traps/FireTrapDual02_01_Regular_Green_1400x1400.webm`]
            }
        }
    },
}

/**
 * Return Types:
 * 
 * Weapon
 * 
 */

JB2APATREONDB.return = {
    _template: 'ranged',
    weapon: {
        bone: {
            '01': {
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Bone01_01_Regular_White_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Bone01_01_Regular_White_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Bone01_01_Regular_White_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Bone01_01_Regular_White_Return_90ft_4000x400.webm`]
                }
            }
        },
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
                blue: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_Blue_Return_90ft_4000x400.webm`]
                },
                darkpurple: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Dark_Purple_Return_90ft_4000x400.webm`]
                },
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger01_01_Regular_White_Return_90ft_4000x400.webm`]
                },
                pink: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_90ft_4000x400.webm`]
                },
                red: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_Return_90ft_4000x400.webm`]
                },
            },
            '02': {
                blue: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Blue_Return_90ft_4000x400.webm`]
                },
                darkpurple: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Dark_Purple_Return_90ft_4000x400.webm`]
                },
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_White_Return_90ft_4000x400.webm`]
                },
                pink: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Pink_Return_90ft_4000x400.webm`]
                },
                red: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dagger02_01_Regular_Red_90ft_4000x400.webm`]
                },
            }
        },
        dart: {
            '01': {
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Dart01_01_Regular_White_Return_15ft_1000x400.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Dart01_01_Regular_White_Return_30ft_1600x400.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Dart01_01_Regular_White_Return_60ft_2800x400.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Dart01_01_Regular_White_Return_90ft_4000x400.webm`]
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
        javelin: {
            '01': {
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_Return_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_Return_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_Return_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_Return_90ft_4000x600.webm`],
                }
            }
        },
        spear: {
            '01': {
                white: {
                    '15ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_Return_15ft_1000x600.webm`],
                    '30ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_Return_30ft_1600x600.webm`],
                    '60ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_Return_60ft_2800x600.webm`],
                    '90ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_Return_90ft_4000x600.webm`],
                }
            }
        },
    },
}
}
export {JB2APATREONDB}