<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
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
            flagData.sourceToken ? flagData.sourceToken : flagData.sourceToken = {}
            root = flagData.sourceToken;
            audioPath = "s01";
            sectionTitle = game.i18n.localize("autoanimations.menus.source") + " " + game.i18n.localize("autoanimations.menus.effects");
            break;
        case "targetExtraFX":
            flagData.targetToken ? flagData.targetToken : flagData.targetToken = {}
            root = flagData.targetToken;
            audioPath = "t01";
            sectionTitle = game.i18n.localize("autoanimations.menus.target") + " " + game.i18n.localize("autoanimations.menus.effects");
            break;
    }

    root.options ? root.options : root.options = {};
    const options = root.options;
    root.primary ? root.primary : root.primary = {};
    const primary = root.primary;

    let repeat = options.repeat || 1;
    $: repeat = options.repeat = Number(repeat);

    let delay = options.delay || 250;
    $: delay = options.delay = Number(delay);

    let scale = options.scale || 1;
    $: scale = options.scale = Number(scale);

    let belowToken = options.below || false;
    $: belowToken = options.below = belowToken;

    let opacity = options.opacity || 1;
    $: opacity = options.opacity = opacity > 1 ? 1 : Number(opacity);

    let unbindAlpha = options.unbindAlpha || false;
    $: unbindAlpha = options.unbindAlpha = unbindAlpha;

    let unbindVisbility = options.unbindVisbility || false;
    $: unbindVisbility = options.unbindVisbility = unbindVisbility;

    let persistent =
        flagPath === "sourceExtraFX" ? false : options.persistent || false;
    $: persistent = options.persistent = persistent;

    let delayAfter = options.delayAfter || 0;
    $: delayAfter = options.delayAfter = Number(delayAfter)

    let delayStart = options.delayStart || 0;
    $: delayStart = options.delayStart = Number(delayStart)

    function below() {
        belowToken = !belowToken;
    }

    $: aboveBelow = belowToken ? game.i18n.localize("autoanimations.menus.below") : game.i18n.localize("autoanimations.menus.above");
    $: bindAlpha = unbindAlpha ? game.i18n.localize("autoanimations.menus.unbound") : game.i18n.localize("autoanimations.menus.bound");
    $: bindVisibility = unbindVisbility ? game.i18n.localize("autoanimations.menus.unbound") : game.i18n.localize("autoanimations.menus.bound");
    $: isPersistent = persistent ? game.i18n.localize("autoanimations.menus.persistant") : game.i18n.localize("autoanimations.menus.not") + " " + game.i18n.localize("autoanimations.menus.persistant");
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

    export let enableSection = root.enable || false;
    $: enableSection = enableSection;

    function switchEnable() {
        enableSection = !enableSection;
        root.enable = enableSection;
    }

    let menuType = primary.menuType;
    $: menuType = primary.menuType = menuType;

    let animation = primary.animation;
    $: animation = primary.animation = animation;

    let variant = primary.variant;
    $: variant = primary.variant = variant;

    let color = primary.color;
    $: color = primary.color = color;

    let isCustom = primary.enableCustom || false;
    $: isCustom = primary.enableCustom = isCustom;

    let customPath = primary.customPath || "";
    $: customPath = primary.customPath = customPath;

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
        extraSource.set(enableSection);
    }
    $: if (flagPath === "targetExtraFX") {
        menuDBPathTargetFX.set(targetFilePath);
        customFilePathTargetFX.set(customPath);
        customCheckedTargetFX.set(isCustom);
        extraTarget.set(enableSection);
    }
    /*
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
    */
    let customId = flagPath === "sourceExtraFX" ? "customSource" : "customTarget";
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
        bind:customId
        animType="static"
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
            <label for="">{localize("autoanimations.menus.persistence")}</label>
            <button
                disabled={flagPath === "sourceExtraFX"}
                on:click={() => switchPersistence()}>{isPersistent}</button
            >
        </div>
        <!--Set Z-Index-->
        <div class="flexcol" style="grid-row: 1 / 2; grid-column: 2 / 3;">
            <label for="">{localize("autoanimations.menus.z-index")}</label>
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
            <label for="">{localize("autoanimations.menus.visibility")}</label>
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
            <label for="">{localize("autoanimations.menus.alpha")}</label>
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
            <label for="aaRepeat">{localize("autoanimations.menus.repeat")}</label>
            <input
                disabled={persistent}
                id="aaRepeat"
                type="Number"
                bind:value={repeat}
                placeholder=1
            />
        </div>
        <!--Set delay between repeats-->
        <div
            class="flexcol {persistent ? 'aa-opacityButton' : ''}"
            style="grid-row: 2 / 3; grid-column: 2 / 3;"
        >
            <label for="aaDelay"
                >{localize("autoanimations.menus.repeat")}
                {localize("autoanimations.menus.delay")}</label
            >
            <input
                disabled={persistent}
                it="aaDelay"
                type="Number"
                bind:value={delay}
            />
        </div>
        <!--Set Scale of Animation. Not rendered if Anim Type is Templates-->
        <div class="flexcol" style="grid-row: 2 / 3; grid-column: 3 / 4;">
            <label for="">{localize("autoanimations.menus.scale")}</label>
            <input
                type="Number"
                bind:value={scale}
                placeholder=1
                step=0.01
            />
        </div>
        <!--Set Animation Opacity-->
        <div
            class="flexcol"
            style="grid-row: 2 / 3; grid-column: 4 / 5;"
            in:fade={{ duration: 500 }}
            out:fade={{ duration: 500 }}
        >
            <label for="">{localize("autoanimations.menus.opacity")}</label>
            <div class="form-group">
                <input
                    type="Number"
                    bind:value={opacity}
                    placeholder=1
                    min=0
                    max=1
                    step=0.01
                />
                <input
                    type="range"
                    min=0
                    max=1
                    step=0.01
                    bind:value={opacity}
                />
            </div>
        </div>
        {#if flagPath === "sourceExtraFX"}
        <div class="flexcol" style="grid-row:3/4; grid-column:2/4">
            <label for="">{localize("autoanimations.menus.delay")} {localize("autoanimations.menus.primary")} {localize("autoanimations.menus.start")}</label>
            <input
                type="Number"
                bind:value={delayAfter}
                placeholder=1
                step=0.01
            />
        </div>
        {:else}
        <div class="flexcol" style="grid-row:3/4; grid-column:2/4">
            <label for="">{localize("autoanimations.menus.delay")} {localize("autoanimations.menus.start")}</label>
            <input
                type="Number"
                bind:value={delayStart}
                placeholder=1
                step=0.01
            />
        </div>
        {/if}
    </div>
    <SoundSettings {audioPath} {flagData} />
    {/if}
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
