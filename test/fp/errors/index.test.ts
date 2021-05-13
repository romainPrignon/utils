// test
import { Error } from '../../../src/fp/errors'
// tslint:disable-next-line: no-duplicate-imports
import * as errors from '../../../src/fp/errors'


describe('errors', () => {

  it('should export errors namespace', () => {
    expect(Object.entries(errors).length).toEqual(1)

    expect(errors.Error).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(Error).toBeDefined()
  })
})
