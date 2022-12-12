import { FastifyInstance } from 'fastify'
import {minifyText} from "modules/minifier";

export const codeMinifyCss = (app: FastifyInstance) => {
  app.post<{
      Body: { code: string }
      Reply: { error: boolean; code?: string }
  }>('/code/minify/css', async (request, reply) => {
    const minified = await minifyText(request.body.code, 'css')
    reply.status(200).send(minified)
  })
}
