import { BaseError } from 'make-error-cause'


type Option = {
  cause?: Error
  filename?: string
}

class FileNotFoundError extends BaseError {
  filename?: string

  constructor (message: string, { cause, filename }: Option) {
    super(message, cause)

    this.filename = filename
  }
}

export {
  FileNotFoundError
}
