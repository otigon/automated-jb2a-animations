<script>
   import { localize }      from "@typhonjs-fvtt/runtime/svelte/helper";

   import SettingEntry      from "./SettingEntry.svelte";

   import { gameSettings }  from "../../../../gameSettings.js";

   const settings = gameSettings.settings.map((entry) =>
   {
      const options = entry.options;

      let choices;

      if (options.choices)
      {
         choices = {};
         for (const [key, value] of Object.entries(options.choices)) { choices[key] = localize(value); }
      }

      return {
         namespace: entry.namespace,
         key: entry.key,

         name: localize(options.name),
         hint: localize(options.hint),
         type: options.type,
         choices
      }
   });

   console.log(`! settings: `, settings);
</script>

<form>
   <div class=categories>
      {#each settings as setting (setting.key)}
         <SettingEntry {setting} />
      {/each}
   </div>
   <footer>
      <button type=submit><i class="fas fa-save"></i>{localize('Save Changes')}</button>
   </footer>
</form>

<style>
   .categories {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      overflow: hidden auto;
   }

   footer {
      margin: 1rem;
      flex: 0;
   }
</style>

