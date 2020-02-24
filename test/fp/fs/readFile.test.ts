import { Error } from '../../../src/fp/errors'

// test
import { readFile } from '../../../src/fp/fs/readFile'

// mock
import util from 'util'
jest.mock('util')

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
      const err = Error('ENOENT', { code: 'ENOENT' })

      // Mock
      jest.spyOn(util, 'promisify').mockImplementation(() => async () => {
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
      jest.spyOn(util, 'promisify').mockImplementation(() => async () => {
        throw err
      })

      // Act Assert
      await expect(readFile(path)).rejects.toEqual(err)
    })
  })
})
