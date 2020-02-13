import { expectType } from 'tsd'

// test
import { Error } from '../../../src/fp/errors/Error'


describe('fp/errors/index.ts', () => {
  describe('Error()', () => {
    const message = 'message'
    const err = new globalThis.Error()
    const code = 'code'

    it.skip('should be typed as Error', () => {
      // @ts-ignore
      expectType<Error>(Error(message, { cause: err, code }))
    })

    it.skip('should return an instance of Error', () => {
      // @ts-ignore
      const error = Error(message, { cause: err, code })

      expect(error).toBeInstanceOf(Error)
    })
  })
})
