<script>

    const permissionLevels = [
        game.i18n.localize("SEQUENCER.Permission.Player"),
        game.i18n.localize("SEQUENCER.Permission.Trusted"),
        game.i18n.localize("SEQUENCER.Permission.Assistant"),
        game.i18n.localize("SEQUENCER.Permission.GM"),
    ];

    let photoSensitive = game.settings.get("core", "photosensitiveMode");
    let sequencerPermissions = game.settings.get(
        "sequencer",
        "permissions-effect-create"
    );
    let sequencerEffectsEnabled = game.settings.get(
        "sequencer",
        "effectsEnabled"
    );
    let sequencerSoundsEnabled = game.settings.get(
        "sequencer",
        "soundsEnabled"
    );
    let aaEffectsEnabled =
        game.settings.get("autoanimations", "killAllAnim") === "off"
            ? false
            : true;
    let aaAutorecDisabled = game.settings.get(
        "autoanimations",
        "disableAutoRec"
    );

    $: photoSensitive;
    $: sequencerPermissions;
    $: sequencerEffectsEnabled;
    $: sequencerSoundsEnabled;
    $: aaEffectsEnabled;
    $: aaAutorecDisabled;

    function runDiagnostics() {
        console.log("Rerunning Diagnostics");
        photoSensitive = game.settings.get("core", "photosensitiveMode");
        sequencerPermissions = game.settings.get(
            "sequencer",
            "permissions-effect-create"
        );
        sequencerEffectsEnabled = game.settings.get(
            "sequencer",
            "effectsEnabled"
        );
        sequencerSoundsEnabled = game.settings.get(
            "sequencer",
            "soundsEnabled"
        );
        aaEffectsEnabled =
            game.settings.get("autoanimations", "killAllAnim") === "off"
                ? false
                : true;
        aaAutorecDisabled = game.settings.get(
            "autoanimations",
            "disableAutoRec"
        );
    }
</script>

<div style="font-size: 1.1em">
    <div style="text-align: center">
        <label for="" style="font-weight:bold; font-size: 1.2em">This Diagnostics menu will check common settings that may cause Animations to stop working</label>
    </div>
    <table cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2" class="AAheader">Foundry Core Settings</th>
        </tr>
        <tr>
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
        <tr>
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
        <tr>
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
        <tr>
            <td>
                <i class="fas fa-circle-info isBlue" />
            </td>
            <td>
                Sequencer Effects permissions are set to <strong
                    >{permissionLevels[sequencerPermissions]}</strong
                >
            </td>
        </tr>
    </table>
    <table cellpadding="0" cellspacing="0" border="1">
        <tr>
            <th colspan="2" class="AAheader">Automated Animations Settings</th>
        </tr>
        <tr>
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
        <tr>
            {#if aaAutorecDisabled}
                <td>
                    <i class="fas fa-exclamation isRed" />
                </td>
                <td> Global Automatic Recognition Menu is Disabled!! </td>
            {:else}
                <td>
                    <i class="fas fa-check isGreen" />
                </td>
                <td> Global Automatic Recognition Menu is Enabled </td>
            {/if}
        </tr>
    </table>
</div>

<div style="margin: 2em, font-size: 1.3em">
    <button on:click={() => runDiagnostics()}>Re-Run Diagnostics</button>
</div>

<style lang="scss">
    .isGreen {
        color: green;
    }
    .isRed {
        color: red;
    }
    .isBlue {
        color: rgb(65, 65, 242);
    }
    .AAheader {
        font-size: 1.5em;
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
