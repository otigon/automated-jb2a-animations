export async function particleEffects(handler) {
    const options3d = handler.flags?.levels3d ?? {};
    const explode3d = options3d.explosions || {};
    const sourceToken = handler.actorToken;
    //const target = handler.allTargets[0];
    const targets = handler.allTargets;

    const data = {
        type: options3d.type || "projectile",
        speed: options3d.speed || 1,
        repeat: options3d.repeat || 1,
        arc: options3d.arc || 0,
        delay: options3d.delay || 500,
        scale: options3d.scale || 1,
        color01: options3d.color01,
        color02: options3d.color02,
        sprite: options3d.sprite || "modules/levels-3d-preview/assets/particles/star_09.png",
        explosion: {
            enable: explode3d.enable || false,
            color01: explode3d.color01,
            color02: explode3d.color02,
            speed: explode3d.speed || 1,
            gravity: explode3d.gravity || 2,
            life: explode3d.life || 500,
            rate: explode3d.rate || 10,
            emitterSize: explode3d.emitterSize || 1,
            alpha: explode3d.alpha || 0.5,
            mass: explode3d.mass || 400,
            sprite: explode3d.sprite || "modules/levels-3d-preview/assets/particles/dust.png",
            scale: explode3d.scale || 1,
        }
    }
    console.log(data)
    /*
    new Particle3D(data.type)
        .from(sourceToken)
        .to(target)
        .speed(data.speed)
        .repeat(data.repeat)
        .arc(data.arc)
        .delay(data.delay)
        .color(data.color01, data.color02)
        .scale(data.scale)
        .sprite(data.sprite)
    .start()
    */
   if (data.explosion.enable) {
        let target;
        if (handler.allTargets.length > 0) {
            for (target of targets) {
                new Particle3D(data.type)
                .from(sourceToken)
                .to(target)
                .speed(data.speed)
                .repeat(data.repeat)
                .arc(data.arc)
                .delay(data.delay)
                .color(data.color01, data.color02)
                .scale(data.scale)
                .sprite(data.sprite)
            .onEnd(
                new Particle3D("e")
                    .to(target)
                    .sprite(data.explosion.sprite)
                    .speed(data.explosion.speed)
                    .color(data.explosion.color01, data.explosion.color02)
                    .scale(data.explosion.scale)
                    .gravity(data.explosion.gravity)
                    .life(data.explosion.life)
                    .rate(data.explosion.rate, 1)
                    .emitterSize(data.explosion.emitterSize)
                    .alpha(data.explosion.alpha)
                    .mass(data.explosion.mass)
            )
            .start()
            }
        }
    } else {
        let target;
        for (target of targets) {
            new Particle3D(data.type)
            .from(sourceToken)
            .to(target)
            .speed(data.speed)
            .repeat(data.repeat)
            .arc(data.arc)
            .delay(data.delay)
            .color(data.color01, data.color02)
            .scale(data.scale)
            .sprite(data.sprite)
        .start()
        }
    }
}