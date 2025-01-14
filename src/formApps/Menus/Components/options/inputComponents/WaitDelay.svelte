<script>
    import { getContext }   from "svelte";

    let { animation } = getContext('animation-data');
    export let section = "primary";
    export let field = "delay";
    export let isDisabled = "";
    export let placeholder = 0;
    export let step = 1;

    $: isWait = $animation[section].options.isWait;

    const delayLabel = game.i18n.localize("autoanimations.menus.delay");
    const waitLabel = game.i18n.localize("autoanimations.menus.wait");

    function switchWait() {
        if (!animation._data[section].options.isWait) { return; }
        $animation[section].options.isWait = false;
    }
    function switchDelay() {
        if (animation._data[section].options.isWait) { return; }
        $animation[section].options.isWait = true;
    }
</script>

<div class="{isDisabled}">
    <div>
        <label for="" class={`aaLabelBorder ${!isWait ? "aaIsSelected" : ""}`} on:click={() => switchWait()} role=presentation>{delayLabel}</label>
        <label for=""> &nbsp|&nbsp </label>
        <label for="" class={`aaLabelBorder ${isWait ? "aaIsSelected" : ""}`} on:click={() => switchDelay()} role=presentation>{waitLabel}</label>
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
