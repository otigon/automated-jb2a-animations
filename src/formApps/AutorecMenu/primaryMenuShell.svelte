<svelte:options accessors={true} />

<script>
    import { fade } from "svelte/transition";

    import { TJSIconFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import ChooseAnimation from "../components/chooseAnimation.svelte";
    import Options from "../components/options.svelte";
    import SoundSettings from "../components/soundSettings.svelte";
    import AddExplosion from "../components/explosions.svelte";
    import Canvas3D from "../components/3dMenuShell.svelte";
    import ExtraFX from "../components/extraFX.svelte";
    import MacroField from "../components/macro.svelte";
    import RangeSwitch from "../components/meleeRange.svelte";
    import HeaderButtons from "./autorecComponents/headerButtons.svelte";
    import ExtraFXHeader from "./autorecComponents/extraEffectsHeader.svelte";
    import { storeAutorec, databaseType, index } from "./autorecPreviews.js";
    import FullAutoPreview from "./fullAutoPreview.js";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../database/jb2a-menu-options.js";

    export let flagData;
    export let type;
    export let idx;
    export let menuSection;
    export let menuListings;

    menuSection.options ? menuSection.options : (menuSection.options = {});
    menuSection.audio ? menuSection.audio : (menuSection.audio = {});
    const options = menuSection.options;
    menuSection.primary ? menuSection.primary : (menuSection.primary = {});
    const primaryData = menuSection.primary;

    export let menuType = primaryData.menuType;
    export let animation = primaryData.animation;

    let variant = primaryData.variant;
    let color = primaryData.color;
    let isCustom = primaryData.enableCustom || false;
    let customPath = primaryData.customPath;

    $: {
        menuType = primaryData.menuType = menuType;
        animation = primaryData.animation = animation;
        variant = primaryData.variant = variant;
        color = primaryData.color = color;
        isCustom = primaryData.enableCustom = isCustom;
        customPath = primaryData.customPath = customPath;
        $storeAutorec = flagData;
    }
    let menuSelection = type === "aura" ? "static" : type;

    async function onClick() {
        if (
            Object.values(ui.windows).find(
                (w) => w.id === `Autorec-Video-Preview`
            )
        ) {
            databaseType.set(type);
            index.set(idx);
        } else {
            databaseType.set(type);
            index.set(idx);
            new FullAutoPreview({ idx, name: sectionName }).render(true);
        }
    }

    if (!menuType) {
        menuType = Object.keys(aaTypeMenu[menuSelection])[0];
        animation = Object.keys(aaNameMenu[menuSelection][menuType])[0];
        variant = Object.keys(
            aaVariantMenu[menuSelection][menuType][animation]
        )[0];
        color = Object.keys(
            aaColorMenu[menuSelection][menuType][animation][variant]
        )[0];
    }
    let isHidden = menuSection.hidden || false;
    $: isHidden = menuSection.hidden = isHidden;
    let customId = `${type}` + `${idx}`;
    let sectionName = menuSection.name || "";
    $: sectionName = menuSection.name = sectionName;
    function removeSection() {
        delete flagData[type][idx];

        for (let i = 0; i < Object.entries(flagData[type]).length; i++) {
            let compacted = {};
            Object.values(flagData[type]).forEach(
                (val, idx) => (compacted[idx] = val)
            );
            flagData[type] = compacted;
        }
        flagData = flagData;
        menuListings = menuListings;
    }
    const showExplosions = ["melee", "range", "static"];

    let show3d;
    let showExtraFX ;
    let soundOnly;
    let enableMacro;

    let enableSource = menuSection.sourceToken?.enable || false;
    $: enableSource = enableSource;

    let enableTarget = menuSection.targetToken?.enable || false;
    $: enableTarget = enableTarget;

    menuSection.macro ? menuSection.macro : (menuSection.macro = {});
    let macroField = menuSection.macro;
    playWhen = macroField.playWhen;
    $: playWhen = playWhen;

    let isOnSource = type === "static" ? false : true;
    let staticType =
        type === "static" ? options.staticType || "source" : undefined;
    $: staticType = staticType;
    let isDisabled =
        (type === "static" && staticType === "source") || type === "templatefx" ? true : false;

    /**
     * @type {object} Defines folder data for TJSIconFolder.
     */
    const folder = {
        iconOpen: "fas fa-minus aa-zoom",
        iconClosed: "fas fa-plus aa-zoom",
        styles: {
            "--tjs-summary-width": "97%",
            "--tjs-summary-margin": "0 0 0 1%",
        },
    };
</script>

<TJSIconFolder {folder}>
    <input
        slot="label"
        type="text"
        class="aa-nameField"
        bind:value={sectionName}
        placeholder={localize("autoanimations.menus.itemName")}
    />

    <div
        slot="summary-end"
        class="aa-deleteSection"
        style="max-width: 22px;margin-left: 10px;"
    >
        <i
            title="Delete Section"
            class="far fa-trash-alt aa-expand aa-zoom"
            on:click={() => removeSection()}
        />
    </div>
    <HeaderButtons
        {type}
        {menuSection}
        {flagData}
        {playWhen}
        bind:show3d
        bind:showExtraFX
        bind:soundOnly
        bind:enableMacro
        bind:menuListings
    />
    {#if enableMacro}
        <div class="aaMenu-section" in:fade>
            <MacroField
                bind:playWhen
                isAutorec={true}
                animationDisabled={false}
                flagData={menuSection}
            />
        </div>
    {/if}
    {#if playWhen !== "2"}
        {#if soundOnly}
            <SoundSettings audioPath="a01" flagData={menuSection} />
        {/if}
        {#if !soundOnly}
            {#if show3d}
                <Canvas3D flagData={menuSection} />
            {/if}
            {#if showExtraFX}
                <ExtraFXHeader {enableSource} {enableTarget} {isDisabled}/>
                <div class="aaMenu-section">
                    <ExtraFX
                        flagPath="sourceExtraFX" 
                        bind:enableSection={enableSource}
                        flagData={menuSection}
                        previewStoreData={flagData}
                        {staticType}
                        isAutoRec={true}
                    />
                </div>
                {#if !isDisabled}
                    <div class="aaMenu-section">
                        <ExtraFX
                            flagPath="targetExtraFX"
                            bind:enableSection={enableTarget}
                            flagData={menuSection}
                            previewStoreData={flagData}
                            {staticType}
                            isAutoRec={true}
                        />
                    </div>
                {/if}
            {/if}
            {#if !show3d && !showExtraFX}
                <div class="aa-section-border">
                    <div class="aa-header-section" in:fade>
                        <div class="aa-header">
                            <div
                                class="flexcol"
                                style="grid-row:1/2; grid-column:3/4"
                            >
                                <label for=""
                                    >{localize("autoanimations.menus.primary")}
                                    {localize(
                                        "autoanimations.menus.animation"
                                    )}</label
                                >
                            </div>
                            <div
                                class="flexcol"
                                style="grid-row:1/2; grid-column:1/2"
                                in:fade
                            >
                                <i
                                    class="fas fa-film aa-video-preview aa-zoom"
                                    on:click={() => onClick()}
                                    title="Video Preview"
                                />
                            </div>
                        </div>
                    </div>
                    <ChooseAnimation
                        bind:menuType
                        bind:animation
                        bind:variant
                        bind:color
                        bind:isCustom
                        bind:customPath
                        bind:staticType
                        flagPath="PrimaryAnimation"
                        animTypeSwitched={false}
                        disablePlayOn={isOnSource}
                        animType={type}
                        flagData={menuSection}
                        customId={`${type}-${idx}`}
                    />
                    <Options
                        animType={type}
                        {menuType}
                        flagData={menuSection}
                    />
                    <SoundSettings audioPath="a01" flagData={menuSection} />
                </div>
                {#if type === "melee"}
                    <div class="aa-section-border">
                        <RangeSwitch
                            primaryAnimation={animation}
                            primaryMenuType={menuType}
                            flagData={menuSection}
                            previewStoreData={flagData}
                            isAutoRec={true}
                            customId={`switch-${idx}`}
                        />
                    </div>
                {/if}
                <div class="aa-section-border">
                    {#if showExplosions.includes(type)}
                        <AddExplosion
                            flagData={menuSection}
                            previewStoreData={flagData}
                            isAutoRec={true}
                        />
                    {/if}
                </div>
            {/if}
        {/if}
    {/if}
</TJSIconFolder>

<style lang="scss">
    .aa-nameField {
        background-color: rgba(210, 210, 210, 0.75);
        border: 1.5px outset rgba(0, 0, 0, 0.5);
        border-radius: 13px;
        text-align: center;
        font-weight: bold;
        font-size: large;
        color: black;
        box-shadow: 5px;
    }
    .aa-nameField:placeholder-shown {
        opacity: 0.4;
        color: black;
    }
    .aa-deleteSection {
        color: rgba(74, 74, 74, 0.824);
    }
    .aa-deleteSection:hover {
        text-shadow: 0 0 5px rgba(255, 0, 0, 0.687);
    }
    .aa-zoom:hover {
        transform: scale(1.2);
    }
    .aa-section-border {
        margin-right: 3%;
        margin-left: 3%;
        border: 1px solid rgba(109, 109, 109, 0.6);
        border-radius: 5px;
        background: rgb(200 200 200);
        margin-bottom: 5px;
    }
</style>
