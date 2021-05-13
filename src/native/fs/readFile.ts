import fs from 'fs/promises'
import { Error } from '../errors'

type ReadFile = (path: string, options?: { encoding: BufferEncoding }) => Promise<string | Buffer>
const readFile: ReadFile = async (path, options) => {

  try {
    if (options) {
      return await fs.readFile(path, { encoding: options.encoding })
    } else {
      return await fs.readFile(path)
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw new Error(err.message, { code: err.code, cause: err })
    }

    throw err
  }
}


export {
  readFile
}
