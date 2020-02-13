// test
import { head, tail } from '../../../src/native/arrays'
// tslint:disable-next-line: no-duplicate-imports
import * as arrays from '../../../src/native/arrays'


describe('arrays', () => {

  it('should export arrays namespace', () => {
    expect(Object.entries(arrays).length).toEqual(2)

    expect(arrays.head).toBeDefined()
    expect(arrays.tail).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(head).toBeDefined()
    expect(tail).toBeDefined()
  })
})
