<script>
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { getContext } from "svelte";
    import AutorecShim from "./appShim.js"

    const { application } = getContext("external");

    export let app;

    async function restoreDefault() {
        let d = TJSDialog.confirm({
            title: "WARNING!!",
            content: `<p style="text-align:center">This will <strong>ERASE</strong> your current Menu. <strong>ARE YOU SURE?</strong></p>`,
            yes: () => setDefault(),
            no: () => console.log("Exiting without default restore"),
            defaultYes: false,
        });

        async function setDefault() {
            const wait = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
            game.settings.set("autoanimations", "aaAutorec");
            app.close();
            application.close();
            await wait (1000)
            new AutorecShim()
        }
    }
</script>

<div
    class="flexcol aa-tabs"
    style="border-bottom: 3px inset rgba(0, 0, 0, 0.5);"
>
    <div style="grid-row:1/2;grid-column:1/2">
        <button on:click|preventDefault={restoreDefault} class="aa-orange"
            >Restore Default Menu</button
        >
    </div>
    <div style="grid-row:1/2;grid-column:2/3">
        <label for=""
            >Erase current Menu and restore default configuration</label
        >
    </div>
</div>
<div
    class="flexcol aa-tabs"
    style="border-bottom: 3px inset rgba(0, 0, 0, 0.5);"
>
    <div style="grid-row:2/3;grid-column:1/2">
        <button class="aa-green">Merge Menus</button>
    </div>
    <div style="grid-row:2/3;grid-column:2/3">
        <label for="">Merge a new Menu into your existing Menu</label>
    </div>
</div>
<div class="flexcol aa-tabs">
    <div style="grid-row:3/4;grid-column:1/2">
        <button class="aa-red">Overwrite Menu</button>
    </div>
    <div style="grid-row:3/4;grid-column:2/3">
        <label for="">Erase current Menu and import a new Menu</label>
    </div>
</div>

<style lang="scss">
    .aa-green {
        background-color: rgba(25, 175, 2, 0.4);
    }
    .aa-orange {
        background-color: rgba(219, 132, 2, 0.4);
    }
    .aa-red {
        background-color: rgba(219, 38, 2, 0.4);
    }
    .aa-tabs {
        display: grid;
        grid-template-columns: 40% 60%;
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
        color: black;
    }
</style>
