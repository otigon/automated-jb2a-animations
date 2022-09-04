<script>
    import { fade } from "svelte/transition";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getPreviewFile } from "./getPreviewFile.js";

    import { getContext } from "svelte";

    export let animation;
    //export let category;

    const { application } = getContext("external");

    $: name = $animation.label;
    $: custom = $animation.primary.video.enableCustom;
    $: customPath = $animation.primary.video.customPath;
    $: dbSection = $animation.primary.video.dbSection;
    $: menuType = $animation.primary.video.menuType;
    $: anim = $animation.primary.video.animation;
    $: variant = $animation.primary.video.variant;
    $: color = $animation.primary.video.color;
    $: compiledPath = custom && customPath 
                    ? customPath 
                    : color === "random" 
                    ? `autoanimations.${dbSection}.${menuType}.${anim}.${variant}`
                    : `autoanimations.${dbSection}.${menuType}.${anim}.${variant}.${color}`
    $: filePath = custom && customPath && customPath.split(".").length < 3
                    ? customPath 
                    : getPreviewFile(compiledPath)

    /*
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
    $: name = $storeAutorec[dbType][idx].name;

    $: if (closeNow) {
        application.close();
        closePreviewWindow.set(false);
    }
    */
</script>

<div class="flexcol">
    <label class="aa-section-label" for=""><i>{name}</i> - {localize("autoanimations.menus.preview")}</label>
</div>
<div class="flexcol aa-full-preview">
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
