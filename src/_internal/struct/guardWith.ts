import * as z from 'zod'

const guardWith = <T>(schema: z.Schema<T>): (input: unknown) => input is T =>
  (input: unknown): input is T => {
    return schema.safeParse(input).success
  }

export {
  guardWith
}
