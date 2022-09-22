import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

import * as common from "../common";
import * as options from "../options"

export function aefx(current = {}, type) {
    if (type === "ontoken") {
        return {
            label: current.label || "",
            macro: current.macro || common.macro(),
            data: {
                video: {
                    dbSection: "static",
                    menuType: "spell",
                    animation: "curewounds",
                    variant: "01",
                    color: "blue",
                    enableCustom: false,
                    customPath: "",
                },
                options: options.aefx(type),
                sound: common.sound(),
            },
            secondary: current.secondary || common.secondary(),
            soundOnly: current.soundOnly || {sound: common.sound()},
            source: current.source || common.source(),
        }
    } else if (type === "aura") {
        return {
            label: current.label || "",
            macro: current.macro || common.macro(),    
            data: {
                video: {
                    dbSection: "static",
                    menuType: "spell",
                    animation: "spiritguardians",
                    variant: "01",
                    color: "yellowblue",
                    enableCustom: false,
                    customPath: "",
                },
                options: options.aefx(type),
                sound: common.sound(),
            },
            secondary: current.secondary || common.secondary(),
            soundOnly: current.soundOnly || {sound: common.sound()},
            source: current.source || common.source(),
        }
    } else {
        return {
            id: current.id || uuidv4(),
            label: current.label || "",
            activeEffectType: current.activeEffectType || "",
            macro: current.macro || common.macro(),
            menu: 'aefx',
            secondary: current.secondary || common.secondary(),
            soundOnly: current.soundOnly || { sound: common.sound() },
            source: current.source || common.source(),
            target: current.target || common.target(),
        }
    }
}