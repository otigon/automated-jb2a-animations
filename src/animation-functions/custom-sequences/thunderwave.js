const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function thunderwave(handler, animationData, config) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    const sourceToken = handler.sourceToken;
    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;

    const twData = data.isAuto ? handler.autorecObject?.thunderwave : handler.flags?.preset?.thunderwave;

    if (!twData) { return; }
    const cleanData = {
        color: twData.color || "blue",
        repeat: twData.repeat || 1,
        delay: twData.delay || 250,
        elevation: twData.elevation ?? 1000,
        opacity: twData.opacity || 1,
        removeTemplate: twData.removeTemplate || false
    }


    let color;
    const colors = ['green', 'orange', 'purple', 'red', 'blue']
    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }
    switch (true) {
        case cleanData.color === "a1" || ``:
            color = "blue";
            break;
        case cleanData.color === "random":
            color = random_item(colors);
            break;
        default:
            color = cleanData.color;
    }

    const template = config ? config : canvas.templates.placeables[canvas.templates.placeables.length - 1];

    let filePath = autoanimations.static.spell.thunderwave;

    const getPosition = getRelativePosition(sourceToken, template)
    const angle = getPosition.angle;
    const anFile = filePath[getPosition.type][color]

    if (cleanData.removeTemplate) {
        canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.id])
    }
    const gridSize = canvas.scene.data.grid;
    let aaSeq = await new Sequence("Automated Animations")
    // Play Macro if Awaiting
    if (data.playMacro && data.macro.playWhen === "1") {
        let userData = data.macro.args;
        aaSeq.macro(data.macro.name, handler.workflow, handler, userData)
    }
    // Extra Effects => Source Token if active
    if (sourceFX.enabled) {
        aaSeq.addSequence(sourceFX.sourceSeq)
    }
    if (data.sound) {
        aaSeq.addSequence(data.sound)
    }
    aaSeq.thenDo(function () {
        Hooks.callAll("aa.animationStart", sourceToken, "no-target")
    })
    aaSeq.effect()
        .file(anFile)
        .atLocation({ x: template.data.x + (gridSize * 1.5), y: template.data.y + (gridSize * 1.5) })
        .anchor({ x: 0.5, y: 0.5 })
        .rotate(angle)
        .opacity(cleanData.opacity)
        .size(3, { gridUnits: true })
        .elevation(cleanData.elevation)
        .repeats(cleanData.repeat, cleanData.repeatDelay)
    if (data.playMacro && data.macro.playWhen === "0") {
        let userData = data.macro.args;
        new Sequence()
            .macro(data.macro.name, handler.workflow, handler, userData)
            .play()
    }
    aaSeq.play()
    await wait(500)
    Hooks.callAll("aa.animationEnd", sourceToken, "no-target")

    function getRelativePosition(token, template) {
        const xPos = token.data.x;
        const yPos = token.data.y;
        const tempY = template.data.y;
        const tempX = template.data.x;
        const gridSize = canvas.scene.data.grid;
        let type;
        let angle;
        switch (true) {
            case ((xPos >= tempX && xPos <= (tempX + (gridSize * 2))) && (yPos >= tempY && yPos <= (tempY + (gridSize * 2)))):
                type = 'center';
                angle = 0;
                break;
            case ((xPos >= (tempX - gridSize)) && (xPos <= (tempX - (gridSize * 0.5)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
                type = 'left';
                angle = 270;
                break;
            case ((xPos >= (tempX + (gridSize * 2.5))) && (xPos <= (tempX + (gridSize * 3)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
                type = 'left';
                angle = 180;
                break;
            case (((xPos >= (tempX + (gridSize * 2.5))) && xPos <= (tempX + (gridSize * 3))) && ((yPos <= (tempY + (gridSize * 3))) && (yPos >= (tempY + (gridSize * 2.5))))):
                type = 'left';
                angle = 90;
                break;
            case ((xPos <= (tempX - (gridSize * 0.5))) && (xPos >= (tempX - gridSize))) && ((yPos <= (tempY + (gridSize * 3))) && (yPos >= (tempY + (gridSize * 2.5)))):
                type = 'left';
                angle = 0;
                break;
            case (xPos >= (tempX + (gridSize * 2.5))) && ((yPos >= tempY) && yPos <= (tempY + (gridSize * 2))):
                type = 'mid';
                angle = 90;
                break;
            case ((xPos >= tempX) && (xPos <= (tempX + (gridSize * 2)))) && ((yPos >= (tempY - gridSize)) && (yPos <= (tempY - (gridSize * 0.5)))):
                type = 'mid';
                angle = 180;
                break;
            case ((xPos >= (tempX - gridSize)) && (xPos <= (tempX - (gridSize * 0.5)))) && ((yPos >= tempY) && yPos <= (tempY + (gridSize * 2))):
                type = 'mid';
                angle = 270;
                break;
            default:
                type = 'mid';
                angle = 0;
        }
        return { type, angle }
    }
}
