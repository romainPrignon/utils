import { FileNotFoundError, Error } from '../../../src/native/errors'

// test
import { readFile } from '../../../src/native/fs/readFile'

// mock
import util from 'util'
jest.mock('util')

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
      jest.spyOn(util, 'promisify').mockImplementation(() => async () => {
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
      const encoding = 'encoding'
      const content = 'content'

      // Mock
      jest.spyOn(util, 'promisify').mockImplementation(() => async () => {
        return content
      })

      // Act
      const res = await readFile(path, encoding)

      // Assert
      expect(res).toEqual(content)
    })

    it('should throw FileNotFoundError', async () => {
      // Arrange
      const path = 'path'

      // Mock
      jest.spyOn(util, 'promisify').mockImplementation(() => async () => {
        throw new Error('ENOENT', { code: 'ENOENT' })
      })

      // Act Assert
      await expect(readFile(path)).rejects.toBeInstanceOf(FileNotFoundError)
    })

    it('should throw Error in any other case', async () => {
      // Arrange
      const path = 'path'

      // Mock
      jest.spyOn(util, 'promisify').mockImplementation(() => async () => {
        throw new Error('NOTENOENT', { code: 'NOTENOENT' })
      })

      // Act Assert
      await expect(readFile(path)).rejects.toBeInstanceOf(Error)
    })
  })
})
