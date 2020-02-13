// test
// import {  } from '../../../src/native/dates'
// tslint:disable-next-line: no-duplicate-imports
import * as dates from '../../../src/native/dates'


describe('dates', () => {

  it('should export dates namespace', () => {
    expect(Object.entries(dates).length).toEqual(0)
  })
})
