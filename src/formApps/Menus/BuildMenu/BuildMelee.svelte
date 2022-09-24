<script>
    import VideoSelect      from "../Components/VideoSelect.svelte";
    import MeleeOptions     from "../Components/options/MeleeOptions.svelte";
    import SoundSettings    from "../Components/SoundSettings.svelte";
    import SoundOnly        from "../Components/SoundOnly.svelte";
    import Secondary        from "../Components/Secondary.svelte";
    import ExtraTarget      from "../Components/ExtraTarget.svelte";
    import ExtraSource      from "../Components/ExtraSource.svelte";
    import SectionButtons   from "../Components/SectionButtons.svelte";
    import Macro            from "../Components/Macro.svelte";
    import Canvas3D         from "../Components/Canvas3D.svelte";
    import MeleeSwitch      from "../Components/MeleeSwitch.svelte";

    export let animation;
    export let idx = 0;
    export let category;
    export let fromMenu = 'autorec';

    $: show3d = false;

    let title =
        game.i18n.localize("autoanimations.menus.primary") +
        " " +
        game.i18n.localize("autoanimations.menus.animation");

    $: soundOnly = $animation.soundOnly.sound.enable;
    $: macroEnabled = $animation.macro.enable;
    $: macroPlay = $animation.macro.playWhen;
</script>

<SectionButtons {animation} bind:show3d {category} {idx} type={fromMenu}/>
{#if show3d && !soundOnly}
    <Canvas3D {animation} />
{:else}
    <div hidden={!soundOnly || (macroEnabled && macroPlay === "2")}>
        <SoundOnly {animation} {category} {idx}/>
    </div>
    <div hidden={!macroEnabled || (soundOnly && macroPlay !== "2")}>
        <Macro {animation} {category} />
    </div>
    <div hidden={soundOnly || (macroEnabled && macroPlay === "2")}>
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
                <SoundSettings {animation} {category} {idx} section="primary" />
                <MeleeSwitch {animation} {idx} {category} />
            </div>
            <Secondary {animation} {idx} {category} />
            <ExtraTarget {animation} {idx} {category} />
    </div>
{/if}

<style lang="scss">
</style>
