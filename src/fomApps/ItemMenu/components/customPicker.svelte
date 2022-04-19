<script>
    import { fade, fly } from "svelte/transition";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let flagData;
    export let flagPath;
    let root;
    let options;
    let customPath;
    let enabled;
    switch (flagPath) {
        case "explosions":
            root = flagData.explosions;
            options = flagData.explosions;
            customPath = flagData.explosions.customPath || "";
            enabled = flagData.explosions.enableCustom;
            break;
        default:
            root = flagData.options;
            options = flagData.options;
            customPath = flagData.options.customPath || "";
            enabled = flagData.options.enableCustom;
    }


    //const options = flagData.options || {};
    //let customPath = options.customPath || "";
    $: customPath = customPath;
    $: options.customPath = customPath;

    export let isCustom = root.enableCustom || false;
    $: isCustom = isCustom;
    function customClick() {
        isCustom = isCustom ? false : true;
        options.enableCustom = isCustom;
    }
    async function selectCustom () {
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
    };

</script>

<div
    class="aa-customAnim-container"
    in:fade={{ duration: 500 }}
    out:fade={{ duration: 500 }}
>
    <button
        class={isCustom ? "selected" : "notSelected"}
        on:click={() => customClick()}>Set {localize("AUTOANIM.custom")}</button
    >
    <div
        class="form-group {isCustom ? "" : "opacityBorder opacityButton"}"
        style="grid-row: 1/2; grid-column: 2/5"
        in:fade={{ duration: 500 }}
        out:fade={{ duration: 500 }}
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
    }
    .aa-customAnim-container button {
        border-radius: 10px;
        border: 2px solid black;
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
    .opacityButton button{
        border: 2px solid rgba(133, 133, 133, 0.418);
        color: rgba(133, 133, 133, 0.418);
    }
    .file-picker {
        max-width: fit-content;
    }
    .selected {
        background-color:rgba(25, 175, 2, 0.18);
        transition: background-color 0.5s
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.18);
        transition: background-color 0.5s
    }
</style>
