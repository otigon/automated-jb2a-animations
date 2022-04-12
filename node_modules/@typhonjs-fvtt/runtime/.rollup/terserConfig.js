/**
 * Convenience method to create a Terser config without needing to store a local file. Both class and function names
 * are maintained which is useful on Foundry for hook notifications and any potential overriding.
 *
 * @param {object}         [opts] - Optional parameters.
 *
 * @param {boolean}        [opts.keep_classnames=true] - When true does not mangle class names. Useful for Foundry!
 *
 * @param {boolean|RegExp} [opts.keep_fnames=true] - When true does not mangle function names; a RegExp will
 *                                                   selectively mangle function names.
 *
 * @returns {import('terser').MinifyOptions} A Terser configuration file.
 */
export function terserConfig({ keep_classnames = true, keep_fnames = true } = {})
{
   return {
      compress: {
         passes: 3
      },

      mangle: {
         toplevel: true,
         keep_classnames,
         keep_fnames
      },

      ecma: 2020,

      module: true
   };
}