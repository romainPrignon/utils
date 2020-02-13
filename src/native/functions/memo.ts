// todo => put in type
// type Fun1<A1 extends any, R> = (...a: Array<A1>) => R
// type Fun2<A1 extends any, A2 extends any, R> = (...a: Array<A1 | A2>) => R

// const memo = <A, R>(fun: Fun<A, R>): Fun<A, R> => {

//   const cache = new Map()

//   const memoized: Fun<A, R> = (...args) => {
//     const key = args[0]

//     if (cache.has(key)) {
//       return cache.get(key)
//     }

//     const result = fun(...args)
//     cache.set(key, result)

//     return result
//   }

//   return memoized
// }

// const a = memoize((a: string, b: number) => []) TODO

// export {
//   memo
// }

export {
}
