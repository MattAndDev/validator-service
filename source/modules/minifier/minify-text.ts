import { transformSync } from 'esbuild'

export const minifyText = async (
    code: string
): Promise<{
    error: boolean
    code?: string
}> => {
    try {
        let resp = await transformSync(code, {
            minify: true,
            loader: 'js',
            target: "es2017"
        })
        return { error: false, code: resp.code.trim() }
    } catch {
        return { error: true }
    }
}
