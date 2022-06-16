import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const melee = [
   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.dagger",
      primary: {
         menuType: "weapon",
         animation: 'dagger',
         variant: '01',
         color: 'white',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.flurryofblows",
      primary: {
         menuType: "weapon",
         animation: 'flurryofblows',
         variant: 'physical',
         color: 'blue',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.greataxe",
      primary: {
         menuType: "weapon",
         animation: 'greataxe',
         variant: '01',
         color: 'white',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.greatclub",
      primary: {
         menuType: "weapon",
         animation: 'greatclub',
         variant: '01',
         color: 'white',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.greatsword",
      primary: {
         menuType: "weapon",
         animation: 'greatsword',
         variant: '01',
         color: 'white',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.handaxe",
      primary: {
         menuType: "weapon",
         animation: 'handaxe',
         variant: '01',
         color: 'white',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.sword",
      primary: {
         menuType: "weapon",
         animation: 'sword',
         variant: '01',
         color: 'white',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.mace",
      primary: {
         menuType: "weapon",
         animation: 'mace',
         variant: '01',
         color: 'white',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.maul",
      primary: {
         menuType: "weapon",
         animation: 'maul',
         variant: '01',
         color: 'white',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.spear",
      primary: {
         menuType: "weapon",
         animation: 'spear',
         variant: '01',
         color: 'white',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.rapier",
      primary: {
         menuType: "weapon",
         animation: 'rapier',
         variant: '01',
         color: 'white',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   },

   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.unarmedstrike",
      primary: {
         menuType: "weapon",
         animation: 'unarmedstrike',
         variant: 'physical',
         color: 'blue',
      },
      options: {
         repeat: 1,
         delay: 500,
         scale: 1,
      }
   }
];
