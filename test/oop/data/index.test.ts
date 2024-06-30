// test
import { imut, mut } from '../../../src/oop/data'
import * as data from '../../../src/oop/data'


describe('data', () => {
  it('should export data namespace', () => {
    expect(Object.entries(data).length).toEqual(2)

    expect(data.imut).toBeDefined()
    expect(data.mut).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(imut).toBeDefined()
    expect(mut).toBeDefined()
  })
})
