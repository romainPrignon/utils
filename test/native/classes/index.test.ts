// test
// import {  } from '../../../src/native/classes'
// tslint:disable-next-line: no-duplicate-imports
import * as classes from '../../../src/native/classes'


describe('classes', () => {

  it('should export classes namespace', () => {
    expect(Object.entries(classes).length).toEqual(0)
  })
})
