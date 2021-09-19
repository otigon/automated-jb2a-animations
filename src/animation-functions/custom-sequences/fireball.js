
export async function fireball(handler, autoObject) {

    let fireballTemplate = canvas.templates.get(args[0].templateId)
    let tokenD = canvas.tokens.get(args[0].tokenId);

    let templatePosition = fireballTemplate.position;

    fireballTemplate.delete();

    let tileData = [{
        img: "Images/Forgotten_Adventures/Overlays_and_Effects/Blast_Marks/Blast_Mark_Debris_A1_2x2.png",
        width: (7 * canvas.grid.size),
        height: (7 * canvas.grid.size),
        scale: 1,
        x: templatePosition.x - (3.5 * canvas.grid.size),
        y: templatePosition.y - (3.5 * canvas.grid.size),
        z: 10,
        rotation: 0,
        hidden: false,
        locked: false,
        alpha: 0
    }];

    let tile = await canvas.scene.createEmbeddedDocuments("Tile", tileData);

    new Sequence()
        .effect()
            .file("autoanimations.range.firebolt.01.orange")
            .atLocation(tokenD)
            .reachTowards(templatePosition)
            .waitUntilFinished(-1200)
            .JB2A()
        .effect()
            .file("autoanimations.static.shatter.01.red.0")
            .atLocation(templatePosition)
            .JB2A()
            .scale(1.5)
            .timeRange(0, 1200)
            .waitUntilFinished(250)
        .effect()
            .file("autoanimations.static.explosion.01.orange.2")
            .atLocation(templatePosition)
            .JB2A()
            .scale(4)
            .zIndex(1)
        .effect()
            .file("autoanimations.static.explosion.01.orange")
            .atLocation(templatePosition)
            .JB2A()
            .scale(4)
            .zIndex(5)
            .animation()
            .on(tile[0])
            .fadeIn(250)
        .play()
}