const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')


describe('index', () => {
  const html = '<div></div>'
  const src = path.resolve(__dirname, '..', 'index.js')

  it('calls console.error()', done => {
    const spy = expect.spyOn(console, 'error').andCallThrough()
console.error("Help me!")
    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.error to have been called')
      console.error.restore()
      done()
    })
  })

  it('calls console.log()', done => {
    const spy = expect.spyOn(console, 'log').andCallThrough()
console.log("Hey what's this?")
    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.log to have been called')
      console.log.restore()
      done()
    })
  })

  it('calls console.warn()', done => {
    const spy = expect.spyOn(console, 'warn').andCallThrough()
console.warn("If you keep doing that you will die")
    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.warn to have been called')
      console.warn.restore()
      done()
    })
  })
})
