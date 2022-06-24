import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const aura = [
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
      name: "autoanimations.animations.spiritguardians",
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
