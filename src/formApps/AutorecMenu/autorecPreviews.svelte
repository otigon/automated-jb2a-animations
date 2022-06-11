<script>
    import { fade } from "svelte/transition";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { getPreviewFile } from "../ItemMenu/videoPreviews/getPreviewFile.js";
    import {
        storeAutorec,
        closePreviewWindow,
        databaseType,
        index,
    } from "./autorecPreviews.js";
    import { getContext } from "svelte";

    const { application } = getContext("external");


    let closeNow = false;
    closePreviewWindow.subscribe((value) => {
        closeNow = value;
    });

    let idx;
    index.subscribe((value) => {
        idx = value;
    });

    let dbType;
    databaseType.subscribe((value) => {
        dbType = value;
    });
    $: console.log(dbType)
    $: name = $storeAutorec[dbType][idx].name;

    $: if (closeNow) {
        console.log("Set to True");
        application.close();
        closePreviewWindow.set(false);
    }
    $: if (!closeNow) {
        console.log("Set to False");
    }

    //console.log($storeAutorec);

    $: currentSection = $storeAutorec[dbType][idx];

    // Extra Source FX Preview
    $: sourceExtraFX = currentSection.sourceToken || {};
    $: enableSource = sourceExtraFX.enable;
    $: sourceMenuType = sourceExtraFX.primary?.menuType;
    $: sourceAnimation = sourceExtraFX.primary?.animation;
    $: sourceVariant = sourceExtraFX.primary?.variant;
    $: sourceColor = sourceExtraFX.primary?.color;
    $: sourceIsCustom = sourceExtraFX.primary?.enableCustom;
    $: sourceCustomPath =
        sourceIsCustom && sourceExtraFX.primary?.customPath
            ? sourceExtraFX.primary?.customPath
            : "";
    $: sourceCustomPathIsDB = sourceCustomPath.split(".").length;
    $: sourceCurrentPath =
        sourceIsCustom && sourceCustomPath
            ? sourceCustomPath
            : sourceColor === "random"
            ? `autoanimations.static.${sourceMenuType}.${sourceAnimation}.${sourceVariant}`
            : `autoanimations.static.${sourceMenuType}.${sourceAnimation}.${sourceVariant}.${sourceColor}`;
    $: sourceFilePath =
        sourceIsCustom && sourceCustomPath && sourceCustomPathIsDB < 3
            ? sourceCustomPath
            : getPreviewFile(sourceCurrentPath);

    // Primary Preview
    $: menuType = currentSection.primary?.menuType;
    $: animation = currentSection.primary?.animation;
    $: variant = currentSection.primary?.variant;
    $: color = currentSection.primary?.color;
    $: isCustomPrimary = currentSection.primary?.enableCustom || false;
    $: customPath =
        isCustomPrimary && currentSection.primary?.customPath
            ? currentSection.primary?.customPath
            : "";
    $: customPathIsDB = customPath.split(".").length;
    $: dbSection = dbType === "aefx" ? "static" : dbType;
    $: currentPath =
        isCustomPrimary && customPath
            ? customPath
            : color === "random"
            ? `autoanimations.${dbSection}.${menuType}.${animation}.${variant}`
            : `autoanimations.${dbSection}.${menuType}.${animation}.${variant}.${color}`;
    $: filePath =
        isCustomPrimary && customPath && customPathIsDB < 3
            ? customPath
            : getPreviewFile(currentPath);

    // Switch Animation Preview
    $: switchType = currentSection.meleeSwitch?.switchType === "custom" ? true : false;

    $: switchMenuType = currentSection.meleeSwitch?.menuType;
    $: switchAnimation = currentSection.meleeSwitch?.animation;
    $: switchVariant = currentSection.meleeSwitch?.variant;
    $: switchColor = currentSection.meleeSwitch?.color;
    $: switchCurrentPath =
                isCustomPrimary && customPath
                    ? customPath
                    : switchColor === "random"
                    ? `autoanimations.range.${switchMenuType}.${switchAnimation}.${switchVariant}`
                    : `autoanimations.range.${switchMenuType}.${switchAnimation}.${switchVariant}.${switchColor}`;
    $:  switchFilePath =
                isCustomPrimary && customPath && customPathIsDB < 3
                    ? customPath
                    : getPreviewFile(switchCurrentPath);

    // Explosions Preview
    let menuFields = ["aura", "templatefx", "preset"];
    let shouldShow;
    $: shouldShow = menuFields.includes(dbType) ? false : true;
    $: enableExplosion = currentSection.explosions?.enable || false;
    $: explodeMenuType = currentSection.explosions?.menuType;
    $: explodeAnimation = currentSection.explosions?.animation;
    $: explodeVariant = currentSection.explosions?.variant;
    $: explodeColor = currentSection.explosions?.color;
    $: isCustomExplosion = currentSection.explosions?.enableCustom || false;
    $: customPathExplosion =
        isCustomExplosion && currentSection.explosions?.customPath
            ? currentSection.explosions?.customPath
            : "";
    $: customExplosionIsDB = customPathExplosion.split(".").length;
    $: explosionDBPath =
        isCustomExplosion && customPathExplosion
            ? customPathExplosion
            : explodeColor === "random"
            ? `autoanimations.static.${explodeMenuType}.${explodeAnimation}.${explodeVariant}`
            : `autoanimations.static.${explodeMenuType}.${explodeAnimation}.${explodeVariant}.${explodeColor}`;
    $: explosionFilePath =
        isCustomExplosion && customPathExplosion && customExplosionIsDB < 3
            ? customPathExplosion
            : enableExplosion && shouldShow
            ? getPreviewFile(explosionDBPath)
            : "";

    // Extra Target FX Preview
    $: targetExtraFX = currentSection.targetToken || {};
    $: enableTarget = targetExtraFX.enable;
    $: targetMenuType = targetExtraFX.primary?.menuType;
    $: targetAnimation = targetExtraFX.primary?.animation;
    $: targetVariant = targetExtraFX.primary?.variant;
    $: targetColor = targetExtraFX.primary?.color;
    $: targetIsCustom = targetExtraFX.primary?.enableCustom;
    $: targetCustomPath =
        targetIsCustom && targetExtraFX.primary?.customPath
            ? targetExtraFX.primary?.customPath
            : "";
    $: targetCustomPathIsDB = targetCustomPath.split(".").length;
    $: targetCurrentPath =
        targetIsCustom && targetCustomPath
            ? targetCustomPath
            : targetColor === "random"
            ? `autoanimations.static.${targetMenuType}.${targetAnimation}.${targetVariant}`
            : `autoanimations.static.${targetMenuType}.${targetAnimation}.${targetVariant}.${targetColor}`;
    $: targetFilePath =
        targetIsCustom && targetCustomPath && targetCustomPathIsDB < 3
            ? targetCustomPath
            : getPreviewFile(targetCurrentPath);
