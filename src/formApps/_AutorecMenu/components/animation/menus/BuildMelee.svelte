<script>
    import VideoSelect from "./components/VideoSelect.svelte";
    import MeleeOptions from "./components/options/MeleeOptions.svelte";
    import SoundSettings from "./components/SoundSettings.svelte";
    import SoundOnly from "./components/SoundOnly.svelte"
    import Explosion from "./components/Explosion.svelte";
    import ExtraTarget from "./components/ExtraTarget.svelte";
    import ExtraSource from "./components/ExtraSource.svelte";
    import SectionButtons from "./components/SectionButtons.svelte";
    import Macro from "./components/Macro.svelte";
    import Canvas3D from "./components/Canvas3D.svelte";

    export let animation;
    export let idx;
    export let category;
    $: show3d = false;
    //console.log(category)
    let title =
        game.i18n.localize("autoanimations.menus.primary") +
        " " +
        game.i18n.localize("autoanimations.menus.animation");

    $: soundOnly = $animation.soundOnly.sound.enable;
    $: macroEnabled = $animation.macro.enable;
</script>
<SectionButtons {animation}  bind:show3d={show3d}/>
{#if show3d && !soundOnly}
<Canvas3D {animation}/>
{:else}
<div hidden={!soundOnly}>
    <SoundOnly {animation} section="soundOnly" />
</div>
<div hidden={!macroEnabled}>
    <Macro {animation} />
</div>
<div hidden={soundOnly}>
    <div hidden={$animation.macro.enable && $animation.macro.playWhen === "2"}>
        <ExtraSource {animation} {idx} {category} />
        <div class="aa-primary-border">
            <VideoSelect
                {animation}
                section="primary"
                {title}
                {idx}
                {category}
            />
            <MeleeOptions {animation} />
            <SoundSettings {animation} section="primary" />
        </div>
        <Explosion {animation} section="explosion" {idx} {category} />
        <ExtraTarget {animation} {idx} {category} />
    </div>
</div>
{/if}

<style lang="scss">
</style>
