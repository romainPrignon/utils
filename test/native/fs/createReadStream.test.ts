import { expectType } from 'tsd'

import { Readable } from 'stream'
import { AsyncIterable } from 'ix'

// test
import { createReadStream } from '../../../src/native/fs/createReadStream'

// mock
import fs from 'fs'
jest.mock('fs')

afterEach(() => {
  jest.restoreAllMocks()
})

describe('native/fs/createReadStream.ts', () => {
  describe('createReadStream()', () => {

    it('should be typed correctly', () => {
      // Mock
      jest.spyOn(fs, 'createReadStream').mockImplementation(() => {
        return new Readable() as any
      })

      expectType<AsyncIterable<string | Buffer>>(createReadStream('path'))
    })

    it('should return instance of AsyncIterable', async () => {
      // Arrange
      const path = 'path'
      const some = 'some'
      const content = 'content'

      // Mock
      jest.spyOn(fs, 'createReadStream').mockImplementation(() => {
        const r = new Readable()
        r.push(some)
        r.push(content)
        r.push(null)

        return r as any
      })

      // Act
      const output = createReadStream(path)

      // Assert
      expect(output).toBeInstanceOf(AsyncIterable)

      const res = await output.reduce({
        callback: (acc: string, o: string | Buffer) => acc + o.toString()
      })
      expect(res.toString()).toEqual(`${some}${content}`)
    })
  })
})
