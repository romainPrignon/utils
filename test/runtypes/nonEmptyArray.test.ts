import { expectType } from 'tsd'
import * as r from 'runtypes'

// test
import * as Runtype from '../../src/runtypes/nonEmptyArray'


describe('nonEmptyArray.ts', () => {
  describe('nonEmptyArray()', () => {
    it('should be tagged correctly', () => {
      const nonEmptyArray = Runtype.NonEmptyArray(r.Number)

      expectType<r.Runtype<Array<number>>>(Runtype.NonEmptyArray(r.Number))

      expect(nonEmptyArray.name).toEqual('NonEmptyArray')
      expect(nonEmptyArray.tag).toEqual('nonEmptyArray')
    })

    it('should handle check', () => {
      const nonEmptyArray = Runtype.NonEmptyArray(r.Number)

      expectType<Array<number>>(nonEmptyArray.check([1]))
      expect(() => nonEmptyArray.check([])).toThrowError('Failed constraint check for unknown')
      expect(nonEmptyArray.check([1])).toEqual([1])
    })

    it('should handle guard', () => {
      const nonEmptyArray = Runtype.NonEmptyArray(r.Number)

      expect(nonEmptyArray.guard([])).toEqual(false)
      expect(nonEmptyArray.guard([1])).toEqual(true)
    })

    it('should handle validate', () => {
      const nonEmptyArray = Runtype.NonEmptyArray(r.Number)

      expect(nonEmptyArray.validate([])).toEqual({ code: 'CONSTRAINT_FAILED', 'message': 'Failed constraint check for unknown', 'success': false })
      expect(nonEmptyArray.validate([1])).toEqual({ 'success': true, 'value': [1] })
    })
  })
})
