export class Centered
{
   /**
    * @type {HTMLElement}
    */
   #element;

   /**
    * Provides a manual setting of the element height. As things go `offsetHeight` causes a browser layout and is not
    * performance oriented. If manually set this height is used instead of `offsetHeight`.
    *
    * @type {number}
    */
   #height;

   /**
    * Set from an optional value in the constructor to lock accessors preventing modification.
    */
   #lock;

   /**
    * Provides a manual setting of the element width. As things go `offsetWidth` causes a browser layout and is not
    * performance oriented. If manually set this width is used instead of `offsetWidth`.
    *
    * @type {number}
    */
   #width;

   constructor({ element, lock = false, width, height } = {})
   {
      this.element = element;
      this.width = width;
      this.height = height;

      this.#lock = typeof lock === 'boolean' ? lock : false;
   }

   get element() { return this.#element; }

   get height() { return this.#height; }

   get width() { return this.#width; }

   set element(element)
   {
      if (this.#lock) { return; }

      if (element === void 0  || element === null || element instanceof HTMLElement)
      {
         this.#element = element;
      }
      else
      {
         throw new TypeError(`'element' is not a HTMLElement, undefined, or null.`);
      }
   }

   set height(height)
   {
      if (this.#lock) { return; }

      if (height === void 0 || Number.isFinite(height))
      {
         this.#height = height;
      }
      else
      {
         throw new TypeError(`'height' is not a finite number or undefined.`);
      }
   }

   set width(width)
   {
      if (this.#lock) { return; }

      if (width === void 0 || Number.isFinite(width))
      {
         this.#width = width;
      }
      else
      {
         throw new TypeError(`'width' is not a finite number or undefined.`);
      }
   }

   setDimension(width, height)
   {
      if (this.#lock) { return; }

      if (width === void 0 || Number.isFinite(width))
      {
         this.#width = width;
      }
      else
      {
         throw new TypeError(`'width' is not a finite number or undefined.`);
      }

      if (height === void 0 || Number.isFinite(height))
      {
         this.#height = height;
      }
      else
      {
         throw new TypeError(`'height' is not a finite number or undefined.`);
      }
   }

   getLeft(width)
   {
      // Determine containing bounds from manual values; or any element; lastly the browser width / height.
      const boundsWidth = this.#width ?? this.#element?.offsetWidth ?? globalThis.innerWidth;

      return (boundsWidth - width) / 2;
   }

   getTop(height)
   {
      const boundsHeight = this.#height ?? this.#element?.offsetHeight ?? globalThis.innerHeight;

      return (boundsHeight - height) / 2;
   }
}
