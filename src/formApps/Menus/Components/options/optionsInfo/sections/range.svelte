<script>
    import { localize } from "#runtime/util/i18n";

</script>

<table id="aa-options-table" cellpadding="0" cellspacing="0" border="1">
    <tr>
        <th colspan="2"> Range Options</th>
    </tr>
    <tr>
        <td>
            <strong>{localize("autoanimations.menus.animation")} {localize("autoanimations.menus.source")}</strong>
        </td>
        <td>
            <strong>Experimental</strong> <br> <strong>Available only in the Global Automatic Recognition Menu for DnD5e and PF2e!</strong> <br>
            Use this for Spells like Black Tentacles and Storm Sphere to use a placed persistent Animation as the Source of a ranged attack <br>
            Requires an entry in both the Templates and Ranged menu that match for the Item.
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
        <td> Set the Elevation for the Animation relative to the Token. Elevation of "0" is below the token <br>
            <strong>ABS</strong>: <i>If Enabled, switches Elevation to be Absolute and disregard the Token elevation</i>
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.only")} X</strong>
        </td>
        <td>
            When using a "custom" animation, this allows you to keep the Y scale of the video constant.
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
            <strong>{localize("autoanimations.menus.randomOffset")}</strong>
        </td>
        <td>
            Randomly offsets the impact point within the bounds of the Target
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
            <strong>{localize("autoanimations.menus.return")} {localize("autoanimations.menus.animation")}</strong>
        </td>
        <td>
            For built-in Select menus ONLY. If a "return" animation is availble for the given Weapon, enabling this will play it.
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.animations.reverse")} {localize("autoanimations.menus.animation")}</strong>
        </td>
        <td>
            Reverse the Animation to start from the Target and go to the Source Token
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
