import * as common from "./common";

export const melee = [
   {
      ...common.main({ name: "dagger" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'dagger', variant: '01', color: 'white' })
   },

   {
      ...common.main({ name: "flurryofblows" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'flurryofblows', variant: 'physical', color: 'blue' })
   },

   {
      ...common.main({ name: "greataxe" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'greataxe', variant: '01', color: 'white' })
   },

   {
      ...common.main({ name: "greatclub" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'greatclub', variant: '01', color: 'white' })
   },

   {
      ...common.main({ name: "greatsword" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'greatsword', variant: '01', color: 'white' })
   },

   {
      ...common.main({ name: "handaxe" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'handaxe', variant: '01', color: 'white' })
   },

   {
      ...common.main({ name: "sword" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'sword', variant: '01', color: 'white' })
   },

   {
      ...common.main({ name: "mace" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'mace', variant: '01', color: 'white' })
   },

   {
      ...common.main({ name: "maul" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'maul', variant: '01', color: 'white' })
   },

   {
      ...common.main({ name: "spear" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'spear', variant: '01', color: 'white' })
   },

   {
      ...common.main({ name: "rapier" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'rapier', variant: '01', color: 'white' })
   },

   {
      ...common.main({ name: "unarmedstrike" }),
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      meleeSwitch: {
         switchType: "on",
         returning: false,
      },
      options: {
         below: false,
         delay: 500,
         opacity: 1,
         repeat: 1,
         scale: 1,
         zIndex: 1,
      },
      primary: common.primary({ menuType: "weapon", animation: 'unarmedstrike', variant: 'physical', color: 'blue' })
   }
];
