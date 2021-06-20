import { Optional, Fun, UnknownArgs, UnknownReturns } from '../../../type'


type OptionalFun = <A extends UnknownArgs, R extends UnknownReturns>(fun: Fun<A, R>) => (...args: A) => Optional<R>
const optional: OptionalFun = (fun) => (...args) => fun(...args)


export {
  optional
}
