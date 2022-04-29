import { DialogShell }        from '@typhonjs-fvtt/runtime/svelte/component/core';
import { deepMerge }          from '@typhonjs-fvtt/runtime/svelte/util';

import { DialogData }         from './internal/DialogData.js';
import { SvelteApplication }  from './SvelteApplication.js';

/**
 * Provides a Foundry API compatible dialog alternative implemented w/ Svelte. There are several features including
 * a glasspane / modal option with various styling and transition capabilities.
 *
 * TODO: document all dialog data parameters; keep track of newly added like button -> styles, title; modal,
 * draggable, transition options, modal transitions
 */
export class TJSDialog extends SvelteApplication
{
   /**
    * @type {DialogData}
    */
   #data;

   /**
    * @param {object}   data - Dialog data.
    *
    * @param {object}   [options] - SvelteApplication options.
    */
   constructor(data, options = {})
   {
      super(options);

      this.#data = new DialogData(this);
      this.data = data;

      /**
       * @member {object} dialogComponent - A getter to SvelteData to retrieve any mounted Svelte component as the
       *                                    dialog content.
       *
       * @memberof GetSvelteData#
       * @readonly
       */
      Object.defineProperty(this.svelte, 'dialogComponent', {
         get: () => this.svelte?.applicationShell?.dialogComponent,
      });
   }

