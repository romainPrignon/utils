import { expectType } from 'tsd'

// test
import { errorify } from '../../../src/fp/functions/errorify'


describe('fp/functions/errorify.ts', () => {
  describe('errorify()', () => {

    it('should be typed correctly for simple function', () => {
      const rootError = new Error()
      const fun = errorify(() => { throw rootError })
      expectType<(...args: Array<unknown>) => Promise<unknown>>(fun)
    })

    it('should be typed correctly for function returning parameter', () => {
      const fun = errorify(async (a) => a)
      expectType<(...args: Array<unknown>) => Promise<unknown>>(fun)

      const res = fun(1)
      expectType<Promise<unknown>>(res)
    })

    it('should be typed correctly for function with typed params', () => {
      const fun = errorify(async (a: number) => a)
      expectType<(...args: Array<number>) => Promise<number>>(fun)

      const res = fun(1)
      expectType<Promise<number>>(res)
    })

    it('should be typed correctly for function with multiple params', () => {
      const fun = errorify(async (a: number, b: string) => a + b)
      expectType<(...args: [number, string]) => Promise<number | string>>(fun)

      const res = fun(1, 'a')
      expectType<Promise<number | string>>(res)
    })

    it('should return happy path', async () => {
      const fun = errorify(async () => 1)

      expect(await fun()).toEqual(1)
    })

    it('should not change input', async () => {
      const fun = errorify(async (a) => a)

      expect(await fun(1)).toEqual(1)
    })

    it('should not change inputs', async () => {
      const fun = errorify(async (a: number, b: number) => a + b)

      expect(await fun(1, 1)).toEqual(2)
    })

    it('should handle async fun', async () => {
      const fun = errorify(async () => 1)

      expect(await fun()).toEqual(1)
    })

    it('should throw instance of UtilError', async () => {
      const rootError = new Error('some-error')
      const fun = errorify(async () => { throw rootError })

      try {
        await fun()
      } catch (err) {
        expect(err.message).toEqual(rootError.message)
        expect(err.cause).toEqual(rootError)
      }
    })
  })
})
