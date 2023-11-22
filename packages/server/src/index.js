import process from 'node:process'
import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import os from 'node:os'
import https from 'node:https'
import Koa from 'koa'
import sslify from 'koa-sslify'

// create app
const app = new Koa()

app.use((ctx) => {
  ctx.body = `hello world from ${ctx.request.url}`
})

if (process.env.NODE_ENV === 'development') {
  app.use(sslify.default({
    port: process.env.PORT,
  }))

  const options = {
    key: readFileSync(resolve(os.homedir(), '.vite-plugin-mkcert/dev.pem')),
    cert: readFileSync(resolve(os.homedir(), '.vite-plugin-mkcert/cert.pem')),
  }

  https.createServer(options, app.callback()).listen(process.env.PORT)
}
else {
  app.listen(process.env.PORT)
}
