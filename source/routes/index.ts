import { FastifyInstance } from 'fastify'
import { codeValidateJs, codeBundleJs } from './code'
export const routes = (fastify: FastifyInstance) => {
  codeValidateJs(fastify)
  codeBundleJs(fastify)
}
