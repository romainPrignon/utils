import { expectType } from 'tsd'

// test
import { Error } from '../../../src/native/errors'


describe('native/errors/index.ts', () => {
  describe('new Error', () => {
    const message = 'message'
    const err = new globalThis.Error()
    const code = 'code'

    it('should be typed as Error', () => {
      expectType<Error>(new Error(message, { cause: err, code }))
    })

    it('should return an instance of Error', () => {
      const error = new Error(message, { cause: err, code })

      expect(error).toBeInstanceOf(Error)
    })
  })
})
