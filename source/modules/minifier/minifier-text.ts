import { transformSync } from 'esbuild'

export const minifyText = (
    code: string
): {
    error: boolean
    code?: string
} => {
    try {
        let resp = transformSync(code, {
            minify: true,
            loader: 'js',
            target: "es2017"
        })
        return { error: false, code: resp.code }
    } catch {
        return { error: true }
    }
}
