import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const preset = [
   {
      id: uuidv4(),
      name: "autoanimations.animations.bardicinspiration",
      audio: {
         a01: {
            enable:false,
         },
      },
      presetType: "bardicinspiration",
      macro: {
         enable: false,
      },
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
      id: uuidv4(),
      name: "autoanimations.animations.bless",
      audio: {
         a01: {
            enable:false,
         },
      },
      presetType: "bless",
      macro: {
         enable: false,
      },
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
      id: uuidv4(),
      name: "autoanimations.animations.shield",
      audio: {
         a01: {
            enable:false,
         },
      },
      presetType: "shieldspell",
      macro: {
         enable: false,
      },
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
      id: uuidv4(),
      name: "autoanimations.animations.mistystep",
      audio: {
         a01: {
            enable:false,
         },
      },
      presetType: "teleportation",
      macro: {
         enable: false,
      },
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
