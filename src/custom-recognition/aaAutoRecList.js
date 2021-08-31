
export class aaAutorec {
    static get defaultConfiguration() {
        const defaultConfig = {
            search: "",
            melee: {
                0: {
                    hidden: true,
                    name: 'Dagger',
                    animation: 'dagger',
                    variant: '01',
                    color: 'white',
                },
                1: {
                    hidden: true,
                    name: 'Flurry of Blows',
                    animation: 'flurryofblows',
                    variant: 'physical',
                    color: 'blue',
                },
                2: {
                    hidden: true,
                    name: 'Greataxe',
                    animation: 'greataxe',
                    variant: '01',
                    color: 'white',
                },
                3: {
                    hidden: true,
                    name: 'Greatclub',
                    animation: 'greatclub',
                    variant: '01',
                    color: 'white',
                },
                4: {
                    hidden: true,
                    name: 'Greatsword',
                    animation: 'greatsword',
                    variant: '01',
                    color: 'white',
                },
                5: {
                    hidden: true,
                    name: 'Handaxe',
                    animation: 'handaxe',
                    variant: '01',
                    color: 'white',
                },
                6: {
                    hidden: true,
                    name: 'Longsword',
                    animation: 'sword',
                    variant: '01',
                    color: 'white',
                },
                7: {
                    hidden: true,
                    name: 'Mace',
                    animation: 'mace',
                    variant: '01',
                    color: 'white',
                },
                8: {
                    hidden: true,
                    name: 'Maul',
                    animation: 'maul',
                    variant: '01',
                    color: 'white',
                },
                9: {
                    hidden: true,
                    name: 'Shortsword',
                    animation: 'sword',
                    variant: '01',
                    color: 'white',
                },
                10: {
                    hidden: true,
                    name: 'Spear',
                    animation: 'spear',
                    variant: '01',
                    color: 'white',
                },
                11: {
                    hidden: true,
                    name: 'Rapier',
                    animation: 'rapier',
                    variant: '01',
                    color: 'white',
                },
                12: {
                    hidden: true,
                    name: 'Unarmed Strike',
                    animation: 'unarmedstrike',
                    variant: 'physical',
                    color: 'blue',
                },
            },
            attackspell: {
                0: {
                    hidden: true,
                    name: 'Disintegrate',
                    animation: 'disintegrate',
                    variant: '01',
                    color: 'green',
                },
                1: {
                    hidden: true,
                    name: 'Eldritch Blast',
                    animation: 'eldritchblast',
                    variant: '01',
                    color: 'purple',
                },
                2: {
                    hidden: true,
                    name: 'Fire Bolt',
                    animation: 'firebolt',
                    variant: '01',
                    color: 'orange',
                },
                3: {
                    hidden: true,
                    name: 'Guiding Bolt',
                    animation: 'guidingbolt',
                    variant: '01',
                    color: 'blueyellow',
                },
                4: {
                    hidden: true,
                    name: 'Magic Missile',
                    animation: 'magicmissile',
                    variant: '01',
                    color: 'purple',
                },
                5: {
                    hidden: true,
                    name: 'Ray of Frost',
                    animation: 'rayoffrost',
                    variant: '01',
                    color: 'blue',
                },
                6: {
                    hidden: true,
                    name: 'Scorching Ray',
                    animation: 'scorchingray',
                    variant: '01',
                    color: 'orange',
                },
                7: {
                    hidden: true,
                    name: 'Witch Bolt',
                    animation: 'witchbolt',
                    variant: '01',
                    color: 'blue',
                },

            },
            range: {
                0: {
                    hidden: true,
                    name: 'Dagger',
                    animation: 'dagger',
                    variant: '01',
                    color: 'white',
                },
                1: {
                    hidden: true,
                    name: 'Crossbow',
                    animation: 'bolt',
                    variant: 'physical',
                    color: 'orange',
                },
                2: {
                    hidden: true,
                    name: 'Longbow',
                    animation: 'arrow',
                    variant: 'regular',
                    color: 'regular',
                },
                3: {
                    hidden: true,
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