<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { TJSSvgFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import SoundSettings from "./soundSettings.svelte";
    import ChooseAnimation from "./chooseAnimation.svelte";
    import { storeAutorec } from "../AutorecMenu/autorecPreviews.js";
    import { storeItemData } from "../ItemMenu/itemPreviewStore.js";
    import OptionsDialog from "../components/optionsInfoDialog.js";

    export let flagData;
    export let flagPath;
    export let previewStoreData;
    export let isAutoRec;

    let root;
    let audioPath;
    let sectionTitle;
    switch (flagPath) {
        case "sourceExtraFX":
            flagData.sourceToken
                ? flagData.sourceToken
                : (flagData.sourceToken = {});
            root = flagData.sourceToken;
            audioPath = "s01";
            sectionTitle =
                game.i18n.localize("autoanimations.menus.source") +
                " " +
                game.i18n.localize("autoanimations.menus.effects");
            break;
        case "targetExtraFX":
            flagData.targetToken
                ? flagData.targetToken
                : (flagData.targetToken = {});
            root = flagData.targetToken;
            audioPath = "t01";
            sectionTitle =
                game.i18n.localize("autoanimations.menus.target") +
                " " +
                game.i18n.localize("autoanimations.menus.effects");
            break;
    }

    root.options ? root.options : (root.options = {});
    const options = root.options;
    root.primary ? root.primary : (root.primary = {});
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

    let zIndex = options.zIndex || 1;
    $: zIndex = options.zIndex = zIndex;

    let unbindAlpha = options.unbindAlpha || false;
    $: unbindAlpha = options.unbindAlpha = unbindAlpha;

    let unbindVisbility = options.unbindVisbility || false;
    $: unbindVisbility = options.unbindVisbility = unbindVisbility;

    let persistent =
        flagPath === "sourceExtraFX" ? false : options.persistent || false;
    $: persistent = options.persistent = persistent;

    let delayAfter = options.delayAfter || 0;
    $: delayAfter = options.delayAfter = Number(delayAfter);

    let delayStart = options.delayStart || 0;
    $: delayStart = options.delayStart = Number(delayStart);

    function below() {
        belowToken = !belowToken;
    }

    $: aboveBelow = belowToken
        ? game.i18n.localize("autoanimations.menus.below")
        : game.i18n.localize("autoanimations.menus.above");
    $: bindAlpha = unbindAlpha
        ? game.i18n.localize("autoanimations.menus.unbound")
        : game.i18n.localize("autoanimations.menus.bound");
    $: bindVisibility = unbindVisbility
        ? game.i18n.localize("autoanimations.menus.unbound")
        : game.i18n.localize("autoanimations.menus.bound");
    $: isPersistent = persistent
        ? game.i18n.localize("autoanimations.menus.persistant")
        : game.i18n.localize("autoanimations.menus.not") +
          " " +
          game.i18n.localize("autoanimations.menus.persistant");
    let isMasked = options.isMasked || false;
    $: isMasked = options.isMasked = isMasked;
    $: maskLabel = isMasked
        ? game.i18n.localize("autoanimations.menus.enabled")
        : game.i18n.localize("autoanimations.menus.disabled");
    function switchMask() {
        isMasked = !isMasked;
    }

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
    //$: enableSection = root.enable = enableSection;

    let showOptions = options.showOptions ?? false;
    $: showOptions = options.showOptions = showOptions;

    let menuType = primary.menuType;
    let animation = primary.animation;
    let variant = primary.variant;
    let color = primary.color;
    let isCustom = primary.enableCustom || false;
    let customPath = primary.customPath || "";

    $: {
        menuType = primary.menuType = menuType;
        animation = primary.animation = animation;
        variant = primary.variant = variant;
        color = primary.color = color;
        isCustom = primary.enableCustom = isCustom;
        customPath = primary.customPath = customPath;
        enableSection = root.enable = enableSection;
        flagData = flagData
        if (isAutoRec) {
            $storeAutorec = previewStoreData;
        }
        if (!isAutoRec) {
            storeItemData.set(flagData);
        }
    }

    function optionsInfo() {
        new OptionsDialog().render(true);
    }

    let customId =
        flagPath === "sourceExtraFX" ? "customSource" : "customTarget";

    const folderOptions = {
       styles: {
          '--tjs-summary-font-family': '"Modesto Condensed", "Palatino Linotype", serif',
          '--tjs-summary-font-size': '1.5em',
          '--tjs-summary-chevron-size': '0.8em',
       }
    }
</script>

<TJSSvgFolder folder={folderOptions} label={sectionTitle}>
    <input  slot="summary-end"
            type="checkbox"
            style="align-self:center"
            title="Toggle Sound On/Off"
            on:click={() => (enableSection = !enableSection)}
            bind:checked={enableSection}
    />

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
    <div class="aa-options-border">
        <TJSSvgFolder folder={folderOptions} label={localize("autoanimations.menus.options")}>
        <i      slot="summary-end"
                class="fas fa-info-circle aa-info-icon aa-zoom"
                title={localize("autoanimations.menus.quickReference")}
                style="padding-left: 8px"
                on:click={() => optionsInfo()}
        />

        <div class="aa-options">
            <!--Persistent Setting-->
            <div
                class="flexcol {flagPath === 'sourceExtraFX'
                    ? 'aa-opacityButton'
                    : ''}"
                style="grid-row: 1 / 2; grid-column: 1 / 2;"
            >
                <label for=""
                    >{localize("autoanimations.menus.persistence")}</label
                >
                <button
                    disabled={flagPath === "sourceExtraFX"}
                    on:click={() => switchPersistence()}
                    >{isPersistent}</button
                >
            </div>
            <!--Set Animation Level-->
            <div
                class="flexcol"
                style="grid-row: 1 / 2; grid-column: 2 / 3;"
            >
                <label for=""
                    >{localize("autoanimations.menus.level")}</label
                >
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
                <label for=""
                    >{localize("autoanimations.menus.visibility")}</label
                >
                <button
                    disabled={flagPath === "sourceExtraFX"}
                    on:click={() => switchVisibility()}
                    >{bindVisibility}</button
                >
            </div>
            <!--Bind/Unbind Opacity (for Persistent Effects)-->
            <div
                class="flexcol {flagPath === 'sourceExtraFX'
                    ? 'aa-opacityButton'
                    : ''}"
                style="grid-row: 1 / 2; grid-column: 4 / 5;"
            >
                <label for=""
                    >{localize("autoanimations.menus.alpha")}</label
                >
                <button
                    disabled={flagPath === "sourceExtraFX"}
                    on:click={() => switchAlpha()}>{bindAlpha}</button
                >
            </div>
            <!--Set the Masking Boolean-->
            <div
                class="flexcol"
                style="grid-row: 2 / 3; grid-column: 1 / 2;"
            >
                <label for=""
                    >{localize("autoanimations.menus.masking")}</label
                >
                <button
                    class={isMasked ? "aa-selected" : "aa-notSelected"}
                    on:click={() => switchMask()}>{maskLabel}</button
                >
            </div>
            <!--Set Number of times the animation plays-->
            <div
                class="flexcol {persistent ? 'aa-opacityButton' : ''}"
                style="grid-row: 2 / 3; grid-column: 2 / 3;"
            >
                <label for="aaRepeat"
                    >{localize("autoanimations.menus.repeat")}</label
                >
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
                style="grid-row: 2 / 3; grid-column: 3 / 4;"
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
            <div
                class="flexcol"
                style="grid-row: 2 / 3; grid-column: 4 / 5;"
            >
                <label for=""
                    >{localize("autoanimations.menus.scale")}</label
                >
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
                style="grid-row: 3 / 4; grid-column: 1 / 2;"
            >
                <label for=""
                    >{localize("autoanimations.menus.opacity")}</label
                >
                <div class="form-group">
                    <input
                        type="Number"
                        bind:value={opacity}
                        placeholder="1"
                        min="0"
                        max="1"
                        step="0.01"
                        style="font-weight: bold;background:rgb(191 187 182);font-size:medium;height:1.5em;max-width: 3em;font-family: Noto Sans, serif;"
                    />
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        bind:value={opacity}
                        style="border:none; background:none"
                    />
                </div>
            </div>
            <!--Set Z-Index of Animation-->
            <div>
                <div
                    class="flexcol"
                    style="grid-row: 3 /4; grid-column: 2 / 3;"
                >
                    <label for=""
                        >{localize("autoanimations.menus.z-index")}</label
                    >
                    <input
                        type="number"
                        bind:value={zIndex}
                        placeholder="1"
                        step="1"
                    />
                </div>
            </div>
            {#if flagPath === "sourceExtraFX"}
                <div class="flexcol" style="grid-row:3/4; grid-column:3/5">
                    <label for=""
                        >{localize("autoanimations.menus.delay")}
                        {localize("autoanimations.menus.primary")}
                        {localize("autoanimations.menus.start")}</label
                    >
                    <input
                        type="Number"
                        bind:value={delayAfter}
                        placeholder="1"
                        step="0.01"
                    />
                </div>
            {:else}
                <div class="flexcol" style="grid-row:3/4; grid-column:3/5">
                    <label for=""
                        >{localize("autoanimations.menus.delay")}
                        {localize("autoanimations.menus.start")}</label
                    >
                    <input
                        type="Number"
                        bind:value={delayStart}
                        placeholder="1"
                        step="0.01"
                    />
                </div>
            {/if}
        </div>
        </TJSSvgFolder>
    </div>
    <SoundSettings {audioPath} {flagData} />
</TJSSvgFolder>

<style lang="scss">
    .oldCheck {
        align-self: bottom;
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
    //.aa-header-section {
    //    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    //    margin-bottom: 10px;
    //}
    //.aa-header label {
    //    align-self: center;
    //    font: bold x-large "Modesto Condensed", "Palatino Linotype", serif;
    //    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    //    font-size: x-large;
    //    font-weight: bold;
    //    text-align: center;
    //    margin-right: 5%;
    //    margin-left: 5%;
    //    color: black;
    //}
</style>
