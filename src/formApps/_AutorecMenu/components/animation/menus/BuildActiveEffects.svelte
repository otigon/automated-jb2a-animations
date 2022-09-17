<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import BuildAeOnToken from "../activeEffectMenus/BuildAEOnToken.svelte";
    import BuildAeAura from "../activeEffectMenus/BuildAEAura.svelte";
    import SectionButtons from "../components/SectionButtons03.svelte";
    import Macro from "../components/Macro.svelte";
    import SoundOnly from "../components/SoundOnly.svelte";

    import * as reset from "../activeEffectMenus/aeDefaults.js";

    export let animation;
    export let category;
    export let idx;

    $: activeEffectType = $animation.activeEffectType;

    let aeContent = {
        ontoken: {
            component: BuildAeOnToken,
        },
        aura: {
            component: BuildAeAura,
        },
        "": {},
    };

    $: activeEffectRoute = aeContent[activeEffectType].component;

    function changeAE() {
        switch (animation._data.activeEffectType) {
            case "ontoken":
                $animation.data = structuredClone(reset.ontoken);
                break;
            case "aura":
                $animation.data = structuredClone(reset.aura);
                break;
        }
    }

    $: soundOnly = $animation.soundOnly.sound.enable;
    $: macroEnabled = $animation.macro.enable;
</script>

<SectionButtons {animation} />
<div hidden={!soundOnly}>
    <SoundOnly {animation} />
</div>
<div hidden={!macroEnabled}>
    <Macro {animation} {category} />
</div>
<div hidden={soundOnly}>
    <div class="aa-pickAnim">
        <div
            class="flexcol"
            style="grid-row: 2 / 3;grid-column: 2 / 3;margin-bottom: 1em;"
        >
            <label for=""
                >{localize("autoanimations.menus.animation")}
                {localize("autoanimations.menus.type")}</label
            >
            <select
                bind:value={$animation.activeEffectType}
                on:change={() => changeAE()}
                style="background-color: rgba(21, 154, 169, 0.4);width: 12em;"
            >
                <option value="">Select Type</option>
                <option value="ontoken"
                    >{localize("autoanimations.animTypes.ontoken")}</option
                >
                <option value="aura"
                    >{localize("autoanimations.animTypes.aura")}</option
                >
            </select>
        </div>
    </div>
    <svelte:component this={activeEffectRoute} {animation} {category} {idx} />
</div>

<style lang="scss">
    .aa-pickAnim {
        display: grid;
        grid-template-columns: 25% 50% 25%;
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
        background-color: rgba(21, 154, 169, 0.4);
    }
    .aa-pickAnim label {
        align-self: center;
    }
</style>
