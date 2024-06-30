// test
import { may, mayAsync, maybe } from '../../../src/fp/functions'
import * as functions from '../../../src/fp/functions'


describe('functions', () => {
  it('should export functions namespace', () => {
    expect(Object.entries(functions).length).toEqual(3)

    expect(functions.may).toBeDefined()
    expect(functions.mayAsync).toBeDefined()
    expect(functions.maybe).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(may).toBeDefined()
    expect(mayAsync).toBeDefined()
    expect(maybe).toBeDefined()
  })
})
