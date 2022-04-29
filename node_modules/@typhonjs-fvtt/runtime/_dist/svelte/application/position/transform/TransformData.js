import { mat4, vec3 }   from '@typhonjs-fvtt/runtime/svelte/math';

/**
 * Provides the output data for {@link Transforms.getData}.
 */
export class TransformData
{
   constructor()
   {
      Object.seal(this);
   }

   /**
    * Stores the calculated bounding rectangle.
    *
    * @type {DOMRect}
    */
   #boundingRect = new DOMRect();

   /**
    * Stores the individual transformed corner points of the window in screenspace clockwise from:
    * top left -> top right -> bottom right -> bottom left.
    *
    * @type {Vector3[]}
    */
   #corners = [vec3.create(), vec3.create(), vec3.create(), vec3.create()];

   /**
    * Stores the current gl-matrix mat4 data.
    *
    * @type {Matrix4}
    */
   #mat4 = mat4.create();

   /**
    * Stores the pre & post origin translations to apply to matrix transforms.
    *
    * @type {Matrix4[]}
    */
   #originTranslations = [mat4.create(), mat4.create()];

   /**
    * @returns {DOMRect} The bounding rectangle.
    */
   get boundingRect() { return this.#boundingRect; }

   /**
    * @returns {Vector3[]} The transformed corner points as vec3 in screen space.
    */
   get corners() { return this.#corners; }

   /**
    * @returns {string} Returns the CSS style string for the transform matrix.
    */
   get css() { return `matrix3d(${this.mat4.join(',')})`; }

   /**
    * @returns {Matrix4} The transform matrix.
    */
   get mat4() { return this.#mat4; }

   /**
    * @returns {Matrix4[]} The pre / post translation matrices for origin translation.
    */
   get originTranslations() { return this.#originTranslations; }
}

/**
 * @typedef {Float32Array} Vector3 - 3 Dimensional Vector.
 *
 * @see https://glmatrix.net/docs/module-vec3.html
 */

/**
 * @typedef {Float32Array} Matrix4 - 4x4 Matrix; Format: column-major, when typed out it looks like row-major.
 *
 * @see https://glmatrix.net/docs/module-mat4.html
 */
