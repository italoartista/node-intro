const style = `

    <style> 

        body {
            background-color: #f0f0f0;
            font-family: Arial, sans-serif;
        }

        h1 {
            color: magenta;
        }
        ul { 
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
        }
        li { 
            float: left;
        }
        li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }

    </style>

`

const menu = `
<nav> 
<ul>
    <li><a href="/">Principal</a></li>
    <li><a href="/sobre">Sobre</a></li>
    <li><a href="/contato">Contato</a></li>
</ul>
</nav>
`
const principal = `
        <h1>Principal</h1>
        <p>Seja bem vindo a loja de computadores!!</p>

 `

const sobre = `
            <h1>Sobre</h1>
            <p>Loja com 30 anos de mercado, com os melhores produtos e preços.</p>
`

const contato = `

    <h1>Contato</h1>
    <p>Seja um consultor, coloque o nome e email, e entraremos em contato.</p>
    <form action="/submit" method="post">
        <input type="text" name="nome" placeholder="Nome">
        <input type="email" name="email" placeholder="E-mail">
        <button type="submit">Enviar</button>
    </form>
`


const topo = `
<html>
    <head>
        <title>Template</title>
        ${style}
    </head>
    <body>
    ${menu}
`

const rodape = `
    </body>
    </html>
`

const enviado = `
<html>
<head>
    <title>Template</title>
    ${style}
</head>
<body>
${menu}
    <h1>Contato</h1>
    <p>Este é um exemplo de página contato</p>
    <h1>Formulário enviado</h1>
</body>
</html>

`
export { principal, sobre, contato, enviado, topo, rodape }