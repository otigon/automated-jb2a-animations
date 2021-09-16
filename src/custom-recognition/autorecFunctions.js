import { JB2AFREEDB } from "../animation-functions/databases/jb2a-free-database.js"
import { JB2APATREONDB } from "../animation-functions/databases/jb2a-patreon-database.js"
import { aaColorMenu } from "../animation-functions/databases/jb2a-menu-options.js"

export class AutorecFunctions {

    static _getAllNames(obj, type) {
        const nameArray = []
        try { Object.keys(obj[type]).length }
        catch (exception) { return nameArray }
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
        if (!name) { return; }
        const arrayLength = nameArray.length;
        const newName = name.toLowerCase()
        let nameFound = false;
        for (var i = 0; i < arrayLength; i++) {
            //cutting out all spaces
            var currentArrayName = nameArray[i].replace(/\s+/g, '').toLowerCase()
            if (currentArrayName === "") { }
            else if (newName.includes(currentArrayName)) {
                nameFound = true;
                break;
            }
        }
        return nameFound;
    }

    static _rinseName(oldName) {
        if (!oldName) { return; }
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
                    return name.toLowerCase().includes(section.name.replace(/\s+/g, '').toLowerCase()) && section.name !== "" ? section : "";
                })

            if (newObject) { return [[newObject], keys[i]] }
        }
    }

    static _checkAutoRec(itemName) {
        const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
        const autoName = this._rinseName(itemName)
        const nameArray = this._getAllTheNames(autoRecSettings);
        let foundName = false;
        if (this._autorecNameCheck(nameArray, autoName)) {
            foundName = true;
        }
        return foundName;
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

    static _autoPreview(name, baseColor, patreon, autoOverridden) {
        if (!name) { return; }
        const autoName = this._rinseName(name)
        const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
        const nameArray = this._getAllTheNames(autoRecSettings);
        if (!this._autorecNameCheck(nameArray, autoName)) {
            return;
        }
        const jb2a = patreon ? JB2APATREONDB : JB2AFREEDB;
        const autorecSection = this._findObjectByNameFull(autoRecSettings, autoName);

        const autorecObject = autorecSection[0]
        if (autorecObject[0].animation === 'bardicinspiration' || autorecObject[0].animation === 'bless' || autorecObject[0].animation === 'shieldspell') { return; }
        if (autorecObject[0].custom) { return autorecObject[0].customPath }

        let autorecType = autorecSection[1]

        let changeColor = baseColor;

        //if (!autorecObject[0].variant) {variant = Object.keys(jb2a[autorecType][autorecObject[0].animation])[0]}
        let animationName = autorecType === 'preset' ? autorecObject[0].subAnimation : autorecObject[0].animation;
        if (autorecType !== 'melee' && autorecType !== 'range') { autorecType = 'static' }
        if (autorecSection[1] === 'templates') {
            animationName = autorecObject[0].type;
        }

        let variant;
        try {variant = !autorecObject[0].variant ? Object.keys(jb2a[autorecType][animationName])[0] : autorecObject[0].variant;}
        catch (exception) {}

        if (!changeColor) {
            try { changeColor = Object.keys(jb2a[autorecType][animationName][variant])[0] }
            catch (exception) { changeColor = autorecObject[0].color }
        }

        let color = autoOverridden ? changeColor : autorecObject[0].color
        if (color === 'random') { color = autorecObject[0].color || "" }

        let file;
        if (animationName === 'magicmissile') {
            try { file = jb2a[autorecType][animationName][variant][color]['15ft'][1] }
            catch (exception) { }
        } else {
            try { file = autorecType === "range" ? jb2a[autorecType][animationName][variant][color][Object.keys(jb2a[autorecType][animationName][variant][color])[1]] : jb2a[autorecType][animationName][variant][color] }
            catch (exception) { }
        }
        return file;
    }

    static _autorecColors(itemName) {
        const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
        const autoName = AutorecFunctions._rinseName(itemName)
        const nameArray = AutorecFunctions._getAllTheNames(autoRecSettings);
        if (!AutorecFunctions._autorecNameCheck(nameArray, autoName)) {
            return;
        }
        const colorMenu = aaColorMenu;
        let autorecSection = AutorecFunctions._findObjectByNameFull(autoRecSettings, autoName);
        const autorecObject = autorecSection[0]
        if (autorecObject[0].custom) { return null }
        let autorecType = autorecSection[1]
    
        let animationName = autorecType === 'preset' && autorecObject[0].animation === "teleportation" ? autorecObject[0].subAnimation : autorecObject[0].animation;
        if (autorecSection[1] === 'templates') {
            animationName = autorecObject[0].type;
        }
        if (autorecType !== 'melee' && autorecType !== 'range') { autorecType = 'static' }
        const name = animationName === 'shield' ? 'shieldspell' : animationName
        let variant;
        try {variant = !autorecObject[0].variant ? Object.keys(colorMenu[autorecType][name])[0] : autorecObject[0].variant;}
        catch (exception) {}
    
        if (autorecSection[1] === 'templates') {
            variant = autorecObject[0].animation;
        }
        let colors;
        try {colors = colorMenu[autorecType][name][variant]}
        catch (exception) {}
    
        return colors;
    }
    
}
