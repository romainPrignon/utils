import { expectType } from 'tsd'

// test
import { Error } from '../../../src/fp/errors/Error'


describe('fp/errors/index.ts', () => {
  describe('Error()', () => {
    const message = 'message'
    const err = new globalThis.Error()
    const code = 'code'

    it('should be typed as Error', () => {
      expectType<Error>(Error(message, { cause: err, code }))
    })

    it('should return an instance of Error', () => {
      const error = Error(message, { cause: err, code })

      expect(error.message).toEqual(message)
      expect(error.cause).toEqual(err)
      expect(error.code).toEqual(code)
    })
  })
})
