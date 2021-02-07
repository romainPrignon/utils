import { expectType } from 'tsd'

// test
import { mut } from '../../../src/fp/utils/mut'
import { imut } from '../../../src/fp/utils'


describe('fp/utils/mut.ts', () => {
  describe('imut()', () => {
    it('should be typed correctly', () => {
      const array = [1]
      const object = { a: 'b' }
      type ImmutableObject = {readonly a: string}

      expectType<ReadonlyArray<number>>(imut(mut(array)))
      expectType<ImmutableObject>(imut(mut(object)))
    })

    it('should return immutable value', () => {
      const array = [1]
      const object = { a: 'b' }

      // array.push(2) // OK
      // object.a = 'c' // OK

      const res1 = imut(mut(array))
      const res2 = imut(mut(object))

      // res1.push(2) // NOK
      // res2.a = 'c' // NOK
    })
  })
})
