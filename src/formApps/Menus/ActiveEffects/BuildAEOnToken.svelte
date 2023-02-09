<script>
    import VideoSelect      from "../Components/VideoSelect.svelte";
    import OnTokenOptions   from "./options/OnTokenOptions.svelte";
    import SoundSettings    from "../Components/SoundSettings.svelte";
    import ExtraSource      from "../Components/ExtraSource.svelte";
    import Secondary        from "../Components/Secondary.svelte";
    import EffectColor      from "../Components/options/EffectColor.svelte";
    import { getContext }   from "svelte";

    let { animation } = getContext('animation-data');
    //export let idx = 0;
    //export let category;

    let title =
        game.i18n.localize("autoanimations.menus.primary") +
        " " +
        game.i18n.localize("autoanimations.menus.animation");

</script>

    <div hidden={$animation.macro.enable && $animation.macro.playWhen === "2"}>
        <ExtraSource />
        <div class="aa-primary-border">
            <VideoSelect section="primary" {title} />
            <OnTokenOptions />
            <svelte:component this={EffectColor} />
            <SoundSettings section="primary" />
        </div>
        <Secondary  />
    </div>

<style lang="scss">
</style>
