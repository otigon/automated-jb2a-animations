import * as terser from 'terser';

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
declare function postcssConfig({ extract, compress, sourceMap }?: {
    extract: string;
    compress?: boolean;
    sourceMap?: boolean;
}): {
    extensions: string[];
    extract: any;
    sourceMap: boolean;
    plugins: (any)[];
    use: string[];
    inject: boolean;
};

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
declare function terserConfig({ keep_classnames, keep_fnames }?: {
    keep_classnames?: boolean;
    keep_fnames?: boolean | RegExp;
}): terser.MinifyOptions;

/**
 * Returns the TyphonJS Runtime Library module substitution plugin.
 *
 * Add this plugin to substitute NPM module paths for the Foundry VTT hosted module.
 *
 * @returns {{name: string, options(*): void}} The plugin.
 */
declare function typhonjsRuntime(): {
    name: string;
    options(): void;
};

export { postcssConfig, terserConfig, typhonjsRuntime };
