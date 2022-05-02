<script>
    import {
        menuDBPathSourceFX,
        customCheckedSourceFX,
        customFilePathSourceFX,
        menuDBPathTargetFX,
        customCheckedTargetFX,
        customFilePathTargetFX,
        menuDBPath01,
        customChecked01,
        customFilePath01,
        menuDBPath02,
        customChecked02,
        customFilePath02,
        explosionEnabled,
        extraSource,
        extraTarget,
        menuAnimType,
    } from "../menuStore.js";
    import { getPreviewFile } from "./getPreviewFile.js";

    let animType;
    menuAnimType.subscribe((value) => {
        animType = value
    })
    let menuFields = ['aura', 'templatefx', 'preset']
    let shouldShow;
    $: shouldShow = menuFields.includes(animType) ? false : true;
    // Primary Preview
    let primaryDbPath;
    menuDBPath01.subscribe((value) => {
        primaryDbPath = value;
    });
    let primaryIsCustom;
    customChecked01.subscribe((value) => {
        primaryIsCustom = value;
    });
    let primaryCustomPath;
    customFilePath01.subscribe((value) => {
        primaryCustomPath = value;
    });
    $: primaryDatabaseFile = !primaryDbPath.includes("undefined") ? getPreviewFile(primaryDbPath) : "";
    $: primaryFilePath = primaryIsCustom
        ? primaryCustomPath
        : primaryDatabaseFile;

    // Explosion Preview
    let enableExplosion;
    explosionEnabled.subscribe((value) => {
        enableExplosion = value
    })
    let explosionDbPath;
    menuDBPath02.subscribe((value) => {
        explosionDbPath = value;
    });
    let explosionIsCustom;
    customChecked02.subscribe((value) => {
        explosionIsCustom = value;
    });
    let explosionCustomPath;
    customFilePath02.subscribe((value) => {
        explosionCustomPath = value;
    });
    $: explosionDatabaseFile = enableExplosion && !explosionDbPath.includes("undefined") ? getPreviewFile(explosionDbPath) : "";
    $: explosionFilePath = explosionIsCustom
        ? explosionCustomPath
        : explosionDatabaseFile;

    // Source FX
    let enableSource;
    extraSource.subscribe((value) => {
        enableSource = value;
    })
    let sourceDbPath;
    menuDBPathSourceFX.subscribe((value) => {
        sourceDbPath = value;
    });
    let sourceIsCustom;
    customCheckedSourceFX.subscribe((value) => {
        sourceIsCustom = value;
    });
    let sourceCustomPath;
    customFilePathSourceFX.subscribe((value) => {
        sourceCustomPath = value;
    });
    $: sourceDatabaseFile = enableSource && !sourceDbPath.includes("undefined") ? getPreviewFile(sourceDbPath) : "";
    $: sourceFilePath = sourceIsCustom ? sourceCustomPath : sourceDatabaseFile;

    // Target FX
    let enableTarget;
    extraTarget.subscribe((value) => {
        enableTarget = value;
    })
    let targetDbPath;
    menuDBPathTargetFX.subscribe((value) => {
        targetDbPath = value;
    });
    let targetIsCustom;
    customCheckedTargetFX.subscribe((value) => {
        targetIsCustom = value;
    });
    let targetCustomPath;
    customFilePathTargetFX.subscribe((value) => {
        targetCustomPath = value;
    });
    $: targetDatabaseFile = enableTarget && !targetDbPath.includes("undefined") ? getPreviewFile(targetDbPath) : "";
    $: targetFilePath = targetIsCustom ? targetCustomPath : targetDatabaseFile;
</script>

<div class="flexcol aa-full-preview">
    {#if enableSource}
    <div class="flexcol" style="grid-row:1/2">
        <label for="">Source FX Animation</label>
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
    {/if}
    <div class="flexcol" style="grid-row:1/2">
        <label for="">Primary Animation</label>
        <video
            class="aaVideoPreview"
            src={primaryFilePath}
            autoplay="autoplay"
            controls
            loop
        >
            <track kind="captions" />
        </video>
    </div>
    {#if enableExplosion && shouldShow}
    <div class="flexcol" style="grid-row:1/2">
        <label for="">Explosion Animation</label>
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
    {/if}
    {#if enableTarget}
    <div class="flexcol" style="grid-row:1/2">
        <label for="">Target FX Animation</label>
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
    {/if}
</div>

<style lang="scss">
    .aa-full-preview {
        display: grid;
        grid-template-columns: fit-content(225px) auto;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        width:100%;
        margin-right: 2%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aaVideoPreview {
        border: 3px inset #a1a1a1;
        border-radius: 30px;
        padding: 5px;
        margin-bottom: 5px;
        width: 225px;
        height: 225px;
        display: block;
        margin: 0 auto;
        background: #363636;
    }
    .aa-full-preview label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        align-self: center;
    }
</style>
