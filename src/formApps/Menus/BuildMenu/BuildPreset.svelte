<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import DualAttach           from "../Presets/DualAttach.svelte"
    import ProjectileToTemplate from "../Presets/ProjectileToTemplate.svelte";
    import Teleportation        from "../Presets/Teleportation.svelte";
    import Thunderwave          from "../Presets/Thunderwave.svelte";
    import SectionButtons       from "../Components/SectionButtons03.svelte";
    import Macro                from "../Components/Macro.svelte";
    import SoundOnly            from "../Components/SoundOnly.svelte";
    import * as reset           from "../Presets/presetDefaults";

    export let animation;
    export let category;
    export let idx = 0;

    $: presetType = $animation.presetType;

    let presetContent = {
        dualattach: {
            component: DualAttach,
        },
        proToTemp: {
            component: ProjectileToTemplate,
        },
        teleportation: {
            component: Teleportation,
        },
        thunderwave: {
            component: Thunderwave,
        },
        "": {},
    };

    $: presetRoute = presetContent[presetType].component;

    function changePreset() {
        switch (animation._data.presetType) {
            case "dualattach":
                $animation.data = structuredClone(reset.dualAttach);
                break;
            case "teleportation":
                $animation.data = structuredClone(reset.teleportation);
                break;
            case "thunderwave":
                $animation.data = structuredClone(reset.thunderwave);
                break;
            case "proToTemp":
                $animation.data = structuredClone(reset.proToTemp);
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
    <div hidden={$animation.macro.enable && $animation.macro.playWhen === "2"}>
        <div class="aa-pickAnim">
            <div
                class="flexcol"
                style="grid-row: 2 / 3;grid-column: 2 / 3;margin-bottom: 0.75em;"
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
                    <option value="">Select a Preset</option>
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
                        >{localize("autoanimations.presetTypes.thunderwave")} D&D
                        5e</option
                    >
                </select>
            </div>
        </div>
        <svelte:component this={presetRoute} {animation} {category} {idx} />
    </div>
</div>

<style lang="scss">
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
        background-color: rgba(21, 154, 169, 0.4);
    }
    .aa-pickAnim label {
        align-self: center;
    }
</style>
