<script>
import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

export let menuSection;
export let presetType = menuSection.presetType;
$: presetType = menuSection.presetType = presetType;

</script>

<div class="aa-pickAnim">
    <div
        class="flexcol"
        style="grid-row: 2 / 3;grid-column: 2 / 3;"
    >
        <label for="1"
            >{localize("autoanimations.menus.preset")}
            {localize("autoanimations.menus.type")}</label
        >
        <select
            bind:value={presetType}
            style="text-align: center;justify-self: center; background-color: rgba(21, 154, 169, 0.4);"
        >
            <option value="bardicinspiration"
                >{localize(
                    "autoanimations.presetTypes.bardicinspiration"
                )}</option
            >
            <option value="bless"
                >{localize(
                    "autoanimations.presetTypes.bless"
                )}</option
            >
            <option value="dualattach"
                >{localize(
                    "autoanimations.presetTypes.dualattach"
                )}</option
            >
            <option value="fireball"
                >{localize(
                    "autoanimations.presetTypes.proToTemp"
                )}</option
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
                >{localize(
                    "autoanimations.presetTypes.thunderwave"
                )} D&D 5e</option
            >
        </select>
    </div>
</div>

<style lang='scss'>
    .aa-pickAnim {
        display: grid;
        grid-template-columns: 32.67% 32.67% 32.67%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
        margin-right: 5%;
        margin-left: 5%;
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