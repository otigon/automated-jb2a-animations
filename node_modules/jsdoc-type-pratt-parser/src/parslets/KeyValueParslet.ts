import { composeParslet, ParsletFunction } from './Parslet'
import { Precedence } from '../Precedence'
import { assertRootResult } from '../assertTypes'
import { UnexpectedTypeError } from '../errors'

export function createKeyValueParslet ({ allowKeyTypes, allowReadonly, allowOptional }: {
  allowKeyTypes: boolean
  allowOptional: boolean
  allowReadonly: boolean
}): ParsletFunction {
  return composeParslet({
    name: 'keyValueParslet',
    precedence: Precedence.KEY_VALUE,
    accept: type => type === ':',
    parseInfix: (parser, left) => {
      let optional = false
      let readonlyProperty = false

      if (allowOptional && left.type === 'JsdocTypeNullable') {
        optional = true
        left = left.element
      }

      if (allowReadonly && left.type === 'JsdocTypeReadonlyProperty') {
        readonlyProperty = true
        left = left.element
      }

      // object parslet uses a special grammar and for the value we want to switch back to the parent
      parser = parser.getParent() ?? parser

      if (left.type === 'JsdocTypeNumber' || left.type === 'JsdocTypeName' || left.type === 'JsdocTypeStringValue') {
        parser.consume(':')

        let quote
        if (left.type === 'JsdocTypeStringValue') {
          quote = left.meta.quote
        }

        return {
          type: 'JsdocTypeKeyValue',
          key: left.value.toString(),
          right: parser.parseType(Precedence.KEY_VALUE),
          optional: optional,
          readonly: readonlyProperty,
          meta: {
            quote,
            hasLeftSideExpression: false
          }
        }
      } else {
        if (!allowKeyTypes) {
          throw new UnexpectedTypeError(left)
        }

        parser.consume(':')

        return {
          type: 'JsdocTypeKeyValue',
          left: assertRootResult(left),
          right: parser.parseType(Precedence.KEY_VALUE),
          meta: {
            hasLeftSideExpression: true
          }
        }
      }
    }
  })
}
