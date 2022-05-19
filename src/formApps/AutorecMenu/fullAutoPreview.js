
import { TJSDialog } from '@typhonjs-fvtt/runtime/svelte/application';
import VideoPreview from "./autorecPreviews.svelte";

export default class AutorecTotalPreview extends TJSDialog {
    constructor(data) {
        super({
            title: `Autorec Preview`,
            draggable: true,
            modal: false,
            content: {
                class: VideoPreview,
                props: {
                    idx: data.idx,
                    name: data.name,
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
            id: `Autorec-Video-Preview`,
        })
    }

}