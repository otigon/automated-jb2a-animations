
import { TJSDialog } from '@typhonjs-fvtt/runtime/svelte/application';
import OptionsInfo from './optionsInfo.svelte'

export default class OptionsInformation extends TJSDialog {
    constructor(data) {
        super({
            title: 'Options Info',
            draggable: true,
            resizable:true,
            modal: false,
            zIndex:null,
            content: {
                class: OptionsInfo,
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
            width: 600,
            height: 600,
            closeOnSubmit: true,
            id: `Options-Information`,
        })
    }

}