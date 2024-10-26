<script>
    import { ripple }               from "#standard/action/animate/composable/ripple";

    import { TJSToggleIconButton }  from "#standard/component/button";
    import { TJSMenu }              from "#standard/component/menu";

    export let menu;
    export let info = {};

    const buttonOverflow = {
        icon: 'fas fa-ellipsis-v',
        efx: ripple(),
        styles: { 'margin-left': '0.5em' },
        clickPropagate: false   // Necessary to capture click for Firefox.
    };

</script>

<div class="quickView">
    <i class={info?.icon} title={info.title}></i>
</div>
<div>
    <TJSToggleIconButton button={buttonOverflow} slot=summary-end>
        <TJSMenu {menu} />
    </TJSToggleIconButton>
</div>

<style lang="scss">
    .quickView {
        margin-left: 5px;
        font-size: 13px;
    }
</style>
