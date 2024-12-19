import { TJSDialog }        from "#runtime/svelte/application";

import MenuManagerContent   from "./MenuManager.svelte";

export default class MenuManager extends TJSDialog {
    static #app

    /** @inheritDoc */
    constructor()
    {
        super({
            title: 'Menu Manager',
            resizable: false,
            content: {
                class: MenuManagerContent,
            }
        }, {
            id: `Autorec-Menu-Manager`,
            minimizable: false,
            width: 'auto',
            height: 'auto'
        });
    }

    /**
     * @inheritDoc
     */
    async close(options) {
        Object.values(ui.windows).filter(app => app.id === "Options-Information" ||
         app.id === "Autorec-Video-Preview").forEach(app => app.close());

        MenuManager.#app = void 0;

        return super.close(options);
    }

    /**
     * Show a single static instance of MenuManager; if it is already open then bring it to top.
     */
    static show() {
        if (this.#app)
        {
            this.#app.bringToTop();
        }
        else
        {
            this.#app = new MenuManager().render(true, { focus: true });
        }
    }
}
