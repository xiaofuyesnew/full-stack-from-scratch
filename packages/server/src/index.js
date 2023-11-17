import process from 'node:process'
import Koa from 'koa'
import sslify from 'koa-sslify'

// create app
const app = new Koa()

app.use(sslify({
  port: process.env.PORT,
}))
