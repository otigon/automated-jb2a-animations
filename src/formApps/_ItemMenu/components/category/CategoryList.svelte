<script>

   import BuildMelee from "./menus/BuildMelee.svelte";
   import BuildRange from "./menus/BuildRange.svelte";
   import BuildOnToken from "./menus/BuildOnToken.svelte";
   import BuildTemplateFx from "./menus/BuildTemplateFX.svelte";
   import BuildAura from "./menus/BuildAura.svelte";
   import BuildPreset from "./menus/BuildPreset.svelte";

   export let animation;

   let newContentOptions = {
      melee: {
         component: BuildMelee,
      },
      range: {
         component: BuildRange,
      },
      ontoken: {
         component: BuildOnToken,
      },
      templatefx: {
         component: BuildTemplateFx,
      },
      aura: {
         component: BuildAura,
      },
      preset: {
         component: BuildPreset,
      },
   };

   $: menuRoute = newContentOptions[$animation.menu].component;

   $: isEnabled = $animation.isEnabled;
   $: isCustomized = $animation.isCustomized;

</script>

   <div class={!isEnabled || !isCustomized ? "aa-disableOpacity" : ""}>
      <div class="sectionBorder">
         <svelte:component this={menuRoute} {animation} category={animation} />
      </div>
   </div>

<style lang="scss">
   .sectionBorder {
      background: rgb(186, 186, 186);
      border: 2px solid rgba(0, 0, 0, 0.75);
      border-radius: 0.75em;
      height: fit-content;
   }
</style>
