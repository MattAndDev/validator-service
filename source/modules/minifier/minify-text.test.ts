import { minifyText } from "./minify-text";

describe('minifyText', () => {
  it('Does error on non valid JavaScript', async () => {
    expect(await minifyText('a::a')).toEqual({ error: true })
    expect(await minifyText('var 4i = 5')).toEqual({ error: true })
  })
  it('Does not error on non critical errors if JavaScript is valid', async () => {
    expect(await minifyText('() => {}')).toEqual({ code: "", error: false })
    expect(await minifyText('undefined')).toEqual({ code: "", error: false })
    expect(await minifyText('a')).toEqual({ code: "a;", error: false })
    expect(await minifyText('function empty () {}')).toEqual({ code:  "function empty(){}", error: false })
    expect(await minifyText('((w) => { return w; })(window)')).toMatchObject({ code: /(\s=>\s)(window)/i, error: false })
  })
})
