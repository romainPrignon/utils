import { expectType } from 'tsd'

// test
import { FileNotFoundError } from '../../../src/native/errors'


describe('native/errors/index.ts', () => {
  describe('new FileNotFoundError', () => {
    const message = 'message'
    const err = new Error()
    const filename = 'filename'

    it('should be typed as FileNotFoundError', () => {
      expectType<FileNotFoundError>(new FileNotFoundError(message, { cause: err, filename }))
    })

    it('should return an instance of FileNotFoundError', () => {
      const fileNotFoundError = new FileNotFoundError(message, { cause: err, filename })

      expect(fileNotFoundError).toBeInstanceOf(FileNotFoundError)
    })
  })
})
