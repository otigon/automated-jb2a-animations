const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

export async function thunderwave(handler, animationData, config) {

    const sourceToken = handler.sourceToken;
    const data = animationData.primary;
    const sourceFX = animationData.sourceFX;
    const macro = animationData.macro;

    let color = data.color;

    const template = config ? config : canvas.templates.placeables[canvas.templates.placeables.length - 1];
    const templateData = config ? config || {} : template.document || {};
    const trueSize = Math.sqrt(Math.pow(templateData.distance, 2) / 2)

    const getPosition = getRelativePosition(sourceToken, templateData)
    const angle = getPosition.angle;
    const databasePath = color === "random"
        ? `autoanimations.templatefx.square.thunderwave.${getPosition.type}`
        : `autoanimations.templatefx.square.thunderwave.${getPosition.type}.${color}`

    const gridSize = canvas.scene.dimensions.size;

    let aaSeq = await new Sequence(handler.sequenceData)

    // Play Macro if Awaiting
    if (macro && macro.playWhen === "1") {
        handler.complileMacroSection(aaSeq, macro)
    }
    // Extra Effects => Source Token if active
    if (sourceFX) {
        handler.compileSourceEffect(sourceFX, aaSeq)
    }
    // Primary Sound
    if (data.sound) {
        aaSeq.addSequence(data.sound)
    }

    aaSeq.thenDo(function () {
        Hooks.callAll("aa.animationStart", sourceToken, "no-target")
    })
    const effect = aaSeq.effect()
        .file(databasePath)
        //.atLocation({ x: templateData.x + (gridSize * 1.5), y: templateData.y + (gridSize * 1.5) })
        .atLocation(template, { cacheLocation: true })
        .anchor({ x: 0.5, y: 0.5 })
        .rotate(angle)
        .opacity(data.options.opacity)
        .size(3, { gridUnits: true })
        .repeats(data.options.repeat, data.options.repeatDelay)

    if (data.options.elevation === 0) {
        effect.belowTokens(true)
    } else {
        effect.elevation(handler.elevation(sourceToken, data.options.isAbsolute, data.options.elevation), { absolute: data.options.isAbsolute })
    }

    if (macro && macro.playWhen === "0") {
        handler.runMacro(macro)
    }

    if (data.options.removeTemplate) {
        canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.id])
    }

    // Macro if Awaiting Animation. This will respect the Delay/Wait options in the Animation chains
    if (macro && macro.playWhen === "3") {
        handler.complileMacroSection(aaSeq, macro)
    }

    aaSeq.play()

    await wait(500)
    Hooks.callAll("aa.animationEnd", sourceToken, "no-target")

    function getRelativePosition(token, template) {
        const xPos = token.x;
        const yPos = token.y;
        const tempY = template.y;
        const tempX = template.x;
        const gridSize = canvas.scene.dimensions.size;
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
