import { BaseError } from 'make-error-cause'


export type ErrorOption = {
  cause?: Error | globalThis.Error
  code: string
}

class Error extends BaseError {
  code: string

  constructor (message: string, opt: ErrorOption) {
    super(message, opt.cause)

    this.code = opt.code
  }
}

export {
  Error
}
