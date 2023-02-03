export async function db053(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const l0 = prefix('Cantrip')
    const l1 = prefix('1st_Level')
    const l2 = prefix('2nd_Level')
    const lg = prefix('Generic')

    /**
     * Structure for the internal Select menus work as:
     * Type => Animation => Variant => Color
     * Example: Range Menu - Weapon => Arrow => Regular => Regular
     * 
     * Entries in each section type should have a localized Variable matching in the lang/en.json file under
     * the proper category.
     * Type relates to the MenuTypes section
     * Animation to animations
     * Variant to variants
     * Color to colors
     * 
     */
    const patreonDB053 = {
        range: {
            _free: [],
            spell: {
                guidingbolt: {
                    '01': {
                        yellow: {
                            '05ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Yellow_05ft_600x400.webm`],
                            '15ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Yellow_15ft_1000x400.webm`],
                            '30ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Yellow_30ft_1600x400.webm`],
                            '60ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Yellow_60ft_2800x400.webm`],
                            '90ft': [l1`Guiding_Bolt/GuidingBolt_01_Regular_Yellow_90ft_4000x400.webm`]
                        },
                    },
                    '02': {
                        yellow: {
                            '05ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Yellow_05ft_600x400.webm`],
                            '15ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Yellow_15ft_1000x400.webm`],
                            '30ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Yellow_30ft_1600x400.webm`],
                            '60ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Yellow_60ft_2800x400.webm`],
                            '90ft': [l1`Guiding_Bolt/GuidingBolt_02_Regular_Yellow_90ft_4000x400.webm`]
                        },
                    },
                },
            },
            generic: {
                energybeam: {
                    '01': {
                        yellow: {
                            '15ft': [lg`Energy/EnergyBeam_01_Regular_Yellow_15ft_1000x400.webm`],
                            '30ft': [lg`Energy/EnergyBeam_01_Regular_Yellow_30ft_1600x400.webm`],
                            '60ft': [lg`Energy/EnergyBeam_01_Regular_Yellow_60ft_2800x400.webm`],
                            '90ft': [lg`Energy/EnergyBeam_01_Regular_Yellow_90ft_4000x400.webm`],
                        }    
                    },
                    '02': {
                        yellow: {
                            '05ft': [lg`Energy/EnergyBeam_02_Regular_Yellow_05ft_600x400.webm`],
                            '15ft': [lg`Energy/EnergyBeam_02_Regular_Yellow_15ft_1000x400.webm`],
                            '30ft': [lg`Energy/EnergyBeam_02_Regular_Yellow_30ft_1600x400.webm`],
                            '60ft': [lg`Energy/EnergyBeam_02_Regular_Yellow_60ft_2800x400.webm`],
                            '90ft': [lg`Energy/EnergyBeam_02_Regular_Yellow_90ft_4000x400.webm`],
                        }    
                    },
                    '03': {
                        yellow: {
                            '05ft': [lg`Energy/EnergyBeam_03_Regular_Yellow_05ft_600x400.webm`],
                            '15ft': [lg`Energy/EnergyBeam_03_Regular_Yellow_15ft_1000x400.webm`],
                            '30ft': [lg`Energy/EnergyBeam_03_Regular_Yellow_30ft_1600x400.webm`],
                            '60ft': [lg`Energy/EnergyBeam_03_Regular_Yellow_60ft_2800x400.webm`],
                            '90ft': [lg`Energy/EnergyBeam_03_Regular_Yellow_90ft_4000x400.webm`],
                        }    
                    },
                    reverse: {
                        yellow: {
                            '15ft': [lg`Energy/EnergyBeamReverse_01_Regular_Yellow_15ft_1000x400.webm`],
                            '30ft': [lg`Energy/EnergyBeamReverse_01_Regular_Yellow_30ft_1600x400.webm`],
                            '60ft': [lg`Energy/EnergyBeamReverse_01_Regular_Yellow_60ft_2800x400.webm`],
                            '90ft': [lg`Energy/EnergyBeamReverse_01_Regular_Yellow_90ft_4000x400.webm`],
                        }    
                    },
                },
                energystrand: {
                    '02': {
                        yellow: {
                            '05ft': [lg`Energy/EnergyStrand_Multiple02_Regular_Yellow_05ft_600x400.webm`],
                            '15ft': [lg`Energy/EnergyStrand_Multiple02_Regular_Yellow_15ft_1000x400.webm`],
                            '30ft': [lg`Energy/EnergyStrand_Multiple02_Regular_Yellow_30ft_1600x400.webm`],
                            '60ft': [lg`Energy/EnergyStrand_Multiple02_Regular_Yellow_60ft_2800x400.webm`],
                            '90ft': [lg`Energy/EnergyStrand_Multiple02_Regular_Yellow_90ft_4000x400.webm`]
                        }
                    },
                },
            },
        },
        templatefx: {
            _free: [],
            circle: {
                detectmagic: {
                    '01': {
                        yellow: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Yellow_1200x1200.webm`],
                    }
                },    
                moonbeam: {
                    loop: {
                        yellow: [l2`Moonbeam/Moonbeam_01_Regular_Yellow_400x400.webm`],
                    },
                    intro: {
                        yellow: [l2`Moonbeam/MoonbeamIntro_01_Regular_Yellow_400x400.webm`],
                    },
                    outro: {
                        yellow: [l2`Moonbeam/MoonbeamOutro_01_Regular_Yellow_400x400.webm`],
                    },    
                    complete: {
                        _markers: {
                            loop: { start: 3708, end: 8708 }
                        },    
                        blue: [l2`Moonbeam/MoonbeamComplete_01_Regular_Blue_400x400.webm`],
                        green: [l2`Moonbeam/MoonbeamComplete_01_Regular_Green_400x400.webm`],
                        rainbow: [l2`Moonbeam/MoonbeamComplete_01_Regular_Rainbow_400x400.webm`],
                        yellow: [l2`Moonbeam/MoonbeamComplete_01_Regular_Yellow_400x400.webm`],
                    }
                },
                outpulse: {
                    '01': {
                        yellowwhite: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_YellowWhite_Burst_600x600.webm`],
                    },
                    '02': {
                        yellowwhite: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_YellowWhite_Burst_600x600.webm`],
                    }
                },
            },
            cone: {
                detectmagic: {
                    '01': {
                        blue: [l1`Detect_Magic/DetectMagicCone_01_Regular_Blue_15ft_500x500.webm`],
                        green: [l1`Detect_Magic/DetectMagicCone_01_Regular_Green_15ft_500x500.webm`],
                        greenorange: [l1`Detect_Magic/DetectMagicCone_01_Regular_GreenOrange_15ft_500x500.webm`],
                        grey: [l1`Detect_Magic/DetectMagicCone_01_Regular_Grey_15ft_500x500.webm`],
                        purple: [l1`Detect_Magic/DetectMagicCone_01_Regular_Purple_15ft_500x500.webm`],    
                        yellow: [l1`Detect_Magic/DetectMagicCone_01_Regular_Yellow_15ft_500x500.webm`],
                    }
                },    
            },
        },
        static: {
            _free:['marker', 'nature', 'sideImpact', 'smoke'],
            energy: {
                energyfield: {
                    '01': {
                        yellow: [lg`Energy/EnergyField_01_Regular_Yellow_600x600.webm`],
                    }
                },
                sparkles: {
                    '01': {
                        yellow: [lg`Energy/SwirlingSparkles_01_Regular_Yellow_400x400.webm`],
                    },
                },    
            },
            generic: {
                outpulse: {
                    '01': {
                        yellowwhite: [lg`Template/Circle/OutPulse/OutPulse_01_Regular_YellowWhite_Burst_600x600.webm`],
                    },
                    '02': {
                        yellowwhite: [lg`Template/Circle/OutPulse/OutPulse_02_Regular_YellowWhite_Burst_600x600.webm`],
                    }
                },
                smoke: {
                    '01': {
                        green: [lg`Smoke/SmokePuff01_01_Regular_Green_400x400.webm`],
                    },
                    '02': {
                        green: [lg`Smoke/SmokePuff01_02_Regular_Green_400x400.webm`],
                    },
                    '03': {
                        green: [lg`Smoke/SmokePuff01_03_Regular_Green_400x400.webm`],
                    },
                },    
            },
            ice: {
                icespikes: {
                    '01': {
                        grey: [lg`Ice/IceSpikesRadialBurst_01_Regular_Grey_1000x1000.webm`],
                        yellow: [lg`Ice/IceSpikesRadialBurst_01_Regular_Yellow_1000x1000.webm`],
                    }
                },
                snowflake: {
                    '01': {
                        yellowwhite: [lg`Ice/SnowflakeBurst_01_Regular_YellowWhite_Burst_600x600.webm`],
                    }
                },    
            },
            marker: {
                _free:['bubble', 'roundshield', 'smokering'],
                bubble: {
                    _free:['complete'],
                    '01': {
                        yellow: [lg`Marker/MarkerBubble_01_Regular_Yellow_400x400.webm`],
                    },    
                    complete: {
                        _markers: {
                            loop: { start: 2625, end: 7625 }
                        },
                        _free:['blue', "_markers"],
                        blue: [lg`Marker/MarkerBubbleComplete_01_Regular_Blue_400x400.webm`],
                        green: [lg`Marker/MarkerBubbleComplete_01_Regular_Green_400x400.webm`],
                        rainbow: [lg`Marker/MarkerBubbleComplete_01_Regular_Rainbow_400x400.webm`],
                        yellow: [lg`Marker/MarkerBubbleComplete_01_Regular_Yellow_400x400.webm`],
                    }
                },
                light: {
                    intro: {
                        blue: [lg`Marker/MarkerLightIntro_01_Regular_Blue_400x400.webm`],
                        green: [lg`Marker/MarkerLightIntro_01_Regular_Green_400x400.webm`],
                        yellow: [lg`Marker/MarkerLightIntro_01_Regular_Yellow_400x400.webm`],
                    },
                    outro: {
                        blue: [lg`Marker/MarkerLightOutro_01_Regular_Blue_400x400.webm`],
                        green: [lg`Marker/MarkerLightOutro_01_Regular_Green_400x400.webm`],
                        yellow: [lg`Marker/MarkerLightOutro_01_Regular_Yellow_400x400.webm`],
                    },
                    complete: {
                        _markers: {
                            loop: { start: 3750, end: 8750 }
                        },    
                        blue: [lg`Marker/MarkerLightComplete_01_Regular_Blue_400x400.webm`],
                        green: [lg`Marker/MarkerLightComplete_01_Regular_Green_400x400.webm`],
                        yellow: [lg`Marker/MarkerLightComplete_01_Regular_Yellow_400x400.webm`],
                    },
                },
                roundshield: {
                    _free:['loop', 'complete'],
                    loop: {
                        _free:['orange'],
                        darkred: [lg`Marker/MarkerShieldRampartLoop01_01_Dark_Red_400x400.webm`],
                        orange: [lg`Marker/MarkerShieldRampartLoop01_01_Regular_Orange_400x400.webm`],
                    },
                    complete: {
                        _markers: {
                            loop: { start: 1916, end: 6208 }
                        },
                        _free:['orange', "_markers"],
                        darkred: [lg`Marker/MarkerShieldRampart01_01_Dark_Red_400x400.webm`],
                        orange: [lg`Marker/MarkerShieldRampart01_01_Regular_Orange_400x400.webm`],
                    },
                },
                boneshield: {
                    loop: {
                        green: [lg`Marker/MarkerShieldRampartLoop02_01_Regular_Green_400x400.webm`],
                        purple: [lg`Marker/MarkerShieldRampartLoop02_01_Regular_Purple_400x400.webm`],
                    },
                    complete: {
                        _markers: {
                            loop: { start: 1916, end: 6208 }
                        },    
                        green: [lg`Marker/MarkerShieldRampart02_01_Regular_Green_400x400.webm`],
                        purple: [lg`Marker/MarkerShieldRampart02_01_Regular_Purple_400x400.webm`],
                    },
                },
                towershield: {
                    loop: {
                        blue: [lg`Marker/MarkerShieldRampartLoop03_01_Regular_Blue_400x400.webm`],
                        yellow: [lg`Marker/MarkerShieldRampartLoop03_01_Regular_Yellow_400x400.webm`],
                    },
                    complete: {
                        _markers: {
                            loop: { start: 1916, end: 6208 }
                        },    
                        blue: [lg`Marker/MarkerShieldRampart03_01_Regular_Blue_400x400.webm`],
                        yellow: [lg`Marker/MarkerShieldRampart03_01_Regular_Yellow_400x400.webm`],
                    },
                },
                smokering: {
                    _free:['loop'],
                    loop: {
                        _free:['purpleblue'],
                        darkred: [lg`Marker/MarkerSmokeRingLoop01_Dark_Red_400x400.webm`],
                        purpleblue: [lg`Marker/MarkerSmokeRingLoop01_Regular_BluePurple_400x400.webm`],
                        purple: [lg`Marker/MarkerSmokeRingLoop01_Regular_Purple_400x400.webm`],
                        yellow: [lg`Marker/MarkerSmokeRingLoop01_Regular_Yellow_400x400.webm`],
                    },
                },
                standard: {
                    '01': {
                        yellow: [lg`Marker/Marker_01_Regular_Yellow_400x400.webm`],
                    },
                    '02': {
                        yellow: [lg`Marker/Marker_02_Regular_Yellow_400x400.webm`],
                    },
                },    
            },
            nature: {
                _free:['feathers'],
                feathers: {
                    _free:['outburst'],
                    outburst: {
                        _free:['textured'],
                        blue: [
                            lg`Nature/SwirlingFeathersOutburst01_01_Regular_Blue_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst02_01_Regular_Blue_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst03_01_Regular_Blue_400x400.webm`
                        ],
                        orange: [
                            lg`Nature/SwirlingFeathersOutburst01_01_Regular_Orange_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst02_01_Regular_Orange_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst03_01_Regular_Orange_400x400.webm`
                        ],
                        purple: [
                            lg`Nature/SwirlingFeathersOutburst01_01_Regular_Purple_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst02_01_Regular_Purple_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst03_01_Regular_Purple_400x400.webm`
                        ],
                        red: [
                            lg`Nature/SwirlingFeathersOutburst01_01_Regular_Red_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst02_01_Regular_Red_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst03_01_Regular_Red_400x400.webm`
                        ],
                        textured: [
                            lg`Nature/SwirlingFeathersOutburst01_01_Regular_Textured_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst02_01_Regular_Textured_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst03_01_Regular_Textured_400x400.webm`
                        ],
                    },
                },
            },
            shieldfx: {
                energyfield: {
                    '01': {
                        yellow: [lg`Energy/EnergyFieldTop_02_Regular_Yellow_400x400.webm`],
                    }
                },    
            },
            sideImpact: {
                _free:['smoke'],
                smoke: {
                    _free:['01', '02'],
                    "01": {
                        _free:['grey'],
                        black: [
                            lg`Smoke/SmokePuffSide01_01_Dark_Black_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_02_Dark_Black_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_03_Dark_Black_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_04_Dark_Black_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_05_Dark_Black_400x400.webm`,
                        ],
                        blue: [
                            lg`Smoke/SmokePuffSide01_01_Regular_Blue_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_02_Regular_Blue_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_03_Regular_Blue_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_04_Regular_Blue_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_05_Regular_Blue_400x400.webm`,
                        ],
                        darkgreen: [
                            lg`Smoke/SmokePuffSide01_01_Dark_Green_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_02_Dark_Green_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_03_Dark_Green_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_04_Dark_Green_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_05_Dark_Green_400x400.webm`,
                        ],
                        darkpurple: [
                            lg`Smoke/SmokePuffSide01_01_Dark_Purple_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_02_Dark_Purple_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_03_Dark_Purple_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_04_Dark_Purple_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_05_Dark_Purple_400x400.webm`,
                        ],
                        green: [
                            lg`Smoke/SmokePuffSide01_01_Regular_Green_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_02_Regular_Green_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_03_Regular_Green_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_04_Regular_Green_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_05_Regular_Green_400x400.webm`,
                        ],
                        grey: [
                            lg`Smoke/SmokePuffSide01_01_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_02_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_03_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_04_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_05_Regular_Grey_400x400.webm`,
                        ]
                    },
                    '02': {
                        _free:['white'],
                        black: [
                            lg`Smoke/SmokePuffSide02_01_Dark_Black_400x400.webm`,
                            lg`Smoke/SmokePuffSide02_02_Dark_Black_400x400.webm`,
                            lg`Smoke/SmokePuffSide02_03_Dark_Black_400x400.webm`,
                        ],
                        white: [
                            lg`Smoke/SmokePuffSide02_01_Regular_White_400x400.webm`,
                            lg`Smoke/SmokePuffSide02_02_Regular_White_400x400.webm`,
                            lg`Smoke/SmokePuffSide02_03_Regular_White_400x400.webm`,
                        ]
                    }
                }
            },
            smoke: {
                _free:['plume'],
                plume: {
                    _free:['complete'],
                    complete: {
                        _markers: {
                            loop: { start: 2000, end: 4000 }
                            },
                        _free:['grey', '_markers'],
                        blue: [
                            lg`Smoke/SmokePlumes01_01_Regular_Blue_400x400.webm`,
                            lg`Smoke/SmokePlumes01_02_Regular_Blue_400x400.webm`,
                            lg`Smoke/SmokePlumes01_03_Regular_Blue_400x400.webm`,
                        ],
                        darkgreen: [
                            lg`Smoke/SmokePlumes01_01_Dark_Green_400x400.webm`,
                            lg`Smoke/SmokePlumes01_02_Dark_Green_400x400.webm`,
                            lg`Smoke/SmokePlumes01_03_Dark_Green_400x400.webm`
                        ],
                        darkred: [
                            lg`Smoke/SmokePlumes01_01_Dark_Red_400x400.webm`,
                            lg`Smoke/SmokePlumes01_02_Dark_Red_400x400.webm`,
                            lg`Smoke/SmokePlumes01_03_Dark_Red_400x400.webm`
                        ],
                        grey: [
                            lg`Smoke/SmokePlumes01_01_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePlumes01_02_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePlumes01_03_Regular_Grey_400x400.webm`
                        ],
                        purple: [
                            lg`Smoke/SmokePlumes01_01_Regular_Purple_400x400.webm`,
                            lg`Smoke/SmokePlumes01_02_Regular_Purple_400x400.webm`,
                            lg`Smoke/SmokePlumes01_03_Regular_Purple_400x400.webm`
                        ],
                        yellow: [
                            lg`Smoke/SmokePlumes01_01_Regular_Yellow_400x400.webm`,
                            lg`Smoke/SmokePlumes01_02_Regular_Yellow_400x400.webm`,
                            lg`Smoke/SmokePlumes01_03_Regular_Yellow_400x400.webm`
                        ],
                    },
                }
            },
            spell: {
                moonbeam: {
                    loop: {
                        yellow: [l2`Moonbeam/Moonbeam_01_Regular_Yellow_400x400.webm`],
                    },
                    intro: {
                        yellow: [l2`Moonbeam/MoonbeamIntro_01_Regular_Yellow_400x400.webm`],
                    },
                    outro: {
                        yellow: [l2`Moonbeam/MoonbeamOutro_01_Regular_Yellow_400x400.webm`],
                    },    
                    complete: {
                        blue: [l2`Moonbeam/MoonbeamComplete_01_Regular_Blue_400x400.webm`],
                        green: [l2`Moonbeam/MoonbeamComplete_01_Regular_Green_400x400.webm`],
                        rainbow: [l2`Moonbeam/MoonbeamComplete_01_Regular_Rainbow_400x400.webm`],
                        yellow: [l2`Moonbeam/MoonbeamComplete_01_Regular_Yellow_400x400.webm`],
                    }
                },
                curewounds: {
                    '01': {
                        yellow: [l1`Cure_Wounds/CureWounds_01_Yellow_400x400.webm`]
                    }
                },
                detectmagic: {
                    '01': {
                        yellow: [l1`Detect_Magic/DetectMagicCircle_01_Regular_Yellow_1200x1200.webm`],
                    }
                },
                tollthedead: {
                    bell: {
                        yellow: [l0`Toll_The_Dead/TollTheDeadBell_01_Regular_Yellow_400x400.webm`],
                    },
                    complete: {
                        yellow: [l0`Toll_The_Dead/TollTheDead_01_Regular_Yellow_400x400.webm`],
                    },
                    shockwave: {
                        yellow: [l0`Toll_The_Dead/TollTheDeadShockwave_01_Regular_Yellow_400x400.webm`],
                    },
                    skull: {
                        yellow: [l0`Toll_The_Dead/TollTheDeadSkullSmoke_01_Regular_Yellow_400x400.webm`],
                    },
                },    
            },
        },
    }
    return patreonDB053;
}