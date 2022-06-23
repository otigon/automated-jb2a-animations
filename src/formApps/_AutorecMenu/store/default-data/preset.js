import * as common from "./common";

export const preset = [
   {
      ...common.main({ name: "bardicinspiration" }),
      presetType: "bardicinspiration",
      macro: common.macro(),
      source: common.source(),
      target: common.target(),
      sound: common.sound(),
      data: {
         self: {
            enable: true,
            animation: "bardicinspiration",
            variant: "inspire",
            color: "yellowblue",
         },
         target: {
            enable: true,
            animation: "bardicinspiration",
            variant: "inspire",
            color: "yellowblue",
         },
         marker: {
            enable: true,
            selfColor: "yellowblue",
            targetColor: "yellowblue",
         },
         options: {
            below: false,
            scale: 1
         },
      }
   },

   {
      ...common.main({ name: "bless" }),
      presetType: "bless",
      macro: common.macro(),
      sound: common.sound(),
      options: {
         below: true,
         persistent: false,
         scale: 1.5,
         unbindAlpha: false,
         unbindVisbility: false
      },
      data: {
         color: "yellow"
      },
      source: common.source()
   },

   {
      ...common.main({ name: "shield" }),
      presetType: "shieldspell",
      macro: common.macro(),
      sound: common.sound(),
      options: {
         below: false,
         persistent: false,
         scale: 1,
         unbindAlpha: false,
         unbindVisbility: false
      },
      data: {
         animation: "shieldspell",
         menuType: "spell",
         variant: "01",
         color: "blue",
         endEffect: "outro_explode"
      },
      source: common.source()
   },

   {
      ...common.main({ name: "mistystep" }),
      presetType: "teleportation",
      macro: common.macro(),
      sound: common.sound(),
      options: {
         range: 30,
         hideFromPlayers: false,
         measureType: "alternating",
      },
      data: {
         start: {
            animation: "mistystep",
            below: false,
            color: "blue",
            customPath: "",
            enableCustom: false,
            isMasked: false,
            menuType: "spell",
            opacity: 1,
            scale: 1.5,
            variant: "01",
         },
         end: {
            animation: "mistystep",
            below: false,
            color: "blue",
            customPath: "",
            delay: 250,
            enableCustom: false,
            isMasked: false,
            menuType: "spell",
            scale: 1.5,
            variant: "02",
         },
         between: {
            enable: false,
            animation: "chainlightning",
            below: false,
            color: "blue",
            customPath: "",
            enableCustom: false,
            menuType: "spell",
            playbackRate: 1,
            variant: "primary",
         }
      },
      source: common.source()
   }
];
