
export class aaMeleeAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            melee: {
                0: {
                    name: 'Longsword',
                    animation: 'longsword',
                    variant: '01',
                    color: 'white',
                },
            },
        };
        return defaultConfig;
    }

    constructor() {
        this._enabled = false;
    }
}

export const dnd5eAutoRec = new aaMeleeAutorec();

export class aaSpellAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            range: {
                0: {
                    name: 'Fire Bolt',
                    animation: 'firebolt',
                    variant: '01',
                    color: 'red',
                },
            },
        };
        return defaultConfig;
    }

    constructor() {
        this._enabled = false;
    }
}

export class aaRangedAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            range: {
                0: {
                    name: 'Longbow',
                    animation: 'arrow',
                    variant: 'regular',
                    color: 'regular',
                },
            },
        };
        return defaultConfig;
    }

    constructor() {
        this._enabled = false;
    }
}