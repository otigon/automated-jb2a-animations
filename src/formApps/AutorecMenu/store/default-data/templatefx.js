import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const templatefx = [
   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.calllightning",
      primary: {
         menuType: "circle",
         animation: "calllightning",
         variant: '01',
         color: 'blueorange',
      },
      options: {
         scaleX: 1,
         scaleY: 1,
         occlusionAlpha: 0.7,
         occlusionMode: "3",
         opacity: 0.75,
         overhead: true,
         persistent: true,
         persistType: 'overheadtile',
         removeTemplate: true,
         repeat: 1,
         below: false,
         custom: false,
         delay: 500,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.fogcloud",
      primary: {
         menuType: "circle",
         animation: "fogcloud",
         variant: '01',
         color: 'white',
      },
      options: {
         occlusionAlpha: 0.65,
         occlusionMode: "3",
         opacity: 0.75,
         overhead: true,
         persistent: true,
         persistType: 'overheadtile',
         removeTemplate: true,
         repeat: 1,
         scaleX: 1,
         scaleY: 1,
         custom: false,
         delay: 500,
         below: false,
      }
   }
];
