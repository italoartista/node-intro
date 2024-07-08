import  { createServer } from 'node:http'
import { principal, sobre, contato, enviado, topo, rodape } from './template.js'
import { URLSearchParams } from 'node:url'
import url from 'node:url'

const server = createServer((req, res) => {
  const { method } = req
  const path = req.url
 
  if(path === '/' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(topo+principal+rodape)
  } else if(path === '/sobre' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(sobre)
  } else if(path ==='/contato' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    res.write(contato)
  } else if(path==='/submit' && method === 'POST') {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
   
    let body =''
    req.on('data', chunk => {
        body += chunk.toString()

    }).on('end', ()=> { 
        const data = new URLSearchParams(body)
        console.log(Object.fromEntries(data))
    })
  }

})


server.listen(3000,'localhost', () => {
  console.log('Server is running on port 3000')
})