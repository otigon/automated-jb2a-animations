<script>
    import { localize } from "#runtime/util/i18n";
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

    const { application } = getContext("#external");

    // Compiling Source data if present
    $: enableSource = animation.source?.enable;
    $: sCustom = animation.source?.video?.enableCustom;
    $: sCustomPath = animation.source?.video?.customPath;
    $: sDbSection = animation.source?.video?.dbSection;
    $: sMenuType = animation.source?.video?.menuType;
    $: sAnim = animation.source?.video?.animation;
    $: sVariant = animation.source?.video?.variant;
    $: sColor = animation.source?.video?.color;
    $: sCompiledPath = sCustom && sCustomPath
                    ? sCustomPath
                    : sColor === "random"
                    ? `autoanimations.${sDbSection}.${sMenuType}.${sAnim}.${sVariant}`
                    : `autoanimations.${sDbSection}.${sMenuType}.${sAnim}.${sVariant}.${sColor}`
    $: sFilePath = sCustom && sCustomPath && sCustomPath.split(".").length < 3
                    ? sCustomPath
                    : getPreviewFile(sCompiledPath)

    // Compiling Primary data if present
    $: name = animation.label;
    $: custom = animation.primary?.video?.enableCustom;
    $: customPath = animation.primary?.video?.customPath;
    $: dbSection = animation.primary?.video?.dbSection;
    $: menuType = animation.primary?.video?.menuType;
    $: anim = animation.primary?.video?.animation;
    $: variant = animation.primary?.video?.variant;
    $: color = animation.primary?.video?.color;
    $: compiledPath = custom && customPath
                    ? customPath
                    : color === "random"
                    ? `autoanimations.${dbSection}.${menuType}.${anim}.${variant}`
                    : `autoanimations.${dbSection}.${menuType}.${anim}.${variant}.${color}`
    $: filePath = custom && customPath && customPath.split(".").length < 3
                    ? customPath
                    : getPreviewFile(compiledPath)

    // Compiling Secondary data if present
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

    // Compiling Target data if present
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

    // Compiling the Preset data if present

    // Dual Attach and Thunderwave
    $: daCustom = animation.data?.video?.enableCustom;
    $: daCustomPath = animation.data?.video?.customPath;
    $: daDbSection = animation.data?.video?.dbSection;
    $: daMenuType = animation.data?.video?.menuType;
    $: daAnim = animation.data?.video?.animation;
    $: daVariant = animation.data?.video?.variant;
    $: daColor = animation.data?.video?.color;
    $: daCompiledPath = daCustom && daCustomPath
                    ? daCustomPath
                    : daColor === "random"
                    ? `autoanimations.${daDbSection}.${daMenuType}.${daAnim}.${daVariant}`
                    : `autoanimations.${daDbSection}.${daMenuType}.${daAnim}.${daVariant}.${daColor}`
    $: dafilePath = daCustom && daCustomPath && daCustomPath.split(".").length < 3
                    ? daCustomPath
                    : getPreviewFile(daCompiledPath)

    // Teleportation
    // Start animation
    $: tpsCustom = animation.data?.start?.enableCustom;
    $: tpsCustomPath = animation.data?.start?.customPath;
    $: tpsDbSection = animation.data?.start?.dbSection;
    $: tpsMenuType = animation.data?.start?.menuType;
    $: tpsAnim = animation.data?.start?.animation;
    $: tpsVariant = animation.data?.start?.variant;
    $: tpsColor = animation.data?.start?.color;
    $: tpsCompiledPath = tpsCustom && tpsCustomPath
                    ? tpsCustomPath
                    : tpsColor === "random"
                    ? `autoanimations.${tpsDbSection}.${tpsMenuType}.${tpsAnim}.${tpsVariant}`
                    : `autoanimations.${tpsDbSection}.${tpsMenuType}.${tpsAnim}.${tpsVariant}.${tpsColor}`
    $: tpsfilePath = tpsCustom && tpsCustomPath && tpsCustomPath.split(".").length < 3
                    ? tpsCustomPath
                    : getPreviewFile(tpsCompiledPath)

    // Between Animation
    $: tpbCustom = animation.data?.between?.enableCustom;
    $: tpbCustomPath = animation.data?.between?.customPath;
    $: tpbDbSection = animation.data?.between?.dbSection;
    $: tpbMenuType = animation.data?.between?.menuType;
    $: tpbAnim = animation.data?.between?.animation;
    $: tpbVariant = animation.data?.between?.variant;
    $: tpbColor = animation.data?.between?.color;
    $: tpbCompiledPath = tpbCustom && tpbCustomPath
                    ? tpbCustomPath
                    : tpbColor === "random"
                    ? `autoanimations.${tpbDbSection}.${tpbMenuType}.${tpbAnim}.${tpbVariant}`
                    : `autoanimations.${tpbDbSection}.${tpbMenuType}.${tpbAnim}.${tpbVariant}.${tpbColor}`
    $: tpbfilePath = tpbCustom && tpbCustomPath && tpbCustomPath.split(".").length < 3
                    ? tpbCustomPath
                    : getPreviewFile(tpbCompiledPath)

    // End Animation
    $: tpeCustom = animation.data?.end?.enableCustom;
    $: tpeCustomPath = animation.data?.end?.customPath;
    $: tpeDbSection = animation.data?.end?.dbSection;
    $: tpeMenuType = animation.data?.end?.menuType;
    $: tpeAnim = animation.data?.end?.animation;
    $: tpeVariant = animation.data?.end?.variant;
    $: tpeColor = animation.data?.end?.color;
    $: tpeCompiledPath = tpeCustom && tpeCustomPath
                    ? tpeCustomPath
                    : tpeColor === "random"
                    ? `autoanimations.${tpeDbSection}.${tpeMenuType}.${tpeAnim}.${tpeVariant}`
                    : `autoanimations.${tpeDbSection}.${tpeMenuType}.${tpeAnim}.${tpeVariant}.${tpeColor}`
    $: tpefilePath = tpeCustom && tpeCustomPath && tpeCustomPath.split(".").length < 3
                    ? tpeCustomPath
                    : getPreviewFile(tpeCompiledPath)

    // Projectile to Template
    //Projectile
    $: pCustom = animation.data?.projectile?.enableCustom;
    $: pCustomPath = animation.data?.projectile?.customPath;
    $: pDbSection = animation.data?.projectile?.dbSection;
    $: pMenuType = animation.data?.projectile?.menuType;
    $: pAnim = animation.data?.projectile?.animation;
    $: pVariant = animation.data?.projectile?.variant;
    $: pColor = animation.data?.projectile?.color;
    $: pCompiledPath = pCustom && pCustomPath
                    ? pCustomPath
                    : pColor === "random"
                    ? `autoanimations.${pDbSection}.${pMenuType}.${pAnim}.${pVariant}`
                    : `autoanimations.${pDbSection}.${pMenuType}.${pAnim}.${pVariant}.${pColor}`
    $: pfilePath = pCustom && pCustomPath && pCustomPath.split(".").length < 3
                    ? pCustomPath
                    : getPreviewFile(pCompiledPath)

    // Pre-Explosion
    $: e1Custom = animation.data?.preExplosion?.enableCustom;
    $: e1CustomPath = animation.data?.preExplosion?.customPath;
    $: e1DbSection = animation.data?.preExplosion?.dbSection;
    $: e1MenuType = animation.data?.preExplosion?.menuType;
    $: e1Anim = animation.data?.preExplosion?.animation;
    $: e1Variant = animation.data?.preExplosion?.variant;
    $: e1Color = animation.data?.preExplosion?.color;
    $: e1CompiledPath = e1Custom && e1CustomPath
                    ? e1CustomPath
                    : e1Color === "random"
                    ? `autoanimations.${e1DbSection}.${e1MenuType}.${e1Anim}.${e1Variant}`
                    : `autoanimations.${e1DbSection}.${e1MenuType}.${e1Anim}.${e1Variant}.${e1Color}`
    $: e1filePath = e1Custom && e1CustomPath && e1CustomPath.split(".").length < 3
                    ? e1CustomPath
                    : getPreviewFile(e1CompiledPath)

    // Explosion
    $: e2Custom = animation.data?.explosion?.enableCustom;
    $: e2CustomPath = animation.data?.explosion?.customPath;
    $: e2DbSection = animation.data?.explosion?.dbSection;
    $: e2MenuType = animation.data?.explosion?.menuType;
    $: e2Anim = animation.data?.explosion?.animation;
    $: e2Variant = animation.data?.explosion?.variant;
    $: e2Color = animation.data?.explosion?.color;
    $: e2CompiledPath = e2Custom && e2CustomPath
                    ? e2CustomPath
                    : e2Color === "random"
                    ? `autoanimations.${e2DbSection}.${e2MenuType}.${e2Anim}.${e2Variant}`
                    : `autoanimations.${e2DbSection}.${e2MenuType}.${e2Anim}.${e2Variant}.${e2Color}`
    $: e2filePath = e2Custom && e2CustomPath && e2CustomPath.split(".").length < 3
                    ? e2CustomPath
                    : getPreviewFile(e2CompiledPath)

    // Application position store reference. Stores need to be a top level variable to be accessible for reactivity.
    const position = application.position;

    // A debounced callback that serializes application state after 500-millisecond delay.
    const storeAppState = foundry.utils.debounce(() => $storageStore = application.state.current(), 500);

    // Reactive statement to invoke debounce callback on Position changes.
    $: storeAppState($position);
