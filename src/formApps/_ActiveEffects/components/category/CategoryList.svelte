<script>
   import { getContext }   from "svelte";

   import BuildAEAura      from "../../../Menus/ActiveEffects/BuildAEAura.svelte";
   import BuildAEOnToken   from "../../../Menus/ActiveEffects/BuildAEOnToken.svelte";
   import SectionButtons   from "../../../Menus/Components/SectionButtons02.svelte";
   import Macro            from "../../../Menus/Components/Macro.svelte";
   import SoundOnly        from "../../../Menus/Components/SoundOnly.svelte";

   //export let animation;
   let { animation } = getContext('animation-data');

   let newContentOptions = {
      ontoken: {
         component: BuildAEOnToken,
      },
      aura: {
         component: BuildAEAura,
      },
   };

   $: menuRoute = newContentOptions[$animation.activeEffectType].component;

   $: isEnabled = $animation.isEnabled;
   $: isCustomized = $animation.isCustomized;

   $: soundOnly = $animation.soundOnly.sound.enable;
   $: macroEnabled = $animation.macro.enable;

</script>

   <div class={`animation ${!isEnabled || !isCustomized ? "aa-disableOpacity" : ""}`}>
      <div class="sectionBorder">
         <SectionButtons type="item" />
         <div hidden={!soundOnly}>
            <SoundOnly />
         </div>
         <div hidden={!macroEnabled}>
            <Macro />
        </div>
        <div hidden={soundOnly}>
            <div hidden={$animation.macro.enable && $animation.macro.playWhen === "2"}>
               <svelte:component this={menuRoute} />
            </div>
         </div>
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
