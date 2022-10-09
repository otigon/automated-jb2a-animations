export async function db049(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const l2 = prefix('2nd_Level')

    const patreonDB049 = {
        static: {
            spell: {
                divinesmite: {
                    reverse: {
                        yellowblue: [l2`Divine_Smite/DivineSmiteReversed_01_Regular_BlueYellow_Caster_400x400.webm`],
                    }
                },
            },
        },
    }
    return patreonDB049;
}