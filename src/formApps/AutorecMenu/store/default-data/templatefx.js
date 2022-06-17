import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

import * as common from "./common";

export const templatefx = [
   {
      id: uuidv4(),
      name: "autoanimations.animations.calllightning",
      audio: common.audio({ source: true }),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         isMasked: false,
         occlusionAlpha: 0.7,
         occlusionMode: "3",
         opacity: 0.75,
         persistType: "overheadtile",
         persistent: true,
         removeTemplate: true,
         repeat: 1,
         scaleX: 1,
         scaleY: 1,
         zIndex: 1,
      },
      primary: {
         menuType: "circle",
         animation: "calllightning",
         variant: '01',
         color: 'blueorange',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      id: uuidv4(),
      name: "autoanimations.animations.fogcloud",
      audio: common.audio({ source: true }),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         isMasked: false,
         occlusionAlpha: 0.65,
         occlusionMode: "3",
         opacity: 0.75,
         persistType: "overheadtile",
         persistent: true,
         removeTemplate: true,
         repeat: 1,
         scaleX: 1,
         scaleY: 1,
         zIndex: 1,
      },
      primary: {
         menuType: "circle",
         animation: "fogcloud",
         variant: '01',
         color: 'white',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   }
];
