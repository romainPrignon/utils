import { BaseError } from 'make-error-cause'


type Option = {
  cause?: Error
  filename: string
}

class FileNotFoundError extends BaseError {
  filename: string

  constructor (message: string, opt: Option) {
    super(message, opt.cause)

    this.filename = opt.filename
  }
}

export {
  FileNotFoundError
}
