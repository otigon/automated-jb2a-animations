<script>
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    //import ExplosionApp from "../videoPreviews/explosionApp.svelte";
    import ChooseAnimation from "./chooseAnimation.svelte";
    import SoundSettings from "./soundSettings.svelte";
    import { fade } from "svelte/transition";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    /*
    import {
        menuDBPath02,
        customFilePath02,
        customChecked02,
        explosionEnabled,
    } from "../menuStore.js";
    */
    import { storeAutorec } from "../AutorecMenu/autorecPreviews.js";
    import { storeItemData } from "../ItemMenu/itemPreviewStore.js";
    export let previewStoreData;
    export let flagData;
    export let isAutoRec;
    export let isOverride;
    flagData.explosions ? flagData.explosions : (flagData.explosions = {});
    const root = isOverride
        ? flagData.autoOverride?.explosions
        : flagData.explosions;
    //let explosions = flagData.explosions;

    let isMasked = root.isMasked || false;
    $: isMasked = root.isMasked = isMasked;
    $: maskLabel = isMasked ? game.i18n.localize("autoanimations.menus.enabled") : game.i18n.localize("autoanimations.menus.disabled");
    function switchMask() {
        isMasked = !isMasked;
    }

    let radius = root.radius || 1.5;
    $: radius = root.radius = radius;

    let delay = root.delay || 250;
    $: delay = root.delay = delay;

    let belowToken = root.below || false;
    $: belowToken = root.below = belowToken;

    $: aboveBelow = belowToken
        ? game.i18n.localize("autoanimations.menus.below")
        : game.i18n.localize("autoanimations.menus.above");
    function below() {
        belowToken = !belowToken;
    }

    let enableSection = root.enable || false;
    //$: enableSection = enableSection;
    //$: explosionEnabled.set(enableSection);
    function switchEnable() {
        enableSection = !enableSection;
        //root.enable = enableSection;
        //$storeAutorec = previewStoreData;
    }

    let menuType = root.menuType;
    //$: menuType = root.menuType = menuType;

    let animation = root.animation;
    //$: animation = root.animation = animation;

    let variant = root.variant;
    //$: variant = root.variant = variant;

    let color = root.color;
    //$: color = root.color = color;

    let isCustom = root.enableCustom || false;
    //$: isCustom = root.enableCustom = isCustom;

    let customPath = root.customPath || "";
    //$: customPath = root.customPath = customPath;

    $: {
        menuType = root.menuType = menuType;
        animation = root.animation = animation;
        variant = root.variant = variant;
        color = root.color = color;
        isCustom = root.enableCustom = isCustom;
        customPath = root.customPath = customPath;
        enableSection = root.enable = enableSection;
        if (isAutoRec) {
            $storeAutorec = previewStoreData;
        }
        if (!isAutoRec) {
            storeItemData.set(flagData);
        }
        flagData = flagData;
    }

    /*
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
    */
    let customId = "customExplosion";
</script>

<div>
    <div class="aa-header-section">
        <div class="aa-header">
            <div class="flexcol" style="grid-row:1/2; grid-column:3/4">
                <label for=""
                    >{localize("autoanimations.menus.explosion")}
                    {enableSection
                        ? localize("autoanimations.menus.enabled")
                        : localize("autoanimations.menus.disabled")}</label
                >
            </div>
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
        <div class="aa-options-border">
            <h2 in:fade>{localize("autoanimations.menus.options")}</h2>
            <div class="aa-options" in:fade>
                <!--Set the Masking Boolean-->
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 1 / 2;"
                >
                    <label for=""
                        >{localize("autoanimations.menus.masking")}</label
                    >
                    <button
                        class={isMasked ? "aa-selected" : "aa-notSelected"}
                        on:click={() => switchMask()}>{maskLabel}</button
                    >
                </div>
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 2 / 3;"
                >
                    <label for=""
                        >{localize("autoanimations.menus.radius")}</label
                    >
                    <input
                        type="number"
                        bind:value={radius}
                        placeholder="1.5"
                        step="0.01"
                    />
                </div>
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 3 / 4;"
                >
                    <label for=""
                        >{localize("autoanimations.menus.delay")}</label
                    >
                    <input type="number" bind:value={delay} placeholder="1" />
                </div>
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 4 / 5;"
                >
                    <label for="">{localize("autoanimations.menus.z-index")}</label>
                    <button class="oldCheck" on:click={() => below()}
                        >{aboveBelow}</button
                    >
                </div>
            </div>
        </div>
        <SoundSettings audioPath="e01" {flagData} />
    {/if}
</div>

<style lang="scss">
    h2 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    }
</style>
