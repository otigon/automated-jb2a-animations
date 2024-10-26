
import { TJSDialog } from '#runtime/svelte/application';
import ItemInfo from './itemInfo/ItemInfo.svelte';

export default class ItemInfoDialog extends TJSDialog {
    constructor(data) {
        super({
            title: 'Options Info',
            draggable: true,
            resizable: true,
            modal: false,
            zIndex: null,
            content: {
                class: ItemInfo,
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
            height: "auto",
            closeOnSubmit: true,
            id: `Item-Information`,
        })
    }

}
