import { db047 } from "./patreonDB"

export async function patreon047(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const l0 = prefix('Cantrip')
    const l1 = prefix('1st_Level')
    const l2 = prefix('2nd_Level')
    const l3 = prefix('3rd_Level')
    const l4 = prefix('4th_Level')
    const l5 = prefix('5th_Level')
    const l6 = prefix('6th_Level')
    const l7 = prefix('7th_Level')
    const lg = prefix('Generic')

    /**
     * Structure for the internal Select menus work as:
     * Type => Animation => Variant => Color
     * Example: Range Menu - Weapon => Arrow => Regular => Regular
     * 
     * Entries in each section type should have a localized Variable matching in the lang/en.json file under
     * the proper category.
     * Type relates to the MenuTypes section
     * Animation to animations
     * Variant to variants
     * Color to colors
     * 
     */
    const patreonDB047 = {
        range: {
            _template: 'ranged',
            weapon: {

            },
            spell: {

            },
            generic: {

            },
        },
        melee: {
            creature: {

            },
            weapon: {

            },
            generic: {

            }
        },
        templatefx: {
            circle: {

            },
            cone: {

            },
            ray: {

            },
            square: {

            },
        },
        static: {
            chains: {

            },
            conditions: {

            },
            creature: {

            },
            energy: {

            },
            fire: {

            },
            generic: {

            },
            ice: {

            },
            lightning: {

            },
            liquid: {

            },
            magicsign: {

            },
            marker: {

            },
            music: {

            },
            particles: {

            },
            shieldfx: {

            },
            shrapnel: {

            },
            spell: {

            },
            tokenborder: {

            },
            trap: {

            }
        },
        return: {
            _template: 'ranged',
            weapon: {
                
            }
        }
    }
    return patreonDB047;
}