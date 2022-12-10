import { FastifyInstance } from 'fastify'
import { codeValidateJs, codeBundleJs, codeMinifyJs, codeMinifyCss } from './code'
export const routes = (fastify: FastifyInstance) => {
  codeValidateJs(fastify)
  codeBundleJs(fastify)
  codeMinifyJs(fastify)
  codeMinifyCss(fastify)
}
