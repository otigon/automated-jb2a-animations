import * as common from "./common";

export const range = [
   {
      ...common.main({ name: "crossbow" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: common.primary({ menuType: "weapon", animation: 'bolt', variant: 'physical', color: 'orange' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "bow" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: common.primary({ menuType: "weapon", animation: 'arrow', variant: 'regular', color: 'regular' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "disintegrate" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: common.primary({ menuType: "spell", animation: 'disintegrate', variant: '01', color: 'green' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "eldritchblast" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: common.primary({ menuType: "spell", animation: 'eldritchblast', variant: '01', color: 'purple' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "firebolt" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: common.primary({ menuType: "spell", animation: 'firebolt', variant: '01', color: 'orange' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "guidingbolt" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: common.primary({ menuType: "spell", animation: 'guidingbolt', variant: '01', color: 'yellowblue' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "magicmissile" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: common.primary({ menuType: "spell", animation: 'magicmissile', variant: '01', color: 'purple' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "rayoffrost" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: common.primary({ menuType: "spell", animation: 'rayoffrost', variant: '01', color: 'blue' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "scorchingray" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: common.primary({ menuType: "spell", animation: 'scorchingray', variant: '01', color: 'orange' }),
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "witchbolt" }),
      audio: common.audio({ explosion: true, source: true, target: true }),
      explosions: common.explosions(),
      levels3d: common.levels3d(),
      macro: common.macro(),
      options: {
         below: false,
         delay: 500,
         onlyX: false,
         opacity: 1,
         repeat: 1,
         returning: false,
         zIndex: 1
      },
      primary: common.primary({ menuType: "spell", animation: 'witchbolt', variant: '01', color: 'blue' }),
      source: common.source(),
      target: common.target()
   }
];
