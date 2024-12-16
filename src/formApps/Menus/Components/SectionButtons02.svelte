<script>
    import { localize } from "#runtime/util/i18n";
    import { getContext }   from "svelte";

    import { currentStore } from "./videoPreview/previewStore.js";

    //export let animation;
    //export let category;
    //export let idx;
    export let type = "autorec";

    let { animation, category } = getContext('animation-data');

    $: currentIDX = category.stores.videoIDX;

    async function seePreview() {
        if (type === "item") {
            currentIDX.set("item");
        } else {
            const index = category._data.findIndex(x => x.id === $animation.id)
            currentIDX.set(index);
        }
        currentStore.set(category);
        category.loadPreviews(category);
    }

    //$: macroEnabled = $animation.macro.enable;
    //$: macroSetting = $animation.macro.playWhen;

    /*
    $: {
        if (macroEnabled && macroSetting === "2") {
            animation._data.soundOnly.sound.enable = false;
        }
    }
    */
   function removeMetaData() {
       delete $animation.metaData
   }
</script>

<div class="aa-autorec-headerButton02">
    <div style="grid-row:1/2; grid-column:1/2" class="sectionButton">
        <label for="" on:click={() => seePreview()}
               role=presentation
            >{localize("autoanimations.menus.preview")}
            <i class="fas fa-film fa-lg aa-zoom" /></label
        >
    </div>
    <div style="grid-row:1/2; grid-column:2/3" class="sectionButton">
        <label for="SoundOnly {animation._data.id}"
            >{localize("autoanimations.menus.sound")}
            {localize("autoanimations.menus.only")}
            <i
                class="fas fa-music fa-lg aa-zoom {$animation.soundOnly.sound
                    .enable
                    ? 'aa-green'
                    : ''}"
            />
        </label>
        <input
            type="checkbox"
            hidden
            id="SoundOnly {animation._data.id}"
            bind:checked={$animation.soundOnly.sound.enable}
            on:change={() => removeMetaData()}
        />
    </div>
    <div style="grid-row:1/2; grid-column:3/4" class="sectionButton">
        <label for="Macro {animation._data.id}"
            >{localize("autoanimations.menus.add")}
            {localize("autoanimations.menus.macro")}
            <i
                class="far fa-keyboard fa-lg aa-zoom {$animation.macro.enable
                    ? 'aa-green'
                    : ''}"
            />
        </label>
        <input
            type="checkbox"
            hidden
            id="Macro {animation._data.id}"
            bind:checked={$animation.macro.enable}
            on:change={() => removeMetaData()}
        />
    </div>
</div>

<style lang="scss">
    .aa-autorec-headerButton02 label {
        font-size: small;
    }
    .aa-autorec-headerButton02 {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
        margin-right: 6%;
        margin-left: 3%;
        grid-gap: 2%;
        grid-template-rows: 30px;
        padding-bottom: 5px;
        text-align: center;
        align-items: center;
        color: black;
    }
    .sectionButton {
        background: rgba(0, 0, 0, 0.17);
        padding: 0.2em;
        border-radius: 1em;
    }
    .sectionButton:hover {
        background: rgba(0, 0, 0, 0.25);
        text-shadow: 0 0 1px rgba(255, 0, 0, 0.427);
        zoom: 1.05;
    }
</style>
