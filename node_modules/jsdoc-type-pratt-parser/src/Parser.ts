import { EarlyEndOfParseError, NoParsletFoundError } from './errors'
import { TokenType } from './lexer/Token'
import { Lexer } from './lexer/Lexer'
import { Grammar } from './grammars/Grammar'
import { assertRootResult } from './assertTypes'
import { Precedence } from './Precedence'
import { RootResult } from './result/RootResult'
import { IntermediateResult } from './result/IntermediateResult'

interface ParserOptions {
  grammar: Grammar
  lexer?: Lexer
  parent?: Parser
}

export class Parser {
  private readonly grammar: Grammar

  private readonly lexer: Lexer
  private readonly parent?: Parser

  constructor ({ grammar, lexer, parent }: ParserOptions) {
    this.lexer = lexer ?? new Lexer()

    this.parent = parent

    this.grammar = grammar
  }

  /**
   * Parses a given string and throws an error if the parse ended before the end of the string.
   */
  parseText (text: string): RootResult {
    this.lexer.lex(text)
    const result = this.parseType(Precedence.ALL)
    if (this.lexer.token().type !== 'EOF') {
      throw new EarlyEndOfParseError(this.lexer.token())
    }
    return result
  }

  /**
   * Parses with the current lexer and asserts that the result is a {@link RootResult}.
   */
  public parseType (precedence: Precedence): RootResult {
    return assertRootResult(this.parseIntermediateType(precedence))
  }

  /**
   * Tries to parse the current state with all parslets in the grammar and returns the first non null result.
   */
  private tryParslets (precedence: Precedence, left: IntermediateResult | null): IntermediateResult | null {
    for (const parslet of this.grammar) {
      const result = parslet(this, precedence, left)
      if (result !== null) {
        return result
      }
    }
    return null
  }

  /**
   * The main parsing function. First it tries to parse the current state in the prefix step, and then it continues
   * to parse the state in the infix step.
   */
  public parseIntermediateType (precedence: Precedence): IntermediateResult {
    const result = this.tryParslets(precedence, null)

    if (result === null) {
      throw new NoParsletFoundError(this.lexer.token())
    }

    return this.parseInfixIntermediateType(result, precedence)
  }

  /**
   * In the infix parsing step the parser continues to parse the current state with all parslets until none returns
   * a result.
   */
  public parseInfixIntermediateType (result: IntermediateResult, precedence: Precedence): IntermediateResult {
    let newResult = this.tryParslets(precedence, result)

    while (newResult !== null) {
      result = newResult
      newResult = this.tryParslets(precedence, result)
    }

    return result
  }

  /**
   * If the given type equals the current type of the {@link Lexer} advance the lexer. Return true if the lexer was
   * advanced.
   */
  public consume (types: TokenType|TokenType[]): boolean {
    if (!Array.isArray(types)) {
      types = [types]
    }
    if (!types.includes(this.lexer.token().type)) {
      return false
    }
    this.lexer.advance()
    return true
  }

  getLexer (): Lexer {
    return this.lexer
  }

  getParent (): Parser | undefined {
    return this.parent
  }
}
