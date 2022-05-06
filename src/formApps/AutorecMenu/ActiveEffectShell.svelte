<svelte:options accessors={true} />

<script>
    import { fade } from "svelte/transition";
    import ChooseAnimation from "../ItemMenu/components/chooseAnimation.svelte";
    import Options from "../ItemMenu/components/options.svelte";
    import SoundSettings from "../ItemMenu/components/soundSettings.svelte";
    import PresetShell from "./PresetShell.svelte";
    import AddExplosion from "../ItemMenu/components/explosions.svelte";
    import Bless from "../ItemMenu/components/presets/bless.svelte";
    import Shield from "../ItemMenu/components/presets/shield.svelte";

    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import {
        aaTypeMenu,
        aaNameMenu,
        aaVariantMenu,
        aaColorMenu,
    } from "../../animation-functions/databases/jb2a-menu-options.js";

    const wait = (delay) =>
        new Promise((resolve) => setTimeout(resolve, delay));

    export let flagData;
    export let type;
    export let idx;
    export let menuSection;

    let animType = flagData.animType || "static";
    $: animType = flagData.animType = animType;

    let presetType = menuSection.presetType;
    $: presetType = menuSection.presetType = presetType;

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
    if (!menuType) {
        menuType = Object.keys(aaTypeMenu[type])[0];
        animation = Object.keys(aaNameMenu[type][menuType])[0];
        variant = Object.keys(aaVariantMenu[type][menuType][animation])[0];
        color = Object.keys(aaColorMenu[type][menuType][animation][variant])[0];
    }
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
    const showExplosions = ["melee", "range", "static"];

    let animTypeSwitched = false;
    async function typeSwitch() {
        animTypeSwitched = true;
        await wait(150);
        animTypeSwitched = false;
    }
    const disablePlayOn = true;
</script>

<div class="form-group">
    <div class="aaToolTip" style="max-width: 1.5rem;margin-left: .75rem;">
        <input type="checkbox" id={customId} hidden bind:checked={isHidden} />
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
        <i class="far fa-trash-alt fa-lg" on:click={() => removeSection(idx)} />
    </div>
</div>
{#if !isHidden}
    <div class="autorec-options flexcol" transition:fade>
        <div style="grid-row:1/2; grid-column:2/3">
            <label for=""><i class="far fa-clone" /></label>
        </div>
        <div style="grid-row:1/2; grid-column:3/4">
            <label for=""><i class="fas fa-cube" /></label>
        </div>
        <div style="grid-row:1/2; grid-column:8/9">
            <label for=""><i class="fas fa-music" /></label>
        </div>
        <div style="grid-row:1/2; grid-column:9/10">
            <label for=""><i class="far fa-keyboard" /></label>
        </div>
    </div>
    <div class="aa-pickAnim" transition:fade>
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
            <label for="1"
                >{localize("AUTOANIM.animation")}
                {localize("AUTOANIM.type")}</label
            >
            <select
                bind:value={animType}
                on:change={() => typeSwitch()}
                id="1"
                style="text-align: center;justify-self: center;background-color: rgba(21, 154, 169, 0.4);"
            >
                <option value="static"
                    >{localize("autoanimations.animTypes.onToken")}</option
                >
                <option value="aura"
                    >{localize("autoanimations.animTypes.typeAuras")}</option
                >
                <option value="preset"
                    >{localize("autoanimations.animTypes.presets")}</option
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
                    >{localize("AUTOANIM.preset")}
                    {localize("AUTOANIM.type")}</label
                >
                <select
                    bind:value={presetType}
                    id="1"
                    style="text-align: center;justify-self: center; background-color: rgba(21, 154, 169, 0.4);"
                >
                    <option value="bless"
                        >{localize("autoanimations.presetTypes.bless")}</option
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
            {animType}
            flagData={menuSection}
            customId={`${type}-${idx}`}
        />
        <Options animType={type} {menuType} flagData={menuSection} />
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

<style lang="scss">
    .autorec-options {
        display: grid;
        grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
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
