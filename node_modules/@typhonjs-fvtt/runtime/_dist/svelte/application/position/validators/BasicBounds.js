export class BasicBounds
{
   /**
    * When true constrains the min / max width or height to element.
    *
    * @type {boolean}
    */
   #constrain;

   /**
    * @type {HTMLElement}
    */
   #element;

   /**
    * When true the validator is active.
    *
    * @type {boolean}
    */
   #enabled;

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

   constructor({ constrain = true, element, enabled = true, lock = false, width, height } = {})
   {
      this.element = element;
      this.constrain = constrain;
      this.enabled = enabled;
      this.width = width;
      this.height = height;

      this.#lock = typeof lock === 'boolean' ? lock : false;
   }

   get constrain() { return this.#constrain; }

   get element() { return this.#element; }

   get enabled() { return this.#enabled; }

   get height() { return this.#height; }

   get width() { return this.#width; }

   set constrain(constrain)
   {
      if (this.#lock) { return; }

      if (typeof constrain !== 'boolean') { throw new TypeError(`'constrain' is not a boolean.`); }

      this.#constrain = constrain;
   }

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

   set enabled(enabled)
   {
      if (this.#lock) { return; }

      if (typeof enabled !== 'boolean') { throw new TypeError(`'enabled' is not a boolean.`); }

      this.#enabled = enabled;
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

   /**
    * Provides a validator that respects transforms in positional data constraining the position to within the target
    * elements bounds.
    *
    * @param {ValidationData}   valData - The associated validation data for position updates.
    *
    * @returns {PositionData} Potentially adjusted position data.
    */
   validator(valData)
   {
      // Early out if element is undefined or local enabled state is false.
      if (!this.#enabled) { return valData.position; }

      // Determine containing bounds from manual values; or any element; lastly the browser width / height.
      const boundsWidth = this.#width ?? this.#element?.offsetWidth ?? globalThis.innerWidth;
      const boundsHeight = this.#height ?? this.#element?.offsetHeight ?? globalThis.innerHeight;

      if (valData.position.width !== 'auto')
      {
         const maxW = valData.maxWidth ?? (this.#constrain ? boundsWidth : Number.MAX_SAFE_INTEGER);
         valData.position.width = valData.width = Math.clamped(valData.position.width, valData.minWidth, maxW);

         if ((valData.width + valData.position.left + valData.marginLeft) > boundsWidth)
         {
            valData.position.left = boundsWidth - valData.width - valData.marginLeft;
         }
      }

      if (valData.position.height !== 'auto')
      {
         const maxH = valData.maxHeight ?? (this.#constrain ? boundsHeight : Number.MAX_SAFE_INTEGER);
         valData.position.height = valData.height = Math.clamped(valData.position.height, valData.minHeight, maxH);

         if ((valData.height + valData.position.top + valData.marginTop) > boundsHeight)
         {
            valData.position.top = boundsHeight - valData.height - valData.marginTop;
         }
      }

      const maxL = Math.max(boundsWidth - valData.width - valData.marginLeft, 0);
      valData.position.left = Math.round(Math.clamped(valData.position.left, 0, maxL));

      const maxT = Math.max(boundsHeight - valData.height - valData.marginTop, 0);
      valData.position.top = Math.round(Math.clamped(valData.position.top, 0, maxT));

      return valData.position;
   }
}
