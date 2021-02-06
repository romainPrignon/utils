import is from '@sindresorhus/is'
import * as r from 'runtypes'


const NonEmptyArray = <R extends r.Runtype>(runtype: R) => {
  const guard = r.Guard((val: unknown): val is Array<r.Static<R>> =>
    is.nonEmptyArray(val)
  )

  return {
    ...guard,
    name: 'NonEmptyArray',
    tag: 'nonEmptyArray'
  }
}


export {
  NonEmptyArray
}
