import { BaseError } from 'make-error-cause'


type ErrorOptions = {
  cause?: Error | globalThis.Error
  code?: string
}

class Error extends BaseError {
  code?: string

  constructor (message: string, opt?: ErrorOptions) {
    super(message, opt?.cause)

    this.code = opt?.code
  }
}

export {
  Error
}
