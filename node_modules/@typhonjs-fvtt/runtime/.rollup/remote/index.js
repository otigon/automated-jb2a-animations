import { externalPathsRemote }   from './externalPathsRemote.js';
import { generatePlugin }        from '../generatePlugin.js';

export *                         from '../postcssConfig.js';
export *                         from '../terserConfig.js';

/**
 * Returns the TyphonJS Runtime Library module substitution plugin.
 *
 * Add this plugin to substitute NPM module paths for the Foundry VTT hosted module.
 *
 * @returns {{name: string, options(*): void}} The plugin.
 */
export function typhonjsRuntime()
{
   return generatePlugin(externalPathsRemote);
}