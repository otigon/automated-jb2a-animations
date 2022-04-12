import { Parser } from './Parser'
import { jsdocGrammar } from './grammars/jsdocGrammar'
import { closureGrammar } from './grammars/closureGrammar'
import { typescriptGrammar } from './grammars/typescriptGrammar'
import { RootResult } from './result/RootResult'

export type ParseMode = 'closure' | 'jsdoc' | 'typescript'

const parsers = {
  jsdoc: new Parser({
    grammar: jsdocGrammar
  }),
  closure: new Parser({
    grammar: closureGrammar
  }),
  typescript: new Parser({
    grammar: typescriptGrammar
  })
}

/**
 * This function parses the given expression in the given mode and produces a {@link RootResult}.
 * @param expression
 * @param mode
 */
export function parse (expression: string, mode: ParseMode): RootResult {
  return parsers[mode].parseText(expression)
}

/**
 * This function tries to parse the given expression in multiple modes and returns the first successful
 * {@link RootResult}. By default it tries `'typescript'`, `'closure'` and `'jsdoc'` in this order. If
 * no mode was successful it throws the error that was produced by the last parsing attempt.
 * @param expression
 * @param modes
 */
export function tryParse (expression: string, modes: ParseMode[] = ['typescript', 'closure', 'jsdoc']): RootResult {
  let error
  for (const mode of modes) {
    try {
      return parsers[mode].parseText(expression)
    } catch (e) {
      error = e
    }
  }
  throw error
}
