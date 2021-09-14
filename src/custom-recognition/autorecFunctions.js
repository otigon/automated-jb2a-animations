export class AutorecFunctions {

    static _getAllNames(obj, type) {
        const nameArray = []
        try {Object.keys(obj[type]).length}
        catch (exception) {return nameArray}
        const arrayLength = Object.keys(obj[type]).length
        for (var i = 0; i < arrayLength; i++) {
            nameArray.push(obj[type][i].name.toLowerCase())
        }
        return nameArray;    
    }

    static _findObjectByName(data, type, name) {
        const newName = name.toLowerCase()
        var newObject = Object.values(data[type])
            .sort((a, b) => b.name.replace(/\s+/g, '').length - a.name.replace(/\s+/g, '').length)
            .find(section => {
                //cutting out all spaces
                return newName.includes(section.name.replace(/\s+/g, '').toLowerCase()) ? section : "";
            })
    
        return [newObject]
    }

    static _autorecNameCheck(nameArray, name) {
        const arrayLength = nameArray.length;
        let newName = name.toLowerCase()
        let nameFound = false;
        for (var i = 0; i < arrayLength; i++) {
            //cutting out all spaces
            var currentArrayName = nameArray[i].replace(/\s+/g, '').toLowerCase()
            if (newName.includes(currentArrayName)) {
                nameFound = true;
                break;
            }
        }
        return nameFound;
    }

    static _rinseName(oldName) {
        const newName = oldName.replace(/\s+/g, '');
        return newName;
    }

    static _getAllTheNames(obj) {
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
        nameArray.sort((a, b) => b.length - a.length)
        return nameArray;
    }

    static _findObjectByNameFull(data, name) {
        const keys = Object.keys(data)
        const keyLength = keys.length
        //let newObject;
        for (var i = 1; i < keyLength; i++) {
            var newObject = Object.values(data[keys[i]])
                .sort((a, b) => b.name.replace(/\s+/g, '').length - a.name.replace(/\s+/g, '').length)
                .find(section => {
                    //added .replace()
                    return name.toLowerCase().includes(section.name.replace(/\s+/g, '').toLowerCase()) ? section : "";
                })
    
            if (newObject) { return [[newObject], keys[i]] }
        }
    }

    static _exportAutorecToJSON() {
        const data = (game.settings.get('autoanimations', 'aaAutorec'))
        const filename = `fvtt-autoanimations-autorecognition.json`;
        saveDataToFile(JSON.stringify(data, null, 2), "text/json", filename);
    }

    static _importAutorecFromJSON(json) {
        const data = JSON.parse(json);
        console.warn("autoanimations | Import settings ", data);
        game.settings.set("autoanimations", "aaAutorec", data);
    }
}
