#! /usr/bin/env node

const shell = require('child_process').execSync

shell('pinst --disable')
shell('npm run compile')
shell('npm run bundle')
shell('npm publish bundle/')
shell('pinst --enable')
