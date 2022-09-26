export function buildTargetSeq(targetFX, target, handler, addDelay = 0) {
    let hit;
    if (handler.playOnMiss) {
        hit = handler.hitTargetsId.includes(target.id) ? true : false;
    } else {
        hit = true;
    }

    //const targetTokenGS = targetFX.options.isRadius ? targetFX.options.size * 2 : (target.w / canvas.grid.size) * 1.5 * targetFX.options.size;
    const setSize = handler.getSize(targetFX.options.isRadius, targetFX.options.size, target)

    targetFX.targetSeq = new Sequence();

    let targetEffect = targetFX.targetSeq.effect()
    targetEffect.delay(targetFX.options.delay + addDelay)
    targetEffect.file(targetFX.path?.file, true)
    targetEffect.atLocation(target)
    targetEffect.size(setSize, { gridUnits: true })
    targetEffect.repeats(targetFX.options.repeat, targetFX.options.repeatDelay)
    targetEffect.elevation(targetFX.options.elevation)
    if (targetFX.options.isMasked) {
        targetEffect.mask(target)
    }
    targetEffect.persist(targetFX.options.persistent)
    targetEffect.fadeOut(500)
    targetEffect.opacity(targetFX.options.opacity)
    targetEffect.zIndex(targetFX.options.zIndex)

    return targetFX;
}
