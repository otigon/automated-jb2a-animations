import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const range = [
   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.crossbow",
      primary: {
         menuType: "weapon",
         animation: 'bolt',
         variant: 'physical',
         color: 'orange',
      },
      options: {
         repeat: 1,
         delay: 500,
         type: "weapon",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.bow",
      primary: {
         menuType: "weapon",
         animation: 'arrow',
         variant: 'regular',
         color: 'regular',
      },
      options: {
         repeat: 1,
         delay: 500,
         type: "weapon",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.disintegrate",
      primary: {
         menuType: "spell",
         animation: 'disintegrate',
         variant: '01',
         color: 'green',
      },
      options: {
         repeat: 1,
         delay: 500,
         type: "spell",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.eldritchblast",
      primary: {
         menuType: "spell",
         animation: 'eldritchblast',
         variant: '01',
         color: 'purple',
      },
      options: {
         repeat: 1,
         delay: 500,
         type: "spell",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.firebolt",
      primary: {
         menuType: "spell",
         animation: 'firebolt',
         variant: '01',
         color: 'orange',
      },
      options: {
         repeat: 1,
         delay: 500,
         type: "spell",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.guidingbolt",
      primary: {
         menuType: "spell",
         animation: 'guidingbolt',
         variant: '01',
         color: 'yellowblue',
      },
      options: {
         repeat: 1,
         delay: 500,
         type: "spell",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.magicmissile",
      primary: {
         menuType: "spell",
         animation: 'magicmissile',
         variant: '01',
         color: 'purple',
      },
      options: {
         repeat: 3,
         delay: 500,
         type: "spell",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.rayoffrost",
      primary: {
         menuType: "spell",
         animation: 'rayoffrost',
         variant: '01',
         color: 'blue',
      },
      options: {
         repeat: 1,
         delay: 500,
         type: "spell",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.scorchingray",
      primary: {
         menuType: "spell",
         animation: 'scorchingray',
         variant: '01',
         color: 'orange',
      },
      options: {
         repeat: 1,
         delay: 500,
         type: "spell",
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.witchbolt",
      primary: {
         menuType: "spell",
         animation: 'witchbolt',
         variant: '01',
         color: 'blue',
      },
      options: {
         repeat: 1,
         delay: 500,
         type: "spell",
      }
   }
];
