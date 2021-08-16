import { JB2APATREONDB } from "../databases/jb2a-patreon-database.js";
import { JB2AFREEDB } from "../databases/jb2a-free-database.js";
import { AAITEMCHECK } from "../item-arrays.js";

export async function buildFile(getMeta, name, animationType, animationVariant, animationColor) {
    function moduleIncludes(test) {
        return !!game.modules.get(test);
    }
    const jb2a = moduleIncludes("jb2a_patreon") === true ? JB2APATREONDB : JB2AFREEDB;
    const path = name.replace(/melee|range|double/gi, function(x) {
        return "";
    });
    const type = animationType;
    const variantArray = Object.keys(jb2a[path][type]);
    const variant = variantArray.some(el => animationVariant.includes(el)) ? animationVariant : variantArray[0];

    let color = animationColor.replace(/\s+/g, '');
    //color = color.replace(/\s+/g, '');
    const colorArray = Object.keys(jb2a[path][type][variant]);
    if (animationColor === "random") { 
        color = animationColor;
    } else {
        color = colorArray.some(el => color.includes(el)) ? color : colorArray[0];
    }

    const file = color === "random" ? `autoanimations.${path}.${type}.${variant}` : `autoanimations.${path}.${type}.${variant}.${color}`;
    const msFile = color === "random" ? `autoanimations.${path}.${type}.02` : `autoanimations.${path}.${type}.02.${color}`;
    let fileData;
    let metadata;
    if (getMeta) {
        fileData = color === "random" ? jb2a[path][type][variant][Object.keys(jb2a[path][type][variant])[0]][0] : jb2a[path][type][variant][color][0];
        metadata = await getVideoDimensionsOf(fileData);
    }

    return {file, msFile, metadata}
}

export async function buildWeaponFile(jb2a, name, handler) {

    let color = handler.color;
    color = color === "a1" || !color || color === "n1" ? handler.defaultColor.replace(/\s+/g, '') : color.replace(/\s+/g, '')
    let itemName = name.replace("melee", "")
    let file;
    let fileData;
    let variant = itemName === "unarmedstrike" || itemName === "flurryofblows" ? handler.uaStrikeType : "01";
    let variantArray = Object.keys(jb2a[itemName].melee);
    variant = variantArray.some(el => variant.includes(el)) ? variant : variantArray[0];
    let colorArray = Object.keys(jb2a[itemName].melee[variant])
    if (handler.enableCustom01) {
        file = handler.custom01;
        fileData = handler.custom01;
    } else {
        if (color === "random") { } else {
            color = colorArray.some(el => color.includes(el)) ? color : colorArray[0];
        }
        file = color === "random" ? `autoanimations.${itemName}.melee.${variant}` : `autoanimations.${itemName}.melee.${variant}.${color}`
        if (itemName === "unarmedstrike" || itemName === "flurryofblows") {
            fileData = jb2a[itemName].melee[variant]["blue"][Object.keys(jb2a[itemName].melee[variant]["blue"])[0]];
        } else {
            fileData = color === "random" ? jb2a[itemName].melee[variant][Object.keys(jb2a[itemName].melee[variant])[0]] : jb2a[itemName].melee[variant][color];
        }
    }
    let metadata = await getVideoDimensionsOf(fileData);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.primary.file", filePath)
    return { file, metadata };
}

export async function buildSwitchFile(jb2a, name, handler) {

    let itemName = name.replace("range", "")
    if (itemName.includes("lasersword")) { itemName = itemName.replace("double", "") };
    let dmgType = handler.switchDmgType ?? "physical";
    if (itemName === "arrow") { dmgType = handler.switchDmgType ?? "regular" } else {
        dmgType = handler.switchDmgType ?? "physical";
    }

    let variantArray = Object.keys(jb2a[itemName].range);
    let variant = variantArray.some(el => handler.switchVariant.includes(el)) ? handler.switchVariant : variantArray[0];

    let color = handler.switchColor;
    color = color === "a1" || !color || color === "n1" ? "white" : color;
    let colorArray = Object.keys(jb2a[itemName].range[variant])
    if (color === "random") { } else {
        color = colorArray.some(el => color.includes(el)) ? color : colorArray[0];
    }
    //let fileData;
    //let variant = handler.spellVariant ?? "01";
    let file;
    let fileReturn;

    file = color === "random" ? `autoanimations.${itemName}.range.${variant}` : `autoanimations.${itemName}.range.${variant}.${color}`;
    fileReturn = `autoanimations.${itemName}.return.${variant}.${color}`
    //let videoData = await getVideoDimensionsOf(fileData['30ft']);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.primary.file", filePath)
    return { file, fileReturn };
}

