<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let isAutorec;
    export let flagData;
    const macros = flagData.macro;

    let name = macros.name;
    $: macros.name = name = name;

    let data = macros.args;
    $: macros.args = data = data;

    export let playWhen = macros.playWhen;
    $: macros.playWhen = playWhen = playWhen;

    export let animationDisabled = flagData.killAnim;
    $: animationDisabled = animationDisabled;

    async function openMacro() {
        // Credit to Wasp, Zhell, Gazkhan and MrVauxs for the code in this section
        if (name.startsWith("Compendium")) {
            let packArray = name.split(".");
            let pack = game.packs.get(`${packArray[1]}.${packArray[2]}`);
            if (!pack) {
                ui.notifications.info(
                    `Autoanimations | Compendium ${packArray[1]}.${packArray[2]} was not found`
                );
                return;
            }
            let macroFilter = pack.index.filter((m) => m.name === packArray[3]);
            if (!macroFilter.length) {
                ui.notifications.info(
                    `Autoanimations | A macro named ${packArray[3]} was not found in Compendium ${packArray[1]}.${packArray[2]}`
                );
                return;
            }
            let macroDocument = await pack.getDocument(macroFilter[0]._id);
            macroDocument.sheet.render(true);
        } else {
            if (!name) {
                return;
            }
            let getTest = game.macros.getName(name);
            if (!getTest) {
                ui.notifications.info(
                    `Autoanimations | Could not find the macro named ${name}`
                );
                return;
            }
            game.macros.getName(name).sheet.render(true);
        }
    }
</script>

<div style="padding-top: 10px">
    <h1>{localize("autoanimations.menus.macro")}</h1>
</div>
<div class="aa-3wide">
    <div
        class="flexcol {animationDisabled ? 'aa-disabled' : ''}"
        style="grid-row: 1 / 2;grid-column: 1 / 2;"
    >
        <label for="">{localize("autoanimations.menus.playwhen")}</label>
        <select
            bind:value={playWhen}
            style="text-align: center;justify-self: center"
            disabled={animationDisabled}
        >
            <option value="0"
                >{localize("autoanimations.menus.macroconcurrent")}</option
            >
            <option value="1"
                >{localize("autoanimations.menus.awaitmacro")}</option
            >
            {#if isAutorec}
                <option value="2"
                    >{localize("autoanimations.menus.macroonly")}</option
                >
            {/if}
        </select>
    </div>
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
        <label for=""
            >{localize("autoanimations.menus.macro")}
            {localize("autoanimations.menus.name")}</label
        >
        <input type="text" bind:value={name} />
    </div>
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 3 / 4;">
        <i
            title="Open Macro"
            style="margin-top: 15px;font-size: 18px"
            class="fas fa-edit aa-zoom"
            on:click={() => openMacro()}
        />
    </div>
    <div class="flexcol" style="grid-row: 2 / 3;grid-column: 1 / 4;">
        <label for="">{localize("autoanimations.menus.args")}</label>
        <input type="text" bind:value={data} />
    </div>
</div>

<style lang="scss">
    .aa-3wide {
        display: grid;
        grid-template-columns: 40% 55% 5%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 2%;
        font-size: medium;
        font-weight: bold;
    }
    .aa-3wide select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 10px;
    }
    .aa-3wide input {
        align-self: center;
        border-radius: 5px;
        font-family: "Signika", sans-serif;
        font-size: small;
        height: unset;
        line-height: 23px;
    }
    .aa-3wide label {
        align-self: center;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
    }
    .aa-disabled {
        opacity: 0.4;
        transition: opacity 0.5s;
    }
</style>
