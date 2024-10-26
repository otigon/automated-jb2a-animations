import { SvelteApplication }    from "#runtime/svelte/application";

import { AutorecAppShell }      from "./components";
import AADiagnostics            from "../../troubleshooting/diagnosticsMenu.js";

import { constants }            from "#constants";
import { gameSettings }         from "#gameSettings";

export default class AutorecMenuApp extends SvelteApplication {
    /** @inheritDoc */
    constructor(options)
    {
        super(options);

        try {
            // Attempt to parse session storage item and set application state.
            this.state.set(JSON.parse(sessionStorage.getItem(`${constants.moduleId}-autorec-appstate`)));
        }
        catch (err) { /**/ }
    }

    /**
     *
     */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            title: `A-A Automatic Recognition Menu`,
            id: `AA-autorec-settings`,
            zIndex: 102,
            resizable: true,
            minimizable: true,
            width: 600,
            height: 750,
            minWidth: 550,

            svelte: {
                class: AutorecAppShell,
                target: document.body
            }
        });
    }

    /**
     * @inheritDoc
     */
    async close(options) {
        Object.values(ui.windows).filter(app => app.id === "Options-Information" ||
         app.id === "AA-Video-Preview" || app.id === "Autorec-Menu-Manager" || app.id === "AutomatedAnimations-Diagnostics").forEach(app => app.close());

        return super.close(options);
    }

    /**
     * Specify the set of config buttons which should appear in the Application header. Buttons should be returned as an
     * Array of objects.
     *
     * Provides an explicit override of Application._getHeaderButtons to add
     *
     * @returns {ApplicationHeaderButton[]} The app header buttons.
     * @override
     */
    _getHeaderButtons()
    {
        const buttons = super._getHeaderButtons();

        const showSettings = gameSettings.uiControl.showSettings;

        buttons.unshift({
            class: "settings",
            icon: showSettings ? "fa-regular fa-square-list" : "fa-regular fa-gear",
            label: showSettings ? "Main Menu" : "Settings",

            onPress: ({ button }) => {
                const newShowSettings = gameSettings.uiControl.swapShowSettings();

                button.icon = newShowSettings ? "fa-regular fa-square-list" : "fa-regular fa-gear";
                button.label = newShowSettings ? "Main Menu" : "Settings";
            }
        },
        {
            icon: "fas fa-stethoscope",
            label: "Diagnostics",

            onPress: () => {
                let diagnosticApp = new AADiagnostics();
                diagnosticApp.render(true, { focus: true });
            }
        });

        return buttons;
    }
}
