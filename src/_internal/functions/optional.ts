import { Optional, Fun } from '../../../type'


type OptionalFun = <A extends Array<any>, R extends any>(fun: Fun<A, R>) => (...args: A) => Optional<R>
const optional: OptionalFun = (fun) => (...args) => fun(...args)


export {
  optional
}
