import { get, writable } from 'svelte/store';

import {
    SvelteApplication,
    TJSDialog }         from "@typhonjs-fvtt/runtime/svelte/application";

import {
    AutorecAppShell }   from "./components";

import { constants }    from "../../constants.js";

export default class AutorecMenuApp extends SvelteApplication {
    /**
     * Keeps a reference to any open game settings dialog.
     * @type {TJSDialog}
     */
    #settingsDialog;

    #showSettings = writable(this.#showSettingsValue);

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
            title: `A-A Automatic Recognition Menu New`,
            id: `AA-autorec-settings-New`,
            zIndex: 102,
            resizable: true,
            minimizable: true,
            width: 600,
            height: 750,
            minWidth: 550,

            svelte: {
                class: AutorecAppShell,
                target: document.body,
                props: function() {
                    return { showSettings: this.#showSettings };
                }
            }
        });
    }

    /**
     * @inheritDoc
     */
    async close(options) {
        Object.values(ui.windows).filter(app => app.id === "Options-Information" ||
         app.id === "AA-Video-Preview" || app.id === "Autorec-Menu-Manager").forEach(app => app.close());

        // Close any associated settings dialog.
        if (this.#settingsDialog)
        {
            this.#settingsDialog.close();
            this.#settingsDialog = void 0;
        }

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

        const getShowSettings = () => get(this.#showSettings);
        const swapShowSettings = () =>
        {
            const newValue = !get(this.#showSettings);
            this.#showSettings.set(newValue);
            return newValue;
        }

        const showSettings = getShowSettings();

        buttons.unshift({
            class: 'settings',
            icon: showSettings ? 'fa-regular fa-square-list' : 'fa-regular fa-gear',
            label: showSettings ? 'Main Menu' : 'Settings',

            onclick: function()
            {
                const newShowSettings = swapShowSettings();

                this.icon = newShowSettings ? 'fa-regular fa-square-list' : 'fa-regular fa-gear';
                this.label = newShowSettings ? 'Main Menu' : 'Settings';
            }
        });

        return buttons;
    }
}
