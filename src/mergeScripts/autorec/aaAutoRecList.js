import { currentAutorecVersion }    from "./autoRecMerge";

export class aaAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            version: currentAutorecVersion(),
        };
        return defaultConfig;
    }

    constructor() {
        this._enabled = false;
    }
}

export const dnd5eAutoRec = new aaAutorec();