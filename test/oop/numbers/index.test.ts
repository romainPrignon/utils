// test
import { Number } from '../../../src/oop/numbers'
import * as numbers from '../../../src/oop/numbers'


describe('numbers', () => {
  it('should export numbers namespace', () => {
    expect(Object.entries(numbers).length).toEqual(1)

    expect(numbers.Number).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(Number).toBeDefined()
  })
})
