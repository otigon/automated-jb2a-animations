import { TJSDialog }             from '@typhonjs-fvtt/runtime/svelte/application';
import { TJSDocumentCreate
    as TJSDocumentCreateImpl }   from '@typhonjs-fvtt/runtime/svelte/component/dialog';
import { localize }              from '@typhonjs-fvtt/runtime/svelte/helper';

/**
 * Provides a dialog for creating documents that by default is modal and not draggable.
 */
export class TJSDocumentCreate extends TJSDialog
{
   constructor(documentCls, data = {}, { parent = null, pack = null, renderSheet = true, ...options } = {},
    dialogData = {})
   {
      super({
         modal: typeof options?.modal === 'boolean' ? options.modal : true,
         draggable: typeof options?.draggable === 'boolean' ? options.draggable : false,
         ...dialogData,
         content: {
            class: TJSDocumentCreateImpl,
            props: {
               documentCls,
               data,
               parent,
               pack,
               renderSheet
            }
         },
         title: localize('DOCUMENT.Create', { type: localize(documentCls?.metadata?.label) }),
         buttons: {
            create: {
               icon: 'fas fa-check',
               label: localize('DOCUMENT.Create', { type: localize(documentCls?.metadata?.label) }),
               onclick: 'requestSubmit'
            }
         },
         default: 'create',
         autoClose: false,
         close: () => this.options?.resolve?.(null)
      }, { width: 320, ...options });
   }

   /**
    * Create a new Document of the type specified by `documentCls` by rendering a dialog window to provide basic
    * creation details.
    *
    * @param {object} documentCls - Document class to create.
    *
    * @param {object} [data] - Document data.
    *
    * @param {object} [context={}] - Additional context options or dialog positioning options.
    *
    * @param {object} [context.parent] - A parent Document within which these Documents should be embedded.
    *
    * @param {object} [context.pack] - A Compendium pack identifier within which the Documents should be modified.
    *
    * @param {...*} [context.options] - Rest of options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<Document|null>} The newly created document or a falsy value; either 'false' for cancelling
    *                                   or 'null' if the user closed the dialog via `<Esc>` or the close header button.
    */
   static async show(documentCls, data = {}, { parent = null, pack = null, ...options } = {}, dialogData = {})
   {
      if (!Object.prototype.isPrototypeOf.call(foundry.abstract.Document, documentCls))
      {
         console.warn(`TJSDocumentCreate - show - warning: 'documentCls' is not a Document.`);
         return null;
      }

      if (Object.prototype.isPrototypeOf.call(Folder, documentCls))
      {
         console.warn(`TJSDocumentCreate - show - warning: 'documentCls' is a Folder.`);
         return null;
      }

      return new Promise((resolve) =>
      {
         options.resolve = resolve;
         new TJSDocumentCreate(documentCls, data, { parent, pack, ...options }, dialogData).render(
          true, { focus: true });
      });
   }
}
