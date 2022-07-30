import * as common from "./common";

export const aefx = [
   {
      ...common.main({ label: "frightened" }),
      menu: "aefx",
      primary: common.primary({
         video: { menuType: "conditions", animation: "drop", variant: "01", color: "green" },
         options: {
            persistent: true,
            below: false,
            opacity: 1,
            repeat: 1,
            delay: 250,
            scale: 1,
            staticType: "source",
         }
      })
   }
];
