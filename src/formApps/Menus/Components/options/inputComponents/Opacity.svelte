<script>

    import { getContext }   from "svelte";
    let { animation } = getContext('animation-data');
    export let section = "primary";
    export let field = "opacity";
    export let min = 0;
    export let max = 1;
    export let step = 0.01;
    export let placeDefault = 1;

    export let label = game.i18n.localize("autoanimations.menus.effect") + " " + game.i18n.localize("autoanimations.menus.opacity")

</script>

<div class="flexcol">
    <label for="">{label}</label
    >
    <div
        style="display: flex; margin-right: 1.5em; margin-left: 1.5em;"
    >
        <input
            type="number"
            bind:value={$animation[section].options[field]}
            placeholder={placeDefault}
            min={min}
            max={max}
            step={step}
        />
        <input
            style="border:none; background:none;margin-left: 3px;"
            type="range"
            min={min}
            max={max}
            step={step}
            bind:value={$animation[section].options[field]}
        />
    </div>
</div>

<style lang='scss'>

</style>