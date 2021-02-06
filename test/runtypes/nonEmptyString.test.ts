import { expectType } from 'tsd'
import * as r from 'runtypes'

// test
import { NonEmptyString } from '../../src/runtypes/nonEmptyString'


describe('nonEmptyString.ts', () => {
  describe('NonEmptyString()', () => {
    it('should be tagged correctly', () => {
      expectType<r.Runtype>(NonEmptyString)
      expect(NonEmptyString.name).toEqual('NonEmptyString')
      expect(NonEmptyString.tag).toEqual('nonEmptyString')
    })

    it('should handle check', () => {
      expect(() => NonEmptyString.check('')).toThrow(new r.ValidationError('Failed constraint check'))
      expect(NonEmptyString.check('a')).toEqual('a')
    })

    it('should handle guard', () => {
      expectType<boolean>(NonEmptyString.guard(1))
      expect(NonEmptyString.guard(1)).toEqual(false)
      expect(NonEmptyString.guard('a')).toEqual(true)
    })

    it('should handle validate', () => {
      expectType<r.Result<string>>(NonEmptyString.validate('a'))
      expect(NonEmptyString.validate(1)).toEqual({ 'message': 'Failed constraint check', 'success': false })
      expect(NonEmptyString.validate('a')).toEqual({ 'success': true, 'value': 'a' })
    })
  })
})
