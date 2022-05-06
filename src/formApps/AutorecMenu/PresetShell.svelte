<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";

    import Bards from "../ItemMenu/components/presets/bardicInspiration.svelte";
    import Bless from "../ItemMenu/components/presets/bless.svelte";
    import DualAttach from "../ItemMenu/components/presets/dualattach.svelte";
    import Fireball from "../ItemMenu/components/presets/fireball.svelte";
    import HuntersMark from "../ItemMenu/components/presets/huntersmark.svelte";
    import Shield from "../ItemMenu/components/presets/shield.svelte";
    import SneakAttack from "../ItemMenu/components/presets/sneakAttack.svelte";
    import Teleportation from "../ItemMenu/components/presets/teleportation.svelte";
    import Thunderwave from "../ItemMenu/components/presets/thunderwave.svelte";

    export let flagData;
    export let menuSection;
    export let type;
    export let idx;

    export let isAutoRec = true;
    let presetType = menuSection.presetType;
    $: presetType = menuSection.presetType = presetType;

    let isHidden = menuSection.hidden || false;
    $: isHidden = menuSection.hidden = isHidden;
    let customId = `${type}` + `${idx}`;
    let sectionName = menuSection.name || "";
    $: sectionName = menuSection.name = sectionName;
    function removeSection(idx) {
        delete flagData[type][idx];

        for (let i = 0; i < Object.entries(flagData[type]).length; i++) {
            let compacted = {};
            Object.values(flagData[type]).forEach(
                (val, idx) => (compacted[idx] = val)
            );
            flagData[type] = compacted;
        }
        flagData = flagData;
    }
</script>

<div class="aaMenu-section">
    <div class="form-group">
        <div class="aaToolTip" style="max-width: 1.5rem;margin-left: .75rem;">
            <input
                type="checkbox"
                id={customId}
                hidden
                bind:checked={isHidden}
            />
            <label for={customId}
                ><i
                    class={isHidden
                        ? "fas fa-plus fa-lg aa-green"
                        : "fas fa-minus fa-lg aa-red"}
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
            class="aaToolTip"
            style="max-width: 1.5rem;margin-left: .75rem;text-shadow: 0 0 5px rgba(255, 0, 0, 0.687);"
        >
            <i
                class="far fa-trash-alt fa-lg"
                on:click={() => removeSection(idx)}
            />
        </div>
    </div>
    {#if !isHidden}
    <div class="aa-pickAnim" transition:fade>
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
                <option value="bardicinspiration"
                    >{localize(
                        "autoanimations.presetTypes.bardicinspiration"
                    )}</option
                >
                <option value="bless"
                    >{localize("autoanimations.presetTypes.bless")}</option
                >
                <option value="dualattach"
                    >{localize("autoanimations.presetTypes.dualattach")}</option
                >
                <option value="fireball"
                    >{localize("autoanimations.presetTypes.fireball")}</option
                >
                <option value="huntersmark"
                    >{localize(
                        "autoanimations.presetTypes.huntersmark"
                    )}</option
                >
                <option value="shieldspell"
                    >{localize(
                        "autoanimations.presetTypes.shieldspell"
                    )}</option
                >
                <option value="sneakattack"
                    >{localize(
                        "autoanimations.presetTypes.sneakattack"
                    )}</option
                >
                <option value="teleportation"
                    >{localize(
                        "autoanimations.presetTypes.animTeleportation"
                    )}</option
                >
                <option value="thunderwave"
                    >{localize("autoanimations.presetTypes.thunderwave")} D&D 5e</option
                >
            </select>
        </div>
    </div>
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
                <DualAttach {isAutoRec} {presetType} flagData={menuSection} />
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
</div>

<style lang="scss">
    .aaMenu-section {
        background: rgba(199, 199, 199, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        margin: 1.5% 3% 1.5% 3%;
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
</style>
