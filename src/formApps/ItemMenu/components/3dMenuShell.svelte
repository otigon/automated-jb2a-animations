<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { fade, fly } from "svelte/transition";
    import Options3d from "./3dCanvasOptions.svelte";

    export let flagData;
    const root = flagData.levels3d;
    let type3d = root.type || "";
    $: type3d = root.type = type3d;
</script>

<div class="aa-3d-settings">
    <div style="justify-self: center;grid-row: 1 / 2;grid-column: 1 / 5;">
        <label for=""
            >{localize("AUTOANIM.type")}:
            <select bind:value={type3d}>
                <option value="" />
                <option value="projectile"
                    >{localize("AUTOANIM.projectile")}</option
                >
                <option value="sprite">{localize("AUTOANIM.sprite")}</option>
                <option value="ray">{localize("AUTOANIM.ray")}</option>
                <option value="explosion"
                    >{localize("AUTOANIM.explosion")}</option
                >
            </select>
        </label>
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
    .aa-3d-settings {
        display: grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        justify-items: end;
        color: black;
        text-align: center;
        align-items: center;
    }
    .aa-3d-settings label{
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
</style>
