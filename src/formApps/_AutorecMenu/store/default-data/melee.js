import * as common from "./common";

export const melee = [
   {
      ...common.main({ label: "dagger" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'dagger', variant: '01', color: 'white' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1,
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target(),
   },

   {
      ...common.main({ label: "flurryofblows" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'flurryofblows', variant: 'physical', color: 'blue' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "greataxe" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'greataxe', variant: '01', color: 'white' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "greatclub" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'greatclub', variant: '01', color: 'white' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "greatsword" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'greatsword', variant: '01', color: 'white' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "handaxe" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'handaxe', variant: '01', color: 'white' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "sword" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'sword', variant: '01', color: 'white' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "mace" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'mace', variant: '01', color: 'white' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "maul" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'maul', variant: '01', color: 'white' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "spear" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'spear', variant: '01', color: 'white' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "rapier" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'rapier', variant: '01', color: 'white' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "unarmedstrike" }),
      menu: "melee",
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'unarmedstrike', variant: 'physical', color: 'blue' },
         options: {
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            scale: 1,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   }
];
