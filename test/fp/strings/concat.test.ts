import { expectType } from 'tsd'

// test
import { concat } from '../../../src/fp/strings/concat'


describe('fp/strings/concat.ts', () => {
  describe('concat()', () => {
    it('should be typed as curried', () => {
      expectType<(str: string) => string>(concat('a'))
    })

    it('should be typed as string', () => {
      expectType<string>(concat('a', 'b'))
    })

    it('should return a concat string', () => {
      expect(concat('b', 'a')).toEqual('ab')
      expect(concat('b')('a')).toEqual('ab')
    })
  })
})
