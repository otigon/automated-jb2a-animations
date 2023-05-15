import { DataSanitizer } from "../../aa-classes/DataSanitizer.js";

export async function particleEffects(handler, animationData = {}) {
    //const options3d = autoObject ? autoObject.levels3d || {} : handler.flags?.levels3d || {};

    const data = await DataSanitizer.compileParticleData(animationData)
    if (!data) { return; }
    const secondary = data.secondary;
    const tokenAnim = data.tokenAnimation;

    const sourceToken = handler.sourceToken;
    //const target = handler.allTargets[0];
    const targets = handler.allTargets;


    /**
     * This checks the "Primary Animation" sounds, and if present
     * will play that sound alongside the 3D Particle Animation
     */
    if (data.sound) {
        //let soundSeq = await new Sequence("Automated Animations");
        const audio = data.sound;
        /*
        soundSeq.sound()
            .file(primary.itemAudio.file, true)
            .volume(primary.itemAudio.volume)
            .delay(primary.itemAudio.delay)
            .repeats(primary.itemAudio.repeat, data.delay)
            .startTime(primary.itemAudio.startTime)
        */
        audio.play()
    }

    const tokenAnimationData = {}

    function compileTokenAnimationData() {
        if (tokenAnim.source) {
            tokenAnimationData.from = {
                id: tokenAnim.sourceType,
                options: {
                    start: tokenAnim.sourceStart,
                    end: tokenAnim.sourceEnd,    
                }
            }
        }
        if (tokenAnim.target) {
            tokenAnimationData.to = {
                id: tokenAnim.targetType,
                options: {
                    start: tokenAnim.targetStart,
                    end: tokenAnim.targetEnd    
                }
            }
        }
        return tokenAnimationData
    }

    class ParticleFunctions {
        static particle(data, sourceToken, targets) {
                const spriteData = new Particle3D(data.type)
                spriteData.from(sourceToken)
                spriteData.to(targets)
                spriteData.speed(data.speed)
                spriteData.repeat(data.repeat)
                spriteData.arc(data.arc)
                spriteData.delay(data.delay)
                spriteData.color(data.color01, data.color02)
                spriteData.scale(data.scale)
                spriteData.sprite(data.sprite)
                spriteData.life(data.life)
                spriteData.emitterSize(data.emittersize)
                spriteData.alpha(data.alpha)
                spriteData.mass(data.mass)
            spriteData.gravity(data.gravity)
            spriteData.rotateTowards(data.rotateTowards)
            spriteData.rotation(data.rotationX, data.rotationY, data.rotationZ)
            spriteData.duration(data.duration)
            spriteData.onCenter(data.onCenter)
            spriteData.autoSize(data.autoSize)
                spriteData.rate(data.rate, 1)
                spriteData.presetIntensity(data.rate)
                if (tokenAnim.enable && (tokenAnim.source || tokenAnim.target)) {
                    spriteData.playAnimation(compileTokenAnimationData())
                }
            if (secondary.enable) {
                    spriteData.onEnd(
                        new Particle3D(secondary.type ?? "e")
                            .sprite(secondary.sprite)
                            .speed(secondary.speed)
                            .color(secondary.color01, secondary.color02)
                            .scale(secondary.scale)
                            .gravity(secondary.gravity)
                            .life(secondary.life)
                            .rate(secondary.rate, 1)
                            .presetIntensity(secondary.rate)
                            .emitterSize(secondary.emittersize)
                            .duration(secondary.duration)
                            .onCenter(secondary.onCenter)
                            .autoSize(secondary.autoSize)
                            .alpha(secondary.alpha)
                            .mass(secondary.mass)
                    )
                }
                spriteData.start()
        }

        static token() {
            let tokens;
            switch (data.playOn) {
                case "target":
                    tokens = targets;
                    break;
                case "default":
                    if (targets.length) {
                        tokens = targets;
                    } else {
                        tokens = sourceToken;
                    }
                    break;
                case "both":
                    if (targets.length) {
                        tokens = [sourceToken, ...targets]
                    } else {
                        tokens = sourceToken
                    }
                    break;
                default:
                    tokens = sourceToken;
            }
            let options = {
                repeats: data.repeat,
                resetTime: data.resetTime
            }
            game.Levels3DPreview.playTokenAnimation(tokens, data.animationType, options);
        }

    }

    data.type == "token" ? ParticleFunctions.token(data, sourceToken, targets) : ParticleFunctions.particle(data, sourceToken, targets)
}