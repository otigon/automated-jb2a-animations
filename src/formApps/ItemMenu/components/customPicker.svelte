<script>
    import { fade } from "svelte/transition";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let customPath;
    export let isCustom;
    export let customId;
    export let dbPath;
    //const options = flagData.options || {};
    //let customPath = options.customPath || "";
    $: customPath = isCustom ? customPath : dbPath;

    $: isCustom = isCustom;

    async function selectCustom() {
        const current = customPath;
        const picker = new FilePicker({
            type: "imagevideo",
            current,
            callback: (path) => {
                customPath = path;
            },
        });
        setTimeout(() => {
            picker.element[0].style.zIndex = `${Number.MAX_SAFE_INTEGER}`;
        }, 100);
        await picker.browse(current);
    }
</script>

<div
    class="aa-customAnim-container"
    transition:fade
>
    <div class="flexcol aa-button-labels" style="grid-row:1/2; grid-column:1/2">
        <input type="checkbox" id={customId} hidden bind:checked={isCustom} />
        <label for={customId} class={isCustom ? "aa-selected" : "aa-notSelected"}
            >Set {localize("autoanimations.menus.custom")}</label
        >
    </div>
    <div
        class="form-group {isCustom ? '' : 'opacityBorder opacityButton'}"
        style="grid-row: 1/2; grid-column: 2/5"
    >
        <input
            disabled={!isCustom}
            type="text"
            bind:value={customPath}
            class={isCustom && customPath != ""
                ? ""
                : "opacityText"}
            style="font-weight:normal; font-size:small"
        />
        <button
            disabled={!isCustom}
            class="file-picker"
            on:click|preventDefault={() => selectCustom()}
            ><i class="fas fa-file-import fa-fw" /></button
        >
    </div>
</div>

<style lang="scss">
    .aa-customAnim-container {
        display: grid;
        grid-template-columns: 24.25% 24.25% 24.25% 24.25%;
        grid-gap: 1%;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-right: 3%;
        margin-left: 3%;
        font-size: small;
        font-weight: bold;
    }
    .aa-customAnim-container button {
        border-radius: 10px;
        border: 2px outset #dddddd;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .opacityText {
        opacity: 0.4;
    }
    .opacityButton button {
        border: 2px outset rgba(133, 133, 133, 0.418);
        color: rgba(133, 133, 133, 0.418);
    }
    .file-picker {
        max-width: fit-content;
    }
</style>
