<svelte:options accessors={true} />

<script>
    import { fade } from "svelte/transition";

    import { TJSIconFolder } from '@typhonjs-fvtt/svelte-standard/component';

    import ChooseAnimation from "../components/chooseAnimation.svelte";
    import Options from "../components/options.svelte";
    import SoundSettings from "../components/soundSettings.svelte";
    import AddExplosion from "../components/explosions.svelte";
    import Canvas3D from "../components/3dMenuShell.svelte";
    import ExtraFX from "../components/extraFX.svelte";
    import MacroField from "../components/macro.svelte";
    import RangeSwitch from "../components/meleeRange.svelte";
    import { storeAutorec, databaseType, index } from "./autorecPreviews.js";
    import FullAutoPreview from "./fullAutoPreview.js";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../animation-functions/databases/jb2a-menu-options.js";

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
    function duplicateSection() {
        let currentLength = Object.keys(flagData[type]).length;
        flagData[type][currentLength] = {};
        Object.assign(flagData[type][currentLength], menuSection);
        let newSection = flagData[type][currentLength];
        newSection.id = randomID();
        newSection.name = `${newSection.name}` + ` - (COPY)`;
        newSection.hidden = true;
        flagData = flagData;
        menuListings[type] = Object.values(flagData[type]);
    }

    let show3d = false;
    $: show3d = show3d;
    function toggle3D() {
        show3d = !show3d;
        showExtraFX = show3d ? false : showExtraFX;
    }
    let showExtraFX = false;
    $: showExtraFX = showExtraFX;
    function toggleExtraFX() {
        showExtraFX = !showExtraFX;
        show3d = showExtraFX ? false : show3d;
    }
    let soundOnly = menuSection.soundOnly || false;
    $: soundOnly = menuSection.soundOnly = soundOnly;
    function toggleSoundOnly() {
        soundOnly = !soundOnly;
    }

    let enableSource = menuSection.sourceToken?.enable || false;
    $: enableSource = enableSource;

    let enableTarget = menuSection.targetToken?.enable || false;
    $: enableTarget = enableTarget;

    menuSection.macro ? menuSection.macro : (menuSection.macro = {});
    let macroField = menuSection.macro;
    let enableMacro = macroField.enable || false;
    $: enableMacro = macroField.enable = enableMacro;
    function toggleMacro() {
        enableMacro = !enableMacro;
    }

    playWhen = macroField.playWhen;
    $: playWhen = playWhen;

    let isOnSource = type === "static" ? false : true;
    let staticType =
        type === "static" ? options.staticType || "source" : undefined;
    $: staticType = staticType;
    let shouldShowTargetFX =
        type === "static" && staticType === "source" ? false : true;
    $: {
        if (type === "static" && staticType === "source") {
            shouldShowTargetFX = false;
            enableTarget = false;
        } else {
            shouldShowTargetFX = true;
        }
    }

    /**
     * @type {object} Defines folder data for TJSIconFolder.
     */
    const folder = {
       iconOpen: 'fas fa-minus aa-red aa-zoom',
       iconClosed: 'fas fa-plus aa-green aa-zoom',
       styles: { '--tjs-summary-width': '97%', '--tjs-summary-margin': '0 0 0 1%'}
    }
</script>

