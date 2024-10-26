<script>
    import { localize } from "#runtime/util/i18n";

    export let presetStore;

    let headerList = [
        {
            label: "Projectile to Template",
            section: "proToTemp",
        },
        {
            label: "Dual Attach",
            section: "dualattach",
        },
        {
            label: "Teleportation",
            section: "teleportation",
        },
        {
            label: "Thunderwave 5e",
            section: "thunderwave",
        },
    ];
</script>

<header>
    <ul>
        {#each headerList as section}
            <li
                class:active={$presetStore === section.section}
                on:click={() => ($presetStore = section.section)}
                role=presentation
            >
                {section.label}
            </li>
            <span />
        {/each}
    </ul>
</header>

{#if $presetStore === 'proToTemp'}
<table class="aa-options-table">
    <tr>
        <th colspan="2">
            Projectile to Template
        </th>
    </tr>
    <tr>
        <th colspan="2" style="background: rgba(17, 0, 148, .5)">
            Projectile Animation
        </th>
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
            <strong>{localize("autoanimations.menus.playbackRate")}</strong>
        </td>
        <td>
            Default 1: Set the playback speed of the animation
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
            <strong>{localize("autoanimations.menus.remove")}</strong>
        </td>
        <td>
            Removes the Template immediately after placement on the game canvas.
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.wait")}</strong>
        </td>
        <td>
            Causes the following animation section to play AFTER the current is finished. Accepts Negative and Positive Numbers
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.effect")} {localize("autoanimations.menus.opacity")}</strong>
        </td>
        <td> Set the Alpha (transparency) level of the Animation </td>
    </tr>
    <tr>
        <th colspan="2" style="background: rgba(17, 0, 148, .5)">
            Explosion / Pre-Explosion Animation
        </th>
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
            <strong>{localize("autoanimations.menus.playbackRate")}</strong>
        </td>
        <td>
            Default 1: Set the playback speed of the animation
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
            Token Size.
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.wait")}</strong>
        </td>
        <td>
            Causes the following animation section to play AFTER the current is finished. Accepts Negative and Positive Numbers
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.effect")} {localize("autoanimations.menus.opacity")}</strong>
        </td>
        <td> Set the Alpha (transparency) level of the Animation </td>
    </tr>
    <tr>
        <th colspan="2" style="background: rgba(17, 0, 148, .5)">
            After Image
        </th>
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
            <strong>{localize("autoanimations.menus.persistant")}</strong>
        </td>
        <td>
            This will cause the effect to become permanent on the canvas.
            You can end the effect with the Sequencer Effect Manager.
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.scale")}</strong>
        </td>
        <td>
            Sets the scale of the effect. Inital scale is based off of the
            Token Size.
        </td>
    </tr>
</table>
{/if}

{#if $presetStore === 'dualattach'}
<table>
    <colgroup>
        <col span="1" style="width: 20%;">
        <col span="1" style="width: 50%;">
    </colgroup>
    <tr>
        <th colspan="2">
            Dual Attach
        </th>
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
            <strong>{localize("autoanimations.menus.effect")} {localize("autoanimations.menus.opacity")}</strong>
        </td>
        <td> Set the Alpha (transparency) level of the Animation </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.playbackRate")}</strong>
        </td>
        <td>
            Speeds up or Slows down the Animation effect. Positive numbers only
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.only")} X</strong>
        </td>
        <td>
            Limits the Y scaling of the effect to no changes
        </td>
    </tr>
</table>
{/if}

{#if $presetStore === 'teleportation'}
<table class="aa-options-table">
    <tr>
        <th colspan="2">
            Teleportation
        </th>
    </tr>
    <tr>
        <th colspan="2" style="background: rgba(17, 0, 148, .5)">
            Movement Options
        </th>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>Range Marker</strong>
        </td>
        <td> Determines if Measurement type to be used. Alternating vs Equidistant </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>Hide from Players</strong>
        </td>
        <td> Causes the Range Marker to be hidden from Players. Only a GM can configure this </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.animTypes.range")}</strong>
        </td>
        <td>
            Distance limitation for the Teleportation
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>Teleport Token</strong>
        </td>
        <td>
            Toggle whether the Token should be teleported or moved
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>Delay Movement</strong>
        </td>
        <td>
            Sets the delay before the Token should move
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>Speed</strong>
        </td>
        <td>
            If not teleporting, set the speed for token movement
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>Token Alpha</strong>
        </td>
        <td>
            Sets the Opacity the token should fade to
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>Delay Fade Out</strong>
        </td>
        <td>
            Sets the delay for when the token should begin changin Opacity
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>Delay Fade In</strong>
        </td>
        <td>
            Sets the delay for when the Token should return to full opacity (minimum 250)
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>Check for Collision</strong>
        </td>
        <td>
            Checks the path for any collisions with walls, and does not move if any are found
        </td>
    </tr>
    <tr>
        <th colspan="2" style="background: rgba(17, 0, 148, .5)">
            Start / End Animation
        </th>
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
            <strong>{localize("autoanimations.menus.elevation")}</strong>
        </td>
        <td> Set the Elevation for the Animation relative to the Token. Elevation of "0" is below the token <br>
            <strong>ABS</strong>: <i>If Enabled, switches Elevation to be Absolute and disregard the Token elevation</i>
        </td>
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
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.effect")} {localize("autoanimations.menus.opacity")}</strong>
        </td>
        <td> Set the Alpha (transparency) level of the Animation </td>
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
            <strong>{localize("autoanimations.menus.playbackRate")}</strong>
        </td>
        <td>
            Default 1: Set the playback speed of the animation
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.delay")}</strong>
        </td>
        <td>
            Causes the start of the animation section to be delayed (milliseconds)
        </td>
    </tr>
    <tr>
        <th colspan="2" style="background: rgba(17, 0, 148, .5)">
            Between Animation
        </th>
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
            <strong>{localize("autoanimations.menus.playbackRate")}</strong>
        </td>
        <td>
            Speeds up or Slows down the Animation effect. Positive numbers only
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
            <strong>{localize("autoanimations.menus.delay")}</strong>
        </td>
        <td>
            Causes the start of the animation section to be delayed (milliseconds)
        </td>
    </tr>
</table>
{/if}

{#if $presetStore === 'thunderwave'}
<table class="aa-options-table">
    <tr>
        <th colspan="2">
            Thunderwave
        </th>
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
            <strong>{localize("autoanimations.menus.effect")} {localize("autoanimations.menus.opacity")}</strong>
        </td>
        <td> Set the Alpha (transparency) level of the Animation </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.scale")} X</strong>
        </td>
        <td>
            Sets the X Scale of the effect
        </td>
    </tr>
    <tr>
        <td class="aa-table">
            <strong>{localize("autoanimations.menus.scale")} Y</strong>
        </td>
        <td>
            Sets the Y Scale of the effect
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
</table>
{/if}

<style lang='scss'>
    header {
        flex: none;
        padding: 0.5em 0.5em;

        background: rgb(204, 204, 204);
        border: 1px solid rgb(100, 100, 100);
        border-radius: 1em;
        margin-top: 10px;
        height: 40px;
        width: 100%;

        ul {
            display: flex;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            height: 100%;

            list-style-type: none;
            padding: 0;
            margin: 0;

            li {
                margin: auto;

                color: rgb(50, 50, 50);

                font-family: "Modesto Condensed", "Palatino Linotype", serif;
                font-size: 1.3em;
                font-weight: bold;
                vertical-align: middle;

                white-space: nowrap;
                transition: all 0.2s ease-in-out;

                &.active {
                    text-shadow: 0 0 5px rgba(255, 0, 0, 0.687);
                }
                &:hover:not(.active) {
                    transform: scale(1.05);
                }
            }

            span:not(:last-child) {
                display: inline-block;
                width: 1px;
                height: 75%;
                background: rgb(100, 100, 100);
            }
        }
    }
</style>
