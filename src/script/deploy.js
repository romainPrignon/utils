#! /usr/bin/env node

const shell = require('child_process').execSync

const [_, otpVal] = process.argv.slice(2)

shell('pinst --disable')
shell('npm run compile')
shell('npm run bundle')
shell(`npm publish --provenance --otp=${otpVal} bundle/`)
shell('pinst --enable')
