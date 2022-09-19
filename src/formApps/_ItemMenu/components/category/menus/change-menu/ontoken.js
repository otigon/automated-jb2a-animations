import * as common from "../../../../../_AutorecMenu/store/default-data/common";

export function ontoken(currentData) {
    return {
        label: currentData.label,
        levels3d: currentData.levels3d || common.levels3d(),
        macro: currentData.macro || common.macro(),
        primary: common.primary({
            options: {
                addTokenWidth: false,
                delay: 0,
                elevation: 1000,
                fadeIn: 250,
                fadeOut: 500,
                isMasked: false,
                isRadius: false,
                isWait: false,
                opacity: 1,
                persistent: false,
                repeat: 1,
                repeatDelay: 500,
                size: 1.5,
                playOn: "default",
                unbindAlpha: false,
                unbindVisibility: false,
                zIndex: 1
            },
            video: { dbSection: "static", menuType: 'spell', animation: 'curewounds', variant: '01', color: 'blue' },    
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
            addTokenWidth: false,
            delay: 0,
            elevation: 1000,
            fadeIn: 250,
            fadeOut: 500,
            isMasked: false,
            isRadius: false,
            isWait: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            repeatDelay: 500,
            size: 1.5,
            playOn: "default",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
        },
        video: { dbSection: "static", menuType: "spell", animation: 'curewounds', variant: '01', color: 'blue' },
    })
    */
}
