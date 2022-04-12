module.exports = {
   "extends": ["eslint:recommended", "plugin:jsdoc/recommended"],

   "env": {
      "mocha": true
   },

   "globals":
   {
      "arguments": true
   },

   "settings": {
      "jsdoc": {
         "mode": "typescript"
      }
   },

   "rules": {
      /* JSDoc */
      "jsdoc/no-undefined-types": "off",  // For the time being turn off; see: https://github.com/gajus/eslint-plugin-jsdoc/issues/99
      "jsdoc/tag-lines": ["warn", "always", {
         "noEndLines": true,
         "tags": {
            "ignore": {"lines":"any"},
            "inheritDoc": {"lines":"any"},
            "override": {"lines":"any"},
            "package": {"lines":"any"},
            "private": {"lines":"any"},
            "protected": {"lines":"any"},
            "returns": {"lines":"any"},
            "see": {"lines":"any"},
            "throws": {"lines":"any"},
            "type": {"lines":"any"}
         }
      }],

      /* Architecture */
      "eqeqeq": "error",
      "no-array-constructor": "error",
      "no-console": "off",
      "no-new-object": "error",

      /* Styling */
      "array-bracket-spacing": "error",
      "block-spacing": "error",
      "brace-style": ["error", "allman", { "allowSingleLine": true }],
      "comma-spacing": "error",
      "comma-style": "error",
      "curly": "error",
      "key-spacing": "error",
      "keyword-spacing": "error",
      "new-parens": "error",
      "no-multiple-empty-lines": "error",
      "no-spaced-func": "error",
      "object-curly-spacing": ["error", "always"],
      "operator-assignment": ["error", "always"],
      "operator-linebreak": ["error", "before", {
         "overrides": {
            "+": "after",
            ":": "after",
            "?": "after",
            "||": "after",
            "&&": "after",
            "=": "after",
            "==": "after",
            "!=": "after",
            "===": "after",
            "!==": "after"
         }
      }],
      "semi": ["error", "always"],
      "sort-vars": ["error", { "ignoreCase": true }],
      "space-before-blocks": "error",
      "space-before-function-paren": ["error", {
         "anonymous": "never",
         "named": "never",
         "asyncArrow": "ignore"
      }],
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "space-unary-ops": ["error", { "words": true, "nonwords": false }],
      "spaced-comment": ["error", "always"],
      "wrap-regex": "error",

      "quotes": ["off", "single", "avoid-escape"],
      "quote-props": ["error", "as-needed", { "unnecessary": true }]
   }
}
