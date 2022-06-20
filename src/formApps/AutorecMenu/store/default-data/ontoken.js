import * as common from "./common";

export const ontoken = [
   {
      ...common.main({ name: "curewounds" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
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
      primary: common.primary({ menuType: "spell", animation: 'curewounds', variant: '01', color: 'blue' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "itemHealingWord" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
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
      primary: common.primary({ menuType: "spell", animation: 'generichealing', variant: '01', color: 'blue' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "tollthedead" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
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
      primary: common.primary({ menuType: "spell", animation: 'tollthedead', variant: 'complete', color: 'green' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "bite" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
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
      primary: common.primary({ menuType: "creature", animation: "bite", variant: "01", color: "red" }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "claw" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
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
      primary: common.primary({ menuType: "creature", animation: "claw", variant: "01", color: "red" }),
      source: common.source(),
      target: common.target()
   }
];
