export const JB2APATREONDB = {};

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

JB2APATREONDB.firebolt = {
    range: {
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
    }
}

JB2APATREONDB.rayoffrost = {
    range: {
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
    }
}

JB2APATREONDB.eldritchblast = {
    range: {
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
    }
}

JB2APATREONDB.curewounds = {
    static: {
        '01': {
            blue: [l1`Cure_Wounds/CureWounds_01_Blue_400x400.webm`],
            green: [l1`Cure_Wounds/CureWounds_01_Green_400x400.webm`],
            purple: [l1`Cure_Wounds/CureWounds_01_Purple_400x400.webm`],
            red: [l1`Cure_Wounds/CureWounds_01_Red_400x400.webm`]
        }
    }
}

JB2APATREONDB.generichealing = {
    static: {
        '01': {
            blue: [lg`Healing/HealingAbility_01_Blue_400x400.webm`],
            green: [lg`Healing/HealingAbility_01_Green_400x400.webm`],
            purple: [lg`Healing/HealingAbility_01_Purple_400x400.webm`],
            yellow: [lg`Healing/HealingAbility_01_Yellow_400x400.webm`],
        },
        '02': {
            bluewhite: [lg`Healing/HealingAbility_02_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Healing/HealingAbility_02_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Healing/HealingAbility_02_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Healing/HealingAbility_02_Regular_TealYellow_Burst_600x600.webm`],
        }
    }
}

JB2APATREONDB.thunderwave = {
    static: {
        '01': {
            green: {
                'left': [l1`Thunderwave/Thunderwave_01_Bright_Green_BLeft_600x600.webm`],
                'mid': [l1`Thunderwave/Thunderwave_01_Bright_Green_BMid_600x600.webm`],
                'center': [l1`Thunderwave/Thunderwave_01_Bright_Green_Center_600x600.webm`]
            },
            orange: {
                'left': [l1`Thunderwave/Thunderwave_01_Bright_Orange_BLeft_600x600.webm`],
                'mid': [l1`Thunderwave/Thunderwave_01_Bright_Orange_BMid_600x600.webm`],
                'center': [l1`Thunderwave/Thunderwave_01_Bright_Orange_Center_600x600.webm`]
            },
            purple: {
                'left': [l1`Thunderwave/Thunderwave_01_Dark_Purple_BLeft_600x600.webm`],
                'mid': [l1`Thunderwave/Thunderwave_01_Dark_Purple_BMid_600x600.webm`],
                'center': [l1`Thunderwave/Thunderwave_01_Dark_Purple_Center_600x600.webm`],
            },
            red: {
                'left': [l1`Thunderwave/Thunderwave_01_Dark_Red_BLeft_600x600.webm`],
                'mid': [l1`Thunderwave/Thunderwave_01_Dark_Red_BMid_600x600.webm`],
                'center': [l1`Thunderwave/Thunderwave_01_Dark_Red_Center_600x600.webm`],
            },
            blue: {
                'left': [l1`Thunderwave/Thunderwave_01_Bright_Blue_BLeft_600x600.webm`],
                'mid': [l1`Thunderwave/Thunderwave_01_Bright_Blue_BMid_600x600.webm`],
                'center': [l1`Thunderwave/Thunderwave_01_Bright_Blue_Center_600x600.webm`]
            }
        }
    }
}

JB2APATREONDB.witchbolt = {
    range: {
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
    }
}

JB2APATREONDB.scorchingray = {
    range: {
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
    }
}

JB2APATREONDB.disintegrate = {
    range: {
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
    }
}

JB2APATREONDB.antilifeshell = {
    static: {
        '01': {
            blue: [l5`Antilife_Shell/AntilifeShell_01_Blue_NoCircle_400x400.webm`]
        }
    }
}

JB2APATREONDB.dagger = {
    melee: {
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
    range: {
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
        },
    },
    return: {
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
    }
}
JB2APATREONDB.greataxe = {
    melee: {
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
    range: {
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
    }
}

JB2APATREONDB.greatclub = {
    melee: {
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
    }
}

JB2APATREONDB.greatsword = {
    melee: {
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
    range: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_90ft_4000x600.webm`]
            }
        }
    },
    return: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_15ft_1000x600.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_30ft_1600x600.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_60ft_2800x600.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/GreatSword01_01_Regular_White_Return_90ft_4000x600.webm`]
            },
        }
    }
}

JB2APATREONDB.handaxe = {
    melee: {
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
    range: {
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
    }
}

JB2APATREONDB.lasersword = {
    melee: {
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
    range: {
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
    }
}

JB2APATREONDB.mace = {
    melee: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/Mace01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/Mace01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/Mace01_Fire_Regular_Green_800x600.webm`]
        }
    },
    range: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Mace01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Mace01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Mace01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Mace01_01_Regular_White_90ft_4000x400.webm`]
            }
        }
    }
}

JB2APATREONDB.maul = {
    melee: {
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
    }
}


