import is from '@sindresorhus/is'
import * as z from 'zod'


const Promise = <Z extends z.ZodTypeAny>(ztype: Z) => {
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
