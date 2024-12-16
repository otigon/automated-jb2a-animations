import { TJSDialog } from '#runtime/svelte/application';

import FullVideoPreview from "./autorecPreviews.svelte";

import { sessionConstants } from "#constants";
import { aaSessionStorage } from "#sessionStorage";

export default class TotalPreview extends TJSDialog {
    static #app;

    constructor(data) {
        super({
            title: 'Video Preview',
            resizable: true,
            zIndex: null,
            content: {
                class: FullVideoPreview,
                props: {
                    ...data,
                    storageStore: aaSessionStorage.getStore(sessionConstants.videoPreviewAppState)
                }
            }
        }, { minimizable: false });

        try
        {
            // Attempt to parse session storage item and set to application state.
            this.state.set(aaSessionStorage.getItem(sessionConstants.videoPreviewAppState));
        }
        catch (err) { /**/ }
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            minimizable: true,
            width: "auto",
            height: "auto",
            closeOnSubmit: true,
            id: `AA-Video-Preview`,
        })
    }

    /**
     * Close the instance of TotalVideo and remove reference to single static app reference.
     *
     * @inheritDoc
     */
    async close(options) {
        await super.close(options);

        TotalPreview.#app = void 0;
    }

    /**
     * Show a single static instance of TotalVideo; if it is already open then bring it to top.
     */
    static show() {
        if (this.#app)
        {
            this.#app.bringToTop();
        }
        else
        {
            this.#app = new TotalPreview().render(true, { focus: true });
        }
    }
}
