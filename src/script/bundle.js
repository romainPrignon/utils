#! /usr/bin/env node

const { resolve } = require('path')
const shell = require('child_process').execSync

const [bundleDir, ..._rest] = process.argv.slice(2)
const pkg = require(resolve('package.json'))

shell(`rm -rf ${bundleDir}`)
shell(`mkdir -p ${bundleDir}`)

shell(`cp -r ${pkg.source}/* ${bundleDir}`)

pkg.assets.forEach(asset => {
  shell(`cp -r ${asset} ${bundleDir}/${asset}`)
})

Object.values(pkg.bin).forEach(bin => {
  shell(`chmod a+x ${bin}`)
})
