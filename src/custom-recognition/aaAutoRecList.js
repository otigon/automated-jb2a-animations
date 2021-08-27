
export class aaAutoRecognition {
    static get defaultConfiguration() {
        const defaultConfig = {
            melee: {
                0: {
                    name: 'Longsword',
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
