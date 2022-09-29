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
                secondary: common.secondary(),
                target: common.target(),
            }
        case "teleportation":
            return {
                id: current.id || uuidv4(),
                data: {
                    start: {
                        dbSection: "static",
                        enabe: true,
                        menuType: "spell",
                        animation: "mistystep",
                        variant: "01",
                        color: "blue",
                        options: {
                            delay: 0,
                            elevation: 1000,
                            fadeIn: 250,
                            fadeOut: 250,
                            isMasked: false,
                            opacity: 1,
                            isRadius: false,
                            size: 1.5,
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
                            delay: 0,
                            elevation: 1000,
                            opacity: 1,
                            playbackRate: 1,
                        },
                    },
                    end: {
                        dbSection: "static",
                        enabe: true,
                        menuType: "spell",
                        animation: "mistystep",
                        variant: "02",
                        color: "blue",
                        options: {
                            delay: 500,
                            elevation: 1000,
                            fadeIn: 250,
                            fadeOut: 250,
                            isMasked: false,
                            isRadius: false,
                            opacity: 1,
                            size: 1.5,
                        },
                    },
                    options: {
                        range: 30,
                        hideFromPlayers: false,
                        measureType: "alternating",
                        teleport: true,
                        speed: 120,
                        delayMove: 1000,
                        alpha: 0,
                        delayFade: 750,
                        delayReturn: 250,
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
                secondary: common.secondary(),
                target: common.target(),
            }
    }
}