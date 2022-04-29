import { writable }           from 'svelte/store';

import { propertyStore }      from '@typhonjs-fvtt/runtime/svelte/store';
import { styleParsePixels }   from '@typhonjs-fvtt/runtime/svelte/util';

export class StyleCache
{
   constructor()
   {
      /** @type {HTMLElement|undefined} */
      this.el = void 0;

      /** @type {CSSStyleDeclaration} */
      this.computed = void 0;

      /** @type {number|undefined} */
      this.marginLeft = void 0;

      /** @type {number|undefined} */
      this.marginTop = void 0;

      /** @type {number|undefined} */
      this.maxHeight = void 0;

      /** @type {number|undefined} */
      this.maxWidth = void 0;

      /** @type {number|undefined} */
      this.minHeight = void 0;

      /** @type {number|undefined} */
      this.minWidth = void 0;

      /** @type {boolean} */
      this.hasWillChange = false;

      /**
       * @type {ResizeObserverData}
       */
      this.resizeObserved = {
         contentHeight: void 0,
         contentWidth: void 0,
         offsetHeight: void 0,
         offsetWidth: void 0
      };

      /**
       * Provides a writable store to track offset & content width / height from an associated `resizeObserver` action.
       *
       * @type {Writable<ResizeObserverData>}
       */
      const storeResizeObserved = writable(this.resizeObserved);

      this.stores = {
         element: writable(this.el),
         resizeContentHeight: propertyStore(storeResizeObserved, 'contentHeight'),
         resizeContentWidth: propertyStore(storeResizeObserved, 'contentWidth'),
         resizeObserved: storeResizeObserved,
         resizeOffsetHeight: propertyStore(storeResizeObserved, 'offsetHeight'),
         resizeOffsetWidth: propertyStore(storeResizeObserved, 'offsetWidth')
      };
   }

   /**
    * Returns the cached offsetHeight from any attached `resizeObserver` action otherwise gets the offsetHeight from
    * the element directly. The more optimized path is using `resizeObserver` as getting it from the element
    * directly is more expensive and alters the execution order of an animation frame.
    *
    * @returns {number} The element offsetHeight.
    */
   get offsetHeight()
   {
      if (this.el instanceof HTMLElement)
      {
         return this.resizeObserved.offsetHeight !== void 0 ? this.resizeObserved.offsetHeight : this.el.offsetHeight;
      }

      throw new Error(`StyleCache - get offsetHeight error: no element assigned.`);
   }

   /**
    * Returns the cached offsetWidth from any attached `resizeObserver` action otherwise gets the offsetWidth from
    * the element directly. The more optimized path is using `resizeObserver` as getting it from the element
    * directly is more expensive and alters the execution order of an animation frame.
    *
    * @returns {number} The element offsetHeight.
    */
   get offsetWidth()
   {
      if (this.el instanceof HTMLElement)
      {
         return this.resizeObserved.offsetWidth !== void 0 ? this.resizeObserved.offsetWidth : this.el.offsetWidth;
      }

      throw new Error(`StyleCache - get offsetWidth error: no element assigned.`);
   }

   /**
    * @param {HTMLElement} el -
    *
    * @returns {boolean} Does element match cached element.
    */
   hasData(el) { return this.el === el; }

   /**
    * Resets the style cache.
    */
   reset()
   {
      // Remove will-change inline style from previous element if it is still connected.
      if (this.el instanceof HTMLElement && this.el.isConnected && !this.hasWillChange)
      {
         this.el.style.willChange = null;
      }

      this.el = void 0;
      this.computed = void 0;
      this.marginLeft = void 0;
      this.marginTop = void 0;
      this.maxHeight = void 0;
      this.maxWidth = void 0;
      this.minHeight = void 0;
      this.minWidth = void 0;

      this.hasWillChange = false;

      // Silently reset `resizedObserved`; With proper usage the `resizeObserver` action issues an update on removal.
      this.resizeObserved.contentHeight = void 0;
      this.resizeObserved.contentWidth = void 0;
      this.resizeObserved.offsetHeight = void 0;
      this.resizeObserved.offsetWidth = void 0;

      // Reset the tracked element this Position instance is modifying.
      this.stores.element.set(void 0);
   }

   /**
    * Updates the style cache with new data from the given element.
    *
    * @param {HTMLElement} el - An HTML element.
    */
   update(el)
   {
      this.el = el;

      this.computed = globalThis.getComputedStyle(el);

      this.marginLeft = styleParsePixels(el.style.marginLeft) ?? styleParsePixels(this.computed.marginLeft);
      this.marginTop = styleParsePixels(el.style.marginTop) ?? styleParsePixels(this.computed.marginTop);
      this.maxHeight = styleParsePixels(el.style.maxHeight) ?? styleParsePixels(this.computed.maxHeight);
      this.maxWidth = styleParsePixels(el.style.maxWidth) ?? styleParsePixels(this.computed.maxWidth);

      // Note that the computed styles for below will always be 0px / 0 when no style is active.
      this.minHeight = styleParsePixels(el.style.minHeight) ?? styleParsePixels(this.computed.minHeight);
      this.minWidth = styleParsePixels(el.style.minWidth) ?? styleParsePixels(this.computed.minWidth);

      // Tracks if there already is a will-change property on the inline or computed styles.
      const willChange = el.style.willChange !== '' ? el.style.willChange : void 0 ?? this.computed.willChange;

      this.hasWillChange = willChange !== '' && willChange !== 'auto';

      // Update the tracked element this Position instance is modifying.
      this.stores.element.set(el);
   }
}
