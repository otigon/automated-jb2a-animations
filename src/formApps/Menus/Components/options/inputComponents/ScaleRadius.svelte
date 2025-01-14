<script>
    import { getContext }   from "svelte";
    let { animation } = getContext('animation-data');
    export let section;
    export let field;
    export let isDisabled = "";
    export let placeholder = 1;
    export let step = 1;

    $: isRadius = $animation[section].options.isRadius;

    const scaleLabel = game.i18n.localize("autoanimations.menus.scale");
    const radiusLabel = game.i18n.localize("autoanimations.menus.radius");

    function switchScale() {
        if (!animation._data[section].options.isRadius) { return; }
        $animation[section].options.isRadius = false;
    }
    function switchRadius() {
        if (animation._data[section].options.isRadius) { return; }
        $animation[section].options.isRadius = true;
    }
</script>

<div class="{isDisabled}">
    <div>
        <label for="" class={`aaLabelBorder ${!isRadius ? "aaIsSelected" : ""}`} on:click={() => switchScale()} role=presentation>{scaleLabel}</label>
        <label for=""> &nbsp|&nbsp </label>
        <label for="" class={`aaLabelBorder ${isRadius ? "aaIsSelected" : ""}`} on:click={() => switchRadius()} role=presentation>{radiusLabel}</label>
    </div>
    <div>
        <input
            type="number"
            bind:value={$animation[section].options[field]}
            placeholder={placeholder}
            step={step}
        />
    </div>
</div>

<style lang='scss'>
    .aaLabelBorder {
        color: rgba(91, 91, 91, 0.623);
        border-radius: 5px;
        border: 1px solid rgba(91, 91, 91, 0.623);
        padding: 1px 5px 1px 5px;
    }
    .aaIsSelected {
        color: black;
        border: 1px solid black;
    }
</style>
