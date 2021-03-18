import { expectType } from 'tsd'
import * as z from 'zod'

// test
import * as zod from '../../src/zod/promise'


describe('zod/promise.ts', () => {
  describe('Promise()', () => {
    it('should be tagged correctly', async () => {
      expectType<z.ZodType<Promise<number>>>(zod.Promise(z.number()))
    })

    it('should handle check', async () => {
      const numberPromise = zod.Promise(z.number())

      expectType<boolean>(numberPromise.check(Promise.resolve(1)))
      expect(numberPromise.check(1)).toEqual(false)
      expect(numberPromise.check(Promise.resolve(1))).toEqual(true)
    })

    it('should handle parse', async () => {
      const numberPromise = zod.Promise(z.number())
      const zodError = {
        message: 'Expect Promise',
        code: z.ZodErrorCode.custom_error,
        path: []
      }

      expectType<Promise<number>>(numberPromise.parse(Promise.resolve(1)))
      expect(() => numberPromise.parse(1)).toThrow(new z.ZodError([zodError]))
      expect(await numberPromise.parse(Promise.resolve(1))).toEqual(1)
    })

    it('should handle safeParse', async () => {
      const numberPromise = zod.Promise(z.number())

      const zodError = {
        message: 'Expect Promise',
        code: z.ZodErrorCode.custom_error,
        path: []
      }

      type SafeParseResult = {
        success: false
        error: z.ZodError
      } | {
        success: true
        data: Promise<number>
      }

      expectType<SafeParseResult>(numberPromise.safeParse(Promise.resolve(1)))
      expect(numberPromise.safeParse(1)).toEqual({ success: false, error: new z.ZodError([zodError]) })
      expect(numberPromise.safeParse(Promise.resolve(1))).toEqual({ success: true, data: Promise.resolve(1) })
    })
  })
})
