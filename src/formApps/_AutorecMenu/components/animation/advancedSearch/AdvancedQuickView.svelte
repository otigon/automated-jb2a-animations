<script>

    export let info = {};

</script>
<div class="quickView">
    <i class={info?.icon} title={info.title}></i>
</div>

<style lang=scss>
    .quickView {
        position: absolute;
        right: 3.5em;
        font-size: 13px;
    }
</style>