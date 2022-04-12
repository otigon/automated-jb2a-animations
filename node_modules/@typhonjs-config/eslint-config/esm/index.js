module.exports = {
   "extends": "../shared/default.js",

   "env": {
      "es6": true
   },

   "parserOptions": {
      "ecmaVersion": 2015,
      "sourceType": "module",
      "ecmaFeatures": {
      }
   },

   "rules": {
      /* ESM */
      "arrow-body-style": "off",
      "arrow-parens": ["error", "always"],
      "arrow-spacing": "error",
      "constructor-super": "error",
      "generator-star-spacing": ["error", { "before": true, "after": false }],
      "no-class-assign": "error",
      "no-const-assign": "error",
      "no-dupe-class-members": "error",
      "no-this-before-super": "error",
      "no-var": "error",
      "object-shorthand": ["error", "properties"],
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "require-yield": "error",

      /* Unused ESM rules */
      "prefer-reflect": "off"
   }
}
