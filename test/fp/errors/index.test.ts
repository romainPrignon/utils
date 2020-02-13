// test
import { FileNotFoundError, Error } from '../../../src/fp/errors'
// tslint:disable-next-line: no-duplicate-imports
import * as errors from '../../../src/fp/errors'


describe('errors', () => {

  it('should export errors namespace', () => {
    expect(Object.entries(errors).length).toEqual(2)

    expect(errors.FileNotFoundError).toBeDefined()
    expect(errors.Error).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(FileNotFoundError).toBeDefined()
    expect(Error).toBeDefined()
  })
})
