import { TJSDialog }                from '@typhonjs-fvtt/runtime/svelte/application';
import { TJSPermissionControl
    as TJSPermissionControlImpl }   from '@typhonjs-fvtt/runtime/svelte/component/dialog';
import { localize }                 from '@typhonjs-fvtt/runtime/svelte/helper';
import { hasSetter }                from '@typhonjs-fvtt/runtime/svelte/util';

/**
 * Provides a reactive dialog for permission control that by default is modal and not draggable. An additional set of
 * accessors for the document assigned are available via the `this.reactive.document`. You may swap out the document at
 * any time by setting it to a different document.
 */
export class TJSPermissionControl extends TJSDialog
{
   /**
    * @param {foundry.abstract.Document}  document -
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
            class: TJSPermissionControlImpl,
            props: { document }
         },
         title: `${localize('PERMISSION.Title')}: ${document.name}`,
         buttons: {
            save: {
               icon: 'far fa-save',
               label: 'Save Changes',
               onclick: 'requestSubmit'
            }
         },
         default: 'save',
         autoClose: false,
         close: () => this.options?.resolve?.(null)
      }, options);

      /**
       * @member {object} document - Adds accessors to SvelteReactive to get / set the document associated with
       *                             TJSPermissionControl.
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
    * Change permissions of a document by rendering a dialog to alter the default and all user / player permissions.
    *
    * @param {foundry.abstract.Document} document - Document instance to modify.
    *
    * @param {object} [options] - Rest of options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<Document|null>} The modified document or 'null' if the user closed the dialog via `<Esc>` or the
    *                                   close header button.
    */
   static async show(document, options = {}, dialogData = {})
   {
      if (!(document instanceof foundry.abstract.Document))
      {
         console.warn(`TJSPermissionControl - show - warning: 'document' is not a Document.`);
         return null;
      }

      return new Promise((resolve) =>
      {
         options.resolve = resolve;
         new TJSPermissionControl(document, options, dialogData).render(true, { focus: true });
      });
   }
}
