import { expectType } from 'tsd'
import * as r from 'runtypes'

// test
import * as Runtype from '../../src/runtype/promise'


describe('promise.ts', () => {
  describe('Promise()', () => {
    it('should be tagged correctly', async () => {
      const numberPromise = Runtype.Promise(r.Number)

      expectType<r.Runtype<Promise<number>>>(Runtype.Promise(r.Number))

      expect(numberPromise.name).toEqual('Promise')
      expect(numberPromise.tag).toEqual('promise')
    })

    it('should handle check', async () => {
      const numberPromise = Runtype.Promise(r.Number)

      expectType<Promise<number>>(numberPromise.check(Promise.resolve(1)))
      expect(() => numberPromise.check(1)).toThrow(new r.ValidationError('Failed constraint check'))
      expect(await numberPromise.check(Promise.resolve(1))).toEqual(1)
    })

    it('should handle guard', async () => {
      const numberPromise = Runtype.Promise(r.Number)

      expectType<boolean>(numberPromise.guard(1))
      expect(numberPromise.guard(1)).toEqual(false)
      expect(numberPromise.guard(Promise.resolve(1))).toEqual(true)
    })

    it('should handle validate', async () => {
      const numberPromise = Runtype.Promise(r.Number)

      expect(numberPromise.validate(1)).toEqual({ 'message': 'Failed constraint check', 'success': false })
      expect(numberPromise.validate(Promise.resolve(1))).toEqual({ 'success': true, 'value': Promise.resolve({}) })
    })
  })
})
