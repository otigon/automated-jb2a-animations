
import { autoRecMigration } from "./autoRecMerge.js";
export class aaAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            search: "",
            melee: {
                0: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.dagger"),
                    animation: 'dagger',
                    color: 'white',
                    options: {
                        variant: '01',
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                    }
                },
                1: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.flurryofblows"),
                    animation: 'flurryofblows',
                    color: 'blue',
                    options: {
                        variant: 'physical',
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                    }
                },
                2: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.greataxe"),
                    animation: 'greataxe',
                    color: 'white',
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                        variant: '01',
                    }
                },
                3: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.greatclub"),
                    animation: 'greatclub',
                    color: 'white',
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                        variant: '01',
                    }
                },
                4: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.greatsword"),
                    animation: 'greatsword',
                    color: 'white',
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                        variant: '01',
                    }
                },
                5: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.handaxe"),
                    animation: 'handaxe',
                    color: 'white',
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                        variant: '01',
                    }
                },
                6: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.sword"),
                    animation: 'sword',
                    color: 'white',
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                        variant: '01',
                    }
                },
                7: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.mace"),
                    animation: 'mace',
                    color: 'white',
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                        variant: '01',
                    }
                },
                8: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.maul"),
                    animation: 'maul',
                    color: 'white',
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                        variant: '01',
                    }
                },
                9: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.spear"),
                    animation: 'spear',
                    color: 'white',
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                        variant: '01',
                    }
                },
                10: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.rapier"),
                    variant: '01',
                    color: 'white',
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                        animation: 'rapier',
                    }
                },
                11: {
                    hidden: true,
                    meleeType: 'weapon',
                    name: game.i18n.localize("autoanimations.animations.unarmedstrike"),
                    animation: 'unarmedstrike',
                    color: 'blue',
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        menuType: "weapon",
                        variant: 'physical',
                    }
                },
            },
            range: {
                0: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.crossbow"),
                    animation: 'bolt',
                    color: 'orange',
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "weapon",
                        menuType: "weapon",
                        variant: 'physical',
                    }
                },
                1: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.bow"),
                    animation: 'arrow',
                    color: 'regular',
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "weapon",
                        menuType: "weapon",
                        variant: 'regular',
                    }
                },
                2: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.disintegrate"),
                    animation: 'disintegrate',
                    color: 'green',
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                        menuType: "spell",
                        variant: '01',
                    }
                },
                3: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.eldritchblast"),
                    animation: 'eldritchblast',
                    color: 'purple',
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                        menuType: "spell",
                        variant: '01',
                    }
                },
                4: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.firebolt"),
                    animation: 'firebolt',
                    color: 'orange',
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                        menuType: "spell",
                        variant: '01',
                    }
                },
                5: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.guidingbolt"),
                    animation: 'guidingbolt',
                    color: 'blueyellow',
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                        menuType: "spell",
                        variant: '01',
                    }
                },
                6: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.magicmissile"),
                    animation: 'magicmissile',
                    color: 'purple',
                    options: {
                        repeat: 3,
                        delay: 500,
                        type: "spell",
                        menuType: "spell",
                        variant: '01',
                    }
                },
                7: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.rayoffrost"),
                    animation: 'rayoffrost',
                    color: 'blue',
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                        menuType: "spell",
                        variant: '01',
                    }
                },
                8: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.scorchingray"),
                    animation: 'scorchingray',
                    color: 'orange',
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                        menuType: "spell",
                        variant: '01',
                    }
                },
                9: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.witchbolt"),
                    animation: 'witchbolt',
                    color: 'blue',
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                        menuType: "spell",
                        variant: '01',
                    }
                },
            },
            static: {
                0: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.curewounds"),
                    animation: 'curewounds',
                    staticOptions: 'staticSpells',
                    variant: '01',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    scale: 1.5,
                    below: true,
                    type: "targetDefault",
                    menuType: "spell",
                    options: {

                    }
                },
                1: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.itemHealingWord"),
                    animation: 'generichealing',
                    staticOptions: 'staticSpells',
                    variant: '01',
                    color: 'blue',
                    repeat: 1,
                    delay: 500,
                    scale: 1.5,
                    below: true,
                    type: "targetDefault",
                    menuType: "spell",
                    options: {

                    }
                },
                2: {
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.tollthedead"),
                    animation: 'tollthedead',
                    staticOptions: 'staticSpells',
                    variant: 'complete',
                    color: 'green',
                    repeat: 1,
                    delay: 500,
                    scale: 1,
                    below: false,
                    type: "target",
                    menuType: "spell",
                    options: {

                    }
                },
                3: {
                    staticOptions: 'creature',
                    animation: "bite",
                    below: false,
                    color: "red",
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.bite"),
                    repeat: 1,
                    scale: 1,
                    type: "target",
                    variant: "01",
                    menuType: "creature",
                    options: {

                    }
                },
                4: {
                    staticOptions: 'creature',
                    animation: "claw",
                    below: false,
                    color: "red",
                    custom: false,
                    delay: 500,
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.claw"),
                    repeat: 1,
                    scale: 1,
                    type: "target",
                    variant: "01",
                    menuType: "creature",
                    options: {

                    }
                },
            },
            templatefx: {
                0: {
                    animation: "calllightning",
                    color: 'blueorange',
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.calllightning"),
                    options: {
                        variant: '01',
                        scaleX: 1,
                        scaleY: 1,
                        menuType: "circle",
                        occlusionAlpha: 0.7,
                        occlusionMode: "3",
                        opacity: 0.75,
                        overhead: true,
                        persist: true,
                        persistType: 'overheadtile',
                        removeTemplate: true,
                        repeat: 1,
                        below: false,
                        custom: false,
                        delay: 500,
                    }
                },
                1: {
                    animation: "fogcloud",
                    color: 'white',
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.fogcloud"),
                    options: {
                        occlusionAlpha: 0.65,
                        occlusionMode: "3",
                        opacity: 0.75,
                        overhead: true,
                        persist: true,
                        persistType: 'overheadtile',
                        removeTemplate: true,
                        repeat: 1,
                        variant: '01',
                        scaleX: 1,
                        scaleY: 1,
                        menuType: "circle",
                        custom: false,
                        delay: 500,
                        below: false,
                    }
                },
                2: {
                    animation: "thunderwave",
                    color: "blue",
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.thunderwave"),
                    options: {
                        opacity: 0.75,
                        persist: false,
                        removeTemplate: true,
                        repeat: 3,
                        type: "rect",
                        variant: "01",
                        scaleX: 1,
                        scaleY: 1,
                        menuType: "square",
                        custom: false,
                        delay: 500,
                        below: false,
                    }
                }
            },
            aura: {
                0: {
                    animation: "spiritguardians",
                    color: 'darkblue',
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.spiritguardians"),
                    options: {
                        opacity: 0.75,
                        scale: 3.5,
                        static: false,
                        variant: '01',
                        ignoretargets: true,
                        menuType: "spell",
                        custom: false,
                        below: false,
                    }
                },
            },
            preset: {
                0: {
                    presetType: "bardicinspiration",
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.bardicinspiration"),
                    bardicinspiration: {
                        animateSelf: true,
                        animateTarget: true,
                        below: false,
                        marker: true,
                        scale: 1,
                        selfAnimation: "music",
                        selfColor: "blue",
                        selfMarkerColor: "greenorange",
                        targetAnimation: "bardicinspiration",
                        targetColor: "greenorange",
                        targetMarkerColor: "greenorange",    
                    }
                },
                1: {
                    presetType:"bless",
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.bless"),
                    bless: {
                        persistent: false,
                        below: true,
                        color: "yellow",
                        scale: 1.5,
                    }
                },
                2: {
                    presetType:"shieldspell",
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.shield"),
                    shield: {
                        below: false,
                        color: "blue",
                        endeffect: "outro_explode",
                        scale: 1,
                        variant: "01",
                    }
                },
                3: {
                    presetType:"teleportation",
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.mistystep"),
                    teleportation: {
                        range: 30,
                        hideTemplate: false,
                        measureType: "alternating",
                        start: {
                            menuType: "spell",
                            animation: "mistystep",
                            variant: "01",
                            color: "blue",
                            scale: 1.5,
                            custom: false,
                            customPath: "",
                            below: false,
                        },
                        end: {
                            menuType: "spell",
                            animation: "mistystep",
                            variant: "02",
                            color: "blue",
                            scale: 1.5,
                            custom: false,
                            customPath: "",
                            below: false,
                        },
                        between: {
                            enableBetween: false,
                        },
                    }
                }
            },
            aefx: {

            },
            version: 4,
        };
        return defaultConfig;
    }

    constructor() {
        this._enabled = false;
    }
}

export const dnd5eAutoRec = new aaAutorec();