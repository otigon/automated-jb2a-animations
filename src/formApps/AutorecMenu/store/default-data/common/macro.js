/**
 * Creates default macro data.
 *
 * @returns {DataMacro}
 */
export function macro() {
   return {
      enable: false,
      name: "",
      args: "",
      playWhen: ""
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
