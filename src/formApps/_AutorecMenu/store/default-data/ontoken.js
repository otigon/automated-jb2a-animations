import * as common from "./common";

export const ontoken = [
   {
      ...common.main({ label: "curewounds" }),
      menu: "ontoken",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: 'curewounds', variant: '01', color: 'blue' },
         options: {
            addTokenWidth:false,
            anchor: "0.5",
            delay: 0,
            elevation: 0,
            fadeIn: 250,
            fadeOut: 500,
            isMasked: false,
            isRadius: false,
            isWait: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            repeatDelay: 500,
            size: 1.5,
            playOn: "default",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "itemHealingWord" }),
      menu: "ontoken",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: 'generichealing', variant: '01', color: 'blue' },
         options: {
            addTokenWidth:false,
            anchor: "0.5",
            delay: 0,
            elevation: 0,
            fadeIn: 250,
            fadeOut: 500,
            isMasked: false,
            isRadius: false,
            isWait: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            repeatDelay: 500,
            size: 1.5,
            playOn: "default",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "tollthedead" }),
      menu: "ontoken",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: 'tollthedead', variant: 'complete', color: 'green' },
         options: {
            addTokenWidth:false,
            anchor: "0.5",
            delay: 0,
            elevation: 1000,
            fadeIn: 250,
            fadeOut: 500,
            isMasked: false,
            isRadius: false,
            isWait: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            repeatDelay: 500,
            size: 1,
            playOn: "target",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "bite" }),
      menu: "ontoken",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "static", menuType: "creature", animation: "bite", variant: "01", color: "red" },
         options: {
            addTokenWidth:false,
            anchor: "0.5",
            delay: 0,
            elevation: 1000,
            fadeIn: 250,
            fadeOut: 500,
            isMasked: false,
            isRadius: false,
            isWait: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            repeatDelay: 500,
            size: 1,
            playOn: "target",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "claw" }),
      menu: "ontoken",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "static", menuType: "creature", animation: "claw", variant: "01", color: "red" },
         options: {
            addTokenWidth:false,
            anchor: "0.5",
            delay: 0,
            elevation: 1000,
            fadeIn: 250,
            fadeOut: 500,
            isMasked: false,
            isRadius: false,
            isWait: false,
            opacity: 1,
            persistent: false,
            repeat: 1,
            repeatDelay: 500,
            size: 1,
            playOn: "target",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   }
];
