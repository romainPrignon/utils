import { Class } from '../../../type'


/**
 * return callable function from a Class
 * @example
 * const a = callable(class A {})
 * a() // A
 */
const callable = <A extends Array<any>, R extends any>(Class: Class<A,R>) => {
  const factoryFunction = (...args: A) => new Class(...args)

  // tslint:disable-next-line: no-object-mutation
  factoryFunction.prototype = Class.prototype

  return factoryFunction
}


export {
  callable
}
