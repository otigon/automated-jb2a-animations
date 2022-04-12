import { TJSDialog }             from '@typhonjs-fvtt/runtime/svelte/application';
import { TJSDocumentImport
    as TJSDocumentImportImpl }   from '@typhonjs-fvtt/runtime/svelte/component/dialog';
import { localize }              from '@typhonjs-fvtt/runtime/svelte/helper';
import { hasSetter }             from '@typhonjs-fvtt/runtime/svelte/util';

/**
 * Provides a reactive dialog for importing documents that by default is modal and not draggable. An additional set of
 * accessors for the document assigned are available via the `this.reactive.document`. You may swap out the document at
 * any time by setting it to a different document.
 */
export class TJSDocumentImport extends TJSDialog
{
   /**
    * @param {foundry.abstract.Document}  document -
    *
    * @param {object} [options] - Options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] -
    */
   constructor(document, options, dialogData = {})
   {
      super({
         modal: typeof options?.modal === 'boolean' ? options.modal : true,
         draggable: typeof options?.draggable === 'boolean' ? options.draggable : false,
         ...dialogData,
         title: `${localize('DOCUMENT.ImportData')}: ${document.name}`,
         content: {
            class: TJSDocumentImportImpl,
            props: { document, context }
         },
         buttons: {
            import: {
               icon: 'fas fa-file-import',
               label: 'Import',
               onclick: 'requestSubmit'
            },
            no: {
               icon: 'fas fa-times',
               label: 'Cancel',
               onclick: () =>
               {
                  this.options.resolve?.(false);
                  this.close();
               }
            }
         },
         default: 'import',
         autoClose: false, // Don't automatically close on button onclick.
         close: () => this.options.resolve?.(null)
      }, { width: 400, ...options });

      /**
       * @member {object} document - Adds accessors to SvelteReactive to get / set the document associated with
       *                             Document.
       *
       * @memberof SvelteApplication.reactive
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
    * Render an import dialog for updating the data related to this Document through an exported JSON file
    *
    * @param {foundry.abstract.Document} document - The document to import JSON to...
    *
    * @param {object} [options] - Options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<Document|boolean|null>} The document after import completes or a falsy value; either 'false' for
    *                         cancelling or 'null' if the user closed the dialog via `<Esc>` or the close header button.
    */
   static async show(document, options = {}, dialogData = {})
   {
      if (!(document instanceof foundry.abstract.Document))
      {
         console.warn(`TJSDocumentImport - show - warning: 'document' is not a Document.`);
         return null;
      }

      if (document instanceof Folder)
      {
         console.warn(`TJSDocumentImport - show - warning: 'document' is a Folder; unsupported operation'.`);
         return null;
      }

      return new Promise((resolve) =>
      {
         options.resolve = resolve;
         new TJSDocumentImport(document, options, dialogData).render(true, { focus: true });
      });
   }
}
