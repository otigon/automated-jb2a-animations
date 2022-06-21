/**
 * Creates default macro data.
 *
 * @returns {DataMacro}
 */
export function macro() {
   return {
      enable: false,
      name: void 0,
      args: void 0,
      playWhen: void 0
   }
}

/**
 * @typedef DataMacro
 *
 * @property {boolean}  enable - Enabled state.
 *
 * @property {string}   name - Macro name.
 *
 * @property {string}   args - Macro arguments.
 *
 * @property {string}   playWhen - When to invoke macro.
 */
