import { Fun } from '../../../type'
import * as ix from 'ix/asynciterable'


type From = <A extends Array<unknown>, R extends unknown>
  (fun: Fun<A, ix.AsyncIterableInput<R>>) => (...args: A) => ix.AsyncIterableX<R>
const from: From = (fun) => (...args) =>
  ix.from(fun(...args))


export {
  from
}
