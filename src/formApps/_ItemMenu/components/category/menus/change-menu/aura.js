import * as common from "../../../../../_AutorecMenu/store/default-data/common";

export function aura(currentData) {
    return {
        label: currentData.label,
        levels3d: currentData.levels3d || common.levels3d(),
        macro: currentData.macro || common.macro(),
        primary: common.primary({
            options: {
                addTokenWidth: true,
                delay: 0,
                elevation: 1000,
                ignoreTarget: true,
                isMasked: false,
                isWait: false,
                opacity: 1,
                unbindAlpha: false,
                unbindVisbility: false,
                zIndex: 1,
                radius: 3,
            },
            video: { dbSection: "static", menuType: 'spell', animation: 'spiritguardians', variant: '01', color: 'blueyellow' },    
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
            addTokenWidth: true,
            auraRadius: 3,
            elevation: 0,
            ignoreTarget: true,
            isMasked: false,
            opacity: 0.75,
            unbindAlpha: false,
            unbindVisbility: false,
            zIndex: 1,
            radius: 3,
        },
        video: { dbSection: "static", menuType: "spell", animation: "spiritguardians", variant: '01', color: 'yellowblue' },
    })
    */
}
