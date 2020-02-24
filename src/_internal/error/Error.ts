import { BaseError } from 'make-error-cause'


type Option = {
  cause?: Error | globalThis.Error
  code: string
}

class Error extends BaseError {
  code: string

  constructor (message: string, opt: Option) {
    super(message, opt.cause)

    this.code = opt.code
  }
}

export {
  Error
}
