<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let animation;

</script>

<div class="aa-autorec-headerButton">
    <div style="grid-row:1/2; grid-column:2/3" class="sectionButton">
        <label
            for=""
            on:click={() =>
                ($animation.soundOnly.sound.enable =
                    !animation._data.soundOnly.sound.enable)}
            >{localize("autoanimations.menus.sound")}
            {localize("autoanimations.menus.only")}
            <i
                class="fas fa-music fa-lg aa-zoom {$animation.soundOnly.sound
                    .enable
                    ? 'aa-green'
                    : ''}"
            /></label
        >
    </div>
    <div style="grid-row:1/2; grid-column:3/4" class="sectionButton">
        <label
            for=""
            on:click={() =>
                ($animation.macro.enable = !animation._data.macro.enable)}
            >{localize("autoanimations.menus.add")}
            {localize("autoanimations.menus.macro")}
            <i
                class="far fa-keyboard fa-lg aa-zoom {$animation.macro.enable
                    ? 'aa-green'
                    : ''}"
            /></label
        >
    </div>
</div>

<style lang="scss">
    .aa-autorec-headerButton label {
        font-size: small;
    }
    .sectionButton {
        background: rgba(0, 0, 0, 0.17);
        padding: .2em;
        border-radius: 1em;
    }
</style>
