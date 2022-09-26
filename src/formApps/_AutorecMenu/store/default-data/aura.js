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
            fadeIn: 250,
            fadeOut: 500,
            isRadius: true,
            isWait: false,
            opacity: 0.75,
            playOn: "source",
            size: 3,
            unbindAlpha: false,
            unbindVisbility: false,
            zIndex: 1,
         },
      }),
      secondary: common.secondary(),
      source: common.source(),
      target: common.target()
   }
];
