import is from '@sindresorhus/is'
import * as r from 'runtypes'


const NonEmptyString = {
  ...r.Guard(is.nonEmptyString),
  name: 'NonEmptyString',
  tag: 'nonEmptyString'
}


export {
  NonEmptyString
}
