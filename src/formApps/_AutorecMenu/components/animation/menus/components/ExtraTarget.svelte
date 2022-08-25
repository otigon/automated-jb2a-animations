<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import SoundSettings from "./SoundSettings.svelte";
    import VideoSelect from "./VideoSelect.svelte";
    import TargetFxOptions from "./options/TargetFXOptions.svelte";

    export let animation;
    export let idx;
    export let category;

    let title = "Target" + " " + game.i18n.localize("autoanimations.menus.animation")

    const folderOptions = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };
</script>

<div class="aa-section-border">
    <TJSSvgFolder
        folder={folderOptions}
        label={localize("autoanimations.menus.target") + " " + localize("autoanimations.menus.animation")}
    >
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Target FX On/Off"
                bind:checked={$animation.target.enable}
            />
        </div>
        <div class={!$animation.target.enable ? "aa-isDisabled" : ""}>
            <VideoSelect {animation} section="target" {title} {idx} {category}/>
            <TargetFxOptions {animation} {category} />
            <SoundSettings {animation} section="target" />
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-isDisabled {
        pointer-events: none;
        opacity: 0.4;
    }
</style>