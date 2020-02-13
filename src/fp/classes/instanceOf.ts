import l from 'lodash'

/**
 * wrapper around instanceof keyword
 *
 * @example
 * const instanceOfA = instanceOf(A)
 * if (instanceOfA(new A())) // true
 */
const instanceOf = l.curry<new () => any, any, boolean>((Class: new () => any, value: any): boolean =>
  value instanceof Class
)

export {
  instanceOf
}
