import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

import * as common from "../common";

export function preset(current = {}, type) {
    return {
        id: current.id || uuidv4(),
        label: current.label || "",
        macro: current.macro || common.macro(),
        menu: 'preset',
        presetType: current.presetType || "",
        soundOnly: {
            sound: common.sound()
        },
    }
    switch (type) {
        case "dualattach":
            return {

            }
        case "proToTemp":
            return {

            }
        case "teleportation":
            return {

            }
        case "thunderwave":
            return {

            }
    }
}