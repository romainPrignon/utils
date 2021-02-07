import { Mutable } from '../../../type'


const mut = <T>(immutable: T): Mutable<T> => immutable


export {
  mut
}
