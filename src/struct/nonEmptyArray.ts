import is from '@sindresorhus/is'
import * as z from 'zod'


const NonEmptyArray = <Z extends z.ZodTypeAny>(_ztype: Z): z.ZodType<Array<z.infer<Z>>> => {
  return z.custom<Array<z.infer<Z>>>(
    (val): val is Array<z.infer<Z>> => is.nonEmptyArray(val),
    {
      message: 'Expect Non Empty Array'
    }
  )
}


export {
  NonEmptyArray
}
