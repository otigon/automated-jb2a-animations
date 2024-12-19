import { Hashing } from "#runtime/util";

import * as common from "../common";
import * as options from "../options";

export function templatefx(current = {}) {
    return {
        id: current.id || Hashing.uuidv4(),
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
