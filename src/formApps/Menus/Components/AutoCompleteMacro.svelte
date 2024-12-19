<script>
    /**
     * Credit to Wasp for the Compendium macro filtering!
     */
    import { localize } from "#runtime/util/i18n";
    import { writable } from "svelte/store";
    import { getContext }   from "svelte";

    //export let animation;
    //export let category;
    let { animation, category } = getContext('animation-data');

    $: macro = $animation.macro.name;

    export let macro;

    let macros = writable([]);

    const id = foundry.utils.randomID() + "-list";

    function filterMacros() {

      let allResults = Array.from(game.macros)
        .map(m => ({
          id: m.id,
          name: m.name
        }));

      const compendiums = Array.from(game.packs)
        .filter(pack => pack.documentName === "Macro")
        .map(pack => ({
          id: pack.metadata.id,
          name: "Compendium." + pack.metadata.id
        }))

      allResults = allResults.concat(compendiums);

      allResults = allResults.filter(m => {
        return m.name?.toLowerCase().includes(macro?.toLowerCase()) || !macro
      })

      if (macro?.startsWith("Compendium.") && allResults.length === 1) {
        allResults = Array.from(game.packs.get(allResults[0].id).index).map(m => {
          return {
            id: allResults[0].id + "." + m._id,
            name: allResults[0].name + "." + m.name
          }
        });
      }
      macros.set(allResults);
    }
</script>

<div class="aa-flexrow">
    <input type="text"
        class="aa-MacroInput"
           list={id}
           bind:value={$animation.macro.name}
           style="flex:1; margin-right:5px;"
           placeholder={localize('autoanimations.menus.insertMacro')}
           on:keyup={() => { filterMacros() }}
           on:change={() => { filterMacros() }}
           on:focus={() => filterMacros()}
    />
    <datalist id={id}>
      {#each $macros as m (m.id)}
        <option value={m.name}>{m.text ?? ""}</option>
      {/each}
    </datalist>
    <i title="Open Macro"
       style="font-size: 20px; flex:0;"
       class="fas fa-edit aa-zoom"
       on:click={() => category.openMacro(animation._data.macro.name)}
       role=presentation>
    </i>
</div>

<style>
    .aa-MacroInput {
        height: 1em;
        padding: 10px;
        font-size: 14px;
    }
    .aa-flexrow {
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-bottom: .25em;
    }
</style>
