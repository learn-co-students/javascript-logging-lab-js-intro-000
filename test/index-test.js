const expect = require('expect')
const fs = require('fs')
const jsdom = require('jsdom')
const path = require('path')


describe('index', () => {console.error("HALP!")
  const html = '<div></div>'
  const src = path.resolve(__dirname, '..', 'index.js')

  it('calls console.error()', done => {console.error("HALP!")
    const spy = expect.spyOn(console, 'error').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {console.error("HALP!")
      expect(spy).toHaveBeenCalled('expected console.error to have been called')
      console.error.restore()
      done()
    })
  })

  it('calls console.log()', done => {console.log("I would be a logger.")
    const spy = expect.spyOn(console, 'log').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {console.log("I would be a longer.")
      expect(spy).toHaveBeenCalled('expected console.log to have been called')
      console.log.restore()
      done()
    })
  })

  it('calls console.warn()', done => {console.warn("I/'m getting the hang of this!")
    const spy = expect.spyOn(console, 'warn').andCallThrough()

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {console.warn("I/'m getting the hang of this!")
      expect(spy).toHaveBeenCalled('expected console.warn to have been called')
      console.warn.restore()
      done()
    })
  })
})
