
import { TJSDialog } from '@typhonjs-fvtt/runtime/svelte/application';
import VideoPreview from "./components/videoPreview.svelte"

export default class AAVideoPreview extends TJSDialog {
    constructor(data) {
        super({
            title: 'A-A Video Preview',
            id: `AA-Video-Preview`,
            draggable: true,
            modal: false,
            classes: ["PrimaryPreview"],
            content: {
                class: VideoPreview,
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
            resizable: true,
            minimizable: true,
            width: "auto",
            height: "auto",
            closeOnSubmit: true,
        })
    }

}