<script>
   import { ripple }        from "#standard/action/animate/composable/ripple";

   import { TJSIconButton } from "#standard/component/button";

   export let category;

   // TODO: LOCALIZE THESE STRINGS
   const stringCloseAll = game.i18n.localize("autoanimations.menus.close") + " " + game.i18n.localize("autoanimations.menus.all");
   //const stringOpenAll = "Open All";

   let icon, title, allOpen;

   $: dataReducer = category.dataReducer;

   //$: storeAllFoldersOpened = category.stores.allFoldersOpened;
   /*
   $: {
      allOpen = $storeAllFoldersOpened;

      icon = allOpen ? 'fas fa-angle-double-up' : 'fas fa-angle-double-down';
      title = allOpen ? stringCloseAll : stringOpenAll;
   }
   */
   icon = 'fas fa-angle-double-up';
   title = stringCloseAll;
   const button = {
      efx: ripple(),
      styles: { "margin-left": "0.5em", "margin-right": "auto" },
   };

   function onClick()
   {
      //const newState = !allOpen;

      // Update folderState for all visible animation stores.
      //for (const animationStore of $dataReducer) { animationStore.folderState = newState; }
      for (const animationStore of $dataReducer) { animationStore.folderState = false; }
   }
</script>

<TJSIconButton {button} {icon} {title} on:click={onClick}/>

