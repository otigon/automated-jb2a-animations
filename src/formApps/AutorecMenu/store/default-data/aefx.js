import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const aefx = [
   {
      id: uuidv4(),
      name: "Frightened",
      animType: "static",
      primary: {
         menuType: "conditions",
         animation: "drop",
         variant: "01",
         color: "green",
      },
      options: {
         persistent: true,
         below: false,
         opacity: 1,
         repeat: 1,
         delay: 250,
         scale: 1,
         staticType: "source",
      }
   }
];
