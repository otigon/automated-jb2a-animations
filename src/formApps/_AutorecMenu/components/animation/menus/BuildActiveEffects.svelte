<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import DualAnimation from "../presetMenus/DualAnimation.svelte";
    import TripleAnimation from "../presetMenus/TripleAnimation.svelte";
    import BuildAeOnToken from "../activeEffectMenus/BuildAEOnToken.svelte";
    import BuildAeAura from "../activeEffectMenus/BuildAEAura.svelte";
    import SectionButtons from "../components/SectionButtons02.svelte";
    import Macro from "../components/Macro.svelte";
    import SoundOnly from "../components/SoundOnly.svelte";

    import * as reset from "../activeEffectMenus/aeDefaults.js";

    export let animation;
    export let category;
    export let idx;

    $: activeEffectType = $animation.activeEffectType;

    let aeContent = {
        onToken: {
            component: BuildAeOnToken,
        },
        aura: {
            component: BuildAeAura,
        },
        dualAnim: {
            component: DualAnimation,
        },
        tripleAnim: {
            component: TripleAnimation,
        },
        "": {},
    };

    $: activeEffectRoute = aeContent[activeEffectType].component;

    function changeAE() {
        switch (animation._data.activeEffectType) {
            case "onToken":
                $animation.data = structuredClone(reset.onToken);
                break;
            case "aura":
                $animation.data = structuredClone(reset.aura);
                break;
            case "dualAnim":
                $animation.data = structuredClone(reset.dual);
                break;
            case "tripleAnim":
                $animation.data = structuredClone(reset.triple);
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
                <option value="onToken"
                    >{localize("autoanimations.animTypes.onToken")}</option
                >
                <option value="aura"
                    >{localize("autoanimations.animTypes.typeAuras")}</option
                >
                <option value="dualAnim"
                    >{localize("autoanimations.menus.dual")}</option
                >
                <option value="tripleAnim"
                    >{localize("autoanimations.menus.triple")}</option
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
