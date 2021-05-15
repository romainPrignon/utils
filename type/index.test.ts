import { expectType } from 'tsd'

// test
import { Fun, Optional, Mutable, Immutable } from './index.d'
// tslint:disable-next-line: no-duplicate-imports
import * as Utils from './index.d'

const id = <T>(): T => ({}) as T

describe('index', () => {

  describe('Utils', () => {
    it('should export Fun type', () => {
      expectType<() => {}>(id<Utils.Fun<Array<any>, any>>())
    })
    it('should export Optional type', () => {
      expectType<number|undefined>(id<Utils.Optional<number>>())
    })
    it('should export Mutable type', () => {
      const foo = {bar: 'baz'} as const

      type ImmutableFoo = typeof foo
      type MutableFoo = {bar: 'baz'}

      expectType<MutableFoo>(id<Utils.Mutable<ImmutableFoo>>())
    })
    it('should export Immutable type', () => {
      const mutableFoo = {bar: 'baz'}
      type ImmutableFoo = {readonly bar: string}

      expectType<ImmutableFoo>(id<Utils.Immutable<typeof mutableFoo>>())
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

  describe('Mutable', () => {
    it('should export Mutable type', () => {
      const foo = {bar: 'baz'} as const

      type ImmutableFoo = typeof foo
      type MutableFoo = {bar: 'baz'}

      expectType<MutableFoo>(id<Mutable<ImmutableFoo>>())
    })
  })

  describe('Immutable', () => {
    it('should export Immutable type', () => {
      const mutableFoo = {bar: 'baz'}
      type ImmutableFoo = {readonly bar: string}

      expectType<ImmutableFoo>(id<Utils.Immutable<typeof mutableFoo>>())
    })
  })
})
