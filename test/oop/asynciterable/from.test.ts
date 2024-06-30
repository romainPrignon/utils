import { AsyncIterable } from 'ix'
import ix from 'ix/asynciterable'
import { expectType } from 'tsd'

// test
import { from } from '../../../src/oop/asynciterable/from'


describe('oopynciterable/from.ts', () => {
  describe('from()', () => {
    it('should be typed correctly for simple function', async () => {
      const fun = from(() => [1])
      expectType<() => ix.AsyncIterableX<number>>(fun)

      const res = fun()
      expectType<ix.AsyncIterableX<number>>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      const fun = from((a) => [a])
      expectType<(...args: Array<unknown>) => ix.AsyncIterableX<unknown>>(fun)

      const res = fun(1)
      expectType<ix.AsyncIterableX<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      const fun = from((a: number) => [a])
      expectType<(...args: Array<number>) => ix.AsyncIterableX<number>>(fun)

      const res = fun(1)
      expectType<ix.AsyncIterableX<number>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      const fun = from((a: number, b: string) => a + b)
      expectType<(...args: [number, string]) => ix.AsyncIterableX<number | string>>(fun)

      const res = fun(1, 'a')
      expectType<ix.AsyncIterableX<number | string>>(res)
    })

    it('should make result async iterable from fun', async () => {
      // Arrange
      const fun = from(() => [1])

      // Act
      const res = fun()

      // Assert
      expect(res).toBeInstanceOf(AsyncIterable)

      const res2 = fun()
        .map(val => val + 1)

      for await (const val of res2) {
        expect(val).toEqual(2)
      }
    })

    it('should make result iterable from generator', async () => {
      // Arrange
      const source = async function * (): AsyncGenerator<number> {
        yield 1
      }

      const fun = from(source)

      // Act
      const res = fun()

      // Assert
      expect(res).toBeInstanceOf(AsyncIterable)

      const res2 = fun()
        .map(val => val + 1)

      for await (const val of res2) {
        expect(val).toEqual(2)
      }
    })
  })
})
