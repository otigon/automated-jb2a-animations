import * as common from "./common";

export const range = [
   {
      ...common.main({ label: "crossbow" }),
      menu: "range",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "range", menuType: "weapon", animation: 'bolt', variant: 'physical', color: 'orange' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "sprite",
         data: {
            color01: "#FFFFFF",
            color02: "#FFFFFF",
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Arrow.glb",
            rotationY: 0,
            rotationX: 90,
            speed: 10,
            scale: 0.5
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
            source: true,
            target: true,
            sourceType: "bow",
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
      ...common.main({ label: "bow" }),
      menu: "range",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "range", menuType: "weapon", animation: 'arrow', variant: 'regular', color: 'regular' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "sprite",
         data: {
            color01: "#FFFFFF",
            color02: "#FFFFFF",
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Arrow.glb",
            speed: 10,
            rotationX: 90,
            scale: 0.5
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
            source: true,
            target: true,
            sourceType: "bow",
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
      ...common.main({ label: "disintegrate" }),
      menu: "range",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'disintegrate', variant: '01', color: 'green' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "ray",
         data: {
            color01: "#00ff08",
            color02: "#d4ff00",
            spritePath: "modules/levels-3d-preview/assets/particles/emberssmall.png",
            speed: 1,
            life: 2000,
            rate: 50
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
            source: true,
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
      ...common.main({ label: "eldritchblast" }),
      menu: "range",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'eldritchblast', variant: '01', color: 'purple' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "ray",
         data: {
            color01: "#4e16a2",
            color02: "#1e00ff",
            spritePath: "modules/levels-3d-preview/assets/particles/emberssmall.png",
            life: 2000,
            rate: 50
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
            source: true,
            target: true,
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
      ...common.main({ label: "firebolt" }),
      menu: "range",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'firebolt', variant: '01', color: 'orange' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "projectile",
         data: {
            color01: "#ff0000",
            color02: "#fff70a",
            spritePath: "modules/levels-3d-preview/assets/particles/emberssmall.png",
            arc: 1
         },
         sound: {
            enable: false
         },
         secondary: {
            enable: true,
            data: {
               color01: "#ff0000",
               color02: "#ffda24",
               life: 400,
               speed: 0.1,
               mass: 1000,
               scale: 1,
               rate: 1
            }
         },
         tokens: {
            enable: true,
            source: true,
            target: true,
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
      ...common.main({ label: "guidingbolt" }),
      menu: "range",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'guidingbolt', variant: '01', color: 'yellowblue' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "projectile",
         data: {
            color01: "#eeff00",
            color02: "#00d9ff",
            spritePath: "modules/levels-3d-preview/assets/particles/emberssmall.png",
            speed: 5,
            arc: 1,
            life: 2000
         },
         sound: {
            enable: false
         },
         secondary: {
            enable: true,
            data: {
               color01: "#fff700",
               color02: "#0adaff",
               mass: 1000,
               life: 300,
               gravity: -10,
               speed: 1,
               alpha: 0.2,
               rate: 30
            }
         },
         tokens: {
            enable: true,
            source: true,
            target: true,
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
      ...common.main({ label: "magicmissile" }),
      menu: "range",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'magicmissile', variant: '01', color: 'purple' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "projectile",
         data: {
            color01: "#002aff",
            color02: "#aabacf",
            spritePath: "modules/levels-3d-preview/assets/particles/emberssmall.png",
            repeat: 3,
            scale: 0.5,
            life: 800
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
            source: true,
            target: true,
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
      ...common.main({ label: "rayoffrost" }),
      menu: "range",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'rayoffrost', variant: '01', color: 'blue' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "ray",
         data: {
            color01: "#002aff",
            color02: "#0400ff",
            spritePath: "modules/levels-3d-preview/assets/particles/star_07.png",
            life: 2000,
            rate: 60,
            scale: 0.6
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
            source: true,
            target: true,
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
      ...common.main({ label: "scorchingray" }),
      menu: "range",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'scorchingray', variant: '01', color: 'orange' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "ray",
         data: {
            color01: "#ff0000",
            color02: "#ff9500",
            spritePath: "modules/levels-3d-preview/assets/particles/scorch_01.png",
            life: 2000,
            rate: 60,
            scale: 0.7
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
            source: true,
            target: true,
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
      ...common.main({ label: "witchbolt" }),
      menu: "range",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'witchbolt', variant: '01', color: 'blue' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "ray",
         data: {
            color01: "#00e1ff",
            color02: "#4138c2",
            spritePath: "modules/levels-3d-preview/assets/particles/emberssmall.png",
            life: 2000,
            rate: 60,
            scale: 0.6
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
            source: true,
            target: true,
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
