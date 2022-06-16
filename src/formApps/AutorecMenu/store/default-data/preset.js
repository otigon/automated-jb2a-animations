import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

export const preset = [
   {
      id: uuidv4(),
      presetType: "bardicinspiration",
      hidden: true,
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
      id: uuidv4(),
      presetType: "bless",
      hidden: true,
      name: "autoanimations.animations.bless",
      data: {
         persistent: false,
         below: true,
         color: "yellow",
         scale: 1.5,
      }
   },

   {
      id: uuidv4(),
      presetType: "shieldspell",
      hidden: true,
      name: "autoanimations.animations.shield",
      data: {
         below: false,
         color: "blue",
         endEffect: "outro_explode",
         scale: 1,
         variant: "01",
      }
   },

   {
      id: uuidv4(),
      presetType: "teleportation",
      hidden: true,
      name: "autoanimations.animations.mistystep",
      data: {
         range: 30,
         hideTemplate: false,
         measureType: "alternating",
         start: {
            menuType: "spell",
            animation: "mistystep",
            variant: "01",
            color: "blue",
            scale: 1.5,
            custom: false,
            customPath: "",
            below: false,
         },
         end: {
            menuType: "spell",
            animation: "mistystep",
            variant: "02",
            color: "blue",
            scale: 1.5,
            custom: false,
            customPath: "",
            below: false,
         },
         between: {
            enableBetween: false,
         },
      }
   }
];
