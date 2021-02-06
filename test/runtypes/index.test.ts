// test
import { Promise } from '../../src/runtypes'
// tslint:disable-next-line: no-duplicate-imports
import * as Runtype from '../../src/runtypes'


describe('runtype', () => {

  it('should export Runtype namespace', () => {
    expect(Object.entries(Runtype).length).toEqual(1)
    expect(Runtype.Promise).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(Promise).toBeDefined()
  })
})
