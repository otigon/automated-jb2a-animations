import * as common from "./common";

export const range = [
   {
      ...common.main({ label: "crossbow" }),
      menu: "range",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "range", menuType: "weapon", animation: 'bolt', variant: 'physical', color: 'orange' },
         options: {
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
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
      ...common.main({ label: "bow" }),
      menu: "range",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "range", menuType: "weapon", animation: 'arrow', variant: 'regular', color: 'regular' },
         options: {
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
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
      ...common.main({ label: "disintegrate" }),
      menu: "range",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'disintegrate', variant: '01', color: 'green' },
         options: {
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
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
      ...common.main({ label: "eldritchblast" }),
      menu: "range",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'eldritchblast', variant: '01', color: 'purple' },
         options: {
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
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
      ...common.main({ label: "firebolt" }),
      menu: "range",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'firebolt', variant: '01', color: 'orange' },
         options: {
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
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
      ...common.main({ label: "guidingbolt" }),
      menu: "range",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'guidingbolt', variant: '01', color: 'yellowblue' },
         options: {
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
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
      ...common.main({ label: "magicmissile" }),
      menu: "range",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'magicmissile', variant: '01', color: 'purple' },
         options: {
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
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
      ...common.main({ label: "rayoffrost" }),
      menu: "range",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'rayoffrost', variant: '01', color: 'blue' },
         options: {
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
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
      ...common.main({ label: "scorchingray" }),
      menu: "range",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'scorchingray', variant: '01', color: 'orange' },
         options: {
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
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
      ...common.main({ label: "witchbolt" }),
      menu: "range",
      metaData: {default: true},
      primary: common.primary({
         video: { dbSection: "range", menuType: "spell", animation: 'witchbolt', variant: '01', color: 'blue' },
         options: {
            delay: 0,
            elevation: 1000,
            isReturning: false,
            isWait: false,
            onlyX: false,
            opacity: 1,
            repeat: 1,
            repeatDelay: 500,
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
