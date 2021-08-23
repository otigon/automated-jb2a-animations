
export class aaAutoRecognition {
    static get defaultConfiguration() {
        const defaultConfig = {
            categories: {},
            overrides: {
                0: {
                    target: 'Longsword',
                },
                1: {
                    target: 'Fire Bolt',
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
