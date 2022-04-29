import { composeParslet, ParsletFunction } from './Parslet'
import { Precedence } from '../Precedence'
import { FunctionResult, RootResult } from '../result/RootResult'
import { IntermediateResult } from '../result/IntermediateResult'
import { KeyValueResult, NonRootResult } from '../result/NonRootResult'
import { UnexpectedTypeError } from '../errors'
import { assertPlainKeyValueOrRootResult } from '../assertTypes'

export function getParameters (value: IntermediateResult): Array<RootResult | KeyValueResult> {
  let parameters: NonRootResult[]
  if (value.type === 'JsdocTypeParameterList') {
    parameters = value.elements
  } else if (value.type === 'JsdocTypeParenthesis') {
    parameters = [value.element]
  } else {
    throw new UnexpectedTypeError(value)
  }

  return parameters.map(p => assertPlainKeyValueOrRootResult(p))
}

export function getUnnamedParameters (value: IntermediateResult): RootResult[] {
  const parameters = getParameters(value)
  if (parameters.some(p => p.type === 'JsdocTypeKeyValue')) {
    throw new Error('No parameter should be named')
  }
  return parameters as RootResult[]
}

export function createFunctionParslet ({ allowNamedParameters, allowNoReturnType, allowWithoutParenthesis }: {
  allowNamedParameters?: string[]
  allowWithoutParenthesis: boolean
  allowNoReturnType: boolean
}): ParsletFunction {
  return composeParslet({
    name: 'functionParslet',
    accept: type => type === 'function',
    parsePrefix: parser => {
      parser.consume('function')

      const hasParenthesis = parser.getLexer().token().type === '('

      if (!hasParenthesis) {
        if (!allowWithoutParenthesis) {
          throw new Error('function is missing parameter list')
        }

        return {
          type: 'JsdocTypeName',
          value: 'function'
        }
      }

      const result: FunctionResult = {
        type: 'JsdocTypeFunction',
        parameters: [],
        arrow: false,
        parenthesis: hasParenthesis
      }

      const value = parser.parseIntermediateType(Precedence.FUNCTION)

      if (allowNamedParameters === undefined) {
        result.parameters = getUnnamedParameters(value)
      } else {
        result.parameters = getParameters(value)
        for (const p of result.parameters) {
          if (p.type === 'JsdocTypeKeyValue' && (!allowNamedParameters.includes(p.key) || p.meta.quote !== undefined)) {
            throw new Error(`only allowed named parameters are ${allowNamedParameters.join(', ')} but got ${p.type}`)
          }
        }
      }

      if (parser.consume(':')) {
        result.returnType = parser.parseType(Precedence.PREFIX)
      } else {
        if (!allowNoReturnType) {
          throw new Error('function is missing return type')
        }
      }

      return result
    }
  })
}
