import { OutputOptions, rollup } from 'rollup'
import * as commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { unlinkSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const outOpts: OutputOptions = {
  format: 'iife',
}

export const bundleText = async (code: string) => {
  const localFile = resolve(__dirname, './test.js')
  writeFileSync(localFile, code)
  try {
    // create a bundle
    const bundle = await rollup({
      input: resolve(__dirname, './test.js'),
      treeshake: false,
      plugins: [
        nodeResolve({ moduleDirectories: [resolve('./node_modules')] }),
        // @ts-ignore
        commonjs(),
      ],
    })

    const { output } = await bundle.generate(outOpts)
    await bundle.close()
    await unlinkSync(localFile)
    return { error: false, code: output[0].code }
  } catch (error) {
    return { error: true }
  }
}
