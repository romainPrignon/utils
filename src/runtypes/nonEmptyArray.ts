import is from '@sindresorhus/is'
import * as r from 'runtypes'

type RuntypeConstraint<R extends r.Runtype> = r.Constraint<r.Unknown, Array<r.Static<R>>, unknown>

const NonEmptyArray = <R extends r.Runtype>(_runtype: R): RuntypeConstraint<R> => {
  const guard = r.Guard((val: unknown): val is Array<r.Static<R>> =>
    is.nonEmptyArray(val)
  )

  return {
    ...guard,
    name: 'NonEmptyArray',
    tag: 'nonEmptyArray' as 'constraint'
  }
}


export {
  NonEmptyArray
}
