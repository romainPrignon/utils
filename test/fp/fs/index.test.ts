// test
import { createReadStream, readFile } from '../../../src/fp/fs'
// tslint:disable-next-line: no-duplicate-imports
import * as fs from '../../../src/fp/fs'


describe('fs', () => {
  it('should export fs namespace', () => {
    expect(Object.entries(fs).length).toEqual(2)

    expect(fs.readFile).toBeDefined()
    expect(fs.createReadStream).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(readFile).toBeDefined()
    expect(createReadStream).toBeDefined()
  })
})
