<script>
    import { getContext }   from "svelte";
    let { animation } = getContext('animation-data');
    export let section = "primary";
    export let field;
    export let label;
    export let isDisabled = "";
    export let placeholder = 1;
    export let step = 1;

</script>

<div class="{isDisabled}">
    <div>
        <label for="">{label}</label>
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

</style>