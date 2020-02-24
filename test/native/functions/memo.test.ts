import { expectType } from 'tsd'

// test
import { memo } from '../../../src/native/functions/memo'


describe('native/functions/memo.ts', () => {
  describe('memo()', () => {
    it('should be typed correctly for simple function', () => {
      const one = () => 1
      const memoOne = memo(one)
      expectType<() => number>(memoOne)

      const res = memoOne()
      expectType<number>(res)
    })

    it('should be typed correctly for param function', () => {
      const one = (a: number) => a
      const memoOne = memo(one)
      expectType<(a: number) => number>(memoOne)

      const res = memoOne(1)
      expectType<number>(res)
    })
    it('should be typed correctly for multi params function', () => {
      const add = (a: number, b: string): string => a + b
      const memoAdd = memo(add)
      expectType<(...args: [number, string]) => string>(memoAdd)

      const res = memoAdd(1, 'a')
      expectType<string>(res)
    })

    it('should memoize', () => {
      const one = jest.fn(() => 1)
      const memoOne = memo(one)

      const nonMemoRes1 = one()
      const nonMemoRes2 = one()
      expect(nonMemoRes1).toEqual(1)
      expect(nonMemoRes2).toEqual(1)
      expect(one).toHaveBeenCalledTimes(2)

      one.mockClear()

      const res1 = memoOne()
      const res2 = memoOne()

      expect(res1).toEqual(1)
      expect(res2).toEqual(1)
      expect(one).toHaveBeenCalledTimes(1)
    })
  })
})
