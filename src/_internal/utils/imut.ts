import { Immutable } from '../../../type'


const imut = <T>(mutable: T): Immutable<T> => mutable


export {
  imut
}
