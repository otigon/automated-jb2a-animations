<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import SoundSettings from "./SoundSettings.svelte";
    import VideoSelect from "./VideoSelect.svelte";
    import ExplosionOptions from "./options/ExplosionOptions02.svelte";

    export let animation;
    export let idx;
    export let category;

    let title = "Secondary" + " " + game.i18n.localize("autoanimations.menus.animation")

    const folderOptions = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.2em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };
</script>

<div class="aa-section-border">
    <TJSSvgFolder
        folder={folderOptions}
        label={`Secondary ${localize("autoanimations.menus.animation")} ${
            $animation.explosion.enable
                ? localize("autoanimations.menus.enabled")
                : localize("autoanimations.menus.disabled")
        }`}
    >
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Explosion On/Off"
                bind:checked={$animation.explosion.enable}
            />
        </div>
        <div class={!$animation.explosion.enable ? "aa-isDisabled" : ""}>
            <VideoSelect {animation} section="explosion" {title} {idx} {category}/>
            <ExplosionOptions {animation} />
            <SoundSettings {animation} section="explosion" />
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-isDisabled {
        pointer-events: none;
        opacity: 0.4;
    }
</style>