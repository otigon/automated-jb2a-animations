import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import getVideoDimensionsOf from "../canvas-animation/video-metadata.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function selfAnimation(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02 = "sneakattack";
    let color = handler.color;
    if (color === "a1" || color === "") {color = "dark green"}
    //console.log(obj01);
    //console.log(obj02);
    //console.log(color);

    let filePath = obj01[obj02][color];
    //console.log(filePath);

    var videoData = await getVideoDimensionsOf(filePath);
    let videoWidth = videoData.width;
    //let duration = videoData.duration * 1000;

    let token = handler.actorToken;
    let Scale = (token.w / videoWidth) * 2;
    //console.log(Scale)

    async function cast() {

        let spellAnim =
        {
            file: filePath,
            position: token.center,
            anchor: {
                x: 0.5,
                y: 0.7
            },
            angle: 0,
            speed: 0,
            scale: {
                x: Scale,
                y: Scale
            }
        };

        canvas.autoanimations.playVideo(spellAnim);
        game.socket.emit('module.autoanimations', spellAnim);
    }
    cast();


}

export default selfAnimation