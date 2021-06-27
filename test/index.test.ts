// test
import { fp, oop, runtypes, zod } from '../src'
// tslint:disable-next-line: no-duplicate-imports
import * as Utils from '../src'


describe('index', () => {

  describe('Utils', () => {
    it('should export namespaces', () => {
      expect(Utils.fp).toBeDefined()
      expect(Utils.oop).toBeDefined()
      expect(Utils.runtypes).toBeDefined()
      expect(Utils.zod).toBeDefined()
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

  describe('oop', () => {
    it('should export oop namespace', () => {
      expect(Object.entries(oop).length).toEqual(10)

      expect(oop.arrays).toBeDefined()
      expect(oop.classes).toBeDefined()
      expect(oop.dates).toBeDefined()
      expect(oop.errors).toBeDefined()
      expect(oop.fs).toBeDefined()
      expect(oop.functions).toBeDefined()
      expect(oop.numbers).toBeDefined()
      expect(oop.objects).toBeDefined()
      expect(oop.strings).toBeDefined()
    })
  })

  describe('runtypes', () => {
    it('should export runtypes namespace', () => {
      expect(runtypes.Promise).toBeDefined()
    })
  })

  describe('zod', () => {
    it('should export zod namespace', () => {
      expect(zod.Promise).toBeDefined()
    })
  })
})
