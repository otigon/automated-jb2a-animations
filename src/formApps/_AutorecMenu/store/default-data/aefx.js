import * as common from "./common";

export const aefx = [
   {
      ...common.main({ label: "frightened" }),
      menu: "aefx",
      metaData: {default: true},
      activeEffectType: "ontoken",
      primary: {
         options: {
            addTokenWidth: true,
            delay: 0,
            elevation: 1000,
            isMasked: false,
            isRadius: true,
            isWait : false,
            opacity : 0.75,
            persistent : true,
            playOn : "source",
            repeat : 1,
            size : 0.75,
            unbindAlpha : false,
            unbindVisibility : false,
            zIndex : 1,
         },
         sound: {enable: false},
         video: { dbSection: "static", menuType: "conditions", animation: "horror", variant: "01", color: "purple" },
      },
      source: common.source(),
      macro: common.macro(),
      secondary: common.secondary(),
   }
];
