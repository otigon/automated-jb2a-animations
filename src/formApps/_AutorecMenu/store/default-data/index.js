import { localize }     from "#runtime/util/i18n";

import { aefx }         from "./aefx.js";
import { aura }         from "./aura.js";
import { melee }        from "./melee.js";
import { ontoken }      from "./ontoken.js";
import { preset }       from "./preset.js";
import { range }        from "./range.js";
import { templatefx }   from "./templatefx.js";

/**
 * Loads the default data and localizes the 'label' from raw default data.
 *
 * @param {"aefx"|"aura"|"melee"|"ontoken"|"preset"|"range"|"templatefx"} type - Category type of data to load.
 */
export function loadDefault(type) {
   let data;

   switch (type) {
      case "aefx":
         data = aefx;
         break;

      case "aura":
         data = aura;
         break;

      case "melee":
         data = melee;
         break;

      case "ontoken":
         data = ontoken;
         break;

      case "preset":
         data = preset;
         break;

      case "range":
         data = range;
         break;

      case "templatefx":
         data = templatefx;
         break;

      default: throw new Error(`Unknown type: '${type}'.`);
   }

   return data.reduce((array, entry) => {
      entry.label = localize(entry.label);
      array.push(entry);
      return array;
   }, []);
}
