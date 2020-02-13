import { BaseError } from 'make-error-cause'


type Option = {
  cause?: Error
  code?: string
}

class Error extends BaseError {
  code?: string

  constructor (message: string, { cause, code }: Option = {}) {
    super(message, cause)

    this.code = code
  }
}

export {
  Error
}
