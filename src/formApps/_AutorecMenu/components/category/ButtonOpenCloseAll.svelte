<script>
   import { ripple }        from "@typhonjs-fvtt/svelte-standard/action";
   import { TJSIconButton } from "@typhonjs-fvtt/svelte-standard/component";

   export let category;

   // TODO: LOCALIZE THESE STRINGS
   const stringCloseAll = "Close All";
   const stringOpenAll = "Open All";

   let icon, title, allOpen;

   $: dataReducer = category.dataReducer;
   $: storeAllFoldersOpened = category.stores.allFoldersOpened;

   $: {
      allOpen = $storeAllFoldersOpened;

      icon = allOpen ? 'fas fa-angle-double-up' : 'fas fa-angle-double-down';
      title = allOpen ? stringCloseAll : stringOpenAll;
   }

   const button = {
      efx: ripple(),
      styles: { "margin-left": "0.5em", "margin-right": "auto" },
   };

   function onClick()
   {
      const newState = !allOpen;

      // Update folderState for all visible animation stores.
      for (const animationStore of $dataReducer) { animationStore.folderState = newState; }
   }
</script>

<TJSIconButton {button} {icon} {title} on:click={onClick}/>

