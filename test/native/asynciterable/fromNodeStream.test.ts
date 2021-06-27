import { AsyncIterable } from 'ix'
import ix from 'ix/asynciterable'
import { Readable } from 'stream'
import { expectType } from 'tsd'
import _ from 'lodash'

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

      // tslint:disable-next-line: await-promise (https://github.com/palantir/tslint/issues/3997)
      for await (const val of res2) {
        expect(val).toEqual('1')
      }
    })

    it('should make result iterable fromNodeStream generator', async () => {
      // Arrange
      const source = async function* (): AsyncGenerator<number> {
        yield 1
      }

      const fun = fromNodeStream(() => Readable.from(source()))

      // Act
      const res = fun()

      // Assert
      expect(res).toBeInstanceOf(AsyncIterable)

      const res2 = fun()
        .map(val => val.toString())

      // tslint:disable-next-line: await-promise
      for await (const val of res2) {
        expect(val).toEqual('1')
      }
    })

    it('should catch error from source stream', async () => {
      const expectedErr = new Error()

      // Arrange
      const source = async function* (): AsyncGenerator<number> {
        throw expectedErr
      }

      const fun = fromNodeStream(() => Readable.from(source()))

      // Act

      try {
        await fun().forEach(_.noop)

        throw new Error('should never happened')
      } catch (err) {
        // Assert
        expect(err).toEqual(expectedErr)
      }
    })

    it('should catch error', async () => {
      const expectedErr = new Error()

      // Arrange
      const fun = fromNodeStream(() => { throw expectedErr })

      // Act

      try {
        await fun().forEach(_.noop)

        throw new Error('should never happened')
      } catch (err) {
        // Assert
        expect(err).toEqual(expectedErr)
      }
    })
  })
})
