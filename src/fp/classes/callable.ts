import { Class } from 'type-fest'

/**
 * return callable function from a Class
 * @example
 * const a = callable(class A {})
 * a() // A
 */
const callable = <C extends unknown, A extends Array<unknown>>(Class: Class<C,A>) => {
  const factoryFunction = (...args: A) => new Class(...args)

  // tslint:disable-next-line: no-object-mutation
  factoryFunction.prototype = Class.prototype

  return factoryFunction
}


export {
  callable
}
