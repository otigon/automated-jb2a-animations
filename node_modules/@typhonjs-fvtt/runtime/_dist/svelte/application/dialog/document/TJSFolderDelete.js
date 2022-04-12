import { TJSDialog }          from '@typhonjs-fvtt/runtime/svelte/application';
import { TJSFolderDelete
    as TJSFolderDeleteImpl }  from '@typhonjs-fvtt/runtime/svelte/component/dialog';
import { localize }           from '@typhonjs-fvtt/runtime/svelte/helper';
import { hasSetter }          from '@typhonjs-fvtt/runtime/svelte/util';

/**
 * Provides a reactive dialog for deleting a folder that by default is modal and not draggable. An additional set of
 * accessors for the folder assigned are available via the `this.reactive.document`. You may swap out the folder at any
 * time by setting it to a different folder document.
 */
export class TJSFolderDelete extends TJSDialog
{
   /**
    * @param {Folder}  document -
    *
    * @param {object}   options -
    *
    * @param {object}   dialogData -
    */
   constructor(document, options = {}, dialogData = {})
   {
      super({
         modal: typeof options?.modal === 'boolean' ? options.modal : true,
         draggable: typeof options?.draggable === 'boolean' ? options.draggable : false,
         ...dialogData,
         content: {
            class: TJSFolderDeleteImpl,
            props: { document }
         },
         title: `${localize('FOLDER.Delete')}: ${document.name}`,
         buttons: {
            delete: {
               icon: 'fas fa-dumpster',
               label: 'FOLDER.Delete',
               onclick: 'deleteFolder'
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
         default: 'delete',
         autoClose: false,
         close: () => this.options?.resolve?.(null)
      }, options);

      /**
       * @member {object} document - Adds accessors to SvelteReactive to get / set the document associated with
       *                             Document.
       *
       * @memberof SvelteReactive#
       */
      Object.defineProperty(this.reactive, 'document', {
         get: () => this.svelte?.dialogComponent?.document,
         set: (document) =>
         {
            const dialogComponent = this.svelte.dialogComponent;
            if (hasSetter(dialogComponent, 'document')) { dialogComponent.document = document; }
         }
      });
   }

   /**
    * Deletes a folder and does delete subfolders / documents.
    *
    * @param {Folder} document - Folder to delete.
    *
    * @param {object} [options] - Options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<Folder|boolean|null>} The deleted Folder or a falsy value; either 'false' for cancelling or
    * 'null' if the user closed the dialog via `<Esc>` or the close header button.
    */
   static async show(document, options = {}, dialogData = {})
   {
      if (!(document instanceof Folder))
      {
         console.warn(`TJSFolderDelete - show - warning: 'document' is not a Folder.`);
         return null;
      }

      return new Promise((resolve) =>
      {
         options.resolve = resolve;
         new TJSFolderDelete(document, options, dialogData).render(true, { focus: true });
      });
   }
}
