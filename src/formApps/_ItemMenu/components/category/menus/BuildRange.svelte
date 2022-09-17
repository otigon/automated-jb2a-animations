<script>
    import VideoSelect from "../../../../_AutorecMenu/components/animation/components/VideoSelect.svelte";
    import RangeOptions from "../../../../_AutorecMenu/components/animation/components/options/RangeOptions.svelte";
    import SoundSettings from "../../../../_AutorecMenu/components/animation/components/SoundSettings.svelte";
    import SoundOnly from "../../../../_AutorecMenu/components/animation/components/SoundOnly.svelte";
    import Secondary from "../../../../_AutorecMenu/components/animation/components/Secondary.svelte";
    import ExtraTarget from "../../../../_AutorecMenu/components/animation/components/ExtraTarget.svelte";
    import ExtraSource from "../../../../_AutorecMenu/components/animation/components/ExtraSource.svelte";
    import SectionButtons from "../../../../_AutorecMenu/components/animation/components/SectionButtons.svelte";
    import Macro from "../../../../_AutorecMenu/components/animation/components/Macro.svelte";
    import Canvas3D from "../../../../_AutorecMenu/components/animation/components/Canvas3D.svelte";

    export let animation;
    export let idx = 0;
    export let category;

    $: show3d = false;

    let title =
        game.i18n.localize("autoanimations.menus.primary") +
        " " +
        game.i18n.localize("autoanimations.menus.animation");

    $: soundOnly = $animation.soundOnly.sound.enable;
    $: macroEnabled = $animation.macro.enable;
</script>

<SectionButtons {animation} bind:show3d {category} {idx} type="item"/>
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
                <RangeOptions {animation} {category} />
                <SoundSettings {animation} {category} {idx} section="primary" />
            </div>
            <Secondary {animation} {idx} {category} />
            <ExtraTarget {animation} {idx} {category} />
        </div>
    </div>
{/if}

<style lang="scss">
</style>
