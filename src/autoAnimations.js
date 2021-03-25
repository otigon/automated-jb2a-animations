import Dnd5Handler from "./system-handlers/dnd5-handler.js";
import MidiHandler from "./system-handlers/midi-handler.js";
import Pf1Handler from "./system-handlers/pf1-handler.js";
import { AnimationTab } from "./item-sheet-handlers/item-sheet-config.js";

// just swap which of these two lines is commented to turn on/off all logging
//const log = console.log.bind(window.console);
const log = () => { };

Hooks.on('init', () => {
    game.settings.register("automated-jb2a-animations", "runonlyonce", { // game.setting.register("NameOfTheModule", "VariableName",
        name: "Disable the Startup Window Popup",                  // Register a module setting with checkbox
        hint: "Checking this box will prevent the Popup Window from showing its ugly mug",               // Description of the settings
        scope: "world",                                    // This specifies a client-stored setting
        config: true,                                       // This specifies that the setting appears in the configuration view
        type: Boolean,
        default: false,                                     // The default value for the setting
    });
    game.settings.register("automated-jb2a-animations", "hideFromPlayers", { // game.setting.register("NameOfTheModule", "VariableName",
        name: "Hide the Animation Tab from Players",                  // Register a module setting with checkbox
        hint: "Checking this box will prevent the Animation Tab from being seen by Players",               // Description of the settings
        scope: "world",                                    // This specifies a client-stored setting
        config: true,                                       // This specifies that the setting appears in the configuration view
        type: Boolean,
        default: false,                                     // The default value for the setting
    });
    game.settings.register("automated-jb2a-animations", "tmfx", {
        name: 'Enable Token Magic FX',
        hint: "Enables all Token Magic effects with the animations",
        scope: 'world',
        type: Boolean,
        default: false,
        config: true,
    });
    switch (game.system.id) {
        case "dnd5e":
            if (game.modules.get("midi-qol")?.active) {
                game.settings.register("automated-jb2a-animations", "playonhit", {
                    name: 'Only play animations on Hits',
                    hint: "Requires Midi-QOL Workflow setting HITS to be enables with Check",
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
                game.settings.register("automated-jb2a-animations", "playonDamage", {
                    name: 'Only play animations on Damage Rolls',
                    hint: "REQUIRES A REFRESH. When Enabled, this will ONLY play the animaitons on the Damage Roll",
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
            } else {
                game.settings.register("automated-jb2a-animations", "playonDamageCore", {
                    name: 'Play Attack Animations on Damage Rolls Only',
                    hint: "By Default, Animations play on Attack Rolls",
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
            }
    }
    game.settings.register("automated-jb2a-animations", "EnableShield", {
        name: 'Enable Shield Spell Animation',
        hint: "Shield is set to a test animaiton, but still looks cool. Check this to enable it",
        scope: 'world',
        type: Boolean,
        default: false,
        config: true,
    });
    if (game.modules.get("midi-qol")?.active) {
        log("midi IS active");
        switch (game.settings.get("automated-jb2a-animations", "playonDamage")) {
            case (true):
                Hooks.on("midi-qol.DamageRollComplete", (workflow) => { revItUpMidi(workflow) })
                break;
            case (false):
                Hooks.on("midi-qol.RollComplete", (workflow) => { revItUpMidi(workflow) })
                break;
        }
    } else {
        switch (game.system.id) {
            case "pf1":
                Hooks.on("createChatMessage", async (msg) => { onCreateChatMessage(msg) });
                break;
            case "dnd5e":
                Hooks.on("createChatMessage", async (msg) => { revItUp5eCore(msg) });
        }
        //Hooks.on("createMeasuredTemplate", async (msg) => { getTemplateParams(msg) });
    }
    path00 = moduleIncludes("jb2a_patreon") === true ? `jb2a_patreon` : `JB2A_DnD5e`;
})

Hooks.on(`renderItemSheet`, (app, html, data) => {
    if (!game.user.isGM && game.settings.get("automated-jb2a-animations", "hideFromPlayers")) {
        return;
    }
    AnimationTab.bind(app, html, data);
});


Hooks.once('ready', function () {
    if (game.user.isGM && (!game.modules.get("JB2A_DnD5e") && !game.modules.get("jb2a_patreon"))) {
        ui.notifications.error("A JB2A Module (Free OR Patreon) is REQUIRED for Automated Animations to Work");
    }
    if (game.user.isGM && game.modules.get("tokenmagic")?.active) {
        game.settings.set("tokenmagic", "fxPlayerPermission", true);
    }
});

const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

var path00;


function moduleIncludes(test) {
    return !!game.modules.get(test);
}

function onCreateChatMessage(msg) {
    log('onCreateChatMessage', msg);


    //const mreFlavor = msg.data.content.toLowerCase();
    //const isAttack = rollType.includes("attack") || mreFlavor.includes("attack roll");
    //log(isAttack ? "this is an attack roll" : "this is NOT an attack roll");

    let handler = new Pf1Handler(msg);

    revItUp(handler)
}

function revItUpMidi(workflow) {
    let handler = new MidiHandler(workflow);
    revItUp(handler);
}

function revItUp5eCore(msg) {
    let handler = new Dnd5Handler(msg);

    const rollType = (msg.data?.flags?.dnd5e?.roll?.type?.toLowerCase() ?? msg.data?.flavor?.toLowerCase() ?? "pass");
    const mreFlavor = msg.data.content.toLowerCase();
    if (game.settings.get("automated-jb2a-animations", "playonDamageCore") == true) {
        if (rollType.includes("damage")) {
            //const itemType = myToken.actor.items.get(itemId).data.type.toLowerCase();
            if (game.modules.get("mre-dnd5e")?.active) {
                log("MRE is active");
                if (handler.itemIncludes("xxx")) {
                } else {
                    switch (game.settings.get("mre-dnd5e", "autoDamage")) {
                        case (true):
                            switch (true) {
                                case (handler.itemNameIncludes("thunderwave")):
                                    Hooks.once("createMeasuredTemplate", () => {
                                        thunderwaveAuto(handler);
                                    })
                                    break;
                                case (handler.itemNameIncludes("shatter")):
                                    Hooks.once("createMeasuredTemplate", () => {
                                        shatterAuto(handler);
                                    })
                                    break;
                                case (handler.itemNameIncludes("grenade")):
                                case (handler.itemNameIncludes("bomb")):
                                case (handler.animType  === "t9"):
                                    Hooks.once("createMeasuredTemplate", () => {
                                        explodeTemplate(handler);
                                    })
                                    break;
                                default:
                                    revItUp(handler);
                            }
                            break;
                        case (false):
                            revItUp(handler);
                            break;
                    }
                }

            } else {
                log("MRE is NOT active");
                revItUp(handler);
            }
        }
        switch (true) {
            case (handler.itemTypeIncludes("spell") && handler.itemNameIncludes("shield")):
                castOnSelf(handler);
                break;
        }
    }

    if (game.settings.get("automated-jb2a-animations", "playonDamageCore") == false) {
        if (rollType.includes("damage")) {
            log("damage roll");
        } else
            if (rollType.includes("attack") || mreFlavor.includes("attack roll")) {
                revItUp(handler)
            } else /*if (game.settings.get("automated-jb2a-animations", "playonDamageCore") == false)*/ {
                if (handler.itemIncludes("xxx")) {
                } else {
                    switch (true) {
                        case (handler.itemNameIncludes("cure", "wound")):
                        case (handler.itemNameIncludes("heal", "word")):
                            onTargetSpells(handler);
                            break;
                        case (handler.itemNameIncludes("disintegrate")):
                            spellAttacks(handler);
                            break;
                        case (handler.itemNameIncludes("magic", "missile")):
                            magicMissile(handler);
                            break;
                        case (handler.itemNameIncludes("shield")):
                        case (handler.itemNameIncludes("second", "wind")):
                        case (handler.itemNameIncludes("potion", "heal")):
                            castOnSelf(handler);
                            break;
                        case (handler.itemNameIncludes("catapult")):
                            rangedWeapons(handler);
                            break;
                        //case (handler.itemNameIncludes("boulder")):
                        //case (handler.itemNameIncludes("siege")):
                        //rangedWeapons(handler)
                        //break;
                        case (handler.itemNameIncludes("thunderwave")):
                            Hooks.once("createMeasuredTemplate", () => {
                                thunderwaveAuto(handler);
                            })
                            break;
                        case (handler.itemNameIncludes("shatter")):
                            Hooks.once("createMeasuredTemplate", () => {
                                shatterAuto(handler);
                            })
                            break;
                        case (handler.itemNameIncludes("explode")):
                        case (handler.itemNameIncludes("grenade")):
                        case (handler.itemNameIncludes("bomb")):
                        case (handler.itemNameIncludes("fireball") && handler.itemSourceIncludes("explode")):
                            Hooks.once("createMeasuredTemplate", () => {
                                explodeTemplate(handler);
                            })
                            break;
                    }
                }
            }
    }

}

async function revItUp(handler) {
    switch (true) {
        // Use xxx in Item Source Field to exclude an item for On-Use customization
        case (handler.itemIncludes("xxx")):
        case (handler.animKill):
            break;
        case handler.itemNameIncludes("rapier"):
        case handler.itemNameIncludes("sword"):
        case handler.itemNameIncludes("greatclub"):
        case handler.itemNameIncludes("greataxe"):
        case handler.itemNameIncludes("battle", "axe"):
        case handler.itemNameIncludes("mace"):
        case handler.itemNameIncludes("maul"):
        case handler.itemNameIncludes("scimitar"):
        case handler.itemNameIncludes("1 handed slashing"):
        case handler.itemNameIncludes("2 handed slashing"):
        case handler.itemNameIncludes("1 handed bludgeoning"):
        case handler.itemNameIncludes("2 handed bludgeoning"):
        case handler.itemNameIncludes("1 handed piercing"):
        case handler.itemNameIncludes("2 handed piercing"):
            meleeWeapons(handler);
            break;
        case (handler.itemNameIncludes("dagger")):
        case (handler.itemNameIncludes("hand", "axe")):
        case (handler.itemNameIncludes("spear")):
            meleeRangeSwitch(handler);
            break;
        case (handler.itemNameIncludes("arrow")):
        case (handler.itemNameIncludes("bow")):
            arrowOptionExplode(handler);
            break;
        case (handler.itemNameIncludes("hammer")):
        case (handler.itemNameIncludes("siege")):
        case (handler.itemNameIncludes("boulder")):
        case (handler.itemNameIncludes("laser")):
        case (handler.itemNameIncludes("javelin")):
        case (handler.itemNameIncludes("sling")):
            rangedWeapons(handler);
            break;
        case (handler.itemNameIncludes("thunderwave")):
            thunderwaveAuto(handler);
            break;
        case (handler.itemNameIncludes("shatter")):
            shatterAuto(handler);
            break;
        case (handler.itemNameIncludes("magic missile")):
            magicMissile(handler);
            break;
        case (handler.itemNameIncludes("cure", "wounds")):
        case (handler.itemNameIncludes("heal", "word")):
        case (handler.itemNameIncludes("generic", "heal")):
            onTargetSpells(handler);
            break;
        case (handler.itemNameIncludes("fire", "bolt")):
        case (handler.itemNameIncludes("ray", "frost")):
        case (handler.itemNameIncludes("witch", "bolt")):
        case (handler.itemNameIncludes("eldritch blast")):
        case (handler.itemNameIncludes("scorching", "ray")):
        case (handler.itemNameIncludes("disintegrate")):
            spellAttacks(handler);
            break;
        case (handler.itemNameIncludes("shield")):
            castOnSelf(handler);
            break;
        case (handler.itemNameIncludes("boulder")):
        case (handler.itemNameIncludes("siege")):
        case (handler.itemNameIncludes("laser")):
        case (handler.itemNameIncludes("sling")):
            rangedWeapons(handler);
            break;
        case (handler.itemNameIncludes("arrow")):
        case (handler.itemNameIncludes("bow")):
            arrowOptionExplode(handler);
            break;
        case (handler.itemNameIncludes("grenade")):
        case (handler.itemNameIncludes("bomb")):
        case (handler.animType === "t8"):
            explodeTemplate(handler);
            break;
        case (handler.itemNameIncludes("bite")):
        case (handler.itemNameIncludes("claw")):
            creatureAttacks(handler);
            break;
        case (handler.animType === "t9"):
            explodeOnTarget(handler);
            break;
        case (handler.itemNameIncludes("potion", "heal")):
            castOnSelf(handler);
            break;
        case (handler.itemNameIncludes("second", "wind")):
            castOnSelf(handler);
            break;
    }
}

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

let hitStutter =
    [{
        filterType: "images",
        filterId: "HitStutter",
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
    }];

function colorChecks(handler) {
    let type01 = "01";
    let tint = "Regular";
    let color;
    switch (true) {
        case (handler.itemNameIncludes("laser")):
            color = "Blue";
            break;
        default:
            color = "White";
    }
    let fireColor = "pass";

    switch (true) {
        case (handler.itemColorIncludes("white")):
            type01 = "01";
            tint = "Regular";
            color = "White";
            break;
        case (handler.itemColorIncludes("purple")):
            type01 = "Fire";
            switch (true) {
                case (handler.itemNameIncludes("laser", "sword")):
                    tint = "Regular";
                    break;
                default:
                    tint = "Dark";
                    break;
            }
            color = "Purple";
            fireColor = 0x8B00C0;
            break;
        case (handler.itemColorIncludes("blue")):
            type01 = "Fire";
            tint = "Regular";
            color = "Blue";
            fireColor = 0x008FC0;
            break;
        case (handler.itemColorIncludes("green")):
            type01 = "Fire";
            tint = "Regular";
            color = "Green";
            fireColor = 0x60EA01;
            break;
        case (handler.itemColorIncludes("orange")):
            type01 = "Fire";
            tint = "Regular";
            color = "Orange";
            fireColor = 0xF18A07;
            break;
        case (handler.itemColorIncludes("pink")):
            type01 = "Fire";
            tint = "Regular";
            color = "Pink";
            fireColor = 0xD2049A;
            break;
        case (handler.itemColorIncludes("darkred")):
            type01 = "Fire";
            tint = "Dark";
            color = "Red";
            fireColor = 0x610101;
            break;
        case (handler.itemColorIncludes("red")):
            type01 = "Fire";
            tint = "Regular";
            color = "Red";
            fireColor = 0xD20404;
            break;
        case (handler.itemColorIncludes("yellow")):
            type01 = "Fire";
            tint = "Regular";
            color = "Yellow";
            fireColor = 0xCFD204;
            break;
    }
    return { type01, tint, color, fireColor };
}

async function meleeWeapons(handler) {
    let { type01, tint, color, fireColor } = colorChecks(handler);

    console.log(color);

    let burn =
        [{
            filterType: "xfire",
            filterId: "meleeBurn",
            autoDestroy: true,
            time: 0,
            color: fireColor,
            blend: 1,
            amplitude: 1,
            dispersion: 0,
            chromatic: false,
            scaleX: 1,
            scaleY: 1,
            inlay: false,
            animated:
            {
                time:
                {
                    loopDuration: 500,
                    loops: 3,
                    active: true,
                    speed: -0.0015,
                    animType: "move"
                }
            }
        }];

    // delay before activating the Token Magic FX Macros, change inside the switch cases to adjust the timing
    let tmDelay = 1000;
    // delay before deleting Token Magic FX if needed, change inside switch cases to adjust the deletion
    let tmKill = 1000;
    // calls a Token Magic FX macro defined above, change inside the switch cases to desired TMFX
    let tmMacro = "HitStutter";

    let item01 = "Dagger02";
    switch (true) {
        case (handler.itemNameIncludes("rapier")):
            item01 = "Rapier01";
            tmDelay = 900;
            tmKill = 1600;
            tmMacro = bloodSplat;
            break;
        case (handler.itemNameIncludes("greatsword")):
            item01 = "GreatSword01";
            tmDelay = 1600;
            tmKill = 1600;
            tmMacro = bloodyHitStutter;
            break;
        case (handler.itemNameIncludes("greatclub")):
            item01 = "GreatClub01";
            tmDelay = 1100;
            tmKill = 1600;
            tmMacro = bloodyHitStutter;
            break;
        case (handler.itemNameIncludes("greataxe")):
        case (handler.itemNameIncludes("battle", "axe")):
            item01 = "GreatAxe01";
            tmDelay = 1600;
            tmKill = 1600;
            tmMacro = bloodyHitStutter;
            break;
        case (handler.itemNameIncludes("mace")):
            item01 = "Mace01";
            tmDelay = 1100;
            tmKill = 1600;
            tmMacro = bloodyHitStutter;
            break;
        case (handler.itemNameIncludes("lasersword")):
            item01 = "LaserSword01";
            type01 = "01";
            tmDelay = 1300;
            tmKill = 1600;
            tmMacro = bloodSplat;
            break;
        case (handler.itemNameIncludes("sword")):
        case (handler.itemNameIncludes("scimitar")):
            item01 = "Sword01";
            tmDelay = 1300;
            tmKill = 1600;
            tmMacro = bloodSplat;
            break;
        case (handler.itemNameIncludes("maul")):
            item01 = "Maul01";
            tmDelay = 1900;
            tmKill = 1600;
            tmMacro = bloodyHitStutter;
            break;
        case handler.itemNameIncludes("1 handed slashing"):
            item01 = "DmgSlashing";
            color = "Yellow_1Handed";
            break;
        case handler.itemNameIncludes("2 handed slashing"):
            item01 = "DmgSlashing";
            color = "Yellow_2Handed";
            tmDelay = 500;
            tmKill = 750;
            tmMacro = hitStutter;
            break;
        case handler.itemNameIncludes("1 handed piercing"):
            item01 = "DmgPiercing";
            color = "Yellow_1Handed";
            break;
        case handler.itemNameIncludes("2 handed piercing"):
            item01 = "DmgPiercing";
            color = "Yellow_2Handed";
            tmDelay = 200;
            tmKill = 500;
            tmMacro = hitStutter;
            break;
        case handler.itemNameIncludes("1 handed bludgeoning"):
            item01 = "DmgBludgeoning";
            color = "Yellow_1Handed";
            tmDelay = 500;
            tmKill = 750;
            tmMacro = hitStutter;
            break;
        case handler.itemNameIncludes("2 handed bludgeoning"):
            item01 = "DmgBludgeoning";
            color = "Yellow_2Handed";
            tmDelay = 500;
            tmKill = 750;
            tmMacro = hitStutter;
            break;
    }


    async function cast() {
        var arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {
            let target = handler.allTargets[i];

            let idsSearch = handler.actorToken.actor.data.items.filter(item => item.type === `feat`).map(item => item.name);

            function actorIncludes(test) {
                if (idsSearch.includes(test)) return true;
            }

            let dsBoom = `modules/${path00}/Library/Generic/Explosion/Explosion_02_Blue_400x400.webm`;
            let dsScale = canvas.scene.data.grid / 400;
            let spellAnim2 =
            {
                file: dsBoom,
                position: target.center,
                anchor: {
                    x: 0.5,
                    y: 0.5
                },
                angle: 0,
                scale: {
                    x: dsScale,
                    y: dsScale
                }
            };

            // Scaled globally, change divisor to increase/decrease size of animation
            let Scale = canvas.scene.data.grid / 175;
            // randomly mirrors animation
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

            let file = `modules/${path00}/Library/Generic/Weapon_Attacks/Melee`;

            let anim = `${file}/${item01}_${type01}_${tint}_${color}_800x600.webm`;

            function castSpell(effect) {
                game.user.targets.forEach((i, t) => {
                    canvas.fxmaster.drawSpecialToward(effect, handler.actorToken, t);

                });
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


            switch (true) {
                case (actorIncludes("Improved Divine Smite")):
                    await wait(tmDelay - 300);
                    canvas.fxmaster.playVideo(spellAnim2);
                    game.socket.emit('module.fxmaster', spellAnim2);
                    if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                        await wait(250);
                        switch (true) {
                            case (fireColor != "pass"):
                                TokenMagic.addUpdateFilters(target, burn);
                                await wait(50);
                                TokenMagic.addUpdateFilters(target, tmMacro);
                                break;
                            default:
                                TokenMagic.addUpdateFilters(target, tmMacro);
                                break;
                        }
                    }
                    break;
                default:
                    if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                        await wait(tmDelay);
                        switch (true) {
                            case (fireColor != "pass"):
                                TokenMagic.addFilters(target, burn);
                                await wait(50);
                                TokenMagic.addFilters(target, tmMacro);
                                break;
                            default:
                                TokenMagic.addFilters(target, tmMacro);
                                break;
                        }
                    }
            }
            await wait(tmKill);
            if (game.settings.get("automated-jb2a-animations", "tmfx")) {
            TokenMagic.deleteFilters(target, "BloodSplat");
            }
            // await wait(50);
            // TokenMagic.deleteFilters(target, "meleeBurn");
        }
    }
    cast();
}


async function meleeRangeSwitch(handler) {
    let type01 = "01";
    let tint = "Regular";
    let color = "White";
    let fireColor = "pass";

    switch (true) {
        case (handler.itemColorIncludes("white")):
            type01 = "01";
            tint = "Regular";
            color = "White";
            break;
        case (handler.itemColorIncludes("purple")):
            type01 = "Fire";
            tint = "Dark";
            color = "Purple";
            fireColor = "0x8B00C0";
            break;
        case (handler.itemColorIncludes("blue")):
            type01 = "Fire";
            tint = "Regular";
            color = "Blue";
            fireColor = "0x008FC0";
            break;
        case (handler.itemColorIncludes("green")):
            type01 = "Fire";
            tint = "Regular";
            color = "Green";
            fireColor = "0x60EA01";
            break;
        case (handler.itemColorIncludes("orange")):
            type01 = "Fire";
            tint = "Regular";
            color = "Orange";
            fireColor = "0xF18A07";
            break;
        case (handler.itemColorIncludes("pink")):
            type01 = "Fire";
            tint = "Regular";
            color = "Pink";
            fireColor = "0xD2049A";
            break;
        case (handler.itemColorIncludes("red")):
            type01 = "Fire";
            tint = "Regular";
            color = "Red";
            fireColor = "0xD20404";
            break;
        case (handler.itemColorIncludes("yellow")):
            type01 = "Fire";
            tint = "Regular";
            color = "Yellow";
            fireColor = "0xCFD204";
            break;
    }

    let burn =
        [{
            filterType: "xfire",
            filterId: "meleeBurn",
            autoDestroy: true,
            time: 0,
            color: fireColor,
            blend: 1,
            amplitude: 1,
            dispersion: 0,
            chromatic: false,
            scaleX: 1,
            scaleY: 1,
            inlay: false,
            animated:
            {
                time:
                {
                    loopDuration: 500,
                    loops: 3,
                    active: true,
                    speed: -0.0015,
                    animType: "move"
                }
            }
        }];

    // delay before activating the Token Magic FX Macros, change inside the switch cases to adjust the timing
    let tmdelay = 1000;
    let Delay01;
    let Delay02;
    let Delay03;
    // delay before deleting Token Magic FX if needed, change inside switch cases to adjust the deletion
    let tmkill = 1000;
    // calls a Token Magic FX macro defined above, change inside the switch cases to desired TMFX
    let tmMacro = bloodSplat;
    let item11;
    let item01 = "Dagger02";
    switch (true) {
        case (handler.itemNameIncludes("handaxe")):
            item01 = "HandAxe02";
            item11 = "HandAxe01";
            tmMacro = bloodSplat;
            tmdelay = 1250;
            tmkill = 1500;
            Delay01 = 600;
            Delay02 = 900;
            Delay03 = 900;
            break;
        case (handler.itemNameIncludes("dagger")):
            item01 = "Dagger02";
            item11 = "Dagger01";
            tmMacro = bloodSplat;
            tmdelay = 1000;
            tmkill = 1500;
            Delay01 = 600;
            Delay02 = 600;
            Delay03 = 600;
            break;
        case (handler.itemNameIncludes("spear")):
            item01 = "Spear01";
            item11 = "Spear01";
            tmMacro = bloodSplat;
            tmdelay = 1000;
            tmkill = 1500;
            Delay01 = 600;
            Delay02 = 1150;
            Delay03 = 850;
            break;
    }

    switch (true) {
        case (handler.animDagThrVar.includes("kunai")):
            item11 = "Kunai01";
            Delay01 = 600;
            Delay02 = 600;
            Delay03 = 600;
            break;
        case (handler.animDagThrVar.includes("02")):
            item11 = "Dagger02";
            Delay01 = 600;
            Delay02 = 600;
            Delay03 = 600;
            break;
    }

    async function cast() {
        var arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            let target = handler.allTargets[i];

            let distance = handler.getDistanceTo(target);

            //log(distance);
            let range;
            switch (true) {
                case (handler.actorRace === "bugbear"):
                    range = 10;
                    break;
                default:
                    range = 5;
                    break;
            }

            let reach;
            switch (true) {
                case (handler.reachCheck):
                    reach = 5;
                    break;
                default:
                    reach = 0;
                    break;
            }

            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;

            let file;
            let anFile;
            let anFileSize;
            let anchorX;
            let anScale;
            let anScaleY;
            let Scale;
            let spellAnim;

            let path01 = `modules/${path00}/Library/Generic/Weapon_Attacks`;

            switch (true) {
                case (distance > (range + reach)):
                    file = `${path01}/Ranged/`;
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = `${file}/${item11}_01_Regular_White_15ft_1000x400.webm`;
                            anchorX = 0.2;
                            tmdelay = Delay01;
                            break;
                        case (anDist > 1200):
                            anFileSize = 1800;
                            anFile = `${file}/${item11}_01_Regular_White_45ft_2200x400.webm`;
                            anchorX = 0.091;
                            tmdelay = Delay02;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = `${file}/${item11}_01_Regular_White_30ft_1600x400.webm`;
                            anchorX = 0.125;
                            tmdelay = Delay03;
                            break;
                    }
                    anScale = anDist / anFileSize;
                    anScaleY = anDist <= 600 ? 0.6 : anScale;

                    spellAnim =
                    {
                        file: anFile,
                        position: handler.actorToken.center,
                        anchor: {
                            x: anchorX,
                            y: 0.5
                        },
                        angle: anDeg,
                        scale: {
                            x: anScale,
                            y: anScaleY
                        }
                    };

                    canvas.fxmaster.playVideo(spellAnim);
                    game.socket.emit('module.fxmaster', spellAnim);
                    if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                        await wait(tmdelay);
                        TokenMagic.addFilters(target, tmMacro)
                        await wait(tmkill);
                        TokenMagic.deleteFilters(target, "BloodSplat");
                    }
                    break;
                default:
                    // log("in range");
                    Scale = canvas.scene.data.grid / 175;
                    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
                    function castSpell(effect) {
                        game.user.targets.forEach((i, t) => {
                            canvas.fxmaster.drawSpecialToward(effect, handler.actorToken, t);

                        });
                    }
                    file = `${path01}/Melee/`;

                    castSpell({
                        file: `${file}${item01}_${type01}_${tint}_${color}_800x600.webm`,
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
                    if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                        await wait(tmdelay);
                        switch (true) {
                            case (fireColor != "pass"):
                                TokenMagic.addFilters(target, burn);
                                await wait(25);
                                //game.macros.getName(tmMacro).execute();
                                TokenMagic.addFilters(target, tmMacro);
                                break;
                            default:
                                TokenMagic.addFilters(target, tmMacro);
                        }
                        await wait(tmkill);
                        //TokenMagic.deleteFilters(target, "meleeBurn");
                        //await wait(50);
                        TokenMagic.deleteFilters(target, "BloodSplat");
                        break;
                    }
            }

        }
    }
    cast();
}


async function spellAttacks(handler) {
    let tint;
    let color;
    let tmColor;
    let path;
    let path2;

    switch (true) {
        case (handler.itemNameIncludes("fire", "bolt")):
            path = "Cantrip/Fire_Bolt";
            path2 = "FireBolt_01";
            tint = "Regular";
            color = "Orange";
            tmColor = 0xFF9309;
            break;
        case (handler.itemNameIncludes("ray", "frost")):
            path = "Cantrip/Ray_Of_Frost";
            path2 = "RayOfFrost_01";
            tint = "Regular";
            color = "Blue";
            tmColor = 0xBBDDEE;
            break;
        case (handler.itemNameIncludes("witch", "bolt")):
            path = "1st_Level/Witch_Bolt";
            path2 = "WitchBolt_01";
            tint = "Regular";
            color = "Blue";
            tmColor = 0xAE00AE;
            break;
        case (handler.itemNameIncludes("scorching", "ray")):
            path = "2nd_Level/Scorching_Ray";
            path2 = "ScorchingRay_01";
            tint = "Regular";
            color = "Orange";
            tmColor = 0xFF9309;
            break;
        case (handler.itemNameIncludes("disintegrate")):
            path = "6th_Level/Disintegrate";
            path2 = "Disintegrate_01";
            tint = "Regular";
            color = "Green01";
            tmColor = 0x00AFC1;
            break;
        case (handler.itemNameIncludes("eldritch blast")):
            path = "Cantrip/Eldritch_Blast";
            path2 = "EldritchBlast_01";
            tint = "Regular";
            color = "Purple";
            break;
    }

    switch (true) {
        case (handler.itemColorIncludes("orange", "pink")):
            tint = "Regular";
            color = "OrangePink";
            tmColor = 0xC1005B;
            break;
        case (handler.itemColorIncludes("purple", "blue")):
            tint = "Regular";
            color = "PurpleBlue";
            tmColor = 0x00AFC1;
            break;
        case (handler.itemColorIncludes("dark", "purple")):
            tint = "Dark";
            color = "Purple";
            tmColor = 0xAE00AE;
            break;
        case (handler.itemColorIncludes("dark", "green")):
            tint = "Dark";
            color = "Green";
            tmColor = 0x187C00;
            break;
        case (handler.itemColorIncludes("dark", "red")):
            tint = "Dark";
            color = "Red";
            tmColor = 0x8E0000;
            break;
        case (handler.itemColorIncludes("blue", "yellow")):
            tint = "Regular";
            color = "BlueYellow";
            tmColor = 0xACC5C5;
            break;
        case (handler.itemColorIncludes("purple", "teal")):
            tint = "Regular";
            color = "PurpleTeal";
            tmColor = 0xC38CDC;
            break;
        case (handler.itemColorIncludes("orange")):
            tint = "Regular";
            color = "Orange";
            tmColor = 0xFF9309;
            break;
        case (handler.itemColorIncludes("green")):
            tint = "Regular";
            switch (true) {
                case (handler.itemNameIncludes("disintegrate")):
                    color = "Green01";
                    break;
                default:
                    color = "Green";
                    break;
            }
            tmColor = 0x59E81F;
            break;
        case (handler.itemColorIncludes("blue")):
            tint = "Regular";
            color = "Blue";
            tmColor = 0xBBDDEE;
            break;
        case (handler.itemColorIncludes("purple")):
            tint = "Regular";
            color = "Purple";
            tmColor = 0xFF09E1;
            break;
        case (handler.itemColorIncludes("red")):
            switch (true) {
                case (handler.itemNameIncludes("fire", "bolt")):
                    tint = "Dark";
                    break;
                default:
                    tint = "Regular";
            }
            color = "Red";
            tmColor = 0xBB1414;
            break;
        case (handler.itemColorIncludes("yellow")):
            tint = "Regular";
            color = "Yellow";
            tmColor = 0xFF0000;
            break;
    }

    let letitBurn =
        [{
            filterType: "xfire",
            filterId: "letitBurn",
            autoDestroy: true,
            time: 0,
            // Can change color in hex format
            color: tmColor,
            blend: 1,
            amplitude: 1,
            dispersion: 0,
            chromatic: false,
            scaleX: 1,
            scaleY: 1,
            inlay: false,
            animated:
            {
                time:
                {
                    loopDuration: 750,
                    loops: 1,
                    active: true,
                    speed: -0.0015,
                    animType: "move"
                }

            }
        }];
    let frosty =
        [{
            filterType: "xfire",
            filterId: "Frosty",
            autoDestroy: true,
            color: tmColor,
            time: 0,
            blend: 5,
            amplitude: 1,
            dispersion: 0,
            chromatic: false,
            scaleX: 1,
            scaleY: 1,
            inlay: true,
            animated:
            {
                time:
                {
                    loopDuration: 1400,
                    loops: 1,
                    active: true,
                    speed: -0.0020,
                    animType: "move"
                }

            }
        }];
    let ashes =
        [{
            filterType: "fire",
            filterId: "Ashes",
            autoDestroy: true,
            intensity: 3,
            color: tmColor,
            amplitude: 2,
            time: 0,
            blend: 15,
            fireBlend: 1,
            alphaDiscard: true,
            zOrder: 50,
            animated:
            {
                time:
                {
                    loopDuration: 1000,
                    loops: 2,
                    active: true,
                    speed: -0.0024,
                    animType: "move"
                }
            }
        }];
    let electric =
        [{
            filterType: "electric",
            filterId: "Witchy",
            autoDestroy: true,
            color: tmColor,
            time: 0,
            blend: 2,
            intensity: 3,
            animated:
            {
                time:
                {
                    loopDuration: 1000,
                    loops: 4,
                    active: true,
                    speed: 0.0020,
                    animType: "move"
                }

            }
        }];

    let tmDelay;
    let tmKill;
    let tmMacro;

    switch (true) {
        case (handler.itemNameIncludes("fire", "bolt")):
            //tmDelay = 1000;
            //tmKill = 500;
            //tmMacro = letitBurn;
            break;
        case (handler.itemNameIncludes("ray", "frost")):
            tmDelay = 750;
            tmKill = 2000;
            tmMacro = frosty;
            break;
        case (handler.itemNameIncludes("witch", "bolt")):
            tmDelay = 50;
            tmKill = 4000;
            tmMacro = electric;
            break;
        case (handler.itemNameIncludes("scorching", "ray")):
            tmDelay = 500;
            tmKill = 750;
            tmMacro = letitBurn;
            break;
        case (handler.itemNameIncludes("disintegrate")):
            tmDelay = 500;
            tmKill = 2000;
            tmMacro = ashes;
            break;
    }

    async function cast() {
        var arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {
            let target = handler.allTargets[i];
            //log(target.id);
            let saves;
            function saveCheck(test) {
                if (saves?.includes(test)) return true;
            }

            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;

            let file = `modules/${path00}/Library/${path}`;

            let anFile;
            let anFileSize = 600;
            let anchorX = 0.2;

            switch (true) {
                case (handler.itemNameIncludes("fire", "bolt")):
                case (handler.itemNameIncludes("scorching", "ray")):
                case (handler.itemNameIncludes("eldritch blast")):
                    switch (true) {
                        case (anDist <= 1600):
                            anFileSize = 1200;
                            anFile = `${file}/${path2}_${tint}_${color}_30ft_1600x400.webm`;
                            anchorX = 0.125;
                            break;
                        case (anDist > 4000):
                            anFileSize = 3600;
                            anFile = `${file}/${path2}_${tint}_${color}_90ft_4000x400.webm`;
                            anchorX = 0.05;
                            break;
                        default:
                            anFileSize = 2400;
                            anFile = `${file}/${path2}_${tint}_${color}_60ft_2800x400.webm`;
                            anchorX = 0.071;
                            break;
                    }
                    break;
                case (handler.itemNameIncludes("ray", "frost")):
                case (handler.itemNameIncludes("disintegrate")):
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = `${file}/${path2}_${tint}_${color}_15ft_1000x400.webm`;
                            anchorX = 0.2;
                            break;
                        case (anDist > 1200):
                            anFileSize = 1800;
                            anFile = `${file}/${path2}_${tint}_${color}_45ft_2200x400.webm`;
                            anchorX = 0.091;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = `${file}/${path2}_${tint}_${color}_30ft_1600x400.webm`;
                            anchorX = 0.125;
                            break;
                    }
                    break;
                case (handler.itemNameIncludes("witch bolt")):
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = `${file}/${path2}_${tint}_${color}_15ft_1000x400.webm`;
                            anchorX = 0.2;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = `${file}/${path2}_${tint}_${color}_30ft_1600x400.webm`;
                            anchorX = 0.125;
                            break;
                    }
                    break;
            }

            let anScale = anDist / anFileSize;
            //let anScaleY = anDist <= 600 ? 0.6 : anScale;

            let anScaleY = anScale;
            if (anDist <= 300) { anScaleY = 0.7 }
            if (anDist >= 400 && anDist <= 600) { anScaleY = anScale * 0.9 }
            if (anDist >= 700 && anDist <= 900) { anScaleY = 0.8 }
            if (anDist >= 1000 && anDist <= 1200) { anScaleY = anScale * 0.9 }
            if (anDist >= 1300 && anDist <= 1500) { anScaleY = 0.6 }
            if (anDist >= 1600 && anDist <= 1800) { anScaleY = 0.8 }
            if (anDist >= 1800) { anScaleY = anScale }


            let spellAnim =
            {
                file: anFile,
                position: handler.actorToken.center,
                anchor: {
                    x: anchorX,
                    y: 0.5
                },
                angle: anDeg,
                scale: {
                    x: anScale,
                    y: anScaleY
                }
            };

            handler.allTargets.forEach(async (i) => {
                canvas.fxmaster.playVideo(spellAnim);
                game.socket.emit('module.fxmaster', spellAnim);
                if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                    switch (true) {
                        case (saveCheck(target.id)):
                            break;
                        default:
                            await wait(tmDelay);
                            TokenMagic.addFilters(target, tmMacro);
                    }
                }

            });


        }
    }
    cast();
}


