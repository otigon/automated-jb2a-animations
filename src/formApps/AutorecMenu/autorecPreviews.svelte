<script>
    import { getPreviewFile } from "../ItemMenu/videoPreviews/getPreviewFile.js";
    import {
        storeAutorec,
        closePreviewWindow,
        databaseType,
        index,
    } from "./autorecPreviews.js";
    import { getContext } from "svelte";

    const { application } = getContext("external");

    //export let idx;
    export let name;

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

    $: if (closeNow) {
        console.log("Set to True");
        application.close();
        closePreviewWindow.set(false);
    }
    $: if (!closeNow) {
        console.log("Set to False");
    }

    /*
    $: storeData = $storeAutorec[idx];

    $: databaseFile = getPreviewFile($storeAutorec[idx].primaryDatabasePath);

    $: filePath = storeData.customPath || databaseFile;
    */
    $: console.log(idx);
    $: console.log(dbType);
    let currentSection = $storeAutorec[dbType][idx];
    $: currentSection = $storeAutorec[dbType][idx];

    $: menuType = currentSection.primary?.menuType;
    $: animation = currentSection.primary?.animation;
    $: variant = currentSection.primary?.variant;
    $: color = currentSection.primary?.color;


    let menuFields = ['aura', 'templatefx', 'preset']
    let shouldShow;
    $: shouldShow = menuFields.includes(dbType) ? false : true;
    $: enableExplosion = currentSection.explosions?.enable || false;
    $: explodeMenuType = currentSection.explosions?.menuType;
    $: explodeAnimation = currentSection.explosions?.animation;
    $: explodeVariant = currentSection.explosions?.variant;
    $: explodeColor = currentSection.explosions?.color;
    $: explosionDBPath = explodeColor === "random" ?`autoanimations.static.${explodeMenuType}.${explodeAnimation}.${explodeVariant}` : `autoanimations.static.${explodeMenuType}.${explodeAnimation}.${explodeVariant}.${explodeColor}`;
    $: explosionFilePath = getPreviewFile(explosionDBPath)

    $: currentPath =
        color === "random"
            ? `autoanimations.${dbType}.${menuType}.${animation}.${variant}`
            : `autoanimations.${dbType}.${menuType}.${animation}.${variant}.${color}`;
    $: filePath = getPreviewFile(currentPath);

    /*
<video class="aaVideoPreview" src={filePath} autoplay="autoplay" controls loop>
    <track kind="captions" />
</video>
*/
</script>

<div class="flexcol">
    <label class='aa-section-label' for="">Preview -- <i>{name}</i></label>
</div>
<div class="flexcol aa-full-preview">
    <div class="flexcol" style="grid-row:1/2">
        <label for="">Primary Animation</label>
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
</div>

<style lang="scss">
    .aa-full-preview {
        display: grid;
        grid-template-columns: fit-content(225px) auto;
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
    .aa-section-label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        align-self: center;
    }
</style>
