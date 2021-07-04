// test
import { readFile } from '../../../src/fp/fs/readFile'

// mock
import fs from 'fs/promises'
jest.mock('fs/promises')

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

    it('should throw instance of Error', async () => {
      // Arrange
      const path = 'path'
      const message = 'some-message'
      const rootError = new Error(message)

      // Mock
      jest.spyOn(fs, 'readFile').mockImplementation(async () => {
        throw rootError
      })

      // Act Assert
      try {
        await readFile(path)
      } catch (err) {
        expect(err.message).toEqual(rootError.message)
        expect(err.cause).toEqual(rootError)
      }
    })
  })
})
