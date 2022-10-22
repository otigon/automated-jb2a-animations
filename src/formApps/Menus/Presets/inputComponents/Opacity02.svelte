<script>
    import { getContext }   from "svelte";

    //export let animation;
    let { animation } = getContext('animation-data');

    const label = game.i18n.localize("autoanimations.menus.effect") + " " + game.i18n.localize("autoanimations.menus.opacity")

</script>

<div class="flexcol">
    <label for="">{label}</label
    >
    <div
        style="display: flex; margin-right: 1.5em; margin-left: 1.5em;"
    >
        <input
            type="number"
            bind:value={$animation.data.options.opacity}
            placeholder="1"
            min="0"
            max="1"
            step="0.01"
        />
        <input
            style="border:none; background:none;margin-left: 3px;"
            type="range"
            min="0"
            max="1"
            step="0.01"
            bind:value={$animation.data.options.opacity}
        />
    </div>
</div>

<style lang='scss'>

</style>