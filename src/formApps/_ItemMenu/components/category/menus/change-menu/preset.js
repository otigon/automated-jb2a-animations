import * as common from "../../../../../_AutorecMenu/store/default-data/common";

export function preset(currentData) {

    return {
        macro: currentData.macro || common.macro(),
        presetType: "",
        data: {},
        soundOnly: currentData.soundOnly || {
            sound: {
                delay: 0,
                enable: false,
                startTime: 0,
                volume: 0.75,
            }    
        },
    }
    /*
    return common.primary({
        options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1,
        },
        video: { dbSection: "melee", menuType: 'weapon', animation: 'club', variant: '01', color: 'white' },
    })
    */
}
