import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const preset = [
   {
      audio: {
         a01: {
            enable:false,
         },
      },
      id: uuidv4(),
      presetType: "bardicinspiration",
      hidden: true,
      macro: {
         enable: false,
      },
      name: "autoanimations.animations.bardicinspiration",
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
         below: false,
         scale: 1,
      }
   },

   {
      audio: {
         a01: {
            enable:false,
         },
      },
      id: uuidv4(),
      presetType: "bless",
      hidden: true,
      macro: {
         enable: false,
      },
      name: "autoanimations.animations.bless",
      data: {
         below: true,
         color: "yellow",
         persistent: false,
         scale: 1.5,
         unbindAlpha: false,
         unbindVisbility: false,
      }
   },

   {
      audio: {
         a01: {
            enable:false,
         },
      },
      id: uuidv4(),
      presetType: "shieldspell",
      hidden: true,
      macro: {
         enable: false,
      },
      name: "autoanimations.animations.shield",
      data: {
         animation: "shieldspell",
         below: false,
         color: "blue",
         endEffect: "outro_explode",
         menuType: "spell",
         persistent: false,
         scale: 1,
         unbindAlpha: false,
         unbindVisbility: false,
         variant: "01",
      }
   },

   {
      audio: {
         a01: {
            enable:false,
         },
      },
      id: uuidv4(),
      presetType: "teleportation",
      hidden: true,
      macro: {
         enable: false,
      },
      name: "autoanimations.animations.mistystep",
      data: {
         range: 30,
         hideFromPlayers: false,
         measureType: "alternating",
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
         },
      }
   }
];
