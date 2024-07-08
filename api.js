
import { produtos } from './produtos.js';
import { createServer } from 'node:http';
import { URL } from 'node:url';

const porta = 3000;
const server = createServer((req, res) => {
    const { url, method } = req;

    if (url.startsWith('/produtos') && method === 'GET') {
        const parsedUrl = new URL(url, `http://${req.headers.host}`);
        const queryParams = parsedUrl.searchParams;

        res.writeHead(200, { 'Content-Type': 'application/json' });

        if (parsedUrl.pathname === '/produtos') {
            res.write(JSON.stringify(produtos));
        } else if (parsedUrl.pathname.startsWith('/produtos/query')) {
            // Exemplo de como usar um parâmetro de query string
            const id = queryParams.get('produto');
            if (id !== null && id < produtos.length) {
                console.log(`Example Param: ${id}`);
                res.write(JSON.stringify(produtos[id]));
            } else {
                res.write(JSON.stringify({ message: 'Não existem produtos com este id' }));
            }
        }

        res.end();
    }
});

server.listen(porta, 'localhost', () => {
    console.log('Servidor está rodando na porta ' + porta + ' e no host: localhost');
})