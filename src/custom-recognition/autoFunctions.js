export function getAllNames(obj, type) {
    const nameArray = []
    try {Object.keys(obj[type]).length}
    catch (exception) {return nameArray}
    const arrayLength = Object.keys(obj[type]).length
    for (var i = 0; i < arrayLength; i++) {
        const names = obj[type][i].name.toLowerCase().split(',')
        names.forEach(n => nameArray.push(n.trim()))
    }
    return nameArray;
}

export function findObjectByName(data, type, name) {
    const newName = name.toLowerCase()
    return Object.values(data[type]).filter(section => {
        //cutting out all spaces
        const names = section.name.replace(/\s+/g, '').toLowerCase().split(',')
        return names.includes(newName) ? section : "";
    })
}

export function autorecNameCheck(nameArray, name) {
    const arrayLength = nameArray.length;
    let newName = name.toLowerCase()
    let nameFound = false;
    for (var i = 0; i < arrayLength; i++) {
        //cutting out all spaces
        var currentArrayName = nameArray[i].replace(/\s+/g, '').toLowerCase()
        if (currentArrayName === newName) {
            nameFound = true;
        }
    }
    return nameFound;
}

export function rinseName(oldName) {
    let newName = oldName.replace(/[+1]|[+2]|[+3]/gi, function (x) {
        return "";
    });
    //trim trailing whitespace
    //newName = newName.trim("\s+$/g", "")
    //cut out all spaces
    newName = newName.replace(/\s+/g, '');

    return newName;
}

export function getAllTheNames(obj) {
    const nameArray = []
    const keys = Object.keys(obj)
    const keyLength = keys.length
    for (var i = 0; i < keyLength; i++) {
        var arrayLength = Object.keys(obj[keys[i]]).length
        var currentObject = obj[keys[i]]
        for (var k = 0; k < arrayLength; k++) {
            const names = currentObject[k].name.toLowerCase().split(',')
            names.forEach(n => nameArray.push(n.trim()))
        }
    }
    return nameArray;
}

export function findObjectByNameFull(data, name) {
    const keys = Object.keys(data)
    const keyLength = keys.length
    let newObject;
    for (var i = 1; i < keyLength; i++) {
        var currentObject = data[keys[i]]
        newObject = Object.values(currentObject).filter(section => {
            //added .replace()
            const names = section.name.replace(/\s+/g, '').toLowerCase().split(',')
            return names.includes(name.toLowerCase()) ? section : "";
        })

        if (newObject.length === 1) {return [ newObject, keys[i] ]}
    }
}

export function exportAutorecToJSON() {
	const data = (game.settings.get('autoanimations', 'aaAutorec'))
	const filename = `fvtt-autoanimations-autorecognition.json`;
	saveDataToFile(JSON.stringify(data, null, 2), "text/json", filename);
}

export async function importAutorecFromJSON(json) {
	const data = JSON.parse(json);
	console.warn("autoanimations | Import settings ", data);
	game.settings.set("autoanimations", "aaAutorec", data);
}

