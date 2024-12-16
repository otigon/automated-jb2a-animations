import { Hashing } from "#runtime/util";

import * as common from "../common";

export function preset(current = {}, type) {
    switch (type) {
        case "dualattach":
            return {
                id: current.id || Hashing.uuidv4(),
                data: {
                    video: {
                        dbSection: "range",
                        menuType: "weapon",
                        animation: "arrow",
                        variant: "regular",
                        color: "regular",
                    },
                    options: {
                        elevation: 1000,
                        onlyX: false,
                        opacity: 1,
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
                id: current.id || Hashing.uuidv4(),
                data: {
                    projectile: {
                        dbSection: "range",
                        menuType: "spell",
                        animation: "fireballbeam",
                        variant: "01",
                        color: "orange",
                        enableCustom: false,
                        customPath: "",
                        options: {
                            elevation: 1000,
                            opacity: 1,
                            playbackRate: 1,
                            repeat: 1,
                            repeatDelay: 250,
                            removeTemplate: false,
                            wait: -1800,
                        },
                        sound: common.sound()
                    },
                    preExplosion: {
                        enable: false,
                        dbSection: "static",
                        menuType: "spell",
                        animation: "curewounds",
                        variant: "01",
                        color: "blue",
                        options: {
                            elevation: 1000,
                            opacity: 1,
                            playbackRate: 1,
                            repeat: 1,
                            repeatDelay: 250,
                            scale: 1,
                            wait: 0,
                        },
                        sound: common.sound()
                    },
                    explosion: {
                        dbSection: "static",
                        menuType: "spell",
                        animation: "fireball",
                        variant: "explode",
                        color: "orange",
                        options: {
                            elevation: 1000,
                            opacity: 1,
                            playbackRate: 1,
                            repeat: 1,
                            repeatDelay: 250,
                            scale: 1.25,
                            wait: -1000,
                        },
                        sound: common.sound()
                    },
                    afterImage: {
                        enable: false,
                        customPath: "",
                        options: {
                            elevation: 0,
                            persistent: false,
                            scale: 1,
                        }
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
                id: current.id || Hashing.uuidv4(),
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
                            playbackRate: 1,
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
                            playbackRate: 1,
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
                        checkCollision: true,
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
                id: current.id || Hashing.uuidv4(),
                data: {
                    video: {
                        dbSection: "static",
                        menuType: "spell",
                        animation: "thunderwave",
                        variant: "mid",
                        color: "blue",
                    },
                    options: {
                        elevation: 1000,
                        removeTemplate: false,
                        repeat: 1,
                        repeatDelay: 250,
                        opacity: 1,
                    }      ,
                    sound: {enable: false},
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
                id: current.id || Hashing.uuidv4(),
                data: {
                    projectile: {
                        dbSection: "range",
                        menuType: "weapon",
                        animation: "arrow",
                        variant: "regular",
                        color: "regular",
                        enableCustom: false,
                        customPath: "",
                        options: {
                            elevation: 1000,
                            opacity: 1,
                            playbackRate: 1,
                            repeat: 1,
                            repeatDelay: 250,
                            removeTemplate: false,
                            wait: -1800,
                        },
                        sound: common.sound()
                    },
                    preExplosion: {
                        dbSection: "static",
                        menuType: "spell",
                        animation: "curewounds",
                        variant: "01",
                        color: "blue",
                        options: {
                            elevation: 1000,
                            opacity: 1,
                            playbackRate: 1,
                            repeat: 1,
                            repeatDelay: 250,
                            scale: 1,
                            wait: 0,
                        },
                        enable: false,
                        sound: common.sound()
                    },
                    explosion: {
                        dbSection: "static",
                        menuType: "spell",
                        animation: "curewounds",
                        variant: "01",
                        color: "blue",
                        options: {
                            elevation: 1000,
                            opacity: 1,
                            playbackRate: 1,
                            repeat: 1,
                            repeatDelay: 250,
                            scale: 1.25,
                            wait: -1000,
                        },
                        sound: common.sound()
                    },
                    afterImage: {
                        enable: false,
                        customPath: "",
                        options: {
                            elevation: 0,
                            persistent: false,
                            scale: 1,
                        }
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
