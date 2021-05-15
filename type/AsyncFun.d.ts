import {Asyncify} from 'type-fest'
import { Fun } from './Fun'

type AsyncFun<A extends Array<unknown>, R extends unknown> = Asyncify<Fun<A, R>>

export {
  AsyncFun
}
