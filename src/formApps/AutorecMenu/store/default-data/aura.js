import * as common from "./common";

export const aura = [
   {
      ...common.main({ name: "spiritguardians" }),
      audio: common.audio({ source: true, target: true }),
      macro: common.macro(),
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
      primary: common.primary({ menuType: "spell", animation: "spiritguardians", variant: '01', color: 'darkblue' }),
   }
];
