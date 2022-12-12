import { minifyText } from "./minify-text";

describe('minifyText', () => {
  it('Does error on non valid JavaScript', async () => {
    expect(await minifyText('a::a', 'js')).toEqual({ error: true })
    expect(await minifyText('var 4i = 5', 'js')).toEqual({ error: true })
  })
  it('Does not error on non critical errors if JavaScript is valid', async () => {
    expect(await minifyText('() => {}', 'js')).toEqual({ code: "", error: false })
    expect(await minifyText('undefined', 'js')).toEqual({ code: "", error: false })
    expect(await minifyText('a', 'js')).toEqual({ code: "a;", error: false })
    expect(await minifyText('function empty () {}', 'js')).toEqual({ code:  "function empty(){}", error: false })
    expect(await minifyText('((w) => { return w; })(window)', 'js')).toMatchObject({ code: /(\s=>\s)(window)/i, error: false })
  })
})
