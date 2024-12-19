import { writable }         from "svelte/store";

import { TJSDialog }        from '#runtime/svelte/application';

import OptionsInfo          from './optionsInfo/optionsInfo.svelte';

import { sessionConstants } from "#constants";
import { aaSessionStorage } from "#sessionStorage";

export default class OptionsDialog extends TJSDialog {
    static #app;
    static #tabStore = writable("melee");
    static #presetStore = writable("proToTemp")

    constructor(data) {
        super({
            title: 'Options Info',
            resizable:true,
            content: {
                class: OptionsInfo,
                props: {
                    ...data,
                    storageStore: aaSessionStorage.getStore(sessionConstants.optionsInfoAppState),
                    tabStore: OptionsDialog.#tabStore,
                    presetStore: OptionsDialog.#presetStore,
                }
            },
        });

        try
        {
            // Attempt to parse session storage item and set to application state.
            this.state.set(aaSessionStorage.getItem(sessionConstants.optionsInfoAppState));
        }
        catch (err) { /**/ }
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            minimizable: true,
            width: 600,
            height: 600,
            closeOnSubmit: true,
            id: `OptionsInformation`,
        })
    }

    /**
     * Close the instance of OptionsInformation and remove reference to single static app reference.
     *
     * @inheritDoc
     */
    async close(options) {
        await super.close(options);

        OptionsDialog.#app = void 0;
    }

    /**
     * Show a single static instance of OptionsInformation; if it is already open then bring it to top.
     */
    static show(tabId, presetId) {
        OptionsDialog.#tabStore.set(tabId);
        OptionsDialog.#presetStore.set(presetId || "proToTemp");

        if (this.#app)
        {
            this.#app.bringToTop();
        }
        else
        {
            this.#app = new OptionsDialog().render(true, { focus: true });
        }
    }
}
