import { AsyncIterable } from 'ix'
import ix from 'ix/asynciterable'
import { Readable } from 'stream'
import { expectType } from 'tsd'

// test
import { fromNodeStream } from '../../../src/native/asynciterable/fromNodeStream'


describe('native/asynciterable/fromNodeStream.ts', () => {
  describe('fromNodeStream()', () => {

    it('should be typed correctly for simple function', async () => {
      const fun = fromNodeStream(() => Readable.from([]))
      expectType<() => ix.AsyncIterableX<string | Buffer>>(fun)

      const res = fun()
      expectType<ix.AsyncIterableX<string | Buffer>>(res)
    })

    it('should be typed correctly for function returning parameter', () => {
      const fun = fromNodeStream((a) => Readable.from([a]))
      expectType<(...args: Array<unknown>) => ix.AsyncIterableX<unknown>>(fun)

      const res = fun(1)
      expectType<ix.AsyncIterableX<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      const fun = fromNodeStream((a: number) => Readable.from([a]))
      expectType<(...args: Array<number>) => ix.AsyncIterableX<string | Buffer>>(fun)

      const res = fun(1)
      expectType<ix.AsyncIterableX<string | Buffer>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      const fun = fromNodeStream((a: number, b: string) => Readable.from(a + b))
      expectType<(...args: [number, string]) => ix.AsyncIterableX<string | Buffer>>(fun)

      const res = fun(1, 'a')
      expectType<ix.AsyncIterableX<string | Buffer>>(res)
    })

    it('should make result async iterable fromNodeStream fun', async () => {
      // Arrange
      const fun = fromNodeStream(() => Readable.from([1]))

      // Act
      const res = fun()

      // Assert
      expect(res).toBeInstanceOf(AsyncIterable)

      const res2 = fun()
        .map(val => val.toString())

      for await (const val of res2) {
        expect(val).toEqual('1')
      }
    })

    it('should make result iterable fromNodeStream generator', async () => {
      // Arrange
      const source = async function* () {
        yield 1
      }

      const fun = fromNodeStream(() => Readable.from(source()))

      // Act
      const res = fun()

      // Assert
      expect(res).toBeInstanceOf(AsyncIterable)

      const res2 = fun()
        .map(val => val.toString())

      for await (const val of res2) {
        expect(val).toEqual('1')
      }
    })
  })
})
