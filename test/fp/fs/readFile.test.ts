import { Error } from '../../../src/fp/errors'

// test
import { readFile } from '../../../src/fp/fs/readFile'

// mock
import fs from 'fs/promises'
jest.mock('fs')

afterEach(() => {
  jest.restoreAllMocks()
})

describe('fp/fs/readFile.ts', () => {
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

    it('should return file content with specified encoding', async () => {
      // Arrange
      const path = 'path'
      const encoding = 'utf8'
      const content = 'content'

      // Mock
      jest.spyOn(fs, 'readFile').mockImplementation(async () => {
        return content
      })

      // Act
      const res = await readFile(path, { encoding })

      // Assert
      expect(res).toEqual(content)
    })

    it('should throw FileNotFoundError', async () => {
      // Arrange
      const path = 'path'
      const err = Error('ENOENT', { code: 'ENOENT' })

      // Mock
      jest.spyOn(fs, 'readFile').mockImplementation(async () => {
        throw err
      })

      // Act Assert
      await expect(readFile(path)).rejects.toEqual(err)
    })

    it('should throw Error in any other case', async () => {
      // Arrange
      const path = 'path'
      const err = Error('NOTENOENT', { code: 'NOTENOENT' })

      // Mock
      jest.spyOn(fs, 'readFile').mockImplementation(async () => {
        throw err
      })

      // Act Assert
      await expect(readFile(path)).rejects.toEqual(err)
    })
  })
})
