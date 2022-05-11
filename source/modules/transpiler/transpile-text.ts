import { transformSync } from '@babel/core'

export const transpileText = (
  code: string
): {
  error: boolean
  code?: string
} => {
  try {
    // @TODO
    // this babel setup won't replace built ins (f.ex. array.flat)
    // those methods will go unchecked and break in older browsers
    const transformed = transformSync(code, {
      browserslistEnv: 'defaults, not dead',
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: '3.22.4',
          },
        ],
      ],
      sourceType: 'script',
      compact: true,
    })
    if (!transformed || !('code' in transformed) || transformed.code === null) {
      return { error: true }
    }
    return {
      code: transformed.code,
      error: false,
    }
  } catch {
    return { error: true }
  }
}
