import is from '@sindresorhus/is'
import * as r from 'runtypes'


const EmptyString = {
  ...r.Guard(is.emptyString),
  name: 'EmptyString',
  tag: 'EmptyString'
}


export {
  EmptyString
}
