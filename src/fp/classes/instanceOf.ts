import { Class } from '../../../type'

import l from 'lodash'


/**
 * wrapper around instanceof keyword
 *
 * @example
 * const instanceOfA = instanceOf(A)
 * if (instanceOfA(new A())) // true
 */
const instanceOf = l.curry<Class<any, any>, any, boolean>((Class: Class<any, any>, value: any): boolean =>
  value instanceof Class
)

export {
  instanceOf
}
