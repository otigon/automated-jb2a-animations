<script>
    import { getContext }   from "svelte";

    //export let animation;
    let { animation } = getContext('animation-data');

    export let section;
    export let field;
    export let isDisabled = "";
    export let placeholder = 1;
    export let step = 1;

    $: isRadius = $animation.data[section].options.isRadius;

    const scaleLabel = game.i18n.localize("autoanimations.menus.scale");
    const radiusLabel = game.i18n.localize("autoanimations.menus.radius");

    function switchScale() {
        if (!animation._data.data[section].options.isRadius) { return; }
        $animation.data[section].options.isRadius = false;
    }
    function switchRadius() {
        if (animation._data.data[section].options.isRadius) { return; }
        $animation.data[section].options.isRadius = true;
    }
</script>

<div class="{isDisabled}">
    <div>
        <label for="" class={`aaLabelBorder ${!isRadius ? "aaIsSelected" : "aaNotSelected"}`} on:click={() => switchScale()} role=presentation>{scaleLabel}</label>
        <label for=""> &nbsp|&nbsp </label>
        <label for="" class={`aaLabelBorder ${isRadius ? "aaIsSelected" : "aaNotSelected"}`} on:click={() => switchRadius()} role=presentation>{radiusLabel}</label>
    </div>
    <div>
        <input
            type="number"
            bind:value={$animation.data[section].options[field]}
            placeholder={placeholder}
            step={step}
        />
    </div>
</div>

<style lang='scss'>
    .aaLabelBorder {
        border-radius: 5px;
        padding: 1px 5px 1px 5px;
    }
    .aaIsSelected {
        border: 1px solid black;
    }
    .aaNotSelected {
        border: 1px solid rgba(115, 115, 115, 0.623);
    }
</style>
