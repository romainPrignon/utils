import { expectType } from 'tsd'
import * as z from 'zod'

// test
import * as zod from '../../src/zod/emptyArray'


describe('emptyArray.ts', () => {
  describe('EmptyArray()', () => {
    it('should be tagged correctly', () => {
      expectType<z.ZodType<Array<never>>>(zod.EmptyArray)
    })

    it('should handle parse', () => {
      const zodError = {
        code: z.ZodIssueCode.custom,
        message: 'Expect Empty Array',
        path: []
      }

      expectType<Array<never>>(zod.EmptyArray.parse([]))
      expect(() => zod.EmptyArray.parse(['a'])).toThrow(new z.ZodError([zodError]))
      expect(zod.EmptyArray.parse([])).toEqual([])
    })


    it('should handle safeParse', async () => {
      const zodError = {
        code: z.ZodIssueCode.custom,
        message: 'Expect Empty Array',
        path: []
      }

      type SafeParseResult = {
        success: false
        error: z.ZodError
      } | {
        success: true
        data: Array<never>
      }

      expectType<SafeParseResult>(zod.EmptyArray.safeParse([]))
      expect(zod.EmptyArray.safeParse([1])).toEqual({ success: false, error: new z.ZodError([zodError]) })
      expect(zod.EmptyArray.safeParse([])).toEqual({ success: true, data: [] })
    })
  })
})
