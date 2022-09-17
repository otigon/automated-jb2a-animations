
import { TJSDialog } from '@typhonjs-fvtt/runtime/svelte/application';
import CopyToAutorec from './CopyToAutorec.svelte';

export default class ItemToAutorec extends TJSDialog {
    constructor(data) {
        super({
            title: 'Item to Autorec',
            draggable: true,
            resizable:true,
            modal: true,
            zIndex:null,
            content: {
                class: CopyToAutorec, 
                props: {
                    ...data
                }
            },
        });
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            minimizable: true,
            width: 600,
            height: 300,
            closeOnSubmit: true,
            id: `Item to Autorec`,
        })
    }

}