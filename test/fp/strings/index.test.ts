// test
import { concat, split } from '../../../src/fp/strings'
// tslint:disable-next-line: no-duplicate-imports
import * as strings from '../../../src/fp/strings'


describe('strings', () => {

  it('should export strings namespace', () => {
    expect(Object.entries(strings).length).toEqual(2)

    expect(strings.concat).toBeDefined()
    expect(strings.split).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(concat).toBeDefined()
    expect(split).toBeDefined()
  })
})
