import { SvelteApplication } from '@typhonjs-fvtt/runtime/svelte/application';
import AutoShellApp from './autorecAppShell.svelte';

//import AEMenuAppShell from './AEMenuAppShell.svelte';
//import { aaAutoRecognition } from '../../custom-recognition/auto-recognition';
export default class AAAutorecMenu extends SvelteApplication {

    //constructor(options = {}) { super(options); }
    constructor(data) {
        //console.log(Object.entries(aaNameMenu.melee.weapon))
        super({
            title: `A-A Automatic Recognition Menu`,
            id: `AA-autorec-settings`,
            zIndex: 102,
            svelte: {
                class: AutoShellApp,
                target: document.body,
                props: {
                    data,
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
        });
    }
}
