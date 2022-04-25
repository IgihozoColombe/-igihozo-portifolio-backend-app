// server.js
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

const router = jsonServer.router(path.join(__dirname, '../../mockdata/db.json'))


server.use(middlewares)
server.use(router)
server.listen(5500, () => {
  console.log('JSON Server is running')
})
