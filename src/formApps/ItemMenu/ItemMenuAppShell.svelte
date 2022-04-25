<svelte:options accessors={true} />

<script>
    import { getContext } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    import SelectAnimation from "./components/SelectAnimation.svelte";
    import ExplosionSettings from "./components/explosions.svelte";
    import Options from "./components/options.svelte";
    import GeneralSettings from "./components/generalSettings.svelte";
    import SoundSettings from "./components/soundSettings.svelte";
    import RangeSwitch from "./components/meleeRange.svelte";
    import MacroField from "./components/macro.svelte";
    import StaticMenu from "./components/staticMenu.svelte";
    import ExtraFX from "./components/extraFX.svelte";
    import Menu3d from "./components/3dMenuShell.svelte";
    //import { menuAnimType } from "./menuStore.js"

    import { flagMigrations } from "../../system-handlers/flagMerge.js";

    export let elementRoot;
    export let item;
    export let itemFlags;
    export const flags = itemFlags.autoanimations || {};

    let animationDisabled = flags.killAnim;
    let isCustomized;
    $: isCustomized = isCustomized;

    export const flagData = {
        killAnim: flags.killAnim,
        animLevel: flags.animLevel,
        override: flags.override,
        animType: flags.animType,
        animation: flags.animation,
        color: flags.color,
        version: flags.version
            ? flags.version
            : Object.keys(flagMigrations.migrations)
                  .map((n) => Number(n))
                  .reverse()[0],

        options: flags.options || {},
        explosions: flags.explosions || {},
        audio: flags.audio || {},
        autoOverride: flags.autoOverride || {},
        macro: flags.macro || {},
        levels3d: flags.levels3d || {},
        sourceToken: flags.sourceToken || {},
        targetToken: flags.targetToken || {},
        meleeSwitch: flags.meleeSwitch || {},
    };
    let enableMacro;
    $: enableMacro = enableMacro;
    let showSound;
    $: showSound = animationDisabled ? true : false;
    let animType;
    $: animType = animType;
    let menuType;
    $: menuType = menuType;
    /*
    let menuSelection = flagData.animType || "";
    menuAnimType.subscribe(value => {
        menuSelection = value;
    })
    */
    let form = void 0;
    const { application } = getContext("external");

    function onClick() {
        TJSDialog.prompt({
            title: "A modal dialog!",
            draggable: false,
            modal: true,
            content: "A cool modal dialog!", // You can set content with a Svelte component!
            label: "Ok",
        });
    }

    const applyFlags = async () => {
        const updatedFlags = {
            data: {
                flags: {
                    autoanimations: flagData,
                },
            },
        };
        await item.update(updatedFlags.data);
    };

    async function closeApp() {
        const updatedFlags = {
            data: {
                flags: {
                    autoanimations: flagData,
                },
            },
        };
        await item.update(updatedFlags.data);
        application.close();
    }

    let primaryTab = true;
    $: focusPrimary = primaryTab;

    let extraTab = false;
    $: focusExtra = extraTab;

    let tab3d = false;
    $: focus3d = tab3d;

    function switchPrimary() {
        primaryTab = !extraTab && !tab3d ? primaryTab : !primaryTab;
        extraTab = false;
        tab3d = false;
    }
    function switchExtra() {
        extraTab = !primaryTab && !tab3d ? extraTab : !extraTab;
        primaryTab = false;
        tab3d = false;
    }
    function switch3d() {
        tab3d = !primaryTab && !extraTab ? tab3d : !tab3d;
        primaryTab = false;
        extraTab = false;
    }

    let explosionEnabled = flagData.explosions.enable || false;
    $: {
        explosionEnabled = explosionEnabled;
        flagData.explosions.enable = explosionEnabled;
    }
    let explosionLabel = explosionEnabled ? "Enabled" : "Disabled";
    $: explosionLabel = explosionEnabled ? "Enabled" : "Disabled";

    let enableSource = flagData.sourceToken.enable || false;
    $: enableSource = flagData.sourceToken.enable = enableSource;
    let sourceLabel = enableSource ? "Enabled" : "Disabled";
    $: sourceLabel = enableSource ? "Enabled" : "Disabled";

    let enableTarget = flagData.targetToken.enable || false;
    $: enableTarget = flagData.targetToken.enable = enableTarget;
    let targetLabel = enableTarget ? "Enabled" : "Disabled";
    $: targetLabel = enableTarget ? "Enabled" : "Disabled";
