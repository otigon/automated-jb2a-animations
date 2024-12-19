<script>
    import { localize } from "#runtime/util/i18n";

</script>

<table id="aa-options-table" cellpadding="0" cellspacing="0" border="1">
    <tr>
        <th colspan="2"> Templates Options</th>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>Adjust Rotation</strong>
        </td>
        <td> Adjusts the rotation of the animation </td>
    </tr>
    <tr>
        <td>
            <strong>{localize("autoanimations.menus.anchor")}</strong>
        </td>
        <td>
            Adjust the anchor position of the Effect. Default: <strong>0.5, 0.5</strong> for Square/Circle Templates, <strong>0, 0.5</strong> for Cone/Ray templates. <br>
            Accepts two numbers separated by a comma. Ex: <strong>0.5, 1</strong> returns x: 0.5, y:1, and using one number such as <strong>0.5</strong> returns x: 0.5, y: 0.5
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.effect")} {localize("autoanimations.menus.opacity")}</strong>
        </td>
        <td> Set the Alpha (transparency) level of the Animation </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.elevation")}</strong>
        </td>
        <td> Set the Elevation for the Animation relative to the Source Token. Elevation of "0" is below the token <br>
            <strong>ABS</strong>: <i>If Enabled, switches Elevation to be Absolute and disregard the Token elevation</i>
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.mask")}</strong>
        </td>
        <td>
            If enabled, the effect will be masked to the Template
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.variants.above")} {localize("autoanimations.animTypes.templatefx")}</strong>
        </td>
        <td>
            This setting will override Elevation to play the animation Above the template using the .aboveLightning() Sequencer method
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.playbackRate")}</strong>
        </td>
        <td>
            Default 1: Set the playback speed of the animation
        </td>
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
            Sets the Scale of the Effect. Default: 1. Accepts two numbers separated by a comma. Ex: 1, 2 to set the X and Y scaling x: 1, y:2, or a Single number to set both as the same scale.
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.persistant")}</strong>
        </td>
        <td>
            This will cause the effect to become permanent on the canvas.
            You can end the effect with the Sequencer Effect Manager.
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.delay")} / {localize("autoanimations.menus.wait")}</strong>
        </td>
        <td> <strong>Delay</strong> causes the start of the animation section to be delayed (milliseconds) <br> <br>
            <strong>Wait</strong> causes the following animation section to play AFTER the current is finished. Accepts Negative and Positive Numbers </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.variants.xray")}</strong>
        </td>
        <td> This will cause the effect to ignore vision-based masking </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.z-index")}</strong>
        </td>
        <td> Index of the animation when they are played at the same elevation </td>
    </tr>
    <tr>
        <th colspan="2" style="background: rgba(17, 0, 148, .5)"> Persistent Options </th>
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
