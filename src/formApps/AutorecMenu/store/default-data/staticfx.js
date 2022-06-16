import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const staticfx = [
   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.curewounds",
      primary: {
         menuType: "spell",
         animation: 'curewounds',
         variant: '01',
         color: 'blue',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1.5,
         below: true,
         staticType: "targetDefault",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.itemHealingWord",
      primary: {
         menuType: "spell",
         animation: 'generichealing',
         variant: '01',
         color: 'blue',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1.5,
         below: true,
         staticType: "targetDefault",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.tollthedead",
      primary: {
         menuType: "spell",
         animation: 'tollthedead',
         variant: 'complete',
         color: 'green',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
         below: false,
         staticType: "target",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.bite",
      primary: {
         menuType: "creature",
         animation: "bite",
         variant: "01",
         color: "red",
      },
      options: {
         repeat: 1,
         scale: 1,
         staticType: "target",
         below: false,
         custom: false,
         delay: 500,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.claw",
      primary: {
         menuType: "creature",
         animation: "claw",
         variant: "01",
         color: "red",
      },
      options: {
         repeat: 1,
         scale: 1,
         staticType: "target",
         below: false,
         custom: false,
         delay: 500,
      }
   }
];
