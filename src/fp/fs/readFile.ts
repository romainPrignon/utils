import fs from 'fs/promises'
import { Error } from '../errors'

type ReadFile = (path: string, options?: { encoding: BufferEncoding }) => Promise<string | Buffer>
const readFile: ReadFile = async (path, options) => {

  // may
  try {
    // cond
    if (options) {
      return await fs.readFile(path, { encoding: options.encoding })
    } else {
      return await fs.readFile(path)
    }

  } catch (err) {
    if (err.code === 'ENOENT') {
      throw Error(err.message, { code: err.code, cause: err })
    }

    throw err
  }
}


export {
  readFile
}
