import is from '@sindresorhus/is'
import * as r from 'runtypes'

type RuntypeConstraint<R extends r.Runtype> = r.Constraint<r.Unknown, Promise<r.Static<R>>, unknown>

const Promise = <R extends r.Runtype>(_runtype: R): RuntypeConstraint<R> => {
  const guard = r.Guard((val: unknown): val is Promise<r.Static<R>> =>
    is.promise(val)
  )

  return {
    ...guard,
    name: 'Promise',
    tag: 'promise' as 'constraint'
  }
}


export {
  Promise
}
