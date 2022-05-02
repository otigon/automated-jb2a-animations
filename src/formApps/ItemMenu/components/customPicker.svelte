<script>
    import { fade, fly } from "svelte/transition";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let flagData;
    export let flagPath;
    export let presetType;
    export let presetSubType;
    let root;
    let options;
    export let customPath;
    export let isCustom;
    let enabled;
    let customId;
    switch (flagPath) {
        case "explosions":
            console.log("routing to explosions");
            customId = "customExplosion";
            break;
        case "sourceExtraFX":
            console.log("routing to Source Token");
            root = flagData.sourceToken;
            options = flagData.sourceToken;
            customPath = flagData.sourceToken.customPath || "";
            enabled = flagData.sourceToken.enableCustom;
            customId = "customSource";
            break;
        case "targetExtraFX":
            console.log("routing to Target Token");
            root = flagData.targetToken;
            options = flagData.targetToken;
            customPath = flagData.targetToken.customPath || "";
            enabled = flagData.targetToken.enableCustom;
            customId = "customTarget";
            break;
        case "preset":
            switch (presetSubType) {
                case "Secondary":
                    root = options = flagData.preset[presetType];
                    customPath = flagData.preset[presetType].customPath02 || "";
                    enabled = flagData.preset[presetType].enableCustom02;
                    customId = "customPreset02";
                    break;
                case "Tertiary":
                    root = options = flagData.preset[presetType];
                    customPath = flagData.preset[presetType].customPath03 || "";
                    enabled = flagData.preset[presetType].enableCustom03;
                    customId = "customPreset03";
                    break;

                case "TeleStart":
                    root = options = flagData.preset[presetType].start;
                    customPath = flagData.preset[presetType].start.customPath || "";
                    enabled = flagData.preset[presetType].start.enableCustom;
                    customId = "customPresetStart";
                    break;
                case "TeleBetween":
                    root = options = flagData.preset[presetType].between;
                    customPath = flagData.preset[presetType].between.customPath || "";
                    enabled = flagData.preset[presetType].between.enableCustom;
                    customId = "customPresetBetween";
                    break;
                case "TeleEnd":
                    root = options = flagData.preset[presetType].end;
                    customPath = flagData.preset[presetType].end.customPath || "";
                    enabled = flagData.preset[presetType].end.enableCustom;
                    customId = "customPresetEnd";
                    break;
                case "FireballProjectile":
                    root = options = flagData.preset[presetType].projectile;
                    customPath = flagData.preset[presetType].projectile.customPath || "";
                    enabled = flagData.preset[presetType].projectile.enableCustom;
                    customId = "customPresetProjectile";
                    break;
                case "FireballExplosion01":
                    root = options = flagData.preset[presetType].explosion01;
                    customPath = flagData.preset[presetType].explosion01.customPath || "";
                    enabled = flagData.preset[presetType].explosion01.enableCustom;
                    customId = "customPresetExplosion01";
                    break;
                case "FireballExplosion02":
                    root = options = flagData.preset[presetType].explosion02;
                    customPath = flagData.preset[presetType].explosion02.customPath || "";
                    enabled = flagData.preset[presetType].explosion02.enableCustom;
                    customId = "customPresetExplosion02";
                    break;
                default:
                    root = options = flagData.preset[presetType];
                    customPath = flagData.preset[presetType].customPath || "";
                    enabled = flagData.preset[presetType].enableCustom;
                    customId = "customPreset";
            }
            break;
        default:
            console.log("routing to Primary");
            root = flagData.options;
            options = flagData.options;
            customPath = flagData.options.customPath || "";
            enabled = flagData.options.enableCustom || false;
            customId = "customPrimary";
    }

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
    in:fade={{ duration: 500 }}
    out:fade={{ duration: 500 }}
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
