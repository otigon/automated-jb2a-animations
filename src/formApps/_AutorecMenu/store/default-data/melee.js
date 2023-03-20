import * as common from "./common";

export const melee = [
   {
      ...common.main({ label: "dagger" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'dagger', variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1,
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "sprite",
         data: {
            color01: "#FFFFFF",
            color02: "#FFFFFF",
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Dagger.glb",
            animationType: "swipe",
            playOn: "source",
            repeat: 1,
            rotationX: 0,
            rotateTowards: true,
            speed: 2,
            scale: 0.4,
            delay: 0,
            rotationZ: 0,
            rotationY: 270
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
            sourceType: "swipe",
            sourcePlay: "start",
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target(),
   },

   {
      ...common.main({ label: "flurryofblows" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'flurryofblows', variant: 'physical', color: 'blue' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1,
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "token",
         data: {
            color01: "#FFFFFF",
            color02: "#FFFFFF",
            spritePath: "modules/levels-3d-preview/assets/particles/emberssmall.png",
            animationType: "slash",
            playOn: "source",
            repeat: 4,
            resetTime: null
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
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "greataxe" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'greataxe', variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
            tint: false,
            tintColor: "#FFFFFF",   
            zIndex: 1,
         }
      }),
      secondary: common.secondary(),
      levels3d: {
         type: "sprite",
         data: {
            color01: "#FFFFFF",
            color02: "#FFFFFF",
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Axe_Double.glb",
            rotateTowards: true,
            rotationY: 90,
            speed: 2
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
            sourceType: "bow",
            sourcePlay: "start",
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "greatclub" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'greatclub', variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
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
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Hammer_Double.glb",
            rotationY: 90,
            rotateTowards: true,
            speed: 2,
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
            source: false,
            target: true,
            sourceType: "twirl",
            sourcePlay: "start",
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "greatsword" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'greatsword', variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
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
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Sword_big.glb",
            speed: 2,
            rotationY: 90,
            rotateTowards: true,
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
            source: false,
            target: true,
            sourceType: "twirl",
            sourcePlay: "start",
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "handaxe" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'handaxe', variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
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
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Axe_small.glb",
            rotationX: null,
            rotationY: 270,
            rotateTowards: true,
            scale: 0.4,
            speed: 2
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
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "sword" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'sword', variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
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
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Sword.glb",
            rotateTowards: true,
            speed: 2,
            scale: 0.4,
            rotationY: 90
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
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "mace" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'mace', variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
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
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Hammer_Double.glb",
            speed: 2,
            scale: 0.4,
            rotateTowards: true,
            rotationY: 90
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
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "maul" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'maul', variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
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
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Hammer_Double.glb",
            speed: 2,
            rotationY: 90,
            rotateTowards: true,
            scale: 0.4
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
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "spear" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'spear', variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
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
            spritePath: "modules/canvas3dcompendium/assets/Tiles/Kenney/Food/chopstick.glb",
            rotationX: 180,
            scale: 3,
            speed: 2
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
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "rapier" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'rapier', variant: '01', color: 'white' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
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
            spritePath: "modules/canvas3dcompendium/assets/Tiles/RPG%20Items/Dagger.glb",
            rotateTowards: true,
            rotationX: null,
            rotationY: 270
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
            targetType: "shake",
            targetPlay: "end"
         },
         enable: true
      },
      macro: common.macro(),
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ label: "unarmedstrike" }),
      menu: "melee",
      metaData: { default: true },
      primary: common.primary({
         video: { dbSection: "melee", menuType: "weapon", animation: 'unarmedstrike', variant: 'physical', color: 'blue' },
         options: {
            contrast: 0,
            delay: 0,
            elevation: 1000,
            isWait: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
            saturate: 0,
            size: 1,
            tint: false,
            tintColor: "#FFFFFF",   
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
      meleeSwitch: common.meleeSwitch(),
      source: common.source(),
      target: common.target()
   }
];
