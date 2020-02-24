import { Class } from '../../../type'


/**
 * return callable function from a Class
 * @example
 * const a = callable(class A {})
 * a() // A
 */
const callable = <A extends Array<any>, R extends any>(Class: Class<A,R>) =>
  (...args: A) =>
    new Class(...args)


export {
  callable
}
