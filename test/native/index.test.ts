// test
import { arrays, classes, dates, errors, fs, functions, numbers, objects, strings, utils } from '../../src/native'
// tslint:disable-next-line: no-duplicate-imports
import * as Native from '../../src/native'


describe('native', () => {

  it('should export Native namespace', () => {
    expect(Object.entries(Native).length).toEqual(10)

    expect(Native.arrays).toBeDefined()
    expect(Native.classes).toBeDefined()
    expect(Native.dates).toBeDefined()
    expect(Native.errors).toBeDefined()
    expect(Native.fs).toBeDefined()
    expect(Native.functions).toBeDefined()
    expect(Native.numbers).toBeDefined()
    expect(Native.objects).toBeDefined()
    expect(Native.strings).toBeDefined()
    expect(Native.utils).toBeDefined()
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
