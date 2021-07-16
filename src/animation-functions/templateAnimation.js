import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";
import { buildTemplateFile } from "./common-functions/build-filepath.js";
import { socketlibSocket } from "../socketset.js"

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
    let videoHeight = tempAnimation.metadata.height;
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
        let tileWidth;
        let tileHeight;
        let tileX;
        let tileY;

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
                tileWidth = videoWidth * (templateLength / videoWidth);
                tileHeight = videoHeight * (templateLength / videoHeight);
                tileX = template.data.x;
                tileY = template.data.y;
                break;
            case "circle":
                templateW = template.data.distance * 2;
                templateLength = canvas.grid.size * (templateW / canvas.dimensions.distance);
                scaleX = templateLength / videoWidth;
                scaleY = scaleX;
                rotate = -template.data.direction;
                xAnchor = 0.5;
                yAnchor = 0.5;
                tileWidth = videoWidth * (templateLength / videoWidth);
                tileHeight = videoHeight * (templateLength / videoHeight);
                tileX = template.data.x - (tileWidth / 2);
                tileY = template.data.y - (tileHeight / 2);
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
        console.log(handler.templatePersist)
        console.log(handler.templateOpacity)
        if (handler.templatePersist && (handler.templates.tempType === "circle" || handler.templates.tempType === "rect")) {
            let data;
            if (handler.templates.overhead) {
                data = {
                    alpha: handler.templateOpacity,
                    width: tileWidth,
                    height: tileHeight,
                    img: tempAnimation.file2,
                    // false sets it in canvas.background. true sets it to canvas.foreground
                    overhead: true,
                    occlusion: {
                        mode: 3,
                    },
                    video: {
                        autoplay: true,
                        loop: true,
                        volume: 0,
                    },
                    x: tileX,
                    y: tileY,
                    z: 100,
                    }
        } else {
            data = {
                alpha: handler.templateOpacity,
                width: tileWidth,
                height: tileHeight,
                img: tempAnimation.file2,
                // false sets it in canvas.background. true sets it to canvas.foreground
                overhead: false,
                video: {
                    autoplay: true,
                    loop: true,
                    volume: 0,
                },
                x: tileX,
                y: tileY,
                z: 100,
                }
    }
        socketlibSocket.executeAsGM("placeTile", data)
        //const newTile = await canvas.scene.createEmbeddedDocuments("Tile", [data]);    
        } else {
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
        
        if (handler.templates.removeTemplate) {
            canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id])
        }   
        
    }   
    cast();

}