import { FastifyInstance } from 'fastify'
import { bundleText } from 'modules/budler/bundle-text'
import { lintText } from 'modules/linter'
import { transpileText } from 'modules/transpiler'

export const codeBundleJs = (app: FastifyInstance) => {
  app.post<{
    Body: { code: string }
    Reply: { error: boolean; code?: string }
  }>('/code/bundle/js', async (request, reply) => {
    const linted = await lintText(request.body.code)
    if (!linted.error) {
      const transformed = transpileText(request.body.code)
      if (!transformed.error && transformed.code) {
        const out = await bundleText(transformed.code)
        reply.status(200).send(out)
        return
      }
      reply.status(200).send(transformed)
    } else {
      reply.status(200).send(linted)
    }
  })
}
