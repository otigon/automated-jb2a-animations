<script>
    import { fade, fly } from "svelte/transition";


    export let flagData;
    const options = flagData.options || {};
    let customPath = options.customPath || "";
    $: customPath = customPath;
    $: options.customPath = customPath;

    let isCustom = flagData.options?.enableCustom || false;
    $: isCustom = isCustom;
    $: options.enableCustom = isCustom

</script>

<div
    class="aa-customAnim-container {!isCustom ? 'opacityBorder' : ''}"
    in:fade={{ duration: 500 }}
    out:fade={{ duration: 500 }}
>
    <button
        class={isCustom ? "selected" : "notSelected"}
        on:click={() => customClick()}>Set {localize("AUTOANIM.custom")}</button
    >
    <div
        class="form-group"
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
            class="file-picker {isCustom && customPath != ''
                ? 'isPopulated'
                : 'isNotPopulated opacityButton'}"
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
        margin-right: 6%;
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
    .opacityButton {
        color: rgba(133, 133, 133, 0.418);
    }
</style>
