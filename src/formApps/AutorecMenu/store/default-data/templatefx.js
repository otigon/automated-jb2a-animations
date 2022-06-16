import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const templatefx = [
   {
      audio: {
         a01: {
            enable:false,
         },
      },
      id: uuidv4(),
      hidden: true,
      macro: {
         enable: false,
      },
      name: "autoanimations.animations.calllightning",
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
         unbindAlpha: false,
         unbindVisbility: false,
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
      audio: {
         a01: {
            enable:false,
         },
      },
      id: uuidv4(),
      hidden: true,
      macro: {
         enable: false,
      },
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.fogcloud",
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
         unbindAlpha: false,
         unbindVisbility: false,
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
