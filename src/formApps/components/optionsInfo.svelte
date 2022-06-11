<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";
</script>

<div class="aa-options-info">
    <table id="options-table" cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2"> Options Information </th>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>Add Token Width</strong>
            </td>
            <td>
                Aura Menu only: Adds the Token width for Auras into the Radius calculation
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.alpha")}</strong>
            </td>
            <td>
                If set to Bound, the Alpha level of the Effect will match that
                of the Token or Object (This overrides any Opacity settings).
                Unbound will use the Opacity level for the effect
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.level")}</strong>
            </td>
            <td> Choose whether the effect plays Above or Below the tokens </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>Masking</strong>
            </td>
            <td>
                If enabled, the effect will be masked to the given Object
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.opacity")}</strong>
            </td>
            <td> Set the Alpha (transparency) level of the Animation </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.persistant")}</strong>
            </td>
            <td>
                This will cause the effect to become permanent on the canvas.
                You can end the effect with the Sequencer Effect Manager, or
                through the Tile Layer if using the Template Options.
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.repeat")}</strong>
            </td>
            <td>
                Causes the effect to be repeated <strong>N</strong> times, with an optional delay.
                A Repeat of 1 only plays the effect once.
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.repeat")} {localize("autoanimations.menus.delay")}</strong>
            </td>
            <td> Sets the Delay between each Repeat in milliseconds. </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.scale")}</strong>
            </td>
            <td>
                Sets the scale of the effect. Inital scale is based off of the
                Token Size. The Template Menu can be set with <strong>Scale X</strong> and <strong>Scale Y</strong> individually
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.radius")}</strong>
            </td>
            <td>
                Sets the radius of the effect in grid units.
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.visibility")}</strong>
            </td>
            <td>
                If set to Bound, the Visibility of the Effect will match that of
                the Token or Object. Unbound will make the effect always visible
            </td>
        </tr>
        <tr>
            <th colspan="2">{localize("autoanimations.animTypes.templates")} Menu </th>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.remove")}</strong>
            </td>
            <td>
                Removes the Template immediately after placement on the game canvas.
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.persistant")} {localize("autoanimations.menus.type")}</strong>
            </td>
            <td>
                <table id="options-table" cellpadding="0" cellspacing="0" border="1">
                    <tr>
                        <th colspan="2"> If Persistent is enabled, you can choose the type here. </th>
                    </tr>
                    <tr>
                        <td class="aa-table">
                            <strong>{localize("autoanimations.menus.overheadtile")}</strong>
                        </td>
                        <td>
                            Creates effect as an Overhead Tile
                        </td>
                    </tr>
                    <tr>
                        <td class="aa-table">
                            <strong>{localize("autoanimations.menus.groundtile")}</strong>
                        </td>
                        <td>
                            Creates Effect as a Tile below tokens
                        </td>
                    </tr>                      
                    <tr>
                        <td class="aa-table">
                            <strong>{localize("autoanimations.menus.sequencereffect")}</strong>
                        </td>
                        <td>
                            Creates a Persistent Sequencer effect
                        </td>
                    </tr>                      
                    <tr>
                        <td class="aa-table">
                            <strong>{localize("autoanimations.menus.attachtotemplate")}</strong>
                        </td>
                        <td>
                            Creates a Persistent Sequencer effect and attaches to the template (draggable)
                        </td>
                    </tr>                                         
                </table>
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.occlusionMode")}</strong>
            </td>
            <td>
                If Persistent and Type is set to Overhead Tile, choose the Occlusion Mode
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.occlusionAlpha")}</strong>
            </td>
            <td>
                If Persistent and Type is set to Overhead Tile, choose the Occlusion Alpha
            </td>
        </tr>
    </table>
</div>

<style lang="scss">
    .aa-options-info {
        font-size: small;
    }
    #options-table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: center;
        background-color: #04aa6d;
        color: white;
    }
    #options-table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
    }
    #options-table td, #options-table th {
        border: 1px solid rgb(0, 0, 0);
        padding: 8px;
    }
    #options-table tr:nth-child(even) {
        background-color: rgb(240 238 227);
    }
    #options-table tr:nth-child(odd) {
        background-color: rgb(203 201 190);
    }
    .aa-table {
        text-align: center;
    }
</style>
