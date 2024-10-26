<script>
    import { localize } from "#runtime/util/i18n";
    import { getContext }   from "svelte";

    import { currentStore } from "./videoPreview/previewStore.js";

    //export let animation;
    //export let category;
    //export let idx;
    export let type = "autorec";

    export let show3d = false;

    let { animation, category } = getContext('animation-data');

    $: currentIDX = category.stores.videoIDX;

    //$: currentCategory = category.stores.currentCategory;

    let canvas3dActive = game.modules.get("levels-3d-preview")?.active ? "" : "aa-disableOpacity";

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

    function removeMetaData() {
       delete $animation.metaData
   }
</script>

<div class="aa-autorec-headerButton">
    <div style="grid-row:1/2; grid-column:1/2" class="sectionButton" >
        <label for="" on:click={() => seePreview()} role=presentation>
            {localize("autoanimations.menus.preview")}
            <i class="fas fa-film fa-lg aa-zoom" />
        </label>
    </div>
    <div style="grid-row:1/2; grid-column:2/3" class="sectionButton {canvas3dActive}">
        <label for="" on:click={() => (show3d = !show3d)} role=presentation
            >{localize("autoanimations.menus.3dcanvas")}
            <i
                class="fas fa-cube fa-lg {show3d ? 'aa-green' : ''}"
            /></label
        >
    </div>
    <div style="grid-row:1/2; grid-column:3/4" class="sectionButton">
        <label for="SoundOnly {animation._data.id}"
            >{localize("autoanimations.menus.sound")}
            {localize("autoanimations.menus.only")}
            <i
                class="fas fa-music fa-lg {$animation.soundOnly.sound
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
    <div style="grid-row:1/2; grid-column:4/5" class="sectionButton">
        <label for="Macro {animation._data.id}"
            >{localize("autoanimations.menus.add")}
            {localize("autoanimations.menus.macro")}
            <i
                class="far fa-keyboard fa-lg {$animation.macro.enable
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
    .aa-autorec-headerButton label {
        font-size: small;
    }
    .sectionButton {
        background: rgba(0, 0, 0, 0.17);
        padding: .2em;
        border-radius: 1em;
    }
    .sectionButton:hover {
        background: rgba(0, 0, 0, 0.25);
        text-shadow: 0 0 1px rgba(255, 0, 0, 0.427);
        zoom: 1.05;
    }
</style>