</script>

<div class="flexcol">
    <label class="aa-section-label" for=""><i>{name}</i> - {localize("autoanimations.menus.preview")}</label>
</div>
<div class="flexcol aa-full-preview">
    {#if enableSource}
        <div class="flexcol" style="grid-row:1/2" transition:fade>
            <label for="">{localize("autoanimations.menus.source")} FX {localize("autoanimations.menus.animation")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={sourceFilePath}
                    autoplay="autoplay"
                    controls
                    loop
                >
                    <track kind="captions" />
                </video>
            </div>
        </div>
    {/if}
    <div class="flexcol" style="grid-row:1/2" transition:fade>
        <label for="">{localize("autoanimations.menus.primary")} {localize("autoanimations.menus.animation")}</label>
        <div class="aa-video-overlay">
            <video
                class="aaVideoPreview"
                src={filePath}
                autoplay="autoplay"
                controls
                loop
            >
                <track kind="captions" />
            </video>
        </div>
    </div>
    {#if dbType === "melee" && switchType}
        <div class="flexcol" style="grid-row:1/2" transition:fade>
            <label for="">{localize("autoanimations.menus.ranged")} {localize("autoanimations.menus.switch")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={switchFilePath}
                    autoplay="autoplay"
                    controls
                    loop
                >
                    <track kind="captions" />
                </video>
            </div>
        </div>
    {/if}
    {#if enableExplosion && shouldShow}
        <div class="flexcol" style="grid-row:1/2" transition:fade>
            <label for="">{localize("autoanimations.menus.explosion")} {localize("autoanimations.menus.animation")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={explosionFilePath}
                    autoplay="autoplay"
                    controls
                    loop
                >
                    <track kind="captions" />
                </video>
            </div>
        </div>
    {/if}
    {#if enableTarget}
        <div class="flexcol" style="grid-row:1/2" transition:fade>
            <label for="">{localize("autoanimations.menus.target")} FX {localize("autoanimations.menus.animation")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={targetFilePath}
                    autoplay="autoplay"
                    controls
                    loop
                >
                    <track kind="captions" />
                </video>
            </div>
        </div>
    {/if}
</div>

<style lang="scss">
    .aa-full-preview {
        display: grid;
        grid-template-columns: fit-content(225px) auto;
        grid-template-rows: 250px;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        width: 100%;
        margin-right: 2%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aaVideoPreview {
        border: 3px ridge #a1a1a1;
        border-radius: 30px;
        padding: 5px;
        margin-bottom: 5px;
        width: 225px;
        height: 225px;
        display: block;
        margin: 0 auto;
        background: rgb(78, 78, 78);
    }
    .aa-full-preview label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: normal;
        align-self: center;
    }
    .aa-section-label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        align-self: center;
    }
    .aa-video-overlay {
        border-radius: 30px;
        box-shadow: 8px 11px 9px 0px rgb(0, 0, 0, 0.5);
    }
</style>
