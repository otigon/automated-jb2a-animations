<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import SoundSettings from "./SoundSettings.svelte";
    import VideoSelect from "./VideoSelect.svelte";
    import SecondaryOptions from "./options/SecondaryOptions.svelte";
    import { getContext }   from "svelte";

    //export let animation;
    //export let idx;
    //export let category;

    let { animation, category, idx } = getContext('animation-data');

    let title = "Secondary" + " " + game.i18n.localize("autoanimations.menus.animation")

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
        label={localize("autoanimations.variants.secondary") + " " + localize("autoanimations.menus.animation")}
    >
        <div slot="summary-end">
            <input
                type="checkbox"
                style="align-self:center"
                title="Toggle Secondary On/Off"
                bind:checked={$animation.secondary.enable}
            />
        </div>
        <div class={!$animation.secondary.enable ? "aa-isDisabled" : ""}>
            <VideoSelect {animation} section="secondary" {title} {idx} {category}/>
            <SecondaryOptions {animation} />
            <SoundSettings {animation} {category} {idx} section="secondary" />
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-isDisabled {
        pointer-events: none;
        opacity: 0.4;
    }
</style>