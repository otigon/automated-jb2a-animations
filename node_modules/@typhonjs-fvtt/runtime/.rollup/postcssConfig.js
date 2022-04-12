import autoprefixer     from 'autoprefixer';             // Adds vendor specific extensions to CSS
import postcssPresetEnv from 'postcss-preset-env';       // Popular postcss plugin for next gen CSS usage.
import cssnano          from 'cssnano';

/**
 * Provides a function to return a new PostCSS configuration setting the extract parameter.
 *
 * @param {object}   opts - Optional parameters.
 *
 * @param {string}   opts.extract - Name of CSS file to extract to...
 *
 * @param {boolean}  [opts.compress=false] - Compress CSS.
 *
 * @param {boolean}  [opts.sourceMap=false] - Generate source maps.
 *
 * @returns {{extensions: string[], extract, sourceMap: boolean, plugins: (*)[], use: string[], inject: boolean}} PostCSS config
 */
export function postcssConfig({ extract, compress = false, sourceMap = false } = {})
{
   const plugins = compress ? [autoprefixer, postcssPresetEnv, cssnano] : [autoprefixer, postcssPresetEnv];

   return {
      inject: false,                                        // Don't inject CSS into <HEAD>
      extract,
      sourceMap,
      extensions: ['.scss', '.sass', '.css'],               // File extensions
      plugins,                                              // Postcss plugins to use
      use: ['sass']                                         // Use sass / dart-sass
   };
}