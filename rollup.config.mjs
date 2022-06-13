import { babel }           from '@rollup/plugin-babel';
import postcss             from 'rollup-plugin-postcss';       // Process Sass / CSS w/ PostCSS
import resolve             from '@rollup/plugin-node-resolve'; // This resolves NPM modules from node_modules.
import svelte              from 'rollup-plugin-svelte';
import preprocess          from 'svelte-preprocess';
import { terser }          from 'rollup-plugin-terser';        // Terser is used for minification / mangling
import {
   postcssConfig,
   terserConfig,
   typhonjsRuntime }       from '@typhonjs-fvtt/runtime/rollup';

const s_COMPRESS = false;  // Set to true to compress the module bundle.
const s_SOURCEMAPS = true; // Generate sourcemaps for the bundle (recommended).

// Set to true to enable linking against the TyphonJS Runtime Library module.
// You must add a Foundry module dependency on the `typhonjs` Foundry package or manually install it in Foundry from:
// https://github.com/typhonjs-fvtt-lib/typhonjs/releases/latest/download/module.json
const s_TYPHONJS_MODULE_LIB = false;

// Creates a standard configuration for PostCSS with autoprefixer & postcss-preset-env.
const postcssMain = postcssConfig({
   extract: 'module.css',
   compress: s_COMPRESS,
   sourceMap: s_SOURCEMAPS
});

const s_RESOLVE_CONFIG = {
   browser: true,
   dedupe: ['svelte', '@typhonjs-fvtt/runtime', '@typhonjs-fvtt/svelte-standard']
}

export default () =>
{
   // Defines potential output plugins to use conditionally if the .env file indicates the bundles should be
   // minified / mangled.
   const outputPlugins = s_COMPRESS ? [terser(terserConfig())] : [];

   // Defines whether source maps are generated / loaded.
   const sourcemap = s_SOURCEMAPS;

   return [
      {  // The main module bundle
         input: `src/autoAnimations.js`,
         output: {
            file: `dist/module.js`,
            format: 'es',
            plugins: outputPlugins,
            sourcemap
         },
         plugins: [
            svelte({
               preprocess: preprocess(),
               onwarn: (warning, handler) =>
               {
                  // Suppress `a11y-missing-attribute` for missing href in <a> links.
                  // Foundry doesn't follow accessibility rules.
                  if (warning.message.includes(`<a> element should have an href attribute`)) { return; }
                  if (warning.message.includes(`A form label must be associated with a control.`)) { return; }

                  // Let Rollup handle all other warnings normally.
                  handler(warning);
               },
            }),

            postcss(postcssMain),

            resolve(s_RESOLVE_CONFIG),

            // When s_TYPHONJS_MODULE_LIB is true transpile against the Foundry module version of TRL.
            s_TYPHONJS_MODULE_LIB && typhonjsRuntime(),

            babel({
               babelHelpers: 'bundled',
               presets: [
                  ['@babel/preset-env', { bugfixes: true, shippedProposals: true, targets: { esmodules: true } }]
               ]
            })
         ]
      }
   ];
};
