import { expectType } from 'tsd'
import * as z from 'zod'

// test
import * as zod from '../../src/zod/emptyString'


describe('emptyString.ts', () => {
  describe('EmptyString()', () => {
    it('should be tagged correctly', () => {
      expectType<z.ZodType<''>>(zod.EmptyString)
    })

    it('should handle parse', () => {
      const zodError = {
        code: z.ZodIssueCode.custom,
        message: 'Expect Empty String',
        path: []
      }

      expectType<''>(zod.EmptyString.parse(''))
      expect(() => zod.EmptyString.parse('a')).toThrow(new z.ZodError([zodError]))
      expect(zod.EmptyString.parse('')).toEqual('')
    })


    it('should handle safeParse', async () => {
      const zodError = {
        code: z.ZodIssueCode.custom,
        message: 'Expect Empty String',
        path: []
      }

      type SafeParseResult = {
        success: false
        error: z.ZodError
      } | {
        success: true
        data: ''
      }

      expectType<SafeParseResult>(zod.EmptyString.safeParse(''))
      expect(zod.EmptyString.safeParse('a')).toEqual({ success: false, error: new z.ZodError([zodError]) })
      expect(zod.EmptyString.safeParse('')).toEqual({ success: true, data: '' })
    })
  })
})
