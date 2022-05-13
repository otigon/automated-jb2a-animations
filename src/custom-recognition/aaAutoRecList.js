
import { autoRecMigration } from "./autoRecMerge.js";
export class aaAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            search: "",
            melee: {
                0: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.dagger"),
                    primary: {
                        menuType: "weapon",
                        animation: 'dagger',
                        variant: '01',
                        color: 'white',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                1: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.flurryofblows"),
                    primary: {
                        menuType: "weapon",
                        animation: 'flurryofblows',
                        variant: 'physical',
                        color: 'blue',
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                2: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.greataxe"),
                    primary: {
                        menuType: "weapon",
                        animation: 'greataxe',
                        variant: '01',
                        color: 'white',
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                3: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.greatclub"),
                    primary: {
                        menuType: "weapon",
                        animation: 'greatclub',
                        variant: '01',
                        color: 'white',
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                4: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.greatsword"),
                    primary: {
                        menuType: "weapon",
                        animation: 'greatsword',
                        variant: '01',
                        color: 'white',
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                5: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.handaxe"),
                    primary: {
                        menuType: "weapon",
                        animation: 'handaxe',
                        variant: '01',
                        color: 'white',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                6: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.sword"),
                    primary: {
                        menuType: "weapon",
                        animation: 'sword',
                        variant: '01',
                        color: 'white',
                     },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                7: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.mace"),
                    primary: {
                        menuType: "weapon",
                        animation: 'mace',
                        variant: '01',
                        color: 'white',
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                8: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.maul"),
                    primary: {
                        menuType: "weapon",
                        animation: 'maul',
                        variant: '01',
                        color: 'white',
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                9: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.spear"),
                    primary: {
                        menuType: "weapon",
                        animation: 'spear',
                        variant: '01',
                        color: 'white',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                10: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.rapier"),
                    primary: {
                        menuType: "weapon",
                        animation: 'rapier',
                        variant: '01',
                        color: 'white',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
                11: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.unarmedstrike"),
                    primary: {
                        menuType: "weapon",
                        animation: 'unarmedstrike',
                        variant: 'physical',
                        color: 'blue',
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                    }
                },
            },
            range: {
                0: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.crossbow"),
                    primary: {
                        menuType: "weapon",
                        animation: 'bolt',
                        variant: 'physical',
                        color: 'orange',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "weapon",
                    }
                },
                1: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.bow"),
                    primary: {
                        menuType: "weapon",
                        animation: 'arrow',
                        variant: 'regular',
                        color: 'regular',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "weapon",
                    }
                },
                2: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.disintegrate"),
                    primary: {
                        menuType: "spell",
                        animation: 'disintegrate',
                        variant: '01',
                        color: 'green',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                    }
                },
                3: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.eldritchblast"),
                    primary: {
                        menuType: "spell",
                        animation: 'eldritchblast',
                        variant: '01',
                        color: 'purple',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                    }
                },
                4: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.firebolt"),
                    primary: {
                        menuType: "spell",
                        animation: 'firebolt',
                        variant: '01',
                        color: 'orange',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                    }
                },
                5: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.guidingbolt"),
                    primary: {
                        menuType: "spell",
                        animation: 'guidingbolt',
                        variant: '01',
                        color: 'yellowblue',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                    }
                },
                6: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.magicmissile"),
                    primary: {
                        menuType: "spell",
                        animation: 'magicmissile',
                        variant: '01',
                        color: 'purple',    
                    },
                    options: {
                        repeat: 3,
                        delay: 500,
                        type: "spell",
                    }
                },
                7: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.rayoffrost"),
                    primary: {
                        menuType: "spell",
                        animation: 'rayoffrost',
                        variant: '01',
                        color: 'blue',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                    }
                },
                8: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.scorchingray"),
                    primary: {
                        menuType: "spell",
                        animation: 'scorchingray',
                        variant: '01',
                        color: 'orange',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                    }
                },
                9: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.witchbolt"),
                    primary: {
                        menuType: "spell",
                        animation: 'witchbolt',
                        variant: '01',
                        color: 'blue',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        type: "spell",
                    }
                },
            },
            static: {
                0: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.curewounds"),
                    primary: {
                        menuType: "spell",
                        animation: 'curewounds',
                        variant: '01',
                        color: 'blue',
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1.5,
                        below: true,
                        staticType: "targetDefault",    
                    }
                },
                1: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.itemHealingWord"),
                    primary: {
                        menuType: "spell",
                        animation: 'generichealing',
                        variant: '01',
                        color: 'blue',    
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1.5,
                        below: true,
                        staticType: "targetDefault",    
                    }
                },
                2: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.tollthedead"),
                    primary: {
                        menuType: "spell",
                        animation: 'tollthedead',
                        variant: 'complete',
                        color: 'green',
                    },
                    options: {
                        repeat: 1,
                        delay: 500,
                        scale: 1,
                        below: false,
                        staticType: "target",    
                    }
                },
                3: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.bite"),
                    primary: {
                        menuType: "creature",
                        animation: "bite",
                        variant: "01",
                        color: "red",
                    },
                    options: {
                        repeat: 1,
                        scale: 1,
                        staticType: "target",
                        below: false,
                        custom: false,
                        delay: 500,
                    }
                },
                4: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.claw"),
                    primary: {
                        menuType: "creature",
                        animation: "claw",
                        variant: "01",
                        color: "red",
                    },
                    options: {
                        repeat: 1,
                        scale: 1,
                        staticType: "target",
                        below: false,
                        custom: false,
                        delay: 500,
                    }
                },
            },
            templatefx: {
                0: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.calllightning"),
                    primary: {
                        menuType: "circle",
                        animation: "calllightning",
                        variant: '01',
                        color: 'blueorange',
                    },
                    options: {
                        scaleX: 1,
                        scaleY: 1,
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
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.fogcloud"),
                    primary: {
                        menuType: "circle",
                        animation: "fogcloud",
                        variant: '01',
                        color: 'white',
                    },
                    options: {
                        occlusionAlpha: 0.65,
                        occlusionMode: "3",
                        opacity: 0.75,
                        overhead: true,
                        persist: true,
                        persistType: 'overheadtile',
                        removeTemplate: true,
                        repeat: 1,
                        scaleX: 1,
                        scaleY: 1,
                        custom: false,
                        delay: 500,
                        below: false,
                    }
                },
                2: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.thunderwave"),
                    primary: {
                        menuType: "square",
                        animation: "thunderwave",
                        variant: "01",
                        color: "blue",
                    },
                    options: {
                        opacity: 0.75,
                        persist: false,
                        removeTemplate: true,
                        repeat: 3,
                        type: "rect",
                        scaleX: 1,
                        scaleY: 1,
                        custom: false,
                        delay: 500,
                        below: false,
                    }
                }
            },
            aura: {
                0: {
                    id:randomID(),
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.spiritguardians"),
                    primary: {
                        menuType: "spell",
                        animation: "spiritguardians",
                        variant: '01',
                        color: 'darkblue',
                    },
                    options: {
                        opacity: 0.75,
                        scale: 3.5,
                        static: false,
                        ignoretargets: true,
                        custom: false,
                        below: false,
                    }
                },
            },
            preset: {
                0: {
                    id:randomID(),
                    presetType: "bardicinspiration",
                    hidden: true,
                    name: game.i18n.localize("autoanimations.animations.bardicinspiration"),
                    bardicinspiration: {
                        self: {
                            enable: true,
                            animation: "bardicinspiration",
                            variant: "inspire",
                            color: "yellowblue",
                        },
                        target: {
                            enable: true,
                            animation: "bardicinspiration",
                            variant: "inspire",
                            color: "yellowblue",
                        },
                        marker: {
                            enable: true,
                            selfColor: "yellowblue",
                            targetColor: "yellowblue",
                        },
                        below: false,
                        scale: 1,
                    }
                },
                1: {
                    id:randomID(),
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
                    id:randomID(),
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
                    id:randomID(),
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
                0: {
                    id:randomID(),
                    animType: "static",
                    hidden: true,
                    name: "Frightened",
                    primary: {
                        menuType: "conditions",
                        animation: "drop",
                        variant: "01",
                        color: "green",
                    },
                    options: {
                        persistent: true,
                        below: false,
                        opacity: 1,
                        repeat: 1,
                        delay: 250,
                        scale: 1,
                        staticType: "source",
                    }
                }
            },
            version: 5,
        };
        return defaultConfig;
    }

    constructor() {
        this._enabled = false;
    }
}

export const dnd5eAutoRec = new aaAutorec();