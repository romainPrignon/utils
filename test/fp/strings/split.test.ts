import { expectType } from 'tsd'

// test
import { split } from '../../../src/fp/strings/split'


describe('fp/strings/split.ts', () => {
  describe('split()', () => {
    it('should be typed as curried', () => {
      expectType<(str: string) => Array<string>>(split(','))
    })

    it('should be typed as array of string', () => {
      expectType<Array<string>>(split(',', 'a,b'))
      expectType<Array<string>>(split(',')('a,b'))
    })

    it('should return a curried function', () => {
      const splitColon = split(',')

      expect(splitColon('a,b')).toEqual(['a', 'b'])
    })

    it('should return an array of string', () => {
      expect(split(',', 'a,b')).toEqual(['a', 'b'])
    })
  })
})
