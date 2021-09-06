export function getAllNames(obj, type) {
    const nameArray = []
    try {Object.keys(obj[type]).length} 
    catch (exception) {return nameArray}
    const arrayLength = Object.keys(obj[type]).length
    for (var i = 0; i < arrayLength; i++) {
        nameArray.push(obj[type][i].name.toLowerCase())
    }
    return nameArray;
}

export function findObjectByName(data, type, name) {
    return Object.values(data[type]).filter(section => {
        return section.name.toLowerCase() === (name.toLowerCase()) ? section : "";
    })
}

export function autorecNameCheck(nameArray, name) {
    const arrayLength = nameArray.length;
    let newName = name.toLowerCase()
    let nameFound = false;
    for (var i = 0; i < arrayLength; i++) {
        if (nameArray[i].toLowerCase() === newName) {
            nameFound = true;
        }
    }
    //console.log(nameFound)
    return nameFound;
}

export function rinseName(oldName) {
    let newName = oldName.replace(/[+1]|[+2]|[+3]/gi, function (x) {
        return "";
    });
    newName = newName.trim("\s+$/g", "")
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
            nameArray.push(currentObject[k].name.toLowerCase())
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
            return section.name.toLowerCase() === (name.toLowerCase()) ? section : "";
        })
        //console.log(newObject)
        if (newObject.length === 1) {return [ newObject, keys[i] ]}
    }
}