JB2APATREONDB.rapier = {
    melee: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/Rapier01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/Rapier01_Fire_Regular_Green_800x600.webm`]
        }
    }
}

JB2APATREONDB.spear = {
    melee: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/Spear01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/Spear01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/Spear01_Fire_Regular_Green_800x600.webm`]
        }
    },
    range: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Spear01_01_Regular_White_90ft_4000x400.webm`]
            }
        }
    }
}

JB2APATREONDB.sword = {
    melee: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/Sword01_01_Regular_White_800x600.webm`],
            orange: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Orange_800x600.webm`],
            pink: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Pink_800x600.webm`],
            red: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Red_800x600.webm`],
            yellow: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Yellow_800x600.webm`],
            purple: [lg`Weapon_Attacks/Melee/Sword01_Fire_Dark_Purple_800x600.webm`],
            blue: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Blue_800x600.webm`],
            green: [lg`Weapon_Attacks/Melee/Sword01_Fire_Regular_Green_800x600.webm`]
        }
    },
    range: {
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
    }
}

JB2APATREONDB['1hs'] = {
    melee: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgSlashing_01_Regular_Yellow_1Handed_800x600.webm`],
        }
    }
}

JB2APATREONDB['2hs'] = {
    melee: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgSlashing_01_Regular_Yellow_2Handed_800x600.webm`],
        }
    }
}

JB2APATREONDB['1hb'] = {
    melee: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgBludgeoning_01_Regular_Yellow_1Handed_800x600.webm`],
        }
    }
}

JB2APATREONDB['2hb'] = {
    melee: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgBludgeoning_01_Regular_Yellow_2Handed_800x600.webm`],
        }
    }
}

JB2APATREONDB['1hp'] = {
    melee: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgPiercing_01_Regular_Yellow_1Handed_800x600.webm`],
        }
    }
}

JB2APATREONDB['2hp'] = {
    melee: {
        '01': {
            white: [lg`Weapon_Attacks/Melee/DmgPiercing_01_Regular_Yellow_2Handed_800x600.webm`]
        }
    }
}

JB2APATREONDB.lasershot = {
    range: {
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
    }
}

JB2APATREONDB.hammer = {
    range: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_90ft_4000x400.webm`]
            }
        },
    },
    return: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Hammer01_01_Regular_White_Return_90ft_4000x400.webm`]
            }
        }
    }
}

JB2APATREONDB.sling = {
    range: {
        '01': {
            white: {
                '05ft': [lg`Weapon_Attacks/Ranged/SlingShot_01_Regular_White_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/SlingShot_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/SlingShot_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/SlingShot_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/SlingShot_01_Regular_White_90ft_4000x400.webm`]
            }
        }
    }
}

JB2APATREONDB.javelin = {
    range: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Javelin01_01_Regular_White_90ft_4000x400.webm`],
            }
        }
    }
}

JB2APATREONDB.boulder = {
    range: {
        '01': {
            white: {
                '05ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_05ft_600x500.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_15ft_1000x500.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_30ft_1600x500.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_60ft_2800x500.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/BoulderToss01_01_Regular_White_90ft_4000x500.webm`]
            }
        }
    }
}

JB2APATREONDB.siege = {
    range: {
        '01': {
            white: {
                '05ft': [lg`Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_05ft_600x500.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_15ft_1000x500.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_30ft_1600x500.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_60ft_2800x500.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/SiegeBoulder01_01_Regular_White_90ft_4000x500.webm`]
            }
        }
    }
}

JB2APATREONDB.creaturebite = {
    static: {
        '01': {
            red: [lg`Creature/Bite_01_Regular_Red_400x400.webm`],
            blue: [lg`Creature/Bite_01_Regular_Blue_400x400.webm`],
            green: [lg`Creature/Bite_01_Regular_Green_400x400.webm`],
            grey: [lg`Creature/Bite_01_Regular_Grey_400x400.webm`],
            orange: [lg`Creature/Bite_01_Regular_Orange_400x400.webm`],
            purple: [lg`Creature/Bite_01_Regular_Purple_400x400.webm`],
            yellow: [lg`Creature/Bite_01_Regular_Yellow_400x400.webm`]
        }
    }
}

JB2APATREONDB.creatureclaw = {
    static: {
        '01': {
            red: [lg`Creature/Claws_01_Regular_Red_400x400.webm`],
            blue: [lg`Creature/Claws_01_Bright_Blue_400x400.webm`],
            green: [lg`Creature/Claws_01_Bright_Green_400x400.webm`],
            orange: [lg`Creature/Claws_01_Bright_Orange_400x400.webm`],
            purple: [lg`Creature/Claws_01_Bright_Purple_400x400.webm`],
            yellow: [lg`Creature/Claws_01_Bright_Yellow_400x400.webm`],
            darkred: [lg`Creature/Claws_01_Dark_Red_400x400.webm`]
        }
    }
}

