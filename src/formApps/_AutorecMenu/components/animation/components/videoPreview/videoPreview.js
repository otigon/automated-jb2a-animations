
import { TJSDialog } from '@typhonjs-fvtt/runtime/svelte/application';
import FullVideoPreview from "./autorecPreviews.svelte";

export default class TotalPreview extends TJSDialog {
    constructor(data) {
        super({
            title: 'A-A Full Preview',
            draggable: true,
            resizeable: true,
            modal: false,
            zIndex:null,
            content: {
                class: FullVideoPreview,
                props: {
                    ...data
                }
            },
            //close: () => this.options.reject(),
            //...options
        });
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            minimizable: true,
            width: "auto",
            height: "auto",
            closeOnSubmit: true,
            id: `Item-Video-Preview`,
        })
    }

}