// test
// import {  } from '../../../src/oop/dates'
// tslint:disable-next-line: no-duplicate-imports
import * as dates from '../../../src/oop/dates'


describe('dates', () => {

  it('should export dates namespace', () => {
    expect(Object.entries(dates).length).toEqual(0)
  })
})
