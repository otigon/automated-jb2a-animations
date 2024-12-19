
import { TJSDialog } from '#runtime/svelte/application';

import Diagnostics from "./Diagnostics.svelte";

export default class AADiagnostics extends TJSDialog {
    constructor(data) {
        super({
            title: 'Automated Animations Diagnostics',
            draggable: true,
            resizable:true,
            modal: false,
            zIndex:null,
            content: {
                class: Diagnostics,
            },
        });
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            minimizable: true,
            width: 600,
            height: "auto",
            closeOnSubmit: true,
            id: `AutomatedAnimations-Diagnostics`,
        })
    }

}
