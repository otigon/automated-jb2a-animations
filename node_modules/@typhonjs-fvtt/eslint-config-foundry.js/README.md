![@typhonjs-fvtt/eslint-config-foundry.js](https://i.imgur.com/2ty8gTM.png)

[![NPM](https://img.shields.io/npm/v/@typhonjs-fvtt/eslint-config-foundry.js?style=plastic)](https://www.npmjs.com/package/@typhonjs-fvtt/eslint-config-foundry.js)
[![License](https://img.shields.io/badge/license-MIT-yellowgreen.svg?style=plastic)](https://github.com/typhonjs-fvtt/eslint-config-foundry.js/blob/main/LICENSE)

### Why:

This module provides shared [ESLint](http://eslint.org/) configuration files for [Foundry VTT](https://foundryvtt.com) / 
[foundry.js](https://foundryvtt.com/api/foundry.js.html) containing all exported globals for module / system 
development. This configuration file is designed as an addon to other configuration files of your choice as it 
only defines the `foundry.js` globals for use with directives like `no-shadow` or `@typescript-eslint/no-shadow` if you 
are using Typescript. Enable ESLint in your IDE of choice and feel relief that you are not overwriting any globals
defined in `foundry.js`!

As of the `0.8.0` release of Foundry VTT the ESLint configuration files include the globals exported by the Foundry VTT 
commons module. In addition, there are now difference set ESLint configuration files which use the 
`no-restricted-globals` rule to quickly show usages of globals that are no longer defined by Foundry VTT which is useful
when migrating code between major versions; IE `0.7.9` to `0.8.0`. 

Please see the `.eslintrc` file in [demo-rollup-module](https://github.com/typhonjs-fvtt/demo-rollup-module/blob/main/.eslintrc) 
for a complete example. 

### Installation:

`npm install --save-dev @typhonjs-fvtt/eslint-config-foundry.js` or add to `package.json`.

To use:

Create a minimal `.eslintrc` file in the root path of a project.

```
/**
 * Loads https://github.com/typhonjs-fvtt/eslint-config-foundry.js/blob/main/0.8.0.js
 * NPM: https://www.npmjs.com/package/@typhonjs-fvtt/eslint-config-foundry.js
 *
 * Note: specific versions are located in /<VERSION>
 */
{
  "extends": "@typhonjs-fvtt/eslint-config-foundry.js"

  // Prevents overwriting any built in globals particularly from `@typhonjs-fvtt/eslint-config-foundry.js`. 
  // `event / window.event` shadowing is allowed due to being a common variable name and an uncommonly used browser 
  // feature.
  //
  // Note: if you are using Typescript you must use `@typescript-eslint/no-shadow`
  "rules": {
    "no-shadow": ["error", { "builtinGlobals": true, "hoist": "all", "allow": ["event"] }]
  }
}
```

To enable the Foundry VTT 0.7.9 to 0.8.0 difference set use the following:
```
/**
 * Loads https://github.com/typhonjs-fvtt/eslint-config-foundry.js/blob/main/diff-0.7.9-0.8.0.js
 * NPM: https://www.npmjs.com/package/@typhonjs-fvtt/eslint-config-foundry.js
 */
{
  "extends": "@typhonjs-fvtt/eslint-config-foundry.js/diff-0.7.9-0.8.0"
}
```


### Versions:

This module follows the semantic versioning of Foundry VTT. You will also be able to target specific versions described
below. The `latest` config which is the `default` will match the version of this module. So if you install
`@typhonjs-fvtt/eslint-config-foundry.js@0.8.0` the default and latest eslint config corresponds with the `0.8.0`
release of Foundry VTT (foundry.js).

The `diff` ESLint configs include a difference set of data dropped between versions specified. This config will quickly 
find any usages of classes, functions and variables that are no longer available via the script and global scope.  

Latest version: `0.8.0`

All versions:
- `0.8.0`
- `0.7.8` - `0.7.9`
- `diff-0.7.9-0.8.0` (0.7.9 - 0.8.0)
- `latest` (0.8.0)
- `latest-0.8.x` (0.8.0)
- `latest-0.7.x` (0.7.9)

To reference a particular version in the eslint `extends` field specify it via `/<version>` from the list above.

Example of specifying the latest 0.7.x version:

`"extends": "@typhonjs-fvtt/eslint-config-foundry.js/latest-0.7.x"`

### Example IDE Integration

![IDE Integration](https://imgur.com/eFI3shs.png)

![IDE Integration 2](https://imgur.com/zEIn5JH.png)
