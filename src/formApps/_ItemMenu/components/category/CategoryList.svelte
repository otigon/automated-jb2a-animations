<script>
   import { getContext }   from "svelte";

   import BuildMelee       from "../../../Menus/BuildMenu/BuildMelee.svelte";
   import BuildRange       from "../../../Menus/BuildMenu/BuildRange.svelte";
   import BuildOnToken     from "../../../Menus/BuildMenu/BuildOnToken.svelte";
   import BuildTemplateFx  from "../../../Menus/BuildMenu/BuildTemplateFX.svelte";
   import BuildAura        from "../../../Menus/BuildMenu/BuildAura.svelte";
   import BuildPreset      from "../../../Menus/BuildMenu/BuildPreset.svelte";

   //export let animation;
   let { animation } = getContext('animation-data');

   export let chosenMenu;

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

   $: menuRoute = newContentOptions[chosenMenu].component;

   $: isEnabled = $animation.isEnabled;
   $: isCustomized = $animation.isCustomized;

</script>

   <div class={`animation ${!isEnabled || !isCustomized ? "aa-disableOpacity" : ""}`}>
      <div class="sectionBorder">
         <svelte:component this={menuRoute} fromMenu="item"/>
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
