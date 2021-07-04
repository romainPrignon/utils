// test
// import {  } from '../../../src/oop/objects'
// tslint:disable-next-line: no-duplicate-imports
import * as objects from '../../../src/oop/objects'


describe('objects', () => {
  it('should export objects namespace', () => {
    expect(Object.entries(objects).length).toEqual(0)
  })
})
