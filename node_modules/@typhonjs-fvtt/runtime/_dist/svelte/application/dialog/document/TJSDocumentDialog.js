import { TJSDocumentCreate }     from './TJSDocumentCreate.js';
import { TJSDocumentDelete }     from './TJSDocumentDelete.js';
import { TJSDocumentImport }     from './TJSDocumentImport.js';
import { TJSFolderCreateUpdate } from './TJSFolderCreateUpdate.js';
import { TJSFolderDelete }       from './TJSFolderDelete.js';
import { TJSFolderExport }       from './TJSFolderExport.js';
import { TJSFolderRemove }       from './TJSFolderRemove.js';
import { TJSFolderRolltable }    from './TJSFolderRolltable.js';
import { TJSPermissionControl }  from './TJSPermissionControl.js';

/**
 * Provides several methods to create documents, folders, and modify them through use of TJSDialog and a modal and
 * non-draggable by default user experience.
 */
export class TJSDocumentDialog
{
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
   static async configurePermissions(document, options = {}, dialogData = {})
   {
      return TJSPermissionControl.show(document, options, dialogData);
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
   static async documentCreate(documentCls, data = {}, { parent = null, pack = null, ...options } = {}, dialogData = {})
   {
      return TJSDocumentCreate.show(documentCls, data, { parent, pack, ...options }, dialogData);
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
   static async documentDelete(document, { context = {}, ...options } = {}, dialogData = {})
   {
      return TJSDocumentDelete.show(document, { context, ...options }, dialogData);
   }

   /**
    * Create a new Folder by rendering a dialog window to provide basic creation details.
    *
    * @param {object} folderData - Initial data with which to populate the creation form.
    *
    * @param {object} [options] - Options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<Folder|null>} The newly created Folder or null if the dialog is closed.
    */
   static async folderCreate(folderData, options = {}, dialogData = {})
   {
      return TJSFolderCreateUpdate.showCreate(folderData, options, dialogData);
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
   static async folderDelete(document, options = {}, dialogData = {})
   {
      return TJSFolderDelete.show(document, options, dialogData);
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
   static async folderExport(document, { pack, merge, keepId, ...options } = {}, dialogData = {})
   {
      return TJSFolderExport.show(document, { pack, merge, keepId, ...options }, dialogData);
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
   static async folderRemove(document, options = {}, dialogData = {})
   {
      return TJSFolderRemove.show(document, options, dialogData);
   }

   /**
    * Create a RollTable from the contents of the Folder.
    *
    * @param {Folder} document - Folder to create roll table from...
    *
    * @param {object} [options] - Options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<RollTable|boolean|null>} The newly created RollTable or a falsy value; either 'false' for
    * cancelling or 'null' if the user closed the dialog via `<Esc>` or the close header button.
    */
   static async folderRolltable(document, options = {}, dialogData = {})
   {
      return TJSFolderRolltable.show(document, options, dialogData);
   }

   /**
    * Updates an existing Folder by rendering a dialog window with basic details.
    *
    * @param {Folder} document - The folder to edit.
    *
    * @param {object} [options] - Options to pass to TJSDialog / Application.
    *
    * @param {object} [dialogData] - Optional data to modify dialog.
    *
    * @returns {Promise<Folder|null>} The modified Folder or null if the dialog is closed.
    */
   static async folderUpdate(document, options = {}, dialogData = {})
   {
      return TJSFolderCreateUpdate.showUpdate(document, options, dialogData);
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
   static async importFromJSON(document, options = {}, dialogData = {})
   {
      return TJSDocumentImport.show(document, options, dialogData);
   }
}
