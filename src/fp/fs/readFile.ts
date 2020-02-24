import * as l from 'lodash' // TODO: curry
import fs from 'fs'
import util from 'util'
import { FileNotFoundError } from '../errors'


const readFile = async (path: string , encoding?: string): Promise<string> => {

  const readFileAsync = util.promisify(fs.readFile)

  try {
    if (encoding) {
      return await readFileAsync(path, encoding)
    } else {
      return await readFileAsync(path, 'utf8')
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      throw FileNotFoundError(err.message, { cause: err, filename: path })
    }

    throw err
  }
}


export {
  readFile
}
