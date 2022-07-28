import { uuidv4 } from "@typhonjs-fvtt/runtime/svelte/util";

async function mergveVersion06(data) {

    const meleeObject = data.melee;
    const meleeLength = Object.keys(meleeObject || {}).length

    const newMeleeArray = [];
    const newRangeArray = [];
    const newOnTokenArray = [];
    const newTemplateArray = [];
    const newAuraArray = [];
    const newaeArray = [];

    for (var i = 0; i < meleeLength; i++) {
        let primary = meleeObject[i].primary || {};

        let newMeleeObject = {
            id: uuidv4(),
            label: meleeObject[i].name,
            soundOnly: meleeObject[i].soundOnly || false,
            primary: {
                options: {},
                sound: {},
                video: primary.menuType ? primary : {
                    animation: "bite",
                    color: "red",
                    enableCustom: primary.enableCustom || false,
                    customPath: primary.customPath || "",
                    menuType: "creature",
                    variant: "01",
                },
            },
            explosion: {
                enable: meleeObject[i].explosions?.enable || false,
                options: {},
                sound: {},
                video: {},
            },
            meleeSwitch: {
                returning: meleeObject[i].returning || false,
                sound: {},
                switchType: meleeObject[i].switchType || "on",
                options: {},
                video: {},
            },
            macro: {
                enable: meleeObject[i].macro?.enable || false,
            },
            source: {
                enable: meleeObject[i].sourceToken?.enable || false,
                options: {},
                sound: {},
                video: {},
            },
            target: {
                enable: meleeObject[i].targetToken?.enable || false,
                options: {},
                sound: {},
                video: {},
            },
            levels3d: {
                type: meleeObject[i].levels3d?.type || "",
                data: {}
            },
        }
        newMeleeArray.push(newMeleeObject)
    }

}