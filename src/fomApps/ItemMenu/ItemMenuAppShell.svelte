<script>
    import { getContext } from "svelte";
    import { fade, scale } from "svelte/transition";
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { ApplicationShell } from "@typhonjs-fvtt/runtime/svelte/component/core";
    import SelectAnimation from "./components/SelectAnimation.svelte";
    import Options from "./components/options.svelte"


    export let elementRoot;

    let form;
    const application = getContext('external').application;
    application.reactive.storeAppOptions.resizable
    function onClick() {
        TJSDialog.prompt({
            title: "A modal dialog!",
            draggable: false,
            modal: true,
            content: "A cool modal dialog!", // You can set content with a Svelte component!
            label: "Ok",
        });
    }

</script>

<svelte:options accessors={true}/>

<ApplicationShell
    bind:elementRoot
    transition={scale}
    transitionOptions={{ duration: 1000 }}
>
    <form bind:this={form} on:submit|preventDefault autocomplete="off" id="item-menu-aa">
        <div class="damnit">
            LAST CHANCE BUCKO
        </div>    
        <SelectAnimation />
        <Options />
    </form>
</ApplicationShell>
<style lang="scss">
    .damnit {
        color: blue;
        font-size: large; 
    }
</style>

