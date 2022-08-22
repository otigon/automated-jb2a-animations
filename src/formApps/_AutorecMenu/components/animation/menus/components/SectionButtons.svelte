<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let animation

    export let show3d = false;

</script>

<div class="aa-autorec-headerButton">
    <div
        style="grid-row:1/2; grid-column:1/2"
    >
        <label for="" on:click={() => show3d = !show3d}
            >{localize("autoanimations.menus.3dcanvas")}
            <i
                class="fas fa-cube fa-lg aa-zoom {show3d ? 'aa-green' : ''}"
            /></label
        >
    </div>
    <div style="grid-row:1/2; grid-column:2/3">
        <label for="" on:click={() => ($animation.soundOnly.sound.enable = !animation._data.soundOnly.sound.enable)}
            >{localize("autoanimations.menus.sound")}
            {localize("autoanimations.menus.only")}
            <i
                class="fas fa-music fa-lg aa-zoom {$animation.soundOnly.sound.enable ? 'aa-green' : ''}"
            /></label
        >
    </div>
    <div style="grid-row:1/2; grid-column:3/4">
        <label for="" on:click={() => ($animation.macro.enable = !animation._data.macro.enable)}
            >{localize("autoanimations.menus.add")}
            {localize("autoanimations.menus.macro")}
            <i
                class="far fa-keyboard fa-lg aa-zoom {$animation.macro.enable ? 'aa-green' : ''}"
            /></label
        >
    </div>
</div>


<style lang='scss'>
    .aa-autorec-headerButton label {
        font-size: small;
    }
</style>