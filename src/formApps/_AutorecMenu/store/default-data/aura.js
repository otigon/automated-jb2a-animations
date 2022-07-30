import * as common from "./common";

export const aura = [
   {
      ...common.main({ label: "spiritguardians" }),
      menu: "aura",
      macro: common.macro(),
      primary: common.primary({
         video: { menuType: "spell", animation: "spiritguardians", variant: '01', color: 'darkblue' },
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
      }),
      source: common.source(),
      target: common.target()
   }
];
