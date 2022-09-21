<svelte:options accessors={true} />

<script>
    import { fade } from "svelte/transition";

    import { TJSIconFolder } from "@typhonjs-fvtt/svelte-standard/component";

    import ChooseAnimation from "../components/chooseAnimation.svelte";
    import Options from "../components/options.svelte";
    import SoundSettings from "../components/soundSettings.svelte";
    import ExtraFX from "../components/extraFX.svelte";
    import MacroField from "../components/macro.svelte";
    import AddExplosion from "../components/explosions.svelte";
    import Bless from "../components/presets/bless.svelte";
    import Shield from "../components/presets/shield.svelte";
    import HeaderButtons from "./autorecComponents/headerButtons.svelte";
    import ExtraFXHeader from "./autorecComponents/extraEffectsHeader.svelte";

    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../database/jb2a-menu-options.js";
    import FullAutoPreview from "./fullAutoPreview.js";
    import { storeAutorec, databaseType, index } from "./autorecPreviews.js";

    const wait = (delay) =>
        new Promise((resolve) => setTimeout(resolve, delay));

    export let flagData;
    export let type;
    export let idx;
    export let menuSection;
    export let menuListings;

    let animType = menuSection.animType || "static";
    $: {
        animType = menuSection.animType = animType;
        if (animType === "preset") {
            Object.values(ui.windows)
                .filter((app) => app.id === "Autorec-Video-Preview")
                .forEach((app) => app.close());
        }
    }

    let presetType = menuSection.presetType;
    $: presetType = menuSection.presetType = presetType;

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
    let isEnabled = menuSection.sourceToken?.enable;
    let enableSource = menuSection.sourceToken?.enable || false;
    //$: enableSource = isEnabled = enableSource;

    $: {
        menuType = primaryData.menuType = menuType;
        animation = primaryData.animation = animation;
        variant = primaryData.variant = variant;
        color = primaryData.color = color;
        isCustom = primaryData.enableCustom = isCustom;
        customPath = primaryData.customPath = customPath;
        enableSource = isEnabled = enableSource;
        $storeAutorec = flagData;
    }

    if (!menuType) {
        menuType = Object.keys(aaTypeMenu.static)[0];
        animation = Object.keys(aaNameMenu.static[menuType])[0];
        variant = Object.keys(aaVariantMenu.static[menuType][animation])[0];
        color = Object.keys(
            aaColorMenu.static[menuType][animation][variant]
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

    let animTypeSwitched = false;
    async function typeSwitch() {
        animTypeSwitched = true;
        await wait(150);
        animTypeSwitched = false;
    }

    let enableTarget = false;

    menuSection.macro ? menuSection.macro : (menuSection.macro = {});
    let enableMacro;
    let showExtraFX ;
    let soundOnly;

    let macroField = menuSection.macro;
    playWhen = macroField.playWhen;
    $: playWhen = playWhen;

    //let isOnSource = type === "static" ? false : true;
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

    async function onClick() {
        if (
            Object.values(ui.windows).find(
                (w) => w.id === `Autorec-Video-Preview`
            )
        ) {
            databaseType.set("aefx");
            index.set(idx);
        } else {
            databaseType.set("aefx");
            index.set(idx);
            new FullAutoPreview({ idx, name: sectionName }).render(true);
        }
    }

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
        bind:showExtraFX
        bind:enableMacro
        bind:menuListings
        bind:soundOnly
    />
    {#if enableMacro}
        <div class="aaMenu-section" transition:fade>
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
            {#if showExtraFX}
                <ExtraFXHeader {enableSource} {enableTarget} isDisabled={true}/>
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
            {/if}
            {#if !showExtraFX}
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
                        {#if animType !== "preset"}
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
                        {/if}
                    </div>
                </div>
                <div class="aa-pickAnim" transition:fade>
                    <div
                        class="flexcol"
                        style="grid-row: 1 / 2;grid-column: 2 / 3;"
                    >
                        <label for="1"
                            >{localize("autoanimations.menus.animation")}
                            {localize("autoanimations.menus.type")}</label
                        >
                        <select
                            bind:value={animType}
                            on:change={() => typeSwitch()}
                            id="1"
                            style="text-align: center;justify-self: center;background-color: rgba(21, 154, 169, 0.4);"
                        >
                            <option value="static"
                                >{localize(
                                    "autoanimations.animTypes.onToken"
                                )}</option
                            >
                            <option value="aura"
                                >{localize(
                                    "autoanimations.animTypes.typeAuras"
                                )}</option
                            >
                            <option value="preset"
                                >{localize(
                                    "autoanimations.animTypes.presets"
                                )}</option
                            >
                        </select>
                    </div>
                    {#if animType === "preset"}
                        <div
                            class="flexcol"
                            style="grid-row: 2 / 3;grid-column: 2 / 3;"
                            transition:fade
                        >
                            <label for="1"
                                >{localize("autoanimations.menus.preset")}
                                {localize("autoanimations.menus.type")}</label
                            >
                            <select
                                bind:value={presetType}
                                id="1"
                                style="text-align: center;justify-self: center; background-color: rgba(21, 154, 169, 0.4);"
                            >
                                <option value="bless"
                                    >{localize(
                                        "autoanimations.presetTypes.bless"
                                    )}</option
                                >
                                <option value="shieldspell"
                                    >{localize(
                                        "autoanimations.presetTypes.shieldspell"
                                    )}</option
                                >
                            </select>
                        </div>
                    {/if}
                </div>
                {#if animType !== "preset"}
                    <ChooseAnimation
                        bind:menuType
                        bind:animation
                        bind:variant
                        bind:color
                        bind:isCustom
                        bind:customPath
                        flagPath="PrimaryAnimation"
                        animTypeSwitched={false}
                        disablePlayOn={true}
                        animType="static"
                        flagData={menuSection}
                        customId={`${type}-${idx}`}
                    />
                    <Options {animType} {menuType} flagData={menuSection} />
                    <SoundSettings audioPath="a01" flagData={menuSection} />
                    {#if showExplosions.includes(type)}
                        <AddExplosion flagData={menuSection} />
                    {/if}
                {:else}
                    {#if presetType === "bless"}
                        <div transition:fade>
                            <Bless isAutoRec={true} flagData={menuSection} />
                        </div>
                    {/if}
                    {#if presetType === "shieldspell"}
                        <div transition:fade>
                            <Shield isAutoRec={true} flagData={menuSection} />
                        </div>
                    {/if}
                {/if}
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
    .aa-pickAnim {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 4%;
        margin-left: 1%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        color: black;
    }
    .aa-pickAnim select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 10px;
    }
    .aa-pickAnim label {
        align-self: center;
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
</style>