<TJSIconFolder {folder}>
    <input slot="label"
           type="text"
           class="aa-nameField"
           bind:value={sectionName}
           placeholder={localize("autoanimations.menus.itemName")}
    />

    <div slot="summary-end" class="aa-deleteSection" style="max-width: 22px;margin-left: 10px;">
        <i
                title="Delete Section"
                class="far fa-trash-alt aa-expand aa-zoom"
                on:click={() => removeSection()}
        />
    </div>

    <div class="aa-autorec-options" in:fade>
        <div style="grid-row:1/2; grid-column:1/2">
            <label for="" title="Duplicate" on:click={() => duplicateSection()}
                >{localize("autoanimations.menus.duplicate")}
                <i class="far fa-clone fa-lg aa-zoom" /></label
            >
        </div>
        {#if type !== "templatefx" && type !== "aura"}
            <div
                style="grid-row:1/2; grid-column:2/3"
                class={enableMacro && playWhen === "2" ? "isDisabled" : ""}
            >
                <label for="" title="3D Canvas" on:click={() => toggle3D()}
                    >{localize("autoanimations.menus.3dcanvas")}
                    <i
                        class="fas fa-cube fa-lg aa-zoom {show3d
                            ? 'aa-green'
                            : ''}"
                    /></label
                >
            </div>
        {:else}
            <div
                style="grid-row:1/2; grid-column:2/3"
                class={enableMacro && playWhen === "2" ? "isDisabled" : ""}
            >
                <label for=""
                    >{localize("autoanimations.menus.3dcanvas")}
                    <i class="fas fa-cube aa-disabled" /></label
                >
            </div>
        {/if}
        <div
            style="grid-row:1/2; grid-column:3/4"
            class={enableMacro && playWhen === "2" ? "isDisabled" : ""}
        >
            <label for="" title="Extra FX" on:click={() => toggleExtraFX()}
                >{localize("autoanimations.menus.extra")} FX
                <i
                    class="fas fa-user-plus fa-lg aa-zoom {showExtraFX
                        ? 'aa-green'
                        : ''}"
            /></label
            >
        </div>
        <div style="grid-row:1/2; grid-column:4/5">
            <label for="" title="Sound Only"
            ><i
                    on:click={() => toggleSoundOnly()}
                    class="fas fa-music aa-zoom {soundOnly ? 'aa-green' : ''}"
            /></label>
        </div>
        <div style="grid-row:1/2; grid-column:5/6">
            <label for="" title="Add Macro"
            ><i
                    on:click={() => toggleMacro()}
                    class="far fa-keyboard aa-zoom"
            /></label>
            <label for="" title="Sound Only" on:click={() => toggleSoundOnly()}
                >{localize("autoanimations.menus.sound")}
                {localize("autoanimations.menus.only")}
                <i
                    class="fas fa-music fa-lg aa-zoom {soundOnly
                        ? 'aa-green'
                        : ''}"
                /></label
            >
        </div>
        <div style="grid-row:1/2; grid-column:5/6">
            <label for="" title="Add Macro" on:click={() => toggleMacro()}
                >{localize("autoanimations.menus.add")}
                {localize("autoanimations.menus.macro")}
                <i
                    class="far fa-keyboard fa-lg aa-zoom {enableMacro
                        ? 'aa-green'
                        : ''}"
                /></label
            >
        </div>
    </div>
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
                <div class="aa-5wide">
                    <div
                            class="flexcol aa-button-labels"
                            style="grid-row: 1 / 2; grid-column: 1 / 2"
                    >
                        <label
                                for=""
                                class={enableSource ? "selected" : "notSelected"}
                                style="border: 1px outset black; border-radius: 10px 20px"
                        >{localize("autoanimations.menus.source")}</label
                        >
                    </div>
                    {#if enableSource}
                        <div
                                class="flexcol"
                                style="grid-row:1/2; grid-column:2/3"
                        >
                            <label for="" style="align-self:center" in:fade
                                ><i class="fas fa-arrow-right fa-2xl" /></label
                            >
                        </div>
                    {/if}
                    <div
                            class="flexcol aa-button-labels"
                            style="grid-row: 1 / 2; grid-column: 3 / 4"
                    >
                        <label
                                for=""
                                class="selected"
                                style="border: 1px outset black"
                        >{localize("autoanimations.menus.primary")}</label
                        >
                    </div>
                    {#if enableTarget}
                        <div
                                class="flexcol"
                                style="grid-row:1/2; grid-column:4/5"
                        >
                            <label for="" style="align-self:center" in:fade
                                ><i class="fas fa-arrow-right fa-2xl" /></label
                            >
                        </div>
                    {/if}
                    <div
                            class="flexcol aa-button-labels"
                            style="grid-row: 1 / 2; grid-column: 5 / 6"
                    >
                        <label
                                for=""
                                class={enableTarget ? "selected" : "notSelected"}
                                style="border: 1px outset black; border-radius: 20px 10px"
                        >{localize("autoanimations.menus.target")}</label
                        >
                    </div>
                </div>
                <div
                        class="flexcol aa-extraFX-hint"
                        style="grid-row:2/3; grid-column:1/6"
                >
                    <label for="" style="align-self:center"
                    >Requires use of a Primary Animation</label
                    >
                </div>

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
                {#if shouldShowTargetFX}
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
    .aa-5wide {
        display: grid;
        grid-template-columns: 28% 5% 30% 5% 28%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-extraFX-hint label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .selected {
        background-color: rgba(25, 175, 2, 0.4);
        transition: background-color 0.5s;
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.4);
        transition: background-color 0.5s;
    }
    .aa-section-border {
        margin-right: 3%;
        margin-left: 3%;
        border: 1px solid rgba(109, 109, 109, 0.6);
        border-radius: 5px;
        background: rgb(200 200 200);
        margin-bottom: 5px;
    }
    .aa-autorec-options label {
        font-size: small;
    }
    .aa-disabled {
        color: rgba(109, 109, 109, 0.4);
    }
    .isDisabled {
        pointer-events: none;
        opacity: 0.3;
    }
</style>
