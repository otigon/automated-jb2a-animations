import * as common from "./common";

export const aura = [
   {
      ...common.main({ label: "spiritguardians" }),
      menu: "aura",
      macro: common.macro(),
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: "spiritguardians", variant: '01', color: 'yellowblue' },
         options: {
            addTokenWidth: true,
            alpha: false,
            alphaMax: 0.5,
            alphaMin: -0.5,
            alphaDuration: 1000,
            breath: false,
            breathMax: 1.05,
            breathMin: 0.95,
            breathDuration: 1000,
            delay: 0,
            elevation: 0,
            fadeIn: 250,
            fadeOut: 500,
            isRadius: true,
            isWait: false,
            opacity: 0.75,
            playOn: "source",
            size: 3,
            tint: false,
            tintColor: "#FFFFFF",
            tintSaturate: 0,    
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
