import is from '@sindresorhus/is'
import * as z from 'zod'


const EmptyArray = z.custom<Array<never>>(is.emptyArray, {
  message: 'Expect Empty Array'
})


export {
  EmptyArray
}
