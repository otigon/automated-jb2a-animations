<script>
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import ExplosionApp from "../videoPreviews/explosionApp.svelte";
    import ChooseAnimation from "./chooseAnimation.svelte";
    import SoundSettings from "./soundSettings.svelte";
    import { fade } from "svelte/transition";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import {
        menuDBPath02,
        customFilePath02,
        customChecked02,
        explosionEnabled
    } from "../menuStore.js";

    export let flagData;
    flagData.explosions ? flagData.explosions : flagData.explosions = {};
    const root = flagData.explosions;
    let explosions = flagData.explosions;

    let radius = explosions.radius;
    $: radius = explosions.radius = Number(radius);
    

    let delay = explosions.delay;
    $: delay = explosions.delay = Number(delay);

    let belowToken = explosions.below;
    $: belowToken = explosions.below = belowToken;

    $: aboveBelow = belowToken ? game.i18n.localize("autoanimations.menus.below") : game.i18n.localize("autoanimations.menus.above");
    function below() {
        belowToken = !belowToken;
    }

    let enableSection = root.enable || false;
    $: enableSection = enableSection;
    $: explosionEnabled.set(enableSection)
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
    $: isCustom = root.enableCustom = isCustom;

    let customPath = root.customPath || "";
    $: customPath = root.customPath = customPath;

    function onClick() {
        new TJSDialog({
            modal: false,
            draggable: true,
            resizable: true,
            title: "Explosion Preview",
            stylesContent: { background: "rgba(125, 125, 125, 0.75)" },
            content: {
                class: ExplosionApp,
            },
        }).render(true);
    }
    let explosionFilePath =
            color === "random"
                ? `autoanimations.static.${menuType}.${animation}.${variant}`
                : `autoanimations.static.${menuType}.${animation}.${variant}.${color}`;
    $: explosionFilePath =
            color === "random"
                ? `autoanimations.static.${menuType}.${animation}.${variant}`
                : `autoanimations.static.${menuType}.${animation}.${variant}.${color}`;

    $: {
        menuDBPath02.set(explosionFilePath);
        customFilePath02.set(customPath);
        customChecked02.set(isCustom);
    }
    let customId = "customExplosion";

</script>

<div>
    <div class="aa-header-section">
        <div class="aa-header">
            <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
                <label for="">{localize("autoanimations.menus.explosion")} {enableSection ? localize("autoanimations.menus.enabled") : localize("autoanimations.menus.disabled")}</label>
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
        previewType="explosion"
        flagPath="explosions"
        {flagData}
    />
        <h2 transition:fade>Options</h2>
        <div class="aa-3wide" transition:fade>
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 1 / 3;">
                <label for="">{localize("autoanimations.menus.radius")}</label>
                <input type="Number" bind:value={radius} placeholder=1.5 />
            </div>
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 3 / 4;">
                <label for="">{localize("autoanimations.menus.delay")}</label>
                <input type="Number" bind:value={delay} placeholder=1 />
            </div>
            <div class="flexcol" style="grid-row: 1 / 2; grid-column: 4 / 5;">
                <label for="">Z-Index</label>
                <button class="oldCheck" on:click={() => below()}
                    >{aboveBelow}</button
                >
            </div>
        </div>
        <SoundSettings audioPath="e01" {flagData} />
    {/if}
</div>

<style lang="scss">
    .aa-3wide {
        display: grid;
        grid-template-columns: 12.5% 25% 25% 25% 12.5%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-size: medium;
        font-weight: bold;
    }
    .aa-3wide input {
        text-align: center;
        align-self: center;
        border-radius: 5px;
        width: 3em;
    }
    .aa-3wide label {
        align-self: center;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-3wide button {
        border-radius: 10px;
        border: 2px outset #dddddd;
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
    }
</style>
