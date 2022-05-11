<svelte:options accessors={true} />

<script>
    import { fade } from "svelte/transition";
    import ChooseAnimation from "../ItemMenu/components/chooseAnimation.svelte";
    import Options from "../ItemMenu/components/options.svelte";
    import SoundSettings from "../ItemMenu/components/soundSettings.svelte";
    import AddExplosion from "../ItemMenu/components/explosions.svelte";
    import Canvas3D from "../ItemMenu/components/3dMenuShell.svelte";
    import ExtraFX from "../ItemMenu/components/extraFX.svelte";
    import MacroField from "../ItemMenu/components/macro.svelte";
    import RangeSwitch from "../ItemMenu/components/meleeRange.svelte";

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

    export let menuType = options.menuType;
    $: menuType = options.menuType = menuType;
    export let animation = menuSection.animation;
    $: animation = menuSection.animation = animation;
    let variant = options.variant;
    $: variant = options.variant = variant;
    let color = menuSection.color;
    $: color = menuSection.color = color;
    let isCustom = options.enableCustom || false;
    $: isCustom = options.enableCustom = isCustom;
    let customPath = options.customPath;
    $: customPath = options.customPath = customPath;
    //console.log(menuType)
    let menuSelection = type === "aura" ? "static" : type;
    if (!menuType) {
        menuType = Object.keys(aaTypeMenu[menuSelection])[0];
        animation = Object.keys(aaNameMenu[menuSelection][menuType])[0];
        variant = Object.keys(aaVariantMenu[menuSelection][menuType][animation])[0];
        color = Object.keys(aaColorMenu[menuSelection][menuType][animation][variant])[0];
    }
    let isHidden = menuSection.hidden || false;
    $: isHidden = menuSection.hidden = isHidden;
    let customId = `${type}` + `${idx}`;
    let sectionName = menuSection.name || "";
    $: sectionName = menuSection.name = sectionName;
    function removeSection() {
        console.log();
        delete flagData[type][idx];

        for (let i = 0; i < Object.entries(flagData[type]).length; i++) {
            let compacted = {};
            Object.values(flagData[type]).forEach(
                (val, idx) => (compacted[idx] = val)
            );
            flagData[type] = compacted;
        }
        flagData = flagData;
        //menuListings[type] = Object.values(flagData[type]);
        menuListings = menuListings
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
</script>

<div class="form-group">
    <div style="max-width: 1.5rem;margin-left: .75rem;">
        <input type="checkbox" id={customId} hidden bind:checked={isHidden} />
        <label for={customId}
            ><i
                class={isHidden
                    ? "fas fa-plus fa-lg aa-green aa-zoom"
                    : "fas fa-minus fa-lg aa-red aa-zoom"}
            /></label
        >
    </div>
    <input
        type="text"
        class="aa-nameField"
        bind:value={sectionName}
        placeholder={localize("AUTOANIM.itemName")}
    />
    <div
        class="aa-deleteSection"
        style="max-width: 1.5rem;margin-left: .75rem;"
    >
        <i class="far fa-trash-alt fa-lg" on:click={() => removeSection()} />
    </div>
</div>
{#if !isHidden}
    <div class="autorec-options flexcol" transition:fade>
        <div style="grid-row:1/2; grid-column:1/2">
            <label for="" title="Duplicate"
                ><i
                    on:click={() => duplicateSection()}
                    class="far fa-clone aa-zoom"
                /></label
            >
        </div>
        {#if type !== "templatefx" && type !== "aura"}
        <div style="grid-row:1/2; grid-column:2/3">
            <label for="" title="3D Canvas"
                ><i
                    on:click={() => toggle3D()}
                    class="fas fa-cube aa-zoom"
                /></label
            >
        </div>
        {/if}
        <div style="grid-row:1/2; grid-column:3/4">
            <label for="" title="Extra FX"
                ><i
                    on:click={() => toggleExtraFX()}
                    class="fas fa-user-plus aa-zoom"
                /></label
            >
        </div>
        <div style="grid-row:1/2; grid-column:4/5">
            <label for="" title="Sound Only"
                ><i
                    on:click={() => toggleSoundOnly()}
                    class="fas fa-music aa-zoom"
                /></label
            >
        </div>
        <div style="grid-row:1/2; grid-column:5/6">
            <label for="" title="Add Macro"
                ><i
                    on:click={() => toggleMacro()}
                    class="far fa-keyboard aa-zoom"
                /></label
            >
        </div>
    </div>
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
                            <label
                                for=""
                                style="align-self:center"
                                transition:fade
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
                            <label
                                for=""
                                style="align-self:center"
                                transition:fade
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
                        {staticType}
                    />
                </div>
                {#if shouldShowTargetFX}
                    <div class="aaMenu-section">
                        <ExtraFX
                            flagPath="targetExtraFX"
                            bind:enableSection={enableTarget}
                            flagData={menuSection}
                            {staticType}
                        />
                    </div>
                {/if}
            {/if}
            {#if !show3d && !showExtraFX}
                <div class="aa-header-section" transition:fade>
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
                <Options animType={type} {menuType} flagData={menuSection} />
                <SoundSettings audioPath="a01" flagData={menuSection} />
                {#if type === "melee"}
                    <RangeSwitch primaryAnimation={animation} primaryMenuType={menuType} flagData={menuSection}/>
                {/if}
                {#if showExplosions.includes(type)}
                    <AddExplosion flagData={menuSection} />
                {/if}
            {/if}
        {/if}
    {/if}
{/if}

<style lang="scss">
    .autorec-options {
        display: grid;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-gap: 5px;
        padding: 5px;
        margin-right: 8%;
        text-align: center;
        align-items: center;
    }
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
        grid-template-columns: 30% 5% 30% 5% 30%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 8%;
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
</style>
