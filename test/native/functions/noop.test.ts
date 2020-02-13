import { expectType } from 'tsd'

// test
import { noop } from '../../../src/native/functions/noop'


describe('native/functions/noop.ts', () => {
  describe('noop()', () => {
    it('should be typed as void', () => {
      expectType<void>(noop())
    })

    it('should return undefined', () => {
      expect(noop()).toEqual(undefined)
    })
  })
})
