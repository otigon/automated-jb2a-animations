<script>
    import VideoSelect from "../Components/VideoSelect.svelte";
    import OnTokenOptions from "./options/OnTokenOptions.svelte";
    import SoundSettings from "../Components/SoundSettings.svelte";
    import ExtraSource from "../Components/ExtraSource.svelte";
    import Secondary from "../Components/Secondary.svelte";

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
            <VideoSelect {animation} section="primary" {title} {idx} {category} />
            <OnTokenOptions {animation} />
            <SoundSettings {animation} {category} {idx} section="primary" />
        </div>
        <Secondary {animation} {idx} {category} />
    </div>

<style lang="scss">
</style>
