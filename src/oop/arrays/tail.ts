import { Optional } from '../../../type'

import { head } from '.'


const tail = <R>(arr: Array<R>): Optional<R> =>
  head(arr.slice(-1))


export {
  tail
}
