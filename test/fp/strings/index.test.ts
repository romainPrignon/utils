// test
import { concat } from '../../../src/fp/strings'
import * as strings from '../../../src/fp/strings'


describe('strings', () => {
  it('should export strings namespace', () => {
    expect(Object.entries(strings).length).toEqual(1)

    expect(strings.concat).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(concat).toBeDefined()
  })
})
