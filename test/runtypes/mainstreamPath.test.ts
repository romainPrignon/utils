import { expectType } from 'tsd'
import * as r from 'runtypes'

// test
import { MainstreamPath } from '../../src/runtypes/mainstreamPath'


describe('mainstreamPath.ts', () => {
  describe('MainstreamPath()', () => {
    it('should be tagged correctly', () => {
      expectType<r.Runtype>(MainstreamPath)
      expect(MainstreamPath.name).toEqual('MainstreamPath')
      expect(MainstreamPath.tag).toEqual('mainstreamPath')

    })

    it('should handle check', () => {
      expect(() => MainstreamPath.check('')).toThrow(new r.ValidationError('Failed constraint check'))
      expect(() => MainstreamPath.check('a')).toThrow(new r.ValidationError('Failed constraint check'))
      expect(MainstreamPath.check('/a')).toEqual('/a')
    })

    it('should handle guard', () => {
      expect(MainstreamPath.guard('')).toEqual(false)
      expect(MainstreamPath.guard('a')).toEqual(false)
      expect(MainstreamPath.guard('/a')).toEqual(true)
    })

    it('should handle validate', () => {
      expect(MainstreamPath.validate('')).toEqual({ 'message': 'Failed constraint check', 'success': false })
      expect(MainstreamPath.validate('a')).toEqual({ 'message': 'Failed constraint check', 'success': false })
      expect(MainstreamPath.validate('/a')).toEqual({ 'success': true, 'value': '/a' })
    })
  })
})
