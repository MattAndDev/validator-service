import { lintText } from './lint-text'

describe('lintText', () => {
  it('Does error on non valid JavaScript', async () => {
    expect(await lintText('a::a')).toEqual({ error: true })
    expect(await lintText('var 4i = 5')).toEqual({ error: true })
  })
  it('Does not error on non critical errors if JavaScript is valid', async () => {
    expect(await lintText('new Promise((resolve, reject) => {})')).toEqual({
      error: false,
    })
    expect(await lintText('() => {}')).toEqual({ error: false })
    expect(await lintText('a')).toEqual({ error: false })
    expect(await lintText('undefined')).toEqual({ error: false })
    expect(await lintText('function empty () {}')).toEqual({ error: false })
  })
})
