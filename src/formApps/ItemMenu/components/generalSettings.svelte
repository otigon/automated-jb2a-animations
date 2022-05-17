<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade } from "svelte/transition";

    export let flagData;
    export let disableAmmo;
    export let autoCheck;
    const macros = flagData.macro;
    const autoOverride = flagData.autoOverride;
    const options = flagData.options;

    export let animationDisabled = flagData.killAnim || false;
    $: flagData.killAnim = animationDisabled;
    $: disabledLabel = disabledLabel;
    let disabledLabel = !animationDisabled
        ? game.i18n.localize("autoanimations.menus.animation") +
          " " +
          game.i18n.localize("autoanimations.menus.enabled")
        : game.i18n.localize("autoanimations.menus.animation") +
          " " +
          game.i18n.localize("autoanimations.menus.disabled");

    $: {
        animationDisabled = animationDisabled;
        disabledLabel = animationDisabled
            ? game.i18n.localize("autoanimations.menus.animation") +
              " " +
              game.i18n.localize("autoanimations.menus.disabled")
            : game.i18n.localize("autoanimations.menus.animation") +
              " " +
              game.i18n.localize("autoanimations.menus.enabled");
    }

    let gameSystem = game.system.id;

    export let isCustomized = flagData.override || false;
    $: isCustomized = isCustomized;
    $: flagData.override = isCustomized;

    export let overrideAuto = autoOverride.enable || false;
    $: overrideAuto = autoOverride.enable = overrideAuto

    function switchOverride() {
        overrideAuto = !overrideAuto;
        //autoOverride.enable = overrideAuto
        let newOverrideAuto = overrideAuto;
        if (!newOverrideAuto) {
            console.log("Disabled");
            flagData.autoOverride = {};
            console.log(flagData)
            flagData.autoOverride = {enable: false}
            //autoOverride.enable = false;
        } else {
            console.log("Enabled");
            flagData.autoOverride = {enable: true}
        }
    }

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
                >{localize("autoanimations.menus.add")}
                {localize("autoanimations.menus.macro")}</label
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
            style="border: 2px ridge rgb(172, 172, 172, .47);"
            >{disabledLabel}</label
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
            >{localize("autoanimations.menus.customize")}</label
        >
    </div>
    <div
        class="flexcol button-labels {isCustomized ||
        animationDisabled ||
        !autoCheck
            ? 'aa-disabled aa-options'
            : 'aa-options'}"
        style="grid-row: 2 / 3; grid-column: 2 / 3;"
        transition:fade
    >
        <button
            disabled={isCustomized || animationDisabled || !autoCheck}
            class={overrideAuto ? "selected" : "notSelected"}
            on:click={() => switchOverride()}
            >{localize("autoanimations.menus.override")} Autorec</button
        >
    </div>
    <div
        class="flexcol button-labels {gameSystem === 'dnd5e' &&
        !animationDisabled &&
        !disableAmmo
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
            disabled={gameSystem !== "dnd5e" ||
                animationDisabled ||
                disableAmmo}
        />
        <label for="fromAmmo" class={fromAmmo ? "selected" : "notSelected"}
            >Animate from Ammo</label
        >
    </div>
</div>

<style lang="scss">
    .selected {
        background-color: rgba(25, 175, 2, 0.4);
        border: 2px ridge rgb(172, 172, 172, 0.6);
        transition: background-color 0.5s;
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.4);
        border: 2px ridge rgb(172, 172, 172, 0.6);
        transition: background-color 0.5s;
    }
    .aa-general-settings {
        display: grid;
        grid-template-columns: 32.67% 32.67% 32.67%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
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
        opacity: 0.3;
        transition: opacity 0.5s;
    }
    .aa-options button {
        border-radius: 10px;
        border: 2px outset #8e8e8e;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        height: auto;
    }
    .aa-options button:disabled {
        opacity: 0.3;
        transition: opacity 0.5s;
    }
</style>
