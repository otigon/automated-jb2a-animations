import { SvelteApplication }    from "@typhonjs-fvtt/runtime/svelte/application";

import { ItemAppShell } from "./components";
import { showAutorecMenu } from "../_AutorecMenu/showUI";

import { constants }            from "../../constants.js";

export default class ItemMenuApp extends SvelteApplication {
    /** @inheritDoc */
    constructor(item)
    {
        super({
            title: `A-A Item Menu`,
            id: `AA-item-settings-New`,
            zIndex: 102,
            svelte: {
                class: ItemAppShell,
                target: document.body,
                props: {
                    item: item,
                    itemFlags: item.flags,
                }
            },
        });

        //try {
            // Attempt to parse session storage item and set application state.
            //this.state.set(JSON.parse(sessionStorage.getItem(`${constants.moduleId}-autorec-appstate`)));
        //}
       // catch (err) { /**/ }
    }

    /**
     *
     */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            resizable: true,
            minimizable: true,
            width: 600,
            height: 750,
            minWidth: 550,
        });
    }

    _getHeaderButtons()
    {
        const buttons = super._getHeaderButtons(); 
        buttons.unshift({
            class: 'autorec-shortcut',
            icon: 'fas fa-globe',
            title: 'Launch Autorec',
            label: "Global Automatic Recognition Menu",
            styles: { color: 'lightblue', position: "relative", right: "20px" },
   
            onclick: function()
            {
                if (game.user.isGM) {
                    new showAutorecMenu()
                }
            }
         });
         /*
         buttons.unshift({
            class: 'addToAutorec',
            icon: 'far fa-clone aa-zoom',
            title: 'Copy to Autorec Menu',
            label: "Copy",
            styles: { color: 'lightblue', position: "relative", right: "45px" },
   
            onclick: function()
            {
            }
         });
         */
         return buttons;
       }
    /**
     * @inheritDoc
     */
    async close(options) {
        Object.values(ui.windows).filter(app => app.id === "Options-Information" ||
         app.id === "Autorec-Video-Preview" || app.id === "Autorec-Menu-Manager").forEach(app => app.close());

        return super.close(options);
    }
}
