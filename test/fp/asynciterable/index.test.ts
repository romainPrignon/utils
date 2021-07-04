// test
import { from, fromNodeStream } from '../../../src/fp/asynciterable'
// tslint:disable-next-line: no-duplicate-imports
import * as asynciterable from '../../../src/fp/asynciterable'


describe('asynciterable', () => {
  it('should export asynciterable namespace', () => {
    expect(Object.entries(asynciterable).length).toEqual(2)

    expect(asynciterable.from).toBeDefined()
    expect(asynciterable.fromNodeStream).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(from).toBeDefined()
    expect(fromNodeStream).toBeDefined()
  })
})
