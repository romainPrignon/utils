import { Class } from 'type-fest'

/**
 * return callable function from a Class
 * @example
 * const a = callable(class A {})
 * a() // A
 */
const callable = <T extends any, A extends Array<any>>(Class: Class<T,A>) => {
  const factoryFunction = (...args: A) => new Class(...args)

  // tslint:disable-next-line: no-object-mutation
  factoryFunction.prototype = Class.prototype

  return factoryFunction
}


export {
  callable
}
