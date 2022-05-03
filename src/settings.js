import { aaAutoRecognition } from "./custom-recognition/auto-recognition.js"
import { aaAutorec } from "./custom-recognition/aaAutoRecList.js";
import { disableAnimations } from "./autoAnimations.js";
export default function aaSettings() {

    const menuAAAutoRecSettings = {
        key: 'custom-autorec',
        config: {
            label: game.i18n.format("autoanimations.settings.autoRecSetting"),
            icon: "fas fa-dice-d20",
            type: aaAutoRecognition,
            restricted: true,
        },
    };

    const AutoRecSettings = {
        key: 'aaAutorec',
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
        AutoRecSettings.key,
        mergeObject(AutoRecSettings.config, {
            default: aaAutorec.defaultConfiguration
        }, true, true),
    );

    game.settings.register("autoanimations", "killAllAnim", {
        name: game.i18n.format("autoanimations.settings.toggleAnimations"),
        hint: game.i18n.format("autoanimations.settings.toggleAnimations_hint"),
        scope: "client",
        config: true,
        type: String,
        choices: {
            "on": game.i18n.format("autoanimations.settings.ON"),
            "off": game.i18n.format("autoanimations.settings.OFF"),
        },
        default: "on",
        onChange: value => {
            if (value === "off") {
                disableAnimations()
            }
            if (value === "on") {
                window.location.reload()
            }
        }
    })
    game.settings.register("autoanimations", "disableAutoRec", {
        name: game.i18n.format("autoanimations.settings.settingDisableAutoRec"),
        hint: game.i18n.format("autoanimations.settings.settingDisableAutoRecHint"),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
    })
    game.settings.register("autoanimations", "globaldelay", {
        name: game.i18n.format("autoanimations.settings.globaldelay_name"),
        hint: game.i18n.format("autoanimations.settings.globaldelay_hint"),
        scope: "world",
        config: true,
        default: 100,
        type: Number
    })
    game.settings.register("autoanimations", "videoLoop", {
        name: game.i18n.format("autoanimations.settings.animPreview"),
        hint: game.i18n.format("autoanimations.settings.animPreviewHint"),
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
    game.settings.register("autoanimations", "jb2aLocation", {
        name: game.i18n.format("autoanimations.settings.s3Name"),
        hint: game.i18n.format("autoanimations.settings.s3Hint"),
        scope: 'world',
        config: true,
        type: String,
        default: "",
        onChange: () => { window.location.reload() }
    });
    game.settings.register("autoanimations", "hideFromPlayers", {
        name: game.i18n.format("autoanimations.settings.animtab_name"),
        hint: game.i18n.format("autoanimations.settings.animtab_hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
    });
    game.settings.register("autoanimations", "decoupleSound", {
        name: game.i18n.format("autoanimations.settings.decoupleSounds"),
        hint: game.i18n.format("autoanimations.settings.decoupleSounds_hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
    })
    game.settings.register("autoanimations", "rangeSwitch", {
        name: game.i18n.format("autoanimations.settings.settingRangeSwitch"),
        hint: game.i18n.format("autoanimations.settings.settingRangeSwitchhint"),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
    })
    game.settings.register("autoanimations", "noTips", {
        name: game.i18n.format("autoanimations.settings.noTips"),
        hint: game.i18n.format("autoanimations.settings.noTipsHint"),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
    })
    switch (game.system.id) {
        case "demonlord": {
            game.settings.register("autoanimations", "playtrigger", {
                name: game.i18n.format("autoanimations.settings.demonlordtrigger_name"),
                hint: game.i18n.format("autoanimations.settings.demonlordtrigger_hint"),
                scope: "world",
                type: String,
                choices: {
                    "rollattack": game.i18n.format("autoanimations.settings.demonlordtrigger_rollattack"),
                    "hits": game.i18n.format("autoanimations.settings.demonlordtrigger_hits"),
                    "misses": game.i18n.format("autoanimations.settings.demonlordtrigger_misses"),
                    "rolldamage": game.i18n.format("autoanimations.settings.demonlordtrigger_rolldamage"),
                    "applydamage": game.i18n.format("autoanimations.settings.demonlordtrigger_applydamage"),
                },
                default: "rollattack",
                config: true
            })
            break
        }
        case "sfrpg": {
            game.settings.register("autoanimations", "playonDamage", {
                name: game.i18n.format("autoanimations.settings.midiondmg_name"),
                hint: game.i18n.format("autoanimations.settings.midiondmg_hint"),
                scope: 'world',
                type: Boolean,
                default: false,
                config: true,
                onChange: () => { window.location.reload() }
            });
        }
            break;
        case "dnd5e":
        case "sw5e":
            game.settings.register("autoanimations", "disableAEAnimations", {
                name: game.i18n.format("autoanimations.settings.disableAEAnimations"),
                hint: game.i18n.format("autoanimations.settings.disableAEAnimationsHint"),
                scope: 'world',
                type: Boolean,
                default: false,
                config: true,
            })
            if (game.modules.get("midi-qol")?.active) {
                game.settings.register("autoanimations", "playonhit", {
                    name: game.i18n.format("autoanimations.settings.midionhit_name"),
                    hint: game.i18n.format("autoanimations.settings.midionhit_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
                game.settings.register("autoanimations", "playonmiss", {
                    name: game.i18n.format("autoanimations.settings.midionmiss_name"),
                    hint: game.i18n.format("autoanimations.settings.midionmiss_hint"),
                    scope: `world`,
                    type: Boolean,
                    default: false,
                    config: true,
                });
                game.settings.register("autoanimations", "playonDamage", {
                    name: game.i18n.format("autoanimations.settings.midiondmg_name"),
                    hint: game.i18n.format("autoanimations.settings.midiondmg_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onChange: () => { window.location.reload() }
                });
                game.settings.register("autoanimations", "EnableCritical", {
                    name: game.i18n.format("autoanimations.settings.crithit_name"),
                    hint: game.i18n.format("autoanimations.settings.crithit_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
                game.settings.register("autoanimations", "CriticalAnimation", {
                    name: game.i18n.format("autoanimations.settings.crithitAnim_name"),
                    //name: "Choose A File",
                    scope: 'world',
                    config: true,
                    type: String,
                    filePicker: "imagevideo"
                });
                game.settings.register("autoanimations", "EnableCriticalMiss", {
                    name: game.i18n.format("autoanimations.settings.critmiss_name"),
                    hint: game.i18n.format("autoanimations.settings.critmiss_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
                game.settings.register("autoanimations", "CriticalMissAnimation", {
                    name: game.i18n.format("autoanimations.settings.critmissAnim_name"),
                    scope: 'world',
                    config: true,
                    type: String,
                    filePicker: "imagevideo"
                });
            } else {
                game.settings.register("autoanimations", "playonDamageCore", {
                    name: game.i18n.format("autoanimations.settings.coreondmg_name"),
                    hint: game.i18n.format("autoanimations.settings.coreondmg_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                });
            }
            break;
        case "pf2e": {
            game.settings.register("autoanimations", "playonDamageCore", {
                name: game.i18n.format("autoanimations.settings.coreondmg_name"),
                hint: game.i18n.format("autoanimations.settings.coreondmg_hint"),
                scope: 'world',
                type: Boolean,
                default: false,
                config: true,
            });
            game.settings.register("autoanimations", "playonmiss", {
                name: game.i18n.format("autoanimations.settings.midionmiss_name"),
                hint: "Requires Animations to be played on Attack rolls",
                scope: `world`,
                type: Boolean,
                default: false,
                config: true,
            });
            game.settings.register("autoanimations", "disableNestedEffects", {
                name: game.i18n.format("autoanimations.settings.disableNested"),
                hint: game.i18n.format("autoanimations.settings.disableNestedHint"),
                scope: `world`,
                type: Boolean,
                default: false,
                config: true,
            });
        }
            break;
        case "pf1": {
            game.settings.register("autoanimations", "disableAEAnimations", {
                name: game.i18n.format("autoanimations.settings.disableAEAnimations"),
                hint: game.i18n.format("autoanimations.settings.disableAEAnimationsHint"),
                scope: 'world',
                type: Boolean,
                default: false,
                config: true,
            })
        }
            break;
    }

    game.settings.register("autoanimations", "debug", {
        name: game.i18n.format("autoanimations.settings.debugging"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });

}