</script>

<ApplicationShell
    bind:elementRoot
    transition={scale}
    transitionOptions={{ duration: 500 }}
    stylesContent={{ background: "rgba(125, 125, 125, 0.75)" }}
    stylesApp={{ header: "red" }}
>
    <form
        bind:this={form}
        on:submit|preventDefault={applyFlags}
        autocomplete="off"
        id="item-menu-aa"
        class="overview"
    >
        <div class="aaTopSection" style="margin-top:5px" transition:fade>
            <div class="aa-tabs">
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 1 / 2;"
                >
                    <button
                        class={focusPrimary ? "selected" : "notSelected"}
                        on:click={() => switchPrimary()}
                        ><i class="fas fa-bomb" />
                        {localize("AUTOANIM.primary")}
                        {localize("AUTOANIM.animation")}</button
                    >
                </div>
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 2 / 3;"
                >
                    <button
                        class={focusExtra ? "selected" : "notSelected"}
                        on:click={() => switchExtra()}
                        ><i class="fas fa-user-plus" />
                        {localize("AUTOANIM.extra")}
                        {localize("AUTOANIM.effects")}</button
                    >
                </div>
                <div
                    class="flexcol"
                    style="grid-row: 1 / 2; grid-column: 3 / 4;"
                >
                    <button
                        class={focus3d ? "selected" : "notSelected"}
                        on:click={() => switch3d()}
                        ><i class="fas fa-vr-cardboard" /> 3D Canvas</button
                    >
                </div>
            </div>
        </div>
        {#if focusPrimary}
            <div class="aaMidSection" transition:fade>
                <div class="aaMenu-section" transition:fade>
                    <GeneralSettings
                        bind:animationDisabled
                        bind:isCustomized
                        bind:enableMacro
                        {flagData}
                    />
                </div>
                {#if enableMacro}
                    <div class="aaMenu-section" transition:fade>
                        <MacroField {flagData} />
                    </div>
                {/if}
                {#if showSound}
                    <div class="aaMenu-section" transition:fade>
                        <SoundSettings audioPath="a01" {flagData} />
                    </div>
                {/if}
                {#if !animationDisabled && isCustomized}
                    <div class="aaMenu-section">
                        <SelectAnimation
                            previewType="primary"
                            flagPath="PrimaryAnimation"
                            sectionTitle="Primary Animation"
                            {flagData}
                            bind:animType
                            bind:menuType
                        />
                        {#if animType}
                            <Options {animType} {menuType} {flagData} />
                            <SoundSettings audioPath="a01" {flagData} />
                            {#if animType === "melee"}
                                <h1>Melee Range Switch</h1>
                                <RangeSwitch {flagData} />
                            {/if}
                        {/if}
                    </div>
                    {#if animType === "melee" || animType === "range" || animType === "static"}
                        <div class="aaMenu-section">
                            <ExplosionSettings {flagData} />
                        </div>
                    {/if}
                {/if}
            </div>
        {/if}
        {#if focusExtra}
            <div class="aaMidSection" transition:fade>
                <div class="aaMenu-section">
                    <div class="aa-5wide">
                        <div
                            class="flexcol aa-button-labels"
                            style="grid-row: 1 / 2; grid-column: 1 / 2"
                        >
                            <label
                                for=""
                                class={enableSource
                                    ? "selected"
                                    : "notSelected"}
                                style="border: 2px outset #dddddd">Source</label
                            >
                        </div>
                        {#if enableSource}
                        <div
                            class="flexcol"
                            style="grid-row:1/2; grid-column:2/3"
                        >
                            <label
                                for=""
                                style="align-self:center"
                                transition:fade
                                ><i class="fas fa-arrow-right fa-2xl" /></label
                            >
                        </div>
                        {/if}
                        <div
                            class="flexcol aa-button-labels"
                            style="grid-row: 1 / 2; grid-column: 3 / 4"
                        >
                            <label
                                for=""
                                class="selected"
                                style="border: 2px outset #dddddd"
                                >Primary</label
                            >
                        </div>
                        {#if enableTarget}
                        <div
                            class="flexcol"
                            style="grid-row:1/2; grid-column:4/5"
                        >
                            <label
                                for=""
                                style="align-self:center"
                                transition:fade
                                ><i class="fas fa-arrow-right fa-2xl" /></label
                            >
                        </div>
                        {/if}
                        <div
                            class="flexcol aa-button-labels"
                            style="grid-row: 1 / 2; grid-column: 5 / 6"
                        >
                            <label
                                for=""
                                class={enableTarget
                                    ? "selected"
                                    : "notSelected"}
                                style="border: 2px outset #dddddd">Target</label
                            >
                        </div>
                    </div>
                    <div
                        class="flexcol aa-extraFX-hint"
                        style="grid-row:2/3; grid-column:1/6"
                    >
                        <label for="" style="align-self:center"
                            >Requires use of a Primary Animation, either
                            Customized or Autorec</label
                        >
                    </div>
                </div>
                <div class="aaMenu-section">
                    <ExtraFX flagPath="sourceExtraFX" {flagData} />
                </div>
                <div class="aaMenu-section">
                    <ExtraFX flagPath="targetExtraFX" {flagData} />
                </div>
            </div>
        {/if}
        {#if focus3d}
            <div class="aaMidSection" transition:fade>
                <div class="aaMenu-section">
                    <Menu3d {flagData} />
                </div>
            </div>
        {/if}
        <div class="aaBottomSection" style="margin-bottom: 5px">
            <div class="aa-submit">
                <div class="flexcol" style="grid-row:1/2; grid-column:1/2">
                    <button class="footer-button" type="submit">Submit</button>
                </div>
                <div class="flexcol" style="grid-row:1/2; grid-column:2/3">
                    <button
                        class="footer-button"
                        on:click|preventDefault={closeApp}
                        >Close and Submit</button
                    >
                </div>
            </div>
        </div>
    </form>
</ApplicationShell>

<style lang="scss">
    .aa-tabs {
        display: grid;
        grid-template-columns: 40% 30% 30%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 2%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-tabs button {
        border-radius: 10px;
        border: 2px groove rgb(204, 204, 204);
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
    }
    .aa-submit {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 2%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-submit button {
        border-radius: 10px;
        border: 2px outset #dddddd;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
    }
    .aaMenu-section {
        background: rgba(225, 225, 225, 0.85);
        border: 2px solid black;
        border-radius: 10px;
        margin: 3% 3% 3% 3%;
    }
    .footer-button {
        border-radius: 5px;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aaTopSection {
        position: absolute;
        top: 30px;
        left: 1%;
        right: 0;
        background: rgb(204, 204, 204);
        border: 2px solid black;
        border-radius: 10px;
        margin-left: 2%;
        margin-right: 4%;
    }
    .aaMidSection {
        position: absolute;
        left: 0;
        right: 0;
        top: 88px;
        bottom: 51px;
        overflow: scroll;
    }
    .aaBottomSection {
        position: absolute;
        bottom: 0;
        left: 1%;
        right: 0;
        margin-right: 4%;
        margin-left: 2%;
        background: rgb(204, 204, 204);
        border: 2px solid black;
        border-radius: 10px;
    }
    .selected {
        background-color: rgba(25, 175, 2, 0.4);
        transition: background-color 0.5s;
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.4);
        transition: background-color 0.5s;
    }
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
        color: black;
    }
    .aa-5wide {
        display: grid;
        grid-template-columns: 30% 5% 30% 5% 30%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-extraFX-hint label {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-button-labels label {
        border-radius: 10px;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        padding: 5px;
        text-align: center;
        width: 100%;
        border: 2px outset #dddddd;
    }
</style>
