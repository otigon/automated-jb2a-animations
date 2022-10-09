import { sound } from "./sound.js";

export function meleeSwitch() {
    return {
       video: {
          dbSection: "range",
          menuType: "weapon",
          animation: "arrow",
          variant: "regular",
          color: "regular",
       },
       sound: sound(),
       options: {
          detect: "automatic",
          range: 2,
          returning: false,
          switchType: "on",
       }
    }
 }