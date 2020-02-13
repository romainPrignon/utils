import l from 'lodash/fp'

const split = l.curry((separator: string | RegExp, str: string): Array<string> =>
  str.split(separator)
)


export {
  split
}
