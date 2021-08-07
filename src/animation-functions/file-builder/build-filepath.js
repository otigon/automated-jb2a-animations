//import { JB2APATREONDB } from "../jb2a-patreon-database.js";
//import { JB2AFREEDB } from "../jb2a-free-database.js";

export async function buildWeaponFile(jb2a, itemName, handler) {

    let color = handler.color === "a1" || !handler.color ? handler.defaultColor : handler.color
    //if (!color || color === "a1") { color = handler.defaultColor }
    let uaStrikeType = handler.uaStrikeType || "physical";
    let file;
    //console.log("Build a file Item Name is " + itemName)
    if (handler.enableCustom01) {
        file = handler.custom01
    } else {
        switch (itemName) {
            case "1hs":
            case "2hs":
            case "1hp":
            case "2hp":
            case "1hb":
            case "2hb":
                file = `autoanimations.genericmelee.${itemName}`;
                break;
            case 'unarmedstrike':
            case 'flurryofblows':
                file = handler.color === "random" ? `autoanimations.${itemName}.${uaStrikeType}` : `autoanimations.${itemName}.${uaStrikeType}.${color}`;
                break;
            default:
                file = handler.color === "random" ? `autoanimations.${itemName}.melee.01` : `autoanimations.${itemName}.melee.01.${color}`
        }
    }
    //let videoData = await getVideoDimensionsOf(filePath[Object.keys(filePath)[0]]);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.primary.file", filePath)
    return { file };
}

export async function buildRangedFile(jb2a, itemName, handler) {

    let dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
    if (itemName === "arrow") { dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
        dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
    }
    let color = handler.color === "a1" || !handler.color ? handler.defaultColor : handler.color;
    let file;
    //let fileData;
    //let variant = handler.spellVariant ?? "01";
    let dtvar = handler.dtvar;
    switch (itemName) {
        case "scorchingray":
        case "guidingbolt":
            const spellVariant = handler.spellVariant || "01";
            file = handler.color === "random" ? `autoanimations.${itemName}.${spellVariant}` : `autoanimations.${itemName}.${spellVariant}.${color}`;
            break;
        case 'boulder':
        case 'siege':
        case 'rangejavelin':
        case 'rangesling':
        case 'chakram':
            file = `autoanimations.${itemName}`;
            break;
        case 'greataxe':
            file = `autoanimations.${itemName}.range.01.${color}`;
            break;
        case 'hammer':
        case "dagger":
        case "handaxe":
            // Just a patch until I separate range/melee animations
            if (color !== "dark purple") (color = "white")
            if (!handler.dtvar || handler.dtvar === "a1") (dtvar = "01")
            file = `autoanimations.${itemName}.range.${dtvar}.${color}`;
            break;
        case "rangehandaxe":
        case "rangespear":
            file = `autoanimations.${itemName}.01.${color}`;
            break;
        case 'arrow':
        case 'bolt':
        case 'bullet':
            file = handler.color === "random" ? `autoanimations.${itemName}.${dmgType}` : `autoanimations.${itemName}.${dmgType}.${color}`;
            break;
        default:
            if (!handler.color || handler.color === "a1") { color = handler.defaultColor }
            file = handler.color === "random" ? `autoanimations.${itemName}` : `autoanimations.${itemName}.${color}`;
    }
    //let videoData = await getVideoDimensionsOf(fileData['30ft']);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.primary.file", filePath)

    return { file };
}

export async function buildAfterFile(jb2a, handler) {
    let color = handler.explosionColor;
    let variant = handler.explosionVariant;
    let impactVariant = handler.impactVar;
    //console.log(handler)
    let file;
    let fileData;
    if (handler.customExplode) {
        file = handler.customExplosionPath
        fileData = file
    } else {
        switch (true) {
            case variant === "shatter":
            case variant === "thunderwave":
                file = handler.explosionColor === "random" ? `autoanimations.explosion.${variant}` : `autoanimations.explosion.${variant}.${color}`;
                fileData = jb2a.explosion[variant][Object.keys(jb2a.explosion[variant])[0]]
                break;
            case variant === "boulder":
                file = `autoanimations.explosion.${variant}`;
                fileData = jb2a['explosion'][variant];
                break;
            case variant === "antilife-shell":
                file = `autoanimations.explosion.antilifeshell`;
                fileData = jb2a['explosion']['antilifeshell'];
                break;
            default:
                file = handler.explosionColor === "random" ? `autoanimations.explosion.${handler.explosionVariant}` : `autoanimations.explosion.${handler.explosionVariant}.${handler.explosionColor}`;
                fileData = jb2a['explosion'][variant][Object.keys(jb2a['explosion'][variant])[0]][0]
        }
    }
    let metadata = await getVideoDimensionsOf(fileData);//get video metadata
    let scale = ((200 * handler.explosionRadius) / (metadata.width))

    //handler.item.setFlag("autoanimations", "defaults.explosion.file", filePath)
    //handler.item.setFlag("autoanimations", "defaults.explosion.scale", scale)
    //handler.item.setFlag("autoanimations", "defaults.explosion.metadata", videoData)
    return { file, scale, metadata };
}

