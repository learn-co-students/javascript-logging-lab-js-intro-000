const expect = require('expect')  //except library
const fs = require('fs')          //fs library
const jsdom = require('jsdom')    //jsdom library
const path = require('path')      //path library


describe('index', () => {         //a function provided by our test runner (we are using)..
  const html = '<div></div>'      // ..Mocha in this case. This is our sandbox
  const src = path.resolve(__dirname, '..', 'index.js')

  it('calls console.error()', done => {   //this is like a call to do something..
    const spy = expect.spyOn(console, 'error').andCallThrough() //.. in this case, we are calling..
                                          //..the console.error()
    jsdom.env(html, [src], {              // this it() function is calling for behvior, not information
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.error to have been called')
      console.error.restore()
      done()
    })
  })

  it('calls console.log()', done => {
    const spy = expect.spyOn(console, 'log').andCallThrough()

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

    jsdom.env(html, [src], {
      virtualConsole: jsdom.createVirtualConsole().sendTo(console)
    }, (err, window) => {
      expect(spy).toHaveBeenCalled('expected console.warn to have been called')
      console.warn.restore()
      done()
    })
  })
})
