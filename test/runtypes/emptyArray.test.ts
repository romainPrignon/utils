import { expectType } from 'tsd'
import * as r from 'runtypes'

// test
import { EmptyArray } from '../../src/runtypes/emptyArray'


describe('emptyArray.ts', () => {
  describe('EmptyArray()', () => {
    it('should be tagged correctly', () => {
      expectType<r.Runtype>(EmptyArray)
      expect(EmptyArray.name).toEqual('EmptyArray')
      expect(EmptyArray.tag).toEqual('EmptyArray')
    })

    it('should handle check', () => {
      expect(() => EmptyArray.check(['a'])).toThrow(new r.ValidationError('Failed constraint check'))
      expect(EmptyArray.check([])).toEqual([])
    })

    it('should handle guard', () => {
      expectType<boolean>(EmptyArray.guard(undefined))
      expect(EmptyArray.guard(['a'])).toEqual(false)
      expect(EmptyArray.guard([])).toEqual(true)
    })

    it('should handle validate', () => {
      expectType<r.Result<Array<never>>>(EmptyArray.validate([]))
      expect(EmptyArray.validate(['a'])).toEqual({ 'message': 'Failed constraint check', 'success': false })
      expect(EmptyArray.validate([])).toEqual({ 'success': true, 'value': [] })
    })
  })
})
