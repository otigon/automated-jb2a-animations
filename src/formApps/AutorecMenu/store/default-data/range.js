import * as common from "./common";

export const range = [
   {
      ...common.main({ name: "crossbow" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'bolt', variant: 'physical', color: 'orange' },
         options: {
            below: false,
            delay: 500,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            returning: false,
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
      ...common.main({ name: "bow" }),
      primary: common.primary({
         video: { menuType: "weapon", animation: 'arrow', variant: 'regular', color: 'regular' },
         options: {
            below: false,
            delay: 500,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            returning: false,
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
      ...common.main({ name: "disintegrate" }),
      primary: common.primary({
         video: { menuType: "spell", animation: 'disintegrate', variant: '01', color: 'green' },
         options: {
            below: false,
            delay: 500,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            returning: false,
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
      ...common.main({ name: "eldritchblast" }),
      primary: common.primary({
         video: { menuType: "spell", animation: 'eldritchblast', variant: '01', color: 'purple' },
         options: {
            below: false,
            delay: 500,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            returning: false,
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
      ...common.main({ name: "firebolt" }),
      primary: common.primary({
         video: { menuType: "spell", animation: 'firebolt', variant: '01', color: 'orange' },
         options: {
            below: false,
            delay: 500,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            returning: false,
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
      ...common.main({ name: "guidingbolt" }),
      primary: common.primary({
         video: { menuType: "spell", animation: 'guidingbolt', variant: '01', color: 'yellowblue' },
         options: {
            below: false,
            delay: 500,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            returning: false,
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
      ...common.main({ name: "magicmissile" }),
      primary: common.primary({
         video: { menuType: "spell", animation: 'magicmissile', variant: '01', color: 'purple' },
         options: {
            below: false,
            delay: 500,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            returning: false,
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
      ...common.main({ name: "rayoffrost" }),
      primary: common.primary({
         video: { menuType: "spell", animation: 'rayoffrost', variant: '01', color: 'blue' },
         options: {
            below: false,
            delay: 500,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            returning: false,
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
      ...common.main({ name: "scorchingray" }),
      primary: common.primary({
         video: { menuType: "spell", animation: 'scorchingray', variant: '01', color: 'orange' },
         options: {
            below: false,
            delay: 500,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            returning: false,
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
      ...common.main({ name: "witchbolt" }),
      primary: common.primary({
         video: { menuType: "spell", animation: 'witchbolt', variant: '01', color: 'blue' },
         options: {
            below: false,
            delay: 500,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            returning: false,
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