export async function buildTokenAnimationFile(jb2a, itemName, handler) {
    let color = handler.color;
    let variant = handler.spellVariant ?? "01";
    let file;
    let msFile;
    let fileData;
    //console.log("Item Name for file build is " + itemName)
    if (handler.enableCustom01) {
        file = handler.custom01
        msFile = handler.custom01
        fileData = file
    } else {
        switch (itemName) {
            case "generichealing":
                if (!handler.color || handler.color === "a1") { color = handler.defaultColor }
                file = color === "random" ? `autoanimations.${itemName}.${variant}` : `autoanimations.${itemName}.${variant}.${color}`;
                fileData = jb2a["generichealing"][variant][Object.keys(jb2a["generichealing"][variant])[0]]
                break;
            case "mistystep":
                if (!handler.color || handler.color === "a1") { color = handler.defaultColor }
                file = color === "random" ? `autoanimations.${itemName}.01` : `autoanimations.${itemName}.01.${color}`;
                msFile = color === "random" ? `autoanimations.${itemName}.02` : `autoanimations.${itemName}.02.${color}`;
                fileData = jb2a[itemName]["01"][Object.keys(jb2a[itemName]["01"])[0]]
                break;
            default:
                if (!handler.color || handler.color === "a1") { color = handler.defaultColor }
                file = color === "random" ? `autoanimations.${itemName}` : `autoanimations.${itemName}.${color}`;
                fileData = jb2a[itemName][Object.keys(jb2a[itemName])[0]]
                break;
        }
    }
    let metadata = await getVideoDimensionsOf(fileData);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.primary.file", filePath)
    //handler.item.setFlag("autoanimations", "defaults.primary.msFile", filePath02)
    //handler.item.setFlag("autoanimations", "defaults.primary.metadata", videoData)

    return { file, msFile, metadata };
}

export async function buildTemplateFile(jb2a, handler) {
    let flags = handler.templates;
    let file;
    let file2;
    const variant = handler.spellVariant || "01";
    if (handler.templates.customAnim) {
        file = handler.templates.customPath
        file2 = file
    } else {
        switch (handler.templates?.tempAnim) {
            case "fogcloud":
                file = `autoanimations.templates.${flags.tempType}.${flags.tempAnim}`;
                file2 = jb2a['templates'][flags.tempType][flags.tempAnim];
                break;
            case "cloudofdaggers":
                file = `autoanimations.templates.${flags.tempType}.${flags.tempAnim}.${variant}.${flags.tempColor}`;
                file2 = jb2a['templates'][flags.tempType][flags.tempAnim][variant][flags.tempColor];
                break;
            case "lightningbolt":
                file = flags.tempColor === "random" ? `autoanimations.templates.${flags.tempType}.${flags.tempAnim}.${variant}` : `autoanimations.templates.${flags.tempType}.${flags.tempAnim}.${variant}.${flags.tempColor}`;
                file2 = flags.tempColor === "random" ? jb2a['templates'][flags.tempType][flags.tempAnim][variant][Object.keys(jb2a['templates'][flags.tempType][flags.tempAnim][variant])[0]] : jb2a['templates'][flags.tempType][flags.tempAnim][variant][flags.tempColor];
                break;
            default:
                file = flags.tempColor === "random" ? `autoanimations.templates.${flags.tempType}.${flags.tempAnim}` : `autoanimations.templates.${flags.tempType}.${flags.tempAnim}.${flags.tempColor}`;
                file2 = flags.tempColor === "random" ? jb2a['templates'][flags.tempType][flags.tempAnim][Object.keys(jb2a['templates'][flags.tempType][flags.tempAnim])[0]] : jb2a['templates'][flags.tempType][flags.tempAnim][flags.tempColor];
        }
    }
    let metadata = await getVideoDimensionsOf(file2);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.primary.file", filePath)
    //handler.item.setFlag("autoanimations", "defaults.primary.fileData", fileData)
    //handler.item.setFlag("autoanimations", "defaults.primary.metadata", videoData)
    let loops = handler.templates.tempLoop;
    let delay = handler.templates.loopDelay;
    let level = handler.animLevel;

    return { file, file2, loops, delay, level, metadata };
}

