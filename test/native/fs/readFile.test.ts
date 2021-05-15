import { Error as UtilError } from '../../../src/native/errors'

// test
import { readFile } from '../../../src/native/fs/readFile'

// mock
import fs from 'fs/promises'
jest.mock('fs/promises')

afterEach(() => {
  jest.restoreAllMocks()
})

describe('native/fs/readFile.ts', () => {
  describe('readFile()', () => {

    it('should return file content with utf8 encoding', async () => {
      // Arrange
      const path = 'path'
      const content = 'content'

      // Mock
      jest.spyOn(fs, 'readFile').mockImplementation(async () => {
        return content
      })

      // Act
      const res = await readFile(path)

      // Assert
      expect(res).toEqual(content)
    })

    it('should throw instance of Error', async () => {
      // Arrange
      const path = 'path'
      const err = new Error('some-error')

      // Mock
      jest.spyOn(fs, 'readFile').mockImplementation(async () => {
        throw err
      })

      // Act Assert
      await expect(readFile(path)).rejects.toBeInstanceOf(UtilError)
    })
  })
})