JB2APATREONDB.calllightning = {
    static: {
        '01': {
            blue: [l3`Call_Lightning/CallLightning_01_Blue_1000x1000.webm`],
            blueorange: [l3`Call_Lightning/CallLightning_01_BlueOrange_1000x1000.webm`],
            green: [l3`Call_Lightning/CallLightning_01_Green_1000x1000.webm`],
            pinkyellow: [l3`Call_Lightning/CallLightning_01_PinkYellow_1000x1000.webm`],
            purple: [l3`Call_Lightning/CallLightning_01_Purple_1000x1000.webm`],
            red: [l3`Call_Lightning/CallLightning_01_Red_1000x1000.webm`],
            yellow: [l3`Call_Lightning/CallLightning_01_Yellow_1000x1000.webm`]
        }
    }
}

JB2APATREONDB.darkness = {
    static: {
        '01': {
            black: [l2`Darkness/Darkness_01_Black_600x600.webm`],
            green: [l2`Darkness/Darkness_01_Green_600x600.webm`]
        }
    }
}

JB2APATREONDB.sleetstorm = {
    static: {
        '01': {
            blue: [l3`Sleet_Storm/SleetStorm_01_Blue_800x800.webm`],
            green: [l3`Sleet_Storm/SleetStorm_01_Green_800x800.webm`],
            purple: [l3`Sleet_Storm/SleetStorm_01_Purple_800x800.webm`],
            tealyellow: [l3`Sleet_Storm/SleetStorm_01_TealYellow_800x800.webm`]
        }
    }
}

JB2APATREONDB.spiritguardians = {
    static: {
        '01': {
            darkblue: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_Blue_600x600.webm`],
            darkpurple: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_Purple_600x600.webm`],
            darkred: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_Red_600x600.webm`],
            yellowblue: [l3`Spirit_Guardians/SpiritGuardians_01_Light_BlueYellow_600x600.webm`],
            greenorange: [l3`Spirit_Guardians/SpiritGuardians_01_Light_GreenOrange_600x600.webm`],
            pinkpurple: [l3`Spirit_Guardians/SpiritGuardians_01_Light_PinkPurple_600x600.webm`],
            darkwhiteblue: [l3`Spirit_Guardians/SpiritGuardians_01_Dark_WhiteBlue_600x600.webm`]
        }
    }
}

JB2APATREONDB.wallofforce = {
    static: {
        '01': {
            blue: [l5`Wall_Of_Force/WallOfForce_01_Blue_Sphere_400x400.webm`],
            green: [l5`Wall_Of_Force/WallOfForce_01_Green_Sphere_400x400.webm`],
            grey: [l5`Wall_Of_Force/WallOfForce_01_Grey_Sphere_400x400.webm`],
            orange: [l5`Wall_Of_Force/WallOfForce_01_Orange_Sphere_400x400.webm`],
            purple: [l5`Wall_Of_Force/WallOfForce_01_Purple_Sphere_400x400.webm`],
            red: [l5`Wall_Of_Force/WallOfForce_01_Red_Sphere_400x400.webm`],
            yellow: [l5`Wall_Of_Force/WallOfForce_01_Yellow_Sphere_400x400.webm`]
        }
    }
}

JB2APATREONDB.whirlwind = {
    static: {
        '01': {
            blue: [l7`Whirlwind/Whirlwind_01_Blue_400x400.webm`],
            bluegrey: [l7`Whirlwind/Whirlwind_01_BlueGrey_01_400x400.webm`],
            green: [l7`Whirlwind/Whirlwind_01_Green_400x400.webm`],
            purple: [l7`Whirlwind/Whirlwind_01_Purple_400x400.webm`],
            red: [l7`Whirlwind/Whirlwind_01_Red_400x400.webm`],
        }
    }
}

JB2APATREONDB.fogcloud = {
    static: {
        '01': {
            white: [l1`Fog_Cloud/FogCloud_01_White_800x800.webm`]
        }
    }
}

JB2APATREONDB.explosion = {
    static: {
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
            bluewhite: [
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
        },
    }
}

JB2APATREONDB.snowflake = {
    static: {
        '01': {
            bluewhite: [lg`Ice/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Ice/SnowflakeBurst_01_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Ice/SnowflakeBurst_01_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Ice/SnowflakeBurst_01_Regular_TealYellow_Burst_600x600.webm`],
        }
    }
}

JB2APATREONDB.outpulse01 = {
    static: {
        '01': {
            bluewhite: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_TealYellow_Burst_600x600.webm`],
        },
    }
}

