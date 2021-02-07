import { isMainstream, MainstreamPath as MainstreamPathType } from '../_internal/path/isMainstream'
import { NonEmptyString } from './nonEmptyString'


const MainstreamPath = {
  ...NonEmptyString.withGuard((val): val is MainstreamPathType => isMainstream(val)),
  name: 'MainstreamPath',
  tag: 'mainstreamPath'
}


export {
  MainstreamPath
}
