<script>
    import { TJSDialog } from "@typhonjs-fvtt/runtime/svelte/application";
    import { getContext } from "svelte";
    import { AutorecFunctions } from "../../aa-classes/autorecFunctions.js";

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
            const wait = (delay) =>
                new Promise((resolve) => setTimeout(resolve, delay));
            game.settings.set("autoanimations", "aaAutorec");
            //app.close();
            application.close();
            //await wait(1000);
            //new AutorecShim();
        }
    }

    async function mergeMenu() {
        let d = TJSDialog.confirm({
            title: "WARNING!!",
            content: `<p style="text-align:center">This will Merge menus and is <strong>IRREVERSIBLE. Continue?</strong></p>`,
            yes: () => importFromJSONDialog(),
            no: () => console.log("Exiting without default restore"),
            defaultYes: false,
        });

        async function importFromJSONDialog() {
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
                            merge: {
                                icon: '<i class="fas fa-file-import"></i>',
                                label: game.i18n.format("AUTOANIM.merge"),
                                callback: (html) => {
                                    //@ts-ignore
                                    const form = html.find("form")[0];
                                    if (!form.data.files.length)
                                        return ui.notifications?.error(
                                            "You did not upload a data file!"
                                        );
                                    readTextFromFile(form.data.files[0]).then(
                                        (json) => {
                                            mergeAutorecFile(json);
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
                    },
                    {
                        width: 600,
                    }
                ).render(true);
            });
            return await dialog;
        }

        async function mergeAutorecFile(json) {
            // Imported Autorec Menu
            const newData = JSON.parse(json);
            // Existing Autorec Menu
            const oldData = game.settings.get("autoanimations", "aaAutorec");
            // New Autorec Menu
            oldData.version = newData.version;
            oldData.search = "";

            let idx;

            const menuSections = [
                "melee",
                "range",
                "static",
                "templates",
                "auras",
                "preset",
                "aefx",
            ];

            await mergeMenus();

            async function mergeMenus() {
                for (var i = 0; i < menuSections.length; i++) {
                    if (!newData[menuSections[i]]) {
                        return;
                    }
                    // Resets IDX to 0
                    if (!oldData[menuSections[i]]) {
                        oldData[menuSections[i]] = {};
                    }
                    let sectionLength = Object.keys(
                        oldData[menuSections[i]]
                    ).length;
                    idx = sectionLength === 0 ? 0 : sectionLength;

                    // Sets Menu Section in new Merged Data
                    //mergedData[menuSections[i]] = {};

                    // Sets Old and New Names arrays from the Section, spaces removed and toLowerCase()
                    const newSectionNames = await getAllNamesInSection(
                        newData,
                        menuSections[i]
                    );
                    const oldSectionNames = await getAllNamesInSection(
                        oldData,
                        menuSections[i]
                    );

                    // If Existing Menu has no Section, check if New Menu has Section. If NO, return. If YES set Merged Section = New Section
                    if (!oldData[menuSections[i]]) {
                        if (!newData[menuSections[i]]) {
                            oldData[menuSections[i]] = {};
                            return;
                        } else {
                            oldData[menuSections[i]] = newData[menuSections[i]];
                            return;
                        }
                    }

                    // Compare Existing versus New and build new Merged Object for Section
                    //await checkOldData(oldData, oldSectionNames, newSectionNames, menuSections[i]);
                    await checkNewData(
                        newData,
                        oldSectionNames,
                        newSectionNames,
                        menuSections[i]
                    );
                }
            }

            async function getAllNamesInSection(obj, type) {
                const nameArray = [];
                try {
                    Object.keys(obj[type]).length;
                } catch (exception) {
                    return nameArray;
                }
                const arrayLength = Object.keys(obj[type]).length;
                for (var i = 0; i < arrayLength; i++) {
                    if (!obj[type][i].name) {
                        continue;
                    }

                    nameArray.push(
                        obj[type][i].name.replace(/\s+/g, "").toLowerCase()
                    );
                }
                return nameArray;
            }

            async function findObjectByName(data, type, name) {
                var newObject = Object.values(data[type])
                    .sort(
                        (a, b) =>
                            b.name.replace(/\s+/g, "").length -
                            a.name.replace(/\s+/g, "").length
                    )
                    .find((section) => {
                        //cutting out all spaces
                        return name.includes(
                            section.name.replace(/\s+/g, "").toLowerCase()
                        )
                            ? section
                            : "";
                    });

                return newObject;
            }
            async function checkNewData(newData, oldArray, newArray, section) {
                let newDataLength = Object.keys(newData[section]).length;
                for (var i = 0; i < newDataLength; i++) {
                    if (oldArray.includes(newArray[i])) {
                        continue;
                    } else {
                        let newSection = await findObjectByName(
                            newData,
                            section,
                            newArray[i]
                        );
                        oldData[section][idx] = newSection;
                        idx = idx + 1;
                    }
                }
            }

            await game.settings.set("autoanimations", "aaAutorec", oldData);
            //await autoRecMigration.handle(
            //game.settings.get("autoanimations", "aaAutorec")
            //);
        }
    }
    async function overwriteMenu() {
        let d = TJSDialog.confirm({
            title: "WARNING!!",
            content: `<p style="text-align:center">This will ERASE your current menu and is <strong>IRREVERSIBLE. Continue?</strong></p>`,
            yes: () => importFromJSONDialog(),
            no: () => console.log("Exiting without default restore"),
            defaultYes: false,
        });

        async function importFromJSONDialog() {
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
                                            await app.close();
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
        <button on:click|preventDefault={() => overwriteMenu()} class="aa-red"
            >Overwrite Menu</button
        >
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
