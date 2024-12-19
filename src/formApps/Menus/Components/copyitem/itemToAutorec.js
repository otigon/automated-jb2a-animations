
import { TJSDialog } from '#runtime/svelte/application';
import CopyToAutorec from './CopyToAutorec.svelte';

export default class ItemToAutorec extends TJSDialog {
    constructor(data) {
        super({
            title: 'Item to Autorec',
            resizable:true,
            modal: true,
            draggable: true,
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
            width: "auto",
            height: "auto",
            closeOnSubmit: true,
            id: `AA-Copy-Item-To-Global`,
        })
    }

}
