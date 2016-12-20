const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')


describe('index', () => {
  const html = '<div></div>'
  const src = path.resolve(__dirname, '..', 'index.js')

  it(console.error("HALP!"), done => {
    const spy = expect.spyOn(console, 'error').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled(console.error("HALP!"))
      console.error.restore()
      done()
    })
  })

  it(console.log("We have passed the console.error test."), done => {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled(console.log("We have passed the console.error test."))
      console.log.restore()
      done()
    })
  })

  it(console.warn("HURRY UP!"), done => {
    const spy = expect.spyOn(console, 'warn').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled(console.warn("HURRY UP!"))
      console.warn.restore()
      done()
    })
  })
})
