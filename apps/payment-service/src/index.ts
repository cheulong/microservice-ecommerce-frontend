import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const start = async () => {
  try {
    await serve({
      fetch: app.fetch,
      port: 8002,
    })
    console.log('Payment Service is running on port 8002')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()