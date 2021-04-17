import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function meleeExplosion(handler, target) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02 = 'explosion';
    let obj03 = '01';
    switch (true) {
        case handler.animExVariant === "02":
            obj03 = '02';
            break;
    }
    let color;
    switch (true) {
        case handler.animExColor === "a1" || ``:
        case !handler.animExColor:
            color = 'orange';
            break;
        default:
            color = handler.animExColor;
    }
    let filePath = obj01[obj02][obj03][color];

    let divisor = (1000 * (1/(handler.animExRadius)));
    
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
}

export default meleeExplosion;