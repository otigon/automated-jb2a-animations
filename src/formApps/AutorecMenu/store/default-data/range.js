import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

import * as common from "./common";

export const range = [
   {
      id: uuidv4(),
      name: "autoanimations.animations.crossbow",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: {
         menuType: "weapon",
         animation: 'bolt',
         variant: 'physical',
         color: 'orange',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.bow",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: {
         menuType: "weapon",
         animation: 'arrow',
         variant: 'regular',
         color: 'regular',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.disintegrate",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'disintegrate',
         variant: '01',
         color: 'green',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.eldritchblast",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'eldritchblast',
         variant: '01',
         color: 'purple',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.firebolt",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'firebolt',
         variant: '01',
         color: 'orange',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.guidingbolt",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'guidingbolt',
         variant: '01',
         color: 'yellowblue',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.magicmissile",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'magicmissile',
         variant: '01',
         color: 'purple',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.rayoffrost",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'rayoffrost',
         variant: '01',
         color: 'blue',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.scorchingray",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'scorchingray',
         variant: '01',
         color: 'orange',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.witchbolt",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'witchbolt',
         variant: '01',
         color: 'blue',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   }
];
