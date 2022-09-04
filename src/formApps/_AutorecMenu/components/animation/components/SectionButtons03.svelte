<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { currentStore } from "./videoPreview/previewStore.js";

    export let animation;
    export let category;
    export let idx;

    $: currentIDX = category.stores.videoIDX;

    async function seePreview() {
        currentIDX.set(idx);
        currentStore.set(category);
        //currentCategory.set(category)
        category.loadPreviews(category);
        //new VideoPreview({ animation }).render(true);
    }
</script>

<div class="aa-autorec-headerButton">
    <div style="grid-row:1/2; grid-column:1/2">
        <label
            for=""
            on:click={() =>
                ($animation.soundOnly.sound.enable =
                    !animation._data.soundOnly.sound.enable)}
            >{localize("autoanimations.menus.sound")}
            {localize("autoanimations.menus.only")}
            <i
                class="fas fa-music fa-lg aa-zoom {$animation.soundOnly.sound
                    .enable
                    ? 'aa-green'
                    : ''}"
            /></label
        >
    </div>
    <div style="grid-row:1/2; grid-column:2/3">
        <label
            for=""
            on:click={() =>
                ($animation.macro.enable = !animation._data.macro.enable)}
            >{localize("autoanimations.menus.add")}
            {localize("autoanimations.menus.macro")}
            <i
                class="far fa-keyboard fa-lg aa-zoom {$animation.macro.enable
                    ? 'aa-green'
                    : ''}"
            /></label
        >
    </div>
</div>

<style lang="scss">
    .aa-autorec-headerButton label {
        font-size: small;
    }
    .aa-autorec-headerButton {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 30px;
        padding: 5px;
        text-align: center;
        align-items: center;
        color: black;
    }
</style>
