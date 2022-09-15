import { ESLint } from 'eslint'

export const lintText = async (
  code: string,
  opts: ESLint.Options = {
    useEslintrc: false,
    baseConfig: {
      extends: 'eslint:recommended',
      env: {
        browser: true,
        es2017: true,
      },
    },
  }
): Promise<{
  error: boolean
}> => {
  const linter = new ESLint(opts)
  // @TODO
  // eslint output is very verbose and has A LOT of information about what is wrong
  // this data coudl be formatted and returned to enhance debugging
  const output = await linter.lintText(code)
  return {
    error: !!output[0].fatalErrorCount,
  }
}
