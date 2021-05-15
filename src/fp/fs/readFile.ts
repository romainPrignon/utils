import fs from 'fs/promises'
import { errorify } from '../functions'


const readFile = errorify(fs.readFile)


export {
  readFile
}
