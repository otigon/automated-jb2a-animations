import {
   deepMerge,
   safeAccess,
   safeSet }   from '@typhonjs-fvtt/runtime/svelte/util';

export class DialogData
{
   /**
    * @type {SvelteApplication}
    */
   #application;

   /**
    * @param {SvelteApplication} application - The host Foundry application.
    */
   constructor(application)
   {
      this.#application = application;
   }

   /**
    * Provides a way to safely get this dialogs data given an accessor string which describes the
    * entries to walk. To access deeper entries into the object format the accessor string with `.` between entries
    * to walk.
    *
    * // TODO DOCUMENT the accessor in more detail.
    *
    * @param {string}   accessor - The path / key to set. You can set multiple levels.
    *
    * @param {*}        [defaultValue] - A default value returned if the accessor is not found.
    *
    * @returns {*} Value at the accessor.
    */
   get(accessor, defaultValue)
   {
      return safeAccess(this, accessor, defaultValue);
   }

   /**
    * @param {object} data - Merge provided data object into Dialog data.
    */
   merge(data)
   {
      deepMerge(this, data);

      const component = this.#application.svelte.component(0);
      if (component?.data) { component.data = this; }
   }

   /**
    * Provides a way to safely set this dialogs data given an accessor string which describes the
    * entries to walk. To access deeper entries into the object format the accessor string with `.` between entries
    * to walk.
    *
    * Automatically the dialog data will be updated in the associated DialogShell Svelte component.
    *
    * // TODO DOCUMENT the accessor in more detail.
    *
    * @param {string}   accessor - The path / key to set. You can set multiple levels.
    *
    * @param {*}        value - Value to set.
    *
    * @returns {boolean} True if successful.
    */
   set(accessor, value)
   {
      const success = safeSet(this, accessor, value);

      // If `this.options` modified then update the app options store.
      if (success)
      {
         const component = this.#application.svelte.component(0);
         if (component?.data) { component.data = this; }
      }

      return success;
   }
}
