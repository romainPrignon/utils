// test
import { imut, mut } from '../../../src/native/utils'
// tslint:disable-next-line: no-duplicate-imports
import * as utils from '../../../src/native/utils'


describe('utils', () => {

  it('should export utils namespace', () => {
    expect(Object.entries(utils).length).toEqual(2)

    expect(utils.imut).toBeDefined()
    expect(utils.mut).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(imut).toBeDefined()
    expect(mut).toBeDefined()
  })
})
