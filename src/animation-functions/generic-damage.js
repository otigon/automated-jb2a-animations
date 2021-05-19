const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function randomGenDmg(handler) {

    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }

    let path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;
    let globalDelay = game.settings.get("autoanimations", "globaldelay");
    await wait(globalDelay);

    async function cast() {
        var arrayLength = handler.allTargets.length;

        //let tmMacro = "HitStutter";
        var targetCheck = handler.targetAssistant.length;
        let noTargetAnim = `modules/autoanimations/Animations/No_Target_400x400.webm`;
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
            case ((targetCheck === 0) && (game.settings.get("autoanimations", "targetingAssist"))):
                canvas.fxmaster.playVideo(targetTrainer);
                game.socket.emit('module.fxmaster', targetTrainer);
        }

        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let file = `modules/${path00}/Library/Generic/Weapon_Attacks/Melee/`;

            let gd1 = `${file}DmgBludgeoning_01_Regular_Yellow_1handed_800x600.webm`;
            let gd2 = `${file}DmgBludgeoning_01_Regular_Yellow_2handed_800x600.webm`;
            let gd3 = `${file}DmgPiercing_01_Regular_Yellow_1handed_800x600.webm`;
            let gd4 = `${file}DmgPiercing_01_Regular_Yellow_2handed_800x600.webm`;
            let gd5 = `${file}DmgSlashing_01_Regular_Yellow_1handed_800x600.webm`;
            let gd6 = `${file}DmgSlashing_01_Regular_Yellow_2handed_800x600.webm`;


            var itemsA = [gd1, gd2, gd3, gd4, gd5, gd6];

            function random_itemA(itemsA) {
                return itemsA[Math.floor(Math.random() * itemsA.length)];
            }


            // Scaled globally, change divisor to increase/decrease size of animation
            let Scale = canvas.scene.data.grid / 175;
            // randomly mirrors animation
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

            let anim = random_itemA(itemsA);

            function castSpell(effect) {
                canvas.fxmaster.drawSpecialToward(effect, handler.actorToken, target);
            }

            castSpell({
                file: anim,
                anchor: {
                    x: 0.4,
                    y: 0.5,
                },
                speed: 0,
                angle: 0,
                scale: {
                    x: Scale,
                    y: (Scale * plusOrMinus),
                },
            });
            /*
            switch (true) {
                case (game.settings.get("autoanimations", "tmfx")):
                    await wait(500);
                    TokenMagic.addFilters(target, tmMacro);
                    break;
            }
            */

            if (handler.animExplode && handler.animOverride) {
                explodeOnTarget(handler);
            }

        }
    }
    cast();
}

export default randomGenDmg;