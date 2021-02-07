// test
import { fp, native, runtypes } from '../src'
// tslint:disable-next-line: no-duplicate-imports
import * as Utils from '../src'


describe('index', () => {

  describe('Utils', () => {
    it('should export namespaces', () => {
      expect(Utils.fp).toBeDefined()
      expect(Utils.native).toBeDefined()
      expect(Utils.runtypes).toBeDefined()
    })
  })

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
    })
  })

  describe('native', () => {
    it('should export native namespace', () => {
      expect(Object.entries(native).length).toEqual(10)

      expect(native.arrays).toBeDefined()
      expect(native.classes).toBeDefined()
      expect(native.dates).toBeDefined()
      expect(native.errors).toBeDefined()
      expect(native.fs).toBeDefined()
      expect(native.functions).toBeDefined()
      expect(native.numbers).toBeDefined()
      expect(native.objects).toBeDefined()
      expect(native.strings).toBeDefined()
    })
  })

  describe('runtypes', () => {
    it('should export runtypes namespace', () => {
      expect(runtypes.Promise).toBeDefined()
    })
  })
})
