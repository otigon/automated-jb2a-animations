import { aaAutoRecognition } from "./custom-recognition/auto-recognition.js"
import { aaAutorec } from "./custom-recognition/aaAutoRecList.js";
import { disableAnimations } from "./autoAnimations.js";
export default function aaSettings() {

    const menuAAAutoRecSettings = {
        key: 'custom-autorec',
        config: {
            label: game.i18n.format("AUTOANIM.autoRecSetting"),
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
    game.settings.register("autoanimations", "jb2aLocation", {
        name: game.i18n.format("AUTOANIM.s3Name"),
        hint: game.i18n.format("AUTOANIM.s3Hint"),
        scope: 'world',
        config: true,
        type: String,
        default: "",
        onChange: () => { window.location.reload() }
    });
    game.settings.register("autoanimations", "hideFromPlayers", {
        name: game.i18n.format("AUTOANIM.animtab_name"),
        hint: game.i18n.format("AUTOANIM.animtab_hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
    });
    game.settings.register("autoanimations", "decoupleSound", {
        name: game.i18n.format("AUTOANIM.decoupleSounds"),
        hint: game.i18n.format("AUTOANIM.decoupleSounds_hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: false,
    })
    game.settings.register("autoanimations", "rangeSwitch", {
        name: game.i18n.format("AUTOANIM.settingRangeSwitch"),
        hint: game.i18n.format("AUTOANIM.settingRangeSwitchhint"),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
    })
    game.settings.register("autoanimations", "noTips", {
        name: game.i18n.format("AUTOANIM.noTips"),
        hint: game.i18n.format("AUTOANIM.noTipsHint"),
        scope: "client",
        config: true,
        type: Boolean,
        default: false,
    })
    switch (game.system.id) {
		case "cyphersystem": {
			game.settings.register("autoanimations", "EnableCritical", {
                    name: game.i18n.format("AUTOANIM.cypherCrit_name"),
                    hint: game.i18n.format("AUTOANIM.cypherCrit_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
			game.settings.register("autoanimations", "CriticalAnimation", {
				name: game.i18n.format("AUTOANIM.cypherCritAnim_name"),
				//name: "Choose A File",
				scope: 'world',
				config: true,
				type: String,
				filePicker: "imagevideo"
			});
			game.settings.register("autoanimations", "EnableFumble", {
				name: game.i18n.format("AUTOANIM.cypherFumble_name"),
				hint: game.i18n.format("AUTOANIM.cypherFumble_hint"),
				scope: 'world',
				type: Boolean,
				default: false,
				config: true,
				onchange: () => { window.location.reload() }
			});
			game.settings.register("autoanimations", "FumbleAnimation", {
				name: game.i18n.format("AUTOANIM.cypherFumbleAnim_name"),
				scope: 'world',
				config: true,
				type: String,
				filePicker: "imagevideo"
			});
			game.settings.register("autoanimations", "EnableOnRecoveryRoll", {
                    name: game.i18n.format("AUTOANIM.recovery_name"),
                    hint: game.i18n.format("AUTOANIM.recovery_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
			game.settings.register("autoanimations", "RecoveryRollAnimation", {
				name: game.i18n.format("AUTOANIM.recoveryAnim_name"),
				//name: "Choose A File",
				scope: 'world',
				config: true,
				type: String,
				filePicker: "imagevideo"
			});
				game.settings.register("autoanimations", "EnableOnMightRoll", {
                    name: game.i18n.format("AUTOANIM.mightroll_name"),
                    hint: game.i18n.format("AUTOANIM.mightroll_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
			game.settings.register("autoanimations", "MightRollAnimation", {
				name: game.i18n.format("AUTOANIM.mightRollAnim_name"),
				//name: "Choose A File",
				scope: 'world',
				config: true,
				type: String,
				filePicker: "imagevideo"
			});
			game.settings.register("autoanimations", "EnableOnSpeedRoll", {
                    name: game.i18n.format("AUTOANIM.speedroll_name"),
                    hint: game.i18n.format("AUTOANIM.speedroll_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
			game.settings.register("autoanimations", "SpeedRollAnimation", {
				name: game.i18n.format("AUTOANIM.speedRollAnim_name"),
				//name: "Choose A File",
				scope: 'world',
				config: true,
				type: String,
				filePicker: "imagevideo"
			});
			game.settings.register("autoanimations", "EnableOnIntellecRoll", {
                    name: game.i18n.format("AUTOANIM.intellectroll_name"),
                    hint: game.i18n.format("AUTOANIM.intellectroll_hint"),
                    scope: 'world',
                    type: Boolean,
                    default: false,
                    config: true,
                    onchange: () => { window.location.reload() }
                });
			game.settings.register("autoanimations", "IntellectRollAnimation", {
				name: game.i18n.format("AUTOANIM.intellectRollAnim_name"),
				//name: "Choose A File",
				scope: 'world',
				config: true,
				type: String,
				filePicker: "imagevideo"
			});
			}
			break;
		
        case "demonlord": {
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
            break;
        case "dnd5e":
        case "sw5e":
            game.settings.register("autoanimations", "disableAEAnimations", {
                name: game.i18n.format("AUTOANIM.disableAEAnimations"),
                hint: game.i18n.format("AUTOANIM.disableAEAnimationsHint"),
                scope: 'world',
                type: Boolean,
                default: false,
                config: true,
            })
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
        case "pf2e": {
            game.settings.register("autoanimations", "playonDamageCore", {
                name: game.i18n.format("AUTOANIM.coreondmg_name"),
                hint: game.i18n.format("AUTOANIM.coreondmg_hint"),
                scope: 'world',
                type: Boolean,
                default: false,
                config: true,
            });
            game.settings.register("autoanimations", "playonmiss", {
                name: game.i18n.format("AUTOANIM.midionmiss_name"),
                hint: "Requires Animations to be played on Attack rolls",
                scope: `world`,
                type: Boolean,
                default: false,
                config: true,
            });
            game.settings.register("autoanimations", "disableNestedEffects", {
                name: game.i18n.format("AUTOANIM.disableNested"),
                hint: game.i18n.format("AUTOANIM.disableNestedHint"),
                scope: `world`,
                type: Boolean,
                default: false,
                config: true,
            });
        }
            break;
        case "pf1": {
            game.settings.register("autoanimations", "disableAEAnimations", {
                name: game.i18n.format("AUTOANIM.disableAEAnimations"),
                hint: game.i18n.format("AUTOANIM.disableAEAnimationsHint"),
                scope: 'world',
                type: Boolean,
                default: false,
                config: true,
            })
        }
            break;
        case "wfrp4e": {
            game.settings.register("autoanimations", "castOnlyOnSuccess", {
                name: game.i18n.format("AUTOANIM.wfrp4eCastOnlyOnSuccess"),
                hint: game.i18n.format("AUTOANIM.wfrp4eCastOnlyOnSuccessHint"),
                scope: 'world',
                type: Boolean,
                default: false,
                config: true,
            })
        }
            break;
    }

    game.settings.register("autoanimations", "debug", {
        name: game.i18n.format("AUTOANIM.debugging"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });

}
