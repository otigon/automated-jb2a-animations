
export class aaAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            melee: {
                0: {
                    name: 'Dagger',
                    animation: 'dagger',
                    variant: '01',
                    color: 'white',
                },
                1: {
                    name: 'Flurry of Blows',
                    animation: 'flurryofblows',
                    variant: 'physical',
                    color: 'blue',
                },
                2: {
                    name: 'Greataxe',
                    animation: 'greataxe',
                    variant: '01',
                    color: 'white',
                },
                3: {
                    name: 'Greatclub',
                    animation: 'greatclub',
                    variant: '01',
                    color: 'white',
                },
                4: {
                    name: 'Greatsword',
                    animation: 'greatsword',
                    variant: '01',
                    color: 'white',
                },
                5: {
                    name: 'Handaxe',
                    animation: 'handaxe',
                    variant: '01',
                    color: 'white',
                },
                6: {
                    name: 'Longsword',
                    animation: 'sword',
                    variant: '01',
                    color: 'white',
                },
                7: {
                    name: 'Mace',
                    animation: 'mace',
                    variant: '01',
                    color: 'white',
                },
                8: {
                    name: 'Maul',
                    animation: 'maul',
                    variant: '01',
                    color: 'white',
                },
                9: {
                    name: 'Shortsword',
                    animation: 'sword',
                    variant: '01',
                    color: 'white',
                },
                10: {
                    name: 'Spear',
                    animation: 'spear',
                    variant: '01',
                    color: 'white',
                },
                11: {
                    name: 'Rapier',
                    animation: 'rapier',
                    variant: '01',
                    color: 'white',
                },
                12: {
                    name: 'Unarmed Strike',
                    animation: 'unarmedstrike',
                    variant: 'physical',
                    color: 'blue',
                },
            },
            attackspell: {
                0: {
                    name: 'Disintegrate',
                    animation: 'disintegrate',
                    variant: '01',
                    color: 'green',
                },
                1: {
                    name: 'Eldritch Blast',
                    animation: 'eldritchblast',
                    variant: '01',
                    color: 'purple',
                },
                2: {
                    name: 'Fire Bolt',
                    animation: 'firebolt',
                    variant: '01',
                    color: 'orange',
                },
                3: {
                    name: 'Guiding Bolt',
                    animation: 'guidingbolt',
                    variant: '01',
                    color: 'blueyellow',
                },
                4: {
                    name: 'Magic Missile',
                    animation: 'magicmissile',
                    variant: '01',
                    color: 'purple',
                },
                5: {
                    name: 'Ray of Frost',
                    animation: 'rayoffrost',
                    variant: '01',
                    color: 'blue',
                },
                6: {
                    name: 'Scorching Ray',
                    animation: 'scorchingray',
                    variant: '01',
                    color: 'orange',
                },
                7: {
                    name: 'Witch Bolt',
                    animation: 'witchbolt',
                    variant: '01',
                    color: 'blue',
                },

            },
            range: {
                0: {
                    name: 'Dagger',
                    animation: 'dagger',
                    variant: '01',
                    color: 'white',
                },
                1: {
                    name: 'Crossbow',
                    animation: 'bolt',
                    variant: 'physical',
                    color: 'orange',
                },
                2: {
                    name: 'Longbow',
                    animation: 'arrow',
                    variant: 'regular',
                    color: 'regular',
                },
                3: {
                    name: 'Shortbow',
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

export const dnd5eAutoRec = new aaAutorec();