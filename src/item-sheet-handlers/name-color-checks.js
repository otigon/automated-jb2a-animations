function getNameColor(data) {

    let itemNameSys = data.entity?.name?.toLowerCase() ?? ``;
    let itemNameFlags = data.entity?.flags?.autoanimations?.animName?.toLowerCase() ?? ``;
    let itemAnimType = data.item?.flags?.autoanimations?.animType?.toLowerCase() ?? ``;
    let isOverride = data.item?.flags?.autoanimations?.override;
    //console.log(isOverride);
    //let itemColorSys = data.item.data.source;
    //let itemColorflags = data.item.flags.autoanimations.color.toLowerCase();
    /*
    let itemNameFinal; 
    switch (true) {
        //case (itemNameFlags === ``):
        case (!isOverride):
            itemNameFinal = itemNameSys;
            break;
        default:
            itemNameFinal = itemNameFlags;
            break;
    }
    */
    let animNameFinal;
    switch (true) {
        case(!isOverride):
        case(((isOverride) && (itemNameFlags === ''))):
            animNameFinal = itemNameSys;
            break;
        default:
            animNameFinal = itemNameFlags;
            break;
    }


    let animNameVar;
    switch (true) {
        case (itemAnimType === "t2"):
            animNameVar = "melee";
            break;
        case (itemAnimType === "t3"):
            animNameVar = "gendmg";
            break;
        case (itemAnimType === "t4"):
            animNameVar = "ranged";
            break;
        case (itemAnimType === "t5"):
            animNameVar = "attackspell";
            break;
        case (itemAnimType === "t6"):
            animNameVar = "healpotion";
            break;
        case (itemAnimType === "t7"):
            animNameVar = "template-explosion";
            break;
        case (itemAnimType === "t8"):
            animNameVar = "target-explosion";
            break;
        default:
            animNameVar = ``;
            break;
    }

    return [animNameFinal, animNameVar];
}

export default getNameColor;