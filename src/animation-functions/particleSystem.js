import { particleDefaultValues } from "./particleDefaults.js";

export async function particleEffects(handler, autoObject) {

    const options3d = autoObject ? autoObject.levels3d ?? {} : handler.flags?.levels3d ?? {};
    if (!options3d.type) { return; }
    const sourceToken = handler.actorToken;
    //const target = handler.allTargets[0];
    const targets = handler.allTargets;

    const data = await compileParticleData(autoObject)
    console.log(data)

    switch (options3d.type) {
        case "projectile":
        case "ray":
            projectileRay();
            break;
        case "explosion":
            explosion();
            break;
        case "sprite":
            spriteShoot();
            break;
    }

    async function compileParticleData(autoObject) {
        const type = options3d.type;
        if (autoObject) {
            const explode3d = options3d.addexplosion || {};
            const data = {
                type: type,
                speed: options3d.speed ?? particleDefaultValues[type].speed,
                repeat: options3d.repeat ?? particleDefaultValues[type].repeat,
                delay: options3d.delay ?? particleDefaultValues[type].delay,
                arc: options3d.arc ?? particleDefaultValues[type].arc,
                scale: options3d.scale ?? particleDefaultValues[type].scale,
                color01: options3d.color01 ?? particleDefaultValues[type].color01,
                color02: options3d.color02 ?? particleDefaultValues[type].color02,
                sprite: options3d.sprite ?? particleDefaultValues[type].sprite,
                life: options3d.life ?? particleDefaultValues[type].life,
                emittersize: options3d.emittersize ?? particleDefaultValues[type].emittersize,
                alpha: options3d.alpha ?? particleDefaultValues[type].alpha,
                mass: options3d.mass ?? particleDefaultValues[type].mass,
                gravity: options3d.gravity ?? particleDefaultValues[type].gravity,
                rate: options3d.rate ?? particleDefaultValues[type].rate,
                explosion: {
                    enable: explode3d.enable || false,
                    color01: explode3d.color01 ?? particleDefaultValues[type].explosion.color01,
                    color02: explode3d.color02 ?? particleDefaultValues[type].explosion.color02,
                    speed: explode3d.speed ?? particleDefaultValues[type].explosion.speed,
                    gravity: explode3d.gravity ?? particleDefaultValues[type].explosion.gravity,
                    life: explode3d.life ?? particleDefaultValues[type].explosion.life,
                    rate: explode3d.rate ?? particleDefaultValues[type].explosion.rate,
                    emittersize: explode3d.emittersize ?? particleDefaultValues[type].explosion.emittersize,
                    alpha: explode3d.alpha ?? particleDefaultValues[type].explosion.alpha,
                    mass: explode3d.mass ?? particleDefaultValues[type].explosion.mass,
                    sprite: explode3d.sprite ?? particleDefaultValues[type].explosion.sprite,
                    scale: explode3d.scale ?? particleDefaultValues[type].explosion.scale,
                }
            };
            return data;
        } else {
            const explode3d = options3d[type].addexplosion || {};
            const data = {
                type: type,
                speed: options3d[type].speed ?? particleDefaultValues[type].speed,
                repeat: options3d[type].repeat ?? particleDefaultValues[type].repeat,
                delay: options3d[type].delay ?? particleDefaultValues[type].delay,
                arc: options3d[type].arc ?? particleDefaultValues[type].arc,
                scale: options3d[type].scale ?? particleDefaultValues[type].scale,
                color01: options3d[type].color01 ?? particleDefaultValues[type].color01,
                color02: options3d[type].color02 ?? particleDefaultValues[type].color02,
                sprite: options3d[type].sprite ?? particleDefaultValues[type].sprite,
                life: options3d[type].life ?? particleDefaultValues[type].life,
                emittersize: options3d[type].emittersize ?? particleDefaultValues[type].emittersize,
                alpha: options3d[type].alpha ?? particleDefaultValues[type].alpha,
                mass: options3d[type].mass ?? particleDefaultValues[type].mass,
                gravity: options3d[type].gravity ?? particleDefaultValues[type].gravity,
                rate: options3d[type].rate ?? particleDefaultValues[type].rate,
                explosion: {
                    enable: explode3d.enable || false,
                    color01: explode3d.color01 ?? particleDefaultValues[type].explosion.color01,
                    color02: explode3d.color02 ?? particleDefaultValues[type].explosion.color02,
                    speed: explode3d.speed ?? particleDefaultValues[type].explosion.speed,
                    gravity: explode3d.gravity ?? particleDefaultValues[type].explosion.gravity,
                    life: explode3d.life ?? particleDefaultValues[type].explosion.life,
                    rate: explode3d.rate ?? particleDefaultValues[type].explosion.rate,
                    emittersize: explode3d.emittersize ?? particleDefaultValues[type].explosion.emittersize,
                    alpha: explode3d.alpha ?? particleDefaultValues[type].explosion.alpha,
                    mass: explode3d.mass ?? particleDefaultValues[type].explosion.mass,
                    sprite: explode3d.sprite ?? particleDefaultValues[type].explosion.sprite,
                    scale: explode3d.scale ?? particleDefaultValues[type].explosion.scale,
                }
            };
            return data;
        }
    }


    function projectileRay() {
        if (data.explosion.enable) {
            new Particle3D(data.type)
                .from(sourceToken)
                .to(targets)
                .speed(data.speed)
                .repeat(data.repeat)
                .arc(data.arc)
                .delay(data.delay)
                .color(data.color01, data.color02)
                .scale(data.scale)
                .sprite(data.sprite)
                .life(data.life)
                .emitterSize(data.emittersize)
                .alpha(data.alpha)
                .mass(data.mass)
                .gravity(data.gravity)
                .rate(data.rate, 1)
                .onEnd(
                    new Particle3D("e")
                        .sprite(data.explosion.sprite)
                        .speed(data.explosion.speed)
                        .color(data.explosion.color01, data.explosion.color02)
                        .scale(data.explosion.scale)
                        .gravity(data.explosion.gravity)
                        .life(data.explosion.life)
                        .rate(data.explosion.rate, 1)
                        .emittersize(data.explosion.emittersize)
                        .alpha(data.explosion.alpha)
                        .mass(data.explosion.mass)
                )
                .start()
        } else {
            new Particle3D(data.type)
                .from(sourceToken)
                .to(targets)
                .speed(data.speed)
                .repeat(data.repeat)
                .arc(data.arc)
                .delay(data.delay)
                .color(data.color01, data.color02)
                .scale(data.scale)
                .sprite(data.sprite)
                .life(data.life)
                .emitterSize(data.emittersize)
                .alpha(data.alpha)
                .mass(data.mass)
                .gravity(data.gravity)
                .rate(data.rate, 1)
                .start()
        }
    }

    function explosion() {
        new Particle3D("e")
            .to(targets)
            .sprite("modules/levels-3d-preview/assets/particles/dust.png")
            .speed(data.speed)
            .repeat(data.repeat)
            .delay(data.delay)
            .color(data.color01, data.color02)
            .scale(data.scale, 2)
            .gravity(data.gravity)
            .life(data.life)
            .rate(data.rate, 1)
            .emitterSize(data.emittersize)
            .alpha(data.alpha, 0)
            .mass(data.mass)
            .start()
    }

    function spriteShoot() {
        if (data.explosion.enable) {
            new Particle3D(data.type)
                .from(sourceToken)
                .to(targets)
                .speed(data.speed)
                .repeat(data.repeat)
                .delay(data.delay)
                .color(data.color01)
                .scale(data.scale)
                .sprite(data.sprite)
                .alpha(data.alpha)
                .onEnd(
                    new Particle3D("e")
                        .sprite(data.explosion.sprite)
                        .speed(data.explosion.speed)
                        .color(data.explosion.color01, data.explosion.color02)
                        .scale(data.explosion.scale)
                        .gravity(data.explosion.gravity)
                        .life(data.explosion.life)
                        .rate(data.explosion.rate, 1)
                        .emitterSize(data.explosion.emittersize)
                        .alpha(data.explosion.alpha)
                        .mass(data.explosion.mass)
                )
                .start()
        } else {
            new Particle3D(data.type)
                .from(sourceToken)
                .to(targets)
                .speed(data.speed)
                .repeat(data.repeat)
                .delay(data.delay)
                .color(data.color01)
                .scale(data.scale)
                .sprite(data.sprite)
                .alpha(data.alpha)
                .start()
        }
    }

}