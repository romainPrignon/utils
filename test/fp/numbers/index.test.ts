// test
import { isMultipleOf } from '../../../src/fp/numbers'
import * as numbers from '../../../src/fp/numbers'


describe('numbers', () => {
  it('should export numbers namespace', () => {
    expect(Object.entries(numbers).length).toEqual(1)

    expect(numbers.isMultipleOf).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(isMultipleOf).toBeDefined()
  })
})
