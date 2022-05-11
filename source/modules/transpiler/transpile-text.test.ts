import { transpileText } from './transpile-text'

describe('transpileText', () => {
  it('Adds polyfills', () => {
    expect(transpileText('new Promise((resolve,reject) => {})')).toEqual({
      code: 'require("core-js/modules/es.object.to-string.js");require("core-js/modules/es.promise.js");new Promise(function(resolve,reject){});',
      error: false,
    })
  })
})
