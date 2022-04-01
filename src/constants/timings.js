export function endTiming(itemName) {
    if (!itemName) { return 700 }
    let name = itemName.replace(/\s+/g, '').toLowerCase();
    let animEnd = 700;

    switch (name) {
        case "rangelasersword":
        case "rangelasersworddb":
        case "doublelasersword":
            animEnd = 1350;
            break;
        case "chakram":
        case "rapier":
        case "sword":
        case "greatclub":
        case "dagger":
            animEnd = 1000;
            break;
        case "lasersword":
        case "magicmissile":
            animEnd = 1100;
            break;
        case "greatsword":
            animEnd = 1800;
            break;
        case "greataxe":
            animEnd = 1600;
            break;
        case "mace":
        case "spear":
            animEnd = 1200;
            break;
        case "maul":
            animEnd = 2000;
            break;
        case "handaxe":
            animEnd = 1350;
            break;
        case "arrow":
        case "rangehammer":
        case "siege":
        case "rayoffrost":
        case "witchbolt":
        case "scorchingray":
            animEnd = 700;
            break;
        case "boulder":
            animEnd = 1050;
            break;
        case "lasershot":
            animEnd = 0;
            break;
        case "javelin":
            animEnd = 1150;
            break;
        case "rangesling":
            animEnd = 2000;
            break;
        case "firebolt":
            animEnd = 1700;
            break;
        case "eldritchblast":
            animEnd = 1350;
            break;
        case "disintegrate":
            animEnd = 1400;
            break;
        case "guidingbolt":
            animEnd = 3700;
            break;
        case "bolt":
            animEnd = 1250;
            break;
        case "bullet":
            animEnd = 100;
            break;
        case "snipe":
            animEnd = 0;
            break;
    }

    return animEnd;
}

export function removeDefaults(item) {
    item.unsetFlag("autoanimations", "defaults")
}