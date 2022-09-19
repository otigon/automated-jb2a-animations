import * as common from "../../../../../_AutorecMenu/store/default-data/common";

export function melee(currentData) {
    console.log(currentData)
    return {
        label: currentData.label,
        levels3d: currentData.levels3d || common.levels3d(),
        macro: currentData.macro || common.macro(),
        meleeSwitch: {
            video: { dbSection: "range", menuType: "weapon", animation: "arrow", variant: "regular", color: "regular"},
            sound: common.sound(),
            options: { detect: "automatic", range: 2, returning: false, switchType: "on"}  
        },
        primary: common.primary({
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
