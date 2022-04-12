import { composeParslet, ParsletFunction } from './Parslet'
import { TokenType } from '../lexer/Token'
import { Precedence } from '../Precedence'
import { Parser } from '../Parser'
import { SpecialNamePath, SpecialNamePathType } from '../result/RootResult'
import { assertRootResult } from '../assertTypes'
import { Grammar } from '../grammars/Grammar'

export function createSpecialNamePathParslet ({ pathGrammar, allowedTypes }: {
  allowedTypes: SpecialNamePathType[]
  pathGrammar: Grammar
}): ParsletFunction {
  return composeParslet({
    name: 'specialNamePathParslet',
    accept: type => (allowedTypes as TokenType[]).includes(type),
    parsePrefix: parser => {
      const type = parser.getLexer().token().type as SpecialNamePathType
      parser.consume(type)

      if (!parser.consume(':')) {
        return {
          type: 'JsdocTypeName',
          value: type
        }
      }

      const moduleParser = new Parser({
        grammar: pathGrammar,
        lexer: parser.getLexer()
      })

      let result: SpecialNamePath

      let token = parser.getLexer().token()
      if (parser.consume('StringValue')) {
        result = {
          type: 'JsdocTypeSpecialNamePath',
          value: token.text.slice(1, -1),
          specialType: type,
          meta: {
            quote: token.text[0] === '\'' ? 'single' : 'double'
          }
        }
      } else {
        let value = ''
        const allowed: TokenType[] = ['Identifier', '@', '/']
        while (allowed.some(type => parser.consume(type))) {
          value += token.text
          token = parser.getLexer().token()
        }
        result = {
          type: 'JsdocTypeSpecialNamePath',
          value,
          specialType: type,
          meta: {
            quote: undefined
          }
        }
      }

      return assertRootResult(moduleParser.parseInfixIntermediateType(result, Precedence.ALL))
    }
  })
}
