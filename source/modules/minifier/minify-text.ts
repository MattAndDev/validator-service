import { Loader, transformSync } from 'esbuild'

export const minifyText = async (
    code: string,
    loader: Loader = 'js'
): Promise<{
    error: boolean
    code?: string
}> => {
    try {
        const resp = await transformSync(code, {
            minify: true,
            loader: loader,
            target: "es2017"
        })
        return { error: false, code: resp.code.trim() }
    } catch {
        return { error: true }
    }
}
