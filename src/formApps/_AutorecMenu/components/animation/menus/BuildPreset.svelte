<script>
import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

import DualAttach from "../presetMenus/DualAttach.svelte";
import ProjectileToTemplate from "../presetMenus/ProjectileToTemplate.svelte";
import Teleportation from "../presetMenus/Teleportation.svelte";
import Thunderwave from "../presetMenus/Thunderwave.svelte";
import DualAnimation from "../presetMenus/DualAnimation.svelte"
import TripleAnimation from "../presetMenus/TripleAnimation.svelte";

import * as reset from "../presetMenus/presetDefaults.js"

export let animation;
export let category;
export let idx;

$: presetType = $animation.presetType;

let presetContent = {
    "dualattach": {
        component: DualAttach,
    },
    "proToTemp": {
        component: ProjectileToTemplate,
    },
    "teleportation": {
        component: Teleportation,
    },
    "thunderwave": {
        component: Thunderwave,
    },
    "dualAnim": {
        component: DualAnimation,
    },
    "tripleAnim" : {
        component: TripleAnimation,
    },
    "": {

    }
}

$: presetRoute = presetContent[presetType].component

function changePreset() {
    switch(animation._data.presetType) {
        case "dualattach":
            $animation.data = reset.dualAttach;
            break;
        case "teleportation":
            $animation.data = reset.teleportation;
            break;
        case "thunderwave":
            $animation.data = reset.thunderwave;
            break;
        case "proToTemp":
            $animation.data = reset.proToTemp;
            break;
        case "dualAnim":
            $animation.data = reset.dual;
            break;
        case "tripleAnim":
            $animation.data = reset.triple;
            break;
    }
    
}
</script>

<div class="aa-pickAnim">
    <div
        class="flexcol"
        style="grid-row: 2 / 3;grid-column: 2 / 3;margin-bottom: 1em"
    >
        <label for="1"
            >{localize("autoanimations.menus.preset")}
            {localize("autoanimations.menus.type")}</label
        >
        <select
            bind:value={$animation.presetType}
            on:change={() => changePreset()}
            style="background-color: rgba(21, 154, 169, 0.4);width: 95%;"
        >
            <option value=""
            >Select a Preset</option
            >
            <option value="dualattach"
                >{localize(
                    "autoanimations.presetTypes.dualattach"
                )}</option
            >
            <option value="proToTemp"
                >{localize(
                    "autoanimations.presetTypes.proToTemp"
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
            <option value="dualAnim">2 Part Animation</option>
            <option value="tripleAnim">3 Part Animation</option>
        </select>
    </div>
</div>
<svelte:component this={presetRoute} {animation} {category} {idx}/>


<style lang='scss'>
    .aa-pickAnim {
        display: grid;
        grid-template-columns: 25% 50% 25%;
        padding: 5px;
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
        border-radius: 50%;
        align-self: center;
        background-color: rgba(21, 154, 169, 0.4)
    }
    .aa-pickAnim label {
        align-self: center;
    }
</style>