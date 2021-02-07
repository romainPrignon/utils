type MainstreamPath = `/${string}`

const isMainstream = (path: string): path is MainstreamPath => /^(\/[a-zA-Z0-9_-]*)*$/.test(path)


export {
  MainstreamPath,
  isMainstream
}
