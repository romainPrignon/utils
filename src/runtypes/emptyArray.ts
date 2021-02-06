import is from '@sindresorhus/is'
import * as r from 'runtypes'


const EmptyArray = {
  ...r.Guard(is.emptyArray),
  name: 'EmptyArray',
  tag: 'EmptyArray'
}


export {
  EmptyArray
}
