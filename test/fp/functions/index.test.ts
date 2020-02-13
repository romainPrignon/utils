// test
import { may, optional } from '../../../src/fp/functions'
// tslint:disable-next-line: no-duplicate-imports
import * as functions from '../../../src/fp/functions'


describe('functions', () => {

  it('should export functions namespace', () => {
    expect(Object.entries(functions).length).toEqual(2)

    expect(functions.may).toBeDefined()
    expect(functions.optional).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(may).toBeDefined()
    expect(optional).toBeDefined()
  })
})
