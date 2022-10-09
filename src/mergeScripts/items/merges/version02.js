export async function version02(flags) {
    /**
     * allSounds.item.enableAudio --------------> audio.a01.enable
     * allSounds.item.file ---------------------> audio.a01.file
     * allSounds.item.delay --------------------> audio.a01.delay
     * allSounds.item.volume -------------------> audio.a01.volume
     * 
     * allSounds.explosion.audioExplodeEnabled -> audio.e01.enable
     * allSounds.explosion.file ----------------> audio.e01.file
     * allSounds.explosion.delay ---------------> audio.e01.delay
     * allSounds.explosion.volume --------------> audio.e01.volume
     * 
     */
    const v2Flags = flags || {};
    const allSounds = v2Flags.allSounds || {};
    v2Flags.audio = {
        a01: {
            enable: allSounds.item?.enableAudio ?? false,
            file: allSounds.item?.file ?? "",
            delay: allSounds.item?.delay ?? 0,
            volume: allSounds.item?.volume ?? 0.25,
        },
        e01: {
            enable: allSounds.explosion?.audioExplodeEnabled || false,
            file: allSounds.explosion?.file ?? "",
            delay: allSounds.explosion?.delay ?? 0,
            volume: allSounds.explosion?.volume ?? 0.25,
        }
    }
    v2Flags.version = 2;

    //await item.update({ 'flags.-=autoanimations': null })
    //await item.update({ 'flags.autoanimations': v2Flags })
    //console.warn(`DEBUG | Automated Animations | Version 2 Flag Migration Complete`, v2Flags)
    return v2Flags;
}