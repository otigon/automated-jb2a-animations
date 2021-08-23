import { AAcustomRecog } from "./custom-recognition/auto-recognition.js"
import { aaAutoRecognition } from "./custom-recognition/aaAutoRecList.js";
export default function aaSettings() {

    const menuAAAutoRecSettings = {
        key: 'custom-autorec',
        config: {
            name: "Automatic Recognition",
            label: "Configure Automatic Recognition",
            hint: "Set Automatic Recognition of Items for Animations",
            icon: "fas fa-dice-d20",
            type: AAcustomRecog,
            restricted: true,
        },
    };

    const settingAAAutoRecSettings = {
        key: 'aaAutoRecognition',
        config: {
            name: "Automatic Recognition",
            hint: "Configure Automatic Recognition",
            scope: 'world',
            config: false,
            default: {},
            type: Object,
        },
    };

    game.settings.registerMenu('autoanimations', menuAAAutoRecSettings.key, menuAAAutoRecSettings.config);
    game.settings.register(
        'autoanimations',
        settingAAAutoRecSettings.key,
        mergeObject(settingAAAutoRecSettings.config, {
            default: aaAutoRecognition.defaultConfiguration
        }, true, true),
    );


    /*
        game.settings.registerMenu("autoanimations", "custom-autorec", {
            name: "Automatic Recognition",
            label: "Configure Automatic Recognition",
            hint: "Set Automatic Recognition of Items for Animations",
            icon: "fas fa-dice-d20",
            type: AAcustomRecog,
            restricted: true
        });
    
        game.settings.register("autoanimations", "aaAutoRecog", {
            mergeObject()(
            name: "Automatic Recognition",
            label: "Configure Automatic Recognition",
            hint: "Set Automatic Recognition of Items for Animations",
            scope: "world",
            config: false,
            default: {
                aaAutoRecog: {
                    overrides: {
                        0: {
                            target: 'Stinking Cloud',
                        },
                    },
                }
            },
            type: Object
        });
    */
    game.settings.register("autoanimations", "killAllAnim", {
        name: game.i18n.format("AUTOANIM.toggleAnimations"),
        hint: game.i18n.format("AUTOANIM.toggleAnimations_hint"),
        scope: "client",
        config: true,
        type: String,
        choices: {
            "on": game.i18n.format("AUTOANIM.ON"),
            "off": game.i18n.format("AUTOANIM.OFF"),
        },
        default: "on",
        onChange: value => {
            if (value === "off") {
                disableAnimations()
            }
            if (value === "on") {
                window.location.reload()
            }
            //console.log(value)
        }
    })
    game.settings.register("autoanimations", "disableAutoRec", {
        name: game.i18n.format("AUTOANIM.settingDisableAutoRec"),
        hint: game.i18n.format("AUTOANIM.settingDisableAutoRecHint"),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
    })
    game.settings.register("autoanimations", "globaldelay", {
        name: game.i18n.format("AUTOANIM.globaldelay_name"),
        hint: game.i18n.format("AUTOANIM.globaldelay_hint"),
        scope: "world",
        config: true,
        default: 100,
        type: Number
    })
    game.settings.register("autoanimations", "videoLoop", {
        name: game.i18n.format("AUTOANIM.animPreview"),
        hint: game.i18n.format("AUTOANIM.animPreviewHint"),
        scope: "world",
        type: String,
        choices: {
            "0": "No Video Preview",
            "1": "Manually Play Video Preview",
            "2": "Autoplay Video Preview"
        },
        default: "0",
        config: true
    })
    game.settings.register("autoanimations", "hideFromPlayers", {
        name: game.i18n.format("AUTOANIM.animtab_name"),
        hint: game.i18n.format("AUTOANIM.animtab_hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
    });
    game.settings.register("autoanimations", "rangeSwitch", {
        name: game.i18n.format("AUTOANIM.settingRangeSwitch"),
        hint: game.i18n.format("AUTOANIM.settingRangeSwitchhint"),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
    })
    switch (game.system.id) {
        case "demonlord": {
            if (!(game.data.version === "0.7.9" || game.data.version === "0.7.10")) {
                game.settings.register("autoanimations", "playtrigger", {
                    name: game.i18n.format("AUTOANIM.demonlordtrigger_name"),
                    hint: game.i18n.format("AUTOANIM.demonlordtrigger_hint"),
                    scope: "world",
                    type: String,
                    choices: {
                        "rollattack": game.i18n.format("AUTOANIM.demonlordtrigger_rollattack"),
                        "hits": game.i18n.format("AUTOANIM.demonlordtrigger_hits"),
                        "misses": game.i18n.format("AUTOANIM.demonlordtrigger_misses"),
                        "rolldamage": game.i18n.format("AUTOANIM.demonlordtrigger_rolldamage"),
                        "applydamage": game.i18n.format("AUTOANIM.demonlordtrigger_applydamage"),
                    },
                    default: "rollattack",
                    config: true
                })
            }
            break
        }
        case "sfrpg": {
            game.settings.register("autoanimations", "playonDamage", {
                name: game.i18n.format("AUTOANIM.midiondmg_name"),
                hint: game.i18n.format("AUTOANIM.midiondmg_hint"),
                scope: 'world',
                type: Boolean,
                default: false,
                config: true,
                onChange: () => { window.location.reload() }
            });
        }
        case "dnd5e":
        case "sw5e":
        case "pf2e":
            if (game.modules.get("midi-qol")?.active) {
                game.settings.register("autoanimations", "playonhit", {
                    name: game.i18n.format("AUTOANIM.midionhit_name"),
                    hint: game.i18n.format("AUTOANIM.midionhit_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
                game.settings.register("autoanimations", "playonmiss", {
                    name: game.i18n.format("AUTOANIM.midionmiss_name"),
                    hint: game.i18n.format("AUTOANIM.midionmiss_hint"),
                    scope: `world`,
                    type: Boolean,
                    default: false,
                    config: true,
                });
                game.settings.register("autoanimations", "playonDamage", {
                    name: game.i18n.format("AUTOANIM.midiondmg_name"),
                    hint: game.i18n.format("AUTOANIM.midiondmg_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onChange: () => { window.location.reload() }
                });
                game.settings.register("autoanimations", "EnableCritical", {
                    name: game.i18n.format("AUTOANIM.crithit_name"),
                    hint: game.i18n.format("AUTOANIM.crithit_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
                game.settings.register("autoanimations", "CriticalAnimation", {
                    name: game.i18n.format("AUTOANIM.crithitAnim_name"),
                    //name: "Choose A File",
                    scope: 'world',
                    config: true,
                    type: String,
                    filePicker: "imagevideo"
                });
                game.settings.register("autoanimations", "EnableCriticalMiss", {
                    name: game.i18n.format("AUTOANIM.critmiss_name"),
                    hint: game.i18n.format("AUTOANIM.critmiss_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
                game.settings.register("autoanimations", "CriticalMissAnimation", {
                    name: game.i18n.format("AUTOANIM.critmissAnim_name"),
                    scope: 'world',
                    config: true,
                    type: String,
                    filePicker: "imagevideo"
                });
            } else {
                game.settings.register("autoanimations", "playonDamageCore", {
                    name: game.i18n.format("AUTOANIM.coreondmg_name"),
                    hint: game.i18n.format("AUTOANIM.coreondmg_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
            }
            break;
    }

}
