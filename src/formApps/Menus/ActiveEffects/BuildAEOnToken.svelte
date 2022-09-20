<script>
    import VideoSelect from "../components/VideoSelect.svelte";
    import OnTokenOptions from "./options/OnTokenOptions.svelte";
    import SoundSettings from "../components/SoundSettings.svelte";
    import SoundOnly from "../components/SoundOnly.svelte";
    import ExtraSource from "../components/ExtraSource.svelte";
    import Secondary from "../components/Secondary.svelte";
    import Macro from "../components/Macro.svelte";

    export let animation;
    export let idx = 0;
    export let category;

    let title =
        game.i18n.localize("autoanimations.menus.primary") +
        " " +
        game.i18n.localize("autoanimations.menus.animation");

</script>

    <div hidden={$animation.macro.enable && $animation.macro.playWhen === "2"}>
        <ExtraSource {animation} {idx} {category} />
        <div class="aa-primary-border">
            <VideoSelect {animation} section="data" {title} {idx} {category} />
            <OnTokenOptions {animation} {category} />
            <SoundSettings {animation} {category} {idx} section="data" />
        </div>
        <Secondary {animation} {idx} {category} />
    </div>

<style lang="scss">
</style>
