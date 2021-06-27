// test
import { optional, errorify } from '../../../src/oop/functions'
// tslint:disable-next-line: no-duplicate-imports
import * as functions from '../../../src/oop/functions'


describe('functions', () => {

  it('should export functions namespace', () => {
    expect(Object.entries(functions).length).toEqual(2)

    expect(functions.optional).toBeDefined()
    expect(functions.errorify).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(optional).toBeDefined()
    expect(errorify).toBeDefined()
  })
})
