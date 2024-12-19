<script>
    import { localize }     from "#runtime/util/i18n";
    import { getContext }   from "svelte";

    import BuildAeOnToken   from "../ActiveEffects/BuildAEOnToken.svelte";
    import BuildAeAura      from "../ActiveEffects/BuildAEAura.svelte";
    import SectionButtons   from "../Components/SectionButtons02.svelte";
    import Macro            from "../Components/Macro.svelte";
    import SoundOnly        from "../Components/SoundOnly.svelte";
    import { aefx }         from "../../_AutorecMenu/store/default-data/newSection/aefx.js"

    //export let animation;
    //export let category;
    //export let idx;
    export let fromMenu = 'autorec';
    let { animation } = getContext('animation-data');

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
        let newData = aefx({}, animation._data.activeEffectType)
        switch (animation._data.activeEffectType) {
            case "ontoken":
                $animation.primary = newData.primary;
                break;
            case "aura":
                $animation.primary = newData.primary;
                break;
        }
    }

    $: soundOnly = $animation.soundOnly.sound.enable;
    $: macroEnabled = $animation.macro.enable;
</script>

<SectionButtons type={fromMenu} />
<div hidden={!soundOnly}>
    <SoundOnly />
</div>
<div hidden={!macroEnabled}>
    <Macro  />
</div>
<div hidden={soundOnly}>
    <div hidden={$animation.macro.enable && $animation.macro.playWhen === "2"}>
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
                    <option value="ontoken"
                        >{localize("autoanimations.animTypes.ontoken")}</option
                    >
                    <option value="aura"
                        >{localize("autoanimations.animTypes.aura")}</option
                    >
                </select>
            </div>
        </div>
        <svelte:component this={activeEffectRoute} />
    </div>
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
