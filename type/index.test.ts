import { expectType } from 'tsd'

// test
import { Class, Fun, Optional } from './index.d'
// tslint:disable-next-line: no-duplicate-imports
import * as Utils from './index.d'

const id = <T>(): T => ({}) as T

describe('index', () => {

  describe('Utils', () => {
    it('should export Class type', () => {
      const t = class {}
      expectType<typeof t>(id<Utils.Class<any, any>>())
    })
    it('should export Fun type', () => {
      expectType<() => {}>(id<Utils.Fun<Array<any>, any>>())
    })
    it('should export Optional type', () => {
      expectType<number|undefined>(id<Utils.Optional<number>>())
    })
  })

  describe('Class', () => {
    it('should export Class type', () => {
      const t = class {}
      expectType<typeof t>(id<Class<any, any>>())
    })
  })

  describe('Fun', () => {
    it('should export Fun type', () => {
      expectType<() => {}>(id<Fun<Array<any>, any>>())
    })
  })

  describe('Optional', () => {
    it('should export Optional type', () => {
      expectType<number|undefined>(id<Optional<number>>())
    })
  })
})
