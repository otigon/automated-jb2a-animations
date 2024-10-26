<script>
    import { getContext }       from "svelte";

    import { TJSDialog }        from "#runtime/svelte/application";
    import { localize }         from "#runtime/util/i18n";

    import { AAAutorecManager } from "./AAAutorecManager";
    import ImportMenus          from "./ImportMenus.svelte";

    const { application } = getContext("#external");

    async function restoreDefault() {
        TJSDialog.confirm({
            modal: true,
            title: "WARNING!!",
            content: `<p style="font-weight: bold; text-align: center; font-size: medium;">This will ERASE your current Menu. ARE YOU SURE?</p>
                    <br>
                    <p style="text-align: center; font-size: small;">A Backup will be Exported for Insurance</p> `,
            onYes: () => setDefault(),
            onNo: () => console.log("Exiting without default restore"),
            defaultYes: false,
        });

        async function setDefault() {
            AAAutorecManager.exportMenu("-backup")
            Hooks.call("AutomaticAnimations.Clear.Data");
            application.close();
        }
    }

    async function mergeMenu() {
        TJSDialog.confirm({
            title: "WARNING!!",
            modal: true,
            content: `<p style="text-align:center">This will <strong>Merge</strong> menus and is <strong>IRREVERSIBLE. Continue?</strong></p>`,
            onYes: () => getFiles(),
            onNo: () => console.log("Exiting without default restore"),
            defaultYes: false,
        });

        async function getFiles() {
            const content = await renderTemplate(
                "modules/autoanimations/htmlTemplate/import-data.html",
                { entity: "autoanimations", name: "aaAutorec" }
            );
            TJSDialog.prompt({
                title: "Merge Menus",
                content: content,
                modal: true,
                onOk: (app) => {
                    //@ts-ignore
                    const form = app.element.find("form")[0];
                    if (!form.data.files.length)
                        return ui.notifications?.error(
                            "You did not upload a data file!"
                        );
                    readTextFromFile(form.data.files[0]).then(async (json) => {
                        selectMenus(json, "merge");
                        await application.close();
                    });
                },
            });
        }
    }

    function selectMenus(json, option) {
        new TJSDialog({
            modal: true,
            title: "IMPORT SETTINGS",
            content: {
                class: ImportMenus,
                props: {
                    type: option,
                    menu: json,
                },
            },
            defaultYes: false,
        }).render(true);
    }

    async function overwriteMenu() {
        TJSDialog.confirm({
            title: "WARNING!!",
            modal: true,
            content: `<p style="text-align:center">This will <strong>ERASE</strong> your current menu and is <strong>IRREVERSIBLE. Continue?</strong></p>`,
            onYes: () => getFiles(),
            onNo: () => console.log("Exiting without overwrite"),
            defaultYes: false,
        });

        async function getFiles() {
            const content = await renderTemplate(
                "modules/autoanimations/htmlTemplate/import-data.html",
                { entity: "autoanimations", name: "aaAutorec" }
            );
            TJSDialog.prompt({
                title: "Overwrite Menu",
                content: content,
                modal: true,
                onOk: (app) => {
                    const form = app.element.find("form")[0];
                    if (!form.data.files.length)
                        return ui.notifications?.error(
                            "You did not upload a data file!"
                        );
                    readTextFromFile(form.data.files[0]).then(async (json) => {
                        selectMenus(json, "overwrite");
                        await application.close();
                    });
                },
            });
        }
    }

    async function exportMenu() {
        AAAutorecManager.exportMenu(`-${game.system.id}`)
        application.close();
    }
</script>

<div class="flexcol aa-tabs">
    <div style="grid-row:1/2;grid-column:1/2">
        <button on:click={() => restoreDefault()} class="aa-orange"
            >{localize("autoanimations.settings.restoreDefault")}</button
        >
    </div>
    <div style="grid-row:1/2;grid-column:2/3">
        <label for="">{localize("autoanimations.settings.restoreHint")}</label>
    </div>
</div>
<div class="flexcol aa-tabs">
    <div style="grid-row:2/3;grid-column:1/2">
        <button on:click|preventDefault={() => mergeMenu("merge")}
                class="aa-green">
            {localize("autoanimations.menus.merge")}
            {localize("autoanimations.menus.menu")}
        </button>
    </div>
    <div style="grid-row:2/3;grid-column:2/3">
        <label for="">{localize("autoanimations.settings.mergeHint")}</label>
    </div>
</div>
<div class="flexcol aa-tabs">
    <div style="grid-row:3/4;grid-column:1/2">
        <button on:click={() => overwriteMenu("overwrite")} class="aa-red"
            >{localize("autoanimations.menus.overwrite")}
            {localize("autoanimations.menus.menu")}</button
        >
    </div>
    <div style="grid-row:3/4;grid-column:2/3">
        <label for="">{localize("autoanimations.settings.overwriteHint")}</label
        >
    </div>
</div>
<div class="flexcol aa-tabs">
    <div style="grid-row:4/5;grid-column:1/2">
        <button on:click|preventDefault={() => exportMenu()} class="aa-blue"
            >{localize("autoanimations.menus.export")}
            {localize("autoanimations.menus.menu")}</button
        >
    </div>
    <div style="grid-row:4/5;grid-column:2/3">
        <label for="">{localize("autoanimations.settings.exportHint")}</label>
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
        grid-template-columns: 40% 59%;
        grid-gap: 1%;
        padding: 5px;
        align-items: center;
        align-content: center;
        border: 2px inset grey;
        background: rgb(190, 190, 190);
        border-radius: 5px;
        margin-bottom: 5px;
    }
    .aa-tabs button {
        border-radius: 10px;
        border: 2px groove rgb(204, 204, 204);
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: large;
        color: black;
        line-height: 2em;
    }
</style>
