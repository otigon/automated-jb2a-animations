import { JB2AFREEDB } from "../animation-functions/databases/jb2a-free-database.js"
import { JB2APATREONDB } from "../animation-functions/databases/jb2a-patreon-database.js"
import { aaColorMenu, aaVariantMenu } from "../animation-functions/databases/jb2a-menu-options.js"

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

    static _autoPreview(name, patreon, flags) {

        const data = {};
        data.autoOverriden = flags.autoanimations?.options?.overrideAuto;
        data.autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
        data.autoName = this._rinseName(name);
        data.autorecSection = this._findObjectByNameFull(data.autoRecSettings, data.autoName);
        if (!data.autorecSection) { return; }
        
        data.autorecObject = data.autorecSection[0][0];
        data.autorecType = data.autorecSection[1];
        data.name = data.autorecObject?.animation;
        data.color = data.autoOverriden ? flags.autoanimations?.options?.autoColor : data.autorecObject?.color;
        data.variant = data.autoOverriden ? flags.autoanimations?.options?.autoVariant : data.autorecObject?.variant;
        data.nameArray = this._getAllTheNames(data.autoRecSettings);

        if (data.autorecObject?.custom) {
            return data.autorecObject?.customPath;
        }
        if (data.autorecType === 'preset') { return; }
        if (data.autorecType !== 'melee' && data.autorecType !== 'range') { data.autorecType = 'static' }

        //const autoName = this._rinseName(name);
        if (!data.autoName) { return; }
        if (!this._autorecNameCheck(data.nameArray, data.autoName)) {
            return;
        }

        const jb2a = patreon ? JB2APATREONDB : JB2AFREEDB;

        let file;
        switch (true) {
            case data.name === 'magicmissile' || (data.name === "scorchingray" && data.variant === '02'):
                try { file = jb2a[autorecType][data.name][data.variant][data.color]['15ft'][1] }
                catch (exception) { }
                break;
            case data.name === 'quarterstaff':
            case data.name === 'halberd':
            case data.name === 'spear' && data.variant === '01':
                try { file = jb2a[data.autorecType][data.name][data.variant][data.color][1] }
                catch (exception) { }
                break;
            case data.autorecType === 'range':
                try { file = jb2a[data.autorecType][data.name][data.variant][data.color][Object.keys(jb2a[data.autorecType][data.name][data.variant][data.color])[1]] }
                catch (exception) { }
                break;
            case data.autorecSection[1] === 'templates':
                try { file = jb2a.static[data.autorecObject.type][data.name][data.color] }
                catch (exception) { }
                break;
            default:
                try { file = jb2a[data.autorecType][data.name][data.variant][data.color] }
                catch (exception) { }
        }
        return file;
    }

    static _autorecChoices(itemName, flags) {
        const autoRecSettings = game.settings.get('autoanimations', 'aaAutorec');
        const autoName = AutorecFunctions._rinseName(itemName)
        const nameArray = AutorecFunctions._getAllTheNames(autoRecSettings);
        if (!AutorecFunctions._autorecNameCheck(nameArray, autoName)) {
            return;
        }
        const colorMenu = aaColorMenu;
        const variantMenu = aaVariantMenu;
        let autorecSection = AutorecFunctions._findObjectByNameFull(autoRecSettings, autoName);
        const autorecObject = autorecSection[0]
        if (autorecObject[0].custom) { return { colors: null, variantChoices: null } }
        let autorecType = autorecSection[1]

        let animationName = autorecType === 'preset' && autorecObject[0].animation === "teleportation" ? autorecObject[0].subAnimation : autorecObject[0].animation;
        if (autorecSection[1] === 'templates') {
            animationName = autorecObject[0].type;
        }
        if (autorecType !== 'melee' && autorecType !== 'range') { autorecType = 'static' }
        const name = animationName === 'shield' ? 'shieldspell' : animationName
        let variant;
        try { variant = !autorecObject[0].variant ? Object.keys(colorMenu[autorecType][name])[0] : autorecObject[0].variant; }
        catch (exception) { }
        if (autorecSection[1] === 'templates') {
            variant = autorecObject[0].animation;
        }

        let autoVariant;
        if (flags.autoanimations?.options?.overrideAuto) {
            autoVariant = flags.autoanimations?.options?.autoVariant;
        }
        variant = !autoVariant ? variant : autoVariant;

        let colors;
        try { colors = colorMenu[autorecType][name][variant] }
        catch (exception) { }
        let variantChoices;
        try { variantChoices = variantMenu[autorecType][name] }
        catch (exception) { }
        if (autorecSection[1] === "templates") { variantChoices = undefined }

        return { colors, variantChoices };
    }

}
