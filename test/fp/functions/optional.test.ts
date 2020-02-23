import { Optional } from '../../../type'

import { expectType } from 'tsd'

// test
import { optional } from '../../../src/fp/functions/optional'


describe('fp/functions/optional.ts', () => {
  describe('optional()', () => {

    it('should be typed correctly for simple function', () => {
      const opt = optional(() => 1)
      expectType<(...args: Array<never>) => Optional<number>>(opt)

      const res = opt()
      expectType<Optional<number>>(res)
    })

    it('should be typed correctly for function returning undefined', () => {
      const opt = optional(() => undefined)
      expectType<(...args: Array<never>) => Optional<undefined>>(opt)

      const res = opt()
      expectType<Optional<number>>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      const opt = optional((a) => a)
      expectType<(...args: Array<unknown>) => Optional<unknown>>(opt)

      const res = opt(1)
      expectType<Optional<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      const opt = optional((a: number) => a)
      expectType<(...args: Array<number>) => Optional<number>>(opt)

      const res = opt(1)
      expectType<Optional<number>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      const opt = optional((a: number, b: string) => a + b)
      expectType<(...args: [number, string]) => Optional<number | string>>(opt)

      const res = opt(1, 'a')
      expectType<Optional<number | string>>(res)
    })

    it('should make result optional', () => {
      const opt = optional(() => 1)

      expect(opt()).toEqual(1)
    })

    it('should not change undefined result', () => {
      const opt = optional(() => undefined)

      expect(opt()).toEqual(undefined)
    })

    it('should not change input', () => {
      const opt = optional((a) => a)

      expect(opt(1)).toEqual(1)
    })

    it('should not change inputs', () => {
      const opt = optional((a: number, b: number) => a + b)

      expect(opt(1, 1)).toEqual(2)
    })
  })
})
