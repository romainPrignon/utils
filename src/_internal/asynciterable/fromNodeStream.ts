import { Fun } from '../../../type'
import * as ix from 'ix'
import * as ixAsync from 'ix/asynciterable'


type FromNodeStream = <A extends Array<unknown>>
  (fun: Fun<A, NodeJS.ReadableStream>) => (...args: A) => ixAsync.AsyncIterableX<string | Buffer>
const fromNodeStream: FromNodeStream = (fun) => (...args) =>
  ix.fromNodeStream(fun(...args))


export {
  fromNodeStream
}
