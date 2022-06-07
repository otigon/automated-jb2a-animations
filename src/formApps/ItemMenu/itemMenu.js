import { SvelteApplication } from '@typhonjs-fvtt/runtime/svelte/application';
import ItemMenuAppShell from './itemMenuAppShell.svelte';
import { aaAutoRecognition } from '../../custom-recognition/auto-recognition';
import AutorecShim from "../AutorecMenu/appShim.js"


export default class AAItemMenu extends SvelteApplication {
    
    //constructor(options = {}) { super(options); }
    constructor(item) {
        //console.log(Object.entries(aaNameMenu.melee.weapon))
        super({
            title: `A-A Item Setting for ${item.name}`,
            id: `AA-item-settings`,
            zIndex: 102,
            svelte: {
                class: ItemMenuAppShell,
                target: document.body,
                props: {
                    item: item,
                    itemFlags: item.data.flags,
                }
            },
            //close: () => this.options.reject(),
            //...options
        });
        this.hookId = Hooks.once('closeAAItemMenu', () => {
            Object.values(ui.windows).filter(app => app.id === "Options-Information" || app.id === "Item-Video-Preview").forEach(app => app.close())
        });
    }
    /**
     * 
     */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            resizable: true,
            minimizable: true,
            width: 600,
            height: 650,
            closeOnSubmit: true,
        })
    }

    _getHeaderButtons()
    {
        const buttons = super._getHeaderButtons(); 
        buttons.unshift({
            class: 'autorec-shortcut',
            icon: 'fas fa-globe',
            title: 'Launch Autorec',
            label: "Autorec Menu",
            styles: { color: 'lightblue', position: "relative", right: "30px" },
   
            onclick: function()
            {
                if (game.user.isGM) {
                    new AutorecShim()
                }
            }
         });
      
         return buttons;
       }
}