import AutorecShim from "./formApps/_AutorecMenu/appShim.js";
import { aaAutorec } from "./mergeScripts/autorec/aaAutoRecList.js";
import { AnimationState } from "./AnimationState.js";

import { TJSGameSettingsWithUI } from '#standard/store/fvtt/settings';

class AAGameSettings extends TJSGameSettingsWithUI {
   constructor() {
      super('autoanimations');
   }

   initialize() {
      const namespace = this.namespace;

      /**
       * Constants for setting scope type.
       *
       * @type {{world: string, client: string}}
       */
      const scope = {
         client: 'client',
         world: 'world'
      };

      const settings = [];

      // Add a convenience hook to open Autorec settings from macro.
      Hooks.on('AA.Open.AutorecSetting', () => {
         if (game.user.isGM) { new AutorecShim(); }
      });

      game.settings.registerMenu(namespace, 'custom-autorec', {
         name: "autoanimations.settings.menuName",
         hint: "autoanimations.settings.menuHint",
         label: 'autoanimations.settings.launchMenu',
         icon: 'fas fa-dice-d20',
         type: AutorecShim,
         restricted: true,
      });

      game.settings.register(namespace, 'aaAutorec', {
         name: 'Automatic Recognition',
         hint: 'Configure Automatic Recognition',
         scope: scope.world,
         config: false,
         default: aaAutorec.defaultConfiguration,
         type: Object,
      });

      settings.push({
         namespace,
         key: 'killAllAnim',
         options: {
            name: 'autoanimations.settings.toggleAnimations',
            hint: 'autoanimations.settings.toggleAnimations_hint',
            scope: scope.client,
            config: true,
            type: String,
            choices: {
               on: 'autoanimations.settings.ON',
               off: 'autoanimations.settings.OFF',
            },
            default: 'on',
            onChange: value => {
               if (value === 'off') {
                  AnimationState.enabled = false;
               }
               if (value === 'on') {
                  AnimationState.enabled = true;
               }
            }
         }
      });
      /*
      settings.push({
         namespace,
         key: 'aaAutorec-version',
         options: {
            type: Number,
            default: 4,
            config:false,
         }
      });
      */
      settings.push({
         namespace,
         key: 'disableAutoRec',
         options: {
            name: 'autoanimations.settings.settingDisableAutoRec',
            hint: 'autoanimations.settings.settingDisableAutoRecHint',
            scope: scope.world,
            config: true,
            type: Boolean,
            default: false
         }
      });

      settings.push({
         namespace,
         key: 'globaldelay',
         options: {
            name: 'autoanimations.settings.globaldelay_name',
            hint: 'autoanimations.settings.globaldelay_hint',
            scope: scope.world,
            config: true,
            default: 100,
            type: Number
         }
      });

      settings.push({
         namespace,
         key: 'jb2aLocation',
         options: {
            name: 'autoanimations.settings.s3Name',
            hint: 'autoanimations.settings.s3Hint',
            scope: scope.world,
            config: true,
            type: String,
            default: '',
            requiresReload: true
         }
      });

      settings.push({
         namespace,
         key: 'hideFromPlayers',
         options: {
            name: 'autoanimations.settings.animtab_name',
            hint: 'autoanimations.settings.animtab_hint',
            scope: scope.world,
            config: true,
            type: Boolean,
            default: false,
         }
      });
      /*
      settings.push({
         namespace,
         key: 'decoupleSound',
         options: {
            name: 'autoanimations.settings.decoupleSounds',
            hint: 'autoanimations.settings.decoupleSounds_hint',
            scope: scope.world,
            config: true,
            type: Boolean,
            default: false,
         }
      });
      */
      settings.push({
         namespace,
         key: 'rangeSwitch',
         options: {
            name: 'autoanimations.settings.settingRangeSwitch',
            hint: 'autoanimations.settings.settingRangeSwitchhint',
            scope: scope.world,
            config: true,
            type: Boolean,
            default: false,
         }
      });

      settings.push({
         namespace,
         key: 'disableAEAnimations',
         options: {
            name: 'autoanimations.settings.disableAEAnimations',
            hint: 'autoanimations.settings.disableAEAnimationsHint',
            scope: scope.world,
            type: Boolean,
            default: false,
            config: true,
         }
      });

      settings.push({
         namespace,
         key: 'noTips',
         options: {
            name: 'autoanimations.settings.noTips',
            hint: 'autoanimations.settings.noTipsHint',
            scope: scope.world,
            config: true,
            type: Boolean,
            default: false,
         }
      });

      settings.push({
         namespace,
         key: "hideTemplateGrid",
         options: {
            name: 'autoanimations.settings.hideTemplate_name',
            hint: 'autoanimations.settings.hideTemplate_hint',
            scope: scope.client,
            config: true,
            type: String,
            choices: {
               off: 'autoanimations.settings.OFF',
               templateLayer: 'autoanimations.settings.hoverInTemplateLayer',
               full: 'autoanimations.settings.hoverInTemplate',
            },
            default: "off",
            requiresReload: true
         },
      })

      settings.push({
         namespace,
         key: 'debug',
         options: {
            name: 'autoanimations.settings.debugging',
            scope: scope.world,
            config: true,
            default: false,
            type: Boolean
         }
      });
      switch (game.system.id) {
         case "cyphersystem":
            settings.push({
               namespace,
               key: 'EnableCritical',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.cypherCrit_name',
                  hint: 'autoanimations.settings.cypherCrit_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });

            settings.push({
               namespace,
               key: 'CriticalAnimation',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.cypherCritAnim_name',
                  scope: scope.world,
                  type: String,
                  config: true,
                  default: "",
                  filePicker: "imagevideo"
               }
            });

            settings.push({
               namespace,
               key: 'EnableFumble',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.cypherFumble_name',
                  hint: 'autoanimations.settings.cypherFumble_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });

            settings.push({
               namespace,
               key: 'FumbleAnimation',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.cypherFumbleAnim_name',
                  scope: scope.world,
                  type: String,
                  config: true,
                  default: "",
                  filePicker: "imagevideo"
               }
            });

            settings.push({
               namespace,
               key: 'EnableOnRecoveryRoll',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.recovery_name',
                  hint: 'autoanimations.settings.recovery_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });

            settings.push({
               namespace,
               key: 'RecoveryRollAnimation',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.recoveryAnim_name',
                  scope: scope.world,
                  type: String,
                  config: true,
                  default: "",
                  filePicker: "imagevideo"
               }
            });

            settings.push({
               namespace,
               key: 'EnableOnMightRoll',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.mightroll_name',
                  hint: 'autoanimations.settings.mightroll_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });

            settings.push({
               namespace,
               key: 'MightRollAnimation',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.mightRollAnim_name',
                  scope: scope.world,
                  type: String,
                  config: true,
                  default: "",
                  filePicker: "imagevideo"
               }
            });

            settings.push({
               namespace,
               key: 'EnableOnSpeedRoll',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.speedroll_name',
                  hint: 'autoanimations.settings.speedroll_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });

            settings.push({
               namespace,
               key: 'SpeedRollAnimation',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.speedRollAnim_name',
                  scope: scope.world,
                  type: String,
                  config: true,
                  default: "",
                  filePicker: "imagevideo"
               }
            });

            settings.push({
               namespace,
               key: 'EnableOnIntellecRoll',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.intellectroll_name',
                  hint: 'autoanimations.settings.intellectroll_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });

            settings.push({
               namespace,
               key: 'IntellectRollAnimation',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.intellectRollAnim_name',
                  scope: scope.world,
                  type: String,
                  config: true,
                  default: "",
                  filePicker: "imagevideo"
               }
            });
            break;
         case 'demonlord':
            settings.push({
               namespace,
               key: 'playtrigger',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.demonlordtrigger_name',
                  hint: 'autoanimations.settings.demonlordtrigger_hint',
                  scope: scope.world,
                  type: String,
                  choices: {
                     rollattack: 'autoanimations.settings.demonlordtrigger_rollattack',
                     hits: 'autoanimations.settings.demonlordtrigger_hits',
                     misses: 'autoanimations.settings.demonlordtrigger_misses',
                     rolldamage: 'autoanimations.settings.demonlordtrigger_rolldamage',
                     applydamage: 'autoanimations.settings.demonlordtrigger_applydamage',
                  },
                  default: 'rollattack',
                  config: true
               }
            });
            break

         case 'sfrpg':
            settings.push({
               namespace,
               key: 'playonDamage',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.midiondmg_name',
                  hint: 'autoanimations.settings.midiondmg_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true
               }
            });
            break;

         case 'dnd5e':
         case 'sw5e':
            if (game.modules.get('midi-qol')?.active) {
               settings.push({
                  namespace,
                  key: 'playonhit',
                  folder: 'Midi-QOL',
                  options: {
                     name: 'autoanimations.settings.midionhit_name',
                     hint: 'autoanimations.settings.midionhit_hint',
                     scope: scope.world,
                     type: Boolean,
                     default: false,
                     config: true,
                  }
               });

               settings.push({
                  namespace,
                  key: 'playonmiss',
                  folder: 'Midi-QOL',
                  options: {
                     name: 'autoanimations.settings.midionmiss_name',
                     hint: 'autoanimations.settings.midionmiss_hint',
                     scope: scope.world,
                     type: Boolean,
                     default: false,
                     config: true,
                  }
               });

               settings.push({
                  namespace,
                  key: 'playonDamage',
                  folder: 'Midi-QOL',
                  options: {
                     name: 'autoanimations.settings.midiondmg_name',
                     hint: 'autoanimations.settings.midiondmg_hint',
                     scope: scope.world,
                     type: Boolean,
                     default: false,
                     config: true
                  }
               });

               settings.push({
                  namespace,
                  key: 'EnableCritical',
                  folder: 'Midi-QOL',
                  options: {
                     name: 'autoanimations.settings.crithit_name',
                     hint: 'autoanimations.settings.crithit_hint',
                     scope: scope.world,
                     type: Boolean,
                     default: false,
                     config: true
                  }
               });

               settings.push({
                  namespace,
                  key: 'CriticalAnimation',
                  folder: 'Midi-QOL',
                  options: {
                     name: 'autoanimations.settings.crithitAnim_name',
                     //name: 'Choose A File',
                     scope: scope.world,
                     config: true,
                     type: String,
                     default: "",
                     filePicker: 'imagevideo'
                  }
               });

               settings.push({
                  namespace,
                  key: 'EnableCriticalMiss',
                  folder: 'Midi-QOL',
                  options: {
                     name: 'autoanimations.settings.critmiss_name',
                     hint: 'autoanimations.settings.critmiss_hint',
                     scope: scope.world,
                     type: Boolean,
                     default: false,
                     config: true
                  }
               });

               settings.push({
                  namespace,
                  key: 'CriticalMissAnimation',
                  folder: 'Midi-QOL',
                  options: {
                     name: 'autoanimations.settings.critmissAnim_name',
                     scope: scope.world,
                     config: true,
                     type: String,
                     default: "",
                     filePicker: 'imagevideo'
                  }
               });
            } else {
               settings.push({
                  namespace,
                  key: 'playonDamageCore',
                  folder: game.system.title || game.system.name,
                  options: {
                     name: 'autoanimations.settings.coreondmg_name',
                     hint: 'autoanimations.settings.coreondmg_hint',
                     scope: scope.world,
                     type: Boolean,
                     default: false,
                     config: true,
                  }
               });
               settings.push({
                  namespace,
                  key: 'EnableCritical',
                  folder: game.system.title || game.system.name,
                  options: {
                     name: 'autoanimations.settings.crithit_name',
                     hint: 'autoanimations.settings.crithit_hint',
                     scope: scope.world,
                     type: Boolean,
                     default: false,
                     config: true
                  }
               });

               settings.push({
                  namespace,
                  key: 'CriticalAnimation',
                  folder: game.system.title || game.system.name,
                  options: {
                     name: 'autoanimations.settings.crithitAnim_name',
                     //name: 'Choose A File',
                     scope: scope.world,
                     config: true,
                     type: String,
                     default: "",
                     filePicker: 'imagevideo'
                  }
               });

               settings.push({
                  namespace,
                  key: 'EnableCriticalMiss',
                  folder: game.system.title || game.system.name,
                  options: {
                     name: 'autoanimations.settings.critmiss_name',
                     hint: 'autoanimations.settings.critmiss_hint',
                     scope: scope.world,
                     type: Boolean,
                     default: false,
                     config: true
                  }
               });

               settings.push({
                  namespace,
                  key: 'CriticalMissAnimation',
                  folder: game.system.title || game.system.name,
                  options: {
                     name: 'autoanimations.settings.critmissAnim_name',
                     scope: scope.world,
                     config: true,
                     type: String,
                     default: "",
                     filePicker: 'imagevideo'
                  }
               });
            }
            break;
         case 'ars':
      		settings.push({
                  namespace,
                  key: 'EnableCritical',
                  folder: game.system.title || game.system.name,
                  options: {
                    name: 'autoanimations.settings.crithit_name',
                    hint: 'autoanimations.settings.crithit_hint',
                    scope: scope.world,
                    type: Boolean,
                    default: false,
                    config: true
                  }
                });
                settings.push({
                  namespace,
                  key: 'CriticalAnimation',
                  folder: game.system.title || game.system.name,
                  options: {
                    name: 'autoanimations.settings.crithitAnim_name',
                    //name: 'Choose A File',
                    scope: scope.world,
                    config: true,
                    type: String,
                    default: '',
                    filePicker: 'imagevideo'
                  }
                });
                settings.push({
                  namespace,
                  key: 'EnableCriticalMiss',
                  folder: game.system.title || game.system.name,
                  options: {
                    name: 'autoanimations.settings.critmiss_name',
                    hint: 'autoanimations.settings.critmiss_hint',
                    scope: scope.world,
                    type: Boolean,
                    default: false,
                    config: true
                  }
                });
                settings.push({
                  namespace,
                  key: 'CriticalMissAnimation',
                  folder: game.system.title || game.system.name,
                  options: {
                    name: 'autoanimations.settings.critmissAnim_name',
                    scope: scope.world,
                    config: true,
                    type: String,
                    default: '',
                    filePicker: 'imagevideo'
                  }
                });
	break;
         case 'pf2e':
            settings.push({
               namespace,
               key: 'playonDamageCore',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.coreondmg_name',
                  hint: 'autoanimations.settings.coreondmg_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });

            settings.push({
               namespace,
               key: 'playonmiss',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.midionmiss_name',
                  hint: 'Requires Animations to be played on Attack rolls',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });

            settings.push({
               namespace,
               key: 'disableNestedEffects',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.disableNested',
                  hint: 'autoanimations.settings.disableNestedHint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });

            settings.push({
               namespace,
               key: 'disableGrantedAuraEffects',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.disableGrantedAura',
                  hint: 'autoanimations.settings.disableGrantedAuraHint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });
            break;

         case 'pf1':
            settings.push({
               namespace,
               key: 'disableAEAnimations',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.disableAEAnimations',
                  hint: 'autoanimations.settings.disableAEAnimationsHint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });
            break;
         case "wfrp4e":
            settings.push({
               namespace,
               key: 'castOnlyOnSuccess',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.wfrp4eCastOnlyOnSuccess',
                  hint: 'autoanimations.settings.wfrp4eCastOnlyOnSuccessHint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });
            break;
         case "cyberpunk-red-core":
            settings.push({
               namespace,
               key: 'autofire',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.cyberPunkAutoFire',
                  hint: 'autoanimations.settings.cyberPunkAutoFire_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: true,
                  config: true,
               }
            }, {
               namespace,
               key: 'canMissTarget',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.cyberPunkCanMiss',
                  hint: 'autoanimations.settings.cyberPunkCanMiss_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: true,
                  config: true,
               }
            },{
                namespace,
                key: 'useElevation',
                folder: game.system.title || game.system.name,
                options: {
                   name: 'autoanimations.settings.cyberPunkElevation',
                   hint: 'autoanimations.settings.cyberPunkElevation_hint',
                   scope: scope.world,
                   type: Boolean,
                   default: true,
                   config: true,
                }
             });
            break;
         case "TheWitcherTRPG":
            settings.push({
               namespace,
               key: "attackSkill",
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.coreonatk_name',
                  hint: 'autoanimations.settings.coreonatk_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: true,
                  config: true,
               }
            });
            settings.push({
               namespace,
               key: "damage",
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.coreondmg_name',
                  hint: 'autoanimations.settings.coreondmg_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: true,
                  config: true,
               }
            });
            settings.push({
               namespace,
               key: "spell",
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.coreonatk_name',
                  hint: 'autoanimations.settings.coreonatk_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: true,
                  config: true,
               }
            });
            break;
         case "twodsix":
            settings.push({
               namespace,
               key: 'playtrigger',
               folder: game.system.title || game.system.name,
               options: {
                  name: 'autoanimations.settings.playAnimations',
                  scope: scope.world,
                  type: String,
                  choices: {
                     onAttack: 'autoanimations.settings.attack',
                     onDamage: 'autoanimations.settings.damage',
                  },
                  default: 'onAttack',
                  config: true
               }
            });
            break;
         case "swade":
            settings.push({
               namespace,
               key: "playtrigger",
               folder: game.system.title || game.system.name,
               options: {
                  name: "autoanimations.settings.playAnimations",
                  scope: scope.world,
                  type: String,
                  choices: {
                     onAttack: "autoanimations.settings.swadeTraitRolls",
                     onDamage: "autoanimations.settings.damage"
                  },
                  default: "onDamage",
                  config: true
               }
            });
            break;
         /* Considering options for changing 5e options on "How To Play" Animations
      default:
         settings.push({
            namespace,
            key: 'howToPlay',
            folder: game.system.title || game.system.name,
            options: {
               name: 'When to play Animations',
               hint: 'Tell Automated Animations when you would like animations to play',
               scope: scope.world,
               type: String,
               choices: {
                  onUse: 'On Item Use',
                  attack: 'On Attacks',
                  damage: 'On Damage, if Present',
               },
               default: 'onUse',
               config: true
            }
         });
         */
      }


      // Selectively register settings w/ core Foundry based on whether the user is GM.
      this.registerAll(settings, !game.user.isGM);
   }
}

export const gameSettings = new AAGameSettings();
