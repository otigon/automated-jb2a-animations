<script>
    import { localize } from "@typhonjs-fvtt/runtime/svelte/helper";

    export let tabStore;
</script>
<div class="aa-options-info">
    {#if $tabStore === "melee"}
    <table id="options-table" cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2"> Melee Options</th>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.elevation")}</strong>
            </td>
            <td> Set the Elevation for the Animation. Elevation of "0" is below all tokens </td>
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
                <strong>{localize("autoanimations.menus.z-index")}</strong>
            </td>
            <td> Index of the animation when they are played at the same elevation </td>
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
                <strong>{localize("autoanimations.menus.delay")} / {localize("autoanimations.menus.wait")}</strong>
            </td>
            <td> <strong>Delay</strong> causes the start of the animation section to be delayed (milliseconds) <br> <br>
                <strong>Wait</strong> causes the following animation section to play AFTER the current is finished. Accepts Negative and Positive Numbers </td>
        </tr>
    </table>
    {/if}
    {#if $tabStore === "range"}
    <table id="options-table" cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2"> Range Options</th>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.elevation")}</strong>
            </td>
            <td> Set the Elevation for the Animation. Elevation of "0" is below all tokens </td>
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
                <strong>{localize("autoanimations.menus.only")} X</strong>
            </td>
            <td>
                When using a "custom" animation, this allows you to keep the Y scale of the video constant.
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
                <strong>{localize("autoanimations.menus.z-index")}</strong>
            </td>
            <td> Index of the animation when they are played at the same elevation </td>
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
                <strong>{localize("autoanimations.menus.delay")} / {localize("autoanimations.menus.wait")}</strong>
            </td>
            <td> <strong>Delay</strong> causes the start of the animation section to be delayed (milliseconds) <br> <br>
                <strong>Wait</strong> causes the following animation section to play AFTER the current is finished. Accepts Negative and Positive Numbers </td>
        </tr>
    </table>
    {/if}
    {#if $tabStore === "ontoken"}
    <table id="options-table" cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2"> On Token Options</th>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.elevation")}</strong>
            </td>
            <td> Set the Elevation for the Animation. Elevation of "0" is below all tokens </td>
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
                <strong>{localize("autoanimations.menus.persistant")}</strong>
            </td>
            <td>
                This will cause the effect to become permanent on the canvas.
                You can end the effect with the Sequencer Effect Manager.
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
                <strong>{localize("autoanimations.menus.mask")}</strong>
            </td>
            <td>
                If enabled, the effect will be masked to the given Object
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
                <strong>{localize("autoanimations.menus.z-index")}</strong>
            </td>
            <td> Index of the animation when they are played at the same elevation </td>
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
                <strong>{localize("autoanimations.menus.add")} {localize("autoanimations.menus.token")} {localize("autoanimations.menus.width")}</strong>
            </td>
            <td>
                Adds the Token width into the Size calculation for Animations set with "Radius"
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
                <strong>{localize("autoanimations.menus.delay")} / {localize("autoanimations.menus.wait")}</strong>
            </td>
            <td> <strong>Delay</strong> causes the start of the animation section to be delayed (milliseconds) <br> <br>
                <strong>Wait</strong> causes the following animation section to play AFTER the current is finished. Accepts Negative and Positive Numbers </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.playOn")}</strong>
            </td>
            <td> Tells A-A how to play this animation </td>
        </tr>
    </table>
    {/if}
    {#if $tabStore === "templatefx"}
    <table id="options-table" cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2"> Templates Options</th>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.elevation")}</strong>
            </td>
            <td> Set the Elevation for the Animation. Elevation of "0" is below all tokens </td>
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
                <strong>{localize("autoanimations.menus.mask")}</strong>
            </td>
            <td>
                If enabled, the effect will be masked to the given Object
            </td>
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
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.effect")} {localize("autoanimations.menus.opacity")}</strong>
            </td>
            <td> Set the Alpha (transparency) level of the Animation </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.z-index")}</strong>
            </td>
            <td> Index of the animation when they are played at the same elevation </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>Adjust Rotation</strong>
            </td>
            <td> Adjusts the rotation of the animation </td>
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
                <strong>{localize("autoanimations.menus.persistant")}</strong>
            </td>
            <td>
                This will cause the effect to become permanent on the canvas.
                You can end the effect with the Sequencer Effect Manager.
            </td>
        </tr>
        <tr>
            <th colspan="2" style="background: grey"> Persistent Options </th>
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
    {/if}
    {#if $tabStore === "aura"}
    <table id="options-table" cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2"> Aura Options</th>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.elevation")}</strong>
            </td>
            <td> Set the Elevation for the Animation. Elevation of "0" is below all tokens </td>
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
                <strong>{localize("autoanimations.menus.mask")}</strong>
            </td>
            <td>
                If enabled, the effect will be masked to the given Object
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
                <strong>{localize("autoanimations.menus.z-index")}</strong>
            </td>
            <td> Index of the animation when they are played at the same elevation </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.effect")} {localize("autoanimations.menus.opacity")}</strong>
            </td>
            <td> Set the Alpha (transparency) level of the Animation </td>
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
                <strong>{localize("autoanimations.menus.add")} {localize("autoanimations.menus.token")} {localize("autoanimations.menus.width")}</strong>
            </td>
            <td>
                Adds the Token width into the Size calculation for Animations set with "Radius"
            </td>
        </tr>
        <tr>
            <td class="aa-table">
                <strong>{localize("autoanimations.menus.delay")} / {localize("autoanimations.menus.wait")}</strong>
            </td>
            <td> <strong>Delay</strong> causes the start of the animation section to be delayed (milliseconds) <br> <br>
                <strong>Wait</strong> causes the following animation section to play AFTER the current is finished. Accepts Negative and Positive Numbers </td>
        </tr>
    </table>
    {/if}
    {#if $tabStore === "preset"}
        COMPLETE PRESET INFO
    {/if}
    {#if $tabStore === "canvas3d"}
        COMPLETE CANVAS 3D INFO
    {/if}
</div>

<style lang='scss'>
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
