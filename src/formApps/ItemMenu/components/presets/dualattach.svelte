<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import SoundSettings from "../soundSettings.svelte";
    import ChooseAnimation from "../chooseAnimation.svelte";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import PrimaryApp from "../../videoPreviews/primaryApp.svelte";
    import {
        menuDBPath01,
        customFilePath01,
        customChecked01,
    } from "../../menuStore";

    export let flagData;
    export let presetType;
    export let isAutoRec;

    /*Data Structure
        section: {
            dualattach: {
                menuType: String,
                animation: String,
                variant: String,
                color: String,
                enableCustom: Boolean,
                customPath: String,
                below: Boolean,
                playbackRate: Number,
            }
        }
    */

    let root;
    if (isAutoRec) {
        root = flagData;
    } else {
        root = flagData.preset;
    }
    root.dualattach ? root.dualattach : (root.dualattach = {});
    const preset = root.dualattach;

    let belowToken = preset.below || false;
    $: belowToken = preset.below = belowToken;
    $: aboveBelow = belowToken ? "Below Token" : "Above Token";

    let playbackRate = preset.playbackRate || 1;
    $: playbackRate = preset.playbackRate = playbackRate;

    function below() {
        belowToken = !belowToken;
    }

    let menuType = preset.menuType;
    $: menuType = preset.menuType = menuType;

    let animation = preset.animation;
    $: animation = preset.animation = animation;

    let variant = preset.variant;
    $: variant = preset.variant = variant;

    let color = preset.color;
    $: color = preset.color = color;

    let isCustom = preset.enableCustom || false;
    $: isCustom = preset.enableCustom = isCustom;

    let shouldShowOnlyX = true;

    let customPath = preset.customPath;
    $: customPath = preset.customPath = customPath;
    let customId = "customPresetDualAttach";
    let filePath;
    $: filePath =
        color === "random"
            ? `autoanimations.range.${menuType}.${animation}.${variant}`
            : `autoanimations.range.${menuType}.${animation}.${variant}.${color}`;
    // Sets Store variables for sending to the Video Previewer
    $: {
        menuDBPath01.set(filePath);
        customFilePath01.set(customPath);
        customChecked01.set(isCustom);
    }
    function onClick() {
        new TJSDialog({
            modal: false,
            draggable: true,
            resizable: true,
            title: "Primary Animation",
            stylesContent: { background: "rgba(125, 125, 125, 0.75)" },
            content: {
                class: PrimaryApp,
            },
        }).render(true);
    }
</script>

<div class="aaMenu-section">
    <div class="aa-header-section">
        <div class="aa-header">
            <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
                <label for="">Dual Attach Preset</label>
            </div>
            <div class="flexcol" style="grid-row:1/2; grid-column:1/2">
                <i
                    class="fas fa-video aa-video-preview"
                    on:click={() => onClick()}
                />
            </div>
        </div>
    </div>
    <ChooseAnimation
        bind:menuType
        bind:animation
        bind:variant
        bind:color
        bind:isCustom
        bind:customPath
        bind:customId
        {shouldShowOnlyX}
        {isAutoRec}
        {presetType}
        flagPath="preset"
        animType="range"
        {flagData}
    />
    <div class="aa-options-border">
    <h2 style="margin-top:5px;">Options</h2>
    <div class="aa-options">
        <!--Set Z-Index-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
            <label for="">Z-Index</label>
            <button class="oldCheck" on:click={() => below()}
                >{aboveBelow}</button
            >
        </div>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
            <label for="">{localize("AUTOANIM.playbackRate")}</label>
            <input
                type=number
                bind:value={playbackRate}
                placeholder=1
                step=0.01
            />
        </div>
    </div>
    </div>
    <SoundSettings audioPath="a01" {flagData} />
</div>

<style lang="scss">
    .aa-options {
        display: grid;
        grid-template-columns: 24.25% 24.25% 24.25% 24.25%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
        font-weight: bold;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        color: black;
    }
    .aa-options input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
        color: black;
    }
    .aa-options label {
        align-self: center;
    }
    .aa-options button {
        border-radius: 10px;
        border: 2px outset #8e8e8e;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        height: auto;
    }
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 15%;
        margin-left: 15%;
        color: black;
    }
</style>
