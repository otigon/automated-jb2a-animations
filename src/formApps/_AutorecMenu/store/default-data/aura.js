import * as common from "./common";

export const aura = [
   {
      ...common.main({ label: "spiritguardians" }),
      menu: "aura",
      macro: common.macro(),
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: "spiritguardians", variant: '01', color: 'blueyellow' },
         options: {
            addTokenWidth: true,
            delay: 0,
            elevation: 0,
            ignoreTarget: true,
            isMasked: false,
            isWait: false,
            opacity: 0.75,
            unbindAlpha: false,
            unbindVisbility: false,
            zIndex: 1,
            radius: 3,
         },
      }),
      secondary: common.secondary(),
      source: common.source(),
      target: common.target()
   }
];
