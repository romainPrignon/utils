// test
import { may, mayAsync, optional, errorify } from '../../../src/fp/functions'
// tslint:disable-next-line: no-duplicate-imports
import * as functions from '../../../src/fp/functions'


describe('functions', () => {
  it('should export functions namespace', () => {
    expect(Object.entries(functions).length).toEqual(4)

    expect(functions.may).toBeDefined()
    expect(functions.mayAsync).toBeDefined()
    expect(functions.optional).toBeDefined()
    expect(functions.errorify).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(may).toBeDefined()
    expect(mayAsync).toBeDefined()
    expect(optional).toBeDefined()
    expect(errorify).toBeDefined()
  })
})
