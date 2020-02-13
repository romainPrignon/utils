// test
// import {  } from '../../../src/native/strings'
// tslint:disable-next-line: no-duplicate-imports
import * as strings from '../../../src/native/strings'


describe('strings', () => {

  it('should export strings namespace', () => {
    expect(Object.entries(strings).length).toEqual(0)
  })
})
