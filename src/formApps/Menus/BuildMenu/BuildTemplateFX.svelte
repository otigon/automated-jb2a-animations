<script>
    import { getContext }   from "svelte";
    import * as settings    from "../Components";
    import * as options     from "../Components/options"

    //export let animation;
    //export let idx = 0;
    //export let category;
    export let fromMenu = 'autorec';
    let { animation } = getContext('animation-data');

    let title =
        game.i18n.localize("autoanimations.menus.primary") +
        " " +
        game.i18n.localize("autoanimations.menus.animation");

    $: soundOnly = $animation.soundOnly.sound.enable;
    $: macroEnabled = $animation.macro.enable;
    $: macroPlay = $animation.macro.playWhen;
</script>

<svelte:component this={settings.SectionButtons02} type={fromMenu}/>
<div hidden={!soundOnly}>
    <svelte:component this={settings.SoundOnly} />
</div>
<div hidden={!macroEnabled}>
    <svelte:component this={settings.Macro} />
</div>
<div hidden={soundOnly || (macroEnabled && macroPlay === "2")}>
    <svelte:component this={settings.Source} />
        <div class="aa-primary-border">
            <svelte:component this={settings.Video} {title} section="primary"/>
            <svelte:component this={options.TemplateFX} />
            <svelte:component this={options.EffectColor} />
            <svelte:component this={settings.Sound} section="primary" />
        </div>
        <svelte:component this={settings.Secondary} />
        <svelte:component this={settings.Target} />
</div>

<style lang="scss">
</style>