async function creatureAttacks(handler) {
    let type01 = "01";
    let tint = "Regular";
    let color = "Red";

    switch (true) {
        case (handler.itemColorIncludes("darkred")):
            type01 = "01";
            tint = "Dark";
            color = "Red";
            break;
        case (handler.itemColorIncludes("red")):
            type01 = "01";
            tint = "Regular";
            color = "Red";
            break;
        case (handler.itemColorIncludes("yellow")):
            type01 = "01";
            switch (true) {
                case (handler.itemNameIncludes("bite")):
                    tint = "Regular";
                    break;
                default:
                    tint = "Bright";
                    break;
            }
            color = "Yellow";
            break;
        case (handler.itemColorIncludes("purple")):
            type01 = "01";
            switch (true) {
                case (handler.itemNameIncludes("bite")):
                    tint = "Regular";
                    break;
                default:
                    tint = "Bright";
                    break;
            }
            color = "Purple";
            break;
        case (handler.itemColorIncludes("orange")):
            type01 = "01";
            switch (true) {
                case (handler.itemNameIncludes("bite")):
                    tint = "Regular";
                    break;
                default:
                    tint = "Bright";
                    break;
            }
            color = "Orange";
            break;
        case (handler.itemColorIncludes("green")):
            type01 = "01";
            switch (true) {
                case (handler.itemNameIncludes("bite")):
                    tint = "Regular";
                    break;
                default:
                    tint = "Bright";
                    break;
            }
            color = "Green";
            break;
        case (handler.itemColorIncludes("blue")):
            type01 = "01";
            switch (true) {
                case (handler.itemNameIncludes("bite")):
                    tint = "Regular";
                    break;
                default:
                    tint = "Bright";
                    break;
            }
            color = "Blue";
            break;
    }

    let tmMacro;
    let path;


    async function cast() {
        var arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {
            //log(handler.allTargets[i]);
            let target = handler.allTargets[i];
            let tarScale;
            switch (true) {
                case (handler.itemNameIncludes("claw")):
                    path = "Claws";
                    tmMacro = bloodSplat;
                    tarScale = ((target.data.width + target.data.height) / 4);
                    break;
                case (handler.itemNameIncludes("bite")):
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


async function rangedWeapons(handler) {
    let type01 = "01";
    let tint = "Regular";
    let tmColor = 0xFF9309;
    let color;
    switch (true) {
        case (handler.itemNameIncludes("laser")):
            color = "Blue";
            tmColor = 0x0075B0;
            break;
        default:
            color = "White";
            break;
    }
    let tmDelay;

    switch (true) {
        case (handler.itemColorIncludes("white")):
            type01 = "01";
            tint = "Regular";
            color = "White";
            break;
        case (handler.itemColorIncludes("blue")):
            type01 = "01";
            tint = "Regular";
            color = "Blue";
            tmColor = 0x0075B0;
            break;
        case (handler.itemColorIncludes("green")):
            type01 = "01";
            switch (true) {
                case (handler.itemNameIncludes("arrow")):
                case (handler.itemNameIncludes("bow")):
                    tint = "Glowing";
                    break;
                default:
                    tint = "Regular"
                    break;
            }
            color = "Green";
            tmColor = 0x0EB400;
            break;
        case (handler.itemColorIncludes("orange")):
            type01 = "01";
            tint = "Regular";
            color = "Orange";
            tmColor = 0xBF6E00;
            break;
        case (handler.itemColorIncludes("red")):
            type01 = "01";
            tint = "Regular";
            color = "Red";
            tmColor = 0xBF0000;
            break;

    }
    /*
        let Poison =
            [{
                filterType: "smoke",
                filterId: "Poison",
                color: 0x50FFAA,
                time: 0,
                blend: 2,
                dimX: 1,
                dimY: 1,
                animated:
                {
                    time:
                    {
                        active: true,
                        speed: 0.0015,
                        animType: "move"
                    }
                }
            }];
    */
    let colorWave =
        [{
            filterType: "wave",
            filterId: "colorWave",
            autoDestroy: true,
            time: 0,
            strength: 0.03,
            frequency: 15,
            maxIntensity: 4.0,
            minIntensity: 0.5,
            padding: 25,
            animated:
            {
                time:
                {
                    loopDuration: 750,
                    loops: 2,
                    active: true,
                    speed: 0.0180,
                    animType: "move",
                }
            }
        },
        {
            filterType: "xfire",
            filterId: "colorWave",
            autoDestroy: true,
            time: 0,
            color: tmColor,
            blend: 1,
            amplitude: 1,
            dispersion: 0,
            chromatic: false,
            scaleX: 1,
            scaleY: 1,
            inlay: false,
            animated:
            {
                time:
                {
                    loopDuration: 750,
                    loops: 2,
                    active: true,
                    speed: -0.0015,
                    animType: "move"
                }
            }
        }];

    let tmMacro = "pass";

    switch (true) {
        case (handler.itemColorIncludes("white")):
            tmMacro = bloodSplat;
            break;
    }

    let path01 = "Dagger02";
    let size = "400";
    let Delay01 = 900;
    let Delay02 = 900;
    let Delay03 = 900;
    switch (true) {
        case (handler.itemNameIncludes("hammer")):
            path01 = "Hammer01";
            tmMacro = hitStutter;
            Delay01 = 600;
            Delay02 = 800;
            Delay03 = 800;
            break;
        case (handler.itemNameIncludes("siege")):
            path01 = "SiegeBoulder01";
            tmMacro = hitStutter;
            Delay01 = 750;
            Delay02 = 1250;
            Delay03 = 1150;
            size = "500";
            break;
        case (handler.itemNameIncludes("boulder")):
            path01 = "BoulderToss01";
            tmMacro = hitStutter
            size = "500";
            Delay01 = 1250;
            Delay02 = 1750;
            Delay03 = 1550;
            break;
        case (handler.itemNameIncludes("laser")):
            path01 = "LaserShot";
            tmMacro = colorWave;
            Delay01 = 500;
            Delay02 = 500;
            Delay03 = 500;
            break;
        case (handler.itemNameIncludes("sling")):
            path01 = "SlingShot";
            Delay01 = 2000;
            Delay02 = 2300;
            Delay03 = 2000;
            break;
        case (handler.itemNameIncludes("javelin")):
            path01 = "Javelin01";
            tmMacro = bloodSplat;
            Delay01 = 750;
            Delay02 = 1250;
            Delay03 = 1050;
            break;
    }

    async function cast() {
        var arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {

            await wait(500)

            let target = handler.allTargets[i];

            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;

            let file = `modules/${path00}/Library/Generic/Weapon_Attacks/Ranged`;

            let anFile = `${file}/${path01}_${type01}_${tint}_${color}_15ft_1000x${size}.webm`;
            let anFileSize = 600;
            let anchorX = 0.2;
            switch (true) {
                case (handler.itemNameIncludes("hammer")):
                case (handler.itemNameIncludes("kunai")):
                case (handler.itemNameIncludes("sling")):
                    anFile = `${file}/${path01}_${type01}_${tint}_${color}_15ft_1000x${size}.webm`;
                    anFileSize = 600;
                    anchorX = 0.2;
                    switch (true) {
                        case (anDist <= 600):
                            anFileSize = 600;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_15ft_1000x${size}.webm`;
                            anchorX = 0.2;
                            tmDelay = Delay01;
                            break;
                        case (anDist > 1200):
                            anFileSize = 1800;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_45ft_2200x${size}.webm`;
                            anchorX = 0.091;
                            tmDelay = Delay02;
                            break;
                        default:
                            anFileSize = 1200;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_30ft_1600x${size}.webm`;
                            anchorX = 0.125;
                            tmDelay = Delay03;
                            break;
                    }
                    break;
                case (handler.itemNameIncludes("arrow")):
                case (handler.itemNameIncludes("bow")):
                case (handler.itemNameIncludes("siege")):
                case (handler.itemNameIncludes("boulder")):
                case (handler.itemNameIncludes("javelin")):
                case (handler.itemNameIncludes("laser")):
                    anFile = `${file}/${path01}_${type01}_${tint}_${color}_30ft_1600x${size}.webm`;
                    anFileSize = 600;
                    anchorX = 0.125;
                    switch (true) {
                        case (anDist <= 1200):
                            anFileSize = 1200;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_30ft_1600x${size}.webm`;
                            anchorX = 0.125;
                            tmDelay = Delay01;
                            break;
                        case (anDist > 2400):
                            anFileSize = 3600;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_90ft_4000x${size}.webm`;
                            anchorX = 0.05;
                            tmDelay = Delay02;
                            break;
                        default:
                            anFileSize = 2400;
                            anFile = `${file}/${path01}_${type01}_${tint}_${color}_60ft_2800x${size}.webm`;
                            anchorX = 0.071;
                            tmDelay = Delay03;
                            break;
                    }
                    break;
            }

            let anScale = anDist / anFileSize;
            let anScaleY = anDist <= 600 ? 0.6 : anScale;
            /*
            let anScaleY = anScale;
            if (anDist <= 300) { anScaleY = 0.75 }
            if (anDist >= 400 && anDist <= 600) { anScaleY = anScale * 0.9 }
            if (anDist >= 700 && anDist <= 900) { anScaleY = 0.8 }
            if (anDist >= 1000 && anDist <= 1200) { anScaleY = anScale * 0.9 }
            if (anDist >= 1300 && anDist <= 1500) { anScaleY = 0.6 }
            if (anDist >= 1600 && anDist <= 1800) { anScaleY = 0.8 }
            if (anDist >= 1800) { anScaleY = anScale }
*/

            let spellAnim =
            {
                file: anFile,
                position: handler.actorToken.center,
                anchor: {
                    x: anchorX,
                    y: 0.5
                },
                angle: anDeg,
                scale: {
                    x: anScale,
                    y: anScaleY
                }
            };

            let Repeater = 1;
            switch (true) {
                case (handler.itemNameIncludes("laser")):
                    Repeater = 3;
                    break;
                default:
                    Repeater = 1;
                    break;
            }

            async function SpellAnimation(number) {

                let x = number;
                let interval = 250;
                for (var i = 0; i < x; i++) {
                    setTimeout(function () {
                        canvas.fxmaster.playVideo(spellAnim);
                        game.socket.emit('module.fxmaster', spellAnim);
                    }, i * interval);
                }
                if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                    await wait(interval * x + 1500);
                    TokenMagic.deleteFilters(target, "BloodSplat");
                }
            }
            SpellAnimation(Repeater)
            if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                switch (true) {
                    case (tmMacro === "pass"):
                        break;
                    default:
                        await wait(tmDelay);
                        TokenMagic.addFilters(target, tmMacro);
                        break;
                }
            }
        }
    }
    cast();
}


async function thunderwaveAuto(handler) {
    let type01 = "01";
    let tint = "Bright";
    let color = "Blue";
    //let tmColor = 0x0075B0;

    switch (true) {
        case (handler.itemColorIncludes("blue")):
            type01 = "01";
            tint = "Bright";
            color = "Blue";
            //tmColor = 0x0075B0;
            break;
        case (handler.itemColorIncludes("green")):
            type01 = "01";
            tint = "Bright";
            color = "Green";
            //tmColor = 0x15CA00;
            break;
        case (handler.itemColorIncludes("orange")):
            type01 = "01";
            tint = "Bright";
            color = "Orange";
            //tmColor = 0xD17506;
            break;
        case (handler.itemColorIncludes("purple")):
            type01 = "01";
            tint = "Dark";
            color = "Purple";
            //tmColor = 0xA90092;
            break;
        case (handler.itemColorIncludes("red")):
            type01 = "01";
            tint = "Dark";
            color = "Red";
            //tmColor = 0xC10000;
            break;

    }

    const templateID = await canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
    let template = await canvas.templates.get(templateID);
    let gridSize = canvas.scene.data.grid;
    let Scale = canvas.scene.data.grid / 200;
    let file = `modules/${path00}/Library/1st_Level/Thunderwave/`;

    let anFile = `${file}Thunderwave_${type01}_${tint}_${color}_BMid_600x600.webm`;
    let ang = 0;
    switch (true) {
        case ((handler.actorToken.data.x >= template.x && handler.actorToken.data.x <= (template.x + (gridSize * 2))) && (handler.actorToken.data.y >= template.y && handler.actorToken.data.y <= (template.y + (gridSize * 2)))):
            ang = 0;
            anFile = `${file}Thunderwave_${type01}_${tint}_${color}_Center_600x600.webm`;
            break;
        case ((handler.actorToken.data.x >= (template.x - gridSize)) && (handler.actorToken.data.x <= (template.x - (gridSize * 0.5)))) && ((handler.actorToken.data.y >= (template.y - gridSize)) && (handler.actorToken.data.y <= (template.y - (gridSize * 0.5)))):
            ang = 270;
            anFile = `${file}Thunderwave_${type01}_${tint}_${color}_BLeft_600x600.webm`;
            break;
        case ((handler.actorToken.data.x >= (template.x + (gridSize * 2.5))) && (handler.actorToken.data.x <= (template.x + (gridSize * 3)))) && ((handler.actorToken.data.y >= (template.y - gridSize)) && (handler.actorToken.data.y <= (template.y - (gridSize * 0.5)))):
            ang = 180;
            anFile = `${file}Thunderwave_${type01}_${tint}_${color}_BLeft_600x600.webm`;
            break;
        case (((handler.actorToken.data.x >= (template.x + (gridSize * 2.5))) && handler.actorToken.data.x <= (template.x + (gridSize * 3))) && ((handler.actorToken.data.y <= (template.y + (gridSize * 3))) && (handler.actorToken.data.y >= (template.y + (gridSize * 2.5))))):
            ang = 90;
            anFile = `${file}Thunderwave_${type01}_${tint}_${color}_BLeft_600x600.webm`;
            break;
        case ((handler.actorToken.data.x <= (template.x - (gridSize * 0.5))) && (handler.actorToken.data.x >= (template.x - gridSize))) && ((handler.actorToken.data.y <= (template.y + (gridSize * 3))) && (handler.actorToken.data.y >= (template.y + (gridSize * 2.5)))):
            ang = 0;
            anFile = `${file}Thunderwave_${type01}_${tint}_${color}_BLeft_600x600.webm`;
            break;
        case (handler.actorToken.data.x === (template.x + (gridSize * 3))) && ((handler.actorToken.data.y >= template.y) && handler.actorToken.data.y <= (template.y + (gridSize * 2))):
            ang = 90;
            break;
        case ((handler.actorToken.data.x >= template.x) && (handler.actorToken.data.x <= (template.x + (gridSize * 2)))) && ((handler.actorToken.data.y >= (template.y - gridSize)) && (handler.actorToken.data.y <= (template.y - (gridSize * 0.5)))):
            ang = 180;
            break;
        case ((handler.actorToken.data.x >= (template.x - gridSize)) && (handler.actorToken.data.x <= (template.x - (gridSize * 0.5)))) && ((handler.actorToken.data.y >= template.y) && handler.actorToken.data.y <= (template.y + (gridSize * 2))):
            ang = 270;
            break;
    }

    let spellAnim =
    {
        file: anFile,
        position: {
            x: (template.x + (gridSize * 1.5)),
            y: (template.y + (gridSize * 1.5))
        },
        anchor: {
            x: 0.5,
            y: 0.5
        },
        angle: ang,
        scale: {
            x: Scale,
            y: Scale
        }
    };

    async function spellAnimation(number) {

        let x = number;
        // This is the interval in between the start of each animation on the loop in milliseconds
        let interval = 750;
        for (var i = 0; i < x; i++) {
            setTimeout(function () {
                canvas.fxmaster.playVideo(spellAnim);
                game.socket.emit('module.fxmaster', spellAnim);
            }, i * interval);
        }
    }
    spellAnimation(5);

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
        await wait(500);
        TokenMagic.addUpdateFiltersOnTargeted(shockWave);
    }
}


async function shatterAuto(handler) {
    let type01 = "01";
    let color = "Blue";
    //let tmColor = 0x0075B0;

    switch (true) {
        case (handler.itemColorIncludes("blue")):
            type01 = "01";
            color = "Blue";
            //tmColor = 0x0075B0;
            break;
        case (handler.itemColorIncludes("green")):
            type01 = "01";
            color = "Green";
            //tmColor = 0x0EB400;
            break;
        case (handler.itemColorIncludes("orange")):
            type01 = "01";
            color = "Orange";
            //tmColor = 0xBF6E00;
            break;
        case (handler.itemColorIncludes("purple")):
            type01 = "01";
            color = "Purple";
            //tmColor = 0xBF0099;
            break;
        case (handler.itemColorIncludes("red")):
            type01 = "01";
            color = "Red";
            //tmColor = 0xBF0000;
            break;

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


async function onTargetSpells(handler) {
    let type01 = "01";
    let color = "Blue";
    let tmColor = 0x107BD9;

    switch (true) {
        case (handler.itemColorIncludes("blue")):
            type01 = "01";
            color = "Blue";
            tmColor = 0x107BD9;
            break;
        case (handler.itemColorIncludes("green")):
            type01 = "01";
            color = "Green";
            tmColor = 0x7BDA35;
            break;
        case (handler.itemColorIncludes("purple")):
            type01 = "01";
            color = "Purple";
            tmColor = 0x9400CB;
            break;
        case (handler.itemColorIncludes("red")):
            type01 = "01";
            color = "Red";
            tmColor = 0xE12C2C;
            break;
        case (handler.itemColorIncludes("yellow")):
            type01 = "01";
            color = "Yellow";
            tmColor = 0xE4B700;
            break;
    }
    let path01;
    let path02;
    switch (true) {
        case (handler.itemNameIncludes("cure", "wound")):
            path01 = "1st_Level/Cure_Wounds";
            path02 = "CureWounds";
            break;
        case (handler.itemNameIncludes("heal", "word")):
        case (handler.itemNameIncludes("generic", "heal")):
            path01 = "Generic/Healing";
            path02 = "HealingAbility";
            break;
    }

    async function cast() {
        var arrayLength;
        if (handler.allTargets.length === 0) {
            arrayLength = 1;
        } else {
            arrayLength = handler.allTargets.length;
        }
        //var arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {
            let target;
            if (handler.allTargets.length === 0) {
                target = handler.actorToken;
            } else target = handler.allTargets[i];
            //let target = handler.allTargets[i];

            let tokenSize = target.actor.data.data.traits.size;
            log(tokenSize);
            let divisor = 375;
            switch (true) {
                case (tokenSize === "lg"):
                    switch (true) {
                        case (handler.itemNameIncludes("heal")):
                            divisor = 125;
                            break;
                        case (handler.itemNameIncludes("cure")):
                            divisor = 165;
                            break;
                        default:
                            divisor = 187;
                            break;
                    }
                    break;
                case (tokenSize === "huge"):
                    switch (true) {
                        case (handler.itemNameIncludes("heal")):
                            divisor = 100;
                            break;
                        case (handler.itemNameIncludes("cure")):
                            divisor = 115;
                            break;
                        default:
                            divisor = 125;
                            break;
                    }
                    break;
                case (tokenSize === "sm"):
                case (tokenSize === "med"):
                default:
                    switch (true) {
                        case (handler.itemNameIncludes("heal")):
                            divisor = 275;
                            break;
                        case (handler.itemNameIncludes("cure")):
                            divisor = 325;
                            break;
                        default:
                            divisor = 375;
                            break;
                    }
                    break;
            }
            let scale = canvas.scene.data.grid / divisor;

            // Defining spell animation for FX Master
            let spellAnim =
            {
                file: `modules/${path00}/Library/${path01}/${path02}_${type01}_${color}_400x400.webm`,
                position: target.center,
                anchor: {
                    x: 0.5,
                    y: 0.5
                },
                angle: 0,
                scale: {
                    x: scale,
                    y: scale
                }
            };
            canvas.fxmaster.playVideo(spellAnim);
            game.socket.emit('module.fxmaster', spellAnim);

            let Holy =
                [{
                    filterType: "outline",
                    filterId: "myOutline",
                    autoDestroy: true,
                    padding: 10,
                    color: tmColor,
                    thickness: 1,
                    quality: 5,
                    zOrder: 9,
                    animated:
                    {
                        thickness:
                        {
                            active: true,
                            loopDuration: 800,
                            loops: 4,
                            animType: "syncCosOscillation",
                            val1: 1,
                            val2: 6
                        }
                    }
                }];
            if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                TokenMagic.addUpdateFiltersOnTargeted(Holy);
            }
        }
    }
    cast();
}


async function magicMissile(handler) {
    let type01 = "01";
    let tint = "Regular";
    let color = "Purple";
    let shockWave =
        [{
            filterType: "wave",
            filterId: "shockWave",
            autoDestroy: true,
            time: 0,
            strength: 0.03,
            frequency: 15,
            maxIntensity: 4.0,
            minIntensity: 0.5,
            padding: 25,
            animated:
            {
                time:
                {
                    loopDuration: 500,
                    loops: 3,
                    active: true,
                    speed: 0.0180,
                    animType: "move",
                }
            }
        }];

    async function cast() {
        var arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {
            let target = handler.allTargets[i];

            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;

            async function spellAnimation(number) {

                let x = number;
                let interval = 500;
                for (var i = 0; i < x; i++) {
                    setTimeout(function () {
                        let c1 = "Blue";
                        let c2 = "Green";
                        let c3 = "Purple";
                        let c4 = "Yellow";

                        var items = [c1, c2, c3, c4];

                        function random_color(items) {
                            return items[Math.floor(Math.random() * items.length)];
                        }

                        switch (true) {
                            case (handler.itemColorIncludes("blue")):
                                type01 = "01";
                                tint = "Regular";
                                color = "Blue";
                                break;
                            case (handler.itemColorIncludes("green")):
                                type01 = "01";
                                tint = "Regular";
                                color = "Green";
                                break;
                            case (handler.itemColorIncludes("purple")):
                                type01 = "01";
                                tint = "Regular";
                                color = "Purple";
                                break;
                            case (handler.itemColorIncludes("yellow")):
                                type01 = "01";
                                tint = "Regular";
                                color = "Yellow";
                                break;
                            case (handler.itemColorIncludes("random")):
                                type01 = "01";
                                tint = "Regular";
                                color = random_color(items);
                                break;
                        }


                        let file = `modules/${path00}/Library/1st_Level/Magic_Missile/`;

                        let mmA = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_01_1600x400.webm`;
                        let mmB = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_02_1600x400.webm`;
                        let mmC = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_03_1600x400.webm`;
                        let mmD = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_04_1600x400.webm`;
                        let mmE = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_05_1600x400.webm`;
                        let mmF = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_06_1600x400.webm`;
                        let mmG = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_07_1600x400.webm`;
                        let mmH = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_08_1600x400.webm`;
                        let mmI = `${file}MagicMissile_${type01}_${tint}_${color}_30ft_09_1600x400.webm`;

                        let mmAA = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_01_2800x400.webm`;
                        let mmBB = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_02_2800x400.webm`;
                        let mmCC = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_03_2800x400.webm`;
                        let mmDD = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_04_2800x400.webm`;
                        let mmEE = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_05_2800x400.webm`;
                        let mmFF = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_06_2800x400.webm`;
                        let mmGG = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_07_2800x400.webm`;
                        let mmHH = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_08_2800x400.webm`;
                        let mmII = `${file}MagicMissile_${type01}_${tint}_${color}_60ft_09_2800x400.webm`;

                        var itemsA = [mmA, mmB, mmC, mmD, mmE, mmF, mmG, mmH, mmI];
                        var itemsB = [mmAA, mmBB, mmCC, mmDD, mmEE, mmFF, mmGG, mmHH, mmII];


                        function random_itemA(itemsA) {
                            return itemsA[Math.floor(Math.random() * itemsA.length)];
                        }
                        function random_itemB(itemsB) {
                            return itemsB[Math.floor(Math.random() * itemsB.length)];
                        }



                        let anFile = random_itemA(itemsA);
                        let anFileSize = 600;
                        let anchorX = 0.125;
                        switch (true) {
                            case (anDist <= 1800):
                                anFileSize = 1200;
                                anFile = random_itemA(itemsA);
                                anchorX = 0.125;
                                break;
                            default:
                                anFileSize = 2400;
                                anFile = random_itemB(itemsB);
                                anchorX = 0.071;
                                break;
                        }

                        let anScale = anDist / anFileSize;
                        let anScaleY = anDist <= 600 ? 0.6 : anScale;

                        let spellAnim =
                        {
                            file: anFile,
                            position: handler.actorToken.center,
                            anchor: {
                                x: anchorX,
                                y: 0.5
                            },
                            angle: anDeg,
                            scale: {
                                x: anScale,
                                y: anScaleY
                            }
                        };
                        canvas.fxmaster.playVideo(spellAnim);
                        game.socket.emit('module.fxmaster', spellAnim);
                    }, i * interval);
                }
            }
            spellAnimation(3)
            if (game.settings.get("automated-jb2a-animations", "tmfx")) {
                // Activates the Token Magic FX after a delay
                await wait(1000)
                TokenMagic.addFilters(target, shockWave);
            }
        }
    }
    cast();
}


async function explodeTemplate(handler) {
    let type01 = "01";
    let color = "Orange";
    let tmColor = 0x0075B0;

    switch (true) {
        case (handler.animExColor.includes("blue")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type01 = "02";
                    break;
            }
            color = "Blue";
            tmColor = 0x0075B0;
            break;
        case (handler.animExColor.includes("green")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type01 = "02";
                    break;
            }
            color = "Green";
            tmColor = 0x0EB400;
            break;
        case (handler.animExColor.includes("orange")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type01 = "02";
                    break;
            }
            color = "Orange";
            tmColor = 0xBF6E00;
            break;
        case (handler.animExColor.includes("purple")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type01 = "02";
                    break;
            }
            color = "Purple";
            tmColor = 0xBF0099;
            break;
        case (handler.animExColor.includes("yellow")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type01 = "02";
                    break;
            }
            color = "Yellow";
            tmColor = 0xCFD204;
            break;
    }
    let divisor = 100;
    switch (true) {
        case (handler.animExRadius.includes("05")):
            divisor = 200;
            break;
        case (handler.animExRadius.includes("10")):
            divisor = 100;
            break;
        case (handler.animExRadius.includes("15")):
            divisor = 67;
        case (handler.animExRadius.includes("20")):
            divisor = 50;
            break;
        case (handler.animExRadius.includes("25")):
            divisor = 40;
            break;
        case (handler.animExRadius.includes("30")):
            divisor = 33;
            break;
        case (handler.animExRadius.includes("35")):
            divisor = 28.5;
            break;
        case (handler.animExRadius.includes("40")):
            divisor = 25;
            break;
        case (handler.animExRadius.includes("45")):
            divisor = 22.2;
            break;
        case (handler.animExRadius.includes("50")):
            divisor = 20;
            break;
        case (handler.animExRadius.includes("nuclear")):
            divisor = 10;
            break;
    }

    async function cast() {
        //Finds the center of the placed circular template and plays an animation using FXMaster
        const templateID = canvas.templates.placeables[canvas.templates.placeables.length - 1].data._id;
        let template = await canvas.templates.get(templateID);
        // Scaled globally, change divisor for different size animation.
        let Scale = (canvas.scene.data.grid / divisor);
        //var handler.allTargets = Array.from(lastArg.targets);
        //let target = handler.allTargets[i];

        // Defines the spell template for FXMaster
        let spellAnim =
        {
            file: `modules/${path00}/Library/Generic/Explosion/Explosion_${type01}_${color}_400x400.webm`,
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
        SpellAnimation(3)

        let shockWave =
            [{
                filterType: "wave",
                filterId: "shockWave",
                autoDestroy: true,
                time: 0,
                strength: 0.03,
                frequency: 15,
                maxIntensity: 4.0,
                minIntensity: 0.5,
                padding: 25,
                animated:
                {
                    time:
                    {
                        loopDuration: 500,
                        loops: 5,
                        active: true,
                        speed: 0.0180,
                        animType: "move",
                    }
                }
            }];
        if (game.settings.get("automated-jb2a-animations", "tmfx")) {
            await wait(400);
            TokenMagic.addUpdateFiltersOnTargeted(shockWave);
            //await wait(2500);
            //TokenMagic.deleteFiltersOnTargeted("burn");
            //await wait(250);
            //TokenMagic.deleteFiltersOnTargeted("shockWave");
        }
    }
    cast();
}


async function arrowOptionExplode(handler) {
    let type01 = "01";
    let tint = "Regular";
    let color = "White";
    //let tmColor;
    //let tmMacro;

    switch (true) {
        case (handler.itemColorIncludes("green")):
            type01 = "01";
            tint = "Glowing";
            color = "Green";
            break;
        case (handler.itemColorIncludes("white")):
            type01 = "01";
            tint = "Regular";
            color = "White";
            break;
    }

    let type02 = "01";
    let color02 = "Orange";

    switch (true) {
        case (handler.animExColor.includes("blue")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type02 = "02";
                    break;
            }
            color02 = "Blue";
            //tmColor = 0x0075B0;
            break;
        case (handler.animExColor.includes("orange")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type02 = "02";
                    break;
            }
            color02 = "Orange";
            //tmColor = 0xBF6E00;
            break;
        case (handler.animExColor.includes("purple")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type02 = "02";
                    break;
            }
            color02 = "Purple";
            //tmColor = 0xBF0099;
            break;
        case (handler.animExColor.includes("yellow")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type02 = "02";
                    break;
            }
            color02 = "Yellow";
            //tmColor = 0xCFD204;
            break;
        case (handler.animExColor.includes("green")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type02 = "02";
                    break;
            }
            color02 = "Green";
            //tmColor = 0x0EB400;
            break;

    }

    /*
        switch (true) {
            case (handler.itemIncludes("acid")):
                type02 = "01";
                color02 = "Green";
                tmColor = 0x60CC70;
                break;
            case (handler.itemIncludes("explosive")):
                type02 = "01";
                color02 = "Orange";
                tmColor = 0xFF9309;
                break;
            case (handler.itemIncludes("lightning")):
                type02 = "01";
                color02 = "Blue";
                tmColor = 0x053ABD;
                break;
    
        }
    */
    /*
        let Poison =
            [{
                filterType: "field",
                filterId: "Poisoned",
                shieldType: 3,
                gridPadding: 1,
                color: tmColor,
                time: 0,
                blend: 0,
                intensity: 0.9,
                lightAlpha: 1,
                lightSize: 0.7,
                scale: 1,
                radius: 1,
                chromatic: false,
                zOrder: 512,
                animated:
                {
                    time:
                    {
                        active: true,
                        speed: 0.0015,
                        animType: "move"
                    }
                }
            }];
    
        let letitBurn =
            [{
                filterType: "xfire",
                filterId: "Burning",
                autoDestroy: true,
                time: 0,
                // Can change color in hex format
                color: tmColor,
                blend: 1,
                amplitude: 1,
                dispersion: 0,
                chromatic: false,
                scaleX: 1,
                scaleY: 1,
                inlay: false,
                autoDestroy: true,
                animated:
                {
                    time:
                    {
                        loopDuration: 1000,
                        loops: 2,
                        active: true,
                        speed: -0.0015,
                        animType: "move"
                    }
    
                }
            }];
            */
    /*
        let Electric =
            [{
                filterType: "electric",
                filterId: "Shocked",
                color: tmColor,
                time: 0,
                blend: 2,
                intensity: 5,
                animated:
                {
                    time:
                    {
                        active: true,
                        speed: 0.0020,
                        animType: "move"
                    }
    
                }
            }];
            */
    /*
        switch (true) {
            case (handler.itemIncludes("acid")):
                tmMacro = Poison;
                break;
            case (handler.itemIncludes("explosive")):
                tmMacro = letitBurn;
                break;
            case (handler.itemIncludes("lightning")):
                tmMacro = Electric;
                break;
    
        }
    */
    let divisor = 100;
    switch (true) {
        case (handler.animExRadius.includes("05")):
            divisor = 200;
            break;
        case (handler.animExRadius.includes("10")):
            divisor = 100;
            break;
        case (handler.animExRadius.includes("15")):
            divisor = 67;
        case (handler.animExRadius.includes("20")):
            divisor = 50;
            break;
        case (handler.animExRadius.includes("25")):
            divisor = 40;
            break;
        case (handler.animExRadius.includes("30")):
            divisor = 33;
            break;
        case (handler.animExRadius.includes("35")):
            divisor = 28.5;
            break;
        case (handler.animExRadius.includes("40")):
            divisor = 25;
            break;
        case (handler.animExRadius.includes("45")):
            divisor = 22.2;
            break;
        case (handler.animExRadius.includes("50")):
            divisor = 20;
            break;
        case (handler.animExRadius.includes("nuclear")):
            divisor = 10;
            break;
    }

    async function cast() {
        var arrayLength = handler.allTargets.length;
        for (var i = 0; i < arrayLength; i++) {
            let Scale = (canvas.scene.data.grid / divisor);

            await wait(500)

            let target = handler.allTargets[i];

            let ray = new Ray(handler.actorToken.center, target.center);
            let anDeg = -(ray.angle * 57.3);
            let anDist = ray.distance;

            // Animation file path
            let file = `modules/${path00}/Library/Generic/Weapon_Attacks/Ranged/`;

            // Checking for range to target to choose which file to pull
            let anFile = `${file}Arrow01_${type01}_${tint}_${color}_30ft_1600x400.webm`;
            let anFileSize = 600;
            let anchorX = 0.125;
            let boomDelay = 1250;
            switch (true) {
                case (anDist <= 1200):
                    anFileSize = 1200;
                    anFile = `${file}Arrow01_${type01}_${tint}_${color}_30ft_1600x400.webm`;
                    anchorX = 0.125;
                    boomDelay = 1250;
                    break;
                case (anDist > 2400):
                    anFileSize = 3600;
                    anFile = `${file}Arrow01_${type01}_${tint}_${color}_90ft_4000x400.webm`;
                    anchorX = 0.05;
                    boomDelay = 1750;
                    break;
                default:
                    anFileSize = 2400;
                    anFile = `${file}Arrow01_${type01}_${tint}_${color}_60ft_2800x400.webm`;
                    anchorX = 0.071;
                    boomDelay = 1500;
                    break;
            }

            // Scaling the Height of the animation for consistency across ranges
            let anScale = anDist / anFileSize;
            let anScaleY = anDist <= 600 ? 0.6 : anScale;

            let spellAnim =
            {
                file: anFile,
                position: handler.actorToken.center,
                anchor: {
                    x: anchorX,
                    y: 0.5
                },
                angle: anDeg,
                scale: {
                    x: anScale,
                    y: anScaleY
                }
            };

            let spellAnim2 =
            {
                file: `modules/${path00}/Library/Generic/Explosion/Explosion_${type02}_${color02}_400x400.webm`,
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
            };

            canvas.fxmaster.playVideo(spellAnim);
            game.socket.emit('module.fxmaster', spellAnim);
            switch (true) {
                case (handler.animExplode):
                    await wait(boomDelay);
                    canvas.fxmaster.playVideo(spellAnim2);
                    game.socket.emit('module.fxmaster', spellAnim2);
                    //TokenMagic.addUpdateFiltersOnTargeted(letitBurn);
                    //await wait(2500);
                    //TokenMagic.deleteFiltersOnTargeted("Shocked");
                    //await wait(50);
                    //TokenMagic.deleteFiltersOnTargeted("Burning");
                    //await wait(50);
                    // TokenMagic.deleteFiltersOnTargeted("Poisoned");
                    break;
            }

        }
    }
    cast();
}


async function castOnSelf(handler) {

    let path01 = "breakout";
    let path02;
    let path03;

    switch (true) {
        case (handler.itemNameIncludes("shield")):
            if (game.settings.get("automated-jb2a-animations", "EnableShield")) {
                path01 = "5th_Level";
                path02 = "Antilife_Shell";
                path03 = "AntilifeShell_01_Blue_NoCircle";
            }
            break;
    }
    log(path01);
    log(path02);
    log(path03);

    let tokenSize = handler.actorToken.actor.data.data.traits.size;
    log(tokenSize);
    let divisor = 375;
    switch (true) {
        case (tokenSize === "lg"):
            divisor = 187;
            break;
        case (tokenSize === "huge"):
            divisor = 125;
            break;
        case (tokenSize === "sm"):
        case (tokenSize === "med"):
        default:
            divisor = 375;
            break;
    }

    await wait(500);

    async function cast() {

        //let Scale = ((handler.actorToken.data.width + handler.actorToken.data.height) / 8);
        let Scale = canvas.scene.data.grid / divisor;
        let spellAnim =
        {
            file: `modules/${path00}/Library/${path01}/${path02}/${path03}_400x400.webm`,
            position: handler.actorToken.center,
            anchor: {
                x: 0.5,
                y: 0.5
            },
            angle: 0,
            speed: 0,
            scale: {
                x: Scale,
                y: Scale
            }
        };

        canvas.fxmaster.playVideo(spellAnim);
        game.socket.emit('module.fxmaster', spellAnim);
    }
    switch (true) {
        case (path01 === "breakout"):
            break;
        default:
            cast();
            break;
    }


}


async function explodeOnTarget(handler) {
    let type01 = "01";
    let color = "Orange";
    let tmColor = 0x0075B0;

    switch (true) {
        case (handler.animExColor.includes("blue")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type01 = "02";
                    break;
            }
            color = "Blue";
            tmColor = 0x0075B0;
            break;
        case (handler.animExColor.includes("green")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type01 = "02";
                    break;
            }
            color = "Green";
            tmColor = 0x0EB400;
            break;
        case (handler.animExColor.includes("orange")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type01 = "02";
                    break;
            }
            color = "Orange";
            tmColor = 0xBF6E00;
            break;
        case (handler.animExColor.includes("purple")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type01 = "02";
                    break;
            }
            color = "Purple";
            tmColor = 0xBF0099;
            break;
        case (handler.animExColor.includes("yellow")):
            switch (true) {
                case (handler.animExVariant.includes("02")):
                    type01 = "02";
                    break;
            }
            color = "Yellow";
            tmColor = 0xCFD204;
            break;
    }
    let divisor = 200;
    switch (true) {
        case (handler.animExRadius.includes("05")):
            divisor = 200;
            break;
        case (handler.animExRadius.includes("10")):
            divisor = 100;
            break;
        case (handler.animExRadius.includes("15")):
            divisor = 67;
        case (handler.animExRadius.includes("20")):
            divisor = 50;
            break;
        case (handler.animExRadius.includes("25")):
            divisor = 40;
            break;
        case (handler.animExRadius.includes("30")):
            divisor = 33;
            break;
        case (handler.animExRadius.includes("35")):
            divisor = 28.5;
            break;
        case (handler.animExRadius.includes("40")):
            divisor = 25;
            break;
        case (handler.animExRadius.includes("45")):
            divisor = 22.2;
            break;
        case (handler.animExRadius.includes("50")):
            divisor = 20;
            break;
        case (handler.animExRadius.includes("nuclear")):
            divisor = 10;
            break;
    }

    async function cast() {

        let target = handler.allTargets[0];
        let Scale = (canvas.scene.data.grid / divisor);

        // Defines the spell template for FXMaster
        let spellAnim =
        {
            file: `modules/${path00}/Library/Generic/Explosion/Explosion_${type01}_${color}_400x400.webm`,
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
        SpellAnimation(2)
        /*
                let shockWave =
                    [{
                        filterType: "wave",
                        filterId: "shockWave",
                        autoDestroy: true,
                        time: 0,
                        strength: 0.03,
                        frequency: 15,
                        maxIntensity: 4.0,
                        minIntensity: 0.5,
                        padding: 25,
                        animated:
                        {
                            time:
                            {
                                loopDuration: 500,
                                loops: 5,
                                active: true,
                                speed: 0.0180,
                                animType: "move",
                            }
                        }
                    }];
                    */
        //if (game.settings.get("automated-jb2a-animations", "tmfx")) {
        //await wait(400);
        //TokenMagic.addUpdateFiltersOnTargeted(shockWave);
        //await wait(2500);
        //TokenMagic.deleteFiltersOnTargeted("burn");
        //await wait(250);
        //TokenMagic.deleteFiltersOnTargeted("shockWave");
        //}
    }
    cast();
}

