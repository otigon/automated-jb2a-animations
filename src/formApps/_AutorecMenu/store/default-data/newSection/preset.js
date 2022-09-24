import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

import * as common from "../common";

export function preset(current = {}, type) {
    switch (type) {
        case "dualattach":
            return {
                id: current.id || uuidv4(),
                data: {
                    video: {
                        dbSection: "range",
                        menuType: "weapon",
                        animation: "arrow",
                        variant: "regular",
                        color: "regular",
                    },
                    options: {
                        below: false,
                        playbackRate: 1,
                    },
                    sound: common.sound()                
                },
                label: current.label || "",
                macro: current.macro || common.macro(),
                menu: 'preset',
                presetType: current.presetType || "",
                soundOnly: {
                    sound: common.sound()
                },
            }
        case "proToTemp":
            return {
                id: current.id || uuidv4(),
                data: {
                    projectile: {
                        dbSection: "range",
                        menuType: "weapon",
                        animation: "arrow",
                        variant: "regular",
                        color: "regular",
                        enableCustom: false,
                        customPath: "",
                        options: {},
                        sound: common.sound()
                    },
                    preExplosion: {
                        dbSection: "static",
                        menuType: "spell",
                        animation: "curewounds",
                        variant: "01",
                        color: "blue",
                        options: {},
                        enable: false,
                        sound: common.sound()
                    },
                    explosion: {
                        dbSection: "static",
                        menuType: "spell",
                        animation: "curewounds",
                        variant: "01",
                        color: "blue",
                        options: {},
                        sound: common.sound()
                    },
                    afterImage: {
                        enable: false,
                        customPath: "",
                        options: {}
                    }                
                },
                label: current.label || "",
                macro: current.macro || common.macro(),
                menu: 'preset',
                presetType: current.presetType || "",
                soundOnly: {
                    sound: common.sound()
                },
            }
        case "teleportation":
            return {
                id: current.id || uuidv4(),
                data: {
                    start: {
                        dbSection: "static",
                        menuType: "spell",
                        animation: "mistystep",
                        variant: "01",
                        color: "blue",
                        options: {
                
                        },
                    },
                    between: {
                        dbSection: "range",
                        enable: false,
                        menuType: "weapon",
                        animation: "arrow",
                        variant: "regular",
                        color: "regular",
                        options: {
                
                        },
                    },
                    end: {
                        dbSection: "static",
                        menuType: "spell",
                        animation: "mistystep",
                        variant: "02",
                        color: "blue",
                        options: {
                
                        },
                    },
                    options: {
                        range: 30,
                        hideFromPlayers: false,
                        measureType: "alternating",
                    },
                    sound: {enable: false}                
                },
                label: current.label || "",
                macro: current.macro || common.macro(),
                menu: 'preset',
                presetType: current.presetType || "",
                soundOnly: {
                    sound: common.sound()
                },
            }
        case "thunderwave":
            return {
                id: current.id || uuidv4(),
                data: {
                    dbSection: "static",
                    menuType: "spell",
                    animation: "curewounds",
                    variant: "01",
                    color: "blue",
                    sound: {enable: false},
                    options: {
                        below: false,
                        removeTemplate: false,
                        scaleX: 1,
                        scaleY: 1,
                        repeat: 1,
                        delay: 250,
                        opacity: 1,
                    }                
                },
                label: current.label || "",
                macro: current.macro || common.macro(),
                menu: 'preset',
                presetType: current.presetType || "",
                soundOnly: {
                    sound: common.sound()
                },
            }
        default:
            return {
                id: current.id || uuidv4(),
                data: {
                    projectile: {
                        dbSection: "range",
                        menuType: "weapon",
                        animation: "arrow",
                        variant: "regular",
                        color: "regular",
                        enableCustom: false,
                        customPath: "",
                        options: {},
                        sound: common.sound()
                    },
                    preExplosion: {
                        dbSection: "static",
                        menuType: "spell",
                        animation: "curewounds",
                        variant: "01",
                        color: "blue",
                        options: {},
                        enable: false,
                        sound: common.sound()
                    },
                    explosion: {
                        dbSection: "static",
                        menuType: "spell",
                        animation: "curewounds",
                        variant: "01",
                        color: "blue",
                        options: {},
                        sound: common.sound()
                    },
                    afterImage: {
                        enable: false,
                        customPath: "",
                        options: {}
                    }                
                },
                label: current.label || "",
                macro: current.macro || common.macro(),
                menu: 'preset',
                presetType: current.presetType || "proToTemp",
                soundOnly: {
                    sound: common.sound()
                },
            }
    }
}