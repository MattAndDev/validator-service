import { bundleText } from './bundle-text'

describe('lintText', () => {
  it('Does error on non valid JavaScript', async () => {
    expect(
      await bundleText(
        'require("core-js/modules/es6.object.to-string.js");require("core-js/modules/es6.promise.js");new Promise(function(resolve,reject){});'
      )
    ).toEqual({ error: true })
  })
})
