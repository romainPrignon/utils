import { AsyncFun, UnknownArgs, UnknownReturns } from '../../../type'
import { Error } from '../errors'

type Errorify = <A extends UnknownArgs, R extends UnknownReturns>(fun: AsyncFun<A, R>) => (...args: A) => Promise<R>
const errorify: Errorify = (fun) => async (...args) => {
  try {
    return await fun(...args)
  } catch (err) {
    throw new Error(err.message, { code: err.code, cause: err })
  }
}


export {
  errorify
}
