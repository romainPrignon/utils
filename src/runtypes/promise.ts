import is from '@sindresorhus/is'
import * as r from 'runtypes'


const Promise = <R extends r.Runtype>(runtype: R) => {
  const guard = r.Guard((val: unknown): val is Promise<r.Static<R>> =>
    is.promise(val)
  )

  return {
    ...guard,
    name: 'Promise',
    tag: 'promise'
  }
}


export {
  Promise
}
