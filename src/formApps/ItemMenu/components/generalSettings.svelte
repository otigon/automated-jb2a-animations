<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { getContext } from "svelte";
    import { fade, fly } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";

    export let flagData;
    const macros = flagData.macro;
    const autoOverride = flagData.autoOverride;
    const options = flagData.options;

    export let animationDisabled = flagData.killAnim || false;
    $: flagData.killAnim = animationDisabled;
    $: disabledLabel = disabledLabel;
    let disabledLabel = !animationDisabled
        ? game.i18n.localize("AUTOANIM.animation") +
          " " +
          game.i18n.localize("AUTOANIM.enabled")
        : game.i18n.localize("AUTOANIM.animation") +
          " " +
          game.i18n.localize("AUTOANIM.disabled");

    $: {
        animationDisabled = animationDisabled;
        disabledLabel = animationDisabled
            ? game.i18n.localize("AUTOANIM.animation") +
              " " +
              game.i18n.localize("AUTOANIM.disabled")
            : game.i18n.localize("AUTOANIM.animation") +
              " " +
              game.i18n.localize("AUTOANIM.enabled");
    }

    let gameSystem = game.system.id;

    export let isCustomized = flagData.override || false;
    $: isCustomized = isCustomized;
    $: flagData.override = isCustomized;

    let overrideAuto = autoOverride.enable || false;
    $: overrideAuto = overrideAuto;
    $: autoOverride.enable = overrideAuto;

    let fromAmmo = options.ammo || false;
    $: fromAmmo = fromAmmo;
    $: options.ammo = fromAmmo;
    /*
    export const generalFlagData = {
        killAnim: animationDisabled,
        override: isCustomized,
        autoOverride: {
            enable: overrideAuto,
        },
        options: {
            ammo: fromAmmo,
        }
    }
    */
    export let enableMacro = macros.enable || false;
    $: macros.enable = enableMacro = enableMacro;
</script>

<div class="aa-general-settings">
    {#if isCustomized || animationDisabled}
        <div
            class="flexcol button-labels"
            style="grid-row: 1 / 2; grid-column: 1 / 2"
            transition:fade
        >
            <input
                type="checkbox"
                id="addMacro"
                hidden
                bind:checked={enableMacro}
            />
            <label
                for="addMacro"
                class={enableMacro ? "selected" : "notSelected"}
                style="border: 2px ridge rgb(172, 172, 172, .47);"
                >{localize("AUTOANIM.add")} {localize("AUTOANIM.macro")}</label
            >
        </div>
    {/if}
    <div
        class="flexcol button-labels"
        style="grid-row: 1 / 2; grid-column: 2 / 3;"
        transition:fade
    >
        <input
            type="checkbox"
            id="killAnim"
            hidden
            bind:checked={animationDisabled}
        />
        <label
            for="killAnim"
            class={!animationDisabled ? "selected" : "notSelected"}
            style="border: 2px ridge rgb(172, 172, 172, .47);">{disabledLabel}</label
        >
    </div>
    <div
        class="flexcol button-labels {overrideAuto || animationDisabled
            ? 'aa-disabled'
            : ''}"
        style="grid-row: 2 / 3; grid-column: 1 / 2;"
        transition:fade
    >
        <input
            type="checkbox"
            id="override"
            hidden
            bind:checked={isCustomized}
            disabled={overrideAuto || animationDisabled}
        />
        <label for="override" class={isCustomized ? "selected" : "notSelected"}
            >{localize("AUTOANIM.customize")}</label
        >
    </div>
    <div
        class="flexcol button-labels {isCustomized || animationDisabled
            ? 'aa-disabled'
            : ''}"
        style="grid-row: 2 / 3; grid-column: 2 / 3;"
        transition:fade
    >
        <input
            type="checkbox"
            id="overrideAuto"
            hidden
            bind:checked={overrideAuto}
            disabled={isCustomized || animationDisabled}
        />
        <label
            for="overrideAuto"
            class={overrideAuto ? "selected" : "notSelected"}
            >Override Autorec</label
        >
    </div>
    <div
        class="flexcol button-labels {gameSystem === 'dnd5e' &&
        !animationDisabled
            ? ''
            : 'aa-disabled'}"
        style="grid-row: 2 / 3; grid-column: 3 / 4;"
        transition:fade
    >
        <input
            type="checkbox"
            id="fromAmmo"
            hidden
            bind:checked={fromAmmo}
            disabled={gameSystem !== "dnd5e" || animationDisabled}
        />
        <label for="fromAmmo" class={fromAmmo ? "selected" : "notSelected"}
            >Animate from Ammo</label
        >
    </div>
</div>

<style lang="scss">
    .selected {
        background-color: rgba(25, 175, 2, 0.4);
        border: 2px ridge rgb(172, 172, 172, .60);
        transition: background-color 0.5s;
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.4);
        border: 2px ridge rgb(172, 172, 172, .60);
        transition: background-color 0.5s;
    }
    .aa-general-settings {
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
        border-radius: 10px;
        color: black;
    }
    .button-labels label {
        border-radius: 10px;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        padding: 5px;
        text-align: center;
        width: 100%;
    }
    .aa-general-settings input:disabled {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-disabled label {
        opacity:0.3;
        transition: opacity 0.5s;
    }
</style>
