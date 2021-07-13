import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import { buildTemplateFile } from "./common-functions/build-filepath.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function templateAnimation(handler, msg) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let templateType = msg?.data?.t ?? type;
    let tempAnimation = await buildTemplateFile(obj01, handler)
    //console.log(videoData.height);
    //console.log(videoData.width);
    //console.log(videoData.duration);

    let videoWidth = tempAnimation.metadata.width;
    //let duration = tempAnimation.metadata.duration * 1000;
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

        switch (templateType) {
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
        new Sequence()
            .effect()
                .file(tempAnimation.file)
                .atLocation({x: template.data.x, y: template.data.y})
                .anchor({x: xAnchor, y: yAnchor})
                .rotate(rotate)
                .scale({x: scaleX, y: scaleY})
                .belowTokens(false)
                .repeats(tempAnimation.loops, tempAnimation.delay)
                .play()
    }   
    cast();
}