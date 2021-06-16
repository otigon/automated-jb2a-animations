import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function templateEffects(handler, msg) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    let type = handler.templates.tempType;
    let obj03 = msg?.data?.t ?? type;
    let anim = handler.templates.tempAnim;
    let color = handler.templates.tempColor;
    let loop = handler.templates.tempLoop;

    let filePath = obj01['templates'][type][anim][color];

    function getVideoDimensionsOf(url) {
        return new Promise(resolve => {
            // create the video element
            const video = document.createElement('video');
            video.preload = "metadata";

            // place a listener on it
            video.addEventListener("loadedmetadata", function () {
                // retrieve dimensions
                const height = this.videoHeight;
                const width = this.videoWidth;
                const duration = this.duration
                // send back result
                resolve({ height, width, duration });
            }, false);
            video.src = url;

        });
    }
    var videoData = await getVideoDimensionsOf(filePath)
    //console.log(videoData.height);
    //console.log(videoData.width);
    //console.log(videoData.duration);

    let videoHeight = videoData.height;
    let videoWidth = videoData.width;
    let duration = videoData.duration * 1000;
    //console.log(duration);

    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {
        //Finds the center of the placed circular template and plays an animation using FXMaster
        const templateID = canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
        let template;
        if (game.data.version === "0.7.9" || game.data.version === "0.7.10") {
            template = await canvas.templates.get(templateID);
        } else {
            template = await canvas.templates.documentCollection.get(templateID);
        }
        //console.log(template);
        let templateW;
        let templateLength;
        let scaleX;
        let scaleY;
        let rotate;
        let xAnchor;
        let yAnchor;

        switch (obj03) {
            case "ray":
                templateW = template.data.distance;
                templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
                scaleX = templateLength / videoWidth;
                scaleY = 1;
                rotate = -template.data.direction;
                xAnchor = 0;
                yAnchor = 0.5;
                break;
            case "rect":
                templateW = template.data.width;
                templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
                scaleX = templateLength / videoWidth;
                scaleY = scaleX;
                rotate = 0;
                xAnchor = 0;
                yAnchor = 0;
                break;
            case "circle":
                templateW = template.data.distance * 2;
                templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
                scaleX = templateLength / videoWidth;
                scaleY = scaleX;
                rotate = -template.data.direction;
                xAnchor = 0.5;
                yAnchor = 0.5;
                break;
            case "cone":
                templateW = template.data.distance;
                templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
                scaleX = templateLength / videoWidth;
                scaleY = scaleX * (template.data.angle * 0.0223);
                rotate = -template.data.direction;
                xAnchor = 0;
                yAnchor = 0.5;
                break;
        }
        //console.log(scaleY);
        //console.log(scaleX);
        let spellAnim =
        {
            file: filePath,
            position: {
                x: template.data.x,
                y: template.data.y
            },
            anchor: {
                x: xAnchor,
                y: yAnchor
            },
            angle: rotate,
            scale: {
                x: scaleX,
                y: scaleY
            }
        };
        async function loopAnimation(number) {
            let x = number;
            let interval = duration;
            for (var i = 0; i < x; i++) {
                setTimeout(function () {
                    canvas.autoanimations.playVideo(spellAnim);
                    game.socket.emit('module.autoanimations', spellAnim);
                }, i * interval)
            }
        }
        loopAnimation(loop)
    }
    cast();
}

export default templateEffects;