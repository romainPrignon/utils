import is from '@sindresorhus/is'
import * as z from 'zod'


const EmptyString = z.custom<''>(is.emptyString, {
  message: 'Expect Empty String'
})


export {
  EmptyString
}