export async function buildRangedFile(jb2a, name, handler) {

    let dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
    let itemName = name.replace("range", "")
    if (itemName.includes("lasersword")) { itemName = itemName.replace("double", "") };
    if (itemName === "arrow") { dmgType = handler.rangedOptions?.rangeDmgType ?? "regular" } else {
        dmgType = handler.rangedOptions?.rangeDmgType ?? "physical";
    }
    const spellVariant = handler.spellVariant || "01";
    let color = handler.color;
    color = color === "a1" || !color || color === "n1" ? handler.defaultColor : handler.color;
    color = color.replace(/\s+/g, '');
    let variantArray = Object.keys(jb2a[itemName].range);
    console.log(variantArray)
    let variant = AAITEMCHECK.spellattack.some(el => itemName.includes(el)) ? spellVariant : dmgType;
    variant = itemName === "lasersword" || itemName === "dagger" || itemName === "handaxe" ? handler.dtVar : variant;
    variant = variantArray.some(el => variant.includes(el)) ? variant : variantArray[0];
    let colorArray = Object.keys(jb2a[itemName].range[variant])

    if (color === "random") { } else {
        color = colorArray.some(el => color.includes(el)) ? color : colorArray[0];
    }
    let file = handler.color === "random" ? `autoanimations.${itemName}.range.${variant}` : `autoanimations.${itemName}.range.${variant}.${color}`;
    console.log(file)
    //let videoData = await getVideoDimensionsOf(fileData['30ft']);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.primary.file", filePath)
    return { file };
}

export async function buildAfterFile(jb2a, handler) {
    let color = handler.explosionColor;
    color = color.replace(/\s+/g, '');
    let path = handler.explosionVariant === "boulder" ? "boulderimpact" : handler.explosionVariant;
    let variant = '01';
    let colorArray = Object.keys(jb2a[path].static[variant])
    if (color === "random") { } else {
        color = colorArray.some(el => color.includes(el)) ? color : colorArray[0];
    }
    let file;
    let fileData;
    if (handler.customExplode) {
        file = handler.customExplosionPath
        fileData = file
    } else {
        file = color === "random" ? `autoanimations.${path}.static.${variant}` : `autoanimations.${path}.static.${variant}.${color}`;
        fileData = jb2a[path].static[variant][Object.keys(jb2a[path].static[variant])[0]][0]
    }
    let metadata = await getVideoDimensionsOf(fileData);//get video metadata
    let scale = ((200 * handler.explosionRadius) / (metadata.width))

    //handler.item.setFlag("autoanimations", "defaults.explosion.file", filePath)
    //handler.item.setFlag("autoanimations", "defaults.explosion.scale", scale)
    //handler.item.setFlag("autoanimations", "defaults.explosion.metadata", videoData)
    return { file, scale, metadata };
}

export async function buildTokenAnimationFile(jb2a, itemName, handler) {
    let color = !handler.color || handler.color === "a1" ? handler.defaultColor : handler.color;
    color = color.replace(/\s+/g, '');
    let variant = handler.spellVariant;
    let variantArray = Object.keys(jb2a[itemName].static);
    variant = variantArray.some(el => variant.includes(el)) ? variant : variantArray[0];
    let colorArray = Object.keys(jb2a[itemName].static[variant])
    if (color === "random") { } else {
        color = colorArray.some(el => color.includes(el)) ? color : colorArray[0];
    }
    let file;
    let msFile;
    let fileData;
    if (handler.enableCustom01) {
        file = handler.custom01
        msFile = handler.custom01
        fileData = file
    } else {
        file = color === "random" ? `autoanimations.${itemName}.static.${variant}` : `autoanimations.${itemName}.static.${variant}.${color}`;
        fileData = jb2a[itemName].static[variant][Object.keys(jb2a[itemName].static[variant])[0]];
        msFile = color === "random" ? `autoanimations.${itemName}.static.02` : `autoanimations.${itemName}.static.02.${color}`;
    }
    let metadata = await getVideoDimensionsOf(fileData);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.primary.file", filePath)
    //handler.item.setFlag("autoanimations", "defaults.primary.msFile", filePath02)
    //handler.item.setFlag("autoanimations", "defaults.primary.metadata", videoData)

    return { file, msFile, metadata };
}

