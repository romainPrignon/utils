import fs from 'fs'
import * as asyncIterable from '../asynciterable'


const createReadStream = asyncIterable.fromNodeStream(fs.createReadStream)


export {
  createReadStream
}