export async function buildSourceTokenFile(jb2a, animName, handler) {
    let file;
    let fileData;
    let color = handler.flags.sourceToken?.color ?? "";
    if (handler.sourceCustomEnable) {
        file = handler.sourceCustomPath
        fileData = file
    } else {
        switch (animName) {
            case "explosion":
            case "impact":
                file = handler.sourceColor === "random" ? `autoanimations.explosion.${animName}` : `autoanimations.explosion.${animName}.${color}`;
                fileData = jb2a.explosion[animName][Object.keys(jb2a.explosion[animName])[0]][0]
                break;
            case "marker":
                if (handler.sourceVariant === "boulder") {
                    file = `autoanimations.tokenEffect.${animName}.${handler.sourceVariant}`;
                    fileData = jb2a['tokenEffect'][animName][handler.sourceVariant];
                } else {
                    file = handler.sourceColor === "random" ? `autoanimations.tokenEffect.${animName}.${handler.sourceVariant}` : `autoanimations.tokenEffect.${animName}.${handler.sourceVariant}.${color}`;
                    fileData = handler.sourceColor === "random" ? jb2a['tokenEffect'][animName][handler.sourceVariant][Object.keys(jb2a['tokenEffect'][animName][handler.sourceVariant])[0]] : jb2a['tokenEffect'][animName][handler.sourceVariant][color]
                }
                break;
            case "divinesmite":
                file = handler.sourceColor === "random" ? `autoanimations.divinesmite.caster` : `autoanimations.divinesmite.caster.${color}`;
                fileData = handler.sourceColor === "random" ? jb2a['divinesmite']['caster'][Object.keys(jb2a['divinesmite']['caster'])[0]] : jb2a['divinesmite']['caster'][color]
                break;
            case "sneakattack":
                file = handler.sourceColor === "random" ? `autoanimations.sneakattack` : `autoanimations.sneakattack.${color}`;
                fileData = handler.sourceColor === "random" ? jb2a['sneakattack'][Object.keys(jb2a['sneakattack'])[0]] : jb2a['sneakattack'][color]
                break;
            default:
                file = handler.sourceColor === "random" ? `autoanimations.tokenEffect.${animName}` : `autoanimations.tokenEffect.${animName}.${color}`;
                fileData = handler.sourceColor === "random" ? jb2a['tokenEffect'][animName][Object.keys(jb2a['tokenEffect'][animName])[0]] : jb2a['tokenEffect'][animName][color]
        }
    }
    let metadata = await getVideoDimensionsOf(fileData);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.source.file", filePath)
    //handler.item.setFlag("autoanimations", "defaults.source.metadata", videoData)

    return { file, metadata };
}

