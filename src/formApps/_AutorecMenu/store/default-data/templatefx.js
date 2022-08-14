import * as common from "./common";

export const templatefx = [
   {
      ...common.main({ label: "calllightning" }),
      menu: "templatefx",
      primary: common.primary({
         video: { menuType: "circle", animation: "calllightning", variant: '01', color: 'blueorange' },
         options: {
            below: false,
            delay: 500,
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
         video: { menuType: "circle", animation: "fogcloud", variant: '01', color: 'white' },
         options: {
            below: false,
            delay: 500,
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
