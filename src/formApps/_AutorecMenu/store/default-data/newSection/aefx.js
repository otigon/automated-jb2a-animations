import { Hashing } from "#runtime/util";

import * as common from "../common";
import * as options from "../options";

export function aefx(current = {}, type) {
    if (type === "ontoken") {
        return {
            id: current.id || Hashing.uuidv4(),
            label: current.label || "",
            activeEffectType: current.activeEffectType || "ontoken",
            menu: 'aefx',
            macro: current.macro || common.macro(),
            primary: {
                video: {
                    dbSection: "static",
                    menuType: "spell",
                    animation: "curewounds",
                    variant: "01",
                    color: "blue",
                    enableCustom: false,
                    customPath: "",
                },
                options: options.aefx("ontoken"),
                sound: common.sound(),
            },
            secondary: current.secondary || common.secondary(),
            soundOnly: current.soundOnly || {sound: common.sound()},
            source: current.source || common.source(),
        }
    } else if (type === "aura") {
        return {
            id: current.id || Hashing.uuidv4(),
            label: current.label || "",
            activeEffectType: current.activeEffectType || "ontoken",
            menu: 'aefx',
            macro: current.macro || common.macro(),
            primary: {
                video: {
                    dbSection: "static",
                    menuType: "spell",
                    animation: "spiritguardians",
                    variant: "01",
                    color: "yellowblue",
                    enableCustom: false,
                    customPath: "",
                },
                options: options.aefx("aura"),
                sound: common.sound(),
            },
            secondary: current.secondary || common.secondary(),
            soundOnly: current.soundOnly || {sound: common.sound()},
            source: current.source || common.source(),
        }
    } else {
        return {
            id: current.id || Hashing.uuidv4(),
            label: current.label || "",
            activeEffectType: current.activeEffectType || "ontoken",
            menu: 'aefx',
            macro: current.macro || common.macro(),
            primary: {
                video: {
                    dbSection: "static",
                    menuType: "spell",
                    animation: "curewounds",
                    variant: "01",
                    color: "blue",
                    enableCustom: false,
                    customPath: "",
                },
                options: options.aefx("ontoken"),
                sound: common.sound(),
            },
            secondary: current.secondary || common.secondary(),
            soundOnly: current.soundOnly || {sound: common.sound()},
            source: current.source || common.source(),
        }
    }
}
