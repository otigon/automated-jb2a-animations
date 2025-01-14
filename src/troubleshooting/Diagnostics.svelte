<script>
    import { socketlibSocket } from "../socketset.js";
    import { custom_error } from "../constants/constants.js";

    const permissionLevels = game.modules.get("sequencer")?.active ? [
        game.i18n.localize("SEQUENCER.Permission.Player"),
        game.i18n.localize("SEQUENCER.Permission.Trusted"),
        game.i18n.localize("SEQUENCER.Permission.Assistant"),
        game.i18n.localize("SEQUENCER.Permission.GM"),
    ] : custom_error("Sequencer is not active!!!! You must enable Sequencer!!!!");

    let connectedClients = Array.from(game.users).filter(c => c.active).map(x => [x.id, x.name]);
    let currentUserId = connectedClients[0][0];
    $: currentUserId;
    let midiActive = game.modules.get("midi-qol")?.active;
    let midiWorkflow = midiActive ? game.settings.get('midi-qol', 'EnableWorkflow') : false;

    async function settingsGetter() {
        let currentSetting = await socketlibSocket.executeAsUser("checkSettings", currentUserId);
        updateSettings(currentSetting)
    }
    settingsGetter()

    function updateSettings(currentSetting) {
        photoSensitive = currentSetting.coreSettings.photoSensitive;
        sequencerPermissions = currentSetting.sequencerSettings.permission;
        sequencerEffectsEnabled = currentSetting.sequencerSettings.effects;
        sequencerSoundsEnabled = currentSetting.sequencerSettings.sounds;
        aaEffectsEnabled = currentSetting.aaSettings.effects;
        aaAutorecDisabled = currentSetting.aaSettings.autorec;
    }

    let photoSensitive;
    let sequencerPermissions;
    let sequencerEffectsEnabled;
    let sequencerSoundsEnabled;
    let aaEffectsEnabled;
    let aaAutorecDisabled;

    $: photoSensitive;
    $: sequencerPermissions;
    $: sequencerEffectsEnabled;
    $: sequencerSoundsEnabled;
    $: aaEffectsEnabled;
    $: aaAutorecDisabled;

    async function runDiagnostics() {
        await settingsGetter()
    }

</script>

