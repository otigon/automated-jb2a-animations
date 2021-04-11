const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function castOnSelf(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let path01 = "5th_Level";
    let path02 = "Antilife_Shell";
    let path03 = "AntilifeShell_01_Blue_NoCircle";
    log(path01);
    log(path02);
    log(path03);

    let tokenSize = handler.actorToken.actor.data.data.traits.size;
    log(tokenSize);
    let divisor = 375;
    switch (true) {
        case (tokenSize === "lg"):
            divisor = 187;
            break;
        case (tokenSize === "huge"):
            divisor = 125;
            break;
        case (tokenSize === "sm"):
        case (tokenSize === "med"):
        default:
            divisor = 375;
            break;
    }

    await wait(500);

    async function cast() {

        //let Scale = ((handler.actorToken.data.width + handler.actorToken.data.height) / 8);
        let Scale = canvas.scene.data.grid / divisor;
        let spellAnim =
        {
            file: `modules/${path00}/Library/${path01}/${path02}/${path03}_400x400.webm`,
            position: handler.actorToken.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            speed: 0,
            scale: {
                x: Scale,
                y: Scale
            }
        };

        canvas.fxmaster.playVideo(spellAnim);
        game.socket.emit('module.fxmaster', spellAnim);
    }
    cast();
}

export default castOnSelf;