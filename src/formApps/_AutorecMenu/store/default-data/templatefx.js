import * as common from "./common";

export const templatefx = [
   {
      ...common.main({ label: "calllightning" }),
      menu: "templatefx",
      primary: common.primary({
         video: { dbSection: "templatefx", menuType: "circle", animation: "calllightning", variant: '01', color: 'blueorange' },
         options: {
            delay: 500,
            elevation: 1000,
            isMasked: false,
            occlusionAlpha: 0.7,
            occlusionMode: "3",
            opacity: 0.75,
            persistType: "overheadtile",
            persistent: true,
            removeTemplate: true,
            repeat: 1,
            scaleX: 1,
            scaleY: 1,
            zIndex: 1
         }
      }),
      macro: common.macro(),
      source: common.source(),
      target: common.target(),
   },

   {
      ...common.main({ label: "fogcloud" }),
      menu: "templatefx",
      primary: common.primary({
         video: { dbSection: "templatefx", menuType: "circle", animation: "fogcloud", variant: '01', color: 'white' },
         options: {
            delay: 500,
            elevation: 1000,
            isMasked: false,
            occlusionAlpha: 0.65,
            occlusionMode: "3",
            opacity: 0.75,
            persistType: "overheadtile",
            persistent: true,
            removeTemplate: true,
            repeat: 1,
            scaleX: 1,
            scaleY: 1,
            zIndex: 1
         }
      }),
      macro: common.macro(),
      source: common.source(),
      target: common.target(),
   }
];
