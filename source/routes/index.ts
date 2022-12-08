import { FastifyInstance } from 'fastify'
import { codeValidateJs, codeBundleJs, codeMinifyJs } from './code'
export const routes = (fastify: FastifyInstance) => {
  codeValidateJs(fastify)
  codeBundleJs(fastify)
  codeMinifyJs(fastify)
}
