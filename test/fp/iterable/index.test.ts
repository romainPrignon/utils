// test
import { from } from '../../../src/fp/iterable'
// tslint:disable-next-line: no-duplicate-imports
import * as iterable from '../../../src/fp/iterable'


describe('iterable', () => {
  it('should export iterable namespace', () => {
    expect(Object.entries(iterable).length).toEqual(1)

    expect(iterable.from).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(from).toBeDefined()
  })
})
