<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import StaticMenu from "./staticMenu.svelte";
    import SoundSettings from "./soundSettings.svelte";
    import ChooseAnimation from "./chooseAnimation.svelte";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import SourceFxApp from "../videoPreviews/sourceFXApp.svelte";
    import TargetFxApp from "../videoPreviews/targetFXApp.svelte";
    import {
        menuDBPathSourceFX,
        customFilePathSourceFX,
        customCheckedSourceFX,
        menuDBPathTargetFX,
        customFilePathTargetFX,
        customCheckedTargetFX,
        extraSource,
        extraTarget,
    } from "../menuStore.js";


    export let flagData;
    export let flagPath;

    let root;
    let audioPath;
    let sectionTitle;
    switch (flagPath) {
        case "sourceExtraFX":
            console.log("Source FX Options");
            root = flagData.sourceToken;
            audioPath = "s01";
            sectionTitle = "Source Effect";
            break;
        case "targetExtraFX":
            console.log("Target FX Options");
            root = flagData.targetToken;
            audioPath = "t01";
            sectionTitle = "Target Effect";
            break;
    }
    let previewType = flagPath === "sourceExtraFX" ? "source" : "target";
    let repeat = root.loops || 1;
    $: repeat = root.loops = repeat;

    let delay = root.loopDelay;
    $: delay = root.loopDelay = delay;

    let scale = root.scale || 1;
    $: scale = root.scale = scale;

    let belowToken = root.animLevel || false;
    $: belowToken = root.animLevel = belowToken;

    let opacity = root.opacity || 1;
    $: opacity = root.opacity = opacity > 1 ? 1 : opacity;

    let unbindAlpha = root.unbindAlpha || false;
    $: unbindAlpha = root.unbindAlpha = unbindAlpha;

    let unbindVisbility = root.unbindVisbility || false;
    $: unbindVisbility = root.unbindVisbility = unbindVisbility;

    let persistent =
        flagPath === "sourceExtraFX" ? false : root.persistent || false;
    $: persistent = root.persistent = persistent;

    function below() {
        belowToken = !belowToken;
    }

    $: aboveBelow = belowToken ? "Below Token" : "Above Token";
    $: bindAlpha = unbindAlpha ? "Unbound" : "Bound";
    $: bindVisibility = unbindVisbility ? "Unbound" : "Bound";
    $: isPersistent = persistent ? "Persistent" : "Not Persistent";
    function switchAlpha() {
        unbindAlpha = !unbindAlpha;
    }
    function switchVisibility() {
        unbindVisbility = !unbindVisbility;
    }
    function switchPersistence() {
        persistent = !persistent;
        let newPersistance = persistent;
        if (newPersistance) {
            repeat = 1;
        }
    }

    let enableSection = root.enable || false;
    $: enableSection = enableSection;

    function switchEnable() {
        enableSection = !enableSection;
        root.enable = enableSection;
    }

    let menuType = root.menuType;
    $: menuType = root.menuType = menuType;

    let animation = root.animation;
    $: animation = root.animation = animation;

    let variant = root.variant;
    $: variant = root.variant = variant;

    let color = root.color;
    $: color = root.color = color;

    let isCustom = root.enableCustom || false;
    $: isCustom = isCustom;

    let customPath = root.customPath;
    $: customPath = customPath;

    function onClick() {
        new TJSDialog({
            modal: false,
            draggable: true,
            resizable: true,
            title:
                flagPath === "sourceExtraFX" ? "Extra Source Effect" : "Extra Target Effect",
            stylesContent: { background: "rgba(125, 125, 125, 0.75)" },
            content: {
                class: flagPath === "sourceExtraFX" ? SourceFxApp : TargetFxApp,
            },
        }).render(true);
    }
    let sourceFilePath;
    $: if (flagPath === "sourceExtraFX") {
        sourceFilePath =
            color === "random"
                ? `autoanimations.static.${menuType}.${animation}.${variant}`
                : `autoanimations.static.${menuType}.${animation}.${variant}.${color}`;
    }
    let targetFilePath;
    $: if (flagPath === "targetExtraFX") {
        targetFilePath =
            color === "random"
                ? `autoanimations.static.${menuType}.${animation}.${variant}`
                : `autoanimations.static.${menuType}.${animation}.${variant}.${color}`;
    }
    $: if (flagPath === "sourceExtraFX") {
        menuDBPathSourceFX.set(sourceFilePath);
        customFilePathSourceFX.set(customPath);
        customCheckedSourceFX.set(isCustom);
    }
    $: if (flagPath === "targetExtraFX") {
        menuDBPathTargetFX.set(targetFilePath);
        customFilePathTargetFX.set(customPath);
        customCheckedTargetFX.set(isCustom);
    }
    $: {
        if (flagPath === "sourceExtraFX") {
            extraSource.set(enableSection);
        }
    }

    $: {
        if (flagPath === "targetExtraFX") {
            extraTarget.set(enableSection);
        }
    }
</script>

