<script>
    import { getContext } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import SelectAnimation from "./components/SelectAnimation.svelte";
    import Options from "./components/options.svelte";
    import GeneralSettings from "./components/generalSettings.svelte";
    import { flagMigrations } from "./../../system-handlers/flagMerge.js"

    export let elementRoot;
    let animationDisabled = false;
    let isCustomized;
    let animType;

    export let item;
    export const flags = item.data?.flags?.autoanimations || {};
    console.log(flags)

    export const flagData = {
        killAnim: flags.killAnim,
        animLevel: flags.animLevel,
        override: flags.override,
        animType: flags.animType,
        animation: flags.animation,
        color: flags.color,
        version: flags.version ? flags.version : Object.keys(flagMigrations.migrations).map(n => Number(n)).reverse()[0],

        options: flags.options || {},
        autoOverride: flags.autoOverride || {},
        macro: flags.macro || {},
        levels3d: flags.levels3d || {},
        sourceToken: flags.sourceToken || {},
        targetToken: flags.targetToken || {},
    }

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
</script>

<svelte:options accessors={true}/>

<ApplicationShell
    bind:elementRoot
    transition={scale}
    transitionOptions={{ duration: 500 }}
>
    <form bind:this={form} on:submit|preventDefault={applyFlags} autocomplete="off" id="item-menu-aa">
        <GeneralSettings bind:animationDisabled bind:isCustomized {flagData}/>
        {#if !animationDisabled}
        {#if isCustomized}
        <SelectAnimation {flagData} bind:animType/>
        {#if flagData.animType}
        <Options {flagData}/>
        {/if}
        {/if}
        {/if}
        <div class="form-group">
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
</style>

