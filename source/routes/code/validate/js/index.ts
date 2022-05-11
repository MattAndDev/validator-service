import { FastifyInstance } from 'fastify'
import { lintText } from 'modules/linter'

export const codeValidateJs = (app: FastifyInstance) => {
  app.post<{
    Body: { code: string }
    Reply: { error: boolean; code: string }
  }>('/code/validate/js', async (request, reply) => {
    const linted = await lintText(request.body.code)
    reply.status(200).send({ ...linted, code: request.body.code })
  })
}
