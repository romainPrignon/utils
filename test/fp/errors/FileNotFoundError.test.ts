import { expectType } from 'tsd'

// test
import { FileNotFoundError } from '../../../src/fp/errors'
import { FileNotFoundError as FileNotFoundErrorClass } from '../../../src/_internal/error/FileNotFoundError'


describe('fp/errors/index.ts', () => {
  describe('FileNotFoundError()', () => {
    const message = 'message'
    const err = new Error()
    const filename = 'filename'

    it('should be typed as FileNotFoundError', () => {
      expectType<FileNotFoundErrorClass>(FileNotFoundError(message, { code: 'ENOENT', cause: err, filename }))
    })

    it('should return an instance of FileNotFoundError', () => {
      const fileNotFoundError = FileNotFoundError(message, { code: 'ENOENT', cause: err, filename })

      expect(fileNotFoundError.message).toEqual(message)
      expect(fileNotFoundError.cause).toEqual(err)
      expect(fileNotFoundError.filename).toEqual(filename)
    })
  })
})
