<script>
    import { fade } from "svelte/transition";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let customPath;
    export let isCustom;
    export let customId;

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
    in:fade
>
    <div class="flexcol" style="grid-row:1/2; grid-column:1/2">
        <input type="checkbox" id={customId} hidden bind:checked={isCustom} />
        <label for={customId} class="aa-setDim {isCustom ? "aa-selected" : "aa-notSelected"}"
            >{localize("autoanimations.menus.custom")}</label
        >
    </div>
    <div
        class="form-group aa-custom"
        style="grid-row: 1/2; grid-column: 2/5"
    >
        <input
            disabled={!isCustom}
            type="text"
            bind:value={customPath}
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
        align-items: center;
        margin-right: 6%;
        margin-left: 3%;
        font-size: small;
        font-weight: bold;
    }
    .aa-customAnim-container button {
        border-radius: 10px;
        border: 2px outset rgb(142, 142, 142);
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .file-picker {
        max-width: fit-content;
    }
    .aa-custom button:disabled {
        opacity:0.4;
    }
    .aa-custom input:disabled {
        opacity:0.4;
    }
    .aa-setDim {
        line-height: 1.25em;
        width:75%;
        align-self: center;
        padding: 0;
        border-radius: 8px;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        text-align: center;
        border: 2px outset rgb(142, 142, 142);
        color:black;
    }
</style>
