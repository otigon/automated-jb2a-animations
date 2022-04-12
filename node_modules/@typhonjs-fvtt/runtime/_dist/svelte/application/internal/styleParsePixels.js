const s_REGEX = /(\d+)\s*px/;

/**
 * Parses a pixel string / computed styles. Ex. `100px` returns `100`.
 *
 * @param {string}   value - Value to parse.
 *
 * @returns {number|undefined} The integer component of a pixel string.
 */
export function styleParsePixels(value)
{
   if (typeof value !== 'string') { return void 0; }

   const isPixels = s_REGEX.test(value);
   const number = parseInt(value);

   return isPixels && Number.isFinite(number) ? number : void 0;
}
