import { expectType } from 'tsd'
import { Error } from '../../../src/fp/errors/Error'

// test
import { mayAsync } from '../../../src/fp/functions/mayAsync'


describe('fp/functions/mayAsync.ts', () => {
  describe('mayAsync()', () => {

    it('should be typed as R1 | Error', () => {
      expectType<Promise<number | Error>>(mayAsync(async () => 1))
    })
    it('should be typed as R1 | R2', () => {
      expectType<Promise<number | string>>(mayAsync(async () => 1, () => 'a'))
    })

    it('should return an Error if failure callback not provided', async () => {
      const err = Error('boom', { code: 'BOOM' })

      const output = await mayAsync(async () => { throw err })

      expect(output).toEqual(err)
    })

    it('should return correctly in success case', async () => {
      const output = await mayAsync(async () => 1)

      expect(output).toEqual(1)
    })

    it('should return fallback in failure case', async () => {
      const err = Error('boom', { code: 'BOOM' })

      const output = await mayAsync(
        async () => { throw err },
        () => 2
      )

      expect(output).toEqual(2)
    })
  })
})
