import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

import * as common from "./common";

export const melee = [
   {
      id: uuidv4(),
      name: "autoanimations.animations.dagger",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'dagger',
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.flurryofblows",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'flurryofblows',
         variant: 'physical',
         color: 'blue',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.greataxe",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'greataxe',
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.greatclub",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'greatclub',
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.greatsword",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'greatsword',
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.handaxe",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'handaxe',
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.sword",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'sword',
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.mace",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'mace',
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.maul",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'maul',
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.spear",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'spear',
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.rapier",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'rapier',
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.unarmedstrike",
      audio: common.audio({ explosion: true, melee: true, source: true, target: true }),
      explosions: {
         enable: false,
      },
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
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
      primary: {
         menuType: "weapon",
         animation: 'unarmedstrike',
         variant: 'physical',
         color: 'blue',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   }
];
