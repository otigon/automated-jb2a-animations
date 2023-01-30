import * as common from "./common";

export const templatefx = [
   {
      ...common.main({ label: "calllightning" }),
      menu: "templatefx",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "templatefx", menuType: "circle", animation: "calllightning", variant: '01', color: 'blueorange' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isMasked: false,
            isWait: false,
            occlusionAlpha: 0.7,
            occlusionMode: "3",
            opacity: 0.75,
            persistType: "overheadtile",
            persistent: true,
            removeTemplate: true,
            repeat: 1,
            repeatDelay: 500,
            rotate: 0,
            saturate: 0,
            scale: "1",
            tint: false,
            tintColor: "#FFFFFF",
            zIndex: 1
         }
      }),
      macro: common.macro(),
      secondary: common.secondary(),
      source: common.source(),
      target: common.target(),
   },

   {
      ...common.main({ label: "fogcloud" }),
      menu: "templatefx",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "templatefx", menuType: "circle", animation: "fogcloud", variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            isMasked: false,
            occlusionAlpha: 0.65,
            occlusionMode: "3",
            opacity: 0.75,
            persistType: "overheadtile",
            persistent: true,
            removeTemplate: true,
            repeat: 1,
            repeatDelay: 500,
            rotate: 0,
            saturate: 0,
            scale: "1",
            tint: false,
            tintColor: "#FFFFFF",
            zIndex: 1
         }
      }),
      macro: common.macro(),
      secondary: common.secondary(),
      source: common.source(),
      target: common.target(),
   }
];
