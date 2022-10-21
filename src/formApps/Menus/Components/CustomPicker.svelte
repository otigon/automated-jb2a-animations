<script>

    export let animation;
    export let category;
    export let idx;
    export let section;
    export let section02;

    $: isCustom = $animation[section][section02].enableCustom;

    const label = game.i18n.localize('autoanimations.menus.custom')
</script>

<table class="c">
    <tr>
        <td style="width: 6em; border: none;">
            <div class="flexrow">
                <label for="" class="aa-customFont">{label}</label>
                <input
                type="checkbox"
                id="{section} {section02} {animation._data.id}"
                bind:checked={$animation[section][section02].enableCustom}
                />
            </div>
        </td>
        <td style=" border: none" class={isCustom ? "" : "aa-disableOpacity"}>
            <input
            disabled={!isCustom}
            type="text"
            bind:value={$animation[section][section02].customPath}
            style="font-weight:normal; font-size:small; border-radius: 5px;text-align:left; width: 100%; height: 1.75em"
            />
        </td>
        <td style="width: 4em;border: none" class={isCustom ? "" : "aa-disableOpacity"}>
            <i class="fas fa-file-import"
               title="File Picker"
               style="font-size:1.5em"
               on:click|preventDefault={() => category.selectCustom(section, section02, idx)}
               role=presentation
            />
            <i class="fas fa-database"
               title="Sequencer Database Viewer"
               style="font-size:1.5em;margin-left: 5px"
               on:click|preventDefault={() => category.openSequencerViewer()}
               role=presentation
            />
        </td>
    </tr>
</table>

<style lang="scss">
    table.c label {
        margin-top: .2em;
    }
    .aa-customFont {
        font-family: "Modesto Condensed", "Palatino Linotype", serif;
        font-weight: bold;
        font-size: 1.5em;
    }
</style>
