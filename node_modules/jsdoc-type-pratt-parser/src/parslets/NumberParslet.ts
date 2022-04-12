import { composeParslet } from './Parslet'

export const numberParslet = composeParslet({
  name: 'numberParslet',
  accept: type => type === 'Number',
  parsePrefix: parser => {
    const value = parseFloat(parser.getLexer().token().text)
    parser.consume('Number')
    return {
      type: 'JsdocTypeNumber',
      value
    }
  }
})
