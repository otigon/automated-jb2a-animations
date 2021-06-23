
const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function tokenEffect(token, filePath, groundAnim, videoDuration) {

    let animLevel = groundAnim ? "ground" : "above";

    let animData = {
        file: filePath,
        position: token.center,
        anchor: {
            x: 0.5,
            y: 0.5
        },
        angle: 0,
        speed: 0,
        scale: {
            x: Scale,
            y: Scale
        },
        level: animLevel
    };

    async function playAnim(number) {
        let x = number;
        let interval = videoDuration;
        for (var i = 0; i < x; i++) {
            setTimeout(function () {
                if (level) {
                    canvas.autoanimationsG.playVideo(animData);
                    game.socket.emit('module.autoanimations', animData);
                } else {
                    canvas.autoanimations.playVideo(animData);
                    game.socket.emit('module.autoanimations', animData);
                }
            }, i * interval);
        }
    }
    // The number in parenthesis sets the number of times it loops
    playAnim(flags.loopAnim)
}

export default tokenEffect