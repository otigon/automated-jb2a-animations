<script>
    import { localize } from "#runtime/util/i18n";

</script>

<table id="aa-options-table" cellpadding="0" cellspacing="0" border="1">
    <tr>
        <th colspan="2"> Aura Options</th>
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
            <strong>{localize("autoanimations.menus.ignoreTargets")}</strong>
        </td>
        <td>
            Disregards targets and always plays this effect on the Source Token
        </td>
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
            <strong>{localize("autoanimations.menus.playbackRate")}</strong>
        </td>
        <td>
            Default 1: Set the playback speed of the animation
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.radius")}</strong>
        </td>
        <td>
            <strong>Radius: </strong>Set the radius of the effect in Grid Squares
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
            <strong>{localize("autoanimations.menus.z-index")}</strong>
        </td>
        <td> Index of the animation when they are played at the same elevation </td>
    </tr>
</table>
