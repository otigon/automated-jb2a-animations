import { AAanimationData } from "../aa-classes/animation-data.js";

export async function particleEffects(handler, autoObject) {

    const options3d = autoObject ? autoObject.levels3d ?? {} : handler.flags?.levels3d ?? {};
    if (!options3d.type) { return; }
    const sourceToken = handler.actorToken;
    //const target = handler.allTargets[0];
    const targets = handler.allTargets;

    const data = await AAanimationData.compileParticleData(autoObject, options3d)
    console.log(data)
/*
    switch (options3d.type) {
        case "projectile":
        case "ray":
            projectileRay();
            break;
        case "explosion":
            explosion();
            break;
        case "sprite":
            sprite();
            break;
    }
*/

    class ParticleFunctions {
        static projectile(data, sourceToken, targets) {
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

        static ray(data, sourceToken, targets) {
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

        static explosion(data, sourceToken, targets) {
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
    
        static sprite(data, sourceToken, targets) {
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

    ParticleFunctions[options3d.type](data, sourceToken, targets)
    /*
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

    function sprite() {
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
    */
}