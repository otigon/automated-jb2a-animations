<script>
    export let animation;
    export let section;
    export let field;
    export let label;
    export let isDisabled = "";
    export let placeholder = 1;
    export let step = 1;

</script>

<div class="flex-row {isDisabled}">
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