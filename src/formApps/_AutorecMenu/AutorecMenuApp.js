import { SvelteApplication }    from '@typhonjs-fvtt/runtime/svelte/application';

import { AutorecAppShell }      from './components';

export default class AutorecMenuApp extends SvelteApplication {
    /** @inheritDoc */
    constructor(options) { super(options); }

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
                target: document.body
            }
        });
    }

    /**
     * @inheritDoc
     */
    async close(options) {
        Object.values(ui.windows).filter(app => app.id === "Options-Information" ||
         app.id === "Autorec-Video-Preview").forEach(app => app.close());

        return super.close(options);
    }
}
