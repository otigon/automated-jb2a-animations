import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function meleeExplosion(handler, target) {

    let audio = handler.allSounds.explosion;
    let audioEnabled = handler.explodeSound;

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02 = 'explosion';
    let color;
    let variant = handler.animExVariant;
    let filePath;

    switch (true) {
        case handler.animExVariant === "shatter":
            obj02 = "shatter";
            color = handler.animExColor;
            filePath = obj01[obj02][color];
            break;
        default:
            obj02 = "explosion";
            color = handler.animExColor;
            filePath = obj01[obj02][variant][color];
    }

    let multiplier;
    switch (variant) {
        case ('05'):
        case ('06'):
        case ('07'):
            multiplier = 1500;
            break;
        default:
            multiplier = 1000;
    }
    let divisor = (multiplier * (1 / (handler.animExRadius)));

    async function cast() {
        let loops = handler.animExLoop;

        let Scale = (canvas.scene.data.grid / divisor);

        // Defines the spell template for FXMaster
        let spellAnim =
        {
            file: filePath,
            position: target.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            scale: {
                x: Scale,
                y: Scale
            }
        };

        async function SpellAnimation(number) {

            let x = number;
            let interval = 1000;
            for (var i = 0; i < x; i++) {
                setTimeout(function () {
                    canvas.fxmaster.playVideo(spellAnim);
                    game.socket.emit('module.fxmaster', spellAnim);
                }, i * interval);
            }
        }
        // The number in parenthesis sets the number of times it loops
        SpellAnimation(loops)
    }
    cast();
    if (audioEnabled) {
        await wait(audio.delay);
        AudioHelper.play({ src: audio.file, volume: audio.volume, autoplay: true, loop: false }, true);
    }
}

export default meleeExplosion;