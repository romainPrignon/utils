// test
import { Err } from '../../../src/oop/errors'
import * as errors from '../../../src/oop/errors'


describe('errors', () => {
  it('should export errors namespace', () => {
    expect(Object.entries(errors).length).toEqual(1)

    expect(errors).toBeDefined()
    expect(errors.Err).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(Err).toBeDefined()
  })
})
