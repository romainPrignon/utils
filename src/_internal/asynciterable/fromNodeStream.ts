import { Fun, UnknownArgs } from '../../../type'
import * as ix from 'ix'
import * as ixAsync from 'ix/asynciterable'
import { Error } from '../error/Error'

type FromNodeStream = <A extends UnknownArgs>
  (fun: Fun<A, NodeJS.ReadableStream>) => (...args: A) => ixAsync.AsyncIterableX<string | Buffer> // eslint-disable-line no-undef
const fromNodeStream: FromNodeStream = (fun) => (...args) =>
  ix.fromNodeStream(fun(...args))
    .catchError((err) => {
      throw new Error(err.message, { code: err.code, cause: err })
    })


export {
  fromNodeStream
}
