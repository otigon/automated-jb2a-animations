
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function bardicInspiration(handler, autoObject) {

    let token = handler.actorToken;
    let target = handler.allTargets[0];
    const flags = handler.flags;
    const data = {};
    if (autoObject) {
        //const autoOverridden = handler.options?.overrideAuto
        Object.assign(data, autoObject);
        data.animation = data.animation || "";
        data.itemAudio = {
            enable: data.audio?.a01?.enable || false,
            file: data.audio?.a01?.file,
            volume: data.audio?.a01?.volume || 0.25,
            delay: data.audio?.a01?.delay || 0,
        }
    } else {
        const bards = flags.bards ?? {};
        data.animation = handler.convertedName;
        data.selfColor = bards.bardSelfColor;
        data.targetColor = bards.bardTargetColor;
        data.selfMarkerColor = bards.markerColor;
        data.targetMarkerColor = bards.markerColorTarget;
        data.animateSelf = bards.bardSelf;
        data.animateTarget = bards.bardTarget;
        data.marker = bards.marker;
        data.selfAnimation = bards.bardAnim;
        data.targetAnimation = bards.bardTargetAnim;
        data.itemAudio = {
            enable: flags.audio?.a01?.enable || false,//
            file: flags.audio?.a01?.file,//
            volume: flags.audio?.a01?.volume || 0.25,//
            delay: flags.audio?.a01?.delay || 0,//
    }
    }
    const gridSize = canvas.grid.size;

    let selfMarkerPath = data.selfMarkerColor === "random" ? `autoanimations.static.bardicinspiration.marker` : `autoanimations.static.bardicinspiration.marker.${data.selfMarkerColor}`;
    let targetMarkerPath = data.targetMarkerColor === "random" ? `autoanimations.static.bardicinspiration.marker` : `autoanimations.static.bardicinspiration.marker.${data.targetMarkerColor}`
    async function markerCreate(tokenMarker, path) {
        new Sequence("Automated Animations")
        .effect()
            .file(path)
            .atLocation(tokenMarker)
            .scale((tokenMarker.w / 400) * 2)
            .gridSize(gridSize)
            .belowTokens(true)
        .play()
    }

    let selfMusicPath = data.selfColor === "random" ? `autoanimations.static.music.01` : `autoanimations.static.music.01.${data.selfColor}`
    let targetMusicPath = data.targetColor === "random" ? `autoanimations.static.music.01` : `autoanimations.static.music.01.${data.targetColor}`
    async function music(token, path) {
        
        let musicPlay = new Sequence("Automated Animations")
        .effect()
            .file(path)
            .atLocation(token)
            .scale(token.w / 200)
            .gridSize(gridSize)
            .repeats(10, 350)
            .randomOffset()

        musicPlay.play()
    }

    let selfBIPath = data.selfColor === "random" ? `autoanimations.static.bardicinspiration.inspire` : `autoanimations.static.bardicinspiration.inspire.${data.selfColor}`
    let targetBIPath = data.targetColor === "random" ? `autoanimations.static.bardicinspiration.inspire` : `autoanimations.static.bardicinspiration.inspire.${data.targetColor}`
    async function bardicInspiration(biToken, path) {

        let bardicPlay = new Sequence("Automated Animations")
        .effect()
            .file(path)
            .atLocation(biToken)
            .scale((biToken.w / 400) * 2)
            .gridSize(gridSize)

        bardicPlay.play()
    }

    async function playSound() {
        new Sequence()
        .sound()
            .file(data.itemAudio.file)
            .volume(data.itemAudio.volume)
            .delay(data.itemAudio.delay)
            .playIf(() => {
                return data.itemAudio.enable && data.itemAudio.file;
            })
        .play()
    }

    if (data.animateSelf) {
        switch (true) {
            case data.selfAnimation === "music":
                music(token, selfMusicPath);
                if (data.marker) {
                    if (data.animateSelf) {
                        markerCreate(token, selfMarkerPath);
                    }
                    //await wait(3750);
                }
                break;
            default:
                bardicInspiration(token, selfBIPath);
                if (data.marker) {
                    if (data.animateSelf) {
                        markerCreate(token, selfMarkerPath);
                    }
                    //await wait(3750);
                }
        }
    }
    if (data.animateTarget && target !== undefined) {
        switch (true) {
            case data.targetAnimation === "music":
                music(target, targetMusicPath);
                if (data.marker) {
                    if (target && data.animateTarget) {
                        markerCreate(target, targetMarkerPath);
                    }
                    //await wait(3750);
                }
                break;
            default:
                bardicInspiration(target, targetBIPath);
                if (data.marker) {
                    if (target && data.animateTarget) {
                        markerCreate(target, targetMarkerPath);
                    }
                    //await wait(3750);
                }
        }
    }
    playSound()
}
export default bardicInspiration;