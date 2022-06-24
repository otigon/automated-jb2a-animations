import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const staticfx = [
   {
      audio: {
         a01: {
            enable:false,
         },
         e01: {
            enable:false,
         }
      },
      explosions: {
         enable: false,
      },
      hidden: true,
      id: uuidv4(),
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
      name: "autoanimations.animations.curewounds",
      options: {
         below: true,
         delay: 500,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1.5,
         staticType: "targetDefault",
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'curewounds',
         variant: '01',
         color: 'blue',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      audio: {
         a01: {
            enable:false,
         },
         e01: {
            enable:false,
         }
      },
      explosions: {
         enable: false,
      },
      hidden: true,
      id: uuidv4(),
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
      name: "autoanimations.animations.itemHealingWord",
      options: {
         below: true,
         delay: 500,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1.5,
         staticType: "targetDefault",
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'generichealing',
         variant: '01',
         color: 'blue',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      audio: {
         a01: {
            enable:false,
         },
         e01: {
            enable:false,
         }
      },
      explosions: {
         enable: false,
      },
      hidden: true,
      id: uuidv4(),
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
      name: "autoanimations.animations.tollthedead",
      options: {
         below: false,
         delay: 500,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1,
         staticType: "target",
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1
      },
      primary: {
         menuType: "spell",
         animation: 'tollthedead',
         variant: 'complete',
         color: 'green',
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      audio: {
         a01: {
            enable:false,
         },
         e01: {
            enable:false,
         }
      },
      explosions: {
         enable: false,
      },
      hidden: true,
      id: uuidv4(),
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
      name: "autoanimations.animations.bite",
      options: {
         below: false,
         delay: 500,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1,
         staticType: "target",
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1
      },
      primary: {
         menuType: "creature",
         animation: "bite",
         variant: "01",
         color: "red",
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   },

   {
      audio: {
         a01: {
            enable:false,
         },
         e01: {
            enable:false,
         }
      },
      explosions: {
         enable: false,
      },
      hidden: true,
      id: uuidv4(),
      levels3d: {
         type: "",
      },
      macro: {
         enable: false,
      },
      name: "autoanimations.animations.claw",
      options: {
         below: false,
         delay: 500,
         isMasked: false,
         opacity: 1,
         persistent: false,
         repeat: 1,
         scale: 1,
         staticType: "target",
         unbindAlpha: false,
         unbindVisbility: false,
         zIndex: 1
      },
      primary: {
         menuType: "creature",
         animation: "claw",
         variant: "01",
         color: "red",
         enableCustom: false,
         customPath: "",
      },
      soundOnly: false,
   }
];
