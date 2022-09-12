import { SvelteApplication }    from "@typhonjs-fvtt/runtime/svelte/application";

import MenuManagerApp           from "./MenuManagerAppShell.svelte"

export default class MenuManager extends SvelteApplication {
    /** @inheritDoc */
    constructor(options)
    {
        super(options);

    }

    /**
     *
     */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            title: `Menu Manager`,
            id: `Autorec-Menu-Manager`,
            zIndex: 102,
            resizable: true,
            minimizable: true,
            width: 575,
            height: 325,
            minWidth: 475,

            svelte: {
                class: MenuManagerApp,
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
