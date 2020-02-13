import { expectType } from 'tsd'

// test
import { Error } from '../../../src/native/errors'


describe('native/errors/index.ts', () => {
  describe('new Error', () => {
    const message = 'message'
    const err = new globalThis.Error()
    const code = 'code'

    it.skip('should be typed as Error', () => {
      // @ts-ignore
      expectType<Error>(new Error(message, { cause: err, code }))
    })

    it.skip('should return an instance of Error', () => {
      // @ts-ignore
      const error = new Error(message, { cause: err, code })

      expect(error).toBeInstanceOf(Error)
    })
  })
})
