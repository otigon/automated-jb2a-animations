import * as common from "./common";

export const preset = [
   {
      ...common.main({ label: "mistystep" }),
      menu: "preset",
      presetType: "teleportation",
      macro: common.macro(),
      data: {
         options: {
            range: 30,
            hideFromPlayers: false,
            measureType: "alternating",
         },   
         start: {
            dbSection: "static",
            menuType: "spell",
            animation: "mistystep",
            variant: "01",   
            color: "blue",
            customPath: "",
            enableCustom: false,
            options: {
               isMasked: false,
               alpha: 0,
               opacity: 1,
               scale: 1.5,
               below: false,
            },
         },
         end: {
            dbSection: "static",
            menuType: "spell",
            animation: "mistystep",
            variant: "02",
            color: "blue",
            customPath: "",
            enableCustom: false,
            options: {
               delay: 250,
               below: false,
               isMasked: false,
               scale: 1.5,
               opacity: 1,
            },
         },
         between: {
            dbSection: "range",
            menuType: "spell",
            animation: "chainlightning",
            variant: "primary",
            color: "blue",
            enableCustom: false,
            customPath: "",
            options: {
               enable: false,
               below: false,
               playbackRate: 1,
               opacity: 1,
            },
         },
         sound: common.sound(),
      },
      source: common.source()
   },
   {
      ...common.main({ label: "fireball" }),
      menu: "preset",
      presetType: "proToTemp",
      macro: common.macro(),
      data: {
         projectile: {
            dbSection: "range",
            menuType: "spell",
            animation: "fireballbeam",
            variant: "01",
            color: "orange",
            customPath: "",
            enableCustom: false,
            options: {
               below: false,
               delay: 250,
               opacity: 1,
               removeTemplate: false,
               repeat: 1,
               wait: -1800,
            },
            sound: common.sound(),
         },
         preExplosion: {
            dbSection: "static",
            menuType: "spell",
            animation: "curewounds",
            variant: "01",
            color: "blue",
            customPath: "",
            enableCustom: false,
            options: {
               delay: 250,
               below: false,
               isMasked: false,
               scale: 1.5,
               opacity: 1,
            },
            sound: common.sound(),
         },
         explosion: {
            dbSection: "static",
            menuType: "spell",
            animation: "fireball",
            variant: "explode",
            color: "orange",
            enableCustom: false,
            customPath: "",
            options: {
               below: false,
               delay: 250,
               opacity: 1,
               repeat: 1,
               scale: 1.25,
               wait: -1000,
            },
            sound: common.sound(),
         },
         afterImage: {
            enable: false,
            customPath: "",
            options: {}
        }    
      },
      source: common.source()
   }
];
