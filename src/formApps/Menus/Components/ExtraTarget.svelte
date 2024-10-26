<script>
    import { getContext }   from "svelte";

    import { localize } from "#runtime/util/i18n";

    import { TJSSvgFolder } from "#standard/component/folder";

    import SoundSettings from "./SoundSettings.svelte";
    import VideoSelect from "./VideoSelect.svelte";
    import TargetFxOptions from "./options/TargetFXOptions.svelte";
    import EffectColor from "./options/EffectColor.svelte";

    //export let animation;
    //export let idx;
    //export let category;
    let { animation, category, idx } = getContext('animation-data');

    let title = "Target" + " " + game.i18n.localize("autoanimations.menus.animation")

    const folderOptions = {
        styles: {
            "--tjs-summary-font-family":
                '"Modesto Condensed", "Palatino Linotype", serif',
            "--tjs-summary-font-size": "1.1em",
            "--tjs-summary-chevron-size": "0.7em",
        },
    };
    function checkMeta() {
        delete $animation.metaData
    }

</script>

<div class="aa-section-border">
    <TJSSvgFolder
        folder={folderOptions}
        label={localize("autoanimations.menus.target") + " " + localize("autoanimations.menus.animation")}
    >
        <div slot="summary-end">
            <input
                on:click|stopPropagation
                type="checkbox"
                style="align-self:center"
                title="Toggle Target FX On/Off"
                bind:checked={$animation.target.enable}
                on:change={() => checkMeta()}
            />
        </div>
        <div class={!$animation.target?.enable ? "aa-isDisabled" : ""}>
            <VideoSelect {animation} section="target" {title} {idx} {category}/>
            <TargetFxOptions {animation} />
            <svelte:component this={EffectColor} section="target" />
            <SoundSettings {animation} {category} {idx} section="target" />
        </div>
    </TJSSvgFolder>
</div>

<style lang="scss">
    .aa-isDisabled {
        pointer-events: none;
        opacity: 0.4;
    }
</style>
