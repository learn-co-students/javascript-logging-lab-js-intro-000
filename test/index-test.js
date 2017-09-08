const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')


describe('index', () => {
  const html = '<div></div>'
  const src = path.resolve(__dirname, '..', 'index.js')

  it('calls console.error()', done => {
    const spy = expect.spyOn(console, 'error').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      console.error('expected console.error to have been called')
      console.error.restore()
      done()
    })
  })

  it('calls console.log()', done => {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      console.log('expected console.log to have been called')
      console.log.restore()
      done()
    })
  })

  it('calls console.warn()', done => {
    const spy = expect.spyOn(console, 'warn').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      console.warn('expected console.warn to have been called')
      console.warn.restore()
      done()
    })
  })
})
