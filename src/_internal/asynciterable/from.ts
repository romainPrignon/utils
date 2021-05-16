import { AsyncFun, Fun } from '../../../type'
import * as ix from 'ix/asynciterable'
import is from '@sindresorhus/is'
import l from 'lodash'


type From = <A extends Array<unknown>, R extends unknown>
  (fun: AsyncFun<A, ix.AsyncIterableInput<R>> | Fun<A, ix.AsyncIterableInput<R>>) => (...args: A) => ix.AsyncIterableX<R>


const from = <A, R>(fun: (...args: Array<A>) => ix.AsyncIterableInput<R>) => (...args: Array<A>) => {
  const res = fun(...args)
  if (is.promise(res)) {
    // tres bancal mais ca marche
    // on se sert du marqueur "async" pour se brancher sur le fait que le retour de async doit etre flat
    return ix.from<R>(res).flatMap(l.identity)
  } else {
    return ix.from(res)
  }
}



export {
  from
}
