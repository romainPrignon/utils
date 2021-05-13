import fs from 'fs'
import util from 'util'
import { Error } from '../errors'

type ReadFile = (path: string, encoding?: string) => Promise<string | Buffer>
const readFile: ReadFile = async (path, encoding) => {

  const readFileAsync = util.promisify(fs.readFile)

  try {
    return await readFileAsync(path, encoding)
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
