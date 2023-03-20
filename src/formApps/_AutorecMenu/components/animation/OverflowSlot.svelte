<script>
    import { ripple }                 from "@typhonjs-fvtt/svelte-standard/action";
    import {
        TJSMenu,
        TJSToggleIconButton,
    } from "@typhonjs-fvtt/svelte-standard/component";

    export let menu;
    export let info = {};

    const buttonOverflow = {
        icon: 'fas fa-ellipsis-v',
        efx: ripple(),
        styles: { 'margin-left': '0.5em' },
        onClickPropagate: false   // Necessary to capture click for Firefox.
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