<div transition:fade={{ duration: 500 }}>
    <div class="aa-header-section">
        <div class="aa-header">
            <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
                <label for="">{sectionTitle}</label>
            </div>
            {#if enableSection}
                <div
                    class="flexcol"
                    style="grid-row:1/2; grid-column:1/2"
                    transition:fade
                >
                    <i
                        class="fas fa-video aa-video-preview"
                        on:click={() => onClick()}
                    />
                </div>
            {/if}
            <div class="flexcol" style="grid-row:1/2; grid-column:5/6;">
                <i
                    class="{enableSection
                        ? 'fas fa-minus aa-red'
                        : 'fas fa-plus aa-green'} aaCenterToggle"
                    on:click={() => switchEnable()}
                />
            </div>
        </div>
    </div>
    {#if enableSection}
    <ChooseAnimation
        bind:menuType
        bind:animation
        bind:variant
        bind:color
        bind:isCustom
        bind:customPath
        {flagPath}
        {flagData}
    />
    <h2 style="margin-top:5px" transition:fade>Options</h2>
    <div
        class="aa-options"
        transition:fade
    >
        <!--Persistent Setting-->
        <div
            class="flexcol {flagPath === 'sourceExtraFX'
                ? 'aa-opacityButton'
                : ''}"
            style="grid-row: 1 / 2; grid-column: 1 / 2;"
        >
            <label for="">Persistence</label>
            <button
                disabled={flagPath === "sourceExtraFX"}
                on:click={() => switchPersistence()}>{isPersistent}</button
            >
        </div>
        <!--Set Z-Index-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
            <label for="">Z-Index</label>
            <button class="oldCheck" on:click={() => below()}
                >{aboveBelow}</button
            >
        </div>
        <!--Bind/Unbind Visibility (for Persistent Effects)-->
        <div
            class="flexcol {flagPath === 'sourceExtraFX'
                ? 'aa-opacityButton'
                : ''}"
            style="grid-row: 1 / 2; grid-column: 3 / 4;"
        >
            <label for="">Visibility</label>
            <button
                disabled={flagPath === "sourceExtraFX"}
                on:click={() => switchVisibility()}>{bindVisibility}</button
            >
        </div>
        <!--Bind/Unbind Opacity (for Persistent Effects)-->
        <div
            class="flexcol {flagPath === 'sourceExtraFX'
                ? 'aa-opacityButton'
                : ''}"
            style="grid-row: 1 / 2; grid-column: 4 / 5;"
        >
            <label for="">Alpha</label>
            <button
                disabled={flagPath === "sourceExtraFX"}
                on:click={() => switchAlpha()}>{bindAlpha}</button
            >
        </div>
        <!--Set Number of times the animation plays-->
        <div
            class="flexcol {persistent ? 'aa-opacityButton' : ''}"
            style="grid-row: 2 / 3; grid-column: 1 / 2;"
        >
            <label for="aaRepeat">{localize("AUTOANIM.repeat")}</label>
            <input
                disabled={persistent}
                id="aaRepeat"
                type="Number"
                bind:value={repeat}
                placeholder="1"
            />
        </div>
        <!--Set delay between repeats-->
        <div
            class="flexcol {persistent ? 'aa-opacityButton' : ''}"
            style="grid-row: 2 / 3; grid-column: 2 / 3;"
        >
            <label for="aaDelay"
                >{localize("AUTOANIM.repeat")}
                {localize("AUTOANIM.delay")}</label
            >
            <input
                disabled={persistent}
                it="aaDelay"
                type="Number"
                bind:value={delay}
                placeholder="250"
            />
        </div>
        <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
        <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
            <label for="">{localize("AUTOANIM.scale")}</label>
            <input
                type="Number"
                bind:value={scale}
                placeholder="1"
                step="0.01"
            />
        </div>
        <!--Set Animation Opacity-->
        <div
            class="flexcol"
            style="grid-row: 2 / 3; grid-column: 4 / 5;"
            in:fade={{ duration: 500 }}
            out:fade={{ duration: 500 }}
        >
            <label for="">{localize("AUTOANIM.opacity")}</label>
            <div class="form-group">
                <input
                    type="Number"
                    bind:value={opacity}
                    placeholder="1"
                    min="0"
                    max="1"
                    step="0.01"
                />
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    bind:value={opacity}
                />
            </div>
        </div>
    </div>
    <SoundSettings {audioPath} {flagData} />
    {/if}
</div>

<style lang="scss">
    .aa-options {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-weight: bold;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
    }
    .aa-options input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
    }
    .aa-options label {
        align-self: center;
    }
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 15%;
        margin-left: 15%;
    }
    .oldCheck {
        align-self: bottom;
    }
    .aa-options button {
        border-radius: 10px;
        border: 2px outset #dddddd;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        height: auto;
    }
    .aa-opacityButton input {
        color: rgba(133, 133, 133, 0.3);
    }
    .aa-opacityButton label {
        color: rgba(133, 133, 133, 0.3);
        transition: color 0.5s;
    }
    .aa-opacityButton button {
        border: 2px outset #dddddd86;
        color: rgba(133, 133, 133, 0.3);
        transition: color 0.5s, border 0.5s;
    }
</style>
