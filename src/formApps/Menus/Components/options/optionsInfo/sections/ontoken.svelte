<script>
    import { localize } from "#runtime/util/i18n";

</script>

<table id="aa-options-table" cellpadding="0" cellspacing="0" border="1">
    <tr>
        <th colspan="2"> On Token Options</th>
    </tr>
    <tr>
        <td>
            <strong>{localize("autoanimations.menus.anchor")}</strong>
        </td>
        <td>
            Adjust the anchor position of the Effect. Default: 0.5 is center. Accepts two numbers separated by a comma. Ex: 0.5, 1 returns x: 0.5, y:1, and using one number such as 0.5 returns x: 0.5, y: 0.5
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
            <strong>{localize("autoanimations.menus.fadeIn")}</strong>
        </td>
        <td> Sets the fadeIn time of the effect in milliseconds </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.fadeOut")}</strong>
        </td>
        <td> Sets the fadeOut time of the effect in milliseconds </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.mask")}</strong>
        </td>
        <td>
            If enabled, the effect will be masked to the given Object
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
            <strong>{localize("autoanimations.menus.playbackRate")}</strong>
        </td>
        <td>
            Default 1: Set the playback speed of the animation
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.playOn")}</strong>
        </td>
        <td> Tells A-A how to play this animation </td>
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
            <strong>{localize("autoanimations.menus.scale")} / {localize("autoanimations.menus.radius")}</strong>
        </td>
        <td>
            <strong>Scale: </strong>Sets the scale of the effect. Inital scale is based off of the
            Token Size. <br> <br>
            <strong>Radius: </strong>Set the radius of the effect in Grid Squares
        </td>
    </tr>
    <tr>
        <td>
            <strong>{localize("autoanimations.menus.sideImpact")}</strong>
        </td>
        <td>
            Where available, causes the effect to be rotated back towards the Source Token. Primarily useful for the JB2A "side fracture" type effects
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.add")} {localize("autoanimations.menus.token")} {localize("autoanimations.menus.width")}</strong>
        </td>
        <td>
            Adds the Token width into the Size calculation for Animations set with "Radius"
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.bind") + " " + localize("autoanimations.menus.alpha")}</strong>
        </td>
        <td>
            <strong>Persistent Effects Only:</strong> If enabled, the Alpha level of the Effect will match that
            of the Token or Object (This overrides any Opacity settings).
            Unchecked will use the Opacity level for the effect
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.bind") + " " + localize("autoanimations.menus.visibility")}</strong>
        </td>
        <td>
            <strong>Persistent Effects Only:</strong> If enabled, the Visibility of the Effect will match that of
            the Token or Object. Unchecked will make the effect always visible
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
            <strong>{localize("autoanimations.menus.z-index")}</strong>
        </td>
        <td> Index of the animation when they are played at the same elevation </td>
    </tr>
</table>
