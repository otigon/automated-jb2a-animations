export class aaAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            version: 5,
        };
        return defaultConfig;
    }

    constructor() {
        this._enabled = false;
    }
}

export const dnd5eAutoRec = new aaAutorec();