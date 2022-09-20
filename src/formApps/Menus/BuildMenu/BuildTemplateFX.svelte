<script>
    import VideoSelect      from "../Components/VideoSelect.svelte";
    import TemplateOptions  from "../Components/options/TemplateOptions.svelte";
    import SoundSettings    from "../Components/SoundSettings.svelte";
    import ExtraTarget      from "../Components/ExtraTarget.svelte";
    import ExtraSource      from "../Components/ExtraSource.svelte";
    import Secondary        from "../Components/Secondary.svelte";
    import SectionButtons   from "../Components/SectionButtons02.svelte";
    import Macro            from "../Components/Macro.svelte";
    import SoundOnly        from "../Components/SoundOnly.svelte";

    export let animation;
    export let idx = 0;
    export let category;
    export let fromMenu = 'autorec';

    let title =
        game.i18n.localize("autoanimations.menus.primary") +
        " " +
        game.i18n.localize("autoanimations.menus.animation");

    $: soundOnly = $animation.soundOnly.sound.enable;
    $: macroEnabled = $animation.macro.enable;
</script>

<SectionButtons {animation} {category} {idx} type={fromMenu} />
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
            <VideoSelect
                {animation}
                section="primary"
                {title}
                {idx}
                {category}
            />
            <TemplateOptions {animation} {category} />
            <SoundSettings {animation} {category} {idx} section="primary" />
        </div>
        <Secondary {animation} {idx} {category} />
        <ExtraTarget {animation} {idx} {category} />
    </div>
</div>

<style lang="scss">
</style>
