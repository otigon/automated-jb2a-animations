import { composeParslet, ParsletFunction } from './Parslet'
import { Parser } from '../Parser'
import { Precedence } from '../Precedence'
import { UnexpectedTypeError } from '../errors'
import { ObjectResult } from '../result/RootResult'
import { Grammar } from '../grammars/Grammar'

export function createObjectParslet ({ objectFieldGrammar, allowKeyTypes }: {
  objectFieldGrammar: Grammar
  allowKeyTypes: boolean
}): ParsletFunction {
  return composeParslet({
    name: 'objectParslet',
    accept: type => type === '{',
    parsePrefix: parser => {
      parser.consume('{')
      const result: ObjectResult = {
        type: 'JsdocTypeObject',
        meta: {
          separator: 'comma'
        },
        elements: []
      }

      if (!parser.consume('}')) {
        let separator: 'comma' | 'semicolon' | undefined

        const lexer = parser.getLexer()

        const fieldParser = new Parser({
          grammar: objectFieldGrammar,
          lexer: lexer,
          parent: parser
        })

        while (true) {
          let field = fieldParser.parseIntermediateType(Precedence.OBJECT)

          if (field === undefined && allowKeyTypes) {
            field = parser.parseIntermediateType(Precedence.OBJECT)
          }

          let optional = false
          if (field.type === 'JsdocTypeNullable') {
            optional = true
            field = field.element
          }

          if (field.type === 'JsdocTypeNumber' || field.type === 'JsdocTypeName' || field.type === 'JsdocTypeStringValue') {
            let quote
            if (field.type === 'JsdocTypeStringValue') {
              quote = field.meta.quote
            }

            result.elements.push({
              type: 'JsdocTypeKeyValue',
              key: field.value.toString(),
              right: undefined,
              optional: optional,
              readonly: false,
              meta: {
                quote,
                hasLeftSideExpression: false
              }
            })
          } else if (field.type === 'JsdocTypeKeyValue') {
            result.elements.push(field)
          } else {
            throw new UnexpectedTypeError(field)
          }
          if (parser.consume(',')) {
            separator = 'comma'
          } else if (parser.consume(';')) {
            separator = 'semicolon'
          } else {
            break
          }
        }

        result.meta.separator = separator ?? 'comma' // TODO: use undefined here

        if (!parser.consume('}')) {
          throw new Error('Unterminated record type. Missing \'}\'')
        }
      }
      return result
    }
  })
}
