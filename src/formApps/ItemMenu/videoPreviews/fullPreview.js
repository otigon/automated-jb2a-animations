
import { TJSDialog } from '@typhonjs-fvtt/runtime/svelte/application';
import FullVideoPreview from "./fullPreviewApp.svelte";

export default class TotalPreview extends TJSDialog {
    constructor(data) {
        super({
            title: 'A-A Full Preview',
            id: `AA-Full-Video-Preview`,
            draggable: true,
            modal: false,
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
        })
    }

}