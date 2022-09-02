<script>
    import VideoSelect from "../components/VideoSelect.svelte";
    import OnTokenOptions from "./options/OnTokenOptions.svelte";
    import SoundSettings from "../components/SoundSettings.svelte";
    import SoundOnly from "../components/SoundOnly.svelte";
    import ExtraSource from "../components/ExtraSource.svelte";
    import SectionButtons from "../components/SectionButtons02.svelte";
    import Macro from "../components/Macro.svelte";

    export let animation;
    export let idx;
    export let category;

    let title =
        game.i18n.localize("autoanimations.menus.primary") +
        " " +
        game.i18n.localize("autoanimations.menus.animation");

    $: soundOnly = $animation.soundOnly.sound.enable;
    $: macroEnabled = $animation.macro.enable;
</script>

<div hidden={!soundOnly}>
    <SoundOnly {animation} />
</div>
<div hidden={!macroEnabled}>
    <Macro {animation} {category} />
</div>
<div hidden={soundOnly}>
    <div hidden={$animation.macro.enable && $animation.macro.playWhen === "2"}>
        <ExtraSource {animation} {idx} {category} />
        <div class="aa-primary-border">
            <VideoSelect {animation} section="data" {title} {idx} {category} />
            <OnTokenOptions {animation} {category} />
            <SoundSettings {animation} {category} {idx} section="data" />
        </div>
    </div>
</div>

<style lang="scss">
</style>
