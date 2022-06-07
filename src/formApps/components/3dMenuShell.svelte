<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import Options3d from "./3dCanvasOptions.svelte";

    export let flagData;
    flagData.levels3d ? flagData.levels3d : flagData.levels3d = {};
    const root = flagData.levels3d;
    let type3d = root.type || "";
    $: type3d = root.type = type3d;
</script>

<h1>3D Canvas Particle Animations</h1>
<h3>Requires the 3D Canvas Module by Ripper</h3>
<div class="aa-3wide">
    <div class="flexcol" style="grid-row: 1 / 2;grid-column: 2 / 3;">
        <label for="">{localize("autoanimations.menus.type")}</label>
            <select bind:value={type3d}>
                <option value="" />
                <option value="projectile"
                    >{localize("autoanimations.menus.projectile")}</option
                >
                <option value="sprite">{localize("autoanimations.menus.sprite")}</option>
                <option value="ray">{localize("autoanimations.menus.ray")}</option>
                <option value="explosion"
                    >{localize("autoanimations.menus.explosion")}</option
                >
            </select>
    </div>
</div>
{#if type3d === "projectile"}
<Options3d type="projectile" {flagData} />
{/if}
{#if type3d === "sprite"}
<Options3d type="sprite" {flagData} />
{/if}
{#if type3d === "ray"}
<Options3d type="ray" {flagData} />
{/if}
{#if type3d === "explosion"}
<Options3d type="explosion" {flagData} />
{/if}


<style lang="scss">
    .aa-3wide {
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
    .aa-3wide label{
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
        align-self: center;
    }
    .aa-3wide select {
        text-align: center;
        font-weight: bold;
        min-height: 2em;
        border-radius: 10px;
    }
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
        margin-top: 5px;
    }
    h3 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: medium;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
    } 

</style>
