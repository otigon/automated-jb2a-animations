import * as common from "./common";

export const aefx = [
   {
      ...common.main({ label: "frightened" }),
      menu: "aefx",
      activeEffectType: "dualAnim",
      data: {
         intro: {
            options: {},
            sound: {enable: false}
         },
         loop: {
            options: {},
         }
      },
      source: common.source(),
      macro: common.macro(),
   }
];
