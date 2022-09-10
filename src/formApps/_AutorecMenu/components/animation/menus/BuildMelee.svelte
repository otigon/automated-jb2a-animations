<script>
    import VideoSelect from "../components/VideoSelect.svelte";
    import MeleeOptions from "../components/options/MeleeOptions.svelte";
    import SoundSettings from "../components/SoundSettings.svelte";
    import SoundOnly from "../components/SoundOnly.svelte";
    import Secondary from "../components/Secondary.svelte";
    import ExtraTarget from "../components/ExtraTarget.svelte";
    import ExtraSource from "../components/ExtraSource.svelte";
    import SectionButtons from "../components/SectionButtons.svelte";
    import Macro from "../components/Macro.svelte";
    import Canvas3D from "../components/Canvas3D.svelte";
    import MeleeSwitch from "../components/MeleeSwitch.svelte";

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

<SectionButtons {animation} bind:show3d {category} {idx}/>
{#if show3d && !soundOnly}
    <Canvas3D {animation} />
{:else}
    <div hidden={!soundOnly}>
        <SoundOnly {animation} />
    </div>
    <div hidden={!macroEnabled}>
        <Macro {animation} {category} />
    </div>
    <div hidden={soundOnly}>
        <div
            hidden={$animation.macro.enable &&
                $animation.macro.playWhen === "2"}
        >
            <ExtraSource {animation} {idx} {category} />
            <div class="aa-primary-border">
                <VideoSelect
                    {animation}
                    section="primary"
                    {title}
                    {idx}
                    {category}
                />
                <MeleeOptions {animation} {category} />
                <SoundSettings {animation} {category} {idx} section="primary" />
                <MeleeSwitch {animation} {idx} {category} />
            </div>
            <Secondary {animation} {idx} {category} />
            <ExtraTarget {animation} {idx} {category} />
        </div>
    </div>
{/if}

<style lang="scss">
</style>