export async function buildTargetTokenFile(jb2a, animName, handler) {
    let file;
    let fileData;
    let color = handler.flags.targetToken?.color ?? "";
    //console.log("animation name is " + animName)
    //console.log(handler.targetVariant)
    if (handler.targetCustomEnable) {
        file = handler.targetCustomPath
        fileData = file
    } else {
        switch (animName) {
            case "explosion":
            case "impact":
                file = handler.targetColor === "random" ? `autoanimations.explosion.${animName}` : `autoanimations.explosion.${animName}.${handler.targetColor}`;
                fileData = jb2a.explosion[animName][Object.keys(jb2a.explosion[animName])[0]][0]
                break;
            case "marker":
                if (handler.targetVariant === "boulder") {
                    file = `autoanimations.tokenEffect.${animName}.${handler.targetVariant}`;
                    fileData = jb2a['tokenEffect'][animName][handler.targetVariant];
                } else {
                    file = handler.targetColor === "random" ? `autoanimations.tokenEffect.${animName}.${handler.targetVariant}` : `autoanimations.tokenEffect.${animName}.${handler.targetVariant}.${color}`;
                    fileData = handler.targetColor === "random" ? jb2a['tokenEffect'][animName][handler.targetVariant][Object.keys(jb2a['tokenEffect'][animName][handler.targetVariant])[0]] : jb2a['tokenEffect'][animName][handler.targetVariant][color]
                }
                break;
            case "divinesmite":
                file = handler.sourceColor === "random" ? `autoanimations.divinesmite.target` : `autoanimations.divinesmite.target.${color}`;
                fileData = handler.sourceColor === "random" ? jb2a['divinesmite']['target'][Object.keys(jb2a['divinesmite']['target'])[0]] : jb2a['divinesmite']['target'][color]
                break;
            case "sneakattack":
                file = handler.sourceColor === "random" ? `autoanimations.sneakattack` : `autoanimations.sneakattack.${color}`;
                fileData = handler.sourceColor === "random" ? jb2a['sneakattack'][Object.keys(jb2a['sneakattack'])[0]] : jb2a['sneakattack'][color]
                break;
            default:
                file = handler.targetColor === "random" ? `autoanimations.tokenEffect.${animName}` : `autoanimations.tokenEffect.${animName}.${color}`;
                fileData = handler.targetColor === "random" ? jb2a['tokenEffect'][animName][Object.keys(jb2a['tokenEffect'][animName])[0]] : jb2a['tokenEffect'][animName][color]
        }
    }
    let metadata = await getVideoDimensionsOf(fileData);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.target.file", filePath)
    //handler.item.setFlag("autoanimations", "defaults.target.metadata", videoData)

    return { file, metadata };
}

export async function buildShieldFile(jb2a, handler) {
    const spellVariant = handler.spellVariant || "01";
    const color = handler.color || "blue";
    const shieldVar = handler.options.shieldVar || "outro_fade";

    const file01 = `autoanimations.shield.${spellVariant}.${color}.intro`;
    const file02 = `autoanimations.shield.${spellVariant}.${color}.loop`;
    const file03 = `autoanimations.shield.${spellVariant}.${color}.${shieldVar}`;

    const fileData = jb2a["shield"]["01"]["blue"]["intro"];
    const metadata = await getVideoDimensionsOf(fileData);

    return { file01, file02, file03, metadata };
}

export async function buildBlessFile(jb2a, handler) {
    const color = handler.color || "yellow";
    const file01 = `autoanimations.bless.${color}.intro`;
    const file02 = `autoanimations.bless.${color}.loop`;
    const ctaFile01 = jb2a.bless[color]["intro"];
    const ctaFile02 = jb2a.bless[color]["loop"];

    let metadata = await getVideoDimensionsOf(ctaFile01);
    let metadata2 = await getVideoDimensionsOf(ctaFile02);

    return { file01, file02, ctaFile01, ctaFile02, metadata, metadata2 }
}

export async function buildHMFile(jb2a, handler) {
    let file01 = `autoanimations.huntersmark.${handler.hmAnim}.pulse.${handler.color}`;
    //let fileData01 = jb2a['huntersmark'][handler.hmAnim]['pulse']['green']
    let file02 = jb2a['huntersmark'][handler.hmAnim]['loop'][handler.color];
    //let videoData = await getVideoDimensionsOf(filePath02);

    return { file01, file02 };
}

export async function buildAuraFile(jb2a, handler) {
    let namePrior = handler.animName;
    const name = namePrior.replace(/\s+/g, '');
    const variant = handler.spellVariant || "01";
    let color;
    let file;
    if (handler.enableCustom01) {
        file = handler.custom01
    } else {
        switch (name) {
            case "fogcloud":
                color = "white";
                break;
            case "antilifeshell":
                color = "blue";
                break;
            default:
                color = handler.color
        }
        file = name === "cloudofdaggers" ? jb2a[name][variant][color] : jb2a[name][color];
    }

    return { file }
}

function getVideoDimensionsOf(url) {
    return new Promise(resolve => {
        // create the video element
        const video = document.createElement('video');
        video.preload = "metadata";

        // place a listener on it
        video.addEventListener("loadedmetadata", function () {
            // retrieve dimensions
            const height = this.videoHeight;
            const width = this.videoWidth;
            const duration = this.duration
            // send back result
            resolve({ height, width, duration });
        }, false);
        video.src = url;

    });
}