</script>

<div class="flexcol">
    <label class="aa-section-label" for="">{name}</label>
    <label for="" style="align-self: center; font-size: 14px"><i>{previewType} {localize("autoanimations.menus.preview")}</i></label>
</div>
{#if animation.primary}
<div class="flexcol aa-full-preview">
    {#if enableSource}
        <div class="flexcol">
            <label for="">{localize("autoanimations.menus.source")}</label>
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
        <label for="">{localize("autoanimations.menus.primary")}</label>
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
            <label for="">{localize("autoanimations.variants.secondary")}</label>
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
            <label for="">{localize("autoanimations.menus.target")}</label>
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
{/if}
{#if animation.data && animation.presetType === "dualattach" || animation.presetType === "thunderwave"}
    <div class="flexcol aa-full-preview">
        {#if animation.data.video}
            <div class="flexcol" >
                <label for="">{localize("autoanimations.menus.primary")}</label>
                <div class="aa-video-overlay">
                    <video
                        class="aaVideoPreview"
                        src={dafilePath}
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
{/if}
{#if animation.data && animation.presetType === "teleportation"}
    <div class="flexcol aa-full-preview">
        {#if animation.data?.start?.enable}
        <div class="flexcol" >
            <label for="">{localize("autoanimations.menus.start")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={tpsfilePath}
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
        {#if animation.data?.between?.enable}
        <div class="flexcol" >
            <label for="">{localize("autoanimations.menus.between")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={tpbfilePath}
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
        {#if animation.data?.end?.enable}
        <div class="flexcol" >
            <label for="">{localize("autoanimations.menus.end")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={tpefilePath}
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
{/if}
{#if animation.data && animation.presetType === "proToTemp"}
    <div class="flexcol aa-full-preview">
        <div class="flexcol" >
            <label for="">{localize("autoanimations.menus.projectile")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={pfilePath}
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
        {#if animation.data?.preExplosion?.enable}
        <div class="flexcol" >
            <label for="">{localize("autoanimations.menus.pre")} {localize("autoanimations.menus.explosion")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={e1filePath}
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
            <label for="">{localize("autoanimations.menus.explosion")}</label>
            <div class="aa-video-overlay">
                <video
                    class="aaVideoPreview"
                    src={e2filePath}
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
            <label for="">{localize("autoanimations.variants.secondary")}</label>
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
                <label for="">{localize("autoanimations.menus.target")}</label>
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
{/if}

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
