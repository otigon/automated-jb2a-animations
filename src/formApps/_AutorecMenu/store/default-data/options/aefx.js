export function aefx(aeType) {
    if (aeType === "ontoken") {
        return {
            addTokenWidth: false,
            delay: 0,
            elevation: 1000,
            fadeIn: 250,
            fadeOut: 500,
            isMasked: false,
            isWait: false,
            isRadius: false,
            opacity: 1,
            persistent: false,
            playOn: "source",
            repeat: 1,
            repeatDelay: 250,
            size: 1,
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1,    
        }
    } else if (aeType === "aura") {
        return {
            addTokenWidth: true,
            delay: 0,
            elevation: 1000,
            ignoreTarget: true,
            isMasked: false,
            isWait: false,
            opacity: 1,
            radius: 3,
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1,    
        }
    }
}