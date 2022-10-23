<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import SoundSettings from "./SoundSettings.svelte";
    import VideoSelect from "./VideoSelect.svelte";
    import SourceFxOptions from "./options/SourceFXOptions.svelte";
    import { getContext }   from "svelte";

    //export let animation;
    //export let idx;
    //export let category;
    let { animation, category, idx } = getContext('animation-data');

    let title = "Source" + " " + game.i18n.localize("autoanimations.menus.animation")

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
        label={localize("autoanimations.menus.source") + " " + localize("autoanimations.menus.animation")}
    >
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Source FX On/Off"
                bind:checked={$animation.source.enable}
            />
        </div>
        <div class={!$animation.source.enable ? "aa-isDisabled" : ""}>
            <VideoSelect {animation} section="source" {title} {idx} {category}/>
            <SourceFxOptions {animation} />
            <SoundSettings {animation} {category} {idx} section="source" />
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-isDisabled {
        pointer-events: none;
        opacity: 0.4;
    }
</style>