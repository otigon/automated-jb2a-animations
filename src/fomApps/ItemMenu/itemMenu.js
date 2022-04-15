import { SvelteApplication } from '@typhonjs-fvtt/runtime/svelte/application';
import ItemMenuAppShell from './itemMenuAppShell.svelte';

export default class AAItemMenu extends SvelteApplication {
    
    //constructor(options = {}) { super(options); }
    constructor(item) {
        //console.log(Object.entries(aaNameMenu.melee.weapon))
        super({
            title: "New and Improved Item Menu",
            zIndex: 102,
            svelte: {
                class: ItemMenuAppShell,
                target: document.body,
                intro: true,
                props: {
                    message: 'Foundry',
                    flags: item.data.flags,
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
            
            id: 'AA-item-settings',
            resizeable: true,
            minimizable: true,
            width: 600,
            height: "auto",
            closeOnSubmit: true,
        })
    }
}