import { expectType } from 'tsd'

// test
import { mut } from '../../../src/native/utils/mut'
import { imut } from '../../../src/native/utils'


describe('native/utils/mut.ts', () => {
  describe('mut()', () => {
    it('should be typed correctly', () => {
      const array = [1]
      const object = { a: 'b' }

      expectType<typeof array>(mut(imut(array)))
      expectType<typeof object>(mut(imut(object)))
    })

    it('should return mutable value', () => {
      const array = [1]
      const object = { a: 'b' }

      const res1 = mut(imut(array))
      const res2 = mut(imut(object))

      // res1.push(2) // OK
      // res2.a = 'c' // OK
    })
  })
})
