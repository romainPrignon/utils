import { Error, ErrorOption } from './Error'


type FileNotFoundErrorOption = {
  cause?: Error | globalThis.Error
  filename: string
} & ErrorOption

class FileNotFoundError extends Error {
  filename: string

  constructor (message: string, opt: FileNotFoundErrorOption) {
    super(message, opt)

    this.filename = opt.filename
  }
}


export {
  FileNotFoundError
}
