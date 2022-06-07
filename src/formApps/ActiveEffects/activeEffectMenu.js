import { SvelteApplication } from '@typhonjs-fvtt/runtime/svelte/application';
import AEMenuAppShell from './AEMenuAppShell.svelte';
import AutorecShim from "../AutorecMenu/appShim.js"

export default class AAActiveEffectMenu extends SvelteApplication {
    
    //constructor(options = {}) { super(options); }
    constructor(item) {
        //console.log(Object.entries(aaNameMenu.melee.weapon))
        super({
            title: `A-A Active Effect Settings`,
            id: `AA-ae-settings`,
            zIndex: 102,
            svelte: {
                class: AEMenuAppShell,
                target: document.body,
                props: {
                    item: item,
                    itemFlags: item.data.flags,
                }
            },
            //close: () => this.options.reject(),
            //...options
        });
        /*
        this.hookId = Hooks.on('updateActor', (changedActor) => {
            if (changedActor !== actor) return;
            setTimeout(() => {
                this.svelte.applicationShell.updateHealthBar();
            }, 100);
        });
        */
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