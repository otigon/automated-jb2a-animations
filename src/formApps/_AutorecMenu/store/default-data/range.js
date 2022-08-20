import * as common from "./common";

export const range = [
   {
      ...common.main({ label: "crossbow" }),
      menu: "range",
      primary: common.primary({
         video: { menuType: "weapon", animation: 'bolt', variant: 'physical', color: 'orange' },
         dbSection: "range",
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
      ...common.main({ label: "bow" }),
      menu: "range",
      primary: common.primary({
         video: { menuType: "weapon", animation: 'arrow', variant: 'regular', color: 'regular' },
         dbSection: "range",
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
      ...common.main({ label: "disintegrate" }),
      menu: "range",
      primary: common.primary({
         video: { menuType: "spell", animation: 'disintegrate', variant: '01', color: 'green' },
         dbSection: "range",
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
      ...common.main({ label: "eldritchblast" }),
      menu: "range",
      primary: common.primary({
         video: { menuType: "spell", animation: 'eldritchblast', variant: '01', color: 'purple' },
         dbSection: "range",
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
      ...common.main({ label: "firebolt" }),
      menu: "range",
      primary: common.primary({
         video: { menuType: "spell", animation: 'firebolt', variant: '01', color: 'orange' },
         dbSection: "range",
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
      ...common.main({ label: "guidingbolt" }),
      menu: "range",
      primary: common.primary({
         video: { menuType: "spell", animation: 'guidingbolt', variant: '01', color: 'yellowblue' },
         dbSection: "range",
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
      ...common.main({ label: "magicmissile" }),
      menu: "range",
      primary: common.primary({
         video: { menuType: "spell", animation: 'magicmissile', variant: '01', color: 'purple' },
         dbSection: "range",
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
      ...common.main({ label: "rayoffrost" }),
      menu: "range",
      primary: common.primary({
         video: { menuType: "spell", animation: 'rayoffrost', variant: '01', color: 'blue' },
         dbSection: "range",
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
      ...common.main({ label: "scorchingray" }),
      menu: "range",
      primary: common.primary({
         video: { menuType: "spell", animation: 'scorchingray', variant: '01', color: 'orange' },
         dbSection: "range",
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
      ...common.main({ label: "witchbolt" }),
      menu: "range",
      primary: common.primary({
         video: { menuType: "spell", animation: 'witchbolt', variant: '01', color: 'blue' },
         dbSection: "range",
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
