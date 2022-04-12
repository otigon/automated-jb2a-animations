import { TJSDialog }          from '@typhonjs-fvtt/runtime/svelte/application';
import { TJSFolderExport
    as TJSFolderExportImpl }  from '@typhonjs-fvtt/runtime/svelte/component/dialog';
import { localize }           from '@typhonjs-fvtt/runtime/svelte/helper';

/**
 * Provides a reactive dialog for exporting folders to a compendium that by default is modal and not draggable.
 */
export class TJSFolderExport extends TJSDialog
{
   /**
    * Shows a modal / non-draggable dialog to export a folder to an eligible compendium pack.
    *
    * @param {Folder} document - Folder to export.
    *
    * @param {object} [opts] - Additional options.
    *
    * @param {string} [opts.pack] - The name of the compendium pack to provide an initial selection value in the dialog.
    *
    * @param {boolean} [opts.merge=true] - Update existing entries in the Compendium pack, matching by name
    *
    * @param {boolean} [opts.keepId=true] - Keep document IDs.
    *
    * @param {...*} [opts.options] - Rest of options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<CompendiumCollection|boolean|null>} The compendium collection the folder is exported to or a
    * falsy value; either 'false' for cancelling or 'null' if the user closed the dialog via `<Esc>` or the close header
    * button.
    */
   constructor(document, { pack, merge, keepId, ...options } = {}, dialogData = {})
   {
      super({}, options);

      // Get eligible pack destinations
      const packs = game.packs.filter((p) => (p.documentName === document.type) && !p.locked);
      if (!packs.length)
      {
         this.options?.resolve?.(null);
         return ui.notifications.warn(game.i18n.format("FOLDER.ExportWarningNone", { type: document.type }));
      }

      this.data = {
         modal: typeof options?.modal === 'boolean' ? options.modal : true,
         draggable: typeof options?.draggable === 'boolean' ? options.draggable : false,
         ...dialogData,
         content: {
            class: TJSFolderExportImpl,
            props: {
               document,
               packName: pack,
               merge,
               keepId
            }
         },
         title: `${localize('FOLDER.ExportTitle')}: ${document.name}`,
         buttons: {
            export: {
               icon: 'fas fa-atlas',
               label: 'FOLDER.ExportTitle',
               onclick: 'exportData'
            },
            cancel: {
               icon: 'fas fa-times',
               label: 'Cancel',
               onclick: () =>
               {
                  this.options?.resolve?.(false);
                  this.close();
               }
            }
         },
         default: 'export',
         autoClose: false,
         close: () => this.options?.resolve?.(null)
      };
   }

   /**
    * Shows a modal / non-draggable dialog to export a folder to an eligible compendium pack.
    *
    * @param {Folder} document - Folder to export.
    *
    * @param {object} [opts] - Additional options.
    *
    * @param {string} [opts.pack] - The name of the compendium pack to provide an initial selection value in the dialog.
    *
    * @param {boolean} [opts.merge=true] - Update existing entries in the Compendium pack, matching by name
    *
    * @param {boolean} [opts.keepId=true] - Keep document IDs.
    *
    * @param {...*} [opts.options] - Rest of options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<CompendiumCollection|boolean|null>} The compendium collection the folder is exported to or a
    * falsy value; either 'false' for cancelling or 'null' if the user closed the dialog via `<Esc>` or the close header
    * button.
    */
   static async show(document, { pack, merge, keepId, ...options } = {}, dialogData = {})
   {
      if (!(document instanceof Folder))
      {
         console.warn(`TJSFolderExport - show - warning: 'document' is not a Folder.`);
         return null;
      }

      // Get eligible pack destinations if there are none then post a warning.
      const packs = game.packs.filter((p) => (p.documentName === document.type) && !p.locked);
      if (!packs.length)
      {
         return ui.notifications.warn(localize('FOLDER.ExportWarningNone', { type: document.type }));
      }

      return new Promise((resolve) =>
      {
         options.resolve = resolve;
         new TJSFolderExport(document, { pack, merge, keepId, ...options }, dialogData).render(true, { focus: true });
      });
   }
}
