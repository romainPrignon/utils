import l from 'lodash/fp'

const { concat: concatProto } = String.prototype

const concat = l.curry((content: string, str: string) =>
  l.bind(concatProto, str)(content)
)


export {
  concat
}
