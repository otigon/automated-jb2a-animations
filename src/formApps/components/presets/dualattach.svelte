<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import SoundSettings from "../soundSettings.svelte";
    import ChooseAnimation from "../chooseAnimation.svelte";

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
</script>

<div class="aaMenu-section">
    <div class="aa-preset-header">
        <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
            <label for="" style="font-size:xx-large; color: rgba(0, 0, 0, 0.6)"
                >{localize("autoanimations.presetTypes.dualattach")}</label
            >
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
    <h2 style="margin-top:5px;">{localize("autoanimations.menus.options")}</h2>
    <div class="aa-options">
        <!--Set Z-Index-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
            <label for="">{localize("autoanimations.menus.level")}</label>
            <button class="oldCheck" on:click={() => below()}
                >{aboveBelow}</button
            >
        </div>
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
            <label for="">{localize("autoanimations.menus.playbackRate")}</label>
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
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
</style>
