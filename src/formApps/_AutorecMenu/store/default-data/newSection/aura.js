import { Hashing } from "#runtime/util";

import * as common from "../common";
import * as options from "../options";

export function aura(current = {}) {
        return {
            id: current.id || Hashing.uuidv4(),
            label: current.label,
            macro: current.macro || common.macro(),
            menu: "aura",
            primary: common.primary({
                options: options.aura(),
                video: { dbSection: "static", menuType: 'spell', animation: 'spiritguardians', variant: '01', color: 'yellowblue' },
            }),
            secondary: current.secondary || common.secondary(),
            soundOnly: current.soundOnly || {
                sound: common.sound(),
            },
            source: current.source || common.source(),
            target: current.target || common.target(),
        }
}
