import { AsyncFun, UnknownArgs, UnknownReturns } from '../../../type'
import { Error } from '../errors'
import { mayAsync } from './mayAsync'

type Errorify = <A extends UnknownArgs, R extends UnknownReturns>(fun: AsyncFun<A, R>) => (...args: A) => Promise<R>
const errorify: Errorify = (fun) => (...args) =>
  mayAsync(
    () => fun(...args),
    (err) => {
      throw Error(err.message, { code: err.code, cause: err })
    }
  )


export {
  errorify
}
