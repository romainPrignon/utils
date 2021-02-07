// test
import { arrays, classes, dates, errors, fs, functions, numbers, objects, strings, utils } from '../../src/fp'
// tslint:disable-next-line: no-duplicate-imports
import * as fp from '../../src/fp'


describe('fp', () => {

  it('should export fp namespace', () => {
    expect(Object.entries(fp).length).toEqual(10)

    expect(fp.arrays).toBeDefined()
    expect(fp.classes).toBeDefined()
    expect(fp.dates).toBeDefined()
    expect(fp.errors).toBeDefined()
    expect(fp.fs).toBeDefined()
    expect(fp.functions).toBeDefined()
    expect(fp.numbers).toBeDefined()
    expect(fp.objects).toBeDefined()
    expect(fp.strings).toBeDefined()
    expect(fp.utils).toBeDefined()
  })

  it('should export all namespace', () => {
    expect(arrays).toBeDefined()
    expect(classes).toBeDefined()
    expect(dates).toBeDefined()
    expect(errors).toBeDefined()
    expect(fs).toBeDefined()
    expect(functions).toBeDefined()
    expect(numbers).toBeDefined()
    expect(objects).toBeDefined()
    expect(strings).toBeDefined()
    expect(utils).toBeDefined()
  })
})
