import { JB2APATREONDB } from "./jb2a-patreon-database.js";
import { JB2AFREEDB } from "./jb2a-free-database.js";

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function divineSmite(handler) {

    let divineSmite = handler.divineSmite;
    let dsSelf = divineSmite.dsSelf;
    let dsSelfColor = divineSmite.dsSelfColor;
    let dsSelfDelay = divineSmite.dsSelfDelay;
    let dsTarget = divineSmite.dsTarget;
    let dsTargetColor = divineSmite.dsTargetColor;
    let dsTargetDelay = divineSmite.dsTargetDelay;

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    let token = handler.actorToken;
    let target = handler.allTargets[0];

    let obj01 = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    let obj02 = 'divinesmite';
    let selfColor;
    let targetColor;
    switch (true) {
        case dsSelfColor === 'a1':
        case dsSelfColor === ``:
            selfColor = 'blue yellow';
            break;
        default:
            selfColor = dsSelfColor;
    }
    switch (true) {
        case dsTargetColor === 'a1':
        case dsTargetColor === ``:
            targetColor = 'blue yellow';
            break;
        default:
            targetColor = dsTargetColor;
    }

    let selfPath = obj01[obj02]['caster'][selfColor];
    let targetPath = obj01[obj02]['target'][targetColor];
    let Scale = canvas.grid.size / 150;
    let selfAnim = {
        file: selfPath,
        position: token.center,
        anchor: {
            x: 0.5,
            y: 0.5
        },
        angle: 0,
        scale: {
            x: Scale,
            y: Scale
        },
        below: true
    }

    let targetAnim;
    if (target) {
        targetAnim = {
            file: targetPath,
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
        }
    }

    async function selfAnimation() {
        await wait(dsSelfDelay);
        canvas.autoanimationsG.playVideo(selfAnim);
        game.socket.emit('module.autoanimations', selfAnim);

    }
    async function targetAnimation() {
        await wait(dsTargetDelay);
        canvas.autoanimations.playVideo(targetAnim);
        game.socket.emit('module.autoanimations', targetAnim);
    }

    if (dsSelf) {
        selfAnimation()
    }

    if (dsTarget && target) {
        targetAnimation()
    }
}
export default divineSmite;