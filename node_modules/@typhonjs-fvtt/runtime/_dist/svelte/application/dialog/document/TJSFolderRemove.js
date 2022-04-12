import { TJSDialog }          from '@typhonjs-fvtt/runtime/svelte/application';
import { TJSFolderRemove
    as TJSFolderRemoveImpl }  from '@typhonjs-fvtt/runtime/svelte/component/dialog';
import { localize }           from '@typhonjs-fvtt/runtime/svelte/helper';
import { hasSetter }          from '@typhonjs-fvtt/runtime/svelte/util';

/**
 * Provides a reactive dialog for removing a folder that by default is modal and not draggable. An additional set of
 * accessors for the folder assigned are available via the `this.reactive.document`. You may swap out the folder at any
 * time by setting it to a different folder document.
 */
export class TJSFolderRemove extends TJSDialog
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
            class: TJSFolderRemoveImpl,
            props: { document }
         },
         title: `${localize('FOLDER.Remove')}: ${document.name}`,
         buttons: {
            remove: {
               icon: 'fas fa-trash',
               label: 'FOLDER.Remove',
               onclick: 'removeFolder'
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
         default: 'remove',
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
    * Removes a folder, but does not delete / remove subfolders / documents.
    *
    * @param {Folder} document - Folder to remove.
    *
    * @param {object} [options] - Options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<Folder|boolean|null>} The removed Folder or a falsy value; either 'false' for cancelling or
    * 'null' if the user closed the dialog via `<Esc>` or the close header button.
    */
   static async show(document, options = {}, dialogData = {})
   {
      if (!(document instanceof Folder))
      {
         console.warn(`TJSFolderRemove - show - warning: 'document' is not a Folder.`);
         return null;
      }

      return new Promise((resolve) =>
      {
         options.resolve = resolve;
         new TJSFolderRemove(document, options, dialogData).render(true, { focus: true });
      });
   }
}