<div style="font-size: 1.1em">
    <div style="text-align: center">
        <label for="" style="font-weight:bold; font-size: 1.2em; text-decoration:underline">This Diagnostics menu will check common settings that may cause Animations to stop working</label>
    </div>
    <div style="text-align: center; padding-top: 1.5em">
        <label for="" style="font-weight:bold; font-size: 1.2em">Showing settings for user: </label>
    <select bind:value={currentUserId} on:change={() => runDiagnostics()} name="" id="">
        {#each connectedClients as [key, name]}
            <option value={key}>{name}</option>
        {/each}
    </select>
    </div>
    <div style="text-align: center">
        <label for="" style="font-size: 0.9em; font-style: italic">Only shows <strong>active</strong> users</label>
    </div>
    <table cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2" class="AAheader">Foundry Core Settings</th>
        </tr>
        <tr class={!photoSensitive ? "isGood" : "isBad"}>
            {#if photoSensitive}
                <td>
                    <i class="fas fa-exclamation isRed" />
                </td>
                <td> Photosensitive mode is enabled </td>
            {:else}
                <td>
                    <i class="fas fa-check isGreen" />
                </td>
                <td> Photosensitive mode is disabled </td>
            {/if}
        </tr>
    </table>
    <table cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2" class="AAheader">Sequencer Settings</th>
        </tr>
        <tr class={sequencerEffectsEnabled ? "isGood" : "isBad"}>
            {#if !sequencerEffectsEnabled}
                <td>
                    <i class="fas fa-exclamation isRed" />
                </td>
                <td> Effects are Disabled!! </td>
            {:else}
                <td>
                    <i class="fas fa-check isGreen" />
                </td>
                <td> Effects are Enabled </td>
            {/if}
        </tr>
        <tr class={sequencerSoundsEnabled ? "isGood" : "isBad"}>
            {#if !sequencerSoundsEnabled}
                <td>
                    <i class="fas fa-exclamation isRed" />
                </td>
                <td> Sounds are Disabled!! </td>
            {:else}
                <td>
                    <i class="fas fa-check isGreen" />
                </td>
                <td> Sounds are Enabled </td>
            {/if}
        </tr>
        <tr class="isOk" >
            <td>
                <i class="fas fa-circle-info isBlue" />
            </td>
            <td>
                Sequencer Effects permissions are set to <strong
                    >{permissionLevels[sequencerPermissions]}</strong
                > (GM Only Setting)
            </td>
        </tr>
    </table>
    <table cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2" class="AAheader">Automated Animations Settings</th>
        </tr>
        <tr class={aaEffectsEnabled ? "isGood" : "isBad"}>
            {#if !aaEffectsEnabled}
                <td>
                    <i class="fas fa-exclamation isRed" />
                </td>
                <td> Effects are Disabled!! </td>
            {:else}
                <td>
                    <i class="fas fa-check isGreen" />
                </td>
                <td> Effects are Enabled </td>
            {/if}
        </tr>
        <tr class={!aaAutorecDisabled ? "isGood" : "isBad"}>
            {#if aaAutorecDisabled}
                <td>
                    <i class="fas fa-exclamation isRed" />
                </td>
                <td> Global Automatic Recognition Menu is Disabled!! (GM Only Setting) </td>
            {:else}
                <td>
                    <i class="fas fa-check isGreen" />
                </td>
                <td> Global Automatic Recognition Menu is Enabled (GM Only Setting) </td>
            {/if}
        </tr>
    </table>
    {#if midiActive}
    <table cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2" class="AAheader">Midi-QOL Settings</th>
        </tr>
        <tr class={midiWorkflow ? "isGood" : "isBad"}>
            {#if !midiWorkflow}
                <td>
                    <i class="fas fa-exclamation isRed" />
                </td>
                <td> Midi-QOL Roll Automation is disabled!! </td>
            {:else}
                <td>
                    <i class="fas fa-check isGreen" />
                </td>
                <td> Midi-QOL Roll Automation is Enabled </td>
            {/if}
        </tr>
    </table>
    {/if}
    <table cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2" class="AAheader02" style="background-color: rgba(0, 0, 0, 0.2)">Legend</th>
        </tr>
        <tr>
            <td class="isBad">
                <i class="fas fa-exclamation isRed" />
            </td>
            <td>
                Will cause issues
            </td>
        </tr>
        <tr>
            <td class="isGood">
                <i class="fas fa-check isGreen" />
            </td>
            <td>
                No issues
            </td>
        </tr>
        <tr>
            <td class="isOk">
                <i class="fas fa-circle-info isBlue" />
            </td>
            <td>
                May cause issues depending on Player trusted level
            </td>
        </tr>
    </table>
</div>
<div style="margin: 2em; font-size: 1.3em">
    <button on:click={() => runDiagnostics()}><strong>Re-Run Diagnostics</strong></button>
</div>


<div style="font-size: 1.1em; margin-top: 2em">
    <div style="text-align: center">
        <label for="" style="font-weight:bold; font-size: 1.2em; text-decoration:underline">Below you can find general troubleshooting tips</label>
    </div>
    <table cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2" class="AAheader02">
                General Troubleshooting
            </th>
        </tr>
        <tr>
            <td>1</td>
            <td>
                Melee, Range, On Token, and some Preset animations REQUIRE use of the Foundry Targetting System
            </td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                Enable Debugging inside the Automated Animations module settings. Then open the console (F12) and check for any error messages when you expect an animation
            </td>
        </tr>
        <tr>
            <td>3</td>
            <td>
                Check the menu where the animation is defined, and make sure everything is filled out correctly
            </td>
        </tr>
        <tr>
            <td>4</td>
            <td>
                Use the Find the Culprit module to test with ONLY Automated Animations, Sequencer Socketlib active
            </td>
        </tr>
        <tr>
            <td>5</td>
            <td>Make sure your Game System is supported</td>
        </tr>
        <tr>
            <td>6</td>
            <td>
                Still not working? File an Issue on the Automated Animations GitHub repository.
            </td>
        </tr>
    </table>
</div>


<style lang="scss">
    .isGreen {
        color: green;
    }
    .isGood {
        background-color: rgba(0, 255, 0, 0.2);
    }
    .isRed {
        color: red;
    }
    .isBad {
        background-color: rgba(255, 0, 0, 0.2);
    }
    .isOk {
        background-color: rgba(0, 210, 255, 0.2);
    }
    .isBlue {
        color: rgb(65, 65, 242);
    }
    .AAheader {
        font-size: 1.5em;
        font-weight: bold;
    }
    .AAheader02 {
        font-size: 1.2em;
        font-weight: bold;
    }
    table {
        td:first-child {
            width: 2em;
            text-align: center;
        }
        td:nth-child(2) {
            padding-left: 10px;
        }
        font-size: 1em;
    }
</style>
