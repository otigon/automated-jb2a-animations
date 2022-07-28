export class AAAutorecFunctions {

    static rinseName(oldName) {
        if (!oldName) { return; }
        const newName = oldName.replace(/\s+/g, '').toLowerCase();
        return newName;
    }

    static combineAndSortMenus(menus) {
        let combinedMenus = [...menus.melee, ...menus.range, ...menus.ontoken,
            ...menus.templatefx, ...menus.aura, ...menus.preset,
            ...menus.aefx];

        let sortedMenus = combinedMenus.sort((a, b) => b.label.replace(/\s+/g, '').length - a.label.replace(/\s+/g, '').length);

        return sortedMenus;
    }

    static getAllLabelsInMenu(menu) {
        const nameArray = []

        for (var i = 0; i < menu.length; i++) {
            if (!menu[i].label) { continue }
            nameArray.push(this.rinseName(menu[i].label))
        }
        return nameArray;
    }

    static singleMenuSearch(menu, name) {
        return menu.find(x => name.includes(this.rinseName(x.label))) || false;
    }

    static allMenuSearch(menus, name) {
        let combinedMenus = [...menus.melee, ...menus.range, ...menus.ontoken,
            ...menus.templatefx, ...menus.aura, ...menus.preset/*, ...menus.aefx*/];

        let sortedMenus = combinedMenus.sort((a, b) => b.label.replace(/\s+/g, '').length - a.label.replace(/\s+/g, '').length);

        return sortedMenus.find(x => x.label && name.includes(this.rinseName(x.label))) || false;
    }

}