   /**
    * Default options
    *
    * @returns {object} Default options
    */
   static get defaultOptions()
   {
      return deepMerge(super.defaultOptions, {
         classes: ['dialog'],
         width: 400,
         height: 'auto',
         jQuery: true,
         svelte: {
            class: DialogShell,
            intro: true,
            target: document.body,
            props: function() { return { data: this.#data }; } // this context is the SvelteApplication when invoked.
         }
      });
   }

   /**
    * Returns the dialog data.
    *
    * @returns {DialogData} Dialog data.
    */
   get data() { return this.#data; }

   /**
    * Sets the dialog data; this is reactive.
    *
    * @param {object}   data - Dialog data.
    */
   set data(data)
   {
      const descriptors = Object.getOwnPropertyDescriptors(this.#data);

      // Remove old data for all configurable descriptors.
      for (const descriptor in descriptors)
      {
         if (descriptors[descriptor].configurable) { delete this.#data[descriptor]; }
      }

      // Merge new data and perform a reactive update.
      this.#data.merge(data);
   }

   /**
    * Implemented only for backwards compatibility w/ default Foundry {@link Dialog} API.
    *
    * @param {JQuery}   html - JQuery element for content area.
    */
   activateListeners(html)
   {
      super.activateListeners(html);

      if (this.data.render instanceof Function)
      {
         const actualHTML = typeof this.options.template === 'string' ? html :
          this.options.jQuery ? $(this.elementContent) : this.elementContent;

         this.data.render(this.options.jQuery ? actualHTML : actualHTML[0]);
      }
   }

   /**
    * Close the dialog and un-register references to it within UI mappings.
    * This function returns a Promise which resolves once the window closing animation concludes.
    *
    * @param {object}   [options] - Optional parameters.
    *
    * @param {boolean}  [options.force] - Force close regardless of render state.
    *
    * @returns {Promise<void>} A Promise which resolves once the application is closed.
    */
   async close(options)
   {
      /**
       * Implemented only for backwards compatibility w/ default Foundry {@link Dialog} API.
       */
      if (this.data.close instanceof Function)
      {
         this.data.close(this.options.jQuery ? this.element : this.element[0]);
      }

      return super.close(options);
   }

   // ---------------------------------------------------------------------------------------------------------------

   /**
    * A helper factory method to create simple confirmation dialog windows which consist of simple yes/no prompts.
    * If you require more flexibility, a custom Dialog instance is preferred.
    *
    * @param {TJSConfirmConfig} config - Confirm dialog options.
    *
    * @returns {Promise<*>} A promise which resolves once the user makes a choice or closes the window.
    *
    * @example
    * let d = TJSDialog.confirm({
    *  title: "A Yes or No Question",
    *  content: "<p>Choose wisely.</p>",
    *  yes: () => console.log("You chose ... wisely"),
    *  no: () => console.log("You chose ... poorly"),
    *  defaultYes: false
    * });
    */
   static async confirm({ title, content, yes, no, render, defaultYes = true, rejectClose = false, options = {},
    buttons = {}, draggable = true, modal = false, modalOptions = {}, popOut = true, resizable = false, transition = {},
     zIndex } = {})
   {
      // Allow overwriting of default icon and labels.
      const mergedButtons = deepMerge({
         yes: {
            icon: '<i class="fas fa-check"></i>',
            label: game.i18n.localize('Yes')
         },
         no: {
            icon: '<i class="fas fa-times"></i>',
            label: game.i18n.localize('No'),
         }
      }, buttons);

      return new Promise((resolve, reject) =>
      {
         const dialog = new this({
            title,
            content,
            render,
            draggable,
            modal,
            modalOptions,
            popOut,
            resizable,
            transition,
            zIndex,
            buttons: deepMerge(mergedButtons, {
               yes: {
                  callback: (html) =>
                  {
                     const result = yes ? yes(html) : true;
                     resolve(result);
                  }
               },
               no: {
                  callback: (html) =>
                  {
                     const result = no ? no(html) : false;
                     resolve(result);
                  }
               }
            }),
            default: defaultYes ? "yes" : "no",
            close: () =>
            {
               if (rejectClose) { reject('The confirmation Dialog was closed without a choice being made.'); }
               else { resolve(null); }
            },
         }, options);
         dialog.render(true);
      });
   }

   /**
    * A helper factory method to display a basic "prompt" style Dialog with a single button
    *
    * @param {TJSPromptConfig} config - Prompt dialog options.
    *
    * @returns {Promise<*>} The returned value from the provided callback function, if any
    */
   static async prompt({ title, content, label, callback, render, rejectClose = false, options = {}, draggable = true,
    icon = '<i class="fas fa-check"></i>', modal = false, modalOptions = {}, popOut = true, resizable = false,
     transition = {}, zIndex } = {})
   {
      return new Promise((resolve, reject) =>
      {
         const dialog = new this({
            title,
            content,
            render,
            draggable,
            modal,
            modalOptions,
            popOut,
            resizable,
            transition,
            zIndex,
            buttons: {
               ok: {
                  icon,
                  label,
                  callback: (html) =>
                  {
                     const result = callback ? callback(html) : null;
                     resolve(result);
                  }
               },
            },
            default: 'ok',
            close: () =>
            {
               if (rejectClose)
               {
                  reject(new Error('The Dialog prompt was closed without being accepted.'));
               }
               else { resolve(null); }
            },
         }, options);
         dialog.render(true);
      });
   }
}

/**
 * @typedef TJSConfirmConfig - Configuration options for the confirm dialog.
 *
 * @property {string}   title - The confirmation window title
 *
 * @property {string}   content - The confirmation message
 *
 * @property {Function} [yes] - Callback function upon yes
 *
 * @property {Function} [no] - Callback function upon no
 *
 * @property {Function} [render] - A function to call when the dialog is rendered
 *
 * @property {boolean}  [defaultYes=true] - Make "yes" the default choice?
 *
 * @property {boolean}  [rejectClose=false] - Reject the Promise if the Dialog is closed without making a choice.
 *
 * @property {object}   [options={}] - Additional rendering options passed to the Dialog
 *
 * @property {object}   [buttons={}] - Provides a button override that is merged with default buttons.
 *
 * @property {boolean}  [draggable=true] - The dialog is draggable when true.
 *
 * @property {boolean}  [modal=false] - When true a modal dialog is displayed.
 *
 * @property {object}   [modalOptions] - Additional options for modal dialog display.
 *
 * @property {boolean}  [popOut=true] - When true the dialog is a pop out Application.
 *
 * @property {boolean}  [resizable=false] - When true the dialog is resizable.
 *
 * @property {object}   [transition] - Transition options for the dialog.
 *
 * @property {number|null} [zIndex] - A specific z-index for the dialog.
 */

/**
 * @typedef TJSPromptConfig - Configuration options for the confirm dialog.
 *
 * @property {string}   title - The confirmation window title
 *
 * @property {string}   content - The confirmation message
 *
 * @property {string}   [label] - The confirmation button text.
 *
 * @property {Function} [callback] - A callback function to fire when the button is clicked.
 *
 * @property {Function} [render] - A function to call when the dialog is rendered.
 *
 * @property {boolean}  [rejectClose=false] - Reject the Promise if the Dialog is closed without making a choice.
 *
 * @property {object}   [options={}] - Additional application options passed to the TJSDialog.
 *
 * @property {boolean}  [draggable=true] - The dialog is draggable when true.
 *
 * @property {string}   [icon="<i class="fas fa-check"></i>"] - Set another icon besides `fa-check` for button.
 *
 * @property {boolean}  [modal=false] - When true a modal dialog is displayed.
 *
 * @property {object}   [modalOptions] - Additional options for modal dialog display.
 *
 * @property {boolean}  [popOut=true] - When true the dialog is a pop out Application.
 *
 * @property {boolean}  [resizable=false] - When true the dialog is resizable.
 *
 * @property {object}   [transition] - Transition options for the dialog.
 *
 * @property {number|null} [zIndex] - A specific z-index for the dialog.
 */
