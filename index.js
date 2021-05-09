const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')

describe('index', () => {
  console.log()
})


it('calls console.error()', () => {
  console.warn()
})

jsdom({
  src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  console.warn()
})
