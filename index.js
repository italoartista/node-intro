import  { createServer } from 'node:http'
import { principal, sobre, contato, enviado } from './template.js'
import url from 'node:url'

const server = createServer((req, res) => {
  const { url: reqUrl, method } = req
  const { path } = url.parse(reqUrl)

  if(path === '/' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(principal)
  } else if(path === '/about' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(sobre)
  } else if(path ==='/contact' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(contato)
  } else if(path==='/submit' && method === 'POST') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(enviado)
    res.on('data', data => {
      console.log(data.toString())
    })
  }

})


server.listen(3000,'localhost', () => {
  console.log('Server is running on port 3000')
})