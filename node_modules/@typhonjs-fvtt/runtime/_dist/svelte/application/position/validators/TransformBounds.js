import { TransformData } from '../transform/TransformData.js';

const s_TRANSFORM_DATA = new TransformData();

export class TransformBounds
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

      if (element === void 0 || element === null || element instanceof HTMLElement)
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

      // Ensure min / max width constraints when position width is not 'auto'. If constrain is true cap width bounds.
      if (valData.position.width !== 'auto')
      {
         const maxW = valData.maxWidth ?? (this.#constrain ? boundsWidth : Number.MAX_SAFE_INTEGER);
         valData.position.width = Math.clamped(valData.width, valData.minWidth, maxW);
      }

      // Ensure min / max height constraints when position height is not 'auto'. If constrain is true cap height bounds.
      if (valData.position.height !== 'auto')
      {
         const maxH = valData.maxHeight ?? (this.#constrain ? boundsHeight : Number.MAX_SAFE_INTEGER);
         valData.position.height = Math.clamped(valData.height, valData.minHeight, maxH);
      }

      // Get transform data. First set constraints including any margin top / left as offsets and width / height. Used
      // when position width / height is 'auto'.
      const data = valData.transforms.getData(valData.position, s_TRANSFORM_DATA, valData);

      // Check the bounding rectangle against browser height / width. Adjust position based on how far the overlap of
      // the bounding rect is outside the bounds height / width. The order below matters as the constraints are top /
      // left oriented, so perform those checks last.

      const initialX = data.boundingRect.x;
      const initialY = data.boundingRect.y;

      if (data.boundingRect.bottom + valData.marginTop > boundsHeight)
      {
         data.boundingRect.y += boundsHeight - data.boundingRect.bottom - valData.marginTop;
      }

      if (data.boundingRect.right + valData.marginLeft > boundsWidth)
      {
         data.boundingRect.x += boundsWidth - data.boundingRect.right - valData.marginLeft;
      }

      if (data.boundingRect.top - valData.marginTop < 0)
      {
         data.boundingRect.y += Math.abs(data.boundingRect.top - valData.marginTop);
      }

      if (data.boundingRect.left - valData.marginLeft < 0)
      {
         data.boundingRect.x += Math.abs(data.boundingRect.left - valData.marginLeft);
      }

      valData.position.left -= initialX - data.boundingRect.x;
      valData.position.top -= initialY - data.boundingRect.y;

      return valData.position;
   }
}
