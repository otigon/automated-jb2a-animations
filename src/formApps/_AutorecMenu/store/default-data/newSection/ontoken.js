import { Hashing } from "#runtime/util";

import * as common from "../common";
import * as options from "../options";

export function ontoken(current = {}) {
        return {
            id: current.id || Hashing.uuidv4(),
            label: current.label,
            levels3d: current.levels3d || common.levels3d(),
            macro: current.macro || common.macro(),
            menu: "ontoken",
            primary: common.primary({
                options: options.ontoken(),
                video: { dbSection: "static", menuType: 'spell', animation: 'curewounds', variant: '01', color: 'blue' },
            }),
            secondary: current.secondary || common.secondary(),
            soundOnly: current.soundOnly || {
                sound: common.sound(),
            },
            source: current.source || common.source(),
            target: current.target || common.target(),
        }
}
