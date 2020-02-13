/**
 * return callable function from a Class
 * @example
 * const a = callable(class A {})
 * a() // A
 */
const callable = <A, R>(Class: new (...args: Array<A>) => R) =>
  (...args: Array<A>) =>
    new Class(...args)


export {
  callable
}
