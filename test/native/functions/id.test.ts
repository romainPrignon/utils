import { expectType } from 'tsd'

// test
import { id } from '../../../src/native/functions/id'


describe('native/functions/id.ts', () => {
  describe('id()', () => {
    it('should be typed as self', () => {
      expectType<number>(id(1))
    })

    it('should return self', () => {
      expect(id(1)).toEqual(1)
    })
  })
})
