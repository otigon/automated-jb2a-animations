import { SvelteApplication } from '@typhonjs-fvtt/runtime/svelte/application';
import AutoShellApp from './autorecAppShell.svelte';

export default class AAAutorecMenu extends SvelteApplication {
    #data;

    constructor(data) {
        super();
        this.#data = data;
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
            closeOnSubmit: true,
            minWidth: 500,

            svelte: {
                class: AutoShellApp,
                target: document.body,
                props: function() {
                    return { data: this.#data }
                }
            },
        });
    }

    /**
     * @inheritDoc
     */
    async close() {
        Object.values(ui.windows).filter(app => app.id === "Options-Information" ||
         app.id === "Autorec-Video-Preview").forEach(app => app.close());

        return super.close();
    }
}
