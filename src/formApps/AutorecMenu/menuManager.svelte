<script>
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { getContext } from "svelte";
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
    import { AutorecFunctions } from "../../aa-classes/autorecFunctions.js";

    const { application } = getContext("external");

    async function restoreDefault() {
        let d = TJSDialog.confirm({
            modal: true,
            title: "WARNING!!",
            content: `<p style="font-weight: bold; text-align: center; font-size: medium;">This will ERASE your current Menu. ARE YOU SURE?</p>
                    <br>
                    <p style="text-align: center; font-size: small;">A Backup will be Exported for Insurance</p> `,
            yes: () => setDefault(),
            no: () => console.log("Exiting without default restore"),
            defaultYes: false,
        });

        async function setDefault() {
            const oldData = game.settings.get("autoanimations", "aaAutorec");
            const filename = `Default-Restore-Menu-Recovery.json`;
            saveDataToFile(
                JSON.stringify(oldData, null, 2),
                "text/json",
                filename
            );
            ui.notifications.info(
                "Exporting Menu Backup before Restoring Default"
            );

            game.settings.set("autoanimations", "aaAutorec");
            application.close();
        }
    }

    async function mergeMenu() {
        let d = TJSDialog.confirm({
            title: "WARNING!!",
            modal: true,
            content: `<p style="text-align:center">This will <strong>Merge</strong> menus and is <strong>IRREVERSIBLE. Continue?</strong></p>`,
            yes: () => getFiles(),
            no: () => console.log("Exiting without default restore"),
            defaultYes: false,
        });

        async function getFiles() {
            const content = await renderTemplate(
                "modules/autoanimations/src/custom-recognition/import-data.html",
                { entity: "autoanimations", name: "aaAutorec" }
            );
            let d = TJSDialog.prompt({
                title: "Merge Menus",
                content: content,
                modal: true,
                callback: (html) => {
                    //@ts-ignore
                    const form = html.find("form")[0];
                    if (!form.data.files.length)
                        return ui.notifications?.error(
                            "You did not upload a data file!"
                        );
                    readTextFromFile(form.data.files[0]).then(async (json) => {
                        await application.close();
                        AutorecFunctions._mergeAutorec(json);
                    });
                },
            });
            return await d;
        }
    }

    async function overwriteMenu() {
        let d = TJSDialog.confirm({
            title: "WARNING!!",
            modal: true,
            content: `<p style="text-align:center">This will <strong>ERASE</strong> your current menu and is <strong>IRREVERSIBLE. Continue?</strong></p>`,
            yes: () => getFiles(),
            no: () => console.log("Exiting without overwrite"),
            defaultYes: false,
        });

        async function getFiles() {
            const content = await renderTemplate(
                "modules/autoanimations/src/custom-recognition/import-data.html",
                { entity: "autoanimations", name: "aaAutorec" }
            );
            let d = TJSDialog.prompt({
                title: "Overwrite Menu",
                content: content,
                modal: true,
                callback: (html) => {
                    const form = html.find("form")[0];
                    if (!form.data.files.length)
                        return ui.notifications?.error(
                            "You did not upload a data file!"
                        );
                    readTextFromFile(form.data.files[0]).then(async (json) => {
                        await application.close();
                        AutorecFunctions._importAutorecFromJSON(json);
                    });
                },
            });
            return await d;
        }
    }
    function exportMenu() {
        AutorecFunctions._exportAutorecToJSON();
    }
</script>

<div
    class="flexcol aa-tabs"
    style="border-bottom: 3px inset rgba(0, 0, 0, 0.5);"
>
    <div style="grid-row:1/2;grid-column:1/2">
        <button
            on:click|preventDefault={() => restoreDefault()}
            class="aa-orange">{localize("autoanimations.settings.restoreDefault")}</button
        >
    </div>
    <div style="grid-row:1/2;grid-column:2/3">
        <label for=""
            >{localize("autoanimations.menus.restoreHint")}</label
        >
    </div>
</div>
<div
    class="flexcol aa-tabs"
    style="border-bottom: 3px inset rgba(0, 0, 0, 0.5);"
>
    <div style="grid-row:2/3;grid-column:1/2">
        <button on:click|preventDefault={() => mergeMenu()} class="aa-green"
            >{localize("autoanimations.menus.merge")} {localize("autoanimations.menus.menu")}</button
        >
    </div>
    <div style="grid-row:2/3;grid-column:2/3">
        <label for="">{localize("autoanimations.menus.mergeHint")}</label>
    </div>
</div>
<div
    class="flexcol aa-tabs"
    style="border-bottom: 3px inset rgba(0, 0, 0, 0.5);"
>
    <div style="grid-row:3/4;grid-column:1/2">
        <button on:click|preventDefault={() => overwriteMenu()} class="aa-red"
            >{localize("autoanimations.menus.overwrite")} {localize("autoanimations.menus.menu")}</button
        >
    </div>
    <div style="grid-row:3/4;grid-column:2/3">
        <label for="">{localize("autoanimations.menus.overwriteHint")}</label>
    </div>
</div>
<div class="flexcol aa-tabs">
    <div style="grid-row:4/5;grid-column:1/2">
        <button on:click|preventDefault={() => exportMenu()} class="aa-blue"
            >{localize("autoanimations.menus.export")} {localize("autoanimations.menus.menu")}</button
        >
    </div>
    <div style="grid-row:4/5;grid-column:2/3">
        <label for="">{localize("autoanimations.menus.exportHint")}</label>
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
    .aa-blue {
        background-color: rgba(21, 154, 169, 0.4);
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
