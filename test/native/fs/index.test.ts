// test
import { readFile } from '../../../src/native/fs'
// tslint:disable-next-line: no-duplicate-imports
import * as fs from '../../../src/native/fs'


describe('fs', () => {

  it('should export fs namespace', () => {
    expect(Object.entries(fs).length).toEqual(1)

    expect(fs.readFile).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(readFile).toBeDefined()
  })
})