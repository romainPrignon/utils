import { expectType } from 'tsd'
import * as z from 'zod'

// test
import * as zod from '../../src/zod/nonEmptyArray'


describe('nonEmptyArray.ts', () => {
  describe('NonEmptyArray()', () => {
    it('should be tagged correctly', () => {
      expectType<z.ZodType<Array<number>>>(zod.NonEmptyArray(z.number()))
    })

    it('should handle parse', () => {
      const nonEmptyArrayOfNumber = zod.NonEmptyArray(z.number())
      const zodError = {
        code: z.ZodIssueCode.custom,
        message: 'Expect Non Empty Array',
        path: []
      }

      expectType<Array<number>>(nonEmptyArrayOfNumber.parse([1]))
      expect(() => nonEmptyArrayOfNumber.parse([])).toThrow(new z.ZodError([zodError]))
      expect(nonEmptyArrayOfNumber.parse([1])).toEqual([1])
    })


    it('should handle safeParse', async () => {
      const nonEmptyArrayOfNumber = zod.NonEmptyArray(z.number())
      const zodError = {
        code: z.ZodIssueCode.custom,
        message: 'Expect Non Empty Array',
        path: []
      }

      type SafeParseResult<T> = {
        success: false
        error: z.ZodError
      } | {
        success: true
        data: Array<T>
      }

      expectType<SafeParseResult<number>>(nonEmptyArrayOfNumber.safeParse([1]))
      expect(nonEmptyArrayOfNumber.safeParse([])).toEqual({ success: false, error: new z.ZodError([zodError]) })
      expect(nonEmptyArrayOfNumber.safeParse([1])).toEqual({ success: true, data: [1] })
    })
  })
})
