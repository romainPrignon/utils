import { FileNotFoundError as _FileNotFoundError } from '../../_internal/error/FileNotFoundError'

import { callable } from '../classes/callable'

// @ts-ignore
const FileNotFoundError = callable(_FileNotFoundError)


export {
  FileNotFoundError
}