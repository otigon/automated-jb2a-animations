import * as common from "../../../../../_AutorecMenu/store/default-data/common";

export function templatefx(currentData) {
    return {
        label: currentData.label,
        macro: currentData.macro || common.macro(),
        primary: common.primary({
            options: {
                delay: 0,
                elevation: 1000,
                isMasked: false,
                isWait: false,
                occlusionAlpha: 0.7,
                occlusionMode: "3",
                opacity: 1,
                persistType: "sequencerground",
                persistent: false,
                removeTemplate: false,
                repeat: 1,
                repeatDelay: 500,
                rotate: 0,
                scaleX: 1,
                scaleY: 1,
                zIndex: 1
                },
            video: { dbSection: "templatefx", menuType: 'circle', animation: 'calllightning', variant: '01', color: 'blueorange' },    
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
            isMasked: false,
            isWait: false,
            occlusionAlpha: 0.7,
            occlusionMode: "3",
            opacity: 1,
            persistType: "sequencerground",
            persistent: false,
            removeTemplate: false,
            repeat: 1,
            repeatDelay: 500,
            rotate: 0,
            scaleX: 1,
            scaleY: 1,
            zIndex: 1
        },
        video: { dbSection: "templatefx", menuType: "circle", animation: "calllightning", variant: '01', color: 'blue' },
    })
    */
}
