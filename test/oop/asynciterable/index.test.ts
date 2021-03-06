// test
import { from, fromNodeStream } from '../../../src/oop/asynciterable'
// tslint:disable-next-line: no-duplicate-imports
import * as asynciterable from '../../../src/oop/asynciterable'


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
