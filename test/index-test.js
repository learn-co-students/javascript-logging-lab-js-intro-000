const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')


describe('index', () => {
  const html = '<div></div>'
  const src = path.resolve(__dirname, '..', 'index.js')

  it('calls console.error()', done => {
  //it(console.error("HALP!"), done => {
    const spy = expect.spyOn(console, 'error').andCallThrough()
    // Added by MK
    console.error("HALP!");
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
    // Added by MK
    console.log("HALP!");
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
    // Added by MK
    console.warn("HALP!");

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.warn to have been called')
      console.warn.restore()
      done()
    })
  })
})
