import * as common from "./common";

export const ontoken = [
   {
      ...common.main({ label: "curewounds" }),
      menu: "ontoken",
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: 'curewounds', variant: '01', color: 'blue' },
         options: {
            delay: 500,
            elevation: 0,
            isMasked: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            setRadius: false,
            size: 1.5,
            staticType: "default",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "itemHealingWord" }),
      menu: "ontoken",
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: 'generichealing', variant: '01', color: 'blue' },
         options: {
            delay: 500,
            elevation: 0,
            isMasked: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            setRadius: false,
            size: 1.5,
            staticType: "default",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "tollthedead" }),
      menu: "ontoken",
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: 'tollthedead', variant: 'complete', color: 'green' },
         options: {
            delay: 500,
            elevation: 1000,
            isMasked: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            setRadius: false,
            size: 1,
            staticType: "target",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "bite" }),
      menu: "ontoken",
      primary: common.primary({
         video: { dbSection: "static", menuType: "creature", animation: "bite", variant: "01", color: "red" },
         options: {
            delay: 500,
            elevation: 1000,
            isMasked: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            setRadius: false,
            size: 1,
            staticType: "target",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "claw" }),
      menu: "ontoken",
      primary: common.primary({
         video: { dbSection: "static", menuType: "creature", animation: "claw", variant: "01", color: "red" },
         options: {
            delay: 500,
            elevation: 1000,
            isMasked: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            setRadius: false,
            size: 1,
            staticType: "target",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      explosion: common.explosion(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   }
];
