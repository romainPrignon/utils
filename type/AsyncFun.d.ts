import {Asyncify} from 'type-fest'
import { Fun } from './Fun'

type AsyncFun<A extends Array<any>, R extends any> = Asyncify<Fun<A, R>>

export {
  AsyncFun
}
