<script>
    import VideoSelect from "./components/VideoSelect.svelte";
    import MeleeOptions from "./components/options/MeleeOptions.svelte";
    import SoundSettings from "./components/SoundSettings.svelte";
    import Explosion from "./components/Explosion.svelte";
    import ExtraTarget from "./components/ExtraTarget.svelte";
    import ExtraSource from "./components/ExtraSource.svelte";
    import Macro from "./components/Macro.svelte";

    export let animation;

    let title =
        game.i18n.localize("autoanimations.menus.primary") +
        " " +
        game.i18n.localize("autoanimations.menus.animation");

    $: soundOnly = $animation.soundOnly.sound.enable;
</script>

<div class="aa-section-border">
    <Macro {animation} />
</div>
<div hidden={!soundOnly}>
    <SoundSettings {animation} section="soundOnly" />
</div>
<div hidden={soundOnly}>
    <ExtraSource {animation} />
    <div class="aa-section-border">
        <VideoSelect {animation} section="primary" {title} />
        <MeleeOptions {animation} />
        <SoundSettings {animation} section="primary" />
    </div>
    <Explosion {animation} section="explosion" />
    <ExtraTarget {animation} />
</div>

<style lang="scss">
</style>
