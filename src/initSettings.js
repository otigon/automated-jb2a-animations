import AutorecShim from './formApps/_AutorecMenu/appShim.js'
import { aaAutorec } from './mergeScripts/autorec/aaAutoRecList.js';
import { AnimationState } from './AnimationState.js';

/**
 * Constants for setting scope type.
 *
 * @type {{world: string, client: string}}
 */
const scope = {
   client: 'client',
   world: 'world'
};

const namespace = 'autoanimations';

/**
 * @param {TJSGameSettings}   gameSettings -
 */
export function initSettings(gameSettings) {
   // Add a convenience hook to open Autorec settings from macro.
   Hooks.on('AA.Open.AutorecSetting', () => new AutorecShim());

   game.settings.registerMenu(namespace, 'custom-autorec', {
      label: 'autoanimations.settings.autoRecSetting',
      icon: 'fas fa-dice-d20',
      type: AutorecShim,
      restricted: true,
   });

   const settings = [];

   settings.push({
      namespace,
      key: 'aaAutorec',
      options: {
         name: 'Automatic Recognition',
         hint: 'Configure Automatic Recognition',
         scope: scope.world,
         config: false,
         default: aaAutorec.defaultConfiguration,
         type: Object,
      }
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
         scope: scope.client,
         config: true,
         type: Boolean,
         default: false,
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
         onChange: () => { window.location.reload() }
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
         scope: scope.client,
         config: true,
         type: Boolean,
         default: false,
      }
   });

   settings.push({
      namespace,
      key: 'noTips',
      options: {
         name: 'autoanimations.settings.noTips',
         hint: 'autoanimations.settings.noTipsHint',
         scope: scope.client,
         config: true,
         type: Boolean,
         default: false,
      }
   });

   switch (game.system.id) {
      case "cyphersystem":
         settings.push({
            namespace,
            key: 'EnableCritical',
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
            options: {
               name: 'autoanimations.settings.CriticalAnimation',
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
            options: {
               name: 'autoanimations.settings.midiondmg_name',
               hint: 'autoanimations.settings.midiondmg_hint',
               scope: scope.world,
               type: Boolean,
               default: false,
               config: true,
               onChange: () => { window.location.reload() }
            }
         });
         break;

      case 'dnd5e':
      case 'sw5e':
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

         if (game.modules.get('midi-qol')?.active) {
            settings.push({
               namespace,
               key: 'playonhit',
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
               options: {
                  name: 'autoanimations.settings.midiondmg_name',
                  hint: 'autoanimations.settings.midiondmg_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
                  //onChange: () => { window.location.reload() }
               }
            });

            settings.push({
               namespace,
               key: 'EnableCritical',
               options: {
                  name: 'autoanimations.settings.crithit_name',
                  hint: 'autoanimations.settings.crithit_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
                  onchange: () => { window.location.reload() }
               }
            });

            settings.push({
               namespace,
               key: 'CriticalAnimation',
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
               options: {
                  name: 'autoanimations.settings.critmiss_name',
                  hint: 'autoanimations.settings.critmiss_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
                  onchange: () => { window.location.reload() }
               }
            });

            settings.push({
               namespace,
               key: 'CriticalMissAnimation',
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
               options: {
                  name: 'autoanimations.settings.coreondmg_name',
                  hint: 'autoanimations.settings.coreondmg_hint',
                  scope: scope.world,
                  type: Boolean,
                  default: false,
                  config: true,
               }
            });
         }
         break;

      case 'pf2e':
         settings.push({
            namespace,
            key: 'playonDamageCore',
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
            options: {
               name: 'autoanimations.settings.disableNested',
               hint: 'autoanimations.settings.disableNestedHint',
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
   }

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

   gameSettings.registerAll(settings);
}
