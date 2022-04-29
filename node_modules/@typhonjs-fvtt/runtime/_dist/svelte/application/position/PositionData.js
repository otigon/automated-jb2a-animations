/**
 * Defines stored positional data.
 */
export class PositionData
{
   constructor({ height = null, left = null, maxHeight = null, maxWidth = null, minHeight = null, minWidth = null,
    rotateX = null, rotateY = null, rotateZ = null, scale = null, translateX = null, translateY = null,
     translateZ = null, top = null, transformOrigin = null, width = null, zIndex = null } = {})
   {
      /**
       * @type {number|'auto'|null}
       */
      this.height = height;

      /**
       * @type {number|null}
       */
      this.left = left;

      /**
       * @type {number|null}
       */
      this.maxHeight = maxHeight;

      /**
       * @type {number|null}
       */
      this.maxWidth = maxWidth;

      /**
       * @type {number|null}
       */
      this.minHeight = minHeight;

      /**
       * @type {number|null}
       */
      this.minWidth = minWidth;

      /**
       * @type {number|null}
       */
      this.rotateX = rotateX;

      /**
       * @type {number|null}
       */
      this.rotateY = rotateY;

      /**
       * @type {number|null}
       */
      this.rotateZ = rotateZ;

      /**
       * @type {number|null}
       */
      this.scale = scale;

      /**
       * @type {number|null}
       */
      this.top = top;

      /**
       * @type {string|null}
       */
      this.transformOrigin = transformOrigin;

      /**
       * @type {number|null}
       */
      this.translateX = translateX;

      /**
       * @type {number|null}
       */
      this.translateY = translateY;

      /**
       * @type {number|null}
       */
      this.translateZ = translateZ;

      /**
       * @type {number|'auto'|null}
       */
      this.width = width;

      /**
       * @type {number|null}
       */
      this.zIndex = zIndex;

      Object.seal(this);
   }

   /**
    * Copies given data to this instance.
    *
    * @param {PositionData}   data - Copy from this instance.
    *
    * @returns {PositionData} This instance.
    */
   copy(data)
   {
      this.height = data.height;
      this.left = data.left;
      this.maxHeight = data.maxHeight;
      this.maxWidth = data.maxWidth;
      this.minHeight = data.minHeight;
      this.minWidth = data.minWidth;
      this.rotateX = data.rotateX;
      this.rotateY = data.rotateY;
      this.rotateZ = data.rotateZ;
      this.scale = data.scale;
      this.top = data.top;
      this.transformOrigin = data.transformOrigin;
      this.translateX = data.translateX;
      this.translateY = data.translateY;
      this.translateZ = data.translateZ;
      this.width = data.width;
      this.zIndex = data.zIndex;

      return this;
   }
}
