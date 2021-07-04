// test
// import {  } from '../../../src/oop/classes'
// tslint:disable-next-line: no-duplicate-imports
import * as classes from '../../../src/oop/classes'


describe('classes', () => {
  it('should export classes namespace', () => {
    expect(Object.entries(classes).length).toEqual(0)
  })
})
