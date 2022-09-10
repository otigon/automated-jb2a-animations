import * as common from "./common";

export const aefx = [
   {
      ...common.main({ label: "frightened" }),
      menu: "aefx",
      activeEffectType: "onToken",
      data: {
         options: {

         },
         sound: {enable: false},
         video: { dbSection: "static", menuType: "creature", animation: "claw", variant: "01", color: "red" },
      },
      source: common.source(),
      macro: common.macro(),
      secondary: common.secondary(),
   }
];
