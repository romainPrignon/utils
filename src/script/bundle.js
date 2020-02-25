#! /usr/bin/env node

const { resolve } = require('path')
const shell = require('child_process').execSync
const { writeFileSync } = require('fs')
const { omit } = require('lodash')

const [bundleDir, ...rest] = process.argv.slice(2)
const pkg = require(resolve('package.json'))

shell(`rm -rf ${bundleDir}`)
shell(`mkdir -p ${bundleDir}`)
shell(`cp -r ${pkg.source}/* ${bundleDir}`)
pkg.assets.forEach(asset => {
  shell(`cp -r ${asset} ${bundleDir}/${asset}`)
})

const bundlePkg = require(resolve(`${bundleDir}/package.json`))
const newBundlePkg = {
  ...bundlePkg,
  scripts: omit(bundlePkg.scripts, ['prepublishOnly', 'postpublish'])
}

shell(`echo '${JSON.stringify(newBundlePkg, null, 2)}' > ${bundleDir}/package.json`)
