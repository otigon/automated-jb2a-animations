<script>
    export let animation;
    export let section;
    export let field;
    export let name;

</script>

<div class="flex-row">
    <div>
        <label for="">{name}</label>
    </div>
    <div>
        <input
            type="number"
            bind:value={$animation[section].options[field]}
        />
    </div>
</div>

<style lang='scss'>

</style>