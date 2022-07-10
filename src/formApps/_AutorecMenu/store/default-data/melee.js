import * as common from "./common";

function meleeSwitch() {
   return {
      switchType: "on",
      returning: false,
      sound: common.sound()
   }
}

export const melee = [
   {
      ...common.main({ label: "dagger" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'dagger', variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "flurryofblows" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'flurryofblows', variant: 'physical', color: 'blue' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "greataxe" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'greataxe', variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "greatclub" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'greatclub', variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "greatsword" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'greatsword', variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "handaxe" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'handaxe', variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "sword" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'sword', variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "mace" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'mace', variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "maul" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'maul', variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "spear" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'spear', variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "rapier" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'rapier', variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "unarmedstrike" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'unarmedstrike', variant: 'physical', color: 'blue' },
         options: {
            below: false,
            delay: 500,
            opacity: 1,
            repeat: 1,
            scale: 1,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: meleeSwitch(),
      source: common.source(),
      target: common.target()
   }
];
