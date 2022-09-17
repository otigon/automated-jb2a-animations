import * as common from "../../../../../_AutorecMenu/store/default-data/common";

export function range(currentData) {
    return {
        label: currentData.label,
        levels3d: currentData.levels3d || common.levels3d(),
        macro: currentData.macro || common.macro(),
        primary: common.primary({
            options: {
                delay: 0,
                elevation: 1000,
                isWait: false,
                onlyX: false,
                opacity: 1,
                repeat: 1,
                repeatDelay: 500,
                returning: false,
                zIndex: 1
            },
            video: { dbSection: "range", menuType: 'weapon', animation: 'arrow', variant: 'regular', color: 'regular' },    
        }),
        secondary: currentData.secondary || common.secondary(),
        soundOnly: currentData.soundOnly || {
            sound: {
                delay: 0,
                enable: false,
                startTime: 0,
                volume: 0.75,
            }    
        },
        source: currentData.source || common.source(),
        target: currentData.target || common.target(),
    }
    /*
    return common.primary({
        options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            returning: false,
            zIndex: 1
        },
        video: { dbSection: "range", menuType: "weapon", animation: 'arrow', variant: 'regular', color: 'regular' },
    })
    */
}
