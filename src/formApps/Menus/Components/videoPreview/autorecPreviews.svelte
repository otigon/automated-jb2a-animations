<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getPreviewFile } from "./getPreviewFile.js";
    import { currentStore } from "./previewStore.js";

    import { getContext } from "svelte";

    export let storageStore = void 0;

    $: newStore = $currentStore;

    $: videoIDX = $currentStore.stores.videoIDX;


    $: idx = $videoIDX;

    $: animationSection = idx === "item" ? newStore : $newStore[idx];

    $: animation = $animationSection;

    $: previewType = idx === "item" ? "Item" : "Autorec";

    const { application } = getContext("external");
    $: enableSource = animation.source.enable;
    $: sCustom = animation.source.video.enableCustom;
    $: sCustomPath = animation.source.video.customPath;
    $: sDbSection = animation.source.video.dbSection;
    $: sMenuType = animation.source.video.menuType;
    $: sAnim = animation.source.video.animation;
    $: sVariant = animation.source.video.variant;
    $: sColor = animation.source.video.color;
    $: sCompiledPath = sCustom && sCustomPath
                    ? sCustomPath
                    : sColor === "random"
                    ? `autoanimations.${sDbSection}.${sMenuType}.${sAnim}.${sVariant}`
                    : `autoanimations.${sDbSection}.${sMenuType}.${sAnim}.${sVariant}.${sColor}`
    $: sFilePath = sCustom && sCustomPath && sCustomPath.split(".").length < 3
                    ? sCustomPath
                    : getPreviewFile(sCompiledPath)

    $: name = animation.label;
    $: custom = animation.primary.video.enableCustom;
    $: customPath = animation.primary.video.customPath;
    $: dbSection = animation.primary.video.dbSection;
    $: menuType = animation.primary.video.menuType;
    $: anim = animation.primary.video.animation;
    $: variant = animation.primary.video.variant;
    $: color = animation.primary.video.color;
    $: compiledPath = custom && customPath
                    ? customPath
                    : color === "random"
                    ? `autoanimations.${dbSection}.${menuType}.${anim}.${variant}`
                    : `autoanimations.${dbSection}.${menuType}.${anim}.${variant}.${color}`
    $: filePath = custom && customPath && customPath.split(".").length < 3
                    ? customPath
                    : getPreviewFile(compiledPath)

    $: enableSecondary = animation.secondary?.enable ?? false;
    $: eCustom = animation.secondary?.video?.enableCustom;
    $: eCustomPath = animation.secondary?.video?.customPath;
    $: eDbSection = animation.secondary?.video?.dbSection;
    $: eMenuType = animation.secondary?.video?.menuType;
    $: eAnim = animation.secondary?.video?.animation;
    $: eVariant = animation.secondary?.video?.variant;
    $: eColor = animation.secondary?.video?.color;
    $: eCompiledPath = eCustom && eCustomPath
                    ? eCustomPath
                    : color === "random"
                    ? `autoanimations.${eDbSection}.${eMenuType}.${eAnim}.${eVariant}`
                    : `autoanimations.${eDbSection}.${eMenuType}.${eAnim}.${eVariant}.${eColor}`
    $: eFilePath = eCustom && eCustomPath && eCustomPath.split(".").length < 3
                    ? eCustomPath
                    : getPreviewFile(eCompiledPath)

    $: enableTarget = animation.target?.enable ?? false;
    $: tCustom = animation.target?.video?.enableCustom;
    $: tCustomPath = animation.target?.video?.customPath;
    $: tDbSection = animation.target?.video?.dbSection;
    $: tMenuType = animation.target?.video?.menuType;
    $: tAnim = animation.target?.video?.animation;
    $: tVariant = animation.target?.video?.variant;
    $: tColor = animation.target?.video?.color;
    $: tCompiledPath = tCustom && tCustomPath
                    ? tCustomPath
                    : sColor === "random"
                    ? `autoanimations.${tDbSection}.${tMenuType}.${tAnim}.${tVariant}`
                    : `autoanimations.${tDbSection}.${tMenuType}.${tAnim}.${tVariant}.${tColor}`
    $: tFilePath = tCustom && tCustomPath && tCustomPath.split(".").length < 3
                    ? tCustomPath
                    : getPreviewFile(tCompiledPath)

    // Application position store reference. Stores need to be a top level variable to be accessible for reactivity.
    const position = application.position;

    // A debounced callback that serializes application state after 500-millisecond delay.
    const storeAppState = foundry.utils.debounce(() => $storageStore = application.state.get(), 500);

    // Reactive statement to invoke debounce callback on Position changes.
    $: storeAppState($position);
</script>

<div class="flexcol">
    <label class="aa-section-label" for="">{name}</label>
    <label for="" style="align-self: center; font-size: 14px"><i>{previewType} {localize("autoanimations.menus.preview")}</i></label>
</div>
<div class="flexcol aa-full-preview">
    {#if enableSource}
        <div class="flexcol">
            <label for="">{localize("autoanimations.menus.source")} {localize("autoanimations.menus.animation")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={sFilePath}
                    autoplay="autoplay"
                    controls
                    controlsList="nodownload"
                    disablepictureinpicture
                    loop
                >
                    <track kind="captions" />
                </video>
            </div>
        </div>
    {/if}
    <div class="flexcol" >
        <label for="">{localize("autoanimations.menus.primary")} {localize("autoanimations.menus.animation")}</label>
        <div class="aa-video-overlay">
            <video
                class="aaVideoPreview"
                src={filePath}
                autoplay="autoplay"
                controls
                controlsList="nodownload"
                disablepictureinpicture
                loop
            >
                <track kind="captions" />
            </video>
        </div>
    </div>
    {#if enableSecondary}
        <div class="flexcol">
            <label for="">{localize("autoanimations.variants.secondary")} {localize("autoanimations.menus.animation")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={eFilePath}
                    autoplay="autoplay"
                    controls
                    controlsList="nodownload"
                    disablepictureinpicture
                    loop
                >
                    <track kind="captions" />
                </video>
            </div>
        </div>
    {/if}
    {#if enableTarget}
        <div class="flexcol">
            <label for="">{localize("autoanimations.menus.target")} {localize("autoanimations.menus.animation")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={tFilePath}
                    autoplay="autoplay"
                    controls
                    controlsList="nodownload"
                    disablepictureinpicture
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
        padding: 5px;
        align-items: center;
        width: 100%;
        margin-right: 2%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
    }
    .aaVideoPreview {
        border: 3px ridge #a1a1a1;
        border-radius: 30px;
        padding: 5px;
        width: 210px;   // 210 x 210 fits all 4 video previews vertically in `1080P` monitor.
        height: 210px;
        display: block;
        margin: 0 auto;
        background: rgb(78, 78, 78);
    }
    .aa-full-preview label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: 21px;
        font-weight: normal;
        align-self: center;
    }
    .aa-section-label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: 25px;
        font-weight: bold;
        align-self: center;
    }
    .aa-video-overlay {
        border-radius: 30px;
        box-shadow: 5px 8px 6px 0 rgb(0, 0, 0, 0.5);
        margin-bottom: 6px;
    }
</style>
