<script>
    import { localize } from "#runtime/util/i18n";

</script>

<table id="aa-options-table" cellpadding="0" cellspacing="0" border="1">
    <tr>
        <th colspan="2"> 3D Canvas Options</th>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.color")}</strong>
        </td>
        <td> Set the dual color options for the Particle effect </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.speed")}</strong>
        </td>
        <td>
            Sets the speed of the particle effect
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
        <td> Set the scale of the Particle Effect </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.arc")}</strong>
        </td>
        <td> Determine the arcing amplitude of the effect </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.alpha")}</strong>
        </td>
        <td>
            Set the Alpha/Opacity level of the effect
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.gravity")}</strong>
        </td>
        <td>
            Determines the falling speeed for the particles
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.mass")}</strong>
        </td>
        <td>
            Sets the overall Particle size
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.life")}</strong>
        </td>
        <td>
            How long the particle last in milliseconds
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.emiterSize")}</strong>
        </td>
        <td>
            Size of the emitter source
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.rate")}</strong>
        </td>
        <td>
            Rate at which the particles are spawned
        </td>
    </tr>
</table>
