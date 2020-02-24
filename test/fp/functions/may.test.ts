import { expectType } from 'tsd'
import { Error } from '../../../src/fp/errors/Error'

// test
import { may } from '../../../src/fp/functions/may'


describe('fp/functions/may.ts', () => {
  describe('may()', () => {

    it('should be typed as R1 | Error', () => {
      expectType<number | Error>(may(() => 1))
    })
    it('should be typed as R1 | R2', () => {
      expectType<number | string>(may(() => 1, () => 'a'))
    })

    it('should return an Error if failure callback not provided', () => {
      const err = Error('boom', { code: 'BOOM' })

      expect(
        may(() => { throw err })
      ).toEqual(err)
    })

    it('should return correctly in success case', () => {
      expect(
        may(() => 1)
      ).toEqual(1)
    })

    it('should return fallback in failure case', () => {
      const err = Error('boom', { code: 'BOOM' })

      expect(
        may(
          () => { throw err },
          () => 2
        )
      ).toEqual(2)
    })
  })
})
