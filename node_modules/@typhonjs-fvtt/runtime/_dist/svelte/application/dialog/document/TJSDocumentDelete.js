import { TJSDialog }             from '@typhonjs-fvtt/runtime/svelte/application';
import { TJSDocumentDelete
    as TJSDocumentDeleteImpl }   from '@typhonjs-fvtt/runtime/svelte/component/dialog';
import { localize }              from '@typhonjs-fvtt/runtime/svelte/helper';
import { hasSetter }             from '@typhonjs-fvtt/runtime/svelte/util';

/**
 * Provides a reactive dialog for deleting documents that by default is modal and not draggable. An additional set of
 * accessors for the document assigned are available via the `this.reactive.document`. You may swap out the document at
 * any time by setting it to a different document.
 */
export class TJSDocumentDelete extends TJSDialog
{
   /**
    * @param {foundry.abstract.Document}  document -
    *
    * @param {object} [opts] - Additional context options or dialog positioning options.
    *
    * @param {object} [opts.context] - DocumentModificationContext.
    *
    * @param {...*} [opts.options] - Rest of options to pass to TJSDialog / Application.
    *
    * @param {object}   dialogData -
    */
   constructor(document, { context = {}, ...options } = {}, dialogData = {})
   {
      super({
         modal: typeof options?.modal === 'boolean' ? options.modal : true,
         draggable: typeof options?.draggable === 'boolean' ? options.draggable : false,
         ...dialogData,
         content: {
            class: TJSDocumentDeleteImpl,
            props: { document, context }
         },
         title: `${localize('DOCUMENT.Delete', { type: localize(document.constructor.metadata.label) })}: ${
          document.name}`,
         buttons: {
            delete: {
               icon: 'fas fa-trash',
               label: localize('DOCUMENT.Delete', { type: localize(document.constructor.metadata.label) }),
               onclick: 'deleteDocument'
            },
            cancel: {
               icon: 'fas fa-times',
               label: 'Cancel',
               onclick: () => this.options.resolve?.(false)
            }
         },
         default: 'delete',
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

      /**
       * @member {object} context - Adds accessors to SvelteReactive to get / set the DocumentModificationContext
       *                            associated with Document.
       *
       * @memberof SvelteReactive#
       */
      Object.defineProperty(this.reactive, 'context', {
         get: () => this.svelte?.dialogComponent?.context,
         set: (context) => // eslint-disable-line no-shadow
         {
            const dialogComponent = this.svelte.dialogComponent;
            if (hasSetter(dialogComponent, 'context')) { dialogComponent.context = context; }
         }
      });
   }

   /**
    * Shows a modal / non-draggable dialog to delete a document.
    *
    * @param {foundry.abstract.Document} document - Document to delete.
    *
    * @param {object} [opts] - Additional context options or dialog positioning options.
    *
    * @param {object} [opts.context] - DocumentModificationContext.
    *
    * @param {...*} [opts.options] - Rest of options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<Document|boolean|null>} The document if deleted or a falsy value; either 'false' for cancelling
    *                                   or 'null' if the user closed the dialog via `<Esc>` or the close header button.
    */
   static async show(document, { context = {}, ...options } = {}, dialogData = {})
   {
      if (!(document instanceof foundry.abstract.Document))
      {
         console.warn(`TJSDocumentDelete - show - warning: 'document' is not a Document.`);
         return null;
      }

      if (document instanceof Folder)
      {
         console.warn(`TJSDocumentDelete - show - warning: 'document' is a Folder.`);
         return null;
      }

      return new Promise((resolve) =>
      {
         options.resolve = resolve;
         new TJSDocumentDelete(document, { context, ...options }, dialogData).render(true, { focus: true });
      });
   }
}
