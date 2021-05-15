import { Class } from 'type-fest'

import l from 'lodash'


/**
 * wrapper around instanceof keyword
 *
 * @example
 * const instanceOfA = instanceOf(A)
 * if (instanceOfA(new A())) // true
 */
const instanceOf = l.curry<Class<unknown>, unknown, boolean>((Class: Class<unknown>, value: unknown): boolean =>
  value instanceof Class
)

export {
  instanceOf
}