JB2APATREONDB.outpulse02 = {
    static: {
        '01': {
            bluewhite: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_TealYellow_Burst_600x600.webm`],
        },
    }
}

JB2APATREONDB.impact = {
    static: {
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
        },
    }
}

JB2APATREONDB.boulderimpact = {
    static: {
        '01': {
            white: [lg`Impact/BoulderImpact_01_Regular_White_500x500.webm`]
        }
    }
}

JB2APATREONDB.shatter = {
    static: {
        '01': {
            purple: [l2`Shatter/Shatter_01_Purple_400x400.webm`],
            red: [l2`Shatter/Shatter_01_Red_400x400.webm`],
            blue: [l2`Shatter/Shatter_01_Blue_400x400.webm`],
            green: [l2`Shatter/Shatter_01_Green_400x400.webm`],
            orange: [l2`Shatter/Shatter_01_Orange_400x400.webm`]
        },
    }
}

JB2APATREONDB.thunderwave = {
    static: {
        '01': {
            green: [l1`Thunderwave/Thunderwave_01_Bright_Green_Center_600x600.webm`],
            orange: [l1`Thunderwave/Thunderwave_01_Bright_Orange_Center_600x600.webm`],
            purple: [l1`Thunderwave/Thunderwave_01_Dark_Purple_Center_600x600.webm`],
            red: [l1`Thunderwave/Thunderwave_01_Dark_Red_Center_600x600.webm`],
            blue: [l1`Thunderwave/Thunderwave_01_Bright_Blue_Center_600x600.webm`],
        },
    }
}

JB2APATREONDB.antilifeshell = {
    static: {
        '01': {
            blue: [l5`Antilife_Shell/AntilifeShell_01_Blue_NoCircle_400x400.webm`]
        }
    }
}

JB2APATREONDB.huntersmark = {
    'eye': {
        'loop': {
            blue: [l1`Hunters_Mark/HuntersMark_01_Regular_Blue_Loop_200x200.webm`],
            green: [l1`Hunters_Mark/HuntersMark_01_Regular_Green_Loop_200x200.webm`],
            purple: [l1`Hunters_Mark/HuntersMark_01_Regular_Purple_Loop_200x200.webm`],
        },
        'pulse': {
            blue: [l1`Hunters_Mark/HuntersMark_01_Regular_Blue_Pulse_200x200.webm`],
            green: [l1`Hunters_Mark/HuntersMark_01_Regular_Green_Pulse_200x200.webm`],
            purple: [l1`Hunters_Mark/HuntersMark_01_Regular_Purple_Pulse_200x200.webm`],
        }
    },
    'paw': {
        'loop': {
            blue: [l1`Hunters_Mark/HuntersMark_02_Regular_Blue_Loop_200x200.webm`],
            green: [l1`Hunters_Mark/HuntersMark_02_Regular_Green_Loop_200x200.webm`],
            purple: [l1`Hunters_Mark/HuntersMark_02_Regular_Purple_Loop_200x200.webm`],
        },
        'pulse': {
            blue: [l1`Hunters_Mark/HuntersMark_02_Regular_Blue_Pulse_200x200.webm`],
            green: [l1`Hunters_Mark/HuntersMark_02_Regular_Green_Pulse_200x200.webm`],
            purple: [l1`Hunters_Mark/HuntersMark_02_Regular_Purple_Pulse_200x200.webm`],
        }
    }

}

JB2APATREONDB.magicmissile = {
    range: {
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
    }
}

JB2APATREONDB.music = {
    static: {
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
}

JB2APATREONDB.mistystep = {
    static: {
        '01': {
            blue: [l2`Misty_Step/MistyStep_01_Regular_Blue_400x400.webm`],
            green: [l2`Misty_Step/MistyStep_01_Regular_Green_400x400.webm`],
            orange: [l2`Misty_Step/MistyStep_01_Regular_Orange_400x400.webm`],
            purple: [l2`Misty_Step/MistyStep_01_Regular_Purple_400x400.webm`],
            darkgreen: [l2`Misty_Step/MistyStep_01_Dark_Green_400x400.webm`],
            darkred: [l2`Misty_Step/MistyStep_01_Dark_Red_400x400.webm`]
        },
        '02': {
            blue: [l2`Misty_Step/MistyStep_02_Regular_Blue_400x400.webm`],
            green: [l2`Misty_Step/MistyStep_02_Regular_Green_400x400.webm`],
            orange: [l2`Misty_Step/MistyStep_02_Regular_Orange_400x400.webm`],
            purple: [l2`Misty_Step/MistyStep_02_Regular_Purple_400x400.webm`],
            darkgreen: [l2`Misty_Step/MistyStep_02_Dark_Green_400x400.webm`],
            darkred: [l2`Misty_Step/MistyStep_02_Dark_Red_400x400.webm`]
        }
    }
}

JB2APATREONDB.unarmedstrike = {
    melee: {
        'magical': {
            darkred: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Red_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Dark_Red_Magical02_800x600.webm`
            ],
            blue: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Magical02_800x600.webm`
            ],
            green: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Magical02_800x600.webm`
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
            blue: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Blue_Physical02_800x600.webm`
            ],
            green: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Physical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Green_Physical02_800x600.webm`
            ],
            yellow: [
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Physical01_800x600.webm`,
                lg`Unarmed_Attacks/Unarmed_Strike/UnarmedStrike_01_Regular_Yellow_Physical02_800x600.webm`
            ]
        }
    }
}

JB2APATREONDB.flurryofblows = {
    melee: {
        'magical': {
            darkred: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Red_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Dark_Red_Magical02_800x600.webm`
            ],
            blue: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Magical02_800x600.webm`
            ],
            green: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Green_Magical01_800x600.webm`,
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Green_Magical02_800x600.webm`
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
            blue: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Blue_Physical01_800x600.webm`,
            ],
            green: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Green_Physical01_800x600.webm`,
            ],
            yellow: [
                lg`Unarmed_Attacks/Flurry_Of_Blows/FlurryOfBlows_01_Regular_Yellow_Physical01_800x600.webm`
            ]
        }
    }
}

JB2APATREONDB.guidingbolt = {
    range: {
        '01': {
            blueyellow: {
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
            blueyellow: {
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
    }
}

JB2APATREONDB.bardicinspiration = {
    static: {
        'inspire': {
            blueyellow: [l1`Bardic_Inspiration/BardicInspiration_01_Regular_BlueYellow_400x400.webm`],
            greenorange: [l1`Bardic_Inspiration/BardicInspiration_01_Regular_GreenOrange_400x400.webm`],
            purplepink: [l1`Bardic_Inspiration/BardicInspiration_01_Regular_PurplePink_400x400.webm`],
            darkred: [l1`Bardic_Inspiration/BardicInspiration_01_Dark_Red_400x400.webm`]
        },
        'marker': {
            blueyellow: [lg`Marker/MusicMarker_01_Regular_BlueYellow_400x400.webm`],
            greenorange: [lg`Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`],
            purplepink: [lg`Marker/MusicMarker_01_Regular_PurplePink_400x400.webm`],
            darkred: [lg`Marker/MusicMarker_01_Dark_Red_400x400.webm`],
        }
    }
}

JB2APATREONDB.ray = {
    static: {
        'acid': {
            blue: [lg`Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Blue_30ft_Line_Burst_1200x200.webm`],
            green: [lg`Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Green_30ft_Line_Burst_1200x200.webm`],
            orange: [lg`Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Orange_30ft_Line_Burst_1200x200.webm`],
            purple: [lg`Template/Line/Breath_Weapon/BreathWeapon_Acid01_Regular_Purple_30ft_Line_Burst_1200x200.webm`],
        },
        'fire': {
            blue: [lg`Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Blue_30ft_Line_Burst_1200x200.webm`],
            green: [lg`Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Green_30ft_Line_Burst_1200x200.webm`],
            orange: [lg`Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Orange_30ft_Line_Burst_1200x200.webm`],
            purple: [lg`Template/Line/Breath_Weapon/BreathWeapon_Fire01_Regular_Purple_30ft_Line_Burst_1200x200.webm`],
        },
        'lightning': {
            blue: [lg`Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Blue_30ft_Line_Burst_1200x200.webm`],
            green: [lg`Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Green_30ft_Line_Burst_1200x200.webm`],
            orange: [lg`Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Orange_30ft_Line_Burst_1200x200.webm`],
            purple: [lg`Template/Line/Breath_Weapon/BreathWeapon_Lightning01_Regular_Purple_30ft_Line_Burst_1200x200.webm`],
        },
        'lightningbolt': {
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
        }
    },
}
JB2APATREONDB.cone = {
    static: {
        'cold': {
            blue: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Blue_30ft_Cone_Burst_600x600.webm`],
            green: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Green_30ft_Cone_Burst_600x600.webm`],
            orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
            purple: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Cold01_Regular_Purple_30ft_Cone_Burst_600x600.webm`],
        },
        'coneofcold': {
            blue: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Blue_600x600.webm`],
            green: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Green_600x600.webm`],
            orange: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Orange_600x600.webm`],
            purple: [l5`Cone_Of_Cold/ConeOfCold_01_Regular_Purple_600x600.webm`],
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
        'burninghands01': {
            blue: [l1`Burning_Hands/BurningHands_01_Regular_Blue_600x600.webm`],
            green: [l1`Burning_Hands/BurningHands_01_Regular_Green_600x600.webm`],
            orange: [l1`Burning_Hands/BurningHands_01_Regular_Orange_600x600.webm`],
            purple: [l1`Burning_Hands/BurningHands_01_Regular_Purple_600x600.webm`],
        },
        'burninghands02': {
            blue: [l1`Burning_Hands/BurningHands_02_Regular_Blue_600x600.webm`],
            green: [l1`Burning_Hands/BurningHands_02_Regular_Green_600x600.webm`],
            orange: [l1`Burning_Hands/BurningHands_02_Regular_Orange_600x600.webm`],
            purple: [l1`Burning_Hands/BurningHands_02_Regular_Purple_600x600.webm`],
        },
        'poison': {
            blue: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Blue_30ft_Cone_Burst_600x600.webm`],
            green: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Green_30ft_Cone_Burst_600x600.webm`],
            orange: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Orange_30ft_Cone_Burst_600x600.webm`],
            purple: [lg`Template/Cone/Breath_Weapon/BreathWeapon_Poison01_Regular_Purple_30ft_Cone_Burst_600x600.webm`],

        }
    },
}
JB2APATREONDB.circle = {
    static: {
        'ex01': {
            blue: [lg`Explosion/Explosion_01_Blue_400x400.webm`],
            green: [lg`Explosion/Explosion_01_Green_400x400.webm`],
            orange: [lg`Explosion/Explosion_01_Orange_400x400.webm`],
            purple: [lg`Explosion/Explosion_01_Purple_400x400.webm`],
            yellow: [lg`Explosion/Explosion_01_Yellow_400x400.webm`]
        },
        'ex02': {
            blue: [lg`Explosion/Explosion_02_Blue_400x400.webm`],
            green: [lg`Explosion/Explosion_02_Green_400x400.webm`],
            orange: [lg`Explosion/Explosion_02_Orange_400x400.webm`],
            purple: [lg`Explosion/Explosion_02_Purple_400x400.webm`],
            yellow: [lg`Explosion/Explosion_02_Yellow_400x400.webm`]
        },
        'ex03': {
            yellowblue: [lg`Explosion/Explosion_03_Regular_BlueYellow_400x400.webm`],
            greenorange: [lg`Explosion/Explosion_03_Regular_GreenOrange_400x400.webm`],
            purplepink: [lg`Explosion/Explosion_03_Regular_PurplePink_400x400.webm`],
            bluewhite: [lg`Explosion/Explosion_03_Dark_BlueWhite_400x400.webm`],
            pink: [lg`Explosion/Explosion_03_Regular_Pink_400x400.webm`],
        },
        'ex04': {
            darkpurple: [lg`Explosion/Explosion_04_Dark_Purple_400x400.webm`],
            darkred: [lg`Explosion/Explosion_04_Dark_Red_400x400.webm`],
            blue: [lg`Explosion/Explosion_04_Regular_Blue_400x400.webm`],
            green: [lg`Explosion/Explosion_04_Regular_Green_400x400.webm`],
            orange: [lg`Explosion/Explosion_04_Regular_Orange_400x400.webm`],
        },
        'snowflake': {
            bluewhite: [lg`Ice/SnowflakeBurst_01_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Ice/SnowflakeBurst_01_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Ice/SnowflakeBurst_01_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Ice/SnowflakeBurst_01_Regular_TealYellow_Burst_600x600.webm`],
        },
        'outpulse01': {
            bluewhite: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_TealYellow_Burst_600x600.webm`],
        },
        'outpulse02': {
            bluewhite: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_BlueWhite_Burst_600x600.webm`],
            greenorange: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_GreenOrange_Burst_600x600.webm`],
            purplepink: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_PurplePink_Burst_600x600.webm`],
            tealyellow: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_TealYellow_Burst_600x600.webm`],
        },
        'shatter': {
            purple: [l2`Shatter/Shatter_01_Purple_400x400.webm`],
            red: [l2`Shatter/Shatter_01_Red_400x400.webm`],
            blue: [l2`Shatter/Shatter_01_Blue_400x400.webm`],
            green: [l2`Shatter/Shatter_01_Green_400x400.webm`],
            orange: [l2`Shatter/Shatter_01_Orange_400x400.webm`]
        },
        'fogcloud': {
            white: [l1`Fog_Cloud/FogCloud_01_White_800x800.webm`],
        },
        'darkness': {
            black: [l2`Darkness/Darkness_01_Black_600x600.webm`],
            green: [l2`Darkness/Darkness_01_Green_600x600.webm`]
        },
        'calllightning': {
            blue: [l3`Call_Lightning/Opacities/CallLightning_01_Blue_75OPA_1000x1000.webm`],
            blueorange: [l3`Call_Lightning/Opacities/CallLightning_01_BlueOrange_75OPA_1000x1000.webm`],
            green: [l3`Call_Lightning/Opacities/CallLightning_01_Green_75OPA_1000x1000.webm`],
            pinkyellow: [l3`Call_Lightning/Opacities/CallLightning_01_PinkYellow_75OPA_1000x1000.webm`],
            purple: [l3`Call_Lightning/Opacities/CallLightning_01_Purple_75OPA_1000x1000.webm`],
            red: [l3`Call_Lightning/Opacities/CallLightning_01_Red_75OPA_1000x1000.webm`],
            yellow: [l3`Call_Lightning/Opacities/CallLightning_01_Yellow_75OPA_1000x1000.webm`]
        },
        'sleetstorm': {
            blue: [l3`Sleet_Storm/SleetStorm_01_Blue_800x800.webm`],
            green: [l3`Sleet_Storm/SleetStorm_01_Green_800x800.webm`],
            purple: [l3`Sleet_Storm/SleetStorm_01_Purple_800x800.webm`],
            tealyellow: [l3`Sleet_Storm/SleetStorm_01_TealYellow_800x800.webm`]
        },
        'cloudofdaggers': {
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
            'kunai': {
                darkpurple: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Dark_Purple_400x400.webm`],
                darkred: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Dark_Red_400x400.webm`],
                blue: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Blue_400x400.webm`],
                green: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Green_400x400.webm`],
                orange: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Orange_400x400.webm`],
                purple: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Purple_400x400.webm`],
                red: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Red_400x400.webm`],
                yellow: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Yellow_400x400.webm`]
            }
        }
    },
}

JB2APATREONDB.rect = {
    static: {
        'entangle': {
            brown: [l1`Entangle/Entangle_01_Brown_400x400.webm`],
            green: [l1`Entangle/Entangle_01_Green_400x400.webm`],
            yellow: [l1`Entangle/Entangle_01_Yellow_400x400.webm`],
            darkpurple: [l1`Entangle/Entangle_01_Dark_Purple_400x400.webm`],
            palegreen: [l1`Entangle/Entangle_01_Regular_Green02_400x400.webm`]
        }
    }
}

JB2APATREONDB.divinesmite = {
    static: {
        'caster': {
            blueyellow: [l2`Divine_Smite/DivineSmite_01_Regular_BlueYellow_Caster_400x400.webm`],
            greenyellow: [l2`Divine_Smite/DivineSmite_01_Regular_GreenYellow_Caster_400x400.webm`],
            purplepink: [l2`Divine_Smite/DivineSmite_01_Regular_PurplePink_Caster_400x400.webm`],
            darkpurple: [l2`Divine_Smite/DivineSmite_01_Dark_Purple_Caster_400x400.webm`],
            yellowwhite: [l2`Divine_Smite/DivineSmite_01_Regular_YellowWhite_Caster_400x400.webm`],
            darkred: [l2`Divine_Smite/DivineSmite_01_Regular_YellowWhite_Caster_400x400.webm`],
        },
        'target': {
            blueyellow: [l2`Divine_Smite/DivineSmite_01_Regular_BlueYellow_Target_400x400.webm`],
            greenyellow: [l2`Divine_Smite/DivineSmite_01_Regular_GreenYellow_Target_400x400.webm`],
            purplepink: [l2`Divine_Smite/DivineSmite_01_Regular_PurplePink_Target_400x400.webm`],
            darkpurple: [l2`Divine_Smite/DivineSmite_01_Dark_Purple_Target_400x400.webm`],
            yellowwhite: [l2`Divine_Smite/DivineSmite_01_Regular_YellowWhite_Target_400x400.webm`],
            darkred: [l2`Divine_Smite/DivineSmite_01_Regular_YellowWhite_Target_400x400.webm`],
        }
    }
}

JB2APATREONDB.sneakattack = {
    static: {
        '01': {
            darkgreen: [l1`Sneak_Attack/Sneak_Attack_Dark_Green_300x300.webm`],
            darkpurple: [l1`Sneak_Attack/Sneak_Attack_Dark_Purple_300x300.webm`],
            darkred: [l1`Sneak_Attack/Sneak_Attack_Dark_Red_300x300.webm`],
            blue: [l1`Sneak_Attack/Sneak_Attack_Regular_Blue_300x300.webm`],
            orange: [l1`Sneak_Attack/Sneak_Attack_Regular_Orange_300x300.webm`],
            pink: [l1`Sneak_Attack/Sneak_Attack_Regular_Pink_300x300.webm`],
            yellow: [l1`Sneak_Attack/Sneak_Attack_Regular_Yellow_300x300.webm`]
        }
    }
}

JB2APATREONDB.arrow = {
    range: {
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
            white: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow02_01_Regular_White_Physical_90ft_4000x400.webm`]
            },
        },
        'regular': {
            green: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Glowing_Green_90ft_4000x400.webm`]
            },
            regular: {
                '05ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_05ft_600x400.webm`],
                '15ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Arrow01_01_Regular_White_90ft_4000x400.webm`]
            },
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
        },
    }
}

