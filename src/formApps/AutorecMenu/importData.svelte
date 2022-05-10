<script>
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { AutorecFunctions } from "../../aa-classes/autorecFunctions.js";

    async function overwriteMenu() {
        const content = await renderTemplate(
            "modules/autoanimations/src/custom-recognition/import-data.html",
            { entity: "autoanimations", name: "aaAutorec" }
        );
        let dialog = new Promise((resolve, reject) => {
            new Dialog(
                {
                    title: game.i18n.format("AUTOANIM.menuImport"),
                    content: content,
                    buttons: {
                        import: {
                            icon: '<i class="fas fa-file-import"></i>',
                            label: game.i18n.format("AUTOANIM.overwrite"),
                            callback: (html) => {
                                //@ts-ignore
                                const form = html.find("form")[0];
                                if (!form.data.files.length)
                                    return ui.notifications?.error(
                                        "You did not upload a data file!"
                                    );
                                readTextFromFile(form.data.files[0]).then(
                                    async (json) => {
                                        await application.close();
                                        //await app.close();
                                        AutorecFunctions._importAutorecFromJSON(
                                            json
                                        );
                                        resolve(true);
                                    }
                                );
                            },
                        },
                        no: {
                            icon: '<i class="fas fa-times"></i>',
                            label: "Cancel",
                            callback: (html) => resolve(false),
                        },
                    },
                    default: "import",
                },
                {
                    width: 600,
                }
            ).render(true);
        });
        return await dialog;
    }

    let dataPath = "";
    $: dataPath = dataPath;

    /*
    function moveForward() {
        if (!dataPath) {
            return ui.notifications?.error("You did not upload a data file!");
        }
        readTextFromFile(dataPath).then(async (json) => {
            //await application.close();
            //await app.close();
            AutorecFunctions._importAutorecFromJSON(json);
            resolve(true);
        });
    }

    */
    async function moveForward() {
        const content = await renderTemplate(
            "modules/autoanimations/src/custom-recognition/import-data.html",
            { entity: "autoanimations", name: "aaAutorec" }
        );
        let d = TJSDialog.confirm({
            title: "A Yes or No Question",
            content: "<p>Choose wisely.</p>",
            yes: {
                icon: '<i class="fas fa-file-import"></i>',
                label: game.i18n.format("AUTOANIM.overwrite"),
                callback: (html) => {
                    //@ts-ignore
                    const form = html.find("form")[0];
                    if (!form.data.files.length)
                        return ui.notifications?.error(
                            "You did not upload a data file!"
                        );
                    readTextFromFile(form.data.files[0]).then(async (json) => {
                        await application.close();
                        //await app.close();
                        AutorecFunctions._importAutorecFromJSON(json);
                        resolve(true);
                    });
                },
            },
            no: {
                icon: '<i class="fas fa-times"></i>',
                label: "Cancel",
                callback: (html) => resolve(false),
            },
            defaultYes: false,
        });
    }
</script>

<p
    style="font-weight: bold; text-align: center; font-size: medium; padding: 1.0rem 0;"
>
    <strong>Overwrite will delete your existing Menu</strong>
</p>
<div class="form-group">
    <label for="data">Upload Data File</label>
    <input type="file" bind:value={dataPath} name="data" />
</div>
<div>
    <button on:click={() => moveForward()}>Overwrite Menu</button>
</div>

<style lang="scss">
</style>
