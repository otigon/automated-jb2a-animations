async function mergeVersion02(data) {
    let currentAutorec = data;
    
    const meleeObject = currentAutorec.melee;
    if (meleeObject) {
        const meleeLength = Object.keys(meleeObject).length;
        for (var i = 0; i < meleeLength; i++) {
            meleeObject[i].meleeType = "weapon";
        }
    }
    currentAutorec.version = 2;
    return currentAutorec;
}

export {mergeVersion02}