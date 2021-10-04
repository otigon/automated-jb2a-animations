import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
import { aaColorMenu } from "../databases/jb2a-menu-options.js";
//import { AAanimationData } from "../../aa-classes/animation-data.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function huntersMark(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;

    const sourceToken = handler.actorToken;
    let target = handler.allTargets[0];
    const hmAnim = handler.variant || "paw";
    let animLoop = hmAnim + "loop";
    let hmPulse = handler.color === 'random' ? `autoanimations.static.huntersmark.${hmAnim}` : `autoanimations.static.huntersmark.${hmAnim}.${handler.color}`;
    function random_item(items) {
        return items[Math.floor(Math.random() * items.length)];
    }
    let ctaColor = handler.color === "random" ? random_item(Object.keys(aaColorMenu.static.huntersmark[animLoop])) : handler.color;
    let hmLoop = jb2a.static.huntersmark[animLoop][ctaColor];
    //const checkAnim = AAanimationData._checkForPersistent(target);
    const checkAnim = Sequencer.EffectManager.getEffects({ object: target, name: "huntersmark" }).length > 0
    //console.log(checkAnim)
    //checkAnim =  checkAnim.length > 0 ? true : false
    const scale = handler.options?.scale || 1
    const finalScale = (canvas.grid.size / 200) * scale
    const anchorX = handler.anchorX || 1;
    const anchorY = handler.anchorY || 1;
    const persist = handler.persistent;

    const playPersist = !checkAnim && persist ? true : false;
    await new Sequence("Automated Animations")
        .effect()
            .file(hmPulse)
            .atLocation(sourceToken)
        .effect()
            .file(hmPulse)
            .atLocation(target)
            .waitUntilFinished()
        .effect()
            .file(hmLoop)
            .attachTo(target)
            .anchor({ x: anchorX, y: anchorY })
            .playIf(playPersist)
            .scale(finalScale)
            .gridSize(canvas.grid.size)
            .belowTokens(false)
            .name("huntersmark")
            .persist(true)
        //.name(target.name)
        //.loopProperty("sprite", "rotation", { values: [0, 360], duration: 6000})
            .loopProperty("sprite", "scale.x", { from: (finalScale * 0.4), to: finalScale, duration: 4000, pingPong: true })
            .loopProperty("sprite", "scale.y", { from: (finalScale * 0.4), to: finalScale, duration: 4000, pingPong: true })
            .loopProperty("sprite", "alpha", { from: 0.25, to: 1, duration: 4000, pingPong: true })
        .play()
        //AAanimationData.removePersistentEffect(target, "huntersmark", canvas.scene.id)
}

export default huntersMark;