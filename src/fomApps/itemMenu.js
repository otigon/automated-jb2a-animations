import { SvelteApplication } from '@typhonjs-fvtt/runtime/svelte/application';

import ItemMenuAppShell from './itemMenuAppShell.svelte';

export default class AAItemMenu extends SvelteApplication {
    
    constructor(item, options = {}, dialogData = {}) {

        super({
            title: "New Item Menu",
            zIndex: 102,
            svelte: {
                class: itemMenuAppShell,
                target: document.body,
                props: {
                    item
                }
            },
            close: () => this.options.reject(),
            ...options
        }, dialogData);

    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            closeOnSubmit: false,
            width: 350,
            height: "auto",
            classes: ["dnd5e dialog"]
        })
    }

    async close(options) {
        super.close(options);
        Hooks.off('updateItem', this.hookId);
    }
}