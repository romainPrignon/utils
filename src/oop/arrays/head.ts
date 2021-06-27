import { Optional } from '../../../type'


const head = <R>(arr: Array<R>): Optional<R> => {
  const [head, ...rest] = arr

  return head
}


export {
  head
}
