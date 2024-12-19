import { Hashing } from "#runtime/util";

import * as common from "../common";
import * as options from "../options";

export function melee(current = {}) {
        return {
            id: current.id || Hashing.uuidv4(),
            label: current.label || "",
            levels3d: current.levels3d || common.levels3d(),
            macro: current.macro || common.macro(),
            meleeSwitch: common.meleeSwitch(),
            menu: "melee",
            primary: common.primary({
                options: options.melee(),
                video: { dbSection: "melee", menuType: 'weapon', animation: 'club', variant: '01', color: 'white' },
            }),
            secondary: current.secondary || common.secondary(),
            soundOnly: current.soundOnly || {
                sound: common.sound(),
            },
            source: current.source || common.source(),
            target: current.target || common.target(),
        }
}
