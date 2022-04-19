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
    //import { menuAnimType } from "./menuStore.js"

    import { flagMigrations } from "./../../system-handlers/flagMerge.js"

    export let elementRoot;
    export let item;
    export const flags = item.data?.flags?.autoanimations || {};
    console.log(flags)

    let animationDisabled = flags.killAnim;
    let isCustomized;
    $: isCustomized = isCustomized

    export const flagData = {
        killAnim: flags.killAnim,
        animLevel: flags.animLevel,
        override: flags.override,
        animType: flags.animType,
        animation: flags.animation,
        color: flags.color,
        version: flags.version ? flags.version : Object.keys(flagMigrations.migrations).map(n => Number(n)).reverse()[0],

        options: flags.options || {},
        explosions: flags.explosions || {},
        audio: flags.audio || {},
        autoOverride: flags.autoOverride || {},
        macro: flags.macro || {},
        levels3d: flags.levels3d || {},
        sourceToken: flags.sourceToken || {},
        targetToken: flags.targetToken || {},
    }
    let animType;
    $: animType = animType;
    /*
    let menuSelection = flagData.animType || "";
    menuAnimType.subscribe(value => {
        menuSelection = value;
    })
    */
    let form;
    const { application } = getContext('external');

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
                }
            }
        }
        await item.update(updatedFlags.data)
    }

    async function closeApp () {
        const updatedFlags = {
            data: {
                flags: {
                    autoanimations: flagData,
                }
            }
        }
        await item.update(updatedFlags.data)
        application.close();
    }

    let primaryTab = true;
    $: focusPrimary = primaryTab;

    let extraTab = false;
    $: focusExtra = extraTab;

    let tab3d = false;
    $: focus3d = tab3d;

    function switchPrimary() {
        primaryTab = !primaryTab;
        extraTab = false;
        tab3d = false;
    }
    function switchExtra() {
        extraTab = !extraTab;
        primaryTab = false;
        tab3d = false;
    }
    function switch3d() {
        tab3d = !tab3d;
        primaryTab = false;
        extraTab = false;
    }

    let explosionEnabled = flagData.explosions.enable;
    let explosionLabel = explosionEnabled ? "Enabled" : "Disabled";
    $: explosionLabel = explosionLabel;
    $: flagData.explosions.enable = explosionEnabled;
    function switchExplosionLabel () {
        explosionEnabled = !explosionEnabled;
        explosionLabel = explosionEnabled ? "Enabled" : "Disabled";
        flagData.explosions.enable = explosionEnabled;
    }

</script>

<svelte:options accessors={true}/>

<ApplicationShell
    bind:elementRoot
    transition={scale}
    transitionOptions={{ duration: 500 }}
>
    <form bind:this={form} on:submit|preventDefault={applyFlags} autocomplete="off" id="item-menu-aa" class="overview">
        <div class='form-group tabView aaTopSection'>
            <button class="{focusPrimary ? "selected" : "notSelected"}" on:click={() => switchPrimary()}><i class="fas fa-bomb"></i> {localize("AUTOANIM.primary")} {localize("AUTOANIM.animation")}</button>
            <button class="{focusExtra ? "selected" : "notSelected"}" on:click={() => switchExtra()}><i class="fas fa-user-plus"></i> {localize("AUTOANIM.extra")} {localize("AUTOANIM.effects")}</button>
            <button class="{focus3d ? "selected" : "notSelected"}" on:click={() => switch3d()}><i class="fas fa-vr-cardboard"></i> 3D Canvas</button>
        </div>
        {#if focusPrimary}
        <div class="aaMidSection">
            <div class="generalSettings">
            <GeneralSettings bind:animationDisabled bind:isCustomized {flagData}/>
            </div>
            {#if !animationDisabled && isCustomized}
            <div style="padding-top: 10px">
            <h1>Primary Animation</h1>
            </div>
            <SelectAnimation flagPath="PrimaryAnimation" {flagData} bind:animType/>
            {#if animType}
            <Options {flagData} />
            <SoundSettings audioPath="a01" {flagData} />
            <div style="padding-top: 10px">
            <h1>Explosion</h1>
            </div>
            <div class=aa-3wide>
                <div style='grid-row:1/2; grid-column:2/3'>
                    <button class="oldCheck {explosionEnabled ? "selected" : "notSelected"}" on:click={() => switchExplosionLabel()}>{explosionLabel}</button>
                </div>
            </div>
            {#if explosionEnabled}
            <ExplosionSettings {flagData}/>
            {/if}
            {/if}
            {/if}
        </div>
        {/if}
        <div class="form-group tabView aaBottomSection">
            <button class="footer-button" type="submit">Submit</button>
            <button class="footer-button" on:click|preventDefault={closeApp}>Close and Submit</button>
        </div>
    </form>
</ApplicationShell>
<style lang="scss">
    .footer-button {
        border-radius: 5px;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .tabView button {
        border-radius: 10px;
        border: 2px solid black;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aaTopSection {
        position: absolute;
        top:30px;
        height: 45px;
        left: 0;
        right: 0;
        border-bottom: 2px solid rgba(21, 21, 21, 0.6);
        margin-right: 3%
    }
    .aaMidSection {
        position: absolute;
        left:0;
        right:0;
        top: 78px;
        bottom: 40px;
        overflow: scroll;
    }
    .aaBottomSection {
        position: absolute;
        bottom: 0;
        height: 45px;
        left: 0;
        right: 0;
        border-top: 2px solid rgba(21, 21, 21, 0.6);
        margin-right: 3%
    }
    .tabView {
        margin-left: 1%;
        margin-right: 1%;
    }
    .selected {
        background-color:rgba(25, 175, 2, 0.25);
        transition: background-color 0.5s
    }
    .notSelected {
        background-color: rgba(219, 132, 2, 0.25);
        transition: background-color 0.5s
    }
    .generalSettings {
        border-bottom: 2px solid rgba(21, 21, 21, 0.6);
    }
    h1 {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: x-large;
        font-weight: bold;
        text-align: center;
        margin-right: 5%;
        margin-left: 5%;
    }
    .aa-3wide {
        display: grid;
        grid-template-columns: 33.3% 33.3% 33.3%;
        grid-gap: 5px;
        padding: 5px;
        align-items: center;
        margin-right: 8%;
        margin-left: 5%;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
    .aa-3wide button {
        border-radius: 10px;
        border: 2px solid black;
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-size: large;
        font-weight: bold;
    }
</style>

