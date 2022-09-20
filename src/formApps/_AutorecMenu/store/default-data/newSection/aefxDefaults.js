import * as common from '../common'
import { aefx } from '../options/aefx.js';

export function aefxDefaults(currentData, type) {
    if (type === "ontoken") {
        return {
            label: currentData.label || "",
            macro: currentData.macro || common.macro(),
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
                options: aefx(type),
                sound: common.sound(),
            },
            secondary: currentData.secondary || common.secondary(),
            soundOnly: currentData.soundOnly || {sound: common.sound()},
            source: currentData.source || common.source(),
        }
    } else if (type === "aura") {
        return {
            label: currentData.label || "",
            macro: currentData.macro || common.macro(),    
            data: {
                video: {
                    dbSection: "static",
                    menuType: "spell",
                    animation: "spiritguardians",
                    variant: "01",
                    color: "blue",
                    enableCustom: false,
                    customPath: "",
                },
                options: aefx(type),
                sound: sound(),
            },
            secondary: currentData.secondary || common.secondary(),
            soundOnly: currentData.soundOnly || {sound: common.sound()},
            source: currentData.source || common.source(),
        }
    }
}