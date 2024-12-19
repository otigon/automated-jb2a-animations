import { Hashing } from "#runtime/util";

import * as common from "../common";
import * as options from "../options";

export function range(current = {}) {
        return {
            id: current.id || Hashing.uuidv4(),
            label: current.label,
            levels3d: current.levels3d || common.levels3d(),
            macro: current.macro || common.macro(),
            menu: "range",
            primary: common.primary({
                options: options.range(),
                video: { dbSection: "range", menuType: 'weapon', animation: 'arrow', variant: 'regular', color: 'regular' },
            }),
            secondary: current.secondary || common.secondary(),
            soundOnly: current.soundOnly || {
                sound: common.sound(),
            },
            source: current.source || common.source(),
            target: current.target || common.target(),
        }
}
