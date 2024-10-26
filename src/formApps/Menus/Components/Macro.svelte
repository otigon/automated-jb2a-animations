<script>
    import { localize } from "#runtime/util/i18n";
    import { getContext }   from "svelte";
    import AutoCompleteMacro from "./AutoCompleteMacro.svelte";

    //export let animation;
    //export let category;

    let { animation, category } = getContext('animation-data');

    function removeMetaData() {
       delete $animation.metaData
   }
</script>

<div class="aa-macro-border">
    <div style="padding-top: 3px">
        <h1>{localize("autoanimations.menus.macro")}</h1>
    </div>
    <div class="aa-macro">
        <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
            <label for="">{localize("autoanimations.menus.playwhen")}</label>
            <select
                bind:value={$animation.macro.playWhen}
                style="text-align: center;width: 100%;"
                on:change={() => removeMetaData()}
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
                <option value="3"
                >{localize("autoanimations.menus.await")} {localize("autoanimations.menus.animation")}</option
                >
            </select>
        </div>
    </div>
    <AutoCompleteMacro {animation} {category}/>
    <div style='text-align:center'>
        <label for="">{localize("autoanimations.menus.args")}</label>
    </div>
    <div class="flexrow">
        <textarea bind:value={$animation.macro.args} style="margin-bottom: 1em"></textarea>
    </div>

</div>

<style lang="scss">
    .aa-macro {
        display: grid;
        grid-template-columns: 20% 60% 20%;
        grid-gap: 5px;
        align-items: center;
        margin-right: 2%;
        margin-bottom: 1em;
        font-size: medium;
    }
    .aa-macro select {
        text-align: center;
        min-height: 2em;
        border-radius: 10px;
        align-self: center;
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
        label {
            align-self: center;
            font-family: "Modesto Condensed", "Palatino Linotype", serif;
            font-size: 20px;
        }
    }
</style>
