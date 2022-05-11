import Fastify from 'fastify'
import { routes } from './routes'

const fastify = Fastify({
  logger: true,
})

routes(fastify)

fastify.listen({ port: 4242 }, (err) => {
  if (err) throw err
})
