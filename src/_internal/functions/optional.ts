import { Optional } from '../../../type'


const optional = <A, R>(fun: (...args: Array<A>) => R) =>
  (...args: Array<A>): Optional<R> =>
    fun(...args)


export {
  optional
}