JB2APATREONDB.bolt = {
    range: {
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
        },
    }
}

JB2APATREONDB.bullet = {
    range: {
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
        },
    }
}

JB2APATREONDB.snipe = {
    range: {
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
    }
}

JB2APATREONDB.dizzystars = {
    static: {
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
    }
}

JB2APATREONDB.icespikes = {
    static: {
        '01': {
            blue: [lg`Ice/IceSpikesRadialBurst_01_Regular_Blue_1000x1000.webm`],
            red: [lg`Ice/IceSpikesRadialBurst_01_Regular_Red_1000x1000.webm`],
            white: [lg`Ice/IceSpikesRadialBurst_01_Regular_White_1000x1000.webm`]
        }
    }
}

JB2APATREONDB.magicSign = {
    static: {
        '01': {
            blue: [lg`Magic_Signs/Abjuration_01_Blue_Circle_800x800.webm`],
            yellow: [lg`Magic_Signs/Conjuration_01_Yellow_Circle_800x800.webm`],
            lightblue: [lg`Magic_Signs/Divination_01_Light_Blue_Circle_800x800.webm`],
        }
    }
}

JB2APATREONDB.marker = {
    static: {
        marker01: {
            bluewhite: [lg`Marker/Marker_01_Dark_BlueWhite_400x400.webm`],
            blueyellow: [lg`Marker/Marker_01_Regular_BlueYellow_400x400.webm`],
            greenorange: [lg`Marker/Marker_01_Regular_GreenOrange_400x400.webm`],
            pink: [lg`Marker/Marker_01_Regular_Pink_400x400.webm`],
            purplepink: [lg`Marker/Marker_01_Regular_PurplePink_400x400.webm`],
        },
        marker02: {
            bluewhite: [lg`Marker/Marker_02_Dark_BlueWhite_400x400.webm`],
            blueyellow: [lg`Marker/Marker_02_Regular_BlueYellow_400x400.webm`],
            greenorange: [lg`Marker/Marker_02_Regular_GreenOrange_400x400.webm`],
            pink: [lg`Marker/Marker_02_Regular_Pink_400x400.webm`],
            purplepink: [lg`Marker/Marker_02_Regular_PurplePink_400x400.webm`],
        },
        musicMarker: {
            darkred: [lg`Marker/MusicMarker_01_Dark_Red_400x400.webm`],
            blueyellow: [lg`Marker/MusicMarker_01_Regular_BlueYellow_400x400.webm`],
            greenorange: [lg`Marker/MusicMarker_01_Regular_GreenOrange_400x400.webm`],
            purplepink: [lg`Marker/MusicMarker_01_Regular_PurplePink_400x400.webm`],
        }
    }
}

