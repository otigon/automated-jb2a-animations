import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const aura = [
   {
      id: uuidv4(),
      hidden: true,
      name: "autoanimations.animations.spiritguardians",
      primary: {
         menuType: "spell",
         animation: "spiritguardians",
         variant: '01',
         color: 'darkblue',
      },
      options: {
         opacity: 0.75,
         scale: 3.5,
         static: false,
         ignoretargets: true,
         custom: false,
         below: false,
      }
   }
];
