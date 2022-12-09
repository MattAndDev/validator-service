import { FastifyInstance } from 'fastify'
import {minifyText} from "modules/minifier";

export const codeMinifyJs = (app: FastifyInstance) => {
  app.post<{
      Body: { code: string }
      Reply: { error: boolean; code?: string }
  }>('/code/minify/js', async (request, reply) => {
    const minified = await minifyText(request.body.code)
    reply.status(200).send(minified)
  })
}
