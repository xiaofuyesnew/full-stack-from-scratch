import process from 'node:process'
import Koa from 'koa'

// create app
const app = new Koa()

// listen port 3000
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
})
