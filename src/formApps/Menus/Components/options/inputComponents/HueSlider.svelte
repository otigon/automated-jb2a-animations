<script>
    export let animation;

    export let label = "Change Hue";

    let colorVar = $animation.primary.options.hue;
</script>

<div class="c-range">
    <label for="">{label}</label>
    <input
        type="number"
        bind:value={$animation.primary.options.hue}
        placeholder="1"
        max=360
        min=0
    />
    <div class="c-range">
        <div class="c-range__holder">
            <input
                class="c-range__slider js-range-input"
                style="border:none; background:none;"
                type="range"
                hue={$animation.primary.options.hue}
                bind:value={$animation.primary.options.hue}
                max="360"
            />
            <output class="c-range__output" />
        </div>
    </div>
</div>

<style lang="scss">
    /*------------------------------------*\
#SCSS stuff
\*------------------------------------*/

    $track-h: 5px;
    $thumb-d: 15px;

    @mixin track() {
        border: none;
        width: 100%;
        height: $track-h;
        border-radius: $track-h;
        background: linear-gradient(
            to right,
            #ff0000 0%,
            #ffff00 17%,
            #00ff00 33%,
            #00ffff 50%,
            #0000ff 67%,
            #ff00ff 83%,
            #ff0000 100%
        );
    }

    @mixin thumb() {
        border: 4px solid white;
        width: $thumb-d;
        height: $thumb-d;
        border-radius: 50%;
        border: 2px solid black;
        background: none;
    }

    .c-range__holder {
        display: flex;
        align-items: center;
        position: relative;
    }

    .c-range__slider {
        width: 100%;
        margin: 0;
        padding: 0;
        min-height: $thumb-d;
        background: transparent;
        outline: none;

        &,
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
        }

        &::-webkit-slider-runnable-track {
            @include track();
        }
        &::-moz-range-track {
            @include track;
        }
        &::-ms-track {
            @include track;
        }

        &::-webkit-slider-thumb {
            margin-top: 0.5 * ($track-h - $thumb-d);
            @include thumb;
        }
        &::-moz-range-thumb {
            @include thumb;
        }
        &::-ms-thumb {
            margin-top: 0;
            @include thumb;
        }

        &::-ms-tooltip {
            display: none;
        }

        &:focus,
        &:active {
            + .c-range__output {
                opacity: 1;
                //transform: translate(calc((var(--hue) / 360) * -50%), 0);
            }
        }
    }
</style>
