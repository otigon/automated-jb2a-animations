<script>
    import { localize }     from "#runtime/util/i18n";
    import { getContext }   from "svelte";

    let { animation } = getContext('animation-data');
    export let section = "primary";

    $: isAbsolute = $animation[section].options.isAbsolute;

</script>

<div>
    <div>
        <label for="Relative {section} {animation._data.id}" style="font-size:10px" class="aaLabelBorder {isAbsolute ? "aaIsSelected" : ""}">ABS</label>
        <input
            id="Relative {section} {animation._data.id}"
            type="checkbox"
            style="display:none"
            bind:checked={$animation[section].options.isAbsolute}
        />
        <label for="" style="font-size:13px">{localize('autoanimations.menus.elevation')} </label>
    </div>
    <div>
        <input
            type="number"
            bind:value={$animation[section].options.elevation}
            placeholder=1000
            step=1
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
