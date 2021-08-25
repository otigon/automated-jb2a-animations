
export class aaAutoRecognition {
    static get defaultConfiguration() {
        const defaultConfig = {
            categories: {},
            overrides: {
                0: {
                    name: 'Longsword',
                },
                1: {
                    name: 'Fire Bolt',
                },
            },
        };


        return defaultConfig;
    }

    constructor() {
        this._enabled = false;
    }
}

export const dnd5eAutoRec = new aaAutoRecognition();
