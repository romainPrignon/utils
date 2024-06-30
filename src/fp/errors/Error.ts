import { Err as _Err } from '../../_internal/error/Error'
import { callable } from '../classes/callable'


const Err = callable(_Err)

const inherit = (err: typeof Err, name: string) => (...args: ConstructorParameters<typeof _Err>) => {
  const _err = err(...args)
  const [, data] = args

  _err.name = name // eslint-disable-line
  /* istanbul ignore next */
  _err.code = data?.code ? data?.code : name // eslint-disable-line

  return _err
}


export {
  Err,
  inherit
}
