import colorChecks from "./colorChecks.js"

let bloodSplat =
    [{
        filterType: "splash",
        filterId: "BloodSplat",
        rank: 5,
        color: 0x990505,
        padding: 80,
        time: Math.random() * 1000,
        seed: Math.random(),
        splashFactor: 1,
        spread: 0.4,
        blend: 1,
        dimX: 1,
        dimY: 1,
        cut: false,
        textureAlphaBlend: true,
        anchorX: 0.32 + (Math.random() * 0.36),
        anchorY: 0.32 + (Math.random() * 0.36)
    }];

let bloodyHitStutter =
    [{
        filterType: "images",
        filterId: "BloodyHitStutter",
        time: 0,
        nbImage: 2,
        alphaImg: 1.0,
        alphaChr: 0.0,
        autoDestroy: true,
        blend: 4,
        ampX: 0.03,
        ampY: 0.03,
        zOrder: 20,
        animated:
        {
            time:
            {
                active: true,
                speed: 0.070,
                animType: "move",
                loopDuration: 200,
                loops: 2
            },
            anchorX:
            {
                animType: "chaoticOscillation",
                loopDuration: 100,
                val1: 0.40,
                val2: 0.60,
                loops: 4
            }
        }
    },
    {
        filterType: "splash",
        filterId: "BloodSplat",
        rank: 5,
        color: 0x990505,
        padding: 80,
        time: Math.random() * 1000,
        seed: Math.random(),
        splashFactor: 1,
        spread: 0.4,
        blend: 1,
        dimX: 1,
        dimY: 1,
        cut: false,
        textureAlphaBlend: true,
        anchorX: 0.32 + (Math.random() * 0.36),
        anchorY: 0.32 + (Math.random() * 0.36)
    }];

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function creatureAttacks(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let { type01, tint, color } = colorChecks(handler);

    switch (true) {
        case (type01 === "default"):
            type01 = "01";
        case (tint === "default"):
            tint = "Regular";
        case (color === "default"):
            color = "Red";
    }

    let tmMacro;
    let path;

    async function cast() {
        var arrayLength = handler.allTargets.length;

        var targetCheck = handler.targetAssistant.length;
        let noTargetAnim = `modules/automated-jb2a-animations/Animations/No_Target_400x400.webm`;
        let myToken = handler.actorToken;
        let targetTrainer =
        {
            file: noTargetAnim,
            position: myToken.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            scale: {
                x: 0.25,
                y: 0.25
            }
        }

        switch (true) {
            case ((targetCheck === 0) && (game.settings.get("automated-jb2a-animations", "targetingAssist"))):
                canvas.fxmaster.playVideo(targetTrainer);
                game.socket.emit('module.fxmaster', targetTrainer);
        }

        for (var i = 0; i < arrayLength; i++) {
            //log(handler.allTargets[i]);
            let target = handler.allTargets[i];
            let tarScale;
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemClaw").toLowerCase()):
                    path = "Claws";
                    tmMacro = bloodSplat;
                    tarScale = ((target.data.width + target.data.height) / 4);
                    break;
                case (handler.itemNameIncludes("bite")):
                case handler.itemNameIncludes(game.i18n.format("AUTOANIM.itemBite").toLowerCase()):
                    path = "Bite";
                    tmMacro = bloodyHitStutter;
                    tarScale = ((target.data.width + target.data.height) / 2);
                    break;
            }
            let spellAnim =
            {
                //                         File path to animation
                file: `modules/${path00}/Library/Generic/Creature/${path}_${type01}_${tint}_${color}_400x400.webm`,
                position: target.center,
                anchor: {
                    x: 0.5,
                    y: 0.5
                },
                angle: 0,
                scale: {
                    x: tarScale,
                    y: tarScale
                }
            };
            canvas.fxmaster.playVideo(spellAnim);
            game.socket.emit('module.fxmaster', spellAnim);

            if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                await wait(250);
                TokenMagic.addFilters(target, tmMacro);
                await wait(2000);
                TokenMagic.deleteFilters(target, "BloodSplat");
            }
        }
    }
    cast();
}

export default creatureAttacks;
