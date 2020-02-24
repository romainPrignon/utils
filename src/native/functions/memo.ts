import { Fun } from '../../../type'


const memo = <A extends Array<any>, R extends any>(fun: Fun<A, R>): Fun<A, R> => {

  const cache = new Map()

  const memoized: Fun<A, R> = (...args) => {
    const key = args[0]

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fun(...args)
    cache.set(key, result)

    return result
  }

  return memoized
}


export {
  memo
}
