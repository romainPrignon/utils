// test
import { from } from '../../../src/oop/asynciterable'
import * as asynciterable from '../../../src/oop/asynciterable'


describe('asynciterable', () => {
  it('should export asynciterable namespace', () => {
    expect(Object.entries(asynciterable).length).toEqual(1)

    expect(asynciterable.from).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(from).toBeDefined()
  })
})
