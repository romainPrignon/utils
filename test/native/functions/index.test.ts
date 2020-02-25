// test
import { id, memo, noop, optional } from '../../../src/native/functions'
// tslint:disable-next-line: no-duplicate-imports
import * as functions from '../../../src/native/functions'


describe('functions', () => {

  it('should export functions namespace', () => {
    expect(Object.entries(functions).length).toEqual(4)

    expect(functions.id).toBeDefined()
    expect(functions.memo).toBeDefined()
    expect(functions.noop).toBeDefined()
    expect(functions.optional).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(id).toBeDefined()
    expect(memo).toBeDefined()
    expect(noop).toBeDefined()
    expect(optional).toBeDefined()
  })
})
