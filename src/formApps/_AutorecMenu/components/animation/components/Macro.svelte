<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let animation;
    export let category;

</script>

<div class="aa-macro-border">
    <div style="padding-top: 10px">
        <h1>{localize("autoanimations.menus.macro")}</h1>
    </div>
    <div class="aa-macro">
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 1 / 2;">
            <label for="">{localize("autoanimations.menus.playwhen")}</label>
            <select
                bind:value={$animation.macro.playWhen}
                style="text-align: center;width: 100%;"
            >
                <option value="0"
                    >{localize("autoanimations.menus.macroconcurrent")}</option
                >
                <option value="1"
                    >{localize("autoanimations.menus.awaitmacro")}</option
                >
                <option value="2"
                    >{localize("autoanimations.menus.macroonly")}</option
                >
            </select>
        </div>
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
            <label for=""
                >{localize("autoanimations.menus.macro")}
                {localize("autoanimations.menus.name")}</label
            >
            <input type="text" bind:value={$animation.macro.name} />
        </div>
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 3 / 4;">
            <i
                title="Open Macro"
                style="margin-top: 15px;font-size: 18px"
                class="fas fa-edit aa-zoom"
                on:click={() => category.openMacro(animation._data.macro.name)}
            />
        </div>
        <div class="flexcol" style="grid-row: 2 / 3;grid-column: 1 / 4;">
            <label for="">{localize("autoanimations.menus.args")}</label>
        </div>
    </div>
    <div class="flexrow">
        <textarea bind:value={$animation.macro.args} style="margin-bottom: 1em"></textarea>
    </div>

</div>

<style lang="scss">
    .aa-macro {
        display: grid;
        grid-template-columns: 40% 55% 5%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 2%;
        font-size: medium;
        font-weight: bold;
    }
    .aa-macro select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 10px;
        align-self: center;
    }
    .aa-macro input {
        align-self: center;
        border-radius: 5px;
        font-family: "Signika", sans-serif;
        font-size: small;
        height: unset;
        line-height: 23px;
    }
    .aa-macro label {
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
    .aa-macro-border {
        padding-left: 5%;
        padding-right: 5%;
        margin-right: 3%;
        margin-left: 3%;
        border: 3px solid rgba(21, 86, 21, 0.6);
        border-radius: 5px;
        background: rgb(200 200 200);
        margin-bottom: 5px;
    }
</style>
