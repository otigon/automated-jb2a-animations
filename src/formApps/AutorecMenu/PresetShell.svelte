<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import { fade } from "svelte/transition";
    import { TJSIconFolder } from "@typhonjs-fvtt/svelte-standard/component";

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
    import HeaderButtons from "./autorecComponents/headerButtons.svelte";
    import ExtraFXHeader from "./autorecComponents/extraEffectsHeader.svelte";

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

    let enableMacro;
    let showExtraFX;

    const targetFXNoShowPreset = ["bardicinspiration", "huntersmark"];
    let enableSource = menuSection.sourceToken?.enable || false;
    $: enableSource = enableSource;
    let enableTarget = menuSection.targetToken?.enable || false;
    $: enableTarget = enableTarget;

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

    const folder = {
        iconOpen: "fas fa-minus aa-red aa-zoom",
        iconClosed: "fas fa-plus aa-green aa-zoom",
        styles: {
            "--tjs-summary-width": "97%",
            "--tjs-summary-margin": "0 0 0 1%",
        },
    };
</script>

<div class="aa-Menu-section">
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
        />
        {#if showExtraFX}
            <ExtraFXHeader {enableSource} {enableTarget} />
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
    </TJSIconFolder>
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
    .aaMenu-subSection {
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        margin: 1.5% 3% 1.5% 3%;
    }
    .aa-Menu-section {
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        margin: 2px 0 2px 0;
    }
</style>
