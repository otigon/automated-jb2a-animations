import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const aura = [
   {
      id: uuidv4(),
      name: "autoanimations.animations.spiritguardians",
      audio: {
         a01: {
            enable: false,
         },
      },
      macro: {
         enable: false,
      },
      options: {
         addTokenWidth: true,
         auraRadius: 3,
         below: true,
         ignoreTarget: true,
         isMasked: false,
         opacity: 0.75,
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1,
      },
      primary: {
         menuType: "spell",
         animation: "spiritguardians",
         variant: '01',
         color: 'darkblue',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   }
];
