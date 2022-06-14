<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";
    import Bards from "../components/presets/bardicInspiration.svelte";
    import Bless from "../components/presets/bless.svelte";
    import DualAttach from "../components/presets/dualattach.svelte";
    import Fireball from "../components/presets/fireball.svelte";
    import HuntersMark from "../components/presets/huntersmark.svelte";
    import Shield from "../components/presets/shield.svelte";
    import SneakAttack from "../components/presets/sneakAttack.svelte";
    import Teleportation from "../components/presets/teleportation.svelte";
    import Thunderwave from "../components/presets/thunderwave.svelte";
    import ExtraFX from "../components/extraFX.svelte";
    import MacroField from "../components/macro.svelte";
    import PresetSelector from "./presetSelect.svelte";

    export let flagData;
    export let menuSection;
    export let type;
    export let idx;
    export let menuListings;

    /*Data Structure
        section: {
            hidden: Boolean,
            presetType: String Router,
            name: String Section Name,
            macro: {},
            audio: {},
        }
    */

    export let isAutoRec = true;
    let presetType = menuSection.presetType;
    $: presetType = menuSection.presetType = presetType;

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

    menuSection.macro ? menuSection.macro : (menuSection.macro = {});
    let macroField = menuSection.macro;
    let enableMacro = macroField.enable || false;
    $: enableMacro = macroField.enable = enableMacro;
    function toggleMacro() {
        enableMacro = !enableMacro;
    }

    const targetFXNoShowPreset = ["bardicinspiration", "huntersmark"];
    let enableSource = menuSection.sourceToken?.enable || false;
    $: enableSource = enableSource;
    let enableTarget = menuSection.targetToken?.enable || false;
    $: enableTarget = enableTarget;

    let showExtraFX = false;
    $: showExtraFX = showExtraFX;
    function toggleExtraFX() {
        showExtraFX = !showExtraFX;
    }

    let shouldShowTargetFX = targetFXNoShowPreset.includes(presetType)
        ? true
        : false;
    $: shouldShowTargetFX = targetFXNoShowPreset.includes(presetType)
        ? true
        : false;
    $: {
        if (targetFXNoShowPreset.includes(presetType)) {
            shouldShowTargetFX = true;
        } else {
            shouldShowTargetFX = false;
            enableTarget = false;
        }
    }

    function duplicateSection() {
        let currentLength = Object.keys(flagData[type]).length;
        const newSection = {
            id: randomID(),
            hidden: true,
            name: `${menuSection.name} + (COPY)`,
        };
        mergeObject(newSection, menuSection, { overwrite: false });
        (flagData[type][currentLength] = newSection), (flagData = flagData);
        menuListings[type] = Object.values(flagData[type]);
    }
</script>

<div class="aaMenu-section">
    <div class="form-group">
        <div style="max-width: 1.5rem;margin-left: .75rem;">
            <input
                type="checkbox"
                id={customId}
                hidden
                bind:checked={isHidden}
            />
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
            placeholder={localize("autoanimations.menus.itemName")}
        />
        <div
            class="aa-deleteSection"
            style="max-width: 1.5rem;margin-left: .75rem;"
        >
            <i
                class="far fa-trash-alt fa-lg"
                on:click={() => removeSection()}
            />
        </div>
    </div>
    {#if !isHidden}
        <div class="aa-autorec-options flexcol" transition:fade>
            <div style="grid-row:1/2; grid-column:1/2">
                <label
                    for=""
                    title="Duplicate"
                    on:click={() => duplicateSection()}
                    >{localize("autoanimations.menus.duplicate")}
                    <i class="far fa-clone fa-lg aa-zoom" /></label
                >
            </div>
            <div style="grid-row:1/2; grid-column:2/3">
                <label for="" class="aa-disabled"
                    >{localize("autoanimations.menus.3dcanvas")}
                    <i class="fas fa-cube fa-lg" /></label
                >
            </div>
            <div style="grid-row:1/2; grid-column:3/4">
                <label for="" title="Extra FX" on:click={() => toggleExtraFX()}
                    >{localize("autoanimations.menus.extra")} FX
                    <i class="fas fa-user-plus fa-lg aa-zoom" /></label
                >
            </div>
            <div style="grid-row:1/2; grid-column:4/5">
                <label for="" class="aa-disabled"
                    >{localize("autoanimations.menus.sound")}
                    {localize("autoanimations.menus.only")}
                    <i class="fas fa-music fa-lg" /></label
                >
            </div>
            <div style="grid-row:1/2; grid-column:5/6">
                <label for="" title="Add Macro" on:click={() => toggleMacro()}
                    >{localize("autoanimations.menus.add")}
                    {localize("autoanimations.menus.macro")}
                    <i class="far fa-keyboard fa-lg aa-zoom" /></label
                >
            </div>
        </div>
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
                    <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
                        <label for="" style="align-self:center" transition:fade
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
                    <div class="flexcol" style="grid-row:1/2; grid-column:4/5">
                        <label for="" style="align-self:center" transition:fade
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
                />
            </div>
            {#if shouldShowTargetFX}
                <div class="aaMenu-section">
                    <ExtraFX
                        flagPath="targetExtraFX"
                        bind:enableSection={enableTarget}
                        flagData={menuSection}
                    />
                </div>
            {/if}
        {/if}
        {#if !showExtraFX}
            {#if enableMacro}
                <div class="aaMenu-subSection" transition:fade>
                    <MacroField
                        animationDisabled={false}
                        flagData={menuSection}
                    />
                </div>
            {/if}
            <PresetSelector bind:presetType {menuSection} />
            {#if presetType === "bardicinspiration"}
                <div transition:fade>
                    <Bards {isAutoRec} flagData={menuSection} />
                </div>
            {/if}
            {#if presetType === "bless"}
                <div transition:fade>
                    <Bless {isAutoRec} flagData={menuSection} />
                </div>
            {/if}
            {#if presetType === "dualattach"}
                <div transition:fade>
                    <DualAttach
                        {isAutoRec}
                        {presetType}
                        flagData={menuSection}
                    />
                </div>
            {/if}
            {#if presetType === "fireball"}
                <div transition:fade>
                    <Fireball {isAutoRec} {presetType} flagData={menuSection} />
                </div>
            {/if}
            {#if presetType === "huntersmark"}
                <div transition:fade>
                    <HuntersMark {isAutoRec} flagData={menuSection} />
                </div>
            {/if}
            {#if presetType === "shieldspell"}
                <div transition:fade>
                    <Shield {isAutoRec} flagData={menuSection} />
                </div>
            {/if}
            {#if presetType === "sneakattack"}
                <div transition:fade>
                    <SneakAttack {isAutoRec} flagData={menuSection} />
                </div>
            {/if}
            {#if presetType === "teleportation"}
                <div transition:fade>
                    <Teleportation
                        {presetType}
                        {isAutoRec}
                        flagData={menuSection}
                    />
                </div>
            {/if}
            {#if presetType === "thunderwave"}
                <div transition:fade>
                    <Thunderwave {isAutoRec} flagData={menuSection} />
                </div>
            {/if}
        {/if}
    {/if}
</div>

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
    .aaMenu-section {
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        margin: 2px 0 2px 0;
    }
    .aaMenu-subSection {
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        margin: 1.5% 3% 1.5% 3%;
    }
    .aa-autorec-options label {
        font-size: small;
    }
    .aa-disabled {
        color: rgba(109, 109, 109, 0.4);
    }
</style>
