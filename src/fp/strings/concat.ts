import l from 'lodash/fp'

const concat = l.curry((content: string, str: string) =>
  str.concat(content)
)


export {
  concat
}