export async function buildTemplateFile(jb2a, handler) {
    let flags = handler.templates;
    let color = flags.tempColor;
    color = color.replace(/\s+/g, '');
    const type = flags.tempType;

    let animation = flags.tempAnim;
    let animationArray = Object.keys(jb2a.templates[type]);
    animation = animationArray.some(el => animation.includes(el)) ? animation : animationArray[0];

    let variant = handler.spellVariant;
    let variantArray = Object.keys(jb2a.templates[type][animation]);
    variant = variantArray.some(el => variant.includes(el)) ? variant : variantArray[0];
    let colorArray = Object.keys(jb2a.templates[type][animation][variant])
    if (color === "random") { } else {
        color = colorArray.some(el => color.includes(el)) ? color : colorArray[0];
    }

    let file;
    let file2;
    if (handler.templates.customAnim) {
        file = handler.templates.customPath
        file2 = file
    } else {
        file = `autoanimations.templates.${type}.${animation}.${variant}.${color}`;
        file2 = jb2a['templates'][type][animation][variant][color];
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
    let color = handler.sourceColor ?? "";
    color = color.replace(/\s+/g, '');
    const path = animName;
    let variant = handler.sourceVariant;
    const variantArray = Object.keys(jb2a[path].static)
    variant = variantArray.some(el => variant.includes(el)) ? variant : variantArray[0];
    let colorArray = Object.keys(jb2a[path].static[variant])
    if (color === "random") { } else {
        color = colorArray.some(el => color.includes(el)) ? color : colorArray[0];
    }

    if (handler.sourceCustomEnable) {
        file = handler.sourceCustomPath
        fileData = file
    } else {
        file = color === "random" ? `autoanimations.${path}.static.${variant}` : `autoanimations.${path}.static.${variant}.${color}`;
        fileData = color === "random" ? jb2a[path].static[variant][Object.keys(jb2a[path].static[variant])[0]][0] : jb2a[path].static[variant][color]
    }
    let metadata = await getVideoDimensionsOf(fileData);//get video metadata
    //handler.item.setFlag("autoanimations", "defaults.source.file", filePath)
    //handler.item.setFlag("autoanimations", "defaults.source.metadata", videoData)

    return { file, metadata };
}
/*
export async function buildSourceTokenFile(jb2a, animName, handler) {
    let file;
    let fileData;
    let color = handler.flags.sourceToken?.color ?? "";
    color = color.replace(/\s+/g, '');
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
*/
export async function buildTargetTokenFile(jb2a, animName, handler) {
    let file;
    let fileData;
    let color = handler.flags.targetToken?.color ?? "";
    color = color.replace(/\s+/g, '');
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
    let color = handler.color || "blue";
    color = color.replace(/\s+/g, '');
    const shieldVar = handler.options.shieldVar || "outro_fade";

    const file01 = `autoanimations.shield.${spellVariant}.${color}.intro`;
    const file02 = `autoanimations.shield.${spellVariant}.${color}.loop`;
    const file03 = `autoanimations.shield.${spellVariant}.${color}.${shieldVar}`;

    const fileData = jb2a["shield"]["01"]["blue"]["intro"];
    const metadata = await getVideoDimensionsOf(fileData);

    return { file01, file02, file03, metadata };
}

export async function buildBlessFile(jb2a, handler) {
    let color = handler.color || "yellow";
    color = color.replace(/\s+/g, '');
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
                color = color.replace(/\s+/g, '');
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
