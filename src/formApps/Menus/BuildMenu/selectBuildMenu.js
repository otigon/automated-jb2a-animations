import BuildMelee            from "./BuildMelee.svelte";
import BuildRange            from "./BuildRange.svelte";
import BuildOnToken          from "./BuildOnToken.svelte";
import BuildTemplateFx       from "./BuildTemplateFX.svelte";
import BuildAura             from "./BuildAura.svelte";
import BuildPreset           from "./BuildPreset.svelte";
import BuildActiveEffects    from "./BuildActiveEffects.svelte";

/**
 * Selects the appropriate build menu component for the given category key.
 *
 * @param categoryKey
 * @returns {*}
 */
export function selectBuildMenu(categoryKey) {
   let component;

   switch (categoryKey) {
      case "aaAutorec-melee":
         component = BuildMelee;
         break;

      case "aaAutorec-range":
         component = BuildRange;
         break;

      case "aaAutorec-ontoken":
         component = BuildOnToken;
         break;

      case "aaAutorec-templatefx":
         component = BuildTemplateFx;
         break;

      case "aaAutorec-aura":
         component = BuildAura;
         break;

      case "aaAutorec-preset":
         component = BuildPreset;
         break;

      case "aaAutorec-aefx":
         component = BuildActiveEffects;
         break;

      default:
         throw new Error(`'selectBuildMenu' error: unknown category key: ${categoryKey}`);
   }

   return component;
}
