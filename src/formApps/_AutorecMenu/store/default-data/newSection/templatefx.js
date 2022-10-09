import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

import * as common from "../common";
import * as options from "../options";

export function templatefx(current = {}) {
    return {
        id: current.id || uuidv4(),
        label: current.label,
        macro: current.macro || common.macro(),
        menu: "templatefx",
        primary: common.primary({
            options: options.templatefx(),
            video: { dbSection: "templatefx", menuType: 'circle', animation: 'calllightning', variant: '01', color: 'blue' },
        }),
        secondary: current.secondary || common.secondary(),
        soundOnly: current.soundOnly || {
            sound: common.sound(),
        },
        source: current.source || common.source(),
        target: current.target || common.target(),
    }
}