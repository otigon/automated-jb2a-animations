export async function version03(flags) {
    const v3Flags = flags || {};
    if (v3Flags.killAnim) {
        v3Flags.version = 3;
        //await item.update({ 'flags.-=autoanimations': null })
        //await item.update({ 'flags.autoanimations': v3Flags })
        return v3Flags;
    }
    if (v3Flags.override) {
        if (v3Flags.animType === 'template') {
            v3Flags.options.scaleX = v3Flags.options.scale || 1;
            v3Flags.options.scaleY = v3Flags.options.scale || 1;
        }
        if (v3Flags.animType === 'preset') {
            if (v3Flags.animation === 'teleportation') {
                v3Flags.options.measureType = 'alternating';
                v3Flags.options.hideFromPlayers = v3Flags.options?.hideTemplate === true ? true : false;
                v3Flags.options.enableCustom02 = v3Flags.options?.enableCustom ? true : false;
                v3Flags.options.customPath02 = v3Flags.options?.enableCustom ? v3Flags.options?.customPath : "";
                v3Flags.options.name02 = v3Flags.options?.name ?? "mistystep";
                v3Flags.options.variant02 = "02";
                v3Flags.color02 = v3Flags.color || "blue";
                v3Flags.options.scale02 = v3Flags.options?.scale ?? 1;
            }
        }
        v3Flags.version = 3;
        //await item.update({ 'flags.-=autoanimations': null })
        //await item.update({ 'flags.autoanimations': v3Flags })
        //console.warn(`DEBUG | Automated Animations | Version 3 Flag Migration Complete`, v3Flags)
        return v3Flags
    }
}
