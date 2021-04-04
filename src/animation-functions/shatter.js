import colorChecks from "./colorChecks.js"

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function shatterAuto(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;

    let { type01, color } = colorChecks(handler);

    switch (true) {
        case type01 === "default":
            type01 = "01";
        case color === "default":
            color = "Blue";
    }

    async function cast() {

        //Finds the center of the placed circular template and plays an animation using FXMaster
        const templateID = canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
        let template = await canvas.templates.get(templateID);
        // Scaled globally, change divisor for different size animation.
        let Scale = ((canvas.scene.data.grid) / 100);
        // Defines the spell template for FXMaster
        let spellAnim =
        {
            file: `modules/${path00}/Library/2nd_Level/Shatter/Shatter_${type01}_${color}_400x400.webm`,
            position: template.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            scale: {
                x: Scale,
                y: Scale
            }
        };

        async function SpellAnimation(number) {

            let x = number;
            let interval = 1000;
            for (var i = 0; i < x; i++) {
                setTimeout(function () {
                    canvas.fxmaster.playVideo(spellAnim);
                    game.socket.emit('module.fxmaster', spellAnim);
                }, i * interval);
            }
        }
        // The number in parenthesis sets the number of times it loops
        SpellAnimation(4)

        let shockWave =
            [{
                filterType: "wave",
                filterId: "shockWave",
                autoDestroy: true,
                time: 0,
                strength: 0.03,
                frequency: 10,
                maxIntensity: 2.0,
                minIntensity: 0.5,
                padding: 25,
                animated:
                {
                    time:
                    {
                        loopDuration: 900,
                        loops: 5,
                        active: true,
                        speed: 0.0180,
                        animType: "move",
                    }
                }
            }];
        if (game.settings.get("automated-jb2a-animations", "tmfx")) {
            await wait(1400);
            TokenMagic.addUpdateFiltersOnTargeted(shockWave);
        }
    }
    cast();
}

export default shatterAuto;