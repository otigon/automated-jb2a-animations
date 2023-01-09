export async function db053(path) {

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
    const freeDB053 = {
        static: {
            marker: {
                bubble: {
                    complete: {
                        _markers: {
                            loop: { start: 2625, end: 7625 }
                        },    
                        blue: [lg`Marker/MarkerBubbleComplete_01_Regular_Blue_400x400.webm`],
                    }
                },
                roundshield: {
                    loop: {
                        orange: [lg`Marker/MarkerShieldRampartLoop01_01_Regular_Orange_400x400.webm`],
                    },
                    complete: {
                        _markers: {
                            loop: { start: 1916, end: 6208 }
                        },    
                        orange: [lg`Marker/MarkerShieldRampart01_01_Regular_Orange_400x400.webm`],
                    },
                },
                smokering: {
                    loop: {
                        purpleblue: [lg`Marker/MarkerSmokeRingLoop01_Regular_BluePurple_400x400.webm`],
                    },
                },
            },
            nature: {
                feathers: {
                    outburst: {
                        textured: [
                            lg`Nature/SwirlingFeathersOutburst01_01_Regular_Textured_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst02_01_Regular_Textured_400x400.webm`,
                            lg`Nature/SwirlingFeathersOutburst03_01_Regular_Textured_400x400.webm`
                        ],
                    },
                },
            },
            sideImpact: {
                smoke: {
                    "01": {
                        grey: [
                            lg`Smoke/SmokePuffSide01_01_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_02_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_03_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_04_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePuffSide01_05_Regular_Grey_400x400.webm`,
                        ]
                    },
                    '02': {
                        white: [
                            lg`Smoke/SmokePuffSide02_01_Regular_White_400x400.webm`,
                            lg`Smoke/SmokePuffSide02_02_Regular_White_400x400.webm`,
                            lg`Smoke/SmokePuffSide02_03_Regular_White_400x400.webm`,
                        ]
                    }
                }
            },
            smoke: {
                plume: {
                    complete: {
                        _markers: {
                            loop: { start: 2000, end: 4000 }
                            },        
                        grey: [
                            lg`Smoke/SmokePlumes01_01_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePlumes01_02_Regular_Grey_400x400.webm`,
                            lg`Smoke/SmokePlumes01_03_Regular_Grey_400x400.webm`
                        ],
                    },
                }
            },
        },
    }
    return freeDB053;
}