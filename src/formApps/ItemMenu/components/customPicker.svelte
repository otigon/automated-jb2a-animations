<script>
    import { fade } from "svelte/transition";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let customPath;
    export let isCustom;
    export let customId;

    //const options = flagData.options || {};
    //let customPath = options.customPath || "";
    $: customPath = customPath;

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
        <label for={customId} class={isCustom ? "selected" : "notSelected"}
            >Set {localize("AUTOANIM.custom")}</label
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
                ? "isPopulated"
                : "isNotPopulated opacityText"}
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
        grid-template-columns: 25% 25% 25% 25%;
        grid-gap: 5px;
        padding: 5px;
        margin-right: 8%;
        margin-left: 5%;
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
    .isPopulated {
        box-shadow: 0 0 6px rgba(25, 175, 2, 0.6);
        transition: box-shadow 0.5s;
    }
    .isNotPopulated {
        box-shadow: 0 0 6px rgba(219, 132, 2, 0.7);
        transition: box-shadow 0.5s;
    }
    .opacityText {
        color: rgba(133, 133, 133, 0.418);
    }
    .opacityButton button {
        border: 2px outset rgba(133, 133, 133, 0.418);
        color: rgba(133, 133, 133, 0.418);
    }
    .file-picker {
        max-width: fit-content;
    }
    .selected {
        background-color: rgba(25, 175, 2, 0.18);
        transition: background-color 0.5s;
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.18);
        transition: background-color 0.5s;
    }
</style>
