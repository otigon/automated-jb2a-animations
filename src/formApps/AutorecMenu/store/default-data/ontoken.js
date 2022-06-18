import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

import * as common from "./common";

export const ontoken = [
   {
      id: uuidv4(),
      name: "autoanimations.animations.curewounds",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: true,
         delay: 500,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1.5,
         staticType: "targetDefault",
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'curewounds',
         variant: '01',
         color: 'blue',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.itemHealingWord",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: true,
         delay: 500,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1.5,
         staticType: "targetDefault",
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'generichealing',
         variant: '01',
         color: 'blue',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.tollthedead",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1,
         staticType: "target",
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'tollthedead',
         variant: 'complete',
         color: 'green',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.bite",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1,
         staticType: "target",
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1
      },
      primary: {
         menuType: "creature",
         animation: "bite",
         variant: "01",
         color: "red",
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.claw",
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: {
         type: "",
      },
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1,
         staticType: "target",
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1
      },
      primary: {
         menuType: "creature",
         animation: "claw",
         variant: "01",
         color: "red",
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   }
];
