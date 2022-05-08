// test
import { arrays, classes, dates, errors, fs, functions, numbers, objects, strings, data, struct } from '../../src/oop'
// tslint:disable-next-line: no-duplicate-imports
import * as Native from '../../src/oop'


describe('oop', () => {
  it('should export Native namespace', () => {
    expect(Object.entries(Native).length).toEqual(11)

    expect(Native.arrays).toBeDefined()
    expect(Native.classes).toBeDefined()
    expect(Native.dates).toBeDefined()
    expect(Native.errors).toBeDefined()
    expect(Native.fs).toBeDefined()
    expect(Native.functions).toBeDefined()
    expect(Native.numbers).toBeDefined()
    expect(Native.objects).toBeDefined()
    expect(Native.strings).toBeDefined()
    expect(Native.data).toBeDefined()
    expect(Native.struct).toBeDefined()
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
    expect(data).toBeDefined()
    expect(struct).toBeDefined()
  })
})
