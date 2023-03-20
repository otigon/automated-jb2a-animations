import * as common from "./common";

export const ontoken = [
   {
      ...common.main({ label: "curewounds" }),
      menu: "ontoken",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: 'curewounds', variant: '01', color: 'blue' },
         options: {
            addTokenWidth: false,
            anchor: "0.5",
            contrast: 0,
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
            saturate: 0,
            size: 1.5,
            playOn: "default",
            tint: false,
            tintColor: "#FFFFFF",   
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "explosion",
         data: {
            color01: "#00ff08",
            color02: "#00ffaa",
            spritePath: "modules/levels-3d-preview/assets/particles/symbol_01.png",
            life: 2000,
            rate: 1,
            gravity: -50,
            mass: 20000,
            scale: 0.7,
            speed: 1
         },
         sound: {
            enable: false
         },
         secondary: {
            enable: false,
            data: {
               color01: "#FFFFFF",
               color02: "#FFFFFF"
            }
         },
         tokens: {
            enable: false,
            source: false,
            target: false,
            sourceType: "twirl",
            sourcePlay: "start",
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "itemHealingWord" }),
      menu: "ontoken",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: 'generichealing', variant: '01', color: 'blue' },
         options: {
            addTokenWidth: false,
            anchor: "0.5",
            contrast: 0,
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
            saturate: 0,
            size: 1.5,
            tint: false,
            tintColor: "#FFFFFF",   
            playOn: "default",
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "explosion",
         data: {
            color01: "#0091ff",
            color02: "#00fbff",
            spritePath: "modules/levels-3d-preview/assets/particles/symbol_01.png",
            speed: 1,
            gravity: -50,
            mass: 20000,
            life: 2000,
            rate: 1,
            scale: 0.1,
            alpha: 1
         },
         sound: {
            enable: false
         },
         secondary: {
            enable: false,
            data: {
               color01: "#FFFFFF",
               color02: "#FFFFFF"
            }
         },
         tokens: {
            enable: false,
            source: false,
            target: false,
            sourceType: "twirl",
            sourcePlay: "start",
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "tollthedead" }),
      menu: "ontoken",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "static", menuType: "spell", animation: 'tollthedead', variant: 'complete', color: 'green' },
         options: {
            addTokenWidth: false,
            anchor: "0.5",
            contrast: 0,
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
            saturate: 0,
            size: 1,
            playOn: "target",
            tint: false,
            tintColor: "#FFFFFF",   
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "explosion",
         data: {
            color01: "#9900ff",
            color02: "#4400ff",
            spritePath: "modules/levels-3d-preview/assets/particles/magic_02.png",
            rate: 1,
            life: 2000,
            gravity: 0,
            mass: 20000,
            scale: 0.6,
            alpha: 1
         },
         sound: {
            enable: false
         },
         secondary: {
            enable: false,
            data: {
               color01: "#FFFFFF",
               color02: "#FFFFFF"
            }
         },
         tokens: {
            enable: true,
            source: false,
            target: true,
            sourceType: "twirl",
            sourcePlay: "start",
            targetType: "debuff",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "bite" }),
      menu: "ontoken",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "static", menuType: "creature", animation: "bite", variant: "01", color: "red" },
         options: {
            addTokenWidth: false,
            anchor: "0.5",
            contrast: 0,
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
            saturate: 0,
            size: 1,
            playOn: "target",
            tint: false,
            tintColor: "#FFFFFF",   
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "token",
         data: {
            color01: "#FFFFFF",
            color02: "#FFFFFF",
            spritePath: "modules/levels-3d-preview/assets/particles/emberssmall.png",
            animationType: "charge",
            playOn: "source"
         },
         sound: {
            enable: false
         },
         secondary: {
            enable: false,
            data: {
               color01: "#FFFFFF",
               color02: "#FFFFFF"
            }
         },
         tokens: {
            enable: false,
            source: false,
            target: false,
            sourceType: "twirl",
            sourcePlay: "start",
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "claw" }),
      menu: "ontoken",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "static", menuType: "creature", animation: "claw", variant: "01", color: "red" },
         options: {
            addTokenWidth: false,
            anchor: "0.5",
            contrast: 0,
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
            saturate: 0,
            size: 1,
            playOn: "target",
            tint: false,
            tintColor: "#FFFFFF",   
            unbindAlpha: false,
            unbindVisibility: false,
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "token",
         data: {
            color01: "#FFFFFF",
            color02: "#FFFFFF",
            spritePath: "modules/levels-3d-preview/assets/particles/emberssmall.png",
            animationType: "swipe",
            playOn: "source"
         },
         sound: {
            enable: false
         },
         secondary: {
            enable: false,
            data: {
               color01: "#FFFFFF",
               color02: "#FFFFFF"
            }
         },
         tokens: {
            enable: false,
            source: false,
            target: false,
            sourceType: "twirl",
            sourcePlay: "start",
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      source: common.source(),
      target: common.target()
   }
];