JB2APATREONDB.shield = {
    static: {
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
    }
}

JB2APATREONDB.cloudofdaggers = {
    static: {
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
        'kunai': {
            darkpurple: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Dark_Purple_400x400.webm`],
            darkred: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Dark_Red_400x400.webm`],
            blue: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Blue_400x400.webm`],
            green: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Green_400x400.webm`],
            orange: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Orange_400x400.webm`],
            purple: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Purple_400x400.webm`],
            red: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Red_400x400.webm`],
            yellow: [l2`Cloud_Of_Daggers/CloudOfDaggers_Kunai_01_Light_Yellow_400x400.webm`]
        }
    }
}

JB2APATREONDB.chakram = {
    range: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_90ft_4000x400.webm`],
            }
        }
    },
    return: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Chakram01_01_Regular_White_Return_90ft_4000x400.webm`]
            }
        }
    },
    boomerang: {
        '01': {
            white: {
                '15ft': [lg`Weapon_Attacks/Ranged/Chakram01_02_Regular_White_15ft_1000x400.webm`],
                '30ft': [lg`Weapon_Attacks/Ranged/Chakram01_02_Regular_White_30ft_1600x400.webm`],
                '60ft': [lg`Weapon_Attacks/Ranged/Chakram01_02_Regular_White_60ft_2800x400.webm`],
                '90ft': [lg`Weapon_Attacks/Ranged/Chakram01_02_Regular_White_90ft_4000x400.webm`]
            }
        }
    }
}

JB2APATREONDB.bless = {
    static: {
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
    }
}

JB2APATREONDB.chainlightning = {
    range: {
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
        secondary: {
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
    }
}

JB2APATREONDB.lightningball = {
    static: {
        '01': {
            dark_purple: [lg`Lightning/LightningBall_01_Dark_Purple_400x400.webm`],
            blue: [l6`Lightning/LightningBall_01_Regular_Blue_400x400.webm`],
            green: [l6`Lightning/LightningBall_01_Regular_Green_400x400.webm`],
            purple: [l6`Lightning/LightningBall_01_Regular_Purple_400x400.webm`]
        }
    }
}

JB2APATREONDB.staticelectricity = {
    static: {
        '01': {
            dark_purple: [lg`Lightning/StaticElectricity_01_Dark_Purple_400x400.webm`],
            blue: [lg`Lightning/StaticElectricity_01_Regular_Blue_400x400.webm`],
            green: [lg`Lightning/StaticElectricity_01_Regular_Green_400x400.webm`],
            purple: [lg`Lightning/StaticElectricity_01_Regular_Purple_400x400.webm`]
        },
        '02': {
            dark_purple: [lg`Lightning/StaticElectricity_02_Dark_Purple_400x400.webm`],
            blue: [lg`Lightning/StaticElectricity_02_Regular_Blue_400x400.webm`],
            green: [lg`Lightning/StaticElectricity_02_Regular_Green_400x400.webm`],
            purple: [lg`Lightning/StaticElectricity_02_Regular_Purple_400x400.webm`]
        }
    }
}