import * as z from 'zod'

const assertWith = <T>(schema: z.Schema<T>): (input: unknown) => asserts input is T =>
  (input: unknown): asserts input is T => {
    schema.parse(input)
  }

export {
  assertWith
}
