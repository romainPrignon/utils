import { expectType } from 'tsd'
import * as z from 'zod'

// test
import { assertWith } from '../../../src/oop/struct/assertWith'


describe('oop/struct/assertWith.ts', () => {
  describe('assertWith()', () => {
    it('should be typed correctly', () => {
      const numberSchema = z.number()
      const numberAssertion = assertWith(numberSchema)

      expectType<(input: unknown) => void>(numberAssertion)
    })
    it('should be typed correctly when calling assertion', () => {
      const numberSchema = z.number()
      const input = 1

      const numberAssertion = assertWith(numberSchema)

      expectType<void>(numberAssertion(input))
    })

    it('should return false if input is not a number', () => {
      const numberSchema = z.number()
      const input = {}

      const numberAssertion = assertWith(numberSchema)

      expect(() => numberAssertion(input)).toThrowError()
    })

    it('should return true if input is a number', () => {
      const numberSchema = z.number()
      const input = 1

      const numberAssertion = assertWith(numberSchema)

      expect(() => numberAssertion(input)).not.toThrow()
    })
  })
})
