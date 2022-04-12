![@typhonjs-fvtt/runtime](https://i.imgur.com/dxLcZrL.jpg)

[![TyphonJS Discord](https://img.shields.io/discord/737953117999726592?label=TyphonJS%20Discord)](https://discord.gg/mnbgN8f)
[![Twitch](https://img.shields.io/twitch/status/typhonrt?style=social)](https://www.twitch.tv/typhonrt)

[![NPM](https://img.shields.io/npm/v/@typhonjs-fvtt/runtime.svg?label=npm)](https://www.npmjs.com/package/@typhonjs-fvtt/runtime)
[![Code Style](https://img.shields.io/badge/code%20style-allman-yellowgreen.svg?style=flat)](https://en.wikipedia.org/wiki/Indent_style#Allman_style)
[![License](https://img.shields.io/badge/license-MPLv2-yellowgreen.svg?style=flat)](https://github.com/typhonjs-fvtt/fvttdev/blob/main/LICENSE)

## About:
The TyphonJS Runtime Library (TRL) brings an exciting new library resource for all [Foundry VTT](https://foundryvtt.com/) 
developers to build advanced modules and game systems using [Svelte](https://svelte.dev/). A Svelte UI component library
built for Foundry and extensions to the core Foundry UI / Application framework make it easy to create declarative 
Svelte based UIs in a method familiar to Foundry VTT developers. The core UI component framework contains reactive 
"application shells" that provide an enhanced ability to control your UI / window experience including intro and outro
transitions along with supporting key UI elements like context menus and a new backward compatible and API compliant Dialog
component that features a modal dialog option.

TRL is innovative as it delivers a runtime library module for Foundry that packages up the runtime in a way that
can be shared across any number of modules / game systems utilizing it thereby saving a lot of space in any given
module or game system and across all Foundry packages that incorporate the runtime library module. Optionally, it is 
possible to also bundle TRL directly into your module or game system. The TRL is both a Foundry library module and a
NPM package providing the development dependency utilized while authoring a Foundry package. 

## ES Module Demo Module:
Please see [template-svelte-esm](https://github.com/typhonjs-fvtt-demo/template-svelte-esm) for a starter "hello world"
demo module utilizing the TRL.

## Typescript Demo Module:
The TRL uses the latest NPM / `package.json` submodule exports capability and alas while support for this was slated 
for Typescript `4.5` it was pushed back to `4.6` [at the last minute](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5/#esm-nodejs). 
Typescript developers will have to wait until Typescript `4.6` is released.

## Direct Foundry Install Link
The TRL library module is available from the Foundry VTT package manager, but you may install it directly with the 
following link by pasting it into `manifest URL` field in the `add-on modules / install module` screen:
`https://github.com/typhonjs-fvtt-lib/typhonjs/releases/latest/download/module.json`

## Roadmap:
The following roadmap contains a high level overview of aspects that will be added to the TRL. 

- Continue to add relevant core components useful in standard Foundry UI development.
  - Tab handler for SvelteApplication
- Full support for GSAP / Greensock.
- Integrate [Svelte Cubed](https://svelte-cubed.vercel.app/) for building Svelte powered [Three.js](https://threejs.org/) 
interfaces.
- Integrate a [PixiJS](https://pixijs.com/) Svelte powered library.

Extended goals:
- When Typescript 4.6 releases rewrite TRL in Typescript using the Svelte and Foundry VTT types.