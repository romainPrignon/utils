import is from '@sindresorhus/is'
import * as z from 'zod'


const Promise = <Z extends z.ZodTypeAny>(_ztype: Z): z.ZodType<Promise<z.infer<Z>>> => {
  return z.custom<Promise<z.infer<Z>>>(
    (val): val is Promise<z.infer<Z>> => is.promise(val),
    {
      message: 'Expect Promise'
    }
  )
}


export {
  Promise
}